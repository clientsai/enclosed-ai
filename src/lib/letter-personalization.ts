import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export interface LeadData {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  company?: string;
  email?: string;
  phone?: string;
  industry?: string;
  position?: string;
  revenue?: string;
  employees?: string;
  website?: string;
  notes?: string;
  customField1?: string;
  customField2?: string;
  customField3?: string;
}

export interface OfferData {
  offerName: string;
  offerDescription: string;
  businessDescription: string;
  targetAudience: string;
  leadMagnetName?: string;
  senderName: string;
  companyName: string;
  industry: string;
}

const LETTER_PROMPT_TEMPLATE = `
You are an expert direct mail copywriter creating personalized sales letters.

RECIPIENT INFORMATION:
Name: {firstName} {lastName}
Company: {company}
Industry: {industry}
Position: {position}
Location: {city}, {state}
Additional Context: {notes}

OFFER DETAILS:
Offer: {offerName}
Description: {offerDescription}
Business: {businessDescription}
Target Audience: {targetAudience}
Lead Magnet: {leadMagnetName}
Sender: {senderName}
Company: {companyName}

INSTRUCTIONS:
1. Create a highly personalized direct mail letter that:
   - Opens with a compelling, personalized hook specific to the recipient
   - Identifies and agitates their likely pain points based on their profile
   - Presents the offer as the perfect solution to their specific situation
   - Uses the recipient's name and company throughout naturally
   - Closes with a clear, urgent call-to-action

2. Structure the letter following proven direct mail formulas:
   - Attention-grabbing headline
   - Personalized opening
   - Problem identification
   - Solution presentation
   - Benefits and social proof
   - Clear call-to-action with urgency

3. Write in a conversational, engaging tone that:
   - Feels like it's written specifically for them
   - Uses "you" language
   - Creates emotional connection
   - Builds trust and credibility

4. The letter should be approximately 500-700 words

5. Format the output as a professional business letter with proper spacing

Generate the personalized letter now:`;

export async function generatePersonalizedLetter(
  leadData: LeadData,
  offerData: OfferData,
  customPrompt?: string
): Promise<string> {
  try {
    // Build the prompt with all available data
    let prompt = LETTER_PROMPT_TEMPLATE;

    // Replace lead placeholders
    Object.entries(leadData).forEach(([key, value]) => {
      const placeholder = `{${key}}`;
      prompt = prompt.replace(new RegExp(placeholder, 'g'), value || 'N/A');
    });

    // Replace offer placeholders
    Object.entries(offerData).forEach(([key, value]) => {
      const placeholder = `{${key}}`;
      prompt = prompt.replace(new RegExp(placeholder, 'g'), value || 'N/A');
    });

    // Add custom override if provided
    if (customPrompt) {
      prompt += `\n\nADDITIONAL INSTRUCTIONS:\n${customPrompt}`;
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        {
          role: 'system',
          content: 'You are an expert direct mail copywriter with 20+ years of experience creating high-converting sales letters. You understand psychology, persuasion, and how to write copy that gets results.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.8,
      max_tokens: 2000,
    });

    return completion.choices[0].message.content || '';
  } catch (error) {
    console.error('Error generating personalized letter:', error);
    throw new Error('Failed to generate personalized letter');
  }
}

// Function to preview a letter with sample data
export async function previewLetter(
  sampleLead: LeadData,
  offerData: OfferData
): Promise<string> {
  return generatePersonalizedLetter(sampleLead, offerData);
}

// Function to batch generate letters for multiple leads
export async function batchGenerateLetters(
  leads: LeadData[],
  offerData: OfferData,
  customPrompt?: string,
  onProgress?: (current: number, total: number) => void
): Promise<{ lead: LeadData; letter: string }[]> {
  const results: { lead: LeadData; letter: string }[] = [];

  for (let i = 0; i < leads.length; i++) {
    try {
      const letter = await generatePersonalizedLetter(leads[i], offerData, customPrompt);
      results.push({ lead: leads[i], letter });

      if (onProgress) {
        onProgress(i + 1, leads.length);
      }

      // Add a small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(`Error generating letter for lead ${i + 1}:`, error);
      // Continue with next lead
    }
  }

  return results;
}

// Enhanced personalization using the clients.ai style prompt
export async function generateAdvancedPersonalizedLetter(
  leadData: LeadData,
  offerData: OfferData,
  customOverride?: string
): Promise<string> {
  const advancedPrompt = `
You are creating a hyper-personalized direct mail sales letter following a proven 20-section structure.

RECIPIENT DATA:
- Name: ${leadData.firstName} ${leadData.lastName}
- Company: ${leadData.company || 'Business Owner'}
- Industry: ${leadData.industry || offerData.industry}
- Position: ${leadData.position || 'Decision Maker'}
- Location: ${leadData.city}, ${leadData.state}
- Company Size: ${leadData.employees || 'Unknown'} employees
- Revenue: ${leadData.revenue || 'Unknown'}
- Website: ${leadData.website || 'Unknown'}
- Notes: ${leadData.notes || 'None'}

OFFER INFORMATION:
- Product/Service: ${offerData.offerName}
- Description: ${offerData.offerDescription}
- Your Business: ${offerData.businessDescription}
- Target Market: ${offerData.targetAudience}
- Lead Magnet: ${offerData.leadMagnetName || 'Free Consultation'}

FROM:
${offerData.senderName}
${offerData.companyName}

CREATE A LETTER WITH THESE SECTIONS:

1. ATTENTION-GRABBING HEADLINE
- Ultra-personalized hook using their name and company
- Address their specific situation/industry
- Promise a specific benefit or outcome
- Under 15 words, curiosity-provoking

2. PERSONALIZED OPENING
- "Dear ${leadData.firstName},"
- Immediately reference something specific about their business/industry
- Show you understand their unique situation
- Create instant connection and credibility

3. IDENTIFY THEIR PAIN POINTS
- Based on their industry and company size
- Agitate problems they're likely facing
- Use emotional language that resonates
- Make them feel understood

4. PRESENT THE GAP
- Show where they are vs. where they could be
- Paint a picture of missed opportunities
- Create urgency around solving this

5. INTRODUCE YOUR SOLUTION
- Position ${offerData.offerName} as the bridge
- Explain how it specifically helps businesses like theirs
- Use case studies or examples from their industry

6. BUILD CREDIBILITY
- Share relevant success stories
- Mention credentials or experience
- Include social proof from similar businesses

7. DETAIL THE BENEFITS
- List 3-5 specific benefits for their business
- Focus on outcomes, not features
- Quantify results where possible

8. ADDRESS OBJECTIONS
- Preemptively handle their top 3 concerns
- Reframe objections as reasons to act
- Use risk reversal if appropriate

9. CREATE URGENCY
- Give a logical reason to act now
- Mention limited availability or special pricing
- Set a specific deadline

10. CLEAR CALL-TO-ACTION
- Tell them exactly what to do next
- Make it simple and specific
- Provide multiple contact methods

${customOverride ? `\nCUSTOM INSTRUCTIONS:\n${customOverride}` : ''}

Write the letter now in a conversational, engaging tone that feels personally written for ${leadData.firstName} at ${leadData.company || 'their business'}.

The letter should be professional yet warm, persuasive without being pushy, and approximately 600-800 words.

Format it as a proper business letter with appropriate spacing between sections.`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        {
          role: 'system',
          content: 'You are a master direct mail copywriter who has generated billions in revenue through personalized sales letters. You understand human psychology, persuasion principles, and how to write copy that converts.',
        },
        {
          role: 'user',
          content: advancedPrompt,
        },
      ],
      temperature: 0.85,
      max_tokens: 2500,
    });

    return completion.choices[0].message.content || '';
  } catch (error) {
    console.error('Error generating advanced personalized letter:', error);
    // Fallback to standard generation
    return generatePersonalizedLetter(leadData, offerData, customOverride);
  }
}