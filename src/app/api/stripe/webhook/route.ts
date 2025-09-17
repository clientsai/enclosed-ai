import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { handleWebhook } from '@/lib/stripe';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = (await headers()).get('stripe-signature')!;

  let event;

  try {
    event = await handleWebhook(body, signature);
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook signature verification failed' },
      { status: 400 }
    );
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as any;

      // Add credits to user account
      const { userId, credits, packageId } = session.metadata;

      // Update user credits in database
      const { data: user, error: fetchError } = await supabase
        .from('users')
        .select('credits')
        .eq('id', userId)
        .single();

      if (fetchError) {
        console.error('Error fetching user:', fetchError);
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }

      const currentCredits = user?.credits || 0;
      const newCredits = currentCredits + parseInt(credits);

      const { error: updateError } = await supabase
        .from('users')
        .update({ credits: newCredits })
        .eq('id', userId);

      if (updateError) {
        console.error('Error updating credits:', updateError);
        return NextResponse.json({ error: 'Failed to update credits' }, { status: 500 });
      }

      // Record the transaction
      const { error: transactionError } = await supabase
        .from('credit_transactions')
        .insert({
          user_id: userId,
          credits: parseInt(credits),
          type: 'purchase',
          package_id: packageId,
          stripe_session_id: session.id,
          amount: session.amount_total / 100, // Convert from cents
        });

      if (transactionError) {
        console.error('Error recording transaction:', transactionError);
      }

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