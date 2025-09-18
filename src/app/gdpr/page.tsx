import Link from "next/link";
import {
  Container,
  Section,
  Flex,
  H1,
  H2,
  H3,
  Text,
  Button,
  Nav,
  NavLink,
  GlowOrb,
  Divider,
  Badge,
} from "@/components/ui";
import Logo from "@/components/Logo";

export const metadata = {
  title: "GDPR Compliance - Enclosed.AI | Data Protection & Privacy Rights",
  description:
    "Learn about Enclosed.AI's GDPR compliance measures and how we protect your personal data and privacy rights.",
};

export default function GDPRPage() {
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

      {/* Content */}
      <Section className="pt-24">
        <Container size="default">
          <Flex direction="col" gap={12}>
            <div className="text-center">
              <Badge className="mb-4">Legal</Badge>
              <H1 className="mb-4" gradient>GDPR Compliance</H1>
              <Text size="xl" color="secondary" className="max-w-2xl mx-auto">
                We are committed to protecting your personal data and respecting your privacy rights under GDPR.
              </Text>
              <Text size="sm" color="muted" className="mt-4">Last updated: March 15, 2024</Text>
            </div>

            <div className="prose prose-invert max-w-none">
              <H2>Your Rights Under GDPR</H2>
              <Text color="secondary" className="mb-6">
                Under the General Data Protection Regulation (GDPR), you have several rights regarding your personal data.
              </Text>

              <H2>Right to Access</H2>
              <Text color="secondary" className="mb-6">
                You have the right to request access to the personal data we hold about you and receive a copy of this data.
              </Text>

              <H2>Right to Rectification</H2>
              <Text color="secondary" className="mb-6">
                You have the right to request correction of any inaccurate or incomplete personal data we hold about you.
              </Text>

              <H2>Right to Erasure</H2>
              <Text color="secondary" className="mb-6">
                You have the right to request deletion of your personal data under certain circumstances.
              </Text>

              <H2>Data Processing Lawful Basis</H2>
              <Text color="secondary" className="mb-6">
                We process your data based on legitimate interests, contract performance, and with your consent where required.
              </Text>

              <H2>Contact Our Data Protection Officer</H2>
              <Text color="secondary" className="mb-4">
                If you have any questions about GDPR compliance or wish to exercise your rights, please contact us:
              </Text>
              <ul className="space-y-2 mb-6">
                <li><Text><span className="font-semibold text-white">Email:</span> dpo@enclosed.ai</Text></li>
                <li><Text><span className="font-semibold text-white">Address:</span> 123 Innovation Drive, San Francisco, CA 94105</Text></li>
                <li><Text><span className="font-semibold text-white">Phone:</span> +1 (555) 123-4567</Text></li>
              </ul>
            </div>
          </Flex>
        </Container>
      </Section>

      {/* Footer */}
      <footer className="border-t border-white/5 mt-24">
        <Container>
          <div className="py-12">
            <div className="text-center">
              <Logo showText size="sm" className="mb-4" />
              <Text size="sm" color="muted">
                Direct mail marketing powered by artificial intelligence
              </Text>
            </div>

            <Divider className="my-8" />

            <Flex justify="between" align="center">
              <Text size="sm" color="muted">
                © 2024 Enclosed.AI. All rights reserved.
              </Text>
              <Flex gap={6}>
                <Text size="sm" color="muted" className="hover:text-white transition-colors cursor-pointer">
                  Privacy
                </Text>
                <Text size="sm" color="muted" className="hover:text-white transition-colors cursor-pointer">
                  Terms
                </Text>
                <Text size="sm" color="muted" className="hover:text-white transition-colors cursor-pointer">
                  Cookies
                </Text>
              </Flex>
            </Flex>
          </div>
        </Container>
      </footer>
    </div>
  );
}