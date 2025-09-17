import { OfferType, Recipient } from '@/types';

const LETTER_TEMPLATES = {
  free_consultation: `
Dear {{name}},

I noticed your business {{company}} could benefit from our expertise in {{service_area}}.

We're offering a complimentary consultation to discuss how we can help you:
• Identify growth opportunities
• Streamline operations
• Increase revenue by 20-30%

This exclusive consultation is valued at $500, but it's yours free as a local business owner.

Schedule your free consultation today:
Call: {{phone}}
Visit: {{website}}

Best regards,
{{sender_name}}
{{sender_title}}
  `,
  trial_offer: `
Dear {{name}},

Experience the difference {{product}} can make for {{company}} with our risk-free trial.

For the next 30 days, you can:
• Access all premium features
• Get dedicated support
• Cancel anytime with no obligations

Start your free trial today and see why 500+ businesses trust us.

Activate your trial:
{{website}}/trial
Code: {{offer_code}}

Looking forward to serving you,
{{sender_name}}
  `,
  discount_offer: `
Dear {{name}},

As a valued local business, {{company}} qualifies for our exclusive 25% discount.

This limited-time offer includes:
• 25% off all services
• Free setup and onboarding
• Priority support

Save ${'{{savings_amount}}'} on your first year.

Claim your discount:
Call: {{phone}}
Code: SAVE25

Offer expires: {{expiry_date}}

Best regards,
{{sender_name}}
  `,
  exclusive_access: `
Dear {{name}},

You're invited to join an exclusive group of forward-thinking businesses.

{{company}} has been selected for early access to our new {{product}} platform.

Benefits of early access:
• Be first to market with new capabilities
• Shape product development with your feedback
• Lock in founding member pricing

Only 50 spots available.

Reserve your spot:
{{website}}/exclusive
Access code: VIP{{code}}

Sincerely,
{{sender_name}}
  `,
  free_audit: `
Dear {{name}},

Is {{company}} operating at peak efficiency?

We're offering a complimentary business audit that will:
• Analyze your current operations
• Identify cost-saving opportunities
• Provide actionable recommendations

Past audits have helped businesses save an average of $50,000 annually.

Schedule your free audit:
Call: {{phone}}
Email: {{email}}

No obligations, just insights.

Best regards,
{{sender_name}}
{{sender_title}}
  `,
  demo_request: `
Dear {{name}},

See how {{product}} can transform {{company}} in just 30 minutes.

Join us for a personalized demo where you'll discover:
• How to save 10+ hours weekly
• Ways to increase productivity by 40%
• ROI within the first month

Schedule your demo at your convenience:
{{website}}/demo
Call: {{phone}}

We'll also provide a custom implementation plan for your business.

Looking forward to showing you the possibilities,
{{sender_name}}
  `,
  limited_time_offer: `
URGENT: Special Offer Expires in 7 Days

Dear {{name}},

This is your last chance to take advantage of our biggest offer of the year for {{company}}.

Until {{expiry_date}}, get:
• 40% off annual plans
• Free premium features worth $2,000
• Dedicated account manager

This offer won't be repeated this year.

Act now:
{{website}}/limited-offer
Call: {{phone}}

Don't miss out,
{{sender_name}}
  `,
  free_resource: `
Dear {{name}},

We've created a valuable resource specifically for businesses like {{company}}.

Download your free copy of:
"{{resource_title}}"

This comprehensive guide includes:
• Industry best practices
• Actionable strategies
• Real case studies
• Implementation templates

Get your free copy:
{{website}}/download
No email required

We hope this helps your business thrive.

Best regards,
{{sender_name}}
{{sender_title}}
  `,
};

export async function generateSalesLetter(
  recipient: Partial<Recipient>,
  offerType: OfferType,
  variables: Record<string, string> = {}
): Promise<string> {
  // Get template
  let template = LETTER_TEMPLATES[offerType];

  // Default variables
  const defaultVars = {
    name: recipient.name || 'Business Owner',
    company: recipient.company || 'your business',
    phone: '1-800-ENCLOSED',
    website: 'https://enclosed.ai',
    email: 'contact@enclosed.ai',
    sender_name: 'John Smith',
    sender_title: 'Business Development Manager',
    service_area: 'digital transformation',
    product: 'our platform',
    offer_code: 'ENC2024',
    savings_amount: '2,400',
    expiry_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString(),
    code: Math.random().toString(36).substring(2, 8).toUpperCase(),
    resource_title: '10 Ways to Double Your Revenue in 2024',
    ...recipient.custom_variables,
    ...variables,
  };

  // Replace variables in template
  for (const [key, value] of Object.entries(defaultVars)) {
    const regex = new RegExp(`{{${key}}}`, 'g');
    template = template.replace(regex, value);
  }

  return template.trim();
}

export function generateHTMLLetter(content: string, includeHeader = true): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    @page { margin: 0.75in; }
    body {
      font-family: 'Times New Roman', serif;
      font-size: 12pt;
      line-height: 1.6;
      color: #333;
      margin: 0;
      padding: 0;
    }
    .letter-container {
      max-width: 7.5in;
      margin: 0 auto;
      padding: 1in;
    }
    .header {
      text-align: center;
      margin-bottom: 1in;
      border-bottom: 2px solid #0066cc;
      padding-bottom: 0.25in;
    }
    .logo {
      font-size: 24pt;
      font-weight: bold;
      color: #0066cc;
      margin-bottom: 0.125in;
    }
    .tagline {
      font-size: 10pt;
      color: #666;
    }
    .content {
      text-align: left;
      white-space: pre-wrap;
      font-size: 12pt;
    }
    .footer {
      margin-top: 1in;
      text-align: center;
      font-size: 9pt;
      color: #666;
      border-top: 1px solid #ddd;
      padding-top: 0.25in;
    }
  </style>
</head>
<body>
  <div class="letter-container">
    ${includeHeader ? `
    <div class="header">
      <div class="logo">ENCLOSED.AI</div>
      <div class="tagline">Direct Mail Marketing That Works</div>
    </div>
    ` : ''}
    <div class="content">${content}</div>
    <div class="footer">
      Enclosed.AI | 123 Business Ave, San Francisco, CA 94107 | enclosed.ai
    </div>
  </div>
</body>
</html>
  `.trim();
}