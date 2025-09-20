import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase-server';
import { sendMailPiece } from '@/lib/lob-client';
import { generateSalesLetter, generateHTMLLetter } from '@/lib/letter-generator';
import crypto from 'crypto';

async function verifyApiKey(request: NextRequest) {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }

  const apiKey = authHeader.substring(7);
  const apiKeyHash = crypto.createHash('sha256').update(apiKey).digest('hex');

  const supabase = await createServerSupabaseClient();
  const { data: client } = await supabase
    .from('enclosed_api_clients')
    .select('*, user:enclosed_users(*)')
    .eq('api_key_hash', apiKeyHash)
    .eq('is_active', true)
    .single();

  return client;
}

// POST /api/v1/campaigns/:id/send - Send campaign
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const client = await verifyApiKey(request);
    if (!client) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { id } = await params;
    const body = await request.json();
    const { test_mode = false, scheduled_date } = body;

    const supabase = await createServerSupabaseClient();

    // Get campaign details
    const { data: campaign, error: campaignError } = await supabase
      .from('enclosed_campaigns')
      .select('*')
      .eq('id', id)
      .eq('user_id', client.user_id)
      .single();

    if (campaignError || !campaign) {
      return NextResponse.json(
        { error: 'Campaign not found' },
        { status: 404 }
      );
    }

    if (campaign.status !== 'draft') {
      return NextResponse.json(
        { error: 'Campaign has already been sent or is processing' },
        { status: 400 }
      );
    }

    // Check user balance
    const { data: user } = await supabase
      .from('enclosed_users')
      .select('credits_balance, total_pieces_sent')
      .eq('id', client.user_id)
      .single();

    if (!user || user.credits_balance < campaign.total_cost) {
      return NextResponse.json(
        { error: 'Insufficient credits balance' },
        { status: 400 }
      );
    }

    // If scheduled, update status and return
    if (scheduled_date) {
      await supabase
        .from('enclosed_campaigns')
        .update({
          status: 'scheduled',
          scheduled_date: scheduled_date,
        })
        .eq('id', id);

      return NextResponse.json({
        message: 'Campaign scheduled successfully',
        scheduled_date,
      });
    }

    // Update campaign status to processing
    await supabase
      .from('enclosed_campaigns')
      .update({ status: 'processing' })
      .eq('id', id);

    // Get recipients
    const { data: recipients, error: recipientsError } = await supabase
      .from('enclosed_recipients')
      .select('*')
      .eq('campaign_id', id);

    if (recipientsError || !recipients || recipients.length === 0) {
      throw new Error('No recipients found for campaign');
    }

    // Process sending in batches
    const batchSize = 10;
    let successCount = 0;
    let failCount = 0;
    const failedRecipients: string[] = [];

    for (let i = 0; i < recipients.length; i += batchSize) {
      const batch = recipients.slice(i, i + batchSize);

      await Promise.all(
        batch.map(async (recipient) => {
          try {
            // Generate personalized letter
            const letterContent = await generateSalesLetter(
              recipient,
              campaign.offer_type,
              recipient.custom_variables
            );

            const htmlContent = generateHTMLLetter(letterContent);

            // Store personalized content
            await supabase
              .from('enclosed_recipients')
              .update({ personalized_content: letterContent })
              .eq('id', recipient.id);

            if (!test_mode) {
              // Send via Lob
              const result = await sendMailPiece(
                recipient,
                htmlContent,
                campaign.mail_type
              );

              if (result.success) {
                await supabase
                  .from('enclosed_recipients')
                  .update({
                    mail_provider_id: result.id,
                    delivery_status: 'sent',
                  })
                  .eq('id', recipient.id);

                // Track event
                await supabase
                  .from('enclosed_tracking')
                  .insert({
                    recipient_id: recipient.id,
                    event_type: 'sent',
                    event_data: { provider_id: result.id },
                  });

                successCount++;
              } else {
                failCount++;
                failedRecipients.push(recipient.name);
              }
            } else {
              // Test mode - just mark as sent
              await supabase
                .from('enclosed_recipients')
                .update({
                  mail_provider_id: `test_${Date.now()}`,
                  delivery_status: 'sent',
                })
                .eq('id', recipient.id);

              successCount++;
            }
          } catch (error) {
            console.error(`Failed to send to ${recipient.name}:`, error);
            failCount++;
            failedRecipients.push(recipient.name);
          }
        })
      );
    }

    // Update campaign status
    const finalStatus = failCount === 0 ? 'completed' :
                       successCount === 0 ? 'failed' : 'completed';

    await supabase
      .from('enclosed_campaigns')
      .update({
        status: finalStatus,
        sent_date: new Date().toISOString(),
      })
      .eq('id', id);

    // Deduct credits from user balance (only for successful sends)
    const costPerPiece = campaign.cost_per_piece;
    const totalDeduction = successCount * costPerPiece;

    await supabase
      .from('enclosed_users')
      .update({
        credits_balance: user.credits_balance - totalDeduction,
        total_pieces_sent: (user.total_pieces_sent || 0) + successCount,
      })
      .eq('id', client.user_id);

    // Send webhook
    if (client.webhook_url) {
      fetch(client.webhook_url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: 'campaign.sent',
          campaign_id: campaign.id,
          success_count: successCount,
          fail_count: failCount,
          timestamp: new Date().toISOString(),
        }),
      }).catch(console.error);
    }

    return NextResponse.json({
      message: test_mode ? 'Campaign test completed' : 'Campaign sent successfully',
      success_count: successCount,
      fail_count: failCount,
      failed_recipients: failedRecipients.length > 0 ? failedRecipients : undefined,
      total_cost: totalDeduction,
    });
  } catch (error: any) {
    console.error('Campaign send error:', error);

    // Update campaign status to failed
    const supabase = await createServerSupabaseClient();
    const { id } = await params;
    await supabase
      .from('enclosed_campaigns')
      .update({ status: 'failed' })
      .eq('id', id);

    return NextResponse.json(
      { error: error.message || 'Failed to send campaign' },
      { status: 500 }
    );
  }
}