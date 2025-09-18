"use client";

import Link from "next/link";
import Logo from "@/components/Logo";
import DotPattern from "@/components/DotPattern";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Section,
  Split,
  Grid,
  Stack,
  Cluster,
  Eyebrow,
  Headline,
  Subhead,
  Lead,
  Button,
  Card,
  Badge,
  Accordion,
  Stat,
} from "@/components/premium";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
);

export default function PricingPage() {
  const [loading, setLoading] = useState<string | null>(null);

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
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <Section className="py-0">
          <div className="flex justify-between items-center h-16">
            <Logo size="md" />
            <nav className="hidden md:flex">
              <Cluster gap={2}>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150"
                >
                  Home
                </Link>
                <Link
                  href="/features"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150"
                >
                  Features
                </Link>
                <Link
                  href="/pricing"
                  className="text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Pricing
                </Link>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150"
                >
                  Contact
                </Link>
              </Cluster>
            </nav>
            <Cluster gap={2}>
              <Button as={Link} href="/auth/login" variant="ghost" size="sm">
                Sign In
              </Button>
              <Button as={Link} href="/auth/signup" size="sm">
                Get Started
              </Button>
            </Cluster>
          </div>
        </Section>
      </header>

      {/* Hero Section */}
      <Section className="relative overflow-hidden bg-gray-50">
        <DotPattern className="opacity-5" />
        <div className="relative text-center">
          <Stack gap={6}>
            <Eyebrow className="mx-auto bg-gray-100 text-gray-700">
              No hidden fees • No contracts • No monthly charges
            </Eyebrow>
            <Headline level={1} className="max-w-4xl mx-auto">
              Simple, Transparent
              <span className="block text-gray-900">
                Pricing
              </span>
            </Headline>
            <Lead className="max-w-4xl mx-auto">
              Pay only for what you send. No monthly fees, no contracts, no
              hidden costs. Just straightforward pricing that scales with your
              business.
            </Lead>
            <Cluster gap={4} justify="center">
              <Button as={Link} href="/auth/signup" size="lg">
                Start Free Trial
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Button>
              <Button as={Link} href="/contact" variant="ghost" size="lg">
                Talk to Sales
              </Button>
            </Cluster>
          </Stack>
        </div>
      </Section>

      {/* Pricing Cards Section */}
      <Section className="bg-white">
        <Stack gap={8}>
          <div className="text-center">
            <Stack gap={4}>
              <Headline level={2}>
                Choose Your Plan
              </Headline>
              <div className="w-20 h-1 bg-gray-900 rounded-full mx-auto"></div>
              <Subhead className="max-w-3xl mx-auto">
                Select the plan that best fits your business needs. All plans
                include our core AI-powered features.
              </Subhead>
            </Stack>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <div className="group bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Starter
                </h3>
                <p className="text-gray-600 mb-6">
                  Perfect for getting started with direct mail
                </p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900 group-hover:scale-110 transition-transform duration-300">
                    $99
                  </span>
                  <span className="text-xl text-gray-600 ml-1">.99</span>
                  <span className="text-lg text-gray-500 block mt-2">
                    per month
                  </span>
                </div>
                <p className="text-sm text-gray-600 font-medium">
                  50 personalized letters/month included
                </p>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-start group/item">
                  <div className="h-6 w-6 bg-white/10 rounded-full flex items-center justify-center mr-4 mt-1 group-hover/item:scale-110 transition-transform duration-300">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-300 font-medium">
                    CSV lead upload & management
                  </span>
                </div>
                <div className="flex items-start group/item">
                  <div className="h-6 w-6 bg-white/10 rounded-full flex items-center justify-center mr-4 mt-1 group-hover/item:scale-110 transition-transform duration-300">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-300 font-medium">
                    50 direct mail letters per month
                  </span>
                </div>
                <div className="flex items-start group/item">
                  <div className="h-6 w-6 bg-white/10 rounded-full flex items-center justify-center mr-4 mt-1 group-hover/item:scale-110 transition-transform duration-300">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-300 font-medium">
                    Professional printing & shipping
                  </span>
                </div>
                <div className="flex items-start group/item">
                  <div className="h-6 w-6 bg-white/10 rounded-full flex items-center justify-center mr-4 mt-1 group-hover/item:scale-110 transition-transform duration-300">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-300 font-medium">
                    Basic templates (write your own)
                  </span>
                </div>
                <div className="flex items-start group/item">
                  <div className="h-6 w-6 bg-white/10 rounded-full flex items-center justify-center mr-4 mt-1 group-hover/item:scale-110 transition-transform duration-300">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-300 font-medium">
                    Delivery tracking
                  </span>
                </div>
                <div className="flex items-start group/item">
                  <div className="h-6 w-6 bg-white/10 rounded-full flex items-center justify-center mr-4 mt-1 group-hover/item:scale-110 transition-transform duration-300">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-300 font-medium">
                    Email support
                  </span>
                </div>
              </div>
              <button
                onClick={() =>
                  handleSubscribe("price_1S8Na9CXLbEz3Hk6VkoBMzvX", "starter")
                }
                disabled={loading === "starter"}
                className="w-full bg-gray-900 text-white py-4 px-6 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center block disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading === "starter" ? "Processing..." : "Get Started"}
              </button>
            </div>

            {/* Premium Plan */}
            <div className="group bg-gray-900 text-white rounded-2xl p-8 border-2 border-gray-900 relative hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg border border-gray-700">
                  BEST VALUE
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Premium
                </h3>
                <p className="text-gray-400 mb-6">
                  AI-powered personalization for maximum ROI
                </p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                    $299
                  </span>
                  <span className="text-xl text-gray-400 ml-1">.99</span>
                  <span className="text-lg text-gray-500 block mt-2">
                    per month
                  </span>
                </div>
                <p className="text-sm text-gray-400 font-medium">
                  100 AI-personalized letters/month included
                </p>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-start group/item">
                  <div className="h-6 w-6 bg-white/10 rounded-full flex items-center justify-center mr-4 mt-1 group-hover/item:scale-110 transition-transform duration-300">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-300 font-medium">
                    Everything in Starter
                  </span>
                </div>
                <div className="flex items-start group/item">
                  <div className="h-6 w-6 bg-white/10 rounded-full flex items-center justify-center mr-4 mt-1 group-hover/item:scale-110 transition-transform duration-300">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-300 font-medium">
                    AI-powered personalization engine
                  </span>
                </div>
                <div className="flex items-start group/item">
                  <div className="h-6 w-6 bg-white/10 rounded-full flex items-center justify-center mr-4 mt-1 group-hover/item:scale-110 transition-transform duration-300">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-300 font-medium">
                    100 personalized letters/month
                  </span>
                </div>
                <div className="flex items-start group/item">
                  <div className="h-6 w-6 bg-white/10 rounded-full flex items-center justify-center mr-4 mt-1 group-hover/item:scale-110 transition-transform duration-300">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-300 font-medium">
                    Advanced CSV column mapping
                  </span>
                </div>
                <div className="flex items-start group/item">
                  <div className="h-6 w-6 bg-white/10 rounded-full flex items-center justify-center mr-4 mt-1 group-hover/item:scale-110 transition-transform duration-300">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-300 font-medium">
                    Google Calendar integration
                  </span>
                </div>
                <div className="flex items-start group/item">
                  <div className="h-6 w-6 bg-white/10 rounded-full flex items-center justify-center mr-4 mt-1 group-hover/item:scale-110 transition-transform duration-300">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-300 font-medium">
                    Customizable tracking links
                  </span>
                </div>
                <div className="flex items-start group/item">
                  <div className="h-6 w-6 bg-white/10 rounded-full flex items-center justify-center mr-4 mt-1 group-hover/item:scale-110 transition-transform duration-300">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-300 font-medium">
                    Priority support & onboarding
                  </span>
                </div>
                <div className="flex items-start group/item">
                  <div className="h-6 w-6 bg-white/10 rounded-full flex items-center justify-center mr-4 mt-1 group-hover/item:scale-110 transition-transform duration-300">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-300 font-medium">
                    Letter preview & approval flow
                  </span>
                </div>
              </div>
              <button
                onClick={() =>
                  handleSubscribe("price_1S8NfrCXLbEz3Hk6oU04DDaa", "premium")
                }
                disabled={loading === "premium"}
                className="w-full bg-white text-gray-900 py-4 px-6 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center block disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading === "premium" ? "Processing..." : "Get Started"}
              </button>
            </div>
          </div>

          {/* Add-on Section */}
          <div className="mt-8">
            <div className="text-center">
              <Stack gap={4}>
                <Headline level={3}>
                  Need More Letters?
                </Headline>
                <div className="w-16 h-1 bg-gray-900 rounded-full mx-auto"></div>
                <Subhead>
                  Add more mailings to your plan anytime
                </Subhead>
              </Stack>
            </div>
            <div className="max-w-md mx-auto mt-6">
              <Card hover className="bg-gray-50 border-gray-200 p-6">
                <Stack gap={6}>
                  <div className="text-center">
                    <Stack gap={4}>
                      <Headline level={4}>
                        Mailing Bundle
                      </Headline>
                      <Subhead>
                        100 additional personalized letters
                      </Subhead>
                      <div>
                        <div className="text-3xl sm:text-4xl font-bold text-gray-900">
                          $200
                        </div>
                        <div className="text-gray-500 text-sm mt-1">
                          One-time purchase
                        </div>
                      </div>
                    </Stack>
                  </div>
                  <Stack gap={2}>
                    {[
                      "100 additional mailings",
                      "Never expires",
                      "Works with any plan"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <span className="text-gray-700 mr-2">✓</span>
                        <span className="text-gray-900">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </Stack>
                  <Button
                    onClick={() =>
                      handleSubscribe("price_1S8NhRCXLbEz3Hk6YZXjkAgY", "addon")
                    }
                    disabled={loading === "addon"}
                    className="w-full bg-gray-900 text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading === "addon" ? "Processing..." : "Add to Account"}
                  </Button>
                </Stack>
              </Card>
            </div>
          </div>
        </Stack>
      </Section>

      {/* What's Included Section */}
      <Section className="bg-white">
        <Stack gap={8}>
          <div className="text-center">
            <Stack gap={4}>
              <Headline level={2}>
                What's Included in Every Plan
              </Headline>
              <div className="w-20 h-1 bg-gray-900 rounded-full mx-auto"></div>
              <Subhead className="max-w-3xl mx-auto">
                All plans include our core features with no additional charges or
                hidden fees
              </Subhead>
            </Stack>
          </div>

          <Grid columns={3}>
            <Card hover className="text-center bg-white p-6 group">
              <Stack gap={4}>
                <div className="h-20 w-20 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-200">
                  <svg
                    className="h-10 w-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <Headline level={4}>
                  AI-Powered Personalization
                </Headline>
                <p className="text-gray-900 leading-relaxed">
                  Every letter is uniquely crafted using advanced AI to speak
                  directly to each recipient's needs and interests.
                </p>
              </Stack>
            </Card>

            <Card hover className="text-center bg-white p-6 group">
              <Stack gap={4}>
                <div className="h-20 w-20 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-200">
                  <svg
                    className="h-10 w-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <Headline level={4}>
                  Professional Printing
                </Headline>
                <p className="text-gray-900 leading-relaxed">
                  High-quality printing on premium paper stock with professional
                  finishing and attention to detail.
                </p>
              </Stack>
            </Card>

            <Card hover className="text-center bg-white p-6 group">
              <Stack gap={4}>
                <div className="h-20 w-20 bg-gray-700 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-200">
                  <svg
                    className="h-10 w-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <Headline level={4}>
                  Real-Time Analytics
                </Headline>
                <p className="text-gray-900 leading-relaxed">
                  Track delivery, response rates, and ROI with comprehensive
                  analytics and detailed reporting.
                </p>
              </Stack>
            </Card>

            <Card hover className="text-center bg-white p-6 group">
              <Stack gap={4}>
                <div className="h-20 w-20 bg-gray-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-200">
                  <svg
                    className="h-10 w-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>
                <Headline level={4}>
                  No Hidden Fees
                </Headline>
                <p className="text-gray-900 leading-relaxed">
                  Transparent pricing with no setup fees, monthly charges, or
                  hidden costs. Pay only for what you send.
                </p>
              </Stack>
            </Card>

            <Card hover className="text-center bg-white p-6 group">
              <Stack gap={4}>
                <div className="h-20 w-20 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-200">
                  <svg
                    className="h-10 w-10 text-white"
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
                <Headline level={4}>
                  Delivery Guarantee
                </Headline>
                <p className="text-gray-900 leading-relaxed">
                  We guarantee delivery of your mail pieces with full tracking and
                  confirmation for every campaign.
                </p>
              </Stack>
            </Card>

            <Card hover className="text-center bg-white p-6 group">
              <Stack gap={4}>
                <div className="h-20 w-20 bg-gray-400 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-200">
                  <svg
                    className="h-10 w-10 text-white"
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
                <Headline level={4}>
                  Expert Support
                </Headline>
                <p className="text-gray-900 leading-relaxed">
                  Get help when you need it with our dedicated support team and
                  comprehensive knowledge base.
                </p>
              </Stack>
            </Card>
          </Grid>
        </Stack>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-white">
        <Stack gap={8}>
          <div className="text-center">
            <Stack gap={4}>
              <Headline level={2}>
                Frequently Asked Questions
              </Headline>
              <div className="w-20 h-1 bg-gray-900 rounded-full mx-auto"></div>
              <Subhead className="max-w-3xl mx-auto">
                Get answers to common questions about our pricing and services
              </Subhead>
            </Stack>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion
              items={[
                {
                  title: "How does the pricing work?",
                  content: (
                    <p className="text-gray-900 leading-relaxed text-base">
                      Our pricing is simple and transparent. You pay only for the
                      letters you send, with no monthly fees or hidden costs. The
                      price per letter decreases as you send more volume, with
                      significant savings for larger campaigns. All costs include AI
                      generation, professional printing, postage, and delivery
                      tracking.
                    </p>
                  ),
                },

                {
                  title: "What's included in the per-letter cost?",
                  content: (
                    <p className="text-gray-900 leading-relaxed text-base">
                      Every letter includes AI-powered personalization, professional
                      printing on high-quality paper, first-class postage, delivery
                      tracking, and basic analytics. There are no additional fees for
                      setup, processing, or delivery confirmation. The price you see
                      is the total price you pay.
                    </p>
                  ),
                },

                {
                  title: "Can I change plans anytime?",
                  content: (
                    <p className="text-gray-900 leading-relaxed text-base">
                      Yes, you can upgrade or downgrade your plan at any time. Since
                      we use pay-per-use pricing, there are no contracts or
                      commitments. Simply choose the plan that best fits your current
                      needs, and you can always adjust as your business grows.
                    </p>
                  ),
                },

                {
                  title: "Do you offer volume discounts?",
                  content: (
                    <p className="text-gray-900 leading-relaxed text-base">
                      Absolutely! Our pricing automatically includes volume discounts.
                      The more letters you send, the less you pay per letter.
                      Enterprise customers sending 10,000+ letters receive our best
                      rates, and we also offer custom pricing for very large
                      campaigns. Contact our sales team to discuss your specific
                      volume needs.
                    </p>
                  ),
                },

                {
                  title: "What payment methods do you accept?",
                  content: (
                    <p className="text-gray-900 leading-relaxed text-base">
                      We accept all major credit cards (Visa, MasterCard, American
                      Express, Discover) and also support ACH bank transfers for
                      Enterprise customers. All payments are processed securely
                      through Stripe, and you can set up automatic billing for your
                      campaigns. We also offer net payment terms for qualified
                      Enterprise customers.
                    </p>
                  ),
                },
              ]}
            />
          </div>
        </Stack>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gray-900 relative overflow-hidden text-center">
        <DotPattern className="opacity-5" />
        <div className="relative">
          <Stack gap={6}>
            <Headline level={2} className="text-white">
              Ready to Get Started?
            </Headline>
            <Lead className="text-white opacity-90 max-w-3xl mx-auto">
              Choose your plan and start creating more effective direct mail
              campaigns today. No setup fees, no contracts, just results.
            </Lead>
            <Cluster gap={4} justify="center">
              <Button
                as={Link}
                href="/auth/signup"
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 shadow-2xl"
              >
                Start Free Trial
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Button>
              <Button
                as={Link}
                href="/contact"
                variant="ghost"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900"
              >
                Talk to Sales
              </Button>
            </Cluster>
          </Stack>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <Section className="py-12">
          <Stack gap={6}>
            <Grid columns={4}>
              <div>
                <Stack gap={3}>
                  <Logo
                    size="md"
                    showText={true}
                    linkToHome={false}
                    className="text-white [&>div>span]:text-white"
                  />
                  <p className="text-gray-400 text-sm">
                    Direct mail marketing powered by artificial intelligence
                  </p>
                </Stack>
              </div>
              <div>
                <Stack gap={3}>
                  <h3 className="font-semibold">Product</h3>
                  <Stack gap={2}>
                    {[
                      { label: "Features", href: "/features" },
                      { label: "Pricing", href: "/pricing" },
                      { label: "Integrations", href: "/integrations" },
                      { label: "API", href: "/api" },
                    ].map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors duration-150"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </Stack>
                </Stack>
              </div>
              <div>
                <Stack gap={3}>
                  <h3 className="font-semibold">Company</h3>
                  <Stack gap={2}>
                    {[
                      { label: "About Us", href: "/about" },
                      { label: "Team", href: "/team" },
                      { label: "Careers", href: "/careers" },
                      { label: "Contact", href: "/contact" },
                    ].map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors duration-150"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </Stack>
                </Stack>
              </div>
              <div>
                <Stack gap={3}>
                  <h3 className="font-semibold">Support</h3>
                  <Stack gap={2}>
                    {[
                      { label: "Help Center", href: "/help" },
                      { label: "FAQ", href: "/faq" },
                      { label: "Privacy Policy", href: "/privacy" },
                      { label: "Terms of Service", href: "/terms" },
                    ].map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors duration-150"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </Stack>
                </Stack>
              </div>
            </Grid>
            <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
              <p>&copy; 2024 Enclosed.AI. All rights reserved.</p>
            </div>
          </Stack>
        </Section>
      </footer>
    </div>
  );
}
