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
      <div className="min-h-screen bg-black">
        <div className="spinner" />
      </div>
    );
  }
  if (user) return null;
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Ambient background effects */}
      <GlowOrb color="accent" size="lg" className="top-1/4 -left-32" />
      <GlowOrb color="purple" size="default" className="bottom-1/4 right-0" />
      {/* Navigation */}
      {/* Hero Section */}
      <Section className="min-h-screen flex items-center justify-center pt-20">
        <Container size="lg">
          <Flex direction="col" align="center" gap={8} className="text-center">
            <Badge variant="accent" className="animate-fade-in">
              AI-Powered Direct Mail
            </Badge>
            <H1 className="animate-fade-up max-w-5xl" gradient>
              Direct Mail
              <br />
              Reimagined
            </H1>
            <Text
              size="2xl"
              color="secondary"
              weight="light"
              className="animate-fade-up animation-delay-100 max-w-3xl"
            >
              Transform your marketing with AI that writes personally to each recipient.
              Every letter, uniquely crafted. Every message, perfectly timed.
            </Text>
            <Flex gap={4} className="animate-fade-up animation-delay-200">
              <Button size="lg" href="/auth/signup">
                Start Free Trial
                <span className="ml-2">→</span>
              </Button>
              <Button variant="secondary" size="lg" href="#demo">
                Watch Demo
              </Button>
            </Flex>
            <Text size="sm" color="muted" className="animate-fade-in animation-delay-300">
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
              <Card key={i} glass className="text-center hover:scale-105 transition-transform">
                <H2 className="gradient-text-accent">{stat.value}</H2>
                <Text size="lg" weight="medium" className="mt-2">
                  {stat.label}
                </Text>
                <Text size="sm" color="muted" className="mt-1">
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
                <Card key={i} hover>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <H3 className="text-lg md:text-lg md:text-xl mb-2">{feature.title}</H3>
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
                  <div className="text-6xl font-bold gradient-text-accent mb-4">
                    {step.step}
                  </div>
                  <H3 className="text-lg md:text-lg md:text-xl mb-2">{step.title}</H3>
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
          <Card glass className="text-center p-12">
            <Text size="2xl" weight="light" className="mb-6 italic">
              "Enclosed.AI transformed our direct mail from a cost center to our most
              profitable channel. Response rates went from 0.5% to 12%."
            </Text>
            <Divider className="w-24 mx-auto my-6" />
            <Text weight="semibold">Sarah Chen</Text>
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
                  className={plan.featured ? "border-[var(--accent)] relative" : ""}
                >
                  {plan.featured && (
                    <Badge variant="accent" className="absolute -top-3 left-1/2 -translate-x-1/2">
                      Recommended
                    </Badge>
                  )}
                  <div className="text-center mb-6">
                    <Text weight="semibold" className="mb-4">
                      {plan.name}
                    </Text>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <Text color="muted">{plan.period}</Text>
                    </div>
                  </div>
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, j) => (
                      <Flex key={j} gap={2} align="center">
                        <span className="text-[var(--success)]">✓</span>
                        <Text size="sm">{feature}</Text>
                      </Flex>
                    ))}
                  </div>
                  <Button
                    variant={plan.featured ? "primary" : "secondary"}
                    className="w-full"
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
          <Card glass className="text-center p-12">
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
      {/* Footer */}
      <footer className="border-t border-gray-900 mt-24">
        <Container>
          <div className="py-12">
            <Grid cols={5} gap={8} className="mb-12">
              <div>
                <Logo showText size="sm" className="mb-4" />
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