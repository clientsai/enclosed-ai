import Stripe from 'stripe';

// Initialize Stripe with the secret key (handle build time when env vars might not be set)
export const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2024-12-18.acacia',
      typescript: true,
    })
  : null as any;

// Credit package configurations (similar to Scribeless model)
export const CREDIT_PACKAGES = {
  starter: {
    id: 'credits_starter',
    name: 'Starter Pack',
    credits: 100,
    price: 99, // $0.99 per credit
    stripePriceId: process.env.STRIPE_PRICE_STARTER!,
  },
  professional: {
    id: 'credits_professional',
    name: 'Professional Pack',
    credits: 500,
    price: 449, // $0.90 per credit (10% discount)
    stripePriceId: process.env.STRIPE_PRICE_PROFESSIONAL!,
  },
  business: {
    id: 'credits_business',
    name: 'Business Pack',
    credits: 1500,
    price: 1199, // $0.80 per credit (20% discount)
    stripePriceId: process.env.STRIPE_PRICE_BUSINESS!,
  },
  enterprise: {
    id: 'credits_enterprise',
    name: 'Enterprise Pack',
    credits: 5000,
    price: 3499, // $0.70 per credit (30% discount)
    stripePriceId: process.env.STRIPE_PRICE_ENTERPRISE!,
  },
};

// Email send pricing (credits per email)
export const EMAIL_CREDITS = {
  simple: 1, // Basic email
  personalized: 2, // AI-personalized email
  campaign: 3, // Full campaign email with analytics
};

export async function createCheckoutSession(
  userId: string,
  packageId: keyof typeof CREDIT_PACKAGES,
  successUrl: string,
  cancelUrl: string
) {
  if (!stripe) {
    throw new Error('Stripe is not configured');
  }

  const creditPackage = CREDIT_PACKAGES[packageId];

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price: creditPackage.stripePriceId,
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: successUrl,
    cancel_url: cancelUrl,
    metadata: {
      userId,
      credits: creditPackage.credits.toString(),
      packageId,
    },
  });

  return session;
}

export async function handleWebhook(
  payload: string | Buffer,
  signature: string
): Promise<Stripe.Event> {
  if (!stripe) {
    throw new Error('Stripe is not configured');
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

  try {
    const event = stripe.webhooks.constructEvent(
      payload,
      signature,
      webhookSecret
    );
    return event;
  } catch (err) {
    throw new Error(`Webhook signature verification failed: ${err}`);
  }
}

export async function createCustomer(
  email: string,
  name?: string
): Promise<Stripe.Customer> {
  if (!stripe) {
    throw new Error('Stripe is not configured');
  }

  const customer = await stripe.customers.create({
    email,
    name,
    metadata: {
      platform: 'enclosed-ai',
    },
  });

  return customer;
}

export async function getCustomerByEmail(
  email: string
): Promise<Stripe.Customer | null> {
  if (!stripe) {
    throw new Error('Stripe is not configured');
  }

  const customers = await stripe.customers.list({
    email,
    limit: 1,
  });

  return customers.data[0] || null;
}