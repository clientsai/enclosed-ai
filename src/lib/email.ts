import sgMail from '@sendgrid/mail';

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export async function sendEmail(options: EmailOptions) {
  try {
    const msg = {
      to: options.to,
      from: {
        email: process.env.FROM_EMAIL!,
        name: 'Enclosed.AI'
      },
      subject: options.subject,
      html: options.html,
      text: options.text || options.html.replace(/<[^>]*>/g, ''),
    };

    await sgMail.send(msg);
    console.log('Email sent successfully to:', options.to);
    return { success: true };
  } catch (error: any) {
    console.error('Error sending email:', error);
    if (error.response) {
      console.error(error.response.body);
    }
    return { success: false, error: error.message };
  }
}

// Send campaign notification to admin
export async function sendCampaignNotification(
  campaignName: string,
  recipientCount: number,
  totalCredits: number,
  userEmail: string
) {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1e40af;">New Direct Mail Campaign Created</h2>

      <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #374151; margin-top: 0;">Campaign Details:</h3>
        <ul style="list-style: none; padding: 0;">
          <li style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">
            <strong>Campaign Name:</strong> ${campaignName}
          </li>
          <li style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">
            <strong>Recipients:</strong> ${recipientCount} leads
          </li>
          <li style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">
            <strong>Credits Used:</strong> ${totalCredits}
          </li>
          <li style="padding: 8px 0;">
            <strong>Created By:</strong> ${userEmail}
          </li>
        </ul>
      </div>

      <p style="color: #6b7280;">
        The letters have been queued for processing and will be sent out within the next 24-48 hours.
      </p>

      <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
        <p style="color: #92400e; margin: 0;">
          <strong>Action Required:</strong> Please verify the campaign details and ensure the letters are properly formatted before printing.
        </p>
      </div>

      <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">

      <p style="color: #9ca3af; font-size: 12px;">
        This is an automated notification from Enclosed.AI.
        <br>
        View campaign details at <a href="${process.env.NEXT_PUBLIC_APP_URL}/campaigns" style="color: #3b82f6;">Dashboard</a>
      </p>
    </div>
  `;

  return sendEmail({
    to: process.env.ADMIN_EMAIL!,
    subject: `[Enclosed.AI] New Campaign: ${campaignName} (${recipientCount} letters)`,
    html,
  });
}

// Send low credit warning
export async function sendLowCreditWarning(
  userEmail: string,
  remainingCredits: number,
  planName: string
) {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #dc2626;">Low Mailing Credits Alert</h2>

      <div style="background-color: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #dc2626;">
        <p style="color: #991b1b; font-size: 18px; margin: 0;">
          You have only <strong>${remainingCredits}</strong> mailing credits remaining.
        </p>
      </div>

      <p style="color: #374151;">
        Your ${planName} plan credits are running low. To ensure uninterrupted service for your direct mail campaigns, please consider:
      </p>

      <ul style="color: #4b5563;">
        <li style="padding: 8px 0;">Purchase additional letter bundles (100 letters for $200)</li>
        <li style="padding: 8px 0;">Upgrade to a higher plan for more monthly credits</li>
        <li style="padding: 8px 0;">Schedule your campaigns to optimize credit usage</li>
      </ul>

      <div style="text-align: center; margin: 30px 0;">
        <a href="${process.env.NEXT_PUBLIC_APP_URL}/billing"
           style="background-color: #3b82f6; color: white; padding: 12px 30px; text-decoration: none; border-radius: 8px; display: inline-block;">
          Purchase More Credits
        </a>
      </div>

      <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">

      <p style="color: #9ca3af; font-size: 12px;">
        This notification was sent because your account has less than 20 credits remaining.
        <br>
        Manage your subscription at <a href="${process.env.NEXT_PUBLIC_APP_URL}/billing" style="color: #3b82f6;">Billing Dashboard</a>
      </p>
    </div>
  `;

  return sendEmail({
    to: userEmail,
    subject: `[Enclosed.AI] Low Credit Warning - Only ${remainingCredits} credits remaining`,
    html,
  });
}

// Send letter preview for approval
export async function sendLetterPreview(
  userEmail: string,
  campaignName: string,
  previewContent: string,
  recipientName: string
) {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1e40af;">Letter Preview for Approval</h2>

      <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #374151; margin-top: 0;">Campaign: ${campaignName}</h3>
        <p style="color: #6b7280;">Preview for: ${recipientName}</p>
      </div>

      <div style="background-color: white; border: 1px solid #e5e7eb; padding: 30px; border-radius: 8px; margin: 20px 0;">
        <div style="font-family: Georgia, serif; line-height: 1.6; color: #111827;">
          ${previewContent.replace(/\n/g, '<br>')}
        </div>
      </div>

      <div style="text-align: center; margin: 30px 0;">
        <a href="${process.env.NEXT_PUBLIC_APP_URL}/campaigns"
           style="background-color: #10b981; color: white; padding: 12px 30px; text-decoration: none; border-radius: 8px; display: inline-block; margin-right: 10px;">
          Approve & Send
        </a>
        <a href="${process.env.NEXT_PUBLIC_APP_URL}/campaigns"
           style="background-color: #6b7280; color: white; padding: 12px 30px; text-decoration: none; border-radius: 8px; display: inline-block;">
          Edit Campaign
        </a>
      </div>

      <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">

      <p style="color: #9ca3af; font-size: 12px;">
        This is a preview of one letter from your campaign. All letters will be personalized for each recipient.
      </p>
    </div>
  `;

  return sendEmail({
    to: userEmail,
    subject: `[Enclosed.AI] Letter Preview: ${campaignName}`,
    html,
  });
}