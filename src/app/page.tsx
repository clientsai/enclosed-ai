/*
 * Homepage - Jony Ive Inspired Dark Theme
 * Minimal, purposeful, with focus on the product
 */
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { cn } from "@/lib/utils";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
  Noise,
  ProgressBar,
  Metric,
  Avatar,
  Switch,
  IconButton,
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
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="spinner w-12 h-12 mx-auto" />
          <Text size="sm" color="muted">Loading...</Text>
        </div>
      </div>
    );
  }
  if (user) return null;
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Premium Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 via-black to-black" />
        <GlowOrb color="accent" size="lg" className="top-20 -left-20" />
        <GlowOrb color="purple" size="default" className="bottom-40 right-10" />
        <GlowOrb color="white" size="sm" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
      <Noise opacity={0.015} />
      {/* Navigation */}
      <Navigation variant="landing" transparent />
      {/* Hero Section */}
      <Section className="relative min-h-screen flex items-center pt-20">
        <Container size="lg">
          <Flex direction="col" align="center" gap={8} className="text-center relative z-10">
            <Badge variant="accent" pulse className="animate-fade-in">
              AI-Powered Direct Mail Platform
            </Badge>

            <H1 className="animate-slide-up" gradient>
              Direct Mail
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Reimagined
              </span>
            </H1>

            <Text
              size="2xl"
              color="secondary"
              weight="light"
              className="max-w-3xl animate-fade-in animation-delay-200"
            >
              Transform your marketing with AI that writes personally to each recipient.
              Every letter, uniquely crafted. Every message, perfectly timed.
            </Text>

            <Flex gap={4} justify="center" className="animate-fade-in animation-delay-400 flex-wrap">
              <Button size="lg" href="/auth/signup" icon="🚀">
                Start Free Trial
              </Button>
              <Button variant="secondary" size="lg" href="#demo" icon="▶">
                Watch Demo
              </Button>
            </Flex>

            <Flex gap={6} justify="center" className="animate-fade-in animation-delay-600 flex-wrap">
              <Text size="sm" color="muted">✓ No credit card required</Text>
              <Text size="sm" color="muted">✓ 14-day free trial</Text>
              <Text size="sm" color="muted">✓ Cancel anytime</Text>
            </Flex>

            {/* Floating UI Elements */}
            <div className="hidden lg:block absolute -top-20 left-10 animate-pulse-glow">
              <Card glass className="p-3 backdrop-blur-xl">
                <Text size="xs" color="muted">Response Rate</Text>
                <Text size="lg" weight="bold">12.4%</Text>
              </Card>
            </div>

            <div className="hidden lg:block absolute -top-10 right-20 animate-pulse-glow animation-delay-1000">
              <Card glass className="p-3 backdrop-blur-xl">
                <Text size="xs" color="muted">AI Personalization</Text>
                <ProgressBar value={87} max={100} variant="accent" />
              </Card>
            </div>
          </Flex>
        </Container>
      </Section>
      {/* Stats Section */}
      <Section className="relative py-24 bg-gradient-to-b from-black via-gray-900/10 to-black">
        <Container>
          <Grid cols={4} gap={8}>
            {[
              { value: "12.4%", label: "Response Rate", subtext: "Industry avg: 1.2%", change: { value: 933, type: "increase" as const } },
              { value: "847%", label: "Average ROI", subtext: "Measured across campaigns", change: { value: 47, type: "increase" as const } },
              { value: "5,000+", label: "Active Users", subtext: "Growing every day", change: { value: 125, type: "increase" as const } },
              { value: "10M+", label: "Letters Sent", subtext: "And counting", change: { value: 89, type: "increase" as const } },
            ].map((stat, i) => (
              <Card key={i} glass className="hover-lift backdrop-blur-xl border-gray-800/50 p-6">
                <Metric
                  value={stat.value}
                  label={stat.label}
                  change={stat.change}
                />
                <Text size="sm" color="muted" className="mt-2">
                  {stat.subtext}
                </Text>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>
      {/* Features Section */}
      <Section id="features" className="relative py-32">
        <Container>
          <Flex direction="col" gap={8}>
            <div className="text-center space-y-4">
              <Badge variant="default" className="animate-fade-in">Features</Badge>
              <H2>Everything you need</H2>
              <Text size="xl" color="secondary" className="max-w-2xl mx-auto animate-fade-in animation-delay-200">
                A complete platform designed for simplicity and power
              </Text>
            </div>

            <Grid cols={3} gap={8}>
              {[
                {
                  title: "AI Personalization",
                  description: "Every letter is uniquely written for each recipient using advanced AI",
                  icon: "🤖",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  title: "Smart Analytics",
                  description: "Track opens, responses, and ROI in real-time with detailed insights",
                  icon: "📊",
                  gradient: "from-purple-500 to-pink-500",
                },
                {
                  title: "Automated Workflow",
                  description: "From creation to delivery, everything runs on autopilot",
                  icon: "⚡",
                  gradient: "from-yellow-500 to-orange-500",
                },
                {
                  title: "Premium Printing",
                  description: "High-quality paper and printing that demands attention",
                  icon: "✨",
                  gradient: "from-green-500 to-emerald-500",
                },
                {
                  title: "API Access",
                  description: "Integrate with your existing tools and workflows seamlessly",
                  icon: "🔌",
                  gradient: "from-indigo-500 to-blue-500",
                },
                {
                  title: "24/7 Support",
                  description: "Expert help whenever you need it, day or night",
                  icon: "💬",
                  gradient: "from-red-500 to-pink-500",
                },
              ].map((feature, i) => (
                <Card key={i} className="hover-lift group relative overflow-hidden border-gray-800/50 backdrop-blur-sm">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  <div className="relative z-10 space-y-4">
                    <div className="text-4xl">{feature.icon}</div>
                    <H3 className="text-xl">{feature.title}</H3>
                    <Text color="secondary">{feature.description}</Text>
                  </div>
                </Card>
              ))}
            </Grid>
          </Flex>
        </Container>
      </Section>
      {/* How It Works */}
      <Section className="relative py-32 bg-gradient-to-b from-black via-gray-900/5 to-black">
        <Container>
          <Flex direction="col" gap={8}>
            <div className="text-center space-y-4">
              <Badge variant="accent">Process</Badge>
              <H2>Simple as 1-2-3</H2>
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
                  icon: "📤",
                },
                {
                  step: "02",
                  title: "AI Creates Content",
                  description: "Our AI writes personalized letters for each recipient",
                  icon: "✨",
                },
                {
                  step: "03",
                  title: "We Handle The Rest",
                  description: "Printing, mailing, and tracking - all automated",
                  icon: "🚀",
                },
              ].map((step, i) => (
                <div key={i} className="relative group">
                  {i < 2 && (
                    <div className="hidden lg:block absolute top-1/3 left-full w-full h-0.5 bg-gradient-to-r from-gray-700 to-transparent" />
                  )}
                  <Card className="hover-lift text-center space-y-4 border-gray-800/50 backdrop-blur-sm">
                    <div className="mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold gradient-text-accent">{step.step}</span>
                    </div>
                    <div className="text-3xl">{step.icon}</div>
                    <H3 className="text-xl">{step.title}</H3>
                    <Text color="secondary">{step.description}</Text>
                  </Card>
                </div>
              ))}
            </Grid>
          </Flex>
        </Container>
      </Section>
      {/* Testimonial */}
      <Section className="relative py-24">
        <Container size="default">
          <Card glass className="relative overflow-hidden backdrop-blur-xl border-gray-800/50 p-12">
            <div className="absolute top-0 left-0 text-6xl text-gray-700/20">"</div>
            <div className="relative z-10 space-y-6">
              <Text size="2xl" weight="light" className="leading-relaxed italic">
                Enclosed.AI transformed our direct mail from a cost center to our most
                profitable channel. Response rates went from 0.5% to 12%.
              </Text>
              <Divider className="my-6" />
              <Flex align="center" gap={4}>
                <Avatar src="" alt="Sarah Chen" size="lg" />
                <div>
                  <Text weight="semibold">Sarah Chen</Text>
                  <Text size="sm" color="muted">VP Marketing, TechStart Inc.</Text>
                </div>
              </Flex>
            </div>
            <div className="absolute bottom-0 right-0 text-6xl text-gray-700/20">"</div>
          </Card>
        </Container>
      </Section>
      {/* Pricing Preview */}
      <Section id="pricing" className="relative py-32 bg-gradient-to-b from-black via-gray-900/10 to-black">
        <Container>
          <Flex direction="col" gap={8}>
            <div className="text-center space-y-4">
              <Badge>Pricing</Badge>
              <H2>Simple, transparent pricing</H2>
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
                  features: ["1,000 letters/month", "Basic AI", "Email support", "Standard templates"],
                  cta: "Start Free",
                  featured: false,
                },
                {
                  name: "Professional",
                  price: "$199",
                  period: "/month",
                  features: ["10,000 letters/month", "Advanced AI", "Priority support", "API access", "Custom templates", "Analytics dashboard"],
                  cta: "Most Popular",
                  featured: true,
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  period: "",
                  features: ["Unlimited letters", "Custom AI training", "Dedicated support", "99.9% SLA", "White-label options", "Advanced security"],
                  cta: "Contact Sales",
                  featured: false,
                },
              ].map((plan, i) => (
                <Card
                  key={i}
                  className={cn(
                    "relative overflow-hidden transition-all duration-300 hover-lift",
                    plan.featured ? "border-blue-500/50 bg-gradient-to-b from-gray-900/50 to-black scale-105" : "border-gray-800/50 backdrop-blur-sm"
                  )}
                >
                  {plan.featured && (
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
                  )}
                  {plan.featured && (
                    <Badge variant="accent" className="absolute -top-3 left-1/2 -translate-x-1/2">
                      Recommended
                    </Badge>
                  )}

                  <div className="space-y-6 p-2">
                    <div className="space-y-2">
                      <Text weight="semibold" size="lg">
                        {plan.name}
                      </Text>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-white">{plan.price}</span>
                        <Text color="muted" size="sm">{plan.period}</Text>
                      </div>
                    </div>

                    <Divider />

                    <div className="space-y-3 min-h-[200px]">
                      {plan.features.map((feature, j) => (
                        <Flex key={j} gap={4} align="start">
                          <span className="text-green-400 flex-shrink-0">✓</span>
                          <Text size="sm" color="secondary" className="text-left">{feature}</Text>
                        </Flex>
                      ))}
                    </div>

                    <Button
                      variant={plan.featured ? "primary" : "secondary"}
                      href="/pricing"
                      fullWidth
                      className={plan.featured ? "shadow-lg shadow-blue-500/20" : ""}
                    >
                      {plan.cta}
                    </Button>
                  </div>
                </Card>
              ))}
            </Grid>
          </Flex>
        </Container>
      </Section>
      {/* CTA Section */}
      <Section className="relative py-32">
        <Container>
          <Card glass className="relative overflow-hidden backdrop-blur-xl border-gray-800/50 p-16 text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
            <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
              <H2>Ready to transform your direct mail?</H2>
              <Text size="xl" color="secondary">
                Join thousands of businesses getting exceptional results with AI-powered direct mail.
              </Text>
              <Flex gap={4} justify="center" className="pt-4 flex-wrap">
                <Button size="lg" href="/auth/signup" icon="🚀">
                  Start Your Free Trial
                </Button>
                <Button variant="outline" size="lg" href="/contact">
                  Talk to Sales
                </Button>
              </Flex>
            </div>
          </Card>
        </Container>
      </Section>
      {/* Footer */}
      <Footer variant="landing" />
    </div>
  );
}