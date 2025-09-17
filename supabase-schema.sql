-- Enclosed.AI Database Schema
-- All tables prefixed with "enclosed_" to avoid conflicts with Enclose.AI
-- Run this in the Supabase SQL Editor

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
    'paid_consultation',
    'low_ticket_product',
    'webinar',
    'trial',
    'book_funnel',
    'demo',
    'community'
  )),
  template_id UUID,
  recipient_count INT DEFAULT 0,
  cost_per_piece DECIMAL(10,4) DEFAULT 0.75,
  total_cost DECIMAL(10,2),
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'scheduled', 'processing', 'sent', 'completed', 'failed')),
  mail_type TEXT DEFAULT 'letter' CHECK (mail_type IN ('letter', 'postcard', 'self_mailer')),
  scheduled_date TIMESTAMP WITH TIME ZONE,
  sent_date TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Recipients table
CREATE TABLE IF NOT EXISTS enclosed_recipients (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  campaign_id UUID REFERENCES enclosed_campaigns(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  address_line1 TEXT NOT NULL,
  address_line2 TEXT,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  zip_code TEXT NOT NULL,
  country TEXT DEFAULT 'US',
  custom_variables JSONB DEFAULT '{}',
  personalized_content TEXT,
  mail_provider_id TEXT, -- Lob or PostGrid ID
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
  content TEXT NOT NULL, -- Handlebars template with variables
  variables JSONB DEFAULT '[]', -- List of required variables
  is_default BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- API Clients table for Clients.AI integration
CREATE TABLE IF NOT EXISTS enclosed_api_clients (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES enclosed_users(id),
  name TEXT NOT NULL,
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
CREATE INDEX IF NOT EXISTS idx_enclosed_users_email ON enclosed_users(email);

-- Create bucket for CSV uploads and templates (only if it doesn't exist)
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
DROP POLICY IF EXISTS "Users can manage own api clients" ON enclosed_api_clients;
DROP POLICY IF EXISTS "Users can view own tracking" ON enclosed_tracking;

-- Policies for authenticated users
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
  FOR ALL USING (user_id = auth.uid() OR user_id IS NULL);

CREATE POLICY "Users can view default templates" ON enclosed_templates
  FOR SELECT USING (is_default = true OR user_id = auth.uid());

CREATE POLICY "Users can manage own api clients" ON enclosed_api_clients
  FOR ALL USING (user_id = auth.uid());

CREATE POLICY "Users can view own tracking" ON enclosed_tracking
  FOR SELECT USING (
    recipient_id IN (
      SELECT r.id FROM enclosed_recipients r
      JOIN enclosed_campaigns c ON r.campaign_id = c.id
      WHERE c.user_id = auth.uid()
    )
  );

-- Insert default templates for each offer type
INSERT INTO enclosed_templates (name, offer_type, content, variables, is_default) VALUES
('Free Consultation Template', 'free_consultation',
'Dear {{recipient_name}},

Are you struggling with {{pain_point}}? You''re not alone.

As the {{sender_title}} at {{company_name}}, I''ve helped hundreds of {{industry}} businesses overcome exactly this challenge.

I''d like to offer you a complimentary 30-minute consultation where we''ll:
• Analyze your current {{specific_area}}
• Identify the #1 obstacle holding you back
• Create a custom action plan for {{desired_outcome}}

This consultation is completely free with no strings attached. I genuinely want to help.

To schedule your free consultation, simply call {{phone}} or visit {{website}}.

Best regards,
{{sender_name}}
{{company_name}}

P.S. This offer is limited to the first 10 responses, so don''t wait.',
'["recipient_name", "pain_point", "sender_title", "company_name", "industry", "specific_area", "desired_outcome", "phone", "website", "sender_name"]'::jsonb,
true),

('Paid Consultation Template', 'paid_consultation',
'Dear {{recipient_name}},

Most {{industry}} businesses are leaving money on the table because of one critical mistake...

They''re trying to solve {{pain_point}} without expert guidance.

I''m {{sender_name}}, {{sender_title}} at {{company_name}}, and I''ve spent the last {{years_experience}} years helping businesses like yours increase {{key_metric}} by {{improvement_percentage}}.

I''m offering a limited number of Strategic Planning Sessions at just {{price}} (normally {{regular_price}}).

In this 60-minute session, we''ll:
• Conduct a comprehensive audit of your {{business_area}}
• Identify the exact gaps costing you money
• Create a step-by-step implementation plan
• Provide you with our proprietary {{framework_name}} framework

This isn''t a sales call. You''ll leave with actionable strategies you can implement immediately.

To secure your session, visit {{booking_link}} or call {{phone}}.

Sincerely,
{{sender_name}}

P.S. Only {{spots_available}} sessions available this month.',
'["recipient_name", "industry", "pain_point", "sender_name", "sender_title", "company_name", "years_experience", "key_metric", "improvement_percentage", "price", "regular_price", "business_area", "framework_name", "booking_link", "phone", "spots_available"]'::jsonb,
true),

('Trial Offer Template', 'trial',
'Dear {{recipient_name}},

What if you could {{desired_outcome}} in just {{timeframe}} without any risk?

I''m {{sender_name}} from {{company_name}}, and I want to prove that our {{product_service}} can deliver results for your {{industry}} business.

That''s why I''m offering you a {{trial_period}} trial for just {{trial_price}} (normally {{regular_price}}).

Here''s what you get:
• Full access to {{main_feature}}
• {{additional_feature_1}}
• {{additional_feature_2}}
• Direct support from our team
• {{guarantee}}

If you''re not completely satisfied, simply cancel within {{trial_period}} and pay nothing more.

But I''m confident you''ll see {{specific_result}} within the first {{result_timeframe}}.

Start your trial today at {{trial_link}} or call {{phone}}.

Best,
{{sender_name}}
{{company_name}}

P.S. This trial offer expires on {{deadline}}.',
'["recipient_name", "desired_outcome", "timeframe", "sender_name", "company_name", "product_service", "industry", "trial_period", "trial_price", "regular_price", "main_feature", "additional_feature_1", "additional_feature_2", "guarantee", "specific_result", "result_timeframe", "trial_link", "phone", "deadline"]'::jsonb,
true),

('Demo Request Template', 'demo',
'Dear {{recipient_name}},

Are you tired of {{current_problem}} eating into your profits?

{{company_name}} has developed a revolutionary {{solution_type}} that''s helped {{industry}} businesses like yours increase {{key_metric}} by {{percentage_improvement}}.

I''d like to show you exactly how it works with a personalized demo using your actual {{business_data_type}}.

In this 20-minute demo, you''ll see:
• How to eliminate {{specific_pain_point}}
• The exact process that delivers {{specific_benefit}}
• Real results from companies like {{example_company}}
• How quickly you could see {{expected_outcome}}

This isn''t a sales presentation. It''s a working session where you''ll see our system in action with your data.

Schedule your demo at {{demo_link}} or call {{phone}}.

Best regards,
{{sender_name}}
{{sender_title}}
{{company_name}}

P.S. Each demo is customized specifically for your business, so spots are limited.',
'["recipient_name", "current_problem", "company_name", "solution_type", "industry", "key_metric", "percentage_improvement", "business_data_type", "specific_pain_point", "specific_benefit", "example_company", "expected_outcome", "demo_link", "phone", "sender_name", "sender_title"]'::jsonb,
true);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger for enclosed_users updated_at
CREATE TRIGGER update_enclosed_users_updated_at
    BEFORE UPDATE ON enclosed_users
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();