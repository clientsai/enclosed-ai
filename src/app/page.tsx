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
      <div className="min-h-screen flex items-center justify-center">
        <div className="spinner" />
      </div>
    );
  }
  if (user) return null;
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Ambient background effects */}
      <GlowOrb color="accent" size="lg" className="top-1/4 left-1/4" />
      <GlowOrb color="purple" size="default" className="top-3/4 right-1/4" />
      {/* Navigation */}
      {/* Hero Section */}
      <Section className="pt-32">
        <Container size="lg">
          <Flex direction="col" align="center" gap={8} className="text-center">
            <Badge variant="accent" className="mb-4">
              AI-Powered Direct Mail
            </Badge>
            <H1 gradient>
              Direct Mail
              <br />
              Reimagined
            </H1>
            <Text
              size="2xl"
              color="secondary"
              weight="light"
              className="max-w-3xl"
            >
              Transform your marketing with AI that writes personally to each recipient.
              Every letter, uniquely crafted. Every message, perfectly timed.
            </Text>
            <Flex gap={4} className="mt-8">
              <Button size="lg" href="/auth/signup">
                Start Free Trial
                <span className="ml-2">→</span>
              </Button>
              <Button variant="secondary" size="lg" href="#demo">
                Watch Demo
              </Button>
            </Flex>
            <Text size="sm" color="muted" className="mt-4">
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
              <Card key={i} glass className="text-center">
                <H2 className="text-4xl font-light mb-2">{stat.value}</H2>
                <Text size="lg" weight="medium" className="mb-2">
                  {stat.label}
                </Text>
                <Text size="sm" color="muted">
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
            <div className="text-center">
              <Badge className="mb-4">Features</Badge>
              <H2 className="mb-4">Everything you need</H2>
              <Text size="xl" color="secondary" className="max-w-2xl mx-auto">
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
                <Card key={i} hover className="text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <H3 className="mb-3">{feature.title}</H3>
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
            <div className="text-center">
              <Badge className="mb-4">Process</Badge>
              <H2 className="mb-4">Simple as 1-2-3</H2>
              <Text size="xl" color="secondary" className="max-w-2xl mx-auto">
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
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6">
                    {step.step}
                  </div>
                  <H3 className="mb-3">{step.title}</H3>
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
          <Card glass className="text-center">
            <Text size="2xl" weight="light" className="mb-8">
              "Enclosed.AI transformed our direct mail from a cost center to our most
              profitable channel. Response rates went from 0.5% to 12%."
            </Text>
            <Divider className="mb-6" />
            <Text weight="semibold" className="mb-1">Sarah Chen</Text>
            <Text size="sm" color="muted">VP Marketing, TechStart Inc.</Text>
          </Card>
        </Container>
      </Section>
      {/* Pricing Preview */}
      <Section id="pricing">
        <Container>
          <Flex direction="col" gap={12}>
            <div className="text-center">
              <Badge className="mb-4">Pricing</Badge>
              <H2 className="mb-4">Simple, transparent pricing</H2>
              <Text size="xl" color="secondary" className="max-w-2xl mx-auto">
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
                  className={plan.featured ? "border-blue-500 relative scale-105" : ""}
                >
                  {plan.featured && (
                    <Badge variant="accent" className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      Recommended
                    </Badge>
                  )}
                  <div className="text-center mb-6">
                    <Text weight="semibold" className="text-xl mb-2">
                      {plan.name}
                    </Text>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-light">{plan.price}</span>
                      <Text color="muted" className="ml-2">{plan.period}</Text>
                    </div>
                  </div>
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, j) => (
                      <Flex key={j} gap={2} align="center">
                        <span className="text-green-400">✓</span>
                        <Text size="sm">{feature}</Text>
                      </Flex>
                    ))}
                  </div>
                  <Button
                    variant={plan.featured ? "primary" : "secondary"}
                    href="/pricing"
                    className="w-full"
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
          <Card glass className="text-center">
            <H2 className="mb-4">Ready to transform your direct mail?</H2>
            <Text size="xl" color="secondary" className="mb-8 max-w-2xl mx-auto">
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
    </div>
  );
}