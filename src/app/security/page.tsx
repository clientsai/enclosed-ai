/* Security & Compliance - Enterprise-Grade Protection */
import Link from "next/link";
import {
  Container,
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
  Nav,
  NavLink,
  GlowOrb,
  Divider,
} from "@/components/ui";
import Logo from "@/components/Logo";

export const metadata = {
  title: "Security & Compliance - Enterprise-Grade Protection | Enclosed.AI",
  description:
    "Learn about Enclosed.AI's enterprise-grade security measures, data protection, and compliance certifications.",
};

export default function SecurityPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Ambient background effects */}
      <GlowOrb color="accent" size="lg" className="top-1/4 -left-32" />
      <GlowOrb color="purple" size="default" className="bottom-1/4 right-0" />

      {/* Navigation */}
      <Nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/50 border-b border-white/5">
        <Logo size="md" />
        <Flex gap={8} align="center" className="hidden md:flex">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/features">Features</NavLink>
          <NavLink href="/pricing">Pricing</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </Flex>
        <Flex gap={4}>
          <Button variant="ghost" size="sm" href="/auth/login">
            Sign In
          </Button>
          <Button variant="primary" size="sm" href="/auth/signup">
            Get Started
          </Button>
        </Flex>
      </Nav>

      {/* Hero Section */}
      <Section className="min-h-screen flex items-center justify-center pt-20">
        <Container size="lg">
          <Flex direction="col" align="center" gap={8} className="text-center">
            <Badge variant="accent" className="animate-fade-in">
              Enterprise-Grade Security
            </Badge>
            <H1 className="animate-fade-up max-w-5xl" gradient>
              Security & Compliance
            </H1>
            <Text
              size="2xl"
              color="secondary"
              weight="light"
              className="animate-fade-up animation-delay-100 max-w-3xl"
            >
              Your data security is our top priority. We implement industry-leading
              security measures to protect your information and ensure compliance.
            </Text>
          </Flex>
        </Container>
      </Section>

      {/* Security Features */}
      <Section>
        <Container>
          <Flex direction="col" gap={12}>
            <div className="text-center">
              <Badge className="mb-4">Protection</Badge>
              <H2 className="mb-4">Security Features</H2>
              <Text size="xl" color="secondary" className="max-w-3xl mx-auto">
                Enterprise-grade security features to protect your data and campaigns.
              </Text>
            </div>

            <Grid cols={3} gap={8}>
              <Card hover className="p-8 text-center">
                <Flex direction="col" gap={4}>
                  <div className="h-16 w-16 bg-[var(--accent)] rounded-lg flex items-center justify-center mx-auto">
                    <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <H3>End-to-End Encryption</H3>
                  <Text color="secondary">
                    All data is encrypted in transit and at rest using AES-256 encryption standards.
                  </Text>
                </Flex>
              </Card>

              <Card hover className="p-8 text-center">
                <Flex direction="col" gap={4}>
                  <div className="h-16 w-16 bg-[var(--accent)] rounded-lg flex items-center justify-center mx-auto">
                    <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <H3>SOC 2 Compliance</H3>
                  <Text color="secondary">
                    We maintain SOC 2 Type II certification for security, availability, and confidentiality.
                  </Text>
                </Flex>
              </Card>

              <Card hover className="p-8 text-center">
                <Flex direction="col" gap={4}>
                  <div className="h-16 w-16 bg-[var(--accent)] rounded-lg flex items-center justify-center mx-auto">
                    <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <H3>24/7 Monitoring</H3>
                  <Text color="secondary">
                    Continuous security monitoring and threat detection across our infrastructure.
                  </Text>
                </Flex>
              </Card>
            </Grid>
          </Flex>
        </Container>
      </Section>

      {/* Footer */}
      <footer className="border-t border-white/5 mt-24">
        <Container>
          <div className="py-12">
            <Grid cols={5} gap={8} className="mb-12">
              <div>
                <Logo showText size="sm" className="mb-4" />
                <Text size="sm" color="muted">
                  Direct mail marketing powered by artificial intelligence
                </Text>
              </div>
              {[
                {
                  title: "Product",
                  links: ["Features", "Pricing", "API", "Integrations"],
                },
                {
                  title: "Company",
                  links: ["About", "Team", "Careers", "Contact"],
                },
                {
                  title: "Resources",
                  links: ["Documentation", "Help Center", "Community", "FAQ"],
                },
                {
                  title: "Legal",
                  links: ["Privacy", "Terms", "Security", "Cookies"],
                },
              ].map((col, i) => (
                <div key={i}>
                  <Text weight="semibold" className="mb-4">
                    {col.title}
                  </Text>
                  <div className="space-y-2">
                    {col.links.map((link, j) => (
                      <Text key={j} size="sm" color="muted" className="block hover:text-white transition-colors cursor-pointer">
                        {link}
                      </Text>
                    ))}
                  </div>
                </div>
              ))}
            </Grid>

            <Divider className="mb-8" />

            <Flex justify="between" align="center">
              <Text size="sm" color="muted">
                © 2024 Enclosed.AI. All rights reserved.
              </Text>
              <Flex gap={6}>
                <Text size="sm" color="muted" className="hover:text-white transition-colors cursor-pointer">
                  Twitter
                </Text>
                <Text size="sm" color="muted" className="hover:text-white transition-colors cursor-pointer">
                  LinkedIn
                </Text>
                <Text size="sm" color="muted" className="hover:text-white transition-colors cursor-pointer">
                  GitHub
                </Text>
              </Flex>
            </Flex>
          </div>
        </Container>
      </footer>
    </div>
  );
}