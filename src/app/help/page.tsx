import Link from "next/link";
import Logo from "@/components/Logo";
export const metadata = {
  title: "Help Center - Enclosed.AI | Support & Documentation",
  description:
    "Get help with Enclosed.AI. Find tutorials, documentation, and support resources to maximize your direct mail marketing success.",
};
export default function HelpPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl mb-6">
            Help
            <span className="text-blue-600"> Center</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Find answers, tutorials, and resources to help you succeed with
            Enclosed.AI's direct mail marketing platform.
          </p>
        </div>
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for help articles, tutorials, or FAQs..."
              className="w-full px-6 py-4 pl-12 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400"
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
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">
            Quick Help
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link
              href="/help/getting-started"
              className="bg-black rounded-xl shadow-sm p-8 text-center hover:shadow-md transition-shadow"
            >
              <div className="h-16 w-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg
                  className="h-8 w-8 text-blue-600"
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
              <h3 className="text-lg font-semibold text-white mb-2">
                Getting Started
              </h3>
              <p className="text-gray-400 text-sm">
                Learn the basics and create your first campaign
              </p>
            </Link>
            <Link
              href="/help/campaigns"
              className="bg-black rounded-xl shadow-sm p-8 text-center hover:shadow-md transition-shadow"
            >
              <div className="h-16 w-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg
                  className="h-8 w-8 text-green-600"
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
              <h3 className="text-lg font-semibold text-white mb-2">
                Campaigns
              </h3>
              <p className="text-gray-400 text-sm">
                Create, manage, and optimize your campaigns
              </p>
            </Link>
            <Link
              href="/help/analytics"
              className="bg-black rounded-xl shadow-sm p-8 text-center hover:shadow-md transition-shadow"
            >
              <div className="h-16 w-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg
                  className="h-8 w-8 text-purple-600"
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
              <h3 className="text-lg font-semibold text-white mb-2">
                Analytics
              </h3>
              <p className="text-gray-400 text-sm">
                Track performance and measure success
              </p>
            </Link>
            <Link
              href="/help/billing"
              className="bg-black rounded-xl shadow-sm p-8 text-center hover:shadow-md transition-shadow"
            >
              <div className="h-16 w-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg
                  className="h-8 w-8 text-orange-600"
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
              <h3 className="text-lg font-semibold text-white mb-2">
                Billing
              </h3>
              <p className="text-gray-400 text-sm">
                Manage payments and account settings
              </p>
            </Link>
          </div>
        </section>
        {/* Popular Articles */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">
            Popular Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="h-5 w-5 text-blue-600"
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
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    How to Create Your First Campaign
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Step-by-step guide to creating and sending your first
                    AI-powered direct mail campaign.
                  </p>
                  <Link
                    href="/help/articles/create-first-campaign"
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    Read Article →
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-black rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="h-5 w-5 text-green-600"
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
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Understanding AI Personalization
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Learn how our AI creates personalized content for each
                    recipient in your campaigns.
                  </p>
                  <Link
                    href="/help/articles/ai-personalization"
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    Read Article →
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-black rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="h-5 w-5 text-purple-600"
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
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Optimizing Campaign Performance
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Best practices for improving response rates and maximizing
                    ROI on your campaigns.
                  </p>
                  <Link
                    href="/help/articles/optimize-campaign-performance"
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    Read Article →
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-black rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="h-5 w-5 text-orange-600"
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
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Managing Recipient Lists
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Tips for organizing, segmenting, and maintaining
                    high-quality recipient lists.
                  </p>
                  <Link
                    href="/help/articles/managing-recipient-lists"
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    Read Article →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Additional Resources */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">
            Additional Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              href="/docs"
              className="group bg-black rounded-xl shadow-sm p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                Knowledge Base
              </h3>
              <p className="text-gray-400 mb-4">
                Comprehensive documentation, tutorials, and best practices guides.
              </p>
              <span className="text-green-600 font-semibold group-hover:text-green-700">
                Browse Docs →
              </span>
            </Link>
            <Link
              href="/community"
              className="group bg-black rounded-xl shadow-sm p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                Community Forum
              </h3>
              <p className="text-gray-400 mb-4">
                Connect with other users, share tips, and get advice from the community.
              </p>
              <span className="text-blue-600 font-semibold group-hover:text-blue-700">
                Join Community →
              </span>
            </Link>
            <Link
              href="/demo"
              className="group bg-black rounded-xl shadow-sm p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                Schedule Demo
              </h3>
              <p className="text-gray-400 mb-4">
                Book a personalized demo to see how Enclosed.AI can work for your business.
              </p>
              <span className="text-purple-600 font-semibold group-hover:text-purple-700">
                Book Demo →
              </span>
            </Link>
          </div>
        </section>
        {/* Contact Support */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is here to help
            you succeed with your direct mail campaigns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-lg font-medium rounded-md text-blue-600 bg-black hover:bg-black transition-colors"
            >
              Contact Support
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-black hover:text-blue-600 transition-colors"
            >
              View FAQ
            </Link>
          </div>
        </section>
      </div>
      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Logo
                size="md"
                showText={true}
                linkToHome={false}
                className="text-white [&>div>span]:text-white mb-4"
              />
              <p className="text-gray-400 text-sm">
                Direct mail marketing powered by artificial intelligence
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link
                    href="/features"
                    className="hover:text-white transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="hover:text-white transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/integrations"
                    className="hover:text-white transition-colors"
                  >
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/api"
                    className="hover:text-white transition-colors"
                  >
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/team"
                    className="hover:text-white transition-colors"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="hover:text-white transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link
                    href="/help"
                    className="hover:text-white transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="hover:text-white transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Enclosed.AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}