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
  Text,
  Button,
  Card,
  Badge,
  Nav,
  NavLink,
  GlowOrb,
  Divider,
} from "@/components/ui";
export const metadata = {
  title: "FAQ - Enclosed.AI | Frequently Asked Questions",
  description:
    "Find answers to common questions about Enclosed.AI's AI-powered direct mail marketing platform, pricing, features, and more.",
};
export default function FAQPage() {
  return (
    <div >
      {/* Ambient background effects */}
      <GlowOrb color="accent" size="lg"  />
      <GlowOrb color="purple" size="default"  />
      {/* Navigation */}
      {/* Hero Section */}
      <Section >
        <Container size="lg">
          <Flex direction="col" align="center" gap={8} >
            <Badge variant="accent" >
              Quick Answers • 24/7 Support • Expert Help
            </Badge>
            <H1  gradient>
              Frequently Asked Questions
            </H1>
            <Text
              size="2xl"
              color="secondary"
              weight="light"
            >
              Find answers to common questions about our AI-powered direct mail
              marketing platform. Can't find what you're looking for?{" "}
              <Link
                href="/contact"
              >
                Contact our support team
              </Link>
              .
            </Text>
            <Flex gap={4} >
              <Button size="lg" href="#faq-content">
                Browse Questions
                <span >→</span>
              </Button>
              <Button variant="secondary" size="lg" href="/contact">
                Ask a Question
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Section>
      {/* FAQ Content Section */}
      <Section id="faq-content">
        <Container>
          <Flex direction="col" gap={16}>
          {/* Getting Started */}
          <div>
            <Flex align="center" gap={4} >
              <div >
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <H2>Getting Started</H2>
            </Flex>
            <Flex direction="col" gap={6}>
              <Card glass >
                <H3 >How do I get started with Enclosed.AI?</H3>
                <Text color="secondary" >
                  Getting started with Enclosed.AI is simple and takes just
                  a few minutes:
                </Text>
                <ol >
                  <li><Text>Sign up for a free account at{" "}
                    <Link
                      href="/auth/signup"
                    >
                      enclosed.ai/signup
                    </Link></Text>
                  </li>
                  <li><Text>Upload your recipient list (CSV format supported)</Text></li>
                  <li><Text>Choose your offer type and customize your campaign settings</Text></li>
                  <li><Text>Let our AI generate personalized letters for each recipient</Text></li>
                  <li><Text>Review and approve your campaign</Text></li>
                  <li><Text>We handle the printing, postage, and delivery</Text></li>
                </ol>
                <Text color="secondary">
                  You can start with as few as 100 letters and scale up as
                  needed. No long-term contracts or minimum commitments
                  required.
                </Text>
              </Card>
              <Card glass >
                <H3 >What file formats do you accept for recipient lists?</H3>
                <Text color="secondary" >
                  We accept CSV files with the following required columns:
                </Text>
                <ul >
                  <li><Text><span >First Name</span> - Recipient's first name</Text></li>
                  <li><Text><span >Last Name</span> - Recipient's last name</Text></li>
                  <li><Text><span >Address</span> - Complete mailing address</Text></li>
                  <li><Text><span >City</span> - City name</Text></li>
                  <li><Text><span >State</span> - State or province</Text></li>
                  <li><Text><span >ZIP Code</span> - Postal code</Text></li>
                  <li><Text><span >Email</span> - Email address (optional, for tracking)</Text></li>
                </ul>
                <Text color="secondary">
                  Additional columns like company, phone number, or custom
                  fields are also supported and can be used for
                  personalization. Our system will automatically validate
                  addresses and flag any that need correction before sending.
                </Text>
              </Card>
              <Card glass >
                <H3 >Is there a minimum order size?</H3>
                <Text color="secondary" >
                  Yes, our minimum order size is 100 letters. This ensures
                  we can provide competitive pricing while maintaining high
                  quality standards. However, we don't require any long-term
                  commitments or monthly minimums - you can send as many or
                  as few campaigns as you need, whenever you need them.
                </Text>
                <Text color="secondary">
                  For larger orders, we offer volume discounts that
                  automatically apply based on your total quantity.
                  Enterprise customers with very high volume needs can
                  contact our sales team for custom pricing arrangements.
                </Text>
              </Card>
            </Flex>
          </div>
          </Flex>
        </Container>
      </Section>
      {/* Still Have Questions CTA */}
      <Section>
        <Container>
          <Card glass >
            <H2 >Still Have Questions?</H2>
            <Text size="xl" color="secondary" >
              Can't find the answer you're looking for? Our support team is here
              to help you succeed with your direct mail campaigns.
            </Text>
            <Flex gap={4} justify="center">
              <Button size="lg" href="/contact">
                Contact Support
              </Button>
              <Button variant="ghost" size="lg" href="/auth/signup">
                Start Free Trial
              </Button>
            </Flex>
          </Card>
        </Container>
      </Section>
      {/* Footer */}
      <footer >
        <Container>
          <div >
            <Grid cols={5} gap={8} >
              <div>
                <Logo showText size="sm"  />
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
                  <Text weight="semibold" >
                    {col.title}
                  </Text>
                  <div >
                    {col.links.map((link, j) => (
                      <Text key={j} size="sm" color="muted" >
                        {link}
                      </Text>
                    ))}
                  </div>
                </div>
              ))}
            </Grid>
            <Divider  />
            <Flex justify="between" align="center">
              <Text size="sm" color="muted">
                © 2024 Enclosed.AI. All rights reserved.
              </Text>
              <Flex gap={6}>
                <Text size="sm" color="muted" >
                  Twitter
                </Text>
                <Text size="sm" color="muted" >
                  LinkedIn
                </Text>
                <Text size="sm" color="muted" >
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