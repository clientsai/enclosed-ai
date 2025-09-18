import Stripe from 'stripe';

// Initialize Stripe with the secret key (handle build time when env vars might not be set)
export const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2025-08-27.basil',
      typescript: true,
    })
  : null as any;

// Subscription plans configuration
export const SUBSCRIPTION_PLANS = {
  starter: {
    id: 'plan_starter',
    name: 'Starter',
    price: 4900, // $49 in cents
    priceId: 'price_1S8b3lCXLbEz3Hk6AFU8iErV',
    productId: 'prod_T4kYzNzqrnQgps',
    monthlyLetters: 1000,
    features: [
      '1,000 campaigns per month',
      'Basic AI personalization',
      'CSV upload & management',
      'Email support',
      'Standard integrations',
      'Campaign analytics',
    ],
  },
  pro: {
    id: 'plan_pro',
    name: 'Pro',
    price: 19900, // $199 in cents
    priceId: 'price_1S8b3wCXLbEz3Hk65nV1bCIO',
    productId: 'prod_T4kYkw2KQuSLEJ',
    monthlyLetters: -1,
    features: [
      'Unlimited campaigns',
      'Advanced AI personalization',
      'Priority processing',
      'Custom integrations',
      'API access',
      'Dedicated account manager',
      'Advanced analytics & reporting',
      'Custom branding',
    ],
  },
  enterprise: {
    id: 'plan_enterprise',
    name: 'Enterprise',
    price: 99900, // $999 in cents
    priceId: 'price_1S8b46CXLbEz3Hk6r6GydWW8',
    productId: 'prod_T4kZlMxnEXKcct',
    monthlyLetters: -1,
    features: [
      'Everything in Pro',
      'Custom AI models',
      'White-label solutions',
      'Dedicated infrastructure',
      'SLA guarantees',
      '24/7 phone support',
      'Custom contracts',
      'Compliance assistance',
    ],
  },
};

// Add-on packages
export const ADDON_PACKAGES = {
  bundle100: {
    id: 'addon_bundle100',
    name: 'Campaign Bundle',
    price: 9900, // $99.00 in cents
    priceId: 'price_1S8NhRCXLbEz3Hk6YZXjkAgY',
    productId: 'prod_T4WkRtBnpuvZYE',
    letters: 1000,
  },
};

// Campaign credit pricing
export const CAMPAIGN_CREDITS = {
  basic: 1, // Basic campaign
  personalized: 2, // AI-personalized campaign
};

export async function createSubscriptionSession(
  userId: string,
  planId: keyof typeof SUBSCRIPTION_PLANS,
  successUrl: string,
  cancelUrl: string
) {
  if (!stripe) {
    throw new Error('Stripe is not configured');
  }

  const plan = SUBSCRIPTION_PLANS[planId];

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price: plan.priceId,
        quantity: 1,
      },
    ],
    mode: 'subscription',
    success_url: successUrl,
    cancel_url: cancelUrl,
    metadata: {
      userId,
      planId,
      monthlyLetters: plan.monthlyLetters.toString(),
    },
    subscription_data: {
      metadata: {
        userId,
        planId,
        monthlyLetters: plan.monthlyLetters.toString(),
      },
    },
  });

  return session;
}

export async function createAddonSession(
  userId: string,
  addonId: keyof typeof ADDON_PACKAGES,
  successUrl: string,
  cancelUrl: string
) {
  if (!stripe) {
    throw new Error('Stripe is not configured');
  }

  const addon = ADDON_PACKAGES[addonId];

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price: addon.priceId,
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: successUrl,
    cancel_url: cancelUrl,
    metadata: {
      userId,
      addonId,
      letters: addon.letters.toString(),
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