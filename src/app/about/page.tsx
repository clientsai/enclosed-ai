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
  Divider,
} from "@/components/ui";
export const metadata = {
  title: "About Us - Enclosed.AI | Direct Mail Marketing Platform",
  description:
    "Learn about Enclosed.AI's mission to revolutionize direct mail marketing with AI-powered personalization and seamless campaign management.",
};
export default function AboutPage() {
  return (
    <div >
      {/* Ambient background effects */}
      <GlowOrb color="accent" size="lg"  />
      <GlowOrb color="purple" size="default"  />
      {/* Navigation */}
      {/* Hero Section */}
      <Section >
        <Container size="lg">
          <Flex direction="col"  gap={8} >
            <Badge variant="accent" >
              Trusted by 500+ businesses worldwide
            </Badge>
            <H1  gradient>
              Revolutionizing Direct Mail with Artificial Intelligence
            </H1>
            <Text
              size="2xl"
              color="secondary"
              weight="light"
            >
              We're on a mission to transform how businesses connect with their
              customers through intelligent, personalized direct mail campaigns
              that deliver real results.
            </Text>
            <Flex gap={4} >
              <Button size="lg" href="/auth/signup">
                Start Your Journey
                <span >→</span>
              </Button>
              <Button variant="secondary" size="lg" href="/contact">
                Learn More
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Section>
      {/* Mission Section */}
      <Section>
        <Container>
          <Grid cols={2} gap={8}>
            <Flex direction="col" gap={6}>
              <div>
                <H2>Our Mission</H2>
              </div>
              <Flex direction="col" gap={4}>
                <Text size="xl" weight="light">
                  At Enclosed.AI, we believe that every customer deserves a
                  personalized experience, even in the physical world. Our
                  mission is to democratize high-quality direct mail marketing
                  by making it accessible, affordable, and incredibly effective
                  for businesses of all sizes.
                </Text>
                <Text color="secondary">
                  We've seen too many businesses struggle with generic,
                  ineffective direct mail campaigns that waste money and fail to
                  connect with their audience. That's why we built Enclosed.AI –
                  to give every business the power of AI-driven personalization
                  that was previously only available to enterprise companies
                  with massive marketing budgets.
                </Text>
                <Card glass >
                  <Text weight="medium" >
                    "We're not just sending mail – we're creating meaningful
                    connections between businesses and their customers, one
                    personalized letter at a time."
                  </Text>
                  <Text size="sm" color="accent" weight="semibold">
                    — Sarah Mitchell, CEO & Co-Founder
                  </Text>
                </Card>
              </Flex>
            </Flex>
            <div >
              <Card glass >
                <Grid cols={2} gap={6}>
                  <div >
                    <H2>10,000+</H2>
                    <Text size="lg" weight="medium" >
                      Letters Sent
                    </Text>
                  </div>
                  <div >
                    <H2>95%</H2>
                    <Text size="lg" weight="medium" >
                      Delivery Rate
                    </Text>
                  </div>
                  <div >
                    <H2>3.2x</H2>
                    <Text size="lg" weight="medium" >
                      Higher Response
                    </Text>
                  </div>
                  <div >
                    <H2>500+</H2>
                    <Text size="lg" weight="medium" >
                      Happy Customers
                    </Text>
                  </div>
                </Grid>
              </Card>
            </div>
          </Grid>
        </Container>
      </Section>
      {/* Story Section */}
      <Section>
        <Container>
          <Flex direction="col" gap={8}>
            <div >
              <Badge >Our Journey</Badge>
              <H2>Our Story</H2>
            </div>
            <div >
              <Card glass >
                <Grid cols={2} gap={8} >
                  <div>
                    <div >
                      2022
                    </div>
                    <H3 >The Problem</H3>
                  </div>
                  <Text color="secondary">
                    Our founding team, comprised of marketing veterans and AI
                    specialists, spent months researching the direct mail
                    industry. We discovered that the average response rate for
                    traditional direct mail campaigns was just 2.7%, while
                    personalized campaigns could achieve response rates of
                    5-8%. The problem wasn't with direct mail itself – it was
                    with how it was being executed.
                  </Text>
                </Grid>
              </Card>
              <Card glass >
                <Grid cols={2} gap={8} >
                  <div>
                    <div >
                      2023
                    </div>
                    <H3 >The Solution</H3>
                  </div>
                  <Text color="secondary">
                    We set out to solve this by combining cutting-edge AI
                    technology with the proven effectiveness of direct mail.
                    Our platform analyzes each recipient's profile,
                    preferences, and behavior patterns to generate highly
                    personalized sales letters that speak directly to their
                    needs and interests. The results have been remarkable –
                    our customers consistently see response rates 3-5x higher
                    than industry averages.
                  </Text>
                </Grid>
              </Card>
              <Card glass >
                <Grid cols={2} gap={8} >
                  <div>
                    <div >
                      2024
                    </div>
                    <H3 >The Impact</H3>
                  </div>
                  <Text color="secondary">
                    Today, Enclosed.AI serves businesses across industries,
                    from small startups to Fortune 500 companies. We're proud
                    to be at the forefront of the direct mail revolution,
                    helping businesses build stronger relationships with their
                    customers through the power of personalized, AI-driven
                    communication.
                  </Text>
                </Grid>
              </Card>
            </div>
          </Flex>
        </Container>
      </Section>
      {/* Values Section */}
      <Section>
        <Container>
          <Flex direction="col" gap={8}>
            <div >
              <Badge >Our Values</Badge>
              <H2>Our Values</H2>
              <Text size="xl" color="secondary" >
                These core principles guide everything we do and shape how we
                serve our customers
              </Text>
            </div>
            <Grid cols={3} gap={8}>
              <Card hover >
                <Flex direction="col" gap={4}>
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
                  <H3>Innovation First</H3>
                  <Text color="secondary">
                    We constantly push the boundaries of what's possible in direct
                    mail marketing. Our team is always exploring new AI
                    technologies, testing innovative approaches, and finding better
                    ways to help our customers succeed.
                  </Text>
                </Flex>
              </Card>
              <Card hover >
                <Flex direction="col" gap={4}>
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
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <H3>Customer Success</H3>
                  <Text color="secondary">
                    Your success is our success. We measure our own performance by
                    how well our customers achieve their marketing goals. Every
                    feature we build, every improvement we make, is designed with
                    your success in mind.
                  </Text>
                </Flex>
              </Card>
              <Card hover >
                <Flex direction="col" gap={4}>
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <H3>Transparency</H3>
                  <Text color="secondary">
                    We believe in complete transparency in everything we do. From
                    our pricing to our processes, from our data handling to our
                    delivery methods – we're open and honest about how we operate
                    and how we can help you succeed.
                  </Text>
                </Flex>
              </Card>
            </Grid>
          </Flex>
        </Container>
      </Section>
      {/* Team Preview Section */}
      <Section>
        <Container>
          <Flex direction="col" gap={8}>
            <div >
              <Badge >Our Team</Badge>
              <H2>Meet Our Team</H2>
              <Text size="xl" color="secondary" >
                We're a diverse group of marketers, engineers, and AI specialists
                united by our passion for revolutionizing direct mail marketing.
              </Text>
            </div>
            <Grid cols={4} gap={6}>
              <Card hover >
                <Flex direction="col" gap={4}>
                  <div >
                    <span >SM</span>
                  </div>
                  <div>
                    <H4 >Sarah Mitchell</H4>
                    <Text size="sm" color="accent" weight="semibold" >
                      CEO & Co-Founder
                    </Text>
                    <Text size="sm" color="secondary">
                      Former VP Marketing at TechCorp with 15+ years in direct mail
                      marketing. Led teams that generated $50M+ in revenue through
                      innovative campaigns.
                    </Text>
                  </div>
                </Flex>
              </Card>
              <Card hover >
                <Flex direction="col" gap={4}>
                  <div >
                    <span >DJ</span>
                  </div>
                  <div>
                    <H4 >David Johnson</H4>
                    <Text size="sm" color="accent" weight="semibold" >
                      CTO & Co-Founder
                    </Text>
                    <Text size="sm" color="secondary">
                      AI/ML expert and former Google engineer with expertise in
                      natural language processing and machine learning algorithms.
                    </Text>
                  </div>
                </Flex>
              </Card>
              <Card hover >
                <Flex direction="col" gap={4}>
                  <div >
                    <span >LC</span>
                  </div>
                  <div>
                    <H4 >Lisa Chen</H4>
                    <Text size="sm" color="accent" weight="semibold" >
                      Head of Product
                    </Text>
                    <Text size="sm" color="secondary">
                      UX specialist and former product lead at Mailchimp with a
                      passion for creating intuitive, user-friendly experiences.
                    </Text>
                  </div>
                </Flex>
              </Card>
              <Card hover >
                <Flex direction="col" gap={4}>
                  <div >
                    <span >MR</span>
                  </div>
                  <div>
                    <H4 >Michael Rodriguez</H4>
                    <Text size="sm" color="accent" weight="semibold" >
                      Head of Engineering
                    </Text>
                    <Text size="sm" color="secondary">
                      Full-stack developer and scalability expert who ensures our
                      platform can handle millions of personalized campaigns.
                    </Text>
                  </div>
                </Flex>
              </Card>
            </Grid>
            <div >
              <Button variant="ghost" size="lg" href="/team">
                View Full Team
              </Button>
            </div>
          </Flex>
        </Container>
      </Section>
      {/* CTA Section */}
      <Section>
        <Container>
          <Card glass >
            <H2>Ready to Transform Your Direct Mail?</H2>
            <Text size="xl" color="secondary" >
              Join hundreds of businesses already using Enclosed.AI to create more
              effective, personalized direct mail campaigns that drive real
              results.
            </Text>
            <Flex gap={4} justify="center">
              <Button size="lg" href="/auth/signup">
                Start Your Free Trial
              </Button>
              <Button variant="ghost" size="lg" href="/contact">
                Schedule a Demo
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
            <Flex justify="between" >
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