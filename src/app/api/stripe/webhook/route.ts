import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { handleWebhook } from '@/lib/stripe';
import { supabase } from '@/lib/supabase';
import { sendEmail, sendLowCreditWarning } from '@/lib/email';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-08-27.basil',
});

export async function POST(request: NextRequest) {
  if (!supabase) {
    return NextResponse.json(
      { error: 'Database not configured' },
      { status: 500 }
    );
  }
  const body = await request.text();
  const signature = (await headers()).get('stripe-signature')!;

  let event;

  try {
    event = await handleWebhook(body, signature);
  } catch (error) {
    // Log webhook error securely without exposing details
    return NextResponse.json(
      { error: 'Webhook signature verification failed' },
      { status: 400 }
    );
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session;
      const { customer_email, metadata, mode } = session;

      if (mode === 'subscription') {
        // Handle subscription creation
        const subscriptionId = session.subscription as string;
        const subscription = await stripe.subscriptions.retrieve(subscriptionId);
        const productId = subscription.items.data[0].price.product as string;

        let monthlyCredits = 0;
        let planName = '';

        if (productId.includes('T4WditEo3aU99H')) {
          monthlyCredits = 50;
          planName = 'Starter';
        } else if (productId.includes('T4Wj2uFSmQFNon')) {
          monthlyCredits = 100;
          planName = 'Premium';
        }

        // Update user subscription
        if (metadata?.userId) {
          await supabase
            .from('enclosed_users')
            .update({
              stripe_customer_id: session.customer as string,
              stripe_subscription_id: subscriptionId,
              subscription_plan: planName.toLowerCase(),
              subscription_status: 'active',
              monthly_letter_credits: monthlyCredits,
              letter_credits_remaining: monthlyCredits,
            })
            .eq('id', metadata.userId);

          // Send confirmation email
          if (customer_email) {
            await sendEmail({
              to: customer_email,
              subject: `Welcome to Enclosed.AI ${planName} Plan!`,
              html: `<h2>Subscription Activated</h2><p>You have ${monthlyCredits} letter credits available.</p>`,
            });
          }
        }
      } else {
        // Handle one-time payment (add-on bundle)
        const { userId, letters } = metadata || {};
        if (userId && letters) {
          const { data: user } = await supabase
            .from('enclosed_users')
            .select('addon_credits')
            .eq('id', userId)
            .single();

          await supabase
            .from('enclosed_users')
            .update({
              addon_credits: (user?.addon_credits || 0) + parseInt(letters),
            })
            .eq('id', userId);
        }
      }

      // Additional processing for one-time payments can be added here

      break;
    }

    case 'customer.subscription.created':
    case 'customer.subscription.updated': {
      // Handle subscription events if needed
      console.log('Subscription event:', event.type);
      break;
    }

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}

// Disable body parsing, need raw body for webhook signature verification
export const config = {
  api: {
    bodyParser: false,
  },
};