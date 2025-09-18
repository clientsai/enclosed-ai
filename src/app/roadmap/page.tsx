import Link from "next/link";
import Logo from "@/components/Logo";
import {
  Section,
  Grid,
  Stack,
  Cluster,
  Eyebrow,
  Headline,
  Subhead,
  Button,
  Card,
  Badge,
  Timeline,
} from "@/components/premium";

export const metadata = {
  title: "Product Roadmap - Enclosed.AI | Upcoming Features & Updates",
  description:
    "Explore our product roadmap and see what new features and improvements are coming to Enclosed.AI's AI-powered direct mail platform.",
};

export default function RoadmapPage() {
  const roadmapItems = [
    {
      date: "Q2 2024",
      title: "Advanced AI Personalization Engine 2.0",
      content: "Enhanced machine learning algorithms that analyze customer behavior patterns to create even more personalized and effective direct mail content. Includes sentiment analysis and predictive modeling for optimal messaging timing."
    },
    {
      date: "Q2 2024",
      title: "Real-Time Campaign Optimization",
      content: "Automatic campaign adjustments based on real-time performance data. The system will dynamically modify messaging, timing, and targeting to improve response rates during active campaigns."
    },
    {
      date: "Q3 2024",
      title: "Mobile App for Campaign Management",
      content: "Native iOS and Android apps allowing full campaign management on mobile devices. Includes approval workflows, performance monitoring, and instant notifications for campaign milestones."
    },
    {
      date: "Q3 2024",
      title: "Enhanced CRM Integrations",
      content: "Deeper integrations with Salesforce, HubSpot, and Microsoft Dynamics. Includes bidirectional data sync, automated lead scoring, and trigger-based campaign launches from CRM events."
    },
    {
      date: "Q4 2024",
      title: "International Expansion",
      content: "Support for international direct mail campaigns in Canada, UK, and Australia. Includes local postal regulations, currency handling, and region-specific compliance features."
    },
    {
      date: "Q4 2024",
      title: "Advanced Analytics Dashboard",
      content: "Comprehensive analytics suite with predictive insights, cohort analysis, and advanced segmentation tools. Includes custom report builder and automated performance alerts."
    },
    {
      date: "Q1 2025",
      title: "AI Voice Assistant Integration",
      content: "Voice-controlled campaign creation and management through integration with popular AI assistants. Create campaigns, check performance, and approve designs using natural language commands."
    },
    {
      date: "Q1 2025",
      title: "White-Label Platform",
      content: "Complete white-label solution for agencies and resellers. Includes custom branding, client management tools, and sub-account functionality with granular permissions."
    },
  ];

  const currentFeatures = [
    "AI-Powered Content Generation",
    "Multi-Channel Campaign Coordination",
    "Real-Time Performance Tracking",
    "CRM Integration (Salesforce, HubSpot)",
    "Automated A/B Testing",
    "Compliance Management Tools",
    "Custom Template Builder",
    "Advanced Audience Segmentation",
  ];

  const upcomingHighlights = [
    {
      title: "Global Expansion",
      description: "Expanding direct mail capabilities to international markets with local compliance and postal integration.",
      quarter: "Q4 2024",
      impact: "Access new markets and serve international customers",
    },
    {
      title: "Mobile-First Experience",
      description: "Native mobile apps for campaign management and performance monitoring on the go.",
      quarter: "Q3 2024",
      impact: "Manage campaigns from anywhere with full functionality",
    },
    {
      title: "AI 2.0 Engine",
      description: "Next-generation AI with advanced behavioral analysis and predictive personalization.",
      quarter: "Q2 2024",
      impact: "20-30% improvement in campaign response rates",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Logo size="md" />
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
              <Link href="/features" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Features</Link>
              <Link href="/roadmap" className="text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Roadmap</Link>
              <Link href="/pricing" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Pricing</Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/auth/login" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Sign In</Link>
              <Button as={Link} href="/auth/signup" size="sm">Get Started</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <Section className="text-center">
        <Stack gap={6}>
          <Eyebrow>Product Roadmap</Eyebrow>
          <Headline level={1}>The Future of AI-Powered Direct Mail</Headline>
          <Subhead className="max-w-3xl mx-auto">
            Discover what's coming next for Enclosed.AI. Our roadmap reflects customer feedback, market trends, and our vision for the future of direct mail marketing. Stay ahead with the latest innovations.
          </Subhead>
          <Cluster gap={4} justify="center">
            <Button as={Link} href="/auth/signup" size="lg">Get Early Access</Button>
            <Button as={Link} href="#timeline" variant="ghost" size="lg">View Timeline</Button>
          </Cluster>
        </Stack>
      </Section>

      {/* Current Features */}
      <Section className="bg-gray-50">
        <Stack gap={8}>
          <div className="text-center">
            <Headline level={2}>Available Today</Headline>
            <Subhead className="max-w-3xl mx-auto">Powerful features already helping thousands of businesses succeed</Subhead>
          </div>
          <Card className="p-8 max-w-4xl mx-auto">
            <Grid columns={2}>
              {currentFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 py-2">
                  <div className="h-5 w-5 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xs font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </Grid>
          </Card>
        </Stack>
      </Section>

      {/* Upcoming Highlights */}
      <Section>
        <Stack gap={8}>
          <div className="text-center">
            <Headline level={2}>Coming Soon Highlights</Headline>
            <Subhead className="max-w-3xl mx-auto">Major features and improvements on the horizon</Subhead>
          </div>
          <Grid columns={3}>
            {upcomingHighlights.map((highlight, index) => (
              <Card key={index} className="p-6">
                <Stack gap={4}>
                  <div className="flex items-center justify-between">
                    <Badge variant="default">{highlight.quarter}</Badge>
                  </div>
                  <Headline level={4} className="text-lg">{highlight.title}</Headline>
                  <p className="text-gray-700 leading-relaxed text-sm">{highlight.description}</p>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-blue-700 font-medium text-sm">Impact: {highlight.impact}</p>
                  </div>
                </Stack>
              </Card>
            ))}
          </Grid>
        </Stack>
      </Section>

      {/* Roadmap Timeline */}
      <Section id="timeline" className="bg-gray-50">
        <Stack gap={8}>
          <div className="text-center">
            <Headline level={2}>Development Timeline</Headline>
            <Subhead className="max-w-3xl mx-auto">Detailed roadmap of upcoming features and improvements</Subhead>
          </div>
          <div className="max-w-4xl mx-auto">
            <Timeline items={roadmapItems} />
          </div>
        </Stack>
      </Section>

      {/* Feature Requests */}
      <Section>
        <Stack gap={8}>
          <div className="text-center">
            <Headline level={2}>Shape Our Future</Headline>
            <Subhead className="max-w-3xl mx-auto">Your feedback drives our development priorities</Subhead>
          </div>
          <Grid columns={2}>
            <Card className="p-8">
              <Stack gap={4}>
                <Headline level={3}>Request a Feature</Headline>
                <p className="text-gray-700 leading-relaxed">
                  Have an idea for a feature that would improve your direct mail campaigns? We want to hear from you! Our product team reviews all submissions and prioritizes based on customer impact.
                </p>
                <Button>Submit Feature Request</Button>
              </Stack>
            </Card>
            <Card className="p-8">
              <Stack gap={4}>
                <Headline level={3}>Join Beta Testing</Headline>
                <p className="text-gray-700 leading-relaxed">
                  Get early access to new features and help us perfect them before general release. Beta testers receive exclusive previews and can directly influence final implementations.
                </p>
                <Button variant="ghost">Join Beta Program</Button>
              </Stack>
            </Card>
          </Grid>
        </Stack>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gray-900 text-white text-center">
        <Stack gap={6}>
          <Headline level={2} className="text-white">Ready to Experience the Future?</Headline>
          <Subhead className="text-gray-300 max-w-3xl mx-auto">
            Start using Enclosed.AI today and get automatic access to all new features as they're released. No additional costs, just continuous innovation.
          </Subhead>
          <Cluster gap={4} justify="center">
            <Button as={Link} href="/auth/signup" size="lg" className="bg-white text-gray-900 hover:bg-gray-100">Start Free Trial</Button>
            <Button as={Link} href="/contact" variant="ghost" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">Contact Us</Button>
          </Cluster>
        </Stack>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <Section className="border-b border-gray-800">
          <Grid columns={4}>
            <div>
              <Logo size="md" showText={true} linkToHome={false} className="text-white [&>div>span]:text-white mb-4" />
              <p className="text-gray-400 text-sm">Direct mail marketing powered by artificial intelligence</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <Stack gap={2}>
                <Link href="/features" className="text-gray-400 hover:text-white transition-colors text-sm">Features</Link>
                <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors text-sm">Pricing</Link>
                <Link href="/roadmap" className="text-gray-400 hover:text-white transition-colors text-sm">Roadmap</Link>
                <Link href="/integrations" className="text-gray-400 hover:text-white transition-colors text-sm">Integrations</Link>
              </Stack>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <Stack gap={2}>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link>
                <Link href="/careers" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</Link>
                <Link href="/press" className="text-gray-400 hover:text-white transition-colors text-sm">Press</Link>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link>
              </Stack>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <Stack gap={2}>
                <Link href="/webinars" className="text-gray-400 hover:text-white transition-colors text-sm">Webinars</Link>
                <Link href="/partners" className="text-gray-400 hover:text-white transition-colors text-sm">Partners</Link>
                <Link href="/press" className="text-gray-400 hover:text-white transition-colors text-sm">Press</Link>
                <Link href="/help" className="text-gray-400 hover:text-white transition-colors text-sm">Support</Link>
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