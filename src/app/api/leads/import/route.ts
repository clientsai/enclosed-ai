import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { createApiError, ErrorCode, withErrorHandling } from '@/lib/error-handler';
import { requireAuth } from '@/lib/auth-middleware';
import { z } from 'zod';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const LeadSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email().optional().or(z.literal('')),
  company: z.string().optional(),
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  zipCode: z.string().min(1, 'ZIP code is required'),
  phone: z.string().optional(),
  industry: z.string().optional(),
  position: z.string().optional(),
  revenue: z.string().optional(),
  employees: z.string().optional(),
  website: z.string().url().optional().or(z.literal('')),
  notes: z.string().optional(),
}).catchall(z.unknown()); // Allow additional custom fields

const ImportLeadsSchema = z.object({
  leads: z.array(LeadSchema).min(1, 'At least one lead is required').max(10000, 'Maximum 10,000 leads allowed'),
  campaignId: z.string().uuid('Valid campaign ID is required').optional(),
});

export const POST = withErrorHandling(async (req: NextRequest) => {
  return requireAuth(req, async (request, { user }) => {
    const body = await request.json();
    const validatedData = ImportLeadsSchema.parse(body);

    const { leads, campaignId } = validatedData;
    const userId = user.db_id;

  // Validate environment variables
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    throw createApiError(
      ErrorCode.INTERNAL_SERVER_ERROR,
      'Missing database configuration',
      500
    );
  }

  // Process leads and save to Supabase
  const processedLeads = leads.map((lead) => {
    // Extract custom fields (anything not in the base schema)
    const { firstName, lastName, email, company, address, city, state, zipCode, phone, industry, position, revenue, employees, website, notes, ...customFields } = lead;

    return {
      user_id: userId,
      campaign_id: campaignId || null,
      first_name: firstName,
      last_name: lastName,
      email: email || null,
      company: company || null,
      address,
      city,
      state,
      zip_code: zipCode,
      phone: phone || null,
      industry: industry || null,
      position: position || null,
      revenue: revenue || null,
      employees: employees || null,
      website: website || null,
      notes: notes || null,
      custom_data: Object.keys(customFields).length > 0 ? JSON.stringify(customFields) : null,
      created_at: new Date().toISOString(),
    };
  });

  // Insert leads into Supabase
  const { data, error } = await supabase
    .from('enclosed_leads')
    .insert(processedLeads)
    .select();

  if (error) {
    console.error('Supabase error:', error);
    throw createApiError(
      ErrorCode.DATABASE_ERROR,
      'Failed to import leads',
      500,
      error
    );
  }

  return NextResponse.json({
    success: true,
    count: data?.length || 0,
    message: `Successfully imported ${data?.length || 0} leads`,
    importedIds: data?.map(lead => lead.id) || [],
  });
  });
});