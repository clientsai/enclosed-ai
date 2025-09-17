# Enclosed.AI - Direct Mail Marketing Platform

A complete direct mail marketing platform powered by AI that generates personalized sales letters and sends real physical mail. This platform works as both a standalone web application AND an API service for Clients.AI integration.

## 🚀 Features

### Standalone Web Application
- **User Authentication**: Secure signup/login with Supabase Auth
- **CSV Upload**: Import recipient lists with intelligent column mapping
- **8 Stock Offers**: Pre-built offer types matching Clients.AI patterns
- **AI Letter Generation**: GPT-4 powered personalized sales letters
- **Real Mail Delivery**: Integration with Lob.com for actual mail sending
- **Campaign Tracking**: Monitor delivery status and analytics
- **Cost Calculator**: Transparent pricing with bulk discounts

### API for Clients.AI Integration
- **RESTful API**: Complete endpoints for campaign management
- **JWT & API Key Auth**: Support for both authentication methods
- **Webhook Support**: Real-time notifications for campaign events
- **Bulk Operations**: Efficient handling of large recipient lists
- **Template Management**: Custom and default letter templates

## 🛠 Technology Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Supabase Database
- **Authentication**: Supabase Auth with JWT
- **Mail Provider**: Lob.com API
- **AI Generation**: OpenAI GPT-4
- **Storage**: Supabase Storage for CSV uploads
- **Database**: PostgreSQL (Supabase)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd enclosed-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```

4. **Configure environment variables**
   ```env
   # Supabase (Shared with Enclose.AI)
   NEXT_PUBLIC_SUPABASE_URL=https://jwimrbdqsqwjobdninhi.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

   # Lob.com API Keys
   LOB_API_KEY=test_your_lob_test_key
   LOB_LIVE_KEY=live_your_lob_live_key

   # OpenAI
   OPENAI_API_KEY=sk_your_openai_key

   # Stripe (for payments)
   STRIPE_PUBLIC_KEY=pk_test_your_stripe_key
   STRIPE_SECRET_KEY=sk_test_your_stripe_key

   # App Config
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

5. **Set up the database**
   - Run the SQL schema in Supabase SQL Editor:
   ```bash
   # Copy contents of supabase-enclosed-schema.sql to Supabase SQL Editor
   ```

6. **Start the development server**
   ```bash
   npm run dev
   ```

## 🗄 Database Schema

All tables are prefixed with `enclosed_` to avoid conflicts with Enclose.AI:

- `enclosed_users` - User accounts and settings
- `enclosed_campaigns` - Mail campaigns
- `enclosed_recipients` - Campaign recipients
- `enclosed_templates` - Letter templates
- `enclosed_api_clients` - API client configurations
- `enclosed_tracking` - Mail delivery tracking

## 🎯 The 8 Stock Offers

Matching Clients.AI's offer types exactly:

1. **Free Consultation** - Personal meeting to discuss needs
2. **Trial Offer** - Try the service free for X days
3. **Discount Offer** - Special pricing for new customers
4. **Exclusive Access** - VIP or early access to products/services
5. **Free Audit** - Complimentary review of current situation
6. **Demo Request** - Product demonstration scheduling
7. **Limited Time Offer** - Urgency-based special deal
8. **Free Resource** - Valuable guide/report/tool

## 📊 Pricing Structure

- **Letters**: $0.89 base, $0.79 (500+), $0.69 (5000+)
- **Postcards 4x6**: $0.55 base, $0.48 (500+), $0.42 (5000+)
- **Postcards 6x11**: $0.75 base, $0.65 (500+), $0.58 (5000+)

Includes AI generation, printing, postage, and delivery tracking.

## 🔌 API Integration

### Authentication
```bash
# API Key (Primary method for Clients.AI)
Authorization: Bearer <api_key>
```

### Core Endpoints

#### Campaigns
```bash
GET /api/v1/campaigns              # List campaigns
POST /api/v1/campaigns             # Create campaign
GET /api/v1/campaigns/{id}         # Get campaign details
PUT /api/v1/campaigns/{id}         # Update campaign
DELETE /api/v1/campaigns/{id}      # Delete campaign
POST /api/v1/campaigns/{id}/send   # Send campaign
```

#### Templates
```bash
GET /api/v1/templates              # List templates
POST /api/v1/templates             # Create template
GET /api/v1/templates/{id}         # Get template
```

#### Recipients
```bash
POST /api/v1/recipients/bulk       # Bulk add recipients
```

### Example: Create Campaign via API
```javascript
const response = await fetch('/api/v1/campaigns', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer <jwt_token>',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Q1 Outreach',
    offer_type: 'free_consultation',
    recipients: [
      {
        name: 'John Smith',
        address_line1: '123 Main St',
        city: 'San Francisco',
        state: 'CA',
        zip_code: '94107',
        custom_variables: {
          company: 'Smith Industries',
          industry: 'Manufacturing'
        }
      }
    ]
  })
})
```

### Example: Send Campaign
```javascript
const response = await fetch(`/api/v1/campaigns/${campaignId}/send`, {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer <jwt_token>',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    test_mode: false,
    business_context: {
      companyName: 'Your Company',
      senderName: 'John Doe',
      senderTitle: 'CEO',
      phone: '(555) 123-4567',
      website: 'https://yourcompany.com',
      industry: 'Business Services',
      companyDescription: 'We help businesses grow',
      primaryGoal: 'Increase revenue',
      targetAudience: 'Small business owners',
      primaryCustomerPainPoints: 'Limited marketing budget'
    }
  })
})
```

## 🧪 Testing

### Test Mode
Use `test_mode: true` when sending campaigns to generate letters without actually mailing them:

```javascript
await fetch(`/api/v1/campaigns/${campaignId}/send`, {
  method: 'POST',
  body: JSON.stringify({ test_mode: true })
})
```

### Lob Test Environment
- Use `test_` API keys for development
- Test letters won't be physically mailed
- Full API functionality available in test mode

## 🔒 Security Features

- **Row Level Security**: All database tables have RLS enabled
- **API Rate Limiting**: Configurable rate limits per API client
- **Input Validation**: Comprehensive validation on all endpoints
- **Address Verification**: USPS address validation via Lob
- **Secure Authentication**: JWT with Supabase Auth

## 🚀 Deployment

### Vercel Deployment
1. Connect repository to Vercel
2. Set environment variables
3. Deploy

### Database Migration
Run the schema in your Supabase project:
```sql
-- Copy and paste contents of supabase-enclosed-schema.sql
```

## 🔗 Integration with Clients.AI

Enclosed.AI is designed to seamlessly integrate with Clients.AI:

1. **Matching Offer Types**: Same 8 offers with identical IDs
2. **Compatible Variables**: Supports all Clients.AI personalization variables
3. **API Response Format**: Matches Clients.AI response patterns
4. **Webhook Support**: Real-time notifications for campaign events

## 📈 Analytics & Tracking

- **Delivery Tracking**: Real-time mail delivery status
- **Response Tracking**: Monitor campaign performance
- **Cost Analytics**: Track spending and ROI
- **Bulk Discounts**: Automatic pricing tiers

## 🤝 Support

- **Documentation**: Comprehensive API docs
- **Test Environment**: Safe testing with Lob test keys
- **Error Handling**: Detailed error messages and codes
- **Monitoring**: Campaign status tracking

## 📝 License

This project is proprietary software. All rights reserved.

---

**Enclosed.AI** - Making direct mail marketing intelligent and accessible.