/*
 * Help Page - Jony Ive-Inspired Dark Theme
 * Clean, organized support and documentation
 */
"use client";
import { useState } from "react";
import Link from "next/link";
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
  Input,
  GlowOrb,
  Noise,
} from "@/components/ui";

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const quickHelpCategories = [
    {
      title: "Getting Started",
      description: "Learn the basics and create your first campaign",
      href: "/help/getting-started",
      icon: "🚀",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Campaigns",
      description: "Create, manage, and optimize your campaigns",
      href: "/help/campaigns",
      icon: "📊",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Analytics",
      description: "Track performance and measure success",
      href: "/help/analytics",
      icon: "📈",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Billing",
      description: "Manage payments and account settings",
      href: "/help/billing",
      icon: "💳",
      gradient: "from-yellow-500 to-orange-500",
    },
  ];

  const popularArticles = [
    {
      title: "How to Create Your First Campaign",
      description: "Step-by-step guide to creating and sending your first AI-powered direct mail campaign.",
      href: "/help/articles/create-first-campaign",
      icon: "⚡",
      readTime: "5 min read",
    },
    {
      title: "Understanding AI Personalization",
      description: "Learn how our AI creates personalized content for each recipient in your campaigns.",
      href: "/help/articles/ai-personalization",
      icon: "🤖",
      readTime: "8 min read",
    },
    {
      title: "Optimizing Campaign Performance",
      description: "Best practices for improving response rates and maximizing ROI on your campaigns.",
      href: "/help/articles/optimize-campaign-performance",
      icon: "🎯",
      readTime: "12 min read",
    },
    {
      title: "Managing Recipient Lists",
      description: "Tips for organizing, segmenting, and maintaining high-quality recipient lists.",
      href: "/help/articles/managing-recipient-lists",
      icon: "📋",
      readTime: "6 min read",
    },
  ];

  const additionalResources = [
    {
      title: "Knowledge Base",
      description: "Comprehensive documentation, tutorials, and best practices guides.",
      href: "/docs",
      icon: "📚",
      cta: "Browse Docs",
    },
    {
      title: "Community Forum",
      description: "Connect with other users, share tips, and get advice from the community.",
      href: "/community",
      icon: "💬",
      cta: "Join Community",
    },
    {
      title: "Schedule Demo",
      description: "Book a personalized demo to see how Enclosed.AI can work for your business.",
      href: "/demo",
      icon: "📅",
      cta: "Book Demo",
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
            <div className="space-y-4">
              <H1 className="animate-slide-up" gradient>
                Help
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  {" "}Center
                </span>
              </H1>
              <Text size="xl" color="secondary" className="max-w-3xl mx-auto animate-fade-in animation-delay-200">
                Find answers, tutorials, and resources to help you succeed with
                Enclosed.AI's direct mail marketing platform.
              </Text>
            </div>

            {/* Search Bar */}
            <div className="animate-fade-in animation-delay-400 max-w-2xl mx-auto">
              <Input
                type="text"
                placeholder="Search for help articles, tutorials, or FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                prefix={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                }
                className="text-lg py-4 backdrop-blur-xl border-gray-800/50"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Quick Help Categories */}
      <Section className="relative">
        <Container>
          <div className="space-y-12">
            <div className="text-center animate-slide-up animation-delay-600">
              <H2>Quick Help</H2>
              <Text size="lg" color="secondary">
                Get started with the most common tasks
              </Text>
            </div>

            <div className="animate-slide-up animation-delay-800">
              <Grid cols={4} gap={6}>
                {quickHelpCategories.map((category, index) => (
                  <Link key={category.title} href={category.href as any}>
                    <Card className="hover-lift group relative overflow-hidden border-gray-800/50 backdrop-blur-sm premium-shadow transition-all duration-300 hover:scale-105">
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                      <div className="relative z-10 space-y-4 text-center">
                        <div className="text-4xl">{category.icon}</div>
                        <H3 className="text-xl font-semibold">{category.title}</H3>
                        <Text color="secondary" size="sm">{category.description}</Text>
                      </div>
                    </Card>
                  </Link>
                ))}
              </Grid>
            </div>
          </div>
        </Container>
      </Section>

      {/* Popular Articles */}
      <Section className="relative bg-gradient-to-b from-black via-gray-900/5 to-black">
        <Container>
          <div className="space-y-12">
            <div className="text-center animate-slide-up animation-delay-1000">
              <H2>Popular Articles</H2>
              <Text size="lg" color="secondary">
                Most helpful guides and tutorials
              </Text>
            </div>

            <div className="animate-slide-up animation-delay-1200">
              <Grid cols={2} gap={6}>
                {popularArticles.map((article, index) => (
                  <Link key={article.title} href={article.href as any}>
                    <Card className="hover-lift group border-gray-800/50 backdrop-blur-sm premium-shadow transition-all duration-300">
                      <Flex gap={4} align="start">
                        <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                          {article.icon}
                        </div>
                        <div className="space-y-3 flex-1">
                          <div className="space-y-2">
                            <Flex justify="between" align="start">
                              <H3 className="text-lg font-semibold group-hover:text-blue-400 transition-colors">
                                {article.title}
                              </H3>
                              <Badge variant="default" className="text-xs">
                                {article.readTime}
                              </Badge>
                            </Flex>
                            <Text color="secondary" size="sm" className="leading-relaxed">
                              {article.description}
                            </Text>
                          </div>
                          <Text size="sm" color="accent" className="group-hover:text-blue-400 transition-colors">
                            Read Article →
                          </Text>
                        </div>
                      </Flex>
                    </Card>
                  </Link>
                ))}
              </Grid>
            </div>
          </div>
        </Container>
      </Section>

      {/* Additional Resources */}
      <Section className="relative">
        <Container>
          <div className="space-y-12">
            <div className="text-center animate-slide-up animation-delay-1400">
              <H2>Additional Resources</H2>
              <Text size="lg" color="secondary">
                More ways to get the help you need
              </Text>
            </div>

            <div className="animate-slide-up animation-delay-1600">
              <Grid cols={3} gap={8}>
                {additionalResources.map((resource, index) => (
                  <Link key={resource.title} href={resource.href as any}>
                    <Card className="hover-lift group text-center space-y-6 border-gray-800/50 backdrop-blur-sm premium-shadow transition-all duration-300 hover:scale-105">
                      <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                        {resource.icon}
                      </div>
                      <div className="space-y-3">
                        <H3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                          {resource.title}
                        </H3>
                        <Text color="secondary" className="leading-relaxed">
                          {resource.description}
                        </Text>
                      </div>
                      <Text color="accent" weight="medium" className="group-hover:text-blue-400 transition-colors">
                        {resource.cta} →
                      </Text>
                    </Card>
                  </Link>
                ))}
              </Grid>
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact Support */}
      <Section className="relative">
        <Container>
          <div className="animate-slide-up animation-delay-1800">
            <Card glass className="text-center space-y-8 backdrop-blur-xl border-gray-800/50 premium-shadow relative overflow-hidden p-16">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
              <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
                <H2>Still Need Help?</H2>
                <Text size="xl" color="secondary">
                  Can't find what you're looking for? Our support team is here to help
                  you succeed with your direct mail campaigns.
                </Text>
                <Flex gap={4} justify="center" className="pt-4">
                  <Button size="lg" href="/contact" className="shadow-lg shadow-blue-500/20">
                    Contact Support
                  </Button>
                  <Button variant="outline" size="lg" href="/faq">
                    View FAQ
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