# Enclosed AI - Complete Marketing Platform

A comprehensive AI-powered marketing platform with Stripe integration, authentication, campaign management, and lead processing capabilities.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account
- Stripe account
- Google OAuth credentials

### 1. Clone and Install
```bash
git clone https://github.com/successxx/enclosed-ai.git
cd enclosed-ai
npm install
```

### 2. Environment Setup
Create a `.env.local` file in the root directory:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Email Configuration (Resend)
RESEND_API_KEY=re_your_resend_api_key

# Lob API (for letter sending)
LOB_API_KEY=live_your_lob_api_key

# App Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
```

### 3. Database Setup
Run the Supabase migration:
```bash
# Import the schema into your Supabase project
# Use the supabase-schema.sql file in the root directory
```

### 4. Start Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 🏗️ Architecture

### Frontend
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **React Hook Form** for form handling
- **Zustand** for state management

### Backend
- **Next.js API Routes** for backend logic
- **Supabase** for database and authentication
- **Stripe** for payment processing
- **Resend** for email delivery
- **Lob** for physical mail

### Key Features
- 🔐 **Authentication**: Google OAuth integration
- 💳 **Payments**: Stripe subscription management
- 📧 **Email Campaigns**: AI-powered email personalization
- 📮 **Physical Mail**: Integration with Lob for letter sending
- 📊 **Analytics**: Campaign performance tracking
- 👥 **Lead Management**: CSV import and processing
- 🎨 **Templates**: Pre-built email and letter templates

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── campaigns/         # Campaign management
│   ├── dashboard/         # User dashboard
│   └── ...
├── components/            # Reusable React components
├── lib/                   # Utility functions and integrations
├── types/                 # TypeScript type definitions
└── styles/               # Global styles and CSS tokens
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/google` - Google OAuth login
- `GET /api/auth/google/callback` - OAuth callback

### Campaigns
- `GET /api/v1/campaigns` - List campaigns
- `POST /api/v1/campaigns` - Create campaign
- `GET /api/v1/campaigns/[id]` - Get campaign details
- `POST /api/v1/campaigns/[id]/send` - Send campaign

### Payments
- `POST /api/stripe/create-checkout` - Create Stripe checkout session
- `POST /api/stripe/webhook` - Handle Stripe webhooks

### Leads
- `POST /api/leads/import` - Import leads from CSV

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main

### Manual Deployment
1. Build the application: `npm run build`
2. Start production server: `npm start`
3. Configure your hosting provider

## 🔒 Security

- Environment variables for sensitive data
- CSRF protection on API routes
- Input validation and sanitization
- Secure authentication with NextAuth.js
- Stripe webhook signature verification

## 📊 Monitoring

- Built-in error handling and logging
- Stripe webhook monitoring
- Email delivery tracking
- Campaign performance analytics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, email support@enclosed-ai.com or create an issue in this repository.

---

**Built with ❤️ by the Enclosed AI team**