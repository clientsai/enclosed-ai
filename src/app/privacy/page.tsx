
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
    <div className="min-h-screen bg-black text-white">
      {/* Ambient background effects */}
      <GlowOrb color="accent" size="lg" className="top-1/4 left-1/4" />
      <GlowOrb color="purple" size="default" className="top-3/4 right-1/4" />
      
      {/* Content */}
      <Section className="pt-32">
        <Container size="default">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-6">
              <Badge className="mb-4">Legal</Badge>
              <H1 className="text-6xl font-light gradient-text">Privacy Policy</H1>
              <Text size="xl" className="text-gray-400 max-w-3xl mx-auto">
                Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
              </Text>
              <Text size="sm" className="text-gray-500">Last updated: March 15, 2024</Text>
            </div>
            
            <div className="space-y-12">
              <div className="space-y-4">
                <H2 className="text-3xl font-semibold">Information We Collect</H2>
                <Text className="text-gray-400 text-lg leading-relaxed">
                  We collect information that you provide directly to us when you create an account, make a purchase, or contact us for support.
                </Text>
              </div>
              
              <div className="space-y-4">
                <H2 className="text-3xl font-semibold">How We Use Your Information</H2>
                <Text className="text-gray-400 text-lg leading-relaxed">
                  We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.
                </Text>
              </div>
              
              <div className="space-y-4">
                <H2 className="text-3xl font-semibold">Information Sharing</H2>
                <Text className="text-gray-400 text-lg leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
                </Text>
              </div>
              
              <div className="space-y-4">
                <H2 className="text-3xl font-semibold">Data Security</H2>
                <Text className="text-gray-400 text-lg leading-relaxed">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </Text>
              </div>
              
              <div className="space-y-4">
                <H2 className="text-3xl font-semibold">Your Rights</H2>
                <Text className="text-gray-400 text-lg leading-relaxed">
                  You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us.
                </Text>
              </div>
              
              <div className="space-y-4">
                <H2 className="text-3xl font-semibold">Contact Us</H2>
                <Text className="text-gray-400 text-lg leading-relaxed mb-6">
                  If you have any questions about this Privacy Policy, please contact us:
                </Text>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <span className="text-blue-400 font-semibold">Email:</span>
                    <Text>privacy@enclosed.ai</Text>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-blue-400 font-semibold">Address:</span>
                    <Text>123 Innovation Drive, San Francisco, CA 94105</Text>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-blue-400 font-semibold">Phone:</span>
                    <Text>+1 (555) 123-4567</Text>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <Container>
          <div className="space-y-8">
            <div className="text-center">
              <Logo showText size="sm" />
              <Text size="sm" className="text-gray-400 mt-4">
                Direct mail marketing powered by artificial intelligence
              </Text>
            </div>
            <Divider />
            <Flex justify="between" align="center" className="flex-wrap gap-4">
              <Text size="sm" className="text-gray-400">
                © 2024 Enclosed.AI. All rights reserved.
              </Text>
              <Flex gap={6} className="flex-wrap">
                <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Privacy
                </Link>
                <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Terms
                </Link>
                <Link href="/cookies" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Cookies
                </Link>
              </Flex>
            </Flex>
          </div>
        </Container>
      </footer>
    </div>
  );
}