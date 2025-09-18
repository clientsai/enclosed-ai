import { NextRequest, NextResponse } from 'next/server';
import { createSubscriptionSession, createAddonSession, SUBSCRIPTION_PLANS, ADDON_PACKAGES } from '@/lib/stripe';
import { createServerSupabaseClient } from '@/lib/supabase-server';

export async function POST(request: NextRequest) {
  try {
    const { packageId } = await request.json();

    // Validate package
    if (!packageId || (!(packageId in SUBSCRIPTION_PLANS) && !(packageId in ADDON_PACKAGES))) {
      return NextResponse.json(
        { error: 'Invalid package selected' },
        { status: 400 }
      );
    }

    // Get user session
    const supabase = await createServerSupabaseClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    // Create checkout session
    const origin = request.headers.get('origin') || 'http://localhost:3000';
    
    let session;
    if (packageId in SUBSCRIPTION_PLANS) {
      session = await createSubscriptionSession(
        user.id,
        packageId as keyof typeof SUBSCRIPTION_PLANS,
        `${origin}/billing?success=true`,
        `${origin}/billing?canceled=true`
      );
    } else {
      session = await createAddonSession(
        user.id,
        packageId as keyof typeof ADDON_PACKAGES,
        `${origin}/billing?success=true`,
        `${origin}/billing?canceled=true`
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}