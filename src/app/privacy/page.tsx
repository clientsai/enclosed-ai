
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
export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Ambient background effects */}
      <GlowOrb color="accent" size="lg" className="top-1/4 -left-32" />
      <GlowOrb color="purple" size="default" className="bottom-1/4 right-0" />
      {/* Navigation */}
      {/* Content */}
      <Section className="pt-24">
        <Container size="default">
          <Flex direction="col" gap={12}>
            <div className="text-center">
              <Badge className="mb-4">Legal</Badge>
              <H1 className="mb-4" gradient>Privacy Policy</H1>
              <Text size="xl" color="secondary" className="max-w-2xl mx-auto">
                Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
              </Text>
              <Text size="sm" color="muted" className="mt-4">Last updated: March 15, 2024</Text>
            </div>
            <div className="prose prose-invert max-w-none">
              <H2>Information We Collect</H2>
              <Text color="secondary" className="mb-6">
                We collect information that you provide directly to us when you create an account, make a purchase, or contact us for support.
              </Text>
              <H2>How We Use Your Information</H2>
              <Text color="secondary" className="mb-6">
                We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.
              </Text>
              <H2>Information Sharing</H2>
              <Text color="secondary" className="mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
              </Text>
              <H2>Data Security</H2>
              <Text color="secondary" className="mb-6">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </Text>
              <H2>Your Rights</H2>
              <Text color="secondary" className="mb-6">
                You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us.
              </Text>
              <H2>Contact Us</H2>
              <Text color="secondary" className="mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </Text>
              <ul className="space-y-2 mb-6">
                <li><Text><span className="font-semibold text-white">Email:</span> privacy@enclosed.ai</Text></li>
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