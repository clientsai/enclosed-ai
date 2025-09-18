import Stripe from 'stripe';

// Initialize Stripe with the secret key (handle build time when env vars might not be set)
export const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2024-12-18.acacia',
      typescript: true,
    })
  : null as any;

// Subscription plans configuration
export const SUBSCRIPTION_PLANS = {
  starter: {
    id: 'plan_starter',
    name: 'Starter Plan',
    price: 9999, // $99.99 in cents
    priceId: 'price_1S8Na9CXLbEz3Hk6VkoBMzvX',
    productId: 'prod_T4WditEo3aU99H',
    monthlyLetters: 50,
    features: [
      'CSV lead upload',
      '50 direct mail letters per month',
      'Professional printing & shipping',
      'Basic templates',
      'Delivery tracking',
      'Email support',
    ],
  },
  premium: {
    id: 'plan_premium',
    name: 'Premium Plan',
    price: 29999, // $299.99 in cents
    priceId: 'price_1S8NfrCXLbEz3Hk6oU04DDaa',
    productId: 'prod_T4Wj2uFSmQFNon',
    monthlyLetters: 100,
    features: [
      'Everything in Starter',
      'AI-powered personalization',
      '100 personalized letters per month',
      'Advanced CSV column mapping',
      'Google Calendar integration',
      'Customizable tracking links',
      'Priority support',
      'Letter preview & approval',
    ],
  },
};

// Add-on packages
export const ADDON_PACKAGES = {
  bundle100: {
    id: 'addon_bundle100',
    name: 'Letter Bundle',
    price: 20000, // $200.00 in cents
    priceId: 'price_1S8NhRCXLbEz3Hk6YZXjkAgY',
    productId: 'prod_T4WkRtBnpuvZYE',
    letters: 100,
  },
};

// Letter credit pricing
export const LETTER_CREDITS = {
  basic: 1, // Basic letter
  personalized: 2, // AI-personalized letter
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