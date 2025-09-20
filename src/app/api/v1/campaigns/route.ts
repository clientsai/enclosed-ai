import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase-server';
import { z } from 'zod';
import crypto from 'crypto';
import { createApiError, ErrorCode, withErrorHandling } from '@/lib/error-handler';
import { validateApiKey } from '@/lib/auth-middleware';
import { log } from '@/lib/logger';

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
    custom_variables: z.record(z.unknown()).optional(),
  })),
  variables: z.record(z.unknown()).optional(),
});

// Verify API key
async function verifyApiKey(request: NextRequest) {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw createApiError(
      ErrorCode.UNAUTHORIZED,
      'Missing or invalid authorization header',
      401
    );
  }

  const apiKey = authHeader.substring(7);
  if (!apiKey) {
    throw createApiError(
      ErrorCode.UNAUTHORIZED,
      'API key is required',
      401
    );
  }

  const apiKeyHash = crypto.createHash('sha256').update(apiKey).digest('hex');

  const supabase = await createServerSupabaseClient();
  const { data: client, error } = await supabase
    .from('enclosed_api_clients')
    .select('*, user:enclosed_users(*)')
    .eq('api_key_hash', apiKeyHash)
    .eq('is_active', true)
    .single();

  if (error || !client) {
    throw createApiError(
      ErrorCode.UNAUTHORIZED,
      'Invalid API key',
      401
    );
  }

  // Update last used timestamp
  const { error: updateError } = await supabase
    .from('enclosed_api_clients')
    .update({ last_used_at: new Date().toISOString() })
    .eq('id', client.id);

  if (updateError) {
    log.warn('Failed to update API client last_used_at', { error: updateError.message });
  }

  return client;
}

// GET /api/v1/campaigns - List campaigns
export const GET = withErrorHandling(async (request: NextRequest) => {
  const client = await verifyApiKey(request);

  const supabase = await createServerSupabaseClient();
  const { searchParams } = new URL(request.url);

  // Validate query parameters
  const limit = Math.min(parseInt(searchParams.get('limit') || '20'), 100); // Max 100
  const offset = Math.max(parseInt(searchParams.get('offset') || '0'), 0);
  const status = searchParams.get('status');

  // Validate status parameter if provided
  if (status && !['draft', 'scheduled', 'processing', 'sent', 'completed', 'failed'].includes(status)) {
    throw createApiError(
      ErrorCode.VALIDATION_ERROR,
      'Invalid status parameter',
      400
    );
  }

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

  if (error) {
    throw createApiError(
      ErrorCode.DATABASE_ERROR,
      'Failed to fetch campaigns',
      500,
      error
    );
  }

  return NextResponse.json({
    campaigns: data || [],
    total: count || 0,
    limit,
    offset,
  });
});

// POST /api/v1/campaigns - Create campaign
export const POST = withErrorHandling(async (request: NextRequest) => {
  const client = await verifyApiKey(request);

  const body = await request.json();
  const validatedData = CreateCampaignSchema.parse(body);

  // Validate recipients count
  if (validatedData.recipients.length === 0) {
    throw createApiError(
      ErrorCode.VALIDATION_ERROR,
      'At least one recipient is required',
      400
    );
  }

  if (validatedData.recipients.length > 10000) {
    throw createApiError(
      ErrorCode.VALIDATION_ERROR,
      'Maximum 10,000 recipients allowed per campaign',
      400
    );
  }

  const supabase = await createServerSupabaseClient();

  // Check user credits
  const { data: user, error: userError } = await supabase
    .from('enclosed_users')
    .select('credits, credits_balance')
    .eq('id', client.user_id)
    .single();

  if (userError) {
    throw createApiError(
      ErrorCode.DATABASE_ERROR,
      'Failed to fetch user data',
      500,
      userError
    );
  }

  // Calculate costs
  const costPerPiece = validatedData.mail_type === 'letter' ? 0.89 :
                      validatedData.mail_type === 'postcard_4x6' ? 0.55 : 0.75;
  const totalCost = costPerPiece * validatedData.recipients.length;

  // Check if user has sufficient credits
  if ((user.credits || 0) < validatedData.recipients.length) {
    throw createApiError(
      ErrorCode.INSUFFICIENT_CREDITS,
      `Insufficient credits. Required: ${validatedData.recipients.length}, Available: ${user.credits || 0}`,
      402
    );
  }

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

  if (campaignError) {
    throw createApiError(
      ErrorCode.DATABASE_ERROR,
      'Failed to create campaign',
      500,
      campaignError
    );
  }

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

  if (recipientError) {
    // Cleanup - delete the campaign if recipient insertion fails
    await supabase
      .from('enclosed_campaigns')
      .delete()
      .eq('id', campaign.id);

    throw createApiError(
      ErrorCode.DATABASE_ERROR,
      'Failed to create recipients',
      500,
      recipientError
    );
  }

  // Send webhook if configured (fire and forget)
  if (client.webhook_url) {
    fetch(client.webhook_url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event: 'campaign.created',
        campaign_id: campaign.id,
        timestamp: new Date().toISOString(),
      }),
    }).catch(error => {
      console.error('Webhook delivery failed:', error);
    });
  }

  return NextResponse.json({
    id: campaign.id,
    status: campaign.status,
    recipient_count: campaign.recipient_count,
    total_cost: campaign.total_cost,
    created_at: campaign.created_at,
  }, { status: 201 });
});