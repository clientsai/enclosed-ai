export interface LetterTemplate {
  id: string;
  name: string;
  description: string;
  category: 'sales' | 'marketing' | 'followup' | 'introduction';
  variables: string[];
  content: string;
}

export const letterTemplates: LetterTemplate[] = [
  {
    id: 'sales-intro',
    name: 'Sales Introduction',
    description: 'Professional sales introduction letter',
    category: 'sales',
    variables: [
      'RECIPIENT_NAME',
      'COMPANY_NAME',
      'SENDER_NAME',
      'SENDER_COMPANY',
      'INDUSTRY',
      'PAIN_POINT',
      'SOLUTION',
      'CALL_TO_ACTION'
    ],
    content: `Dear [RECIPIENT_NAME],

I hope this letter finds you well at [COMPANY_NAME].

As someone who works in the [INDUSTRY] industry, you're likely facing challenges with [PAIN_POINT]. Many of our clients in similar positions have experienced these same frustrations.

That's why I'm reaching out to share how [SOLUTION] has helped businesses like yours overcome these exact challenges.

[SENDER_COMPANY] specializes in providing solutions that address [PAIN_POINT] specifically for companies in [INDUSTRY]. Our approach is tailored to your unique needs and delivers measurable results.

[CALL_TO_ACTION]

I look forward to hearing from you.

Best regards,
[SENDER_NAME]
[SENDER_COMPANY]`
  },
  {
    id: 'marketing-campaign',
    name: 'Marketing Campaign',
    description: 'Direct mail marketing campaign letter',
    category: 'marketing',
    variables: [
      'RECIPIENT_NAME',
      'COMPANY_NAME',
      'OFFER_NAME',
      'DISCOUNT_AMOUNT',
      'EXPIRY_DATE',
      'BENEFIT_1',
      'BENEFIT_2',
      'BENEFIT_3',
      'WEBSITE_URL'
    ],
    content: `Dear [RECIPIENT_NAME],

Exclusive Offer for [COMPANY_NAME]!

We're excited to present you with [OFFER_NAME] - a special opportunity available only to select businesses like yours.

For a limited time, you can save [DISCOUNT_AMOUNT] on our premium services. This exclusive offer includes:

• [BENEFIT_1]
• [BENEFIT_2]
• [BENEFIT_3]

This special pricing is only available until [EXPIRY_DATE], so don't miss out on this opportunity to transform your business.

Visit [WEBSITE_URL] or call us today to claim your discount.

Don't let this opportunity pass you by!`
  },
  {
    id: 'followup-meeting',
    name: 'Follow-up After Meeting',
    description: 'Professional follow-up letter after a meeting',
    category: 'followup',
    variables: [
      'RECIPIENT_NAME',
      'MEETING_DATE',
      'DISCUSSION_TOPIC',
      'NEXT_STEPS',
      'SENDER_NAME',
      'SENDER_EMAIL',
      'SENDER_PHONE'
    ],
    content: `Dear [RECIPIENT_NAME],

Thank you for taking the time to meet with me on [MEETING_DATE]. I enjoyed our discussion about [DISCUSSION_TOPIC].

As we discussed, the next steps are:
[NEXT_STEPS]

I'm excited about the opportunity to work together and help you achieve your goals.

Please don't hesitate to reach out if you have any questions or need additional information.

Best regards,
[SENDER_NAME]
Email: [SENDER_EMAIL]
Phone: [SENDER_PHONE]`
  },
  {
    id: 'introduction-service',
    name: 'Service Introduction',
    description: 'Introduce your services to potential clients',
    category: 'introduction',
    variables: [
      'RECIPIENT_NAME',
      'COMPANY_NAME',
      'SERVICE_NAME',
      'KEY_BENEFIT',
      'SUCCESS_METRIC',
      'CLIENT_EXAMPLE',
      'SENDER_NAME',
      'SENDER_TITLE'
    ],
    content: `Dear [RECIPIENT_NAME],

I wanted to introduce [SERVICE_NAME] to [COMPANY_NAME] as I believe it could significantly benefit your operations.

[SERVICE_NAME] helps businesses like yours achieve [KEY_BENEFIT]. On average, our clients see [SUCCESS_METRIC] within the first three months.

For example, [CLIENT_EXAMPLE] recently implemented our solution and achieved remarkable results.

Would you be interested in learning how [SERVICE_NAME] could help [COMPANY_NAME] achieve similar success?

I'd love to schedule a brief conversation to discuss your specific needs.

Sincerely,
[SENDER_NAME]
[SENDER_TITLE]`
  }
];

export function getTemplateById(id: string): LetterTemplate | undefined {
  return letterTemplates.find(t => t.id === id);
}

export function getTemplatesByCategory(category: string): LetterTemplate[] {
  return letterTemplates.filter(t => t.category === category);
}

export function extractVariables(content: string): string[] {
  const regex = /\[([A-Z_]+)\]/g;
  const variables = new Set<string>();
  let match;

  while ((match = regex.exec(content)) !== null) {
    variables.add(match[1]);
  }

  return Array.from(variables);
}

export function applyVariables(content: string, variables: Record<string, string>): string {
  let result = content;

  Object.entries(variables).forEach(([key, value]) => {
    const regex = new RegExp(`\\[${key}\\]`, 'g');
    result = result.replace(regex, value || `[${key}]`);
  });

  return result;
}