/*
 * Pricing Page - Minimalist Dark Theme
 * Clean, transparent pricing presentation
 */
"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
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
  Alert,
  GlowOrb,
} from "@/components/ui";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function PricingPage() {
  const [loading, setLoading] = useState<string | null>(null);
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly");

  const handleSubscribe = async (priceId: string, plan: string) => {
    setLoading(plan);
    try {
      const response = await fetch("/api/stripe/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          priceId,
          mode: "subscription",
          metadata: { plan },
        }),
      });

      const { sessionId } = await response.json();
      const stripe = await stripePromise;

      if (stripe) {
        const { error } = await stripe.redirectToCheckout({ sessionId });
        if (error) console.error(error);
      }
    } catch (error) {
      console.error("Subscription error:", error);
    } finally {
      setLoading(null);
    }
  };

  const plans = [
    {
      name: "Starter",
      price: billingPeriod === "monthly" ? 49 : 470,
      period: billingPeriod === "monthly" ? "/month" : "/year",
      description: "Perfect for small teams getting started",
      features: [
        "1,000 letters per month",
        "Basic AI personalization",
        "CSV upload & management",
        "Email support",
        "Standard integrations",
        "Campaign analytics",
      ],
      priceId: billingPeriod === "monthly"
        ? "price_1S8b3lCXLbEz3Hk6AFU8iErV"
        : "price_annual_starter",
      featured: false,
    },
    {
      name: "Pro",
      price: billingPeriod === "monthly" ? 199 : 1910,
      period: billingPeriod === "monthly" ? "/month" : "/year",
      description: "Advanced features for growing teams",
      features: [
        "10,000 letters per month",
        "Advanced AI personalization",
        "Priority processing",
        "Custom integrations",
        "API access",
        "Dedicated account manager",
        "Advanced analytics & reporting",
        "Custom branding",
      ],
      priceId: billingPeriod === "monthly"
        ? "price_1S8b3wCXLbEz3Hk65nV1bCIO"
        : "price_annual_pro",
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited letters",
        "Custom AI models",
        "White-label solutions",
        "Dedicated infrastructure",
        "SLA guarantees",
        "24/7 phone support",
        "Custom contracts",
        "Compliance assistance",
      ],
      priceId: "price_1S8b46CXLbEz3Hk6r6GydWW8",
      featured: false,
    },
  ];

  const faqs = [
    {
      question: "How does the pricing work?",
      answer: "Our pricing is simple and transparent. You pay a monthly subscription that includes a set number of letters. Additional letters can be purchased as needed. All costs include AI generation, printing, postage, and delivery tracking.",
    },
    {
      question: "Can I change plans anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle. No contracts or commitments required.",
    },
    {
      question: "Do you offer volume discounts?",
      answer: "Absolutely! Our pricing automatically includes volume discounts. Enterprise customers sending 10,000+ letters receive our best rates. Contact sales for custom pricing.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover) and ACH bank transfers for Enterprise customers. All payments are processed securely through Stripe.",
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! All plans come with a 14-day free trial. No credit card required to start. You can test all features and send sample campaigns before subscribing.",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background effects */}
      <GlowOrb color="accent" size="lg" className="top-1/4 -right-32 opacity-10" />
      <GlowOrb color="purple" size="default" className="bottom-1/4 -left-32 opacity-10" />

      {/* Navigation */}
      <Nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/50 border-b border-white/5">
        <Logo size="md" />
        <Flex gap={8} align="center" className="hidden md:flex">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/features">Features</NavLink>
          <NavLink href="/pricing" active>Pricing</NavLink>
          <NavLink href="/about">About</NavLink>
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
      <Section>
        <Container>
          <div className="text-center mb-12">
            <Badge variant="accent" className="mb-6">
              Simple, Transparent Pricing
            </Badge>
            <H1 className="mb-6" gradient>
              Pricing that scales
              <br />
              with your business
            </H1>
            <Text size="xl" color="secondary" className="max-w-3xl mx-auto mb-8">
              No hidden fees. No contracts. Pay only for what you send.
              Start with a 14-day free trial.
            </Text>

            {/* Billing Toggle */}
            <Flex justify="center" align="center" gap={4}>
              <Text color={billingPeriod === "monthly" ? "primary" : "secondary"}>
                Monthly
              </Text>
              <button
                onClick={() => setBillingPeriod(billingPeriod === "monthly" ? "annual" : "monthly")}
                className="relative w-14 h-7 bg-gray-800 rounded-full transition-colors"
              >
                <div
                  className={`absolute top-1 w-5 h-5 bg-[var(--accent)] rounded-full transition-transform ${
                    billingPeriod === "annual" ? "translate-x-7" : "translate-x-1"
                  }`}
                />
              </button>
              <Text color={billingPeriod === "annual" ? "primary" : "secondary"}>
                Annual
              </Text>
              {billingPeriod === "annual" && (
                <Badge variant="success">Save 20%</Badge>
              )}
            </Flex>
          </div>

          {/* Pricing Cards */}
          <Grid cols={3} gap={8} className="mb-24">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative ${
                  plan.featured
                    ? "border-[var(--accent)] scale-105 shadow-2xl"
                    : ""
                }`}
                glass={!plan.featured}
              >
                {plan.featured && (
                  <Badge
                    variant="accent"
                    className="absolute -top-3 left-1/2 -translate-x-1/2"
                  >
                    Most Popular
                  </Badge>
                )}

                <div className="text-center mb-8">
                  <H3 className="mb-2">{plan.name}</H3>
                  <Text color="secondary" size="sm" className="mb-6">
                    {plan.description}
                  </Text>

                  {typeof plan.price === "number" ? (
                    <div className="mb-2">
                      <span className="text-5xl font-bold gradient-text-accent">
                        ${plan.price}
                      </span>
                      <Text color="muted" className="inline">
                        {plan.period}
                      </Text>
                    </div>
                  ) : (
                    <div className="text-5xl font-bold gradient-text mb-2">
                      {plan.price}
                    </div>
                  )}

                  {billingPeriod === "annual" && typeof plan.price === "number" && (
                    <Text size="sm" color="success">
                      Save ${(plan.price * 12 * 0.2).toFixed(0)} per year
                    </Text>
                  )}
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <Flex key={i} gap={3} align="start">
                      <span className="text-[var(--success)] mt-0.5">✓</span>
                      <Text size="sm">{feature}</Text>
                    </Flex>
                  ))}
                </div>

                <Button
                  variant={plan.featured ? "primary" : "secondary"}
                  size="lg"
                  className="w-full"
                  onClick={() =>
                    plan.name === "Enterprise"
                      ? window.location.href = "/contact"
                      : handleSubscribe(plan.priceId, plan.name.toLowerCase())
                  }
                  loading={loading === plan.name.toLowerCase()}
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                </Button>
              </Card>
            ))}
          </Grid>

          {/* Add-on Section */}
          <div className="text-center mb-24">
            <H2 className="mb-6">Need more letters?</H2>
            <Text size="lg" color="secondary" className="mb-8">
              Add letter bundles to any plan
            </Text>

            <Card glass className="max-w-md mx-auto">
              <Flex justify="between" align="center" className="mb-6">
                <div className="text-left">
                  <Text weight="semibold" className="mb-1">
                    Letter Bundle
                  </Text>
                  <Text size="sm" color="secondary">
                    100 additional letters
                  </Text>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">$200</div>
                  <Text size="sm" color="muted">One-time</Text>
                </div>
              </Flex>
              <Button
                variant="primary"
                className="w-full"
                onClick={() => handleSubscribe("price_1S8NhRCXLbEz3Hk6YZXjkAgY", "addon")}
                loading={loading === "addon"}
              >
                Add to Account
              </Button>
            </Card>
          </div>

          {/* Features Grid */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <H2 className="mb-4">Everything included</H2>
              <Text size="lg" color="secondary">
                All plans include our core features
              </Text>
            </div>

            <Grid cols={3} gap={6}>
              {[
                { icon: "🤖", title: "AI Personalization", desc: "Every letter uniquely written" },
                { icon: "📊", title: "Analytics", desc: "Real-time tracking and insights" },
                { icon: "🎯", title: "Targeting", desc: "Smart audience segmentation" },
                { icon: "✉️", title: "Premium Printing", desc: "High-quality paper and ink" },
                { icon: "🚀", title: "Fast Delivery", desc: "First-class mail included" },
                { icon: "🔒", title: "Security", desc: "Enterprise-grade protection" },
              ].map((feature, i) => (
                <Card key={i} glass className="text-center">
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <Text weight="semibold" className="mb-2">
                    {feature.title}
                  </Text>
                  <Text size="sm" color="secondary">
                    {feature.desc}
                  </Text>
                </Card>
              ))}
            </Grid>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <H2 className="mb-4">Frequently asked questions</H2>
              <Text size="lg" color="secondary">
                Everything you need to know about our pricing
              </Text>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group">
                  <summary className="cursor-pointer list-none">
                    <Card glass className="p-4 hover:border-gray-700 transition-colors">
                      <Flex justify="between" align="center">
                        <Text weight="semibold">{faq.question}</Text>
                        <span className="text-gray-500 group-open:rotate-180 transition-transform">
                          ↓
                        </span>
                      </Flex>
                    </Card>
                  </summary>
                  <Card className="mt-2 p-4 ml-4 border-l-2 border-[var(--accent)]">
                    <Text color="secondary">{faq.answer}</Text>
                  </Card>
                </details>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <Section>
            <Card glass className="text-center p-12">
              <H2 className="mb-4">Ready to get started?</H2>
              <Text size="xl" color="secondary" className="mb-8 max-w-2xl mx-auto">
                Join thousands of businesses using AI-powered direct mail to drive exceptional results.
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
          </Section>
        </Container>
      </Section>
    </div>
  );
}