# Enclosed AI Deployment Guide

## Live Deployment
Your application has been deployed to Vercel and is accessible at:
- **Production URL**: https://enclosed-ai.vercel.app (pending configuration)
- **GitHub Repository**: https://github.com/clientsai/enclosed-ai

## Environment Variables Setup

To make your application fully functional, you need to configure the following environment variables in your Vercel dashboard:

### 1. Navigate to Vercel Dashboard
1. Go to https://vercel.com/dashboard
2. Select your "enclosed-ai" project
3. Click on "Settings" tab
4. Navigate to "Environment Variables"

### 2. Add Required Environment Variables

Add the following environment variables for Production, Preview, and Development:

#### Supabase Configuration
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

Get these from your Supabase project dashboard:
1. Go to https://supabase.com/dashboard
2. Select your project
3. Go to Settings → API
4. Copy the Project URL, Anon/Public key, and Service Role key

#### Stripe Configuration
```
STRIPE_PUBLIC_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
```

##### Setting up Stripe:
1. Go to https://dashboard.stripe.com
2. Get your API keys from the Developers → API keys section
3. Create products for each credit package:
   - Starter Pack: 100 credits for $99
   - Professional Pack: 500 credits for $449
   - Business Pack: 1500 credits for $1199
   - Enterprise Pack: 5000 credits for $3499
4. Get the price IDs and add:
```
STRIPE_PRICE_STARTER=price_xxxx
STRIPE_PRICE_PROFESSIONAL=price_xxxx
STRIPE_PRICE_BUSINESS=price_xxxx
STRIPE_PRICE_ENTERPRISE=price_xxxx
```
5. Set up webhook endpoint:
   - Go to Developers → Webhooks
   - Add endpoint: `https://your-domain.vercel.app/api/stripe/webhook`
   - Select events: `checkout.session.completed`
   - Copy the signing secret to `STRIPE_WEBHOOK_SECRET`

#### Optional Services
```
OPENAI_API_KEY=your_openai_api_key  # For AI-powered personalization
LOB_API_KEY=your_lob_api_key        # For physical mail sending
```

### 3. Database Setup

Run the SQL schema in your Supabase project:
1. Go to your Supabase dashboard
2. Navigate to SQL Editor
3. Copy and run the contents of `supabase-enclosed-schema.sql`
4. This will create all necessary tables with proper RLS policies

### 4. Custom Domain (Optional)

To add a custom domain:
1. In Vercel project settings, go to "Domains"
2. Add your domain (e.g., enclosed.ai)
3. Follow the DNS configuration instructions
4. Update `NEXT_PUBLIC_APP_URL` environment variable with your domain

## Testing Your Deployment

1. Visit your deployment URL
2. Click "Create Account" to test the authentication flow
3. Once logged in, navigate to Billing to test Stripe integration
4. Create a test campaign to verify all features work

## Local Development

To run locally with the same configuration:
1. Copy `.env.example` to `.env.local`
2. Fill in all the environment variables
3. Run `npm install`
4. Run `npm run dev`
5. Visit http://localhost:3000

## Support

For issues or questions:
- Check the deployment logs in Vercel dashboard
- Ensure all environment variables are properly configured
- Verify Supabase tables are created
- Check Stripe webhook configuration

## Current Status
✅ Code deployed to GitHub
✅ Deployed to Vercel
⏳ Awaiting environment variable configuration
⏳ Awaiting Stripe product setup
⏳ Awaiting Supabase database setup

Once you complete the environment setup, your application will be fully functional!