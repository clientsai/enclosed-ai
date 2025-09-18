# 🚀 Deployment Guide - Enclosed AI

This guide will help you deploy Enclosed AI to production with zero configuration errors.

## 📋 Prerequisites

Before deploying, ensure you have:

- [ ] GitHub account
- [ ] Vercel account (recommended) or other hosting provider
- [ ] Supabase account and project
- [ ] Stripe account with API keys
- [ ] Google Cloud Console project for OAuth
- [ ] Resend account for email delivery
- [ ] Lob account for physical mail (optional)

## 🔧 Environment Setup

### 1. Supabase Setup

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Go to Settings > API to get your keys
3. Run the SQL schema from `supabase-schema.sql` in your Supabase SQL editor
4. Enable Row Level Security (RLS) on all tables
5. Set up authentication providers in Authentication > Providers

### 2. Stripe Setup

1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get your API keys from Developers > API keys
3. Set up webhooks:
   - Endpoint URL: `https://yourdomain.com/api/stripe/webhook`
   - Events to send: `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`
4. Get your webhook signing secret

### 3. Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/google/callback` (development)
   - `https://yourdomain.com/api/auth/google/callback` (production)

### 4. Resend Setup (Email)

1. Create account at [resend.com](https://resend.com)
2. Verify your domain
3. Get your API key from API Keys section

### 5. Lob Setup (Physical Mail - Optional)

1. Create account at [lob.com](https://lob.com)
2. Get your API key from Settings > API Keys
3. Add your return address

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

1. **Connect Repository**
   ```bash
   # Push your code to GitHub first
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

3. **Configure Environment Variables**
   In Vercel dashboard, go to Settings > Environment Variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   STRIPE_SECRET_KEY=sk_live_your_stripe_secret_key
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_stripe_publishable_key
   STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   RESEND_API_KEY=re_your_resend_api_key
   LOB_API_KEY=live_your_lob_api_key
   NEXTAUTH_URL=https://yourdomain.com
   NEXTAUTH_SECRET=your_nextauth_secret
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Update your Stripe webhook URL to the new domain

### Option 2: Manual Deployment

1. **Build the Application**
   ```bash
   npm run build
   ```

2. **Start Production Server**
   ```bash
   npm start
   ```

3. **Configure Reverse Proxy** (Nginx example)
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## 🔒 Security Checklist

- [ ] All environment variables are set
- [ ] HTTPS is enabled
- [ ] Stripe webhook signature verification is working
- [ ] Google OAuth redirect URIs are correct
- [ ] Supabase RLS policies are enabled
- [ ] API keys are using production versions
- [ ] CORS is properly configured

## 🧪 Testing Deployment

1. **Test Authentication**
   - Try logging in with Google OAuth
   - Verify user is created in Supabase

2. **Test Payments**
   - Create a test subscription
   - Verify webhook is receiving events
   - Check Stripe dashboard for transactions

3. **Test Email Sending**
   - Send a test campaign
   - Verify emails are delivered

4. **Test API Endpoints**
   ```bash
   # Test health check
   curl https://yourdomain.com/api/health
   
   # Test Stripe webhook
   curl -X POST https://yourdomain.com/api/stripe/webhook
   ```

## 📊 Monitoring

### Vercel Analytics
- Built-in performance monitoring
- Real-time error tracking
- Usage analytics

### Custom Monitoring
- Set up error tracking (Sentry, LogRocket)
- Monitor API response times
- Track user engagement metrics

## 🔄 CI/CD Pipeline

### GitHub Actions Example
```yaml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run type-check
      - run: npm run lint
```

## 🚨 Troubleshooting

### Common Issues

1. **Build Failures**
   - Check TypeScript errors: `npm run type-check`
   - Fix linting issues: `npm run lint:fix`

2. **Environment Variables**
   - Verify all required variables are set
   - Check for typos in variable names
   - Ensure production vs development keys

3. **Database Connection**
   - Verify Supabase URL and keys
   - Check RLS policies
   - Test connection in Supabase dashboard

4. **Authentication Issues**
   - Verify Google OAuth configuration
   - Check redirect URIs match exactly
   - Ensure NEXTAUTH_URL is correct

### Getting Help

- Check the logs in your hosting provider
- Use browser developer tools for frontend issues
- Monitor Supabase logs for database issues
- Check Stripe webhook logs

## 📈 Performance Optimization

1. **Enable Caching**
   - Use Vercel's edge caching
   - Implement Redis for session storage
   - Cache API responses

2. **Optimize Images**
   - Use Next.js Image component
   - Implement lazy loading
   - Compress images

3. **Database Optimization**
   - Add proper indexes
   - Use connection pooling
   - Monitor query performance

## 🎉 Success!

Once deployed, your Enclosed AI platform will be live and ready to use. Users can:

- Sign up with Google OAuth
- Create and manage campaigns
- Process payments through Stripe
- Send personalized emails
- Track campaign performance
- Import and manage leads

---

**Need help?** Create an issue in the GitHub repository or contact support.