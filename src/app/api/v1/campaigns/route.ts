import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase-server';
import { z } from 'zod';
import crypto from 'crypto';

const CreateCampaignSchema = z.object({
  name: z.string().min(1),
  offer_type: z.enum([
    'free_consultation',
    'trial_offer',
    'discount_offer',
    'exclusive_access',
    'free_audit',
    'demo_request',
    'limited_time_offer',
    'free_resource',
  ]),
  mail_type: z.enum(['letter', 'postcard_4x6', 'postcard_6x11']).optional().default('letter'),
  recipients: z.array(z.object({
    name: z.string(),
    company: z.string().optional(),
    address_line1: z.string(),
    address_line2: z.string().optional(),
    city: z.string(),
    state: z.string(),
    zip_code: z.string(),
    custom_variables: z.record(z.any()).optional(),
  })),
  variables: z.record(z.any()).optional(),
});

// Verify API key
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

  if (client) {
    // Update last used timestamp
    await supabase
      .from('enclosed_api_clients')
      .update({ last_used_at: new Date().toISOString() })
      .eq('id', client.id);
  }

  return client;
}

// GET /api/v1/campaigns - List campaigns
export async function GET(request: NextRequest) {
  try {
    const client = await verifyApiKey(request);
    if (!client) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const supabase = await createServerSupabaseClient();
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '20');
    const offset = parseInt(searchParams.get('offset') || '0');
    const status = searchParams.get('status');

    let query = supabase
      .from('enclosed_campaigns')
      .select('*', { count: 'exact' })
      .eq('user_id', client.user_id)
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (status) {
      query = query.eq('status', status);
    }

    const { data, count, error } = await query;

    if (error) throw error;

    return NextResponse.json({
      campaigns: data,
      total: count,
      limit,
      offset,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST /api/v1/campaigns - Create campaign
export async function POST(request: NextRequest) {
  try {
    const client = await verifyApiKey(request);
    if (!client) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const validatedData = CreateCampaignSchema.parse(body);

    const supabase = await createServerSupabaseClient();

    // Calculate costs
    const costPerPiece = validatedData.mail_type === 'letter' ? 0.89 :
                        validatedData.mail_type === 'postcard_4x6' ? 0.55 : 0.75;
    const totalCost = costPerPiece * validatedData.recipients.length;

    // Create campaign
    const { data: campaign, error: campaignError } = await supabase
      .from('enclosed_campaigns')
      .insert({
        user_id: client.user_id,
        name: validatedData.name,
        offer_type: validatedData.offer_type,
        mail_type: validatedData.mail_type,
        recipient_count: validatedData.recipients.length,
        cost_per_piece: costPerPiece,
        total_cost: totalCost,
        status: 'draft',
      })
      .select()
      .single();

    if (campaignError) throw campaignError;

    // Insert recipients
    const recipientData = validatedData.recipients.map(r => ({
      campaign_id: campaign.id,
      name: r.name,
      company: r.company,
      address_line1: r.address_line1,
      address_line2: r.address_line2,
      city: r.city,
      state: r.state,
      zip_code: r.zip_code,
      country: 'US',
      custom_variables: { ...r.custom_variables, ...validatedData.variables },
    }));

    const { error: recipientError } = await supabase
      .from('enclosed_recipients')
      .insert(recipientData);

    if (recipientError) throw recipientError;

    // Send webhook if configured
    if (client.webhook_url) {
      fetch(client.webhook_url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: 'campaign.created',
          campaign_id: campaign.id,
          timestamp: new Date().toISOString(),
        }),
      }).catch(console.error);
    }

    return NextResponse.json({
      id: campaign.id,
      status: campaign.status,
      recipient_count: campaign.recipient_count,
      total_cost: campaign.total_cost,
      created_at: campaign.created_at,
    }, { status: 201 });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}