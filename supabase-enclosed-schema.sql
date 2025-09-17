-- Enclosed.AI Tables (Direct Mail Marketing)
-- All tables prefixed with "enclosed_" to avoid conflicts with Enclose.AI

-- Users table for Enclosed.AI
CREATE TABLE IF NOT EXISTS enclosed_users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  company TEXT,
  api_key_hash TEXT UNIQUE,
  credits_balance DECIMAL(10,2) DEFAULT 0,
  total_pieces_sent INT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Campaigns table
CREATE TABLE IF NOT EXISTS enclosed_campaigns (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES enclosed_users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  offer_type TEXT NOT NULL CHECK (offer_type IN (
    'free_consultation',
    'trial_offer',
    'discount_offer',
    'exclusive_access',
    'free_audit',
    'demo_request',
    'limited_time_offer',
    'free_resource'
  )),
  template_id UUID,
  recipient_count INT DEFAULT 0,
  cost_per_piece DECIMAL(10,4) DEFAULT 0.75,
  total_cost DECIMAL(10,2),
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'scheduled', 'processing', 'sent', 'completed', 'failed')),
  mail_type TEXT DEFAULT 'letter' CHECK (mail_type IN ('letter', 'postcard_4x6', 'postcard_6x11')),
  scheduled_date TIMESTAMP WITH TIME ZONE,
  sent_date TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Recipients table
CREATE TABLE IF NOT EXISTS enclosed_recipients (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  campaign_id UUID REFERENCES enclosed_campaigns(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  company TEXT,
  address_line1 TEXT NOT NULL,
  address_line2 TEXT,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  zip_code TEXT NOT NULL,
  country TEXT DEFAULT 'US',
  custom_variables JSONB DEFAULT '{}',
  personalized_content TEXT,
  mail_provider_id TEXT,
  delivery_status TEXT DEFAULT 'pending',
  delivered_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Templates table for sales letters
CREATE TABLE IF NOT EXISTS enclosed_templates (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES enclosed_users(id),
  name TEXT NOT NULL,
  offer_type TEXT NOT NULL,
  content TEXT NOT NULL,
  variables JSONB DEFAULT '[]',
  is_default BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- API Clients table for Clients.AI integration
CREATE TABLE IF NOT EXISTS enclosed_api_clients (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES enclosed_users(id),
  name TEXT NOT NULL,
  api_key TEXT UNIQUE NOT NULL,
  api_key_hash TEXT UNIQUE NOT NULL,
  webhook_url TEXT,
  rate_limit INT DEFAULT 1000,
  is_active BOOLEAN DEFAULT true,
  last_used_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tracking table for mail pieces
CREATE TABLE IF NOT EXISTS enclosed_tracking (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  recipient_id UUID REFERENCES enclosed_recipients(id),
  event_type TEXT NOT NULL,
  event_data JSONB,
  occurred_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_enclosed_campaigns_user ON enclosed_campaigns(user_id);
CREATE INDEX IF NOT EXISTS idx_enclosed_recipients_campaign ON enclosed_recipients(campaign_id);
CREATE INDEX IF NOT EXISTS idx_enclosed_tracking_recipient ON enclosed_tracking(recipient_id);
CREATE INDEX IF NOT EXISTS idx_enclosed_api_clients_hash ON enclosed_api_clients(api_key_hash);

-- Create bucket for CSV uploads and templates
INSERT INTO storage.buckets (id, name, public)
VALUES ('enclosed-uploads', 'enclosed-uploads', false)
ON CONFLICT (id) DO NOTHING;

-- RLS Policies
ALTER TABLE enclosed_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE enclosed_campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE enclosed_recipients ENABLE ROW LEVEL SECURITY;
ALTER TABLE enclosed_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE enclosed_api_clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE enclosed_tracking ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can view own data" ON enclosed_users;
DROP POLICY IF EXISTS "Users can manage own campaigns" ON enclosed_campaigns;
DROP POLICY IF EXISTS "Users can manage own recipients" ON enclosed_recipients;
DROP POLICY IF EXISTS "Users can manage own templates" ON enclosed_templates;
DROP POLICY IF EXISTS "Users can manage own API clients" ON enclosed_api_clients;

-- Policies for user access
CREATE POLICY "Users can view own data" ON enclosed_users
  FOR SELECT USING (auth.uid()::TEXT = id::TEXT);

CREATE POLICY "Users can update own data" ON enclosed_users
  FOR UPDATE USING (auth.uid()::TEXT = id::TEXT);

CREATE POLICY "Users can manage own campaigns" ON enclosed_campaigns
  FOR ALL USING (user_id = auth.uid());

CREATE POLICY "Users can manage own recipients" ON enclosed_recipients
  FOR ALL USING (
    campaign_id IN (
      SELECT id FROM enclosed_campaigns WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users can manage own templates" ON enclosed_templates
  FOR ALL USING (user_id = auth.uid() OR is_default = true);

CREATE POLICY "Users can manage own API clients" ON enclosed_api_clients
  FOR ALL USING (user_id = auth.uid());
-- Credit transactions table
CREATE TABLE IF NOT EXISTS credit_transactions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES enclosed_users(id) ON DELETE CASCADE,
  credits INT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('purchase', 'usage', 'refund', 'bonus')),
  package_id TEXT,
  stripe_session_id TEXT,
  amount DECIMAL(10,2),
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add credits column to users table
ALTER TABLE enclosed_users ADD COLUMN IF NOT EXISTS credits INT DEFAULT 0;

-- Index for faster queries
CREATE INDEX IF NOT EXISTS idx_credit_transactions_user_id ON credit_transactions(user_id);
CREATE INDEX IF NOT EXISTS idx_credit_transactions_created_at ON credit_transactions(created_at);
