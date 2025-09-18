import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-08-27.basil',
});

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const PRICES = {
  starter: {
    priceId: 'price_1S8Na9CXLbEz3Hk6VkoBMzvX', // $99.99/mo
    productId: 'prod_T4WditEo3aU99H',
    mode: 'subscription' as const,
  },
  premium: {
    priceId: 'price_1S8NfrCXLbEz3Hk6oU04DDaa', // $299.99/mo
    productId: 'prod_T4Wj2uFSmQFNon',
    mode: 'subscription' as const,
  },
  addon: {
    priceId: 'price_1S8NhRCXLbEz3Hk6YZXjkAgY', // $200 one-time
    productId: 'prod_T4WkRtBnpuvZYE',
    mode: 'payment' as const,
  },
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { priceId, mode, metadata, userId } = body;

    // Get user from session or auth
    let customerEmail = metadata?.email;

    if (userId) {
      const { data: user } = await supabase
        .from('users')
        .select('email')
        .eq('id', userId)
        .single();

      if (user) {
        customerEmail = user.email;
      }
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: mode || 'subscription',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/billing?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing?canceled=true`,
      customer_email: customerEmail,
      metadata: {
        ...metadata,
        userId: userId || '',
      },
      subscription_data: mode === 'subscription' ? {
        metadata: {
          ...metadata,
          userId: userId || '',
        },
      } : undefined,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}