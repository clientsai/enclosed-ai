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
  Timeline,
} from "@/components/premium";

export const metadata = {
  title: "About Us - Enclosed.AI | Direct Mail Marketing Platform",
  description:
    "Learn about Enclosed.AI's mission to revolutionize direct mail marketing with AI-powered personalization and seamless campaign management.",
};

export default function AboutPage() {
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
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
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
                className="text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
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
          <Eyebrow>Trusted by 500+ businesses worldwide</Eyebrow>
          <Headline level={1}>
            Revolutionizing Direct Mail with Artificial Intelligence
          </Headline>
          <Subhead className="max-w-4xl mx-auto">
            We're on a mission to transform how businesses connect with their
            customers through intelligent, personalized direct mail campaigns
            that deliver real results.
          </Subhead>
          <Cluster gap={4} justify="center">
            <Button as={Link} href="/auth/signup" size="lg">
              Start Your Journey
            </Button>
            <Button as={Link} href="/contact" variant="ghost" size="lg">
              Learn More
            </Button>
          </Cluster>
        </Stack>
      </Section>

      {/* Mission Section */}
      <Section className="bg-gray-50">
        <Split>
          <Stack gap={6}>
            <div>
              <Headline level={2}>Our Mission</Headline>
            </div>
            <Stack gap={5}>
              <Lead>
                At Enclosed.AI, we believe that every customer deserves a
                personalized experience, even in the physical world. Our
                mission is to democratize high-quality direct mail marketing
                by making it accessible, affordable, and incredibly effective
                for businesses of all sizes.
              </Lead>
              <p className="text-gray-700 leading-relaxed">
                We've seen too many businesses struggle with generic,
                ineffective direct mail campaigns that waste money and fail to
                connect with their audience. That's why we built Enclosed.AI –
                to give every business the power of AI-driven personalization
                that was previously only available to enterprise companies
                with massive marketing budgets.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <p className="text-blue-900 font-medium italic">
                  "We're not just sending mail – we're creating meaningful
                  connections between businesses and their customers, one
                  personalized letter at a time."
                </p>
                <p className="text-blue-600 text-sm mt-2 font-semibold">
                  — Sarah Mitchell, CEO & Co-Founder
                </p>
              </div>
            </Stack>
          </Stack>
          <div className="relative">
            <Card className="p-8">
              <Grid columns={2}>
                <Stat value="10,000+" label="Letters Sent" />
                <Stat value="95%" label="Delivery Rate" />
                <Stat value="3.2x" label="Higher Response" />
                <Stat value="500+" label="Happy Customers" />
              </Grid>
            </Card>
          </div>
        </Split>
      </Section>

      {/* Story Section */}
      <Section>
        <Stack gap={8}>
          <div className="text-center">
            <Headline level={2}>Our Story</Headline>
          </div>

          <Timeline
            items={[
              {
                date: "2022",
                title: "The Problem",
                content: (
                  <p className="text-gray-700 leading-relaxed">
                    Our founding team, comprised of marketing veterans and AI
                    specialists, spent months researching the direct mail
                    industry. We discovered that the average response rate for
                    traditional direct mail campaigns was just 2.7%, while
                    personalized campaigns could achieve response rates of
                    5-8%. The problem wasn't with direct mail itself – it was
                    with how it was being executed.
                  </p>
                )
              },
              {
                date: "2023",
                title: "The Solution",
                content: (
                  <p className="text-gray-700 leading-relaxed">
                    We set out to solve this by combining cutting-edge AI
                    technology with the proven effectiveness of direct mail.
                    Our platform analyzes each recipient's profile,
                    preferences, and behavior patterns to generate highly
                    personalized sales letters that speak directly to their
                    needs and interests. The results have been remarkable –
                    our customers consistently see response rates 3-5x higher
                    than industry averages.
                  </p>
                )
              },
              {
                date: "2024",
                title: "The Impact",
                content: (
                  <p className="text-gray-700 leading-relaxed">
                    Today, Enclosed.AI serves businesses across industries,
                    from small startups to Fortune 500 companies. We're proud
                    to be at the forefront of the direct mail revolution,
                    helping businesses build stronger relationships with their
                    customers through the power of personalized, AI-driven
                    communication.
                  </p>
                )
              }
            ]}
          />
        </Stack>
      </Section>

      {/* Values Section */}
      <Section className="bg-gray-50">
        <Stack gap={8}>
          <div className="text-center">
            <Headline level={2}>Our Values</Headline>
            <Subhead className="max-w-3xl mx-auto">
              These core principles guide everything we do and shape how we
              serve our customers
            </Subhead>
          </div>

          <Grid columns={3}>
            <Card hover className="p-8">
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <Headline level={3}>Innovation First</Headline>
                <p className="text-gray-700 leading-relaxed">
                  We constantly push the boundaries of what's possible in direct
                  mail marketing. Our team is always exploring new AI
                  technologies, testing innovative approaches, and finding better
                  ways to help our customers succeed.
                </p>
              </Stack>
            </Card>

            <Card hover className="p-8">
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
                <Headline level={3}>Customer Success</Headline>
                <p className="text-gray-700 leading-relaxed">
                  Your success is our success. We measure our own performance by
                  how well our customers achieve their marketing goals. Every
                  feature we build, every improvement we make, is designed with
                  your success in mind.
                </p>
              </Stack>
            </Card>

            <Card hover className="p-8">
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
                <Headline level={3}>Transparency</Headline>
                <p className="text-gray-700 leading-relaxed">
                  We believe in complete transparency in everything we do. From
                  our pricing to our processes, from our data handling to our
                  delivery methods – we're open and honest about how we operate
                  and how we can help you succeed.
                </p>
              </Stack>
            </Card>
          </Grid>
        </Stack>
      </Section>

      {/* Team Preview Section */}
      <Section>
        <Stack gap={8}>
          <div className="text-center">
            <Headline level={2}>Meet Our Team</Headline>
            <Subhead className="max-w-3xl mx-auto">
              We're a diverse group of marketers, engineers, and AI specialists
              united by our passion for revolutionizing direct mail marketing.
            </Subhead>
          </div>

          <Grid columns={4}>
            <Card hover className="p-6 text-center">
              <Stack gap={4}>
                <div className="w-20 h-20 bg-gray-900 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-white text-xl font-bold">SM</span>
                </div>
                <div>
                  <Headline level={4} className="mb-1">Sarah Mitchell</Headline>
                  <p className="text-blue-600 font-semibold text-sm mb-3">
                    CEO & Co-Founder
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Former VP Marketing at TechCorp with 15+ years in direct mail
                    marketing. Led teams that generated $50M+ in revenue through
                    innovative campaigns.
                  </p>
                </div>
              </Stack>
            </Card>

            <Card hover className="p-6 text-center">
              <Stack gap={4}>
                <div className="w-20 h-20 bg-gray-900 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-white text-xl font-bold">DJ</span>
                </div>
                <div>
                  <Headline level={4} className="mb-1">David Johnson</Headline>
                  <p className="text-blue-600 font-semibold text-sm mb-3">
                    CTO & Co-Founder
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    AI/ML expert and former Google engineer with expertise in
                    natural language processing and machine learning algorithms.
                  </p>
                </div>
              </Stack>
            </Card>

            <Card hover className="p-6 text-center">
              <Stack gap={4}>
                <div className="w-20 h-20 bg-gray-900 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-white text-xl font-bold">LC</span>
                </div>
                <div>
                  <Headline level={4} className="mb-1">Lisa Chen</Headline>
                  <p className="text-blue-600 font-semibold text-sm mb-3">
                    Head of Product
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    UX specialist and former product lead at Mailchimp with a
                    passion for creating intuitive, user-friendly experiences.
                  </p>
                </div>
              </Stack>
            </Card>

            <Card hover className="p-6 text-center">
              <Stack gap={4}>
                <div className="w-20 h-20 bg-gray-900 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-white text-xl font-bold">MR</span>
                </div>
                <div>
                  <Headline level={4} className="mb-1">Michael Rodriguez</Headline>
                  <p className="text-blue-600 font-semibold text-sm mb-3">
                    Head of Engineering
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Full-stack developer and scalability expert who ensures our
                    platform can handle millions of personalized campaigns.
                  </p>
                </div>
              </Stack>
            </Card>
          </Grid>

          <div className="text-center">
            <Button as={Link} href="/team" variant="ghost" size="lg">
              View Full Team
            </Button>
          </div>
        </Stack>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gray-900 text-white text-center">
        <Stack gap={6}>
          <Headline level={2} className="text-white">
            Ready to Transform Your Direct Mail?
          </Headline>
          <Subhead className="text-gray-300 max-w-3xl mx-auto">
            Join hundreds of businesses already using Enclosed.AI to create more
            effective, personalized direct mail campaigns that drive real
            results.
          </Subhead>
          <Cluster gap={4} justify="center">
            <Button as={Link} href="/auth/signup" size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              Start Your Free Trial
            </Button>
            <Button as={Link} href="/contact" variant="ghost" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
              Schedule a Demo
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
