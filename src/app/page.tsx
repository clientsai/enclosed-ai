/*
 * Homepage - Jony Ive Inspired Dark Theme
 * Minimal, purposeful, with focus on the product
 */
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
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
  Divider,
  Nav,
  NavLink,
  GlowOrb,
} from "@/components/ui";
export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      if (user) {
        router.push("/dashboard");
      }
      setLoading(false);
    };
    checkUser();
  }, [router]);
  if (loading) {
    return (
      <div >
        <div  />
      </div>
    );
  }
  if (user) return null;
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
              AI-Powered Direct Mail
            </Badge>
            <H1  gradient>
              Direct Mail
              <br />
              Reimagined
            </H1>
            <Text
              size="2xl"
              color="secondary"
              weight="light"
            >
              Transform your marketing with AI that writes personally to each recipient.
              Every letter, uniquely crafted. Every message, perfectly timed.
            </Text>
            <Flex gap={4} >
              <Button size="lg" href="/auth/signup">
                Start Free Trial
                <span >→</span>
              </Button>
              <Button variant="secondary" size="lg" href="#demo">
                Watch Demo
              </Button>
            </Flex>
            <Text size="sm" color="muted" >
              No credit card required • 14-day free trial • Cancel anytime
            </Text>
          </Flex>
        </Container>
      </Section>
      {/* Stats Section */}
      <Section>
        <Container>
          <Grid cols={4} gap={6}>
            {[
              { value: "12.4%", label: "Response Rate", subtext: "Industry avg: 1.2%" },
              { value: "847%", label: "Average ROI", subtext: "Measured across campaigns" },
              { value: "5,000+", label: "Active Users", subtext: "Growing every day" },
              { value: "10M+", label: "Letters Sent", subtext: "And counting" },
            ].map((stat, i) => (
              <Card key={i} glass >
                <H2 >{stat.value}</H2>
                <Text size="lg" weight="medium" >
                  {stat.label}
                </Text>
                <Text size="sm" color="muted" >
                  {stat.subtext}
                </Text>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>
      {/* Features Section */}
      <Section id="features">
        <Container>
          <Flex direction="col" gap={12}>
            <div >
              <Badge >Features</Badge>
              <H2 >Everything you need</H2>
              <Text size="xl" color="secondary" >
                A complete platform designed for simplicity and power
              </Text>
            </div>
            <Grid cols={3} gap={8}>
              {[
                {
                  title: "AI Personalization",
                  description: "Every letter is uniquely written for each recipient using advanced AI",
                  icon: "🤖",
                },
                {
                  title: "Smart Analytics",
                  description: "Track opens, responses, and ROI in real-time with detailed insights",
                  icon: "📊",
                },
                {
                  title: "Automated Workflow",
                  description: "From creation to delivery, everything runs on autopilot",
                  icon: "⚡",
                },
                {
                  title: "Premium Printing",
                  description: "High-quality paper and printing that demands attention",
                  icon: "✨",
                },
                {
                  title: "API Access",
                  description: "Integrate with your existing tools and workflows seamlessly",
                  icon: "🔌",
                },
                {
                  title: "24/7 Support",
                  description: "Expert help whenever you need it, day or night",
                  icon: "💬",
                },
              ].map((feature, i) => (
                <Card key={i} hover>
                  <div >{feature.icon}</div>
                  <H3 >{feature.title}</H3>
                  <Text color="secondary">{feature.description}</Text>
                </Card>
              ))}
            </Grid>
          </Flex>
        </Container>
      </Section>
      {/* How It Works */}
      <Section>
        <Container>
          <Flex direction="col" gap={12}>
            <div >
              <Badge >Process</Badge>
              <H2 >Simple as 1-2-3</H2>
              <Text size="xl" color="secondary" >
                Launch campaigns in minutes, not weeks
              </Text>
            </div>
            <Grid cols={3} gap={8}>
              {[
                {
                  step: "01",
                  title: "Upload Your List",
                  description: "Import contacts via CSV or connect your CRM",
                },
                {
                  step: "02",
                  title: "AI Creates Content",
                  description: "Our AI writes personalized letters for each recipient",
                },
                {
                  step: "03",
                  title: "We Handle The Rest",
                  description: "Printing, mailing, and tracking - all automated",
                },
              ].map((step, i) => (
                <div key={i} >
                  <div >
                    {step.step}
                  </div>
                  <H3 >{step.title}</H3>
                  <Text color="secondary">{step.description}</Text>
                </div>
              ))}
            </Grid>
          </Flex>
        </Container>
      </Section>
      {/* Testimonial */}
      <Section>
        <Container size="default">
          <Card glass >
            <Text size="2xl" weight="light" >
              "Enclosed.AI transformed our direct mail from a cost center to our most
              profitable channel. Response rates went from 0.5% to 12%."
            </Text>
            <Divider  />
            <Text weight="semibold">Sarah Chen</Text>
            <Text size="sm" color="muted">VP Marketing, TechStart Inc.</Text>
          </Card>
        </Container>
      </Section>
      {/* Pricing Preview */}
      <Section id="pricing">
        <Container>
          <Flex direction="col" gap={12}>
            <div >
              <Badge >Pricing</Badge>
              <H2 >Simple, transparent pricing</H2>
              <Text size="xl" color="secondary" >
                Pay only for what you send. No hidden fees.
              </Text>
            </div>
            <Grid cols={3} gap={8}>
              {[
                {
                  name: "Starter",
                  price: "$49",
                  period: "/month",
                  features: ["1,000 letters/month", "Basic AI", "Email support"],
                  cta: "Start Free",
                  featured: false,
                },
                {
                  name: "Pro",
                  price: "$199",
                  period: "/month",
                  features: ["10,000 letters/month", "Advanced AI", "Priority support", "API access"],
                  cta: "Most Popular",
                  featured: true,
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  period: "",
                  features: ["Unlimited letters", "Custom AI training", "Dedicated support", "SLA"],
                  cta: "Contact Sales",
                  featured: false,
                },
              ].map((plan, i) => (
                <Card
                  key={i}
                  className={plan.featured ? "border-[] relative" : ""}
                >
                  {plan.featured && (
                    <Badge variant="accent" >
                      Recommended
                    </Badge>
                  )}
                  <div >
                    <Text weight="semibold" >
                      {plan.name}
                    </Text>
                    <div >
                      <span >{plan.price}</span>
                      <Text color="muted">{plan.period}</Text>
                    </div>
                  </div>
                  <div >
                    {plan.features.map((feature, j) => (
                      <Flex key={j} gap={2} align="center">
                        <span >✓</span>
                        <Text size="sm">{feature}</Text>
                      </Flex>
                    ))}
                  </div>
                  <Button
                    variant={plan.featured ? "primary" : "secondary"}
                    href="/pricing"
                  >
                    {plan.cta}
                  </Button>
                </Card>
              ))}
            </Grid>
          </Flex>
        </Container>
      </Section>
      {/* CTA Section */}
      <Section>
        <Container>
          <Card glass >
            <H2 >Ready to transform your direct mail?</H2>
            <Text size="xl" color="secondary" >
              Join thousands of businesses getting exceptional results with AI-powered direct mail.
            </Text>
            <Flex gap={4} justify="center">
              <Button size="lg" href="/auth/signup">
                Start Your Free Trial
              </Button>
              <Button variant="ghost" size="lg" href="/contact">
                Talk to Sales
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
                  AI-powered direct mail that delivers exceptional ROI.
                </Text>
              </div>
              {[
                {
                  title: "Product",
                  links: ["Features", "Pricing", "API", "Integrations"],
                },
                {
                  title: "Company",
                  links: ["About", "Blog", "Careers", "Press"],
                },
                {
                  title: "Resources",
                  links: ["Documentation", "Help Center", "Community", "Contact"],
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