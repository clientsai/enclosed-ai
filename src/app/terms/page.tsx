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
  title: "Terms of Service - Enclosed.AI | Legal Terms and Conditions",
  description:
    "Read Enclosed.AI's terms of service to understand your rights and responsibilities when using our AI-powered direct mail platform.",
};

export default function TermsPage() {
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
              <H1 className="mb-4" gradient>Terms of Service</H1>
              <Text size="xl" color="secondary" className="max-w-2xl mx-auto">
                These terms govern your use of Enclosed.AI and our AI-powered direct mail services.
              </Text>
              <Text size="sm" color="muted" className="mt-4">Last updated: March 15, 2024</Text>
            </div>

            <div className="prose prose-invert max-w-none">
              <H2>Acceptance of Terms</H2>
              <Text color="secondary" className="mb-6">
                By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
              </Text>

              <H2>Service Description</H2>
              <Text color="secondary" className="mb-6">
                Enclosed.AI provides AI-powered direct mail marketing services, including content generation, printing, and delivery services.
              </Text>

              <H2>User Responsibilities</H2>
              <Text color="secondary" className="mb-6">
                You are responsible for providing accurate recipient information and ensuring compliance with all applicable marketing laws and regulations.
              </Text>

              <H2>Payment Terms</H2>
              <Text color="secondary" className="mb-6">
                Payment is due upon placing an order. We accept major credit cards and other payment methods as specified on our platform.
              </Text>

              <H2>Limitation of Liability</H2>
              <Text color="secondary" className="mb-6">
                Our liability is limited to the amount paid for the specific service. We are not liable for indirect, incidental, or consequential damages.
              </Text>

              <H2>Contact Us</H2>
              <Text color="secondary" className="mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </Text>
              <ul className="space-y-2 mb-6">
                <li><Text><span className="font-semibold text-white">Email:</span> legal@enclosed.ai</Text></li>
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