import Link from "next/link";
import Logo from "@/components/Logo";
import {
  Section,
  Stack,
  Cluster,
  Eyebrow,
  Headline,
  Subhead,
  Button,
  Accordion,
} from "@/components/premium";

export const metadata = {
  title: "FAQ - Enclosed.AI | Frequently Asked Questions",
  description:
    "Find answers to common questions about Enclosed.AI's AI-powered direct mail marketing platform, pricing, features, and more.",
};

export default function FAQPage() {
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
          <Eyebrow>Quick Answers • 24/7 Support • Expert Help</Eyebrow>
          <Headline level={1}>Frequently Asked Questions</Headline>
          <Subhead className="max-w-4xl mx-auto">
            Find answers to common questions about our AI-powered direct mail
            marketing platform. Can't find what you're looking for?{" "}
            <Link
              href="/contact"
              className="text-blue-600 hover:text-blue-700 font-semibold underline decoration-2 underline-offset-4 hover:decoration-blue-500 transition-all duration-300"
            >
              Contact our support team
            </Link>
            .
          </Subhead>
          <Cluster gap={4} justify="center">
            <Button as={Link} href="#faq-content" size="lg">
              Browse Questions
            </Button>
            <Button as={Link} href="/contact" variant="ghost" size="lg">
              Ask a Question
            </Button>
          </Cluster>
        </Stack>
      </Section>

      {/* FAQ Content Section */}
      <Section id="faq-content" className="bg-gray-50">
        <Stack gap={12}>
          {/* Getting Started */}
          <div>
            <div className="flex items-center gap-4 mb-8">
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
              <Headline level={2}>Getting Started</Headline>
            </div>
            <Accordion
              items={[
                {
                  title: "How do I get started with Enclosed.AI?",
                  content: (
                    <div className="text-gray-700 leading-relaxed">
                      <p className="mb-4">
                        Getting started with Enclosed.AI is simple and takes just
                        a few minutes:
                      </p>
                      <ol className="list-decimal list-inside space-y-2 mb-4">
                        <li>
                          Sign up for a free account at{" "}
                          <Link
                            href="/auth/signup"
                            className="text-blue-600 hover:text-blue-700 font-semibold underline"
                          >
                            enclosed.ai/signup
                          </Link>
                        </li>
                        <li>Upload your recipient list (CSV format supported)</li>
                        <li>Choose your offer type and customize your campaign settings</li>
                        <li>Let our AI generate personalized letters for each recipient</li>
                        <li>Review and approve your campaign</li>
                        <li>We handle the printing, postage, and delivery</li>
                      </ol>
                      <p>
                        You can start with as few as 100 letters and scale up as
                        needed. No long-term contracts or minimum commitments
                        required.
                      </p>
                    </div>
                  )
                },
                {
                  title: "What file formats do you accept for recipient lists?",
                  content: (
                    <div className="text-gray-700 leading-relaxed">
                      <p className="mb-4">
                        We accept CSV files with the following required columns:
                      </p>
                      <ul className="list-disc list-inside space-y-1 mb-4">
                        <li><strong>First Name</strong> - Recipient's first name</li>
                        <li><strong>Last Name</strong> - Recipient's last name</li>
                        <li><strong>Address</strong> - Complete mailing address</li>
                        <li><strong>City</strong> - City name</li>
                        <li><strong>State</strong> - State or province</li>
                        <li><strong>ZIP Code</strong> - Postal code</li>
                        <li><strong>Email</strong> - Email address (optional, for tracking)</li>
                      </ul>
                      <p>
                        Additional columns like company, phone number, or custom
                        fields are also supported and can be used for
                        personalization. Our system will automatically validate
                        addresses and flag any that need correction before sending.
                      </p>
                    </div>
                  )
                },
                {
                  title: "Is there a minimum order size?",
                  content: (
                    <div className="text-gray-700 leading-relaxed">
                      <p className="mb-4">
                        Yes, our minimum order size is 100 letters. This ensures
                        we can provide competitive pricing while maintaining high
                        quality standards. However, we don't require any long-term
                        commitments or monthly minimums - you can send as many or
                        as few campaigns as you need, whenever you need them.
                      </p>
                      <p>
                        For larger orders, we offer volume discounts that
                        automatically apply based on your total quantity.
                        Enterprise customers with very high volume needs can
                        contact our sales team for custom pricing arrangements.
                      </p>
                    </div>
                  )
                }
              ]}
            />
          </div>

          {/* Pricing & Billing */}
          <div>
            <div className="flex items-center gap-4 mb-8">
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
              <Headline level={2}>Pricing & Billing</Headline>
            </div>
            <Accordion
              items={[
                {
                  title: "How does your pricing work?",
                  content: (
                    <div className="text-gray-700 leading-relaxed">
                      <p className="mb-4">
                        Our pricing is simple and transparent - you pay only for
                        the letters you send, with no monthly fees or hidden costs:
                      </p>
                      <ul className="list-disc list-inside space-y-2 mb-4">
                        <li><strong>Starter:</strong> $0.75 per letter (100+ letters)</li>
                        <li><strong>Professional:</strong> $0.65 per letter (1,000+ letters)</li>
                        <li><strong>Enterprise:</strong> $0.50 per letter (10,000+ letters)</li>
                      </ul>
                      <p>
                        Each price includes AI generation, professional printing,
                        first-class postage, delivery tracking, and basic
                        analytics. Volume discounts are automatically applied
                        based on your total order size.
                      </p>
                    </div>
                  )
                },
                {
                  title: "What payment methods do you accept?",
                  content: (
                    <div className="text-gray-700 leading-relaxed">
                      <p className="mb-4">We accept all major payment methods:</p>
                      <ul className="list-disc list-inside space-y-1 mb-4">
                        <li>Credit cards (Visa, MasterCard, American Express, Discover)</li>
                        <li>ACH bank transfers (for Enterprise customers)</li>
                        <li>Wire transfers (for large orders)</li>
                      </ul>
                      <p>
                        All payments are processed securely through Stripe, and
                        you can set up automatic billing for your campaigns.
                        Enterprise customers may also qualify for net payment terms.
                      </p>
                    </div>
                  )
                },
                {
                  title: "Are there any hidden fees or additional costs?",
                  content: (
                    <div className="text-gray-700 leading-relaxed">
                      <p className="mb-4">
                        No, there are absolutely no hidden fees or additional
                        costs. The price you see is the total price you pay. This includes:
                      </p>
                      <ul className="list-disc list-inside space-y-1 mb-4">
                        <li>AI-powered personalization and content generation</li>
                        <li>Professional printing on high-quality paper</li>
                        <li>First-class postage and USPS delivery</li>
                        <li>Delivery tracking and confirmation</li>
                        <li>Basic analytics and reporting</li>
                        <li>Customer support</li>
                      </ul>
                      <p>
                        There are no setup fees, monthly charges, processing fees,
                        or any other hidden costs. What you see is what you pay.
                      </p>
                    </div>
                  )
                }
              ]}
            />
          </div>

          {/* Features & Functionality */}
          <div>
            <div className="flex items-center gap-4 mb-8">
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
              <Headline level={2}>Features & Functionality</Headline>
            </div>
            <Accordion
              items={[
                {
                  title: "How does the AI personalization work?",
                  content: (
                    <div className="text-gray-700 leading-relaxed">
                      <p className="mb-4">
                        Our AI personalization system uses advanced machine
                        learning algorithms to analyze each recipient's profile
                        and generate unique, compelling content. Here's how it works:
                      </p>
                      <ol className="list-decimal list-inside space-y-2 mb-4">
                        <li><strong>Data Analysis:</strong> The AI analyzes recipient data including name, location, company, and any custom fields you provide</li>
                        <li><strong>Content Generation:</strong> Based on your offer type and recipient profile, the AI generates personalized messaging that speaks directly to their needs and interests</li>
                        <li><strong>Optimization:</strong> The system continuously learns from campaign performance to improve future personalization</li>
                        <li><strong>Quality Assurance:</strong> Each letter is reviewed for quality, relevance, and compliance before printing</li>
                      </ol>
                      <p>
                        This level of personalization typically results in 3-5x
                        higher response rates compared to generic direct mail campaigns.
                      </p>
                    </div>
                  )
                },
                {
                  title: "Can I preview letters before they're sent?",
                  content: (
                    <div className="text-gray-700 leading-relaxed">
                      <p className="mb-4">
                        Yes, absolutely! Before any campaign is sent, you can
                        preview sample letters to ensure the content and
                        personalization meet your expectations. Our preview system shows you:
                      </p>
                      <ul className="list-disc list-inside space-y-1 mb-4">
                        <li>Sample letters for different recipient types</li>
                        <li>How personalization varies across your list</li>
                        <li>Final formatting and layout</li>
                        <li>Print quality preview</li>
                      </ul>
                      <p>
                        You can request revisions or approve the campaign for
                        sending. We also provide a digital proof of the final
                        printed piece before it goes to the printer.
                      </p>
                    </div>
                  )
                },
                {
                  title: "What analytics and reporting do you provide?",
                  content: (
                    <div className="text-gray-700 leading-relaxed">
                      <p className="mb-4">
                        We provide comprehensive analytics to help you track and
                        optimize your campaigns:
                      </p>
                      <ul className="list-disc list-inside space-y-1 mb-4">
                        <li><strong>Delivery Tracking:</strong> Real-time status updates for each letter</li>
                        <li><strong>Response Metrics:</strong> Track opens, clicks, and conversions</li>
                        <li><strong>ROI Analysis:</strong> Calculate return on investment for each campaign</li>
                        <li><strong>Performance Insights:</strong> Identify top-performing segments and content</li>
                        <li><strong>Custom Reports:</strong> Generate detailed reports for stakeholders</li>
                      </ul>
                      <p>
                        All data is available in real-time through your dashboard,
                        and you can export reports in various formats for further analysis.
                      </p>
                    </div>
                  )
                }
              ]}
            />
          </div>

          {/* Support & Help */}
          <div>
            <div className="flex items-center gap-4 mb-8">
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
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <Headline level={2}>Support & Help</Headline>
            </div>
            <Accordion
              items={[
                {
                  title: "What support options are available?",
                  content: (
                    <div className="text-gray-700 leading-relaxed">
                      <p className="mb-4">
                        We offer multiple support channels to help you succeed:
                      </p>
                      <ul className="list-disc list-inside space-y-1 mb-4">
                        <li><strong>Email Support:</strong> support@enclosed.ai (response within 2 hours)</li>
                        <li><strong>Live Chat:</strong> Available 24/7 through your dashboard</li>
                        <li><strong>Phone Support:</strong> +1 (555) 123-4567 (business hours)</li>
                        <li><strong>Knowledge Base:</strong> Comprehensive documentation and tutorials</li>
                        <li><strong>Community Forum:</strong> Connect with other users and share tips</li>
                      </ul>
                      <p>
                        Enterprise customers receive dedicated account management
                        and priority support with faster response times.
                      </p>
                    </div>
                  )
                },
                {
                  title: "Do you offer training or onboarding?",
                  content: (
                    <div className="text-gray-700 leading-relaxed">
                      <p className="mb-4">
                        Yes, we provide comprehensive onboarding and training to
                        help you get the most out of Enclosed.AI:
                      </p>
                      <ul className="list-disc list-inside space-y-1 mb-4">
                        <li><strong>Welcome Call:</strong> One-on-one session with our success team</li>
                        <li><strong>Platform Walkthrough:</strong> Guided tour of all features and capabilities</li>
                        <li><strong>Best Practices:</strong> Tips and strategies for effective direct mail campaigns</li>
                        <li><strong>Ongoing Support:</strong> Regular check-ins and optimization recommendations</li>
                        <li><strong>Training Resources:</strong> Video tutorials, webinars, and documentation</li>
                      </ul>
                      <p>
                        All new customers receive this onboarding at no additional
                        cost. Enterprise customers get extended onboarding and
                        ongoing training sessions.
                      </p>
                    </div>
                  )
                }
              ]}
            />
          </div>
        </Stack>
      </Section>

      {/* Still Have Questions CTA */}
      <Section className="bg-gray-900 text-white text-center">
        <Stack gap={6}>
          <Headline level={2} className="text-white">
            Still Have Questions?
          </Headline>
          <Subhead className="text-gray-300 max-w-3xl mx-auto">
            Can't find the answer you're looking for? Our support team is here
            to help you succeed with your direct mail campaigns.
          </Subhead>
          <Cluster gap={4} justify="center">
            <Button as={Link} href="/contact" size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              Contact Support
            </Button>
            <Button as={Link} href="/auth/signup" variant="ghost" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
              Start Free Trial
            </Button>
          </Cluster>
        </Stack>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <Section className="border-b border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
          </div>
        </Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Enclosed.AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}