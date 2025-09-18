import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

interface Lead {
  firstName: string;
  lastName: string;
  email?: string;
  company?: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone?: string;
  industry?: string;
  position?: string;
  revenue?: string;
  employees?: string;
  website?: string;
  notes?: string;
  [key: string]: any;
}

export async function POST(req: NextRequest) {
  try {
    const { leads, userId, campaignId } = await req.json();

    if (!leads || !Array.isArray(leads)) {
      return NextResponse.json(
        { error: 'Invalid leads data' },
        { status: 400 }
      );
    }

    // Process leads and save to Supabase
    const processedLeads = leads.map((lead: Lead) => ({
      user_id: userId,
      campaign_id: campaignId,
      first_name: lead.firstName || '',
      last_name: lead.lastName || '',
      email: lead.email || '',
      company: lead.company || '',
      address: lead.address || '',
      city: lead.city || '',
      state: lead.state || '',
      zip_code: lead.zipCode || '',
      phone: lead.phone || '',
      industry: lead.industry || '',
      position: lead.position || '',
      revenue: lead.revenue || '',
      employees: lead.employees || '',
      website: lead.website || '',
      notes: lead.notes || '',
      custom_data: JSON.stringify({
        customField1: lead.customField1,
        customField2: lead.customField2,
        customField3: lead.customField3,
      }),
      created_at: new Date().toISOString(),
    }));

    // Insert leads into Supabase
    const { data, error } = await supabase
      .from('enclosed_leads')
      .insert(processedLeads)
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to import leads' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      count: data?.length || 0,
      message: `Successfully imported ${data?.length || 0} leads`,
    });
  } catch (error: any) {
    console.error('Import error:', error);
    return NextResponse.json(
      { error: 'Import failed', details: error.message },
      { status: 500 }
    );
  }
}