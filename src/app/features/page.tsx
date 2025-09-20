/*
 * Features Page - Minimalist Dark Theme
 * Comprehensive feature showcase
 */
import Link from "next/link";
import Logo from "@/components/Logo";
import {
  Container,
  Section,
  Grid,
  Flex,
  H1,
  H2,
  H3,
  H4,
  Text,
  Button,
  Card,
  Badge,
  Nav,
  NavLink,
  GlowOrb,
} from "@/components/ui";
export const metadata = {
  title: "Features - Enclosed.AI | AI-Powered Direct Mail Marketing",
  description:
    "Discover the powerful features that make Enclosed.AI the leading AI-powered direct mail marketing platform. Personalization, analytics, and automation.",
};
export default function FeaturesPage() {
  return (
    <div >
      {/* Navigation */}
      {/* Hero Section */}
      <Section >
        <GlowOrb color="accent" size="lg"  />
        <GlowOrb color="purple" size="default"  />
        <Container size="lg">
          <Badge variant="accent" >Powerful Features</Badge>
          <H1 >
            Everything You Need to
            <br />
            <span >Transform Direct Mail</span>
          </H1>
          <Text size="xl" color="secondary" >
            Our comprehensive platform combines AI personalization, seamless automation,
            and real-time analytics to deliver exceptional direct mail campaigns at scale.
          </Text>
          <Flex gap={4} justify="center">
            <Button variant="primary" size="lg" href="/auth/signup">
              Start Free Trial
            </Button>
            <Button variant="secondary" size="lg" href="/demo">
              Watch Demo
            </Button>
          </Flex>
        </Container>
      </Section>
      {/* Core Features Grid */}
      <Section >
        <Container size="xl">
          <div >
            <H2>Core Features</H2>
            <Text size="lg" color="secondary">
              Built for modern marketers who demand results
            </Text>
          </div>
          <Grid cols={3} gap={8}>
            {/* AI Personalization */}
            <Card glass hover >
              <div >
                <svg  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <H3 >AI Personalization</H3>
              <Text color="secondary" >
                Generate unique, personalized content for every recipient using advanced AI that understands context and intent.
              </Text>
              <div >
                <Flex gap={4} align="start">
                  <div >
                    <span >✓</span>
                  </div>
                  <Text size="sm" color="secondary">Dynamic content generation</Text>
                </Flex>
                <Flex gap={4} align="start">
                  <div >
                    <span >✓</span>
                  </div>
                  <Text size="sm" color="secondary">Behavioral targeting</Text>
                </Flex>
                <Flex gap={4} align="start">
                  <div >
                    <span >✓</span>
                  </div>
                  <Text size="sm" color="secondary">Smart offer optimization</Text>
                </Flex>
              </div>
            </Card>
            {/* Campaign Automation */}
            <Card glass hover >
              <div >
                <svg  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <H3 >Campaign Automation</H3>
              <Text color="secondary" >
                Set up triggered campaigns, scheduled sends, and multi-touch sequences that run on autopilot.
              </Text>
              <div >
                <Flex gap={4} align="start">
                  <div >
                    <span >✓</span>
                  </div>
                  <Text size="sm" color="secondary">Trigger-based sending</Text>
                </Flex>
                <Flex gap={4} align="start">
                  <div >
                    <span >✓</span>
                  </div>
                  <Text size="sm" color="secondary">A/B testing built-in</Text>
                </Flex>
                <Flex gap={4} align="start">
                  <div >
                    <span >✓</span>
                  </div>
                  <Text size="sm" color="secondary">Multi-channel coordination</Text>
                </Flex>
              </div>
            </Card>
            {/* Real-Time Analytics */}
            <Card glass hover >
              <div >
                <svg  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <H3 >Real-Time Analytics</H3>
              <Text color="secondary" >
                Track performance, measure ROI, and optimize campaigns with comprehensive analytics dashboards.
              </Text>
              <div >
                <Flex gap={4} align="start">
                  <div >
                    <span >✓</span>
                  </div>
                  <Text size="sm" color="secondary">Live tracking dashboard</Text>
                </Flex>
                <Flex gap={4} align="start">
                  <div >
                    <span >✓</span>
                  </div>
                  <Text size="sm" color="secondary">ROI measurement</Text>
                </Flex>
                <Flex gap={4} align="start">
                  <div >
                    <span >✓</span>
                  </div>
                  <Text size="sm" color="secondary">Custom reports</Text>
                </Flex>
              </div>
            </Card>
          </Grid>
        </Container>
      </Section>
      {/* Advanced Features */}
      <Section >
        <Container size="xl">
          <div >
            <H2>Advanced Capabilities</H2>
            <Text size="lg" color="secondary">
              Enterprise-grade features for sophisticated campaigns
            </Text>
          </div>
          <Grid cols={4} gap={6}>
            <Card glass hover >
              <div >
                <svg  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v-2m0 2a2 2 0 100 4m0-4a2 2 0 110 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <H4 >Smart Segmentation</H4>
              <Text size="sm" color="secondary">
                Advanced list management with AI-powered segmentation and targeting
              </Text>
            </Card>
            <Card glass hover >
              <div >
                <svg  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <H4 >Quality Assurance</H4>
              <Text size="sm" color="secondary">
                Automated proofing and compliance checks before sending
              </Text>
            </Card>
            <Card glass hover >
              <div >
                <svg  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <H4 >Flexible Pricing</H4>
              <Text size="sm" color="secondary">
                Pay-per-use with volume discounts and transparent pricing
              </Text>
            </Card>
            <Card glass hover >
              <div >
                <svg  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <H4 >Enterprise Security</H4>
              <Text size="sm" color="secondary">
                SOC 2 compliant with bank-level encryption and data protection
              </Text>
            </Card>
            <Card glass hover >
              <div >
                <svg  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <H4 >API Integration</H4>
              <Text size="sm" color="secondary">
                Connect with your CRM, ESP, and marketing tools seamlessly
              </Text>
            </Card>
            <Card glass hover >
              <div >
                <svg  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <H4 >Global Delivery</H4>
              <Text size="sm" color="secondary">
                Send mail anywhere with our worldwide delivery network
              </Text>
            </Card>
            <Card glass hover >
              <div >
                <svg  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9.75 9.75 0 11-19.5 0 9.75 9.75 0 0119.5 0z" />
                </svg>
              </div>
              <H4 >24/7 Support</H4>
              <Text size="sm" color="secondary">
                Dedicated success team available around the clock
              </Text>
            </Card>
            <Card glass hover >
              <div >
                <svg  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <H4 >White Glove Service</H4>
              <Text size="sm" color="secondary">
                Concierge onboarding and campaign management available
              </Text>
            </Card>
          </Grid>
        </Container>
      </Section>
      {/* Integration Section */}
      <Section >
        <Container size="lg">
          <Grid cols={2} gap={8} >
            <div>
              <Badge variant="accent" >Integrations</Badge>
              <H2 >
                Connects with Your
                <br />
                <span >Entire Tech Flex</span>
              </H2>
              <Text size="lg" color="secondary" >
                Seamlessly integrate with your existing tools and workflows. Our platform works with all major CRMs, marketing platforms, and analytics tools.
              </Text>
              <div >
                <Flex gap={4} >
                  <div >
                    <span >✓</span>
                  </div>
                  <Text>Salesforce, HubSpot, Pipedrive CRM sync</Text>
                </Flex>
                <Flex gap={4} >
                  <div >
                    <span >✓</span>
                  </div>
                  <Text>Mailchimp, Klaviyo, ActiveCampaign</Text>
                </Flex>
                <Flex gap={4} >
                  <div >
                    <span >✓</span>
                  </div>
                  <Text>Google Analytics, Segment, Mixpanel</Text>
                </Flex>
                <Flex gap={4} >
                  <div >
                    <span >✓</span>
                  </div>
                  <Text>Custom API and webhook support</Text>
                </Flex>
              </div>
            </div>
            <div >
              <GlowOrb color="accent" size="lg"  />
              <Card glass >
                <Grid cols={3} gap={6}>
                  {[
                    "Salesforce", "HubSpot", "Stripe",
                    "Shopify", "Mailchimp", "Slack",
                    "Google Analytics", "Zapier", "Segment"
                  ].map((tool) => (
                    <div key={tool} >
                      <Text size="sm" color="secondary">{tool}</Text>
                    </div>
                  ))}
                </Grid>
              </Card>
            </div>
          </Grid>
        </Container>
      </Section>
      {/* CTA Section */}
      <Section >
        <GlowOrb  color="accent" size="lg" />
        <Container size="default">
          <H2 >
            Ready to Transform Your
            <br />
            <span >Direct Mail Marketing?</span>
          </H2>
          <Text size="lg" color="secondary" >
            Join thousands of businesses using Enclosed.AI to send smarter, more effective direct mail campaigns.
          </Text>
          <Flex gap={4} justify="center">
            <Button variant="primary" size="lg" href="/auth/signup">
              Start Free Trial
            </Button>
            <Button variant="secondary" size="lg" href="/demo">
              Schedule Demo
            </Button>
          </Flex>
        </Container>
      </Section>
      {/* Footer */}
      <footer >
        <Container size="xl" >
          <Grid cols={4} gap={8}>
            <div>
              <Logo size="md" showText  />
              <Text size="sm" color="muted">
                AI-powered direct mail marketing
              </Text>
            </div>
            <div>
              <Text weight="semibold" >Product</Text>
              <Flex direction="col" gap={2}>
                <Link href="/features">
                  <Text size="sm" color="muted" >Features</Text>
                </Link>
                <Link href="/pricing">
                  <Text size="sm" color="muted" >Pricing</Text>
                </Link>
                <Link href="/api">
                  <Text size="sm" color="muted" >API</Text>
                </Link>
              </Flex>
            </div>
            <div>
              <Text weight="semibold" >Company</Text>
              <Flex direction="col" gap={2}>
                <Link href="/about">
                  <Text size="sm" color="muted" >About</Text>
                </Link>
                <Link href="/careers">
                  <Text size="sm" color="muted" >Careers</Text>
                </Link>
                <Link href="/contact">
                  <Text size="sm" color="muted" >Contact</Text>
                </Link>
              </Flex>
            </div>
            <div>
              <Text weight="semibold" >Support</Text>
              <Flex direction="col" gap={2}>
                <Link href="/help">
                  <Text size="sm" color="muted" >Help Center</Text>
                </Link>
                <Link href="/privacy">
                  <Text size="sm" color="muted" >Privacy</Text>
                </Link>
                <Link href="/terms">
                  <Text size="sm" color="muted" >Terms</Text>
                </Link>
              </Flex>
            </div>
          </Grid>
        </Container>
        <div >
          <Container>
            <Text size="sm" color="muted" >
              © 2024 Enclosed.AI. All rights reserved.
            </Text>
          </Container>
        </div>
      </footer>
    </div>
  );
}