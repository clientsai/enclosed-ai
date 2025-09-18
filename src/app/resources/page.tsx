/* Resources Hub - Comprehensive Learning Center */
import Link from "next/link";
import {
  Section,
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
} from "@/components/premium";
import Logo from "@/components/Logo";

export const metadata = {
  title: "Resources - Learning Center | Enclosed.AI",
  description: "Master direct mail marketing with AI. Access guides, templates, webinars, case studies, and tools to maximize your campaign ROI.",
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <Section className="py-0">
          <div className="flex justify-between items-center h-16">
            <Logo size="md" />
            <nav className="hidden md:flex">
              <Cluster gap={2}>
                <Link href="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/features" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Features
                </Link>
                <Link href="/pricing" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Pricing
                </Link>
                <Link href="/resources" className="text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Resources
                </Link>
              </Cluster>
            </nav>
            <Cluster gap={2}>
              <Button as={Link} href="/auth/login" variant="ghost" size="sm">
                Sign In
              </Button>
              <Button as={Link} href="/auth/signup" size="sm">
                Get Started
              </Button>
            </Cluster>
          </div>
        </Section>
      </header>

      {/* Hero */}
      <Section className="bg-gray-50">
        <Stack gap={8} align="center" className="text-center">
          <Eyebrow>Learning Center</Eyebrow>
          <Headline level={1} className="max-w-4xl">
            Everything You Need to Master
            <span className="block">AI-Powered Direct Mail</span>
          </Headline>
          <Lead className="max-w-3xl">
            From beginner guides to advanced strategies, our comprehensive resource library helps you
            maximize ROI at every stage of your direct mail journey. Access proven templates, real-world
            case studies, expert webinars, and powerful tools—all designed to make you successful.
          </Lead>
          <div className="flex flex-wrap gap-4 justify-center">
            <Badge>500+ Resources</Badge>
            <Badge>50+ Templates</Badge>
            <Badge>100+ Case Studies</Badge>
            <Badge>Weekly Webinars</Badge>
          </div>
        </Stack>
      </Section>

      {/* Quick Links */}
      <Section>
        <Grid columns={4}>
          <Card hover className="text-center">
            <Stack gap={4}>
              <div className="h-12 w-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto">
                <span className="text-xl">📚</span>
              </div>
              <Headline level={4}>Getting Started</Headline>
              <p className="text-sm text-gray-600">New to AI direct mail? Start here</p>
              <Link href="/help/getting-started" className="text-gray-900 font-medium hover:text-gray-700">
                Begin Learning →
              </Link>
            </Stack>
          </Card>
          <Card hover className="text-center">
            <Stack gap={4}>
              <div className="h-12 w-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto">
                <span className="text-xl">📝</span>
              </div>
              <Headline level={4}>Templates</Headline>
              <p className="text-sm text-gray-600">Ready-to-use campaign templates</p>
              <Link href="/templates" className="text-gray-900 font-medium hover:text-gray-700">
                Browse Templates →
              </Link>
            </Stack>
          </Card>
          <Card hover className="text-center">
            <Stack gap={4}>
              <div className="h-12 w-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto">
                <span className="text-xl">🎥</span>
              </div>
              <Headline level={4}>Webinars</Headline>
              <p className="text-sm text-gray-600">Live and recorded expert sessions</p>
              <Link href="/webinars" className="text-gray-900 font-medium hover:text-gray-700">
                Watch Webinars →
              </Link>
            </Stack>
          </Card>
          <Card hover className="text-center">
            <Stack gap={4}>
              <div className="h-12 w-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto">
                <span className="text-xl">📊</span>
              </div>
              <Headline level={4}>Case Studies</Headline>
              <p className="text-sm text-gray-600">Real success stories and results</p>
              <Link href="/case-studies" className="text-gray-900 font-medium hover:text-gray-700">
                Read Studies →
              </Link>
            </Stack>
          </Card>
        </Grid>
      </Section>

      {/* Featured Guides */}
      <Section className="bg-gray-50">
        <Stack gap={12}>
          <div className="text-center">
            <Eyebrow>Featured Guides</Eyebrow>
            <Headline level={2}>Master Every Aspect of AI Direct Mail</Headline>
            <Subhead className="mt-4 max-w-3xl mx-auto">
              In-depth guides written by experts to help you succeed at every stage
            </Subhead>
          </div>
          <Grid columns={3}>
            <Card hover>
              <Stack gap={4}>
                <Badge>Beginner</Badge>
                <Headline level={4}>Complete Guide to AI Personalization</Headline>
                <p className="text-gray-600">
                  Learn how artificial intelligence transforms generic mail into hyper-personalized
                  messages that convert. This comprehensive guide covers data requirements, AI training,
                  personalization strategies, and best practices for maximum impact.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>45 min read</span>
                  <span>•</span>
                  <span>12,000 reads</span>
                </div>
                <Link href="/guides/ai-personalization" className="text-gray-900 font-medium">
                  Read Guide →
                </Link>
              </Stack>
            </Card>
            <Card hover>
              <Stack gap={4}>
                <Badge>Intermediate</Badge>
                <Headline level={4}>Data-Driven Campaign Optimization</Headline>
                <p className="text-gray-600">
                  Discover how to use analytics and A/B testing to continuously improve your campaigns.
                  Learn to identify winning messages, optimize send times, segment audiences effectively,
                  and scale successful campaigns for maximum ROI.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>30 min read</span>
                  <span>•</span>
                  <span>8,500 reads</span>
                </div>
                <Link href="/guides/campaign-optimization" className="text-gray-900 font-medium">
                  Read Guide →
                </Link>
              </Stack>
            </Card>
            <Card hover>
              <Stack gap={4}>
                <Badge>Advanced</Badge>
                <Headline level={4}>Enterprise Direct Mail at Scale</Headline>
                <p className="text-gray-600">
                  Scale your direct mail operations from thousands to millions of pieces while maintaining
                  personalization and quality. Learn automation strategies, API integration, multi-channel
                  orchestration, and enterprise best practices.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>60 min read</span>
                  <span>•</span>
                  <span>5,200 reads</span>
                </div>
                <Link href="/guides/enterprise-scale" className="text-gray-900 font-medium">
                  Read Guide →
                </Link>
              </Stack>
            </Card>
          </Grid>
        </Stack>
      </Section>

      {/* Industry Playbooks */}
      <Section>
        <Stack gap={12}>
          <div className="text-center">
            <Eyebrow>Industry Playbooks</Eyebrow>
            <Headline level={2}>Proven Strategies for Your Industry</Headline>
            <Subhead className="mt-4 max-w-3xl mx-auto">
              Industry-specific playbooks with strategies, templates, and benchmarks tailored to your business
            </Subhead>
          </div>
          <Grid columns={2}>
            <Card hover>
              <Stack gap={4}>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span>🏢</span>
                  </div>
                  <Headline level={4}>B2B Sales & Marketing</Headline>
                </div>
                <p className="text-gray-600">
                  Account-based marketing strategies for reaching decision-makers. Learn how to break through
                  digital noise, personalize at the account level, time campaigns with sales outreach, and
                  measure pipeline impact. Includes templates for C-suite outreach, meeting requests, and
                  follow-up sequences.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 mt-0.5">✓</span>
                    <span className="text-gray-600">15 proven templates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 mt-0.5">✓</span>
                    <span className="text-gray-600">Industry benchmarks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 mt-0.5">✓</span>
                    <span className="text-gray-600">Integration guides</span>
                  </li>
                </ul>
                <Button as={Link} href="/playbooks/b2b" variant="ghost">
                  Access B2B Playbook
                </Button>
              </Stack>
            </Card>
            <Card hover>
              <Stack gap={4}>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span>🏠</span>
                  </div>
                  <Headline level={4}>Real Estate</Headline>
                </div>
                <p className="text-gray-600">
                  Generate more listings and buyers with targeted neighborhood campaigns. Master farming
                  strategies, just-listed/just-sold campaigns, expired listing outreach, and FSBO conversion.
                  Includes market update templates, valuation offers, and seasonal campaign calendars.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 mt-0.5">✓</span>
                    <span className="text-gray-600">20 listing templates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 mt-0.5">✓</span>
                    <span className="text-gray-600">Farming strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 mt-0.5">✓</span>
                    <span className="text-gray-600">ROI calculators</span>
                  </li>
                </ul>
                <Button as={Link} href="/playbooks/real-estate" variant="ghost">
                  Access Real Estate Playbook
                </Button>
              </Stack>
            </Card>
            <Card hover>
              <Stack gap={4}>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span>🛒</span>
                  </div>
                  <Headline level={4}>E-commerce & Retail</Headline>
                </div>
                <p className="text-gray-600">
                  Drive repeat purchases and win back dormant customers with personalized offers. Learn
                  cart abandonment recovery, VIP customer programs, seasonal promotions, and product
                  launch strategies. Includes offer templates, loyalty programs, and lifecycle campaigns.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 mt-0.5">✓</span>
                    <span className="text-gray-600">25 offer templates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 mt-0.5">✓</span>
                    <span className="text-gray-600">Segmentation guides</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 mt-0.5">✓</span>
                    <span className="text-gray-600">LTV optimization</span>
                  </li>
                </ul>
                <Button as={Link} href="/playbooks/ecommerce" variant="ghost">
                  Access E-commerce Playbook
                </Button>
              </Stack>
            </Card>
            <Card hover>
              <Stack gap={4}>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span>💰</span>
                  </div>
                  <Headline level={4}>Financial Services</Headline>
                </div>
                <p className="text-gray-600">
                  Acquire new customers and deepen relationships with compliant, personalized campaigns.
                  Master life-event targeting, cross-sell strategies, refinance campaigns, and wealth
                  management outreach. Includes compliance guidelines and regulated industry best practices.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 mt-0.5">✓</span>
                    <span className="text-gray-600">Compliance toolkit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 mt-0.5">✓</span>
                    <span className="text-gray-600">Life-event triggers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 mt-0.5">✓</span>
                    <span className="text-gray-600">Product templates</span>
                  </li>
                </ul>
                <Button as={Link} href="/playbooks/financial" variant="ghost">
                  Access Financial Playbook
                </Button>
              </Stack>
            </Card>
          </Grid>
        </Stack>
      </Section>

      {/* Tools & Calculators */}
      <Section className="bg-gray-50">
        <Stack gap={12}>
          <div className="text-center">
            <Eyebrow>Interactive Tools</Eyebrow>
            <Headline level={2}>Powerful Tools to Plan and Optimize</Headline>
            <Subhead className="mt-4 max-w-3xl mx-auto">
              Free tools to help you calculate ROI, plan campaigns, and make data-driven decisions
            </Subhead>
          </div>
          <Grid columns={3}>
            <Card hover className="text-center">
              <Stack gap={4}>
                <div className="h-16 w-16 bg-gray-900 text-white rounded-2xl flex items-center justify-center mx-auto text-2xl font-bold">
                  ROI
                </div>
                <Headline level={4}>ROI Calculator</Headline>
                <p className="text-gray-600">
                  Calculate your expected return on investment based on your industry, list size,
                  and average order value. See how AI personalization impacts your bottom line.
                </p>
                <Button as={Link} href="/roi-calculator">
                  Calculate ROI
                </Button>
              </Stack>
            </Card>
            <Card hover className="text-center">
              <Stack gap={4}>
                <div className="h-16 w-16 bg-gray-900 text-white rounded-2xl flex items-center justify-center mx-auto text-2xl font-bold">
                  A/B
                </div>
                <Headline level={4}>A/B Test Calculator</Headline>
                <p className="text-gray-600">
                  Determine statistical significance and sample sizes for your direct mail tests.
                  Make confident decisions based on data, not guesswork.
                </p>
                <Button as={Link} href="/ab-calculator">
                  Plan A/B Tests
                </Button>
              </Stack>
            </Card>
            <Card hover className="text-center">
              <Stack gap={4}>
                <div className="h-16 w-16 bg-gray-900 text-white rounded-2xl flex items-center justify-center mx-auto text-2xl font-bold">
                  $$$
                </div>
                <Headline level={4}>Budget Planner</Headline>
                <p className="text-gray-600">
                  Plan your direct mail budget across campaigns, segments, and time periods.
                  Optimize spend allocation for maximum impact.
                </p>
                <Button as={Link} href="/budget-planner">
                  Plan Budget
                </Button>
              </Stack>
            </Card>
          </Grid>
        </Stack>
      </Section>

      {/* Latest Content */}
      <Section>
        <Stack gap={12}>
          <div className="text-center">
            <Eyebrow>Fresh Content</Eyebrow>
            <Headline level={2}>Latest Resources</Headline>
            <Subhead className="mt-4 max-w-3xl mx-auto">
              Stay updated with new guides, templates, and insights added weekly
            </Subhead>
          </div>
          <Grid columns={3}>
            {[
              {
                type: "Article",
                title: "2024 Direct Mail Benchmarks Report",
                date: "2 days ago",
                description: "Industry benchmarks across 15 verticals with response rates, ROI, and best practices.",
                link: "/blog/2024-benchmarks",
              },
              {
                type: "Template",
                title: "Holiday Campaign Bundle",
                date: "1 week ago",
                description: "20 ready-to-use templates for Black Friday, Cyber Monday, and holiday promotions.",
                link: "/templates/holiday-bundle",
              },
              {
                type: "Webinar",
                title: "Mastering Multi-Touch Attribution",
                date: "2 weeks ago",
                description: "Learn how to track and attribute revenue across direct mail and digital channels.",
                link: "/webinars/multi-touch-attribution",
              },
              {
                type: "Case Study",
                title: "How TechCo Achieved 1,200% ROI",
                date: "3 weeks ago",
                description: "B2B SaaS company generates $2.4M pipeline from targeted ABM campaigns.",
                link: "/case-studies/techco",
              },
              {
                type: "Guide",
                title: "GDPR Compliance for Direct Mail",
                date: "1 month ago",
                description: "Everything you need to know about data privacy regulations and direct mail.",
                link: "/guides/gdpr-compliance",
              },
              {
                type: "Tool",
                title: "New: Merge Tag Generator",
                date: "1 month ago",
                description: "Automatically generate personalization tags for your CRM data fields.",
                link: "/tools/merge-tag-generator",
              },
            ].map((item, index) => (
              <Card hover key={index}>
                <Stack gap={3}>
                  <div className="flex items-center justify-between">
                    <Badge>{item.type}</Badge>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  <Headline level={4}>{item.title}</Headline>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                  <Link href={item.link} className="text-gray-900 font-medium hover:text-gray-700">
                    Read more →
                  </Link>
                </Stack>
              </Card>
            ))}
          </Grid>
        </Stack>
      </Section>

      {/* Newsletter CTA */}
      <Section className="bg-gray-900 text-white">
        <Stack gap={8} align="center" className="text-center">
          <Headline level={2} className="text-white">
            Get Weekly Direct Mail Insights
          </Headline>
          <Lead className="text-gray-300 max-w-2xl">
            Join 25,000+ marketers receiving exclusive tips, templates, and case studies every week.
            Unsubscribe anytime.
          </Lead>
          <form className="flex gap-4 max-w-md w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500"
              required
            />
            <Button type="submit" className="bg-white text-gray-900 hover:bg-gray-100">
              Subscribe
            </Button>
          </form>
          <p className="text-sm text-gray-400">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </Stack>
      </Section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100">
        <Section>
          <div className="border-t border-gray-100 pt-8 text-center text-sm text-gray-600">
            <p>© 2024 Enclosed.AI. All rights reserved.</p>
          </div>
        </Section>
      </footer>
    </div>
  );
}