import { NextRequest, NextResponse } from 'next/server';
import { sendCampaignNotification, sendLetterPreview } from '@/lib/email';
import { generateAdvancedPersonalizedLetter } from '@/lib/letter-personalization';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { campaign, leads, customPrompt, userEmail, action } = body;

    if (action === 'preview') {
      // Generate a preview letter for the first lead
      const firstLead = leads[0];
      const letter = await generateAdvancedPersonalizedLetter(
        firstLead,
        campaign,
        customPrompt
      );

      // Send preview email
      await sendLetterPreview(
        userEmail,
        campaign.name,
        letter,
        `${firstLead.firstName} ${firstLead.lastName}`
      );

      return NextResponse.json({
        success: true,
        message: 'Preview sent to your email',
        letter
      });
    }

    // Process full campaign
    const recipientCount = leads.length;
    const totalCredits = recipientCount * 2; // 2 credits per personalized letter

    // Send notification to admin
    await sendCampaignNotification(
      campaign.name,
      recipientCount,
      totalCredits,
      userEmail
    );

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
  } catch (error: any) {
    console.error('Campaign processing error:', error);
    return NextResponse.json(
      { error: 'Failed to process campaign', details: error.message },
      { status: 500 }
    );
  }
}