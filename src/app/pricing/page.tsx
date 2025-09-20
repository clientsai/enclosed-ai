/*
 * Pricing Page - Jony Ive-Inspired Dark Theme
 * Clean, transparent pricing presentation
 */
"use client";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Logo from "@/components/Logo";
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
  Alert,
  GlowOrb,
  Noise,
  Switch,
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
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Premium Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 via-black to-black" />
        <GlowOrb color="accent" size="lg" className="top-20 -left-32 opacity-30" />
        <GlowOrb color="purple" size="default" className="bottom-20 right-10 opacity-20" />
        <GlowOrb color="white" size="sm" className="top-1/3 right-1/3 opacity-10" />
      </div>
      <Noise opacity={0.015} />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Section className="relative pt-24">
        <Container>
          <div className="text-center space-y-8 animate-fade-in">
            <Badge variant="accent" pulse className="animate-fade-in">
              Simple, Transparent Pricing
            </Badge>
            <H1 className="animate-slide-up" gradient>
              Pricing that scales
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                with your business
              </span>
            </H1>
            <Text size="xl" color="secondary" className="max-w-3xl mx-auto animate-fade-in animation-delay-200">
              No hidden fees. No contracts. Pay only for what you send.
              Start with a 14-day free trial.
            </Text>
            {/* Billing Toggle */}
            <div className="animate-fade-in animation-delay-400">
              <Flex justify="center"  gap={4} className="glass backdrop-blur-xl border border-gray-800/50 rounded-full p-2 w-fit mx-auto">
                <Text color={billingPeriod === "monthly" ? "primary" : "secondary"} weight="medium">
                  Monthly
                </Text>
                <Switch
                  checked={billingPeriod === "annual"}
                  onChange={(checked) => setBillingPeriod(checked ? "annual" : "monthly")}
                />
                <Text color={billingPeriod === "annual" ? "primary" : "secondary"} weight="medium">
                  Annual
                </Text>
                {billingPeriod === "annual" && (
                  <Badge variant="success" className="ml-2">Save 20%</Badge>
                )}
              </Flex>
            </div>
          </div>
          {/* Pricing Cards */}
          <div className="animate-slide-up animation-delay-600">
            <Grid cols={3} gap={8} className="mt-16">
              {plans.map((plan, index) => (
                <Card
                  key={plan.name}
                  className={`relative overflow-hidden transition-all duration-300 hover-lift ${
                    plan.featured
                      ? "border-blue-500/50 bg-gradient-to-b from-gray-900/50 to-black scale-105 premium-shadow"
                      : "border-gray-800/50 backdrop-blur-xl premium-shadow"
                  }`}
                  glass={!plan.featured}
                >
                  {plan.featured && (
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
                  )}
                  {plan.featured && (
                    <Badge
                      variant="accent"
                      className="absolute -top-3 left-1/2 -translate-x-1/2"
                    >
                      Most Popular
                    </Badge>
                  )}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <H3 className="text-2xl font-semibold">{plan.name}</H3>
                      <Text color="secondary" size="sm" className="min-h-[40px]">
                        {plan.description}
                      </Text>
                      {typeof plan.price === "number" ? (
                        <div className="flex items-baseline gap-2">
                          <span className="text-5xl font-bold text-white">
                            ${plan.price}
                          </span>
                          <Text color="muted" size="lg">
                            {plan.period}
                          </Text>
                        </div>
                      ) : (
                        <div className="text-5xl font-bold text-white">
                          {plan.price}
                        </div>
                      )}
                      {billingPeriod === "annual" && typeof plan.price === "number" && (
                        <Text size="sm" color="success" className="flex items-center gap-1">
                          💰 Save ${(plan.price * 12 * 0.2).toFixed(0)} per year
                        </Text>
                      )}
                    </div>

                    <Divider />

                    <div className="space-y-4 min-h-[300px]">
                      {plan.features.map((feature, i) => (
                        <Flex key={i} gap={4} align="start">
                          <span className="text-green-400 text-lg">✓</span>
                          <Text size="sm" color="secondary">{feature}</Text>
                        </Flex>
                      ))}
                    </div>

                    <Button
                      variant={plan.featured ? "primary" : "secondary"}
                      size="lg"
                      fullWidth
                      onClick={() =>
                        plan.name === "Enterprise"
                          ? window.location.href = "/contact"
                          : handleSubscribe(plan.priceId, plan.name.toLowerCase())
                      }
                      loading={loading === plan.name.toLowerCase()}
                      className={plan.featured ? "shadow-lg shadow-blue-500/20" : ""}
                    >
                      {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                    </Button>
                  </div>
                </Card>
              ))}
            </Grid>
          </div>
          {/* Add-on Section */}
          <div className="animate-slide-up animation-delay-800">
            <div className="text-center space-y-4 mb-8">
              <H2>Need more letters?</H2>
              <Text size="lg" color="secondary">
                Add letter bundles to any plan
              </Text>
            </div>
            <Card glass className="backdrop-blur-xl border-gray-800/50 premium-shadow hover-lift max-w-md mx-auto">
              <Flex justify="between"  className="mb-6">
                <div className="space-y-1">
                  <Text weight="semibold" size="lg">
                    Letter Bundle
                  </Text>
                  <Text size="sm" color="secondary">
                    100 additional letters
                  </Text>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-white">$200</div>
                  <Text size="sm" color="muted">One-time</Text>
                </div>
              </Flex>
              <Button
                variant="primary"
                fullWidth
                onClick={() => handleSubscribe("price_1S8NhRCXLbEz3Hk6YZXjkAgY", "addon")}
                loading={loading === "addon"}
                className="shadow-lg shadow-blue-500/20"
              >
                Add to Account
              </Button>
            </Card>
          </div>
          {/* Features Grid */}
          <div className="animate-slide-up animation-delay-1000">
            <div className="text-center space-y-4 mb-12">
              <H2>Everything included</H2>
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
                <Card key={i} glass className="hover-lift backdrop-blur-xl border-gray-800/50 premium-shadow text-center space-y-4">
                  <div className="text-4xl">{feature.icon}</div>
                  <Text weight="semibold" size="lg">
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
          <div className="animate-slide-up animation-delay-1200 max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <H2>Frequently asked questions</H2>
              <Text size="lg" color="secondary">
                Everything you need to know about our pricing
              </Text>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group">
                  <summary className="cursor-pointer list-none">
                    <Card glass className="hover-lift backdrop-blur-xl border-gray-800/50 premium-shadow group-open:border-blue-500/30 transition-all">
                      <Flex justify="between" >
                        <Text weight="semibold" size="lg">{faq.question}</Text>
                        <span className="text-gray-400 group-open:rotate-180 transition-transform duration-300">
                          ↓
                        </span>
                      </Flex>
                    </Card>
                  </summary>
                  <Card className="mt-2 backdrop-blur-sm border-gray-800/30 animate-slide-down">
                    <Text color="secondary" className="leading-relaxed">{faq.answer}</Text>
                  </Card>
                </details>
              ))}
            </div>
          </div>
          {/* CTA Section */}
          <div className="animate-slide-up animation-delay-1400">
            <Card glass className="text-center space-y-8 backdrop-blur-xl border-gray-800/50 premium-shadow relative overflow-hidden p-16">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
              <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
                <H2>Ready to get started?</H2>
                <Text size="xl" color="secondary">
                  Join thousands of businesses using AI-powered direct mail to drive exceptional results.
                </Text>
                <Flex gap={4} justify="center" className="pt-4">
                  <Button size="lg" href="/auth/signup" className="shadow-lg shadow-blue-500/20">
                    Start Your Free Trial
                  </Button>
                  <Button variant="outline" size="lg" href="/contact">
                    Schedule a Demo
                  </Button>
                </Flex>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Footer */}
      <Footer />
    </div>
  );
}