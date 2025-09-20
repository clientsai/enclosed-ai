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
    <div >
      {/* Ambient background effects */}
      <GlowOrb color="accent" size="lg"  />
      <GlowOrb color="purple" size="default"  />
      {/* Navigation */}
      {/* Content */}
      <Section >
        <Container size="default">
          <Flex direction="col" gap={8}>
            <div >
              <Badge >Legal</Badge>
              <H1  gradient>GDPR Compliance</H1>
              <Text size="xl" color="secondary" >
                We are committed to protecting your personal data and respecting your privacy rights under GDPR.
              </Text>
              <Text size="sm" color="muted" >Last updated: March 15, 2024</Text>
            </div>
            <div >
              <H2>Your Rights Under GDPR</H2>
              <Text color="secondary" >
                Under the General Data Protection Regulation (GDPR), you have several rights regarding your personal data.
              </Text>
              <H2>Right to Access</H2>
              <Text color="secondary" >
                You have the right to request access to the personal data we hold about you and receive a copy of this data.
              </Text>
              <H2>Right to Rectification</H2>
              <Text color="secondary" >
                You have the right to request correction of any inaccurate or incomplete personal data we hold about you.
              </Text>
              <H2>Right to Erasure</H2>
              <Text color="secondary" >
                You have the right to request deletion of your personal data under certain circumstances.
              </Text>
              <H2>Data Processing Lawful Basis</H2>
              <Text color="secondary" >
                We process your data based on legitimate interests, contract performance, and with your consent where required.
              </Text>
              <H2>Contact Our Data Protection Officer</H2>
              <Text color="secondary" >
                If you have any questions about GDPR compliance or wish to exercise your rights, please contact us:
              </Text>
              <ul >
                <li><Text><span >Email:</span> dpo@enclosed.ai</Text></li>
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
            <Flex justify="between" >
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