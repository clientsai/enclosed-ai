/* Premium Homepage - Comprehensive Industry-Leading Content */
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Logo from "@/components/Logo";
import DotPattern from "@/components/DotPattern";
import {
  Section,
  Split,
  Grid,
  Stack,
  Cluster,
  Headline,
  Subhead,
  Lead,
  Eyebrow,
  Button,
  Card,
  Badge,
  Stat,
  Quote,
  Timeline,
  Accordion,
} from "@/components/premium";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      if (user) {
        router.push("/dashboard");
      }
      setLoading(false);
    };
    checkUser();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Premium Navigation */}
      <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <Section className="py-0">
          <div className="flex justify-between items-center h-20">
            <Logo size="md" />
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="/features"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/case-studies"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                Case Studies
              </Link>
              <Link
                href="/resources"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                Resources
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                Company
              </Link>
            </nav>
            <Cluster gap={3}>
              <Button as={Link} href="/auth/login" variant="ghost" size="sm">
                Sign In
              </Button>
              <Button as={Link} href="/auth/signup" size="sm">
                Start Free Trial
              </Button>
            </Cluster>
          </div>
        </Section>
      </header>

      {/* Hero Section - Premium Minimal */}
      <Section className="pt-32 pb-20 relative overflow-hidden">
        <DotPattern className="opacity-5" />
        <div className="relative">
          <Stack gap={8} align="center" className="text-center">
            <Eyebrow>AI-Powered Direct Mail Platform</Eyebrow>
            <Headline level={1} className="max-w-5xl">
              Transform Your Direct Mail Into a
              <span className="block text-gray-900">Revenue-Generating Machine</span>
            </Headline>
            <Lead className="max-w-3xl">
              Enclosed.AI combines artificial intelligence with direct mail to deliver
              hyper-personalized campaigns that achieve 10x higher response rates than
              traditional marketing. Join 5,000+ businesses driving predictable revenue
              through intelligent direct mail automation.
            </Lead>
            <Cluster gap={4} justify="center">
              <Button as={Link} href="/auth/signup" size="lg">
                Start 14-Day Free Trial
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
              <Button as={Link} href="/demo" variant="ghost" size="lg">
                Watch 3-Min Demo
              </Button>
            </Cluster>
            <p className="text-sm text-gray-500">
              No credit card required • Setup in 5 minutes • Cancel anytime
            </p>
          </Stack>
        </div>
      </Section>

      {/* Social Proof Bar */}
      <Section className="py-12 bg-gray-50 border-y border-gray-100">
        <Stack gap={6}>
          <p className="text-center text-sm font-medium text-gray-600 uppercase tracking-wide">
            Trusted by 5,000+ Marketing Teams at Leading Companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-60">
            {["Tesla", "Shopify", "Netflix", "Adobe", "Spotify", "Airbnb"].map((company) => (
              <span key={company} className="text-2xl font-bold text-gray-400">
                {company}
              </span>
            ))}
          </div>
        </Stack>
      </Section>

      {/* Problem/Solution Section */}
      <Section>
        <Split>
          <Stack gap={6}>
            <Eyebrow>The Challenge</Eyebrow>
            <Headline level={2}>
              98% of Direct Mail Fails Because It's Not Personal Enough
            </Headline>
            <Lead>
              Traditional direct mail treats every recipient the same. Generic messages.
              Irrelevant offers. Wasted budgets. Your prospects receive dozens of mailers
              daily—yours gets lost in the noise.
            </Lead>
            <Stack gap={4}>
              <div className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">✗</span>
                <div>
                  <p className="font-semibold text-gray-900">Generic, One-Size-Fits-All Messages</p>
                  <p className="text-gray-600">Same content for everyone means relevance for no one</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">✗</span>
                <div>
                  <p className="font-semibold text-gray-900">Manual Campaign Creation Takes Weeks</p>
                  <p className="text-gray-600">By the time you launch, the opportunity is gone</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">✗</span>
                <div>
                  <p className="font-semibold text-gray-900">No Way to Track Real ROI</p>
                  <p className="text-gray-600">You're flying blind with no attribution or analytics</p>
                </div>
              </div>
            </Stack>
          </Stack>
          <Stack gap={6}>
            <Eyebrow>The Solution</Eyebrow>
            <Headline level={2}>
              AI That Writes Personal Letters Like Your Best Salesperson
            </Headline>
            <Lead>
              Enclosed.AI analyzes each recipient's data to craft genuinely personal messages
              that resonate. Every letter feels hand-written for them because, in essence, it is.
            </Lead>
            <Stack gap={4}>
              <div className="flex items-start gap-3">
                <span className="text-gray-900 mt-1">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Hyper-Personalized for Each Recipient</p>
                  <p className="text-gray-600">AI crafts unique messages based on 50+ data points</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gray-900 mt-1">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Launch Campaigns in 5 Minutes</p>
                  <p className="text-gray-600">From idea to mailbox in record time</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gray-900 mt-1">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Complete Attribution & Analytics</p>
                  <p className="text-gray-600">Track every response, conversion, and dollar of ROI</p>
                </div>
              </div>
            </Stack>
          </Stack>
        </Split>
      </Section>

      {/* Results/Stats Section */}
      <Section className="bg-gray-50">
        <Stack gap={12}>
          <div className="text-center">
            <Headline level={2}>
              Measurable Results That Transform Your Business
            </Headline>
            <Subhead className="mt-4 max-w-3xl mx-auto">
              Our customers consistently outperform industry benchmarks by 10x or more.
              These aren't cherry-picked success stories—they're our average.
            </Subhead>
          </div>
          <Grid columns={4}>
            <Stat value="12.4%" label="Average Response Rate" />
            <Stat value="847%" label="Average ROI" />
            <Stat value="3.2x" label="Customer LTV Increase" />
            <Stat value="67%" label="Cost Reduction vs Traditional" />
          </Grid>
          <Quote
            text="Enclosed.AI transformed our direct mail from a cost center to our most profitable channel. We're seeing response rates we never thought possible—and it runs on autopilot."
            author="Sarah Chen"
            title="VP Marketing, TechStart Inc."
            className="max-w-4xl mx-auto text-center"
          />
        </Stack>
      </Section>

      {/* Features Section */}
      <Section>
        <Stack gap={12}>
          <div className="text-center">
            <Eyebrow>Platform Capabilities</Eyebrow>
            <Headline level={2}>
              Everything You Need to Dominate Direct Mail
            </Headline>
            <Subhead className="mt-4 max-w-3xl mx-auto">
              A complete end-to-end platform that handles everything from AI content creation
              to printing, mailing, and ROI tracking—all in one place.
            </Subhead>
          </div>
          <Grid columns={3}>
            <Card hover className="text-center">
              <Stack gap={4}>
                <div className="h-16 w-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-2xl">🤖</span>
                </div>
                <Headline level={4}>AI Content Engine</Headline>
                <p className="text-gray-600">
                  Our proprietary AI analyzes recipient data to write completely unique,
                  persuasive letters that feel personally crafted. No templates, no merge tags—real personalization.
                </p>
              </Stack>
            </Card>
            <Card hover className="text-center">
              <Stack gap={4}>
                <div className="h-16 w-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-2xl">📊</span>
                </div>
                <Headline level={4}>Smart Segmentation</Headline>
                <p className="text-gray-600">
                  Automatically segment your audience based on 50+ behavioral and demographic
                  factors. Target the right message to the right person at the perfect moment.
                </p>
              </Stack>
            </Card>
            <Card hover className="text-center">
              <Stack gap={4}>
                <div className="h-16 w-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-2xl">🎯</span>
                </div>
                <Headline level={4}>Predictive Timing</Headline>
                <p className="text-gray-600">
                  Machine learning identifies the optimal send time for each recipient,
                  maximizing open rates and response rates by up to 3x.
                </p>
              </Stack>
            </Card>
            <Card hover className="text-center">
              <Stack gap={4}>
                <div className="h-16 w-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-2xl">🖨️</span>
                </div>
                <Headline level={4}>Premium Printing</Headline>
                <p className="text-gray-600">
                  Professional printing on luxury paper stock with hand-signed fonts.
                  Your mail pieces look and feel premium, demanding attention.
                </p>
              </Stack>
            </Card>
            <Card hover className="text-center">
              <Stack gap={4}>
                <div className="h-16 w-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-2xl">📬</span>
                </div>
                <Headline level={4}>Automated Fulfillment</Headline>
                <p className="text-gray-600">
                  We handle everything—printing, folding, stuffing, stamping, and mailing.
                  You focus on strategy while we execute flawlessly.
                </p>
              </Stack>
            </Card>
            <Card hover className="text-center">
              <Stack gap={4}>
                <div className="h-16 w-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-2xl">📈</span>
                </div>
                <Headline level={4}>Real-Time Analytics</Headline>
                <p className="text-gray-600">
                  Track delivery, responses, and conversions in real-time. Full attribution
                  shows exactly which campaigns drive revenue.
                </p>
              </Stack>
            </Card>
          </Grid>
        </Stack>
      </Section>

      {/* How It Works Section */}
      <Section className="bg-gray-50">
        <Stack gap={12}>
          <div className="text-center">
            <Eyebrow>Simple Process</Eyebrow>
            <Headline level={2}>
              From Upload to Mailbox in 5 Minutes
            </Headline>
            <Subhead className="mt-4 max-w-3xl mx-auto">
              Our streamlined process means you can launch sophisticated campaigns faster
              than it takes to write a single email.
            </Subhead>
          </div>
          <Timeline
            items={[
              {
                title: "Upload Your List",
                description: "Import contacts via CSV, CRM integration, or API. Our system automatically cleanses and validates addresses.",
              },
              {
                title: "AI Creates Content",
                description: "Our AI analyzes each recipient and writes personalized letters that speak to their specific needs and interests.",
              },
              {
                title: "Review & Approve",
                description: "Preview your campaign, make any adjustments, and approve with one click. Or set to auto-approve for true automation.",
              },
              {
                title: "We Handle Everything",
                description: "Professional printing, folding, stuffing, and mailing. Your campaigns are in mailboxes within 3-5 business days.",
              },
              {
                title: "Track Results",
                description: "Monitor delivery, responses, and ROI in real-time. Use insights to continuously improve future campaigns.",
              },
            ]}
          />
        </Stack>
      </Section>

      {/* Use Cases Section */}
      <Section>
        <Stack gap={12}>
          <div className="text-center">
            <Eyebrow>Use Cases</Eyebrow>
            <Headline level={2}>
              Proven Success Across Every Industry
            </Headline>
            <Subhead className="mt-4 max-w-3xl mx-auto">
              From B2B enterprise sales to local service businesses, Enclosed.AI drives
              results for companies of all sizes and industries.
            </Subhead>
          </div>
          <Grid columns={2}>
            <Card hover>
              <Stack gap={4}>
                <Badge>B2B Sales</Badge>
                <Headline level={4}>Account-Based Marketing</Headline>
                <p className="text-gray-600">
                  Break through the digital noise to reach C-suite executives. Our enterprise
                  clients see 34% meeting acceptance rates from personalized direct mail campaigns
                  to target accounts.
                </p>
                <Link href="/use-cases/b2b" className="text-gray-900 font-medium hover:text-gray-700">
                  Learn more →
                </Link>
              </Stack>
            </Card>
            <Card hover>
              <Stack gap={4}>
                <Badge>Real Estate</Badge>
                <Headline level={4}>Listing Generation</Headline>
                <p className="text-gray-600">
                  Real estate agents using Enclosed.AI generate 5x more listing appointments.
                  Target specific neighborhoods with messages that resonate with local homeowners.
                </p>
                <Link href="/use-cases/real-estate" className="text-gray-900 font-medium hover:text-gray-700">
                  Learn more →
                </Link>
              </Stack>
            </Card>
            <Card hover>
              <Stack gap={4}>
                <Badge>E-commerce</Badge>
                <Headline level={4}>Win-Back Campaigns</Headline>
                <p className="text-gray-600">
                  Re-engage dormant customers with personalized offers based on purchase history.
                  E-commerce brands see 18% reactivation rates, far exceeding email performance.
                </p>
                <Link href="/use-cases/ecommerce" className="text-gray-900 font-medium hover:text-gray-700">
                  Learn more →
                </Link>
              </Stack>
            </Card>
            <Card hover>
              <Stack gap={4}>
                <Badge>Financial Services</Badge>
                <Headline level={4}>Customer Acquisition</Headline>
                <p className="text-gray-600">
                  Banks and credit unions acquire new customers at 40% lower CAC using intelligent
                  direct mail that speaks to specific financial needs and life events.
                </p>
                <Link href="/use-cases/financial" className="text-gray-900 font-medium hover:text-gray-700">
                  Learn more →
                </Link>
              </Stack>
            </Card>
          </Grid>
        </Stack>
      </Section>

      {/* Testimonials Section */}
      <Section className="bg-gray-50">
        <Stack gap={12}>
          <div className="text-center">
            <Eyebrow>Customer Success</Eyebrow>
            <Headline level={2}>
              Join 5,000+ Companies Getting Exceptional Results
            </Headline>
          </div>
          <Grid columns={3}>
            <Card hover>
              <Stack gap={4}>
                <div className="flex gap-1">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i} className="text-gray-900">{star}</span>
                  ))}
                </div>
                <p className="text-gray-600">
                  "We replaced our entire outbound sales team with Enclosed.AI. Response rates
                  went from 0.5% to 12%, and our cost per acquisition dropped 73%."
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Michael Torres</p>
                  <p className="text-sm text-gray-600">CEO, SaaS Ventures</p>
                </div>
              </Stack>
            </Card>
            <Card hover>
              <Stack gap={4}>
                <div className="flex gap-1">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i} className="text-gray-900">{star}</span>
                  ))}
                </div>
                <p className="text-gray-600">
                  "The AI personalization is mind-blowing. Recipients often call to thank us
                  for such thoughtful letters. Our brand loyalty scores are through the roof."
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Jennifer Park</p>
                  <p className="text-sm text-gray-600">CMO, Luxury Retail Co.</p>
                </div>
              </Stack>
            </Card>
            <Card hover>
              <Stack gap={4}>
                <div className="flex gap-1">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i} className="text-gray-900">{star}</span>
                  ))}
                </div>
                <p className="text-gray-600">
                  "ROI of 1,240% in our first campaign. We've 10x'd our direct mail budget
                  because Enclosed.AI makes it our most profitable channel."
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Robert Kim</p>
                  <p className="text-sm text-gray-600">VP Growth, FinTech Startup</p>
                </div>
              </Stack>
            </Card>
          </Grid>
        </Stack>
      </Section>

      {/* Pricing Preview Section */}
      <Section>
        <Stack gap={12}>
          <div className="text-center">
            <Eyebrow>Simple Pricing</Eyebrow>
            <Headline level={2}>
              Pay Only for What You Send
            </Headline>
            <Subhead className="mt-4 max-w-3xl mx-auto">
              No monthly fees, no minimums, no contracts. Our transparent pricing means
              you're always in control of your budget.
            </Subhead>
          </div>
          <Grid columns={3}>
            <Card hover className="text-center">
              <Stack gap={4}>
                <Headline level={4}>Starter</Headline>
                <div>
                  <span className="text-4xl font-bold text-gray-900">$1.49</span>
                  <span className="text-gray-600">/letter</span>
                </div>
                <p className="text-gray-600">Perfect for small businesses</p>
                <ul className="text-left space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 mt-0.5">✓</span>
                    <span className="text-gray-600">Up to 1,000 letters/month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 mt-0.5">✓</span>
                    <span className="text-gray-600">AI personalization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 mt-0.5">✓</span>
                    <span className="text-gray-600">Basic analytics</span>
                  </li>
                </ul>
              </Stack>
            </Card>
            <Card hover className="text-center border-2 border-gray-900">
              <Stack gap={4}>
                <Badge>Most Popular</Badge>
                <Headline level={4}>Growth</Headline>
                <div>
                  <span className="text-4xl font-bold text-gray-900">$0.99</span>
                  <span className="text-gray-600">/letter</span>
                </div>
                <p className="text-gray-600">For growing companies</p>
                <ul className="text-left space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 mt-0.5">✓</span>
                    <span className="text-gray-600">1,000-10,000 letters/month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 mt-0.5">✓</span>
                    <span className="text-gray-600">Advanced AI features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 mt-0.5">✓</span>
                    <span className="text-gray-600">Full analytics suite</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 mt-0.5">✓</span>
                    <span className="text-gray-600">CRM integrations</span>
                  </li>
                </ul>
              </Stack>
            </Card>
            <Card hover className="text-center">
              <Stack gap={4}>
                <Headline level={4}>Enterprise</Headline>
                <div>
                  <span className="text-4xl font-bold text-gray-900">Custom</span>
                </div>
                <p className="text-gray-600">Volume pricing available</p>
                <ul className="text-left space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 mt-0.5">✓</span>
                    <span className="text-gray-600">10,000+ letters/month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 mt-0.5">✓</span>
                    <span className="text-gray-600">Custom AI training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 mt-0.5">✓</span>
                    <span className="text-gray-600">Dedicated success manager</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 mt-0.5">✓</span>
                    <span className="text-gray-600">SLA & priority support</span>
                  </li>
                </ul>
              </Stack>
            </Card>
          </Grid>
          <div className="text-center">
            <Button as={Link} href="/pricing" size="lg">
              View Complete Pricing Details
            </Button>
          </div>
        </Stack>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-gray-50">
        <Stack gap={12}>
          <div className="text-center">
            <Headline level={2}>
              Frequently Asked Questions
            </Headline>
            <Subhead className="mt-4 max-w-3xl mx-auto">
              Everything you need to know about transforming your direct mail with AI
            </Subhead>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion
              items={[
                {
                  title: "How is this different from traditional direct mail?",
                  content: (
                    <p className="text-gray-600">
                      Traditional direct mail uses templates and mail merge to create generic messages.
                      Enclosed.AI uses artificial intelligence to write completely unique letters for each
                      recipient based on their specific data, interests, and behavior. Every letter is as
                      personal as if you wrote it yourself—because our AI essentially does exactly that.
                    </p>
                  ),
                },
                {
                  title: "What kind of response rates can I expect?",
                  content: (
                    <p className="text-gray-600">
                      Our customers typically see response rates between 8-15%, compared to the industry
                      average of 0.5-2%. The dramatic improvement comes from true personalization—recipients
                      feel like you're speaking directly to them because you are. Results vary by industry
                      and offer, but even our lowest-performing campaigns outperform traditional direct mail by 3-5x.
                    </p>
                  ),
                },
                {
                  title: "How quickly can I launch my first campaign?",
                  content: (
                    <p className="text-gray-600">
                      You can launch your first campaign within 5 minutes of signing up. Simply upload
                      your list, review the AI-generated content, and click send. Letters are professionally
                      printed and mailed within 24 hours, reaching recipients in 3-5 business days.
                      For comparison, traditional direct mail campaigns typically take 2-4 weeks to plan and execute.
                    </p>
                  ),
                },
                {
                  title: "What data do you need to personalize letters?",
                  content: (
                    <p className="text-gray-600">
                      At minimum, we need names and addresses. But the more data you provide, the better
                      the personalization. We can use demographic data, purchase history, browsing behavior,
                      firmographic data (for B2B), and any custom fields from your CRM. Our AI finds patterns
                      and insights in your data that human marketers would miss.
                    </p>
                  ),
                },
                {
                  title: "Can I review letters before they're sent?",
                  content: (
                    <p className="text-gray-600">
                      Absolutely. You can review and approve every letter, or set rules for auto-approval.
                      Many customers review the first few campaigns closely, then switch to auto-approval
                      once they trust the AI's output. You can also set up test groups to preview campaigns
                      before full launch.
                    </p>
                  ),
                },
                {
                  title: "How do you track ROI and attribution?",
                  content: (
                    <p className="text-gray-600">
                      Every letter includes trackable elements like QR codes, personalized URLs, and phone
                      numbers. We provide real-time analytics on delivery, response rates, and conversions.
                      Our platform integrates with your CRM and analytics tools to provide complete attribution
                      from mail piece to revenue.
                    </p>
                  ),
                },
              ]}
            />
          </div>
        </Stack>
      </Section>

      {/* Final CTA Section */}
      <Section className="bg-gray-900 text-white">
        <Stack gap={8} align="center" className="text-center">
          <Headline level={2} className="text-white">
            Ready to 10x Your Direct Mail ROI?
          </Headline>
          <Lead className="text-gray-300 max-w-3xl">
            Join thousands of businesses using AI to transform direct mail from a tired old
            channel into their most profitable growth engine. Start your free trial today and
            see results in your first campaign.
          </Lead>
          <Stack gap={6} align="center">
            <Cluster gap={4} justify="center">
              <Button
                as={Link}
                href="/auth/signup"
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100"
              >
                Start Free 14-Day Trial
              </Button>
              <Button
                as={Link}
                href="/contact"
                variant="ghost"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-gray-900"
              >
                Schedule Demo
              </Button>
            </Cluster>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <span>✓ No credit card required</span>
              <span>✓ 14-day free trial</span>
              <span>✓ Cancel anytime</span>
              <span>✓ Setup in 5 minutes</span>
            </div>
          </Stack>
        </Stack>
      </Section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100">
        <Section>
          <Grid columns={5} className="pb-8">
            <Stack gap={4}>
              <Logo size="md" />
              <p className="text-sm text-gray-600">
                AI-powered direct mail that delivers exceptional ROI.
              </p>
              <div className="flex gap-4">
                <Link href="https://twitter.com/enclosedai" className="text-gray-400 hover:text-gray-600">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="https://linkedin.com/company/enclosedai" className="text-gray-400 hover:text-gray-600">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </Link>
              </div>
            </Stack>
            <Stack gap={3}>
              <h3 className="font-semibold text-gray-900">Product</h3>
              <Stack gap={2}>
                <Link href="/features" className="text-sm text-gray-600 hover:text-gray-900">Features</Link>
                <Link href="/pricing" className="text-sm text-gray-600 hover:text-gray-900">Pricing</Link>
                <Link href="/integrations" className="text-sm text-gray-600 hover:text-gray-900">Integrations</Link>
                <Link href="/api" className="text-sm text-gray-600 hover:text-gray-900">API</Link>
                <Link href="/security" className="text-sm text-gray-600 hover:text-gray-900">Security</Link>
                <Link href="/roadmap" className="text-sm text-gray-600 hover:text-gray-900">Roadmap</Link>
              </Stack>
            </Stack>
            <Stack gap={3}>
              <h3 className="font-semibold text-gray-900">Solutions</h3>
              <Stack gap={2}>
                <Link href="/use-cases/b2b" className="text-sm text-gray-600 hover:text-gray-900">B2B Sales</Link>
                <Link href="/use-cases/real-estate" className="text-sm text-gray-600 hover:text-gray-900">Real Estate</Link>
                <Link href="/use-cases/ecommerce" className="text-sm text-gray-600 hover:text-gray-900">E-commerce</Link>
                <Link href="/use-cases/financial" className="text-sm text-gray-600 hover:text-gray-900">Financial Services</Link>
                <Link href="/use-cases/nonprofit" className="text-sm text-gray-600 hover:text-gray-900">Nonprofit</Link>
                <Link href="/use-cases/healthcare" className="text-sm text-gray-600 hover:text-gray-900">Healthcare</Link>
              </Stack>
            </Stack>
            <Stack gap={3}>
              <h3 className="font-semibold text-gray-900">Resources</h3>
              <Stack gap={2}>
                <Link href="/resources" className="text-sm text-gray-600 hover:text-gray-900">Learning Center</Link>
                <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900">Blog</Link>
                <Link href="/case-studies" className="text-sm text-gray-600 hover:text-gray-900">Case Studies</Link>
                <Link href="/templates" className="text-sm text-gray-600 hover:text-gray-900">Templates</Link>
                <Link href="/webinars" className="text-sm text-gray-600 hover:text-gray-900">Webinars</Link>
                <Link href="/roi-calculator" className="text-sm text-gray-600 hover:text-gray-900">ROI Calculator</Link>
              </Stack>
            </Stack>
            <Stack gap={3}>
              <h3 className="font-semibold text-gray-900">Company</h3>
              <Stack gap={2}>
                <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900">About Us</Link>
                <Link href="/team" className="text-sm text-gray-600 hover:text-gray-900">Team</Link>
                <Link href="/careers" className="text-sm text-gray-600 hover:text-gray-900">Careers</Link>
                <Link href="/press" className="text-sm text-gray-600 hover:text-gray-900">Press</Link>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">Contact</Link>
                <Link href="/partners" className="text-sm text-gray-600 hover:text-gray-900">Partners</Link>
              </Stack>
            </Stack>
          </Grid>
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © 2024 Enclosed.AI. All rights reserved.
            </p>
            <Cluster gap={6}>
              <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</Link>
              <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">Terms of Service</Link>
              <Link href="/cookies" className="text-sm text-gray-600 hover:text-gray-900">Cookie Policy</Link>
              <Link href="/gdpr" className="text-sm text-gray-600 hover:text-gray-900">GDPR</Link>
              <Link href="/sitemap" className="text-sm text-gray-600 hover:text-gray-900">Sitemap</Link>
            </Cluster>
          </div>
        </Section>
      </footer>
    </div>
  );
}