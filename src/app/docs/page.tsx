import Link from "next/link";
import Logo from "@/components/Logo";
export const metadata = {
  title: "Knowledge Base - Enclosed.AI | Documentation & Tutorials",
  description:
    "Browse our comprehensive documentation, tutorials, and best practices guides for Enclosed.AI direct mail marketing platform.",
};
export default function DocsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-16 text-center mb-16">
          <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600 rounded-full mb-8">
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
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h1 className="text-5xl font-extrabold text-white sm:text-6xl mb-6 leading-tight">
              Knowledge
              <span className="text-green-600"> Base</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Comprehensive documentation, tutorials, and best practices guides
              to help you master direct mail marketing with Enclosed.AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#getting-started"
                className="inline-flex items-center px-8 py-4 bg-green-600 text-white text-lg font-semibold rounded-xl hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started
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
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-300 text-lg font-semibold rounded-xl hover:border-green-600 hover:text-green-600 transition-all duration-300"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
        {/* Search Bar */}
        <div className="mb-16">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
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
              <input
                type="text"
                placeholder="Search documentation..."
                className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-xl leading-5 bg-black placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg"
              />
            </div>
          </div>
        </div>
        {/* Getting Started Section */}
        <div id="getting-started" className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Getting Started
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quick Start Guide */}
            <div className="group bg-black rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    className="h-6 w-6 text-white"
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
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Quick Start Guide
                </h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Get up and running with Enclosed.AI in under 10 minutes. Learn
                the basics of creating your first campaign.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">5 min read</span>
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  Read Guide →
                </Link>
              </div>
            </div>
            {/* Account Setup */}
            <div className="group bg-black rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Account Setup
                </h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Complete guide to setting up your account, configuring
                preferences, and connecting your payment method.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">8 min read</span>
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  Read Guide →
                </Link>
              </div>
            </div>
            {/* First Campaign */}
            <div className="group bg-black rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Creating Your First Campaign
                </h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Step-by-step tutorial on creating, designing, and launching your
                first direct mail campaign.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">12 min read</span>
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  Read Guide →
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Feature Guides */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Feature Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* AI Personalization */}
            <div className="group bg-black rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    className="h-6 w-6 text-white"
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
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  AI Personalization
                </h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Learn how to leverage our AI to create highly personalized
                content that resonates with your audience and drives results.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">15 min read</span>
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  Read Guide →
                </Link>
              </div>
            </div>
            {/* Analytics & Reporting */}
            <div className="group bg-black rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    className="h-6 w-6 text-white"
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
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Analytics & Reporting
                </h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Master our analytics dashboard to track performance, measure ROI,
                and optimize your campaigns for better results.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">10 min read</span>
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  Read Guide →
                </Link>
              </div>
            </div>
            {/* Integrations */}
            <div className="group bg-black rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Integrations
                </h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Connect Enclosed.AI with your favorite tools and platforms to
                streamline your workflow and maximize efficiency.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">12 min read</span>
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  Read Guide →
                </Link>
              </div>
            </div>
            {/* API Documentation */}
            <div className="group bg-black rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  API Documentation
                </h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Complete API reference with examples, authentication, and
                integration guides for developers.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">20 min read</span>
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  Read Guide →
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Best Practices */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Best Practices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Design Guidelines */}
            <div className="group bg-black rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Design Guidelines
                </h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Learn the principles of effective direct mail design, including
                layout, typography, and visual hierarchy.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">18 min read</span>
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  Read Guide →
                </Link>
              </div>
            </div>
            {/* Copywriting Tips */}
            <div className="group bg-black rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Copywriting Tips
                </h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Master the art of persuasive copywriting for direct mail
                campaigns that convert prospects into customers.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">14 min read</span>
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  Read Guide →
                </Link>
              </div>
            </div>
            {/* A/B Testing */}
            <div className="group bg-black rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    className="h-6 w-6 text-white"
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
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  A/B Testing
                </h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Learn how to test different elements of your campaigns to
                optimize performance and maximize ROI.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">16 min read</span>
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  Read Guide →
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Troubleshooting */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Troubleshooting
          </h2>
          <div className="bg-black rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Common Issues */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                  Common Issues
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-white mb-2">
                      Campaign not sending
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Check your account balance and payment method
                    </p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-white mb-2">
                      Design not rendering correctly
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Ensure all images are properly uploaded and accessible
                    </p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-semibold text-white mb-2">
                      Analytics not updating
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Allow 24-48 hours for data to appear in reports
                    </p>
                  </div>
                </div>
              </div>
              {/* Contact Support */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                  Need More Help?
                </h3>
                <p className="text-gray-400 mb-6">
                  Can't find what you're looking for? Our support team is here to
                  help you succeed.
                </p>
                <div className="space-y-4">
                  <Link
                    href="/contact"
                    className="block w-full bg-blue-600 text-white text-center py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Contact Support
                  </Link>
                  <Link
                    href="/community"
                    className="block w-full border border-gray-300 text-gray-300 text-center py-3 px-6 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
                  >
                    Ask Community
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CTA Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800 rounded-3xl p-16 text-center text-white">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-black rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl font-extrabold mb-6">
              Still Need Help?
            </h2>
            <p className="text-lg md:text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Our support team is available 24/7 to help you succeed with
              Enclosed.AI. Get personalized assistance when you need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center px-10 py-4 border border-transparent text-lg font-semibold rounded-full text-green-600 bg-black hover:bg-black transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <svg
                  className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300"
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
                Contact Support
              </Link>
              <Link
                href="/community"
                className="group inline-flex items-center px-10 py-4 border-2 border-white text-lg font-semibold rounded-full text-white hover:bg-black hover:text-green-600 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                <svg
                  className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
                Join Community
              </Link>
            </div>
          </div>
        </div>
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
                    href="/community"
                    className="hover:text-white transition-colors"
                  >
                    Community
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