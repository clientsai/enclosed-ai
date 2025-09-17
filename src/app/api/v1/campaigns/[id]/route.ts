import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase-server';
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

// GET /api/v1/campaigns/:id - Get campaign details
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const client = await verifyApiKey(request);
    if (!client) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const supabase = await createServerSupabaseClient();
    const { data: campaign, error } = await supabase
      .from('enclosed_campaigns')
      .select(`
        *,
        recipients:enclosed_recipients(count)
      `)
      .eq('id', params.id)
      .eq('user_id', client.user_id)
      .single();

    if (error || !campaign) {
      return NextResponse.json(
        { error: 'Campaign not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(campaign);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}

// PATCH /api/v1/campaigns/:id - Update campaign
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const client = await verifyApiKey(request);
    if (!client) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const supabase = await createServerSupabaseClient();

    // Only allow updating certain fields
    const allowedFields = ['name', 'scheduled_date', 'status'];
    const updates: any = {};

    for (const field of allowedFields) {
      if (body[field] !== undefined) {
        updates[field] = body[field];
      }
    }

    const { data: campaign, error } = await supabase
      .from('enclosed_campaigns')
      .update(updates)
      .eq('id', params.id)
      .eq('user_id', client.user_id)
      .select()
      .single();

    if (error || !campaign) {
      return NextResponse.json(
        { error: 'Campaign not found or update failed' },
        { status: 404 }
      );
    }

    return NextResponse.json(campaign);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE /api/v1/campaigns/:id - Delete campaign
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const client = await verifyApiKey(request);
    if (!client) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const supabase = await createServerSupabaseClient();

    // Only allow deleting draft campaigns
    const { data: campaign } = await supabase
      .from('enclosed_campaigns')
      .select('status')
      .eq('id', params.id)
      .eq('user_id', client.user_id)
      .single();

    if (!campaign) {
      return NextResponse.json(
        { error: 'Campaign not found' },
        { status: 404 }
      );
    }

    if (campaign.status !== 'draft') {
      return NextResponse.json(
        { error: 'Can only delete draft campaigns' },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from('enclosed_campaigns')
      .delete()
      .eq('id', params.id)
      .eq('user_id', client.user_id);

    if (error) throw error;

    return NextResponse.json(
      { message: 'Campaign deleted successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}