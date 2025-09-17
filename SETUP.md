# Enclosed.AI Setup Guide

## Quick Start

### 1. Database Setup (Supabase)

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Navigate to your project: `jwimrbdqsqwjobdninhi`
3. Go to SQL Editor
4. Copy and paste the entire contents of `supabase-enclosed-schema.sql`
5. Execute the SQL to create all tables (with enclosed_ prefix)

### 2. API Keys Required

#### Lob.com (Mail Provider)
1. Sign up at [lob.com](https://dashboard.lob.com)
2. Get test keys for development
3. Add to `.env.local`:
   ```
   LOB_API_KEY=test_your_key_here
   ```

#### OpenAI (AI Generation)
1. Get API key from [OpenAI Platform](https://platform.openai.com)
2. Add to `.env.local`:
   ```
   OPENAI_API_KEY=sk_your_key_here
   ```

#### Stripe (Optional - for payments)
1. Get keys from [Stripe Dashboard](https://dashboard.stripe.com)
2. Add to `.env.local`:
   ```
   STRIPE_SECRET_KEY=sk_test_your_key_here
   STRIPE_PUBLIC_KEY=pk_test_your_key_here
   ```

### 3. Start Development

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Testing Checklist

### Web Interface
- [ ] User registration works
- [ ] CSV upload accepts files
- [ ] Column mapping suggests correctly
- [ ] All 8 offers are selectable
- [ ] Campaign flow completes
- [ ] Letter preview displays correctly
- [ ] Cost calculation is accurate

### API Integration
- [ ] API key generation works
- [ ] API key authentication works
- [ ] Campaign creation via API
- [ ] Campaign sending via API
- [ ] Webhook notifications work

### Lob Integration
- [ ] Test mode generates letters
- [ ] Address validation works
- [ ] Mail sending API calls succeed (test mode)

## Next Steps

1. **Get Lob API Keys**: Required for mail sending
2. **Set OpenAI Key**: Required for letter generation
3. **Run Database Schema**: Execute `supabase-enclosed-schema.sql`
4. **Test Campaign Flow**: Create test campaign with sample data
5. **API Testing**: Test Clients.AI integration endpoints
6. **Deploy**: Deploy to Vercel when ready

## Key Files

- `supabase-enclosed-schema.sql` - Database setup
- `.env.local.example` - Environment variables template
- `README.md` - Full documentation
- `src/app/api/v1/` - API endpoints for Clients.AI
- `src/types/index.ts` - 8 stock offers configuration

## Troubleshooting

### Build Errors
- Check all environment variables are set
- Ensure Supabase credentials are correct
- Verify Node.js version (18+)

### Database Issues
- Ensure all tables have `enclosed_` prefix
- Check RLS policies are enabled
- Verify foreign key relationships

### API Errors
- Check authentication headers
- Verify request body format matches examples
- Check Supabase table permissions