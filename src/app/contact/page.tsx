import Link from "next/link";
import Logo from "@/components/Logo";
import {
  Section,
  Grid,
  Flex,
  H1,
  H2,
  H3,
  Text,
  Button,
  Card,
  Badge,
  Container,
  Nav,
  NavLink,
  GlowOrb,
  Input,
  Select,
  Textarea,
  Form,
} from "@/components/ui";
export const metadata = {
  title: "Contact Us - Enclosed.AI | Get in Touch with Our Team",
  description:
    "Contact Enclosed.AI for support, sales inquiries, or general questions. We're here to help you succeed with direct mail marketing.",
};
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black">
      <GlowOrb className="top-20 left-10" color="accent" size="lg" />
      <GlowOrb className="bottom-20 right-10" color="purple" size="default" />
      {/* Header */}
      {/* Hero Section */}
      <Section className="text-center py-24">
        <Flex direction="col" gap={6} align="center">
          <Badge variant="accent">We're here to help • 24/7 Support • Quick Response</Badge>
          <H1 gradient>Get in Touch</H1>
          <Text size="xl" color="secondary" className="max-w-4xl leading-relaxed">
            Have questions about our platform? Need help with your campaigns?
            We're here to help you succeed with direct mail marketing.
          </Text>
          <Flex gap={4} justify="center">
            <Button as={Link} href="#contact-form" size="lg">
              Send Message
            </Button>
            <Button as={Link} href="tel:+1-555-123-4567" variant="ghost" size="lg">
              Call Now
            </Button>
          </Flex>
        </Flex>
      </Section>
      {/* Main Contact Section */}
      <Section className="py-24">
        <Grid cols={2} gap={8}>
          {/* Contact Form */}
          <Card glass className="p-8">
            <Flex direction="col" gap={6}>
              <Flex align="center" gap={4}>
                <div className="h-12 w-12 bg-[var(--accent)] rounded-lg flex items-center justify-center">
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
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <H2>Send us a message</H2>
              </Flex>
              <Form id="contact-form" className="space-y-6">
                <Grid cols={2} gap={6}>
                  <Input
                    label="First Name"
                    placeholder="John"
                    name="firstName"
                  />
                  <Input
                    label="Last Name"
                    placeholder="Doe"
                    name="lastName"
                  />
                </Grid>
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="john@company.com"
                  name="email"
                />
                <Input
                  label="Company"
                  placeholder="Your Company"
                  name="company"
                />
                <Select label="Subject" name="subject">
                  <option value="">Select a subject</option>
                  <option value="sales">Sales Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="other">Other</option>
                </Select>
                <Textarea
                  label="Message"
                  placeholder="Tell us how we can help you..."
                  rows={6}
                  name="message"
                />
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </Form>
            </Flex>
          </Card>
          {/* Contact Information */}
          <Flex direction="col" gap={6}>
            <Card glass className="p-8">
              <Flex direction="col" gap={6}>
                <Flex align="center" gap={4}>
                  <div className="h-12 w-12 bg-[var(--accent)] rounded-lg flex items-center justify-center">
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <H2>Contact Information</H2>
                </Flex>
                <Flex direction="col" gap={6}>
                  <Flex align="start" gap={4}>
                    <div className="h-12 w-12 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <Flex direction="col">
                      <H3 className="mb-1">Email Support</H3>
                      <Text color="secondary" className="mb-2">
                        Get help with your account and campaigns
                      </Text>
                      <a
                        href="mailto:support@enclosed.ai"
                        className="text-[var(--accent)] hover:text-[var(--accent)] font-medium"
                      >
                        support@enclosed.ai
                      </a>
                    </Flex>
                  </Flex>
                  <Flex align="start" gap={4}>
                    <div className="h-12 w-12 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <Flex direction="col">
                      <H3 className="mb-1">Phone Support</H3>
                      <Text color="secondary" className="mb-2">
                        Speak directly with our team
                      </Text>
                      <a
                        href="tel:+1-555-123-4567"
                        className="text-[var(--accent)] hover:text-[var(--accent)] font-medium"
                      >
                        +1 (555) 123-4567
                      </a>
                    </Flex>
                  </Flex>
                  <Flex align="start" gap={4}>
                    <div className="h-12 w-12 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <Flex direction="col">
                      <H3 className="mb-1">Office Address</H3>
                      <Text color="secondary" className="mb-2">
                        Visit our headquarters
                      </Text>
                      <address className="text-gray-300 not-italic">
                        123 Innovation Drive<br />
                        San Francisco, CA 94105<br />
                        United States
                      </address>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Card>
            <Card glass className="p-6">
              <Flex direction="col" gap={4}>
                <Flex align="center" gap={3}>
                  <div className="h-10 w-10 bg-[var(--accent)] rounded-lg flex items-center justify-center">
                    <svg
                      className="h-5 w-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <H3>Response Times</H3>
                </Flex>
                <Flex direction="col" gap={3}>
                  <Flex justify="between" align="center">
                    <Text color="secondary">Email Support</Text>
                    <Text weight="semibold">Within 2 hours</Text>
                  </Flex>
                  <Flex justify="between" align="center">
                    <Text color="secondary">Live Chat</Text>
                    <Text weight="semibold">Immediate</Text>
                  </Flex>
                  <Flex justify="between" align="center">
                    <Text color="secondary">Phone Support</Text>
                    <Text weight="semibold">Within 5 minutes</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Card>
          </Flex>
        </Grid>
      </Section>
      {/* Additional Contact Options */}
      <Section className="py-24">
        <Flex direction="col" gap={8}>
          <div className="text-center">
            <H2>Other Ways to Connect</H2>
            <Text size="lg" color="secondary" className="max-w-3xl mx-auto mt-4">
              Explore additional ways to get help and connect with our community
            </Text>
          </div>
          <Grid cols={3} gap={6}>
            <Card glass hover className="p-8 text-center">
              <Flex direction="col" gap={4} align="center">
                <div className="h-16 w-16 bg-[var(--accent)] rounded-lg flex items-center justify-center">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <H3>Community Forum</H3>
                <Text color="secondary" className="text-center">
                  Connect with other users, share tips, and get advice from the
                  Enclosed.AI community.
                </Text>
                <Button as={Link} href="/community" variant="secondary">
                  Join Community
                </Button>
              </Flex>
            </Card>
            <Card glass hover className="p-8 text-center">
              <Flex direction="col" gap={4} align="center">
                <div className="h-16 w-16 bg-[var(--accent)] rounded-lg flex items-center justify-center">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <H3>Knowledge Base</H3>
                <Text color="secondary" className="text-center">
                  Browse our comprehensive documentation, tutorials, and best
                  practices guides.
                </Text>
                <Button as={Link} href="/docs" variant="secondary">
                  Browse Docs
                </Button>
              </Flex>
            </Card>
            <Card glass hover className="p-8 text-center">
              <Flex direction="col" gap={4} align="center">
                <div className="h-16 w-16 bg-[var(--accent)] rounded-lg flex items-center justify-center">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <H3>Schedule a Demo</H3>
                <Text color="secondary" className="text-center">
                  Book a personalized demo to see how Enclosed.AI can work for
                  your business.
                </Text>
                <Button as={Link} href="/demo" variant="secondary">
                  Book Demo
                </Button>
              </Flex>
            </Card>
          </Grid>
        </Flex>
      </Section>
      {/* Footer */}
      <footer className="border-t border-gray-800">
        <Section className="py-12">
          <Grid cols={4} gap={8}>
            <div>
              <Logo
                size="md"
                showText={true}
                linkToHome={false}
                className="mb-4"
              />
              <Text size="sm" color="muted">
                Direct mail marketing powered by artificial intelligence
              </Text>
            </div>
            <div>
              <Text weight="semibold" className="mb-4">Product</Text>
              <Flex direction="col" gap={2}>
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
              </Flex>
            </div>
            <div>
              <Text weight="semibold" className="mb-4">Company</Text>
              <Flex direction="col" gap={2}>
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
              </Flex>
            </div>
            <div>
              <Text weight="semibold" className="mb-4">Support</Text>
              <Flex direction="col" gap={2}>
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
              </Flex>
            </div>
          </Grid>
        </Section>
        <Container className="py-8 text-center border-t border-gray-800">
          <Text size="sm" color="muted">&copy; 2024 Enclosed.AI. All rights reserved.</Text>
        </Container>
      </footer>
    </div>
  );
}