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
          <NavLink href="/about" active>About</NavLink>
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
              Trusted by 500+ businesses worldwide
            </Badge>
            <H1 className="animate-fade-up max-w-5xl" gradient>
              Revolutionizing Direct Mail with Artificial Intelligence
            </H1>
            <Text
              size="2xl"
              color="secondary"
              weight="light"
              className="animate-fade-up animation-delay-100 max-w-4xl"
            >
              We're on a mission to transform how businesses connect with their
              customers through intelligent, personalized direct mail campaigns
              that deliver real results.
            </Text>
            <Flex gap={4} className="animate-fade-up animation-delay-200">
              <Button size="lg" href="/auth/signup">
                Start Your Journey
                <span className="ml-2">→</span>
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
              <Flex direction="col" gap={5}>
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
                <Card glass className="p-6">
                  <Text weight="medium" className="italic mb-4">
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
            <div className="relative">
              <Card glass className="p-8">
                <Grid cols={2} gap={6}>
                  <div className="text-center">
                    <H2 className="gradient-text-accent">10,000+</H2>
                    <Text size="lg" weight="medium" className="mt-2">
                      Letters Sent
                    </Text>
                  </div>
                  <div className="text-center">
                    <H2 className="gradient-text-accent">95%</H2>
                    <Text size="lg" weight="medium" className="mt-2">
                      Delivery Rate
                    </Text>
                  </div>
                  <div className="text-center">
                    <H2 className="gradient-text-accent">3.2x</H2>
                    <Text size="lg" weight="medium" className="mt-2">
                      Higher Response
                    </Text>
                  </div>
                  <div className="text-center">
                    <H2 className="gradient-text-accent">500+</H2>
                    <Text size="lg" weight="medium" className="mt-2">
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
          <Flex direction="col" gap={12}>
            <div className="text-center">
              <Badge className="mb-4">Our Journey</Badge>
              <H2 className="mb-4">Our Story</H2>
            </div>

            <div className="space-y-12">
              <Card glass className="p-8">
                <Grid cols={2} gap={8} align="center">
                  <div>
                    <div className="text-6xl font-bold gradient-text-accent mb-4">
                      2022
                    </div>
                    <H3 className="mb-4">The Problem</H3>
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

              <Card glass className="p-8">
                <Grid cols={2} gap={8} align="center">
                  <div>
                    <div className="text-6xl font-bold gradient-text-accent mb-4">
                      2023
                    </div>
                    <H3 className="mb-4">The Solution</H3>
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

              <Card glass className="p-8">
                <Grid cols={2} gap={8} align="center">
                  <div>
                    <div className="text-6xl font-bold gradient-text-accent mb-4">
                      2024
                    </div>
                    <H3 className="mb-4">The Impact</H3>
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
          <Flex direction="col" gap={12}>
            <div className="text-center">
              <Badge className="mb-4">Our Values</Badge>
              <H2 className="mb-4">Our Values</H2>
              <Text size="xl" color="secondary" className="max-w-3xl mx-auto">
                These core principles guide everything we do and shape how we
                serve our customers
              </Text>
            </div>

            <Grid cols={3} gap={8}>
              <Card hover className="p-8">
                <Flex direction="col" gap={4}>
                  <div className="h-12 w-12 bg-[var(--accent)] rounded-lg flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-white"
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

              <Card hover className="p-8">
                <Flex direction="col" gap={4}>
                  <div className="h-12 w-12 bg-[var(--accent)] rounded-lg flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-white"
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

              <Card hover className="p-8">
                <Flex direction="col" gap={4}>
                  <div className="h-12 w-12 bg-[var(--accent)] rounded-lg flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-white"
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
          <Flex direction="col" gap={12}>
            <div className="text-center">
              <Badge className="mb-4">Our Team</Badge>
              <H2 className="mb-4">Meet Our Team</H2>
              <Text size="xl" color="secondary" className="max-w-3xl mx-auto">
                We're a diverse group of marketers, engineers, and AI specialists
                united by our passion for revolutionizing direct mail marketing.
              </Text>
            </div>

            <Grid cols={4} gap={6}>
              <Card hover className="p-6 text-center">
                <Flex direction="col" gap={4}>
                  <div className="w-20 h-20 bg-[var(--accent)] rounded-full mx-auto flex items-center justify-center">
                    <span className="text-white text-xl font-bold">SM</span>
                  </div>
                  <div>
                    <H4 className="mb-1">Sarah Mitchell</H4>
                    <Text size="sm" color="accent" weight="semibold" className="mb-3">
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

              <Card hover className="p-6 text-center">
                <Flex direction="col" gap={4}>
                  <div className="w-20 h-20 bg-[var(--accent)] rounded-full mx-auto flex items-center justify-center">
                    <span className="text-white text-xl font-bold">DJ</span>
                  </div>
                  <div>
                    <H4 className="mb-1">David Johnson</H4>
                    <Text size="sm" color="accent" weight="semibold" className="mb-3">
                      CTO & Co-Founder
                    </Text>
                    <Text size="sm" color="secondary">
                      AI/ML expert and former Google engineer with expertise in
                      natural language processing and machine learning algorithms.
                    </Text>
                  </div>
                </Flex>
              </Card>

              <Card hover className="p-6 text-center">
                <Flex direction="col" gap={4}>
                  <div className="w-20 h-20 bg-[var(--accent)] rounded-full mx-auto flex items-center justify-center">
                    <span className="text-white text-xl font-bold">LC</span>
                  </div>
                  <div>
                    <H4 className="mb-1">Lisa Chen</H4>
                    <Text size="sm" color="accent" weight="semibold" className="mb-3">
                      Head of Product
                    </Text>
                    <Text size="sm" color="secondary">
                      UX specialist and former product lead at Mailchimp with a
                      passion for creating intuitive, user-friendly experiences.
                    </Text>
                  </div>
                </Flex>
              </Card>

              <Card hover className="p-6 text-center">
                <Flex direction="col" gap={4}>
                  <div className="w-20 h-20 bg-[var(--accent)] rounded-full mx-auto flex items-center justify-center">
                    <span className="text-white text-xl font-bold">MR</span>
                  </div>
                  <div>
                    <H4 className="mb-1">Michael Rodriguez</H4>
                    <Text size="sm" color="accent" weight="semibold" className="mb-3">
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

            <div className="text-center">
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
          <Card glass className="text-center p-12">
            <H2 className="mb-4">Ready to Transform Your Direct Mail?</H2>
            <Text size="xl" color="secondary" className="mb-8 max-w-3xl mx-auto">
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
