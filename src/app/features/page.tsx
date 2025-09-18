import Link from "next/link";
import Logo from "@/components/Logo";
import {
  Section,
  Split,
  Grid,
  Stack,
  Cluster,
  Eyebrow,
  Headline,
  Subhead,
  Lead,
  Button,
  Card,
  Stat,
} from "@/components/premium";

export const metadata = {
  title: "Features - Enclosed.AI | AI-Powered Direct Mail Marketing",
  description:
    "Discover the powerful features that make Enclosed.AI the leading AI-powered direct mail marketing platform. Personalization, analytics, and automation.",
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Logo size="md" />
            <nav className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/features"
                className="text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link
                href="/auth/login"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Sign In
              </Link>
              <Button as={Link} href="/auth/signup" size="sm">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <Section className="text-center">
        <Stack gap={6}>
          <Eyebrow>AI-Powered Features</Eyebrow>
          <Headline level={1}>
            Powerful Features for Modern Direct Mail
          </Headline>
          <Subhead className="max-w-3xl mx-auto">
            Everything you need to create, send, and track highly effective
            direct mail campaigns with the power of artificial intelligence.
          </Subhead>
          <Cluster gap={4} justify="center">
            <Button as={Link} href="/auth/signup" size="lg">
              Start Free Trial
            </Button>
            <Button as={Link} href="/contact" variant="ghost" size="lg">
              Schedule Demo
            </Button>
          </Cluster>
        </Stack>
      </Section>

      {/* Core Features Section */}
      <Section className="bg-gray-50">
        <Stack gap={8}>
          <div className="text-center">
            <Headline level={2}>Core Features</Headline>
            <Subhead className="max-w-3xl mx-auto">
              Discover the powerful capabilities that make Enclosed.AI the
              leading choice for intelligent direct mail marketing
            </Subhead>
          </div>

          <Grid columns={2}>
            {/* AI-Powered Personalization */}
            <Card hover className="p-8">
              <Stack gap={4}>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-gray-900 rounded-lg flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <Headline level={3}>AI-Powered Personalization</Headline>
                </div>
                <Lead>
                  Our advanced AI analyzes each recipient's profile, preferences,
                  and behavior patterns to generate highly personalized sales
                  letters. Every letter is unique, crafted to speak directly to
                  the recipient's needs, interests, and pain points.
                </Lead>
                <Stack gap={3}>
                  <div className="flex items-start gap-3">
                    <div className="h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-blue-600 text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">
                      Dynamic content generation based on recipient data
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-blue-600 text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">
                      Industry-specific messaging and tone adaptation
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-blue-600 text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">
                      Behavioral pattern analysis for optimal timing
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-blue-600 text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">
                      Continuous learning and improvement algorithms
                    </span>
                  </div>
                </Stack>
              </Stack>
            </Card>

            {/* Campaign Management */}
            <Card hover className="p-8">
              <Stack gap={4}>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-gray-900 rounded-lg flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <Headline level={3}>Advanced Campaign Management</Headline>
                </div>
                <Lead>
                  Create, manage, and optimize your direct mail campaigns with our
                  intuitive dashboard. Schedule campaigns, A/B test different
                  approaches, and track performance in real-time.
                </Lead>
                <Stack gap={3}>
                  <div className="flex items-start gap-3">
                    <div className="h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-blue-600 text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">
                      Drag-and-drop campaign builder
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-blue-600 text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">
                      Automated A/B testing and optimization
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-blue-600 text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">
                      Advanced scheduling and automation
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-blue-600 text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">
                      Multi-channel campaign coordination
                    </span>
                  </div>
                </Stack>
              </Stack>
            </Card>

            {/* Real-Time Analytics */}
            <Card hover className="p-8">
              <Stack gap={4}>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-gray-900 rounded-lg flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <Headline level={3}>Real-Time Analytics</Headline>
                </div>
                <Lead>
                  Track every aspect of your campaign performance with detailed
                  analytics and reporting. Monitor delivery rates, response rates,
                  ROI, and customer engagement metrics.
                </Lead>
                <Stack gap={3}>
                  <div className="flex items-start gap-3">
                    <div className="h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-blue-600 text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">
                      Real-time delivery and response tracking
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-blue-600 text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">
                      Customizable dashboards and reports
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-blue-600 text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">
                      ROI and conversion analysis
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-blue-600 text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">
                      Export data for further analysis
                    </span>
                  </div>
                </Stack>
              </Stack>
            </Card>

            {/* Seamless Integration */}
            <Card hover className="p-8">
              <Stack gap={4}>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-gray-900 rounded-lg flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      />
                    </svg>
                  </div>
                  <Headline level={3}>Seamless Integrations</Headline>
                </div>
                <Lead>
                  Connect Enclosed.AI with your existing marketing stack and
                  business tools. Our platform integrates with popular CRM
                  systems, email marketing platforms, analytics tools, and more.
                </Lead>
                <Stack gap={3}>
                  <div className="flex items-start gap-3">
                    <div className="h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-blue-600 text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">
                      CRM integration (Salesforce, HubSpot, Pipedrive)
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-blue-600 text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">
                      Email marketing platform sync
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-blue-600 text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">
                      Analytics and tracking tools
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-blue-600 text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">
                      Custom API for advanced integrations
                    </span>
                  </div>
                </Stack>
              </Stack>
            </Card>
          </Grid>
        </Stack>
      </Section>

      {/* Advanced Features Section */}
      <Section>
        <Stack gap={8}>
          <div className="text-center">
            <Headline level={2}>Advanced Features</Headline>
            <Subhead className="max-w-3xl mx-auto">
              Powerful tools and capabilities that give you complete control
              over your direct mail marketing
            </Subhead>
          </div>

          <Grid columns={3}>
            <Card hover className="p-6">
              <Stack gap={4}>
                <div className="h-12 w-12 bg-gray-900 rounded-lg flex items-center justify-center">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v-2m0 2a2 2 0 100 4m0-4a2 2 0 100 4m0-4v2m0-6V4"
                    />
                  </svg>
                </div>
                <Headline level={4}>Smart List Management</Headline>
                <p className="text-gray-700 leading-relaxed">
                  Advanced list segmentation, deduplication, and data enrichment
                  to ensure your campaigns reach the right people at the right
                  time.
                </p>
              </Stack>
            </Card>

            <Card hover className="p-6">
              <Stack gap={4}>
                <div className="h-12 w-12 bg-gray-900 rounded-lg flex items-center justify-center">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <Headline level={4}>Quality Assurance</Headline>
                <p className="text-gray-700 leading-relaxed">
                  Automated quality checks, compliance verification, and proofing
                  tools to ensure every piece of mail meets the highest standards.
                </p>
              </Stack>
            </Card>

            <Card hover className="p-6">
              <Stack gap={4}>
                <div className="h-12 w-12 bg-gray-900 rounded-lg flex items-center justify-center">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>
                <Headline level={4}>Flexible Pricing</Headline>
                <p className="text-gray-700 leading-relaxed">
                  Pay-per-use pricing with volume discounts, no monthly fees, and
                  transparent costs that scale with your business needs.
                </p>
              </Stack>
            </Card>

            <Card hover className="p-6">
              <Stack gap={4}>
                <div className="h-12 w-12 bg-gray-900 rounded-lg flex items-center justify-center">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <Headline level={4}>Enterprise Security</Headline>
                <p className="text-gray-700 leading-relaxed">
                  Bank-level security, SOC 2 compliance, and advanced data
                  protection to keep your customer information safe and secure.
                </p>
              </Stack>
            </Card>

            <Card hover className="p-6">
              <Stack gap={4}>
                <div className="h-12 w-12 bg-gray-900 rounded-lg flex items-center justify-center">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"
                    />
                  </svg>
                </div>
                <Headline level={4}>Global Delivery</Headline>
                <p className="text-gray-700 leading-relaxed">
                  Send mail anywhere in the world with our network of trusted
                  delivery partners and real-time tracking capabilities.
                </p>
              </Stack>
            </Card>

            <Card hover className="p-6">
              <Stack gap={4}>
                <div className="h-12 w-12 bg-gray-900 rounded-lg flex items-center justify-center">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <Headline level={4}>24/7 Support</Headline>
                <p className="text-gray-700 leading-relaxed">
                  Dedicated customer success team available around the clock to
                  help you maximize your direct mail marketing results.
                </p>
              </Stack>
            </Card>
          </Grid>
        </Stack>
      </Section>

      {/* Benefits Section */}
      <Section className="bg-gray-50">
        <Stack gap={8}>
          <div className="text-center">
            <Headline level={2}>Why Choose Enclosed.AI?</Headline>
            <Subhead className="max-w-3xl mx-auto">
              The numbers speak for themselves – see why businesses choose
              Enclosed.AI for their direct mail marketing
            </Subhead>
          </div>

          <Grid columns={4}>
            <Stat value="3-5x" label="Higher Response Rates" delta="vs traditional mail" />
            <Stat value="95%" label="Delivery Success Rate" delta="Guaranteed tracking" />
            <Stat value="24/7" label="Platform Availability" delta="Access anywhere" />
            <Stat value="$0" label="Setup Fees" delta="No hidden costs" />
          </Grid>
        </Stack>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gray-900 text-white text-center">
        <Stack gap={6}>
          <Headline level={2} className="text-white">
            Ready to Experience These Features?
          </Headline>
          <Subhead className="text-gray-300 max-w-3xl mx-auto">
            Start your free trial today and see how Enclosed.AI can transform
            your direct mail marketing with powerful AI-driven features.
          </Subhead>
          <Cluster gap={4} justify="center">
            <Button as={Link} href="/auth/signup" size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              Start Free Trial
            </Button>
            <Button as={Link} href="/contact" variant="ghost" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
              Schedule Demo
            </Button>
          </Cluster>
        </Stack>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <Section className="border-b border-gray-800">
          <Grid columns={4}>
            <div>
              <Logo
                size="md"
                showText={true}
                linkToHome={false}
                className="text-white [&>div>span]:text-white mb-4"
              />
              <p className="text-gray-400 text-sm">
                Direct mail marketing powered by artificial intelligence
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <Stack gap={2}>
                <Link href="/features" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Features
                </Link>
                <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Pricing
                </Link>
                <Link href="/integrations" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Integrations
                </Link>
                <Link href="/api" className="text-gray-400 hover:text-white transition-colors text-sm">
                  API
                </Link>
              </Stack>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <Stack gap={2}>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
                <Link href="/team" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Team
                </Link>
                <Link href="/careers" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Careers
                </Link>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </Stack>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <Stack gap={2}>
                <Link href="/help" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Help Center
                </Link>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors text-sm">
                  FAQ
                </Link>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
              </Stack>
            </div>
          </Grid>
        </Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Enclosed.AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
