import Link from "next/link";
import Logo from "@/components/Logo";
import { Container, Section, Grid, Flex, H1, H2, H3, Text, Button, Card, Badge } from "@/components/ui";

export const metadata = {
  title: "Help Center - Enclosed.AI | Support & Documentation",
  description:
    "Get help with Enclosed.AI. Find tutorials, documentation, and support resources to maximize your direct mail marketing success.",
};

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <Section className="pt-32">
        <Container size="xl">
          <div className="space-y-12">
            {/* Hero Section */}
            <div className="text-center space-y-6">
              <H1 className="text-6xl font-light">
                Help
                <span className="gradient-text-accent"> Center</span>
              </H1>
              <Text size="xl" className="max-w-3xl mx-auto text-gray-400">
                Find answers, tutorials, and resources to help you succeed with
                Enclosed.AI's direct mail marketing platform.
              </Text>
            </div>
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for help articles, tutorials, or FAQs..."
                  className="input w-full pl-12 pr-4 py-4 text-lg"
                />
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
            {/* Quick Help Categories */}
            <section className="space-y-8">
              <div className="text-center">
                <H2 className="text-3xl font-semibold mb-4">Quick Help</H2>
              </div>
              <Grid cols={4} gap={6}>
                <Link href="/help/getting-started" className="group">
                  <Card hover className="text-center p-8 group-hover:scale-105 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <H3 className="text-xl font-semibold mb-3">Getting Started</H3>
                    <Text className="text-gray-400">
                      Learn the basics and create your first campaign
                    </Text>
                  </Card>
                </Link>
                <Link href="/help/campaigns" className="group">
                  <Card hover className="text-center p-8 group-hover:scale-105 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <H3 className="text-xl font-semibold mb-3">Campaigns</H3>
                    <Text className="text-gray-400">
                      Create, manage, and optimize your campaigns
                    </Text>
                  </Card>
                </Link>
                <Link href="/help/analytics" className="group">
                  <Card hover className="text-center p-8 group-hover:scale-105 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <H3 className="text-xl font-semibold mb-3">Analytics</H3>
                    <Text className="text-gray-400">
                      Track performance and measure success
                    </Text>
                  </Card>
                </Link>
                <Link href="/help/billing" className="group">
                  <Card hover className="text-center p-8 group-hover:scale-105 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <H3 className="text-xl font-semibold mb-3">Billing</H3>
                    <Text className="text-gray-400">
                      Manage payments and account settings
                    </Text>
                  </Card>
                </Link>
              </Grid>
            </section>
            {/* Popular Articles */}
            <section className="space-y-8">
              <div className="text-center">
                <H2 className="text-3xl font-semibold mb-4">Popular Articles</H2>
              </div>
              <Grid cols={2} gap={6}>
                <Card hover className="p-6 group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <H3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                        How to Create Your First Campaign
                      </H3>
                      <Text className="text-gray-400 mb-4">
                        Step-by-step guide to creating and sending your first
                        AI-powered direct mail campaign.
                      </Text>
                      <Link
                        href="/help/articles/create-first-campaign"
                        className="text-blue-400 hover:text-blue-300 font-medium"
                      >
                        Read Article →
                      </Link>
                    </div>
                  </div>
                </Card>
                <Card hover className="p-6 group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <H3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                        Understanding AI Personalization
                      </H3>
                      <Text className="text-gray-400 mb-4">
                        Learn how our AI creates personalized content for each
                        recipient in your campaigns.
                      </Text>
                      <Link
                        href="/help/articles/ai-personalization"
                        className="text-blue-400 hover:text-blue-300 font-medium"
                      >
                        Read Article →
                      </Link>
                    </div>
                  </div>
                </Card>
                <Card hover className="p-6 group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <H3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                        Optimizing Campaign Performance
                      </H3>
                      <Text className="text-gray-400 mb-4">
                        Best practices for improving response rates and maximizing
                        ROI on your campaigns.
                      </Text>
                      <Link
                        href="/help/articles/optimize-campaign-performance"
                        className="text-blue-400 hover:text-blue-300 font-medium"
                      >
                        Read Article →
                      </Link>
                    </div>
                  </div>
                </Card>
                <Card hover className="p-6 group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <H3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                        Managing Recipient Lists
                      </H3>
                      <Text className="text-gray-400 mb-4">
                        Tips for organizing, segmenting, and maintaining
                        high-quality recipient lists.
                      </Text>
                      <Link
                        href="/help/articles/managing-recipient-lists"
                        className="text-blue-400 hover:text-blue-300 font-medium"
                      >
                        Read Article →
                      </Link>
                    </div>
                  </div>
                </Card>
              </Grid>
            </section>
            {/* Additional Resources */}
            <section className="space-y-8">
              <div className="text-center">
                <H2 className="text-3xl font-semibold mb-4">Additional Resources</H2>
              </div>
              <Grid cols={3} gap={6}>
                <Link href="/docs" className="group">
                  <Card hover className="text-center p-8 group-hover:scale-105 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <H3 className="text-xl font-semibold mb-3">Knowledge Base</H3>
                    <Text className="text-gray-400 mb-4">
                      Comprehensive documentation, tutorials, and best practices guides.
                    </Text>
                    <span className="text-blue-400 group-hover:text-blue-300 font-medium">
                      Browse Docs →
                    </span>
                  </Card>
                </Link>
                <Link href="/community" className="group">
                  <Card hover className="text-center p-8 group-hover:scale-105 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <H3 className="text-xl font-semibold mb-3">Community Forum</H3>
                    <Text className="text-gray-400 mb-4">
                      Connect with other users, share tips, and get advice from the community.
                    </Text>
                    <span className="text-blue-400 group-hover:text-blue-300 font-medium">
                      Join Community →
                    </span>
                  </Card>
                </Link>
                <Link href="/demo" className="group">
                  <Card hover className="text-center p-8 group-hover:scale-105 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <H3 className="text-xl font-semibold mb-3">Schedule Demo</H3>
                    <Text className="text-gray-400 mb-4">
                      Book a personalized demo to see how Enclosed.AI can work for your business.
                    </Text>
                    <span className="text-blue-400 group-hover:text-blue-300 font-medium">
                      Book Demo →
                    </span>
                  </Card>
                </Link>
              </Grid>
            </section>

            {/* Contact Support */}
            <section className="text-center space-y-8">
              <div>
                <H2 className="text-3xl font-semibold mb-4">Still Need Help?</H2>
                <Text size="lg" className="text-gray-400 max-w-2xl mx-auto">
                  Can't find what you're looking for? Our support team is here to help
                  you succeed with your direct mail campaigns.
                </Text>
              </div>
              <Flex justify="center" gap={4}>
                <Button variant="primary" href="/contact">
                  Contact Support
                </Button>
                <Button variant="ghost" href="/faq">
                  View FAQ
                </Button>
              </Flex>
            </section>
          </div>
        </Container>
      </Section>
    </div>
  );
}