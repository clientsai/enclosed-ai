
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
    <div >
      {/* Ambient background effects */}
      <GlowOrb color="accent" size="lg"  />
      <GlowOrb color="purple" size="default"  />
      {/* Navigation */}
      {/* Content */}
      <Section >
        <Container size="default">
          <Flex direction="col" gap={12}>
            <div >
              <Badge >Legal</Badge>
              <H1  gradient>Privacy Policy</H1>
              <Text size="xl" color="secondary" >
                Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
              </Text>
              <Text size="sm" color="muted" >Last updated: March 15, 2024</Text>
            </div>
            <div >
              <H2>Information We Collect</H2>
              <Text color="secondary" >
                We collect information that you provide directly to us when you create an account, make a purchase, or contact us for support.
              </Text>
              <H2>How We Use Your Information</H2>
              <Text color="secondary" >
                We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.
              </Text>
              <H2>Information Sharing</H2>
              <Text color="secondary" >
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
              </Text>
              <H2>Data Security</H2>
              <Text color="secondary" >
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </Text>
              <H2>Your Rights</H2>
              <Text color="secondary" >
                You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us.
              </Text>
              <H2>Contact Us</H2>
              <Text color="secondary" >
                If you have any questions about this Privacy Policy, please contact us:
              </Text>
              <ul >
                <li><Text><span >Email:</span> privacy@enclosed.ai</Text></li>
                <li><Text><span >Address:</span> 123 Innovation Drive, San Francisco, CA 94105</Text></li>
                <li><Text><span >Phone:</span> +1 (555) 123-4567</Text></li>
              </ul>
            </div>
          </Flex>
        </Container>
      </Section>
      {/* Footer */}
      <footer >
        <Container>
          <div >
            <div >
              <Logo showText size="sm"  />
              <Text size="sm" color="muted">
                Direct mail marketing powered by artificial intelligence
              </Text>
            </div>
            <Divider  />
            <Flex justify="between" align="center">
              <Text size="sm" color="muted">
                © 2024 Enclosed.AI. All rights reserved.
              </Text>
              <Flex gap={6}>
                <Text size="sm" color="muted" >
                  Privacy
                </Text>
                <Text size="sm" color="muted" >
                  Terms
                </Text>
                <Text size="sm" color="muted" >
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