-- Migration to make Enclosed.AI work with Supabase Auth
-- Run this AFTER the existing schema

-- First, let's modify the enclosed_users table to work with Supabase Auth
-- We'll add a link to auth.users while keeping backward compatibility

-- Add auth_id column to link with Supabase auth
ALTER TABLE enclosed_users
ADD COLUMN IF NOT EXISTS auth_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;

-- Create a unique index on auth_id
CREATE UNIQUE INDEX IF NOT EXISTS idx_enclosed_users_auth_id ON enclosed_users(auth_id);

-- Update RLS policies to work with both auth and API key access
DROP POLICY IF EXISTS "Users can view own data" ON enclosed_users;
DROP POLICY IF EXISTS "Users can update own data" ON enclosed_users;

-- New policy: Users can view their own data via auth OR API key
CREATE POLICY "Users can view own data" ON enclosed_users
  FOR SELECT USING (
    auth_id = auth.uid() OR
    id::TEXT = current_setting('app.current_user_id', true)
  );

CREATE POLICY "Users can update own data" ON enclosed_users
  FOR UPDATE USING (
    auth_id = auth.uid() OR
    id::TEXT = current_setting('app.current_user_id', true)
  );

CREATE POLICY "Users can insert own data" ON enclosed_users
  FOR INSERT WITH CHECK (
    auth_id = auth.uid()
  );

-- Update campaign policies
DROP POLICY IF EXISTS "Users can manage own campaigns" ON enclosed_campaigns;
CREATE POLICY "Users can manage own campaigns" ON enclosed_campaigns
  FOR ALL USING (
    user_id IN (
      SELECT id FROM enclosed_users WHERE auth_id = auth.uid()
    )
  );

-- Update recipients policies
DROP POLICY IF EXISTS "Users can manage own recipients" ON enclosed_recipients;
CREATE POLICY "Users can manage own recipients" ON enclosed_recipients
  FOR ALL USING (
    campaign_id IN (
      SELECT c.id FROM enclosed_campaigns c
      JOIN enclosed_users u ON c.user_id = u.id
      WHERE u.auth_id = auth.uid()
    )
  );

-- Update templates policies
DROP POLICY IF EXISTS "Users can manage own templates" ON enclosed_templates;
CREATE POLICY "Users can manage own templates" ON enclosed_templates
  FOR ALL USING (
    user_id IN (
      SELECT id FROM enclosed_users WHERE auth_id = auth.uid()
    ) OR is_default = true
  );

-- Update API clients policies
DROP POLICY IF EXISTS "Users can manage own API clients" ON enclosed_api_clients;
CREATE POLICY "Users can manage own API clients" ON enclosed_api_clients
  FOR ALL USING (
    user_id IN (
      SELECT id FROM enclosed_users WHERE auth_id = auth.uid()
    )
  );

-- Update credit transactions policies
CREATE POLICY IF NOT EXISTS "Users can view own credit transactions" ON credit_transactions
  FOR SELECT USING (
    user_id IN (
      SELECT id FROM enclosed_users WHERE auth_id = auth.uid()
    )
  );

-- Function to automatically create enclosed_users entry when auth user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.enclosed_users (auth_id, email, name, credits)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'name', 100) -- Start with 100 free credits
  ON CONFLICT (auth_id) DO NOTHING;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to auto-create user profile
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Grant necessary permissions
GRANT ALL ON enclosed_users TO authenticated;
GRANT ALL ON enclosed_campaigns TO authenticated;
GRANT ALL ON enclosed_recipients TO authenticated;
GRANT ALL ON enclosed_templates TO authenticated;
GRANT ALL ON enclosed_api_clients TO authenticated;
GRANT ALL ON enclosed_tracking TO authenticated;
GRANT ALL ON credit_transactions TO authenticated;

-- Create a view for easier user data access
CREATE OR REPLACE VIEW user_profile AS
SELECT
  u.id,
  u.auth_id,
  u.email,
  u.name,
  u.company,
  u.credits,
  u.credits_balance,
  u.total_pieces_sent,
  u.created_at,
  u.updated_at
FROM enclosed_users u
WHERE u.auth_id = auth.uid();

-- Grant access to the view
GRANT SELECT ON user_profile TO authenticated;

-- Success message
DO $$
BEGIN
  RAISE NOTICE 'Enclosed.AI migration completed successfully! Users can now authenticate via Supabase Auth.';
END $$;