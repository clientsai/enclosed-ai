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
              <H1  gradient>Terms of Service</H1>
              <Text size="xl" color="secondary" >
                These terms govern your use of Enclosed.AI and our AI-powered direct mail services.
              </Text>
              <Text size="sm" color="muted" >Last updated: March 15, 2024</Text>
            </div>
            <div >
              <H2>Acceptance of Terms</H2>
              <Text color="secondary" >
                By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
              </Text>
              <H2>Service Description</H2>
              <Text color="secondary" >
                Enclosed.AI provides AI-powered direct mail marketing services, including content generation, printing, and delivery services.
              </Text>
              <H2>User Responsibilities</H2>
              <Text color="secondary" >
                You are responsible for providing accurate recipient information and ensuring compliance with all applicable marketing laws and regulations.
              </Text>
              <H2>Payment Terms</H2>
              <Text color="secondary" >
                Payment is due upon placing an order. We accept major credit cards and other payment methods as specified on our platform.
              </Text>
              <H2>Limitation of Liability</H2>
              <Text color="secondary" >
                Our liability is limited to the amount paid for the specific service. We are not liable for indirect, incidental, or consequential damages.
              </Text>
              <H2>Contact Us</H2>
              <Text color="secondary" >
                If you have any questions about these Terms of Service, please contact us:
              </Text>
              <ul >
                <li><Text><span >Email:</span> legal@enclosed.ai</Text></li>
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