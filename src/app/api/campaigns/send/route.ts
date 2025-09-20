import { NextRequest, NextResponse } from 'next/server';
import { sendCampaignNotification, sendLetterPreview } from '@/lib/email';
import { generateAdvancedPersonalizedLetter } from '@/lib/letter-personalization';
import { createApiError, ErrorCode, withErrorHandling } from '@/lib/error-handler';
import { requireAuth } from '@/lib/auth-middleware';
import { z } from 'zod';

const SendCampaignSchema = z.object({
  campaign: z.object({
    name: z.string().min(1, 'Campaign name is required'),
    offer_type: z.string(),
    offerName: z.string().min(1, 'Offer name is required'),
    offerDescription: z.string().min(1, 'Offer description is required'),
    businessDescription: z.string().min(1, 'Business description is required'),
    targetAudience: z.string().min(1, 'Target audience is required'),
    senderName: z.string().min(1, 'Sender name is required'),
    companyName: z.string().min(1, 'Company name is required'),
    industry: z.string().min(1, 'Industry is required'),
    leadMagnetName: z.string().optional(),
  }),
  leads: z.array(z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    address: z.string().min(1, 'Address is required'),
    city: z.string().min(1, 'City is required'),
    state: z.string().min(1, 'State is required'),
    zipCode: z.string().min(1, 'ZIP code is required'),
    company: z.string().optional(),
    email: z.string().email().optional(),
    phone: z.string().optional(),
    industry: z.string().optional(),
    position: z.string().optional(),
    revenue: z.string().optional(),
    employees: z.string().optional(),
    website: z.string().optional(),
    notes: z.string().optional(),
    customField1: z.string().optional(),
    customField2: z.string().optional(),
    customField3: z.string().optional(),
  })).min(1, 'At least one lead is required'),
  customPrompt: z.string().optional(),
  userEmail: z.string().email('Valid email is required'),
  action: z.enum(['preview', 'send']),
});

export const POST = withErrorHandling(async (req: NextRequest) => {
  return requireAuth(req, async (request, { user }) => {
    const body = await request.json();
    const validatedData = SendCampaignSchema.parse(body);

  const { campaign, leads, customPrompt, userEmail, action } = validatedData;

  if (action === 'preview') {
    // Generate a preview letter for the first lead
    const firstLead = leads[0];

    if (!firstLead) {
      throw createApiError(
        ErrorCode.VALIDATION_ERROR,
        'No leads provided for preview',
        400
      );
    }

    const letter = await generateAdvancedPersonalizedLetter(
      firstLead,
      campaign,
      customPrompt
    );

    // Send preview email
    try {
      await sendLetterPreview(
        userEmail,
        campaign.name,
        letter,
        `${firstLead.firstName} ${firstLead.lastName}`
      );
    } catch (error) {
      throw createApiError(
        ErrorCode.EXTERNAL_SERVICE_ERROR,
        'Failed to send preview email',
        500,
        error
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Preview sent to your email',
      letter
    });
  }

  // Validate campaign for full send
  if (leads.length > 10000) {
    throw createApiError(
      ErrorCode.VALIDATION_ERROR,
      'Maximum 10,000 leads allowed per campaign',
      400
    );
  }

  // Process full campaign
  const recipientCount = leads.length;
  const totalCredits = recipientCount * 2; // 2 credits per personalized letter

  // Send notification to admin
  try {
    await sendCampaignNotification(
      campaign.name,
      recipientCount,
      totalCredits,
      userEmail
    );
  } catch (error) {
    console.error('Failed to send notification:', error);
    // Don't fail the request for notification failures
  }

  // Here you would normally:
  // 1. Generate all personalized letters
  // 2. Send to Lob.com API for printing
  // 3. Store campaign details in database
  // 4. Update user credits

  // For now, we just send the notification
  return NextResponse.json({
    success: true,
    message: `Campaign "${campaign.name}" has been created. ${recipientCount} letters will be processed.`,
    recipientCount,
    totalCredits,
  });
  });
});