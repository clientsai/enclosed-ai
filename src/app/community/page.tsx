import Link from "next/link";
import Logo from "@/components/Logo";
export const metadata = {
  title: "Community Forum - Enclosed.AI | Connect with Users & Get Support",
  description:
    "Join the Enclosed.AI community forum to connect with other users, share tips, get advice, and learn best practices for direct mail marketing.",
};
export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-16 text-center mb-16">
          <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-8">
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
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <h1 className="text-5xl font-extrabold text-white sm:text-6xl mb-6 leading-tight">
              Community
              <span className="text-blue-600"> Forum</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Connect with other Enclosed.AI users, share tips, get advice, and
              learn best practices for direct mail marketing success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#forum"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Browse Discussions
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
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-300 text-lg font-semibold rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
              >
                Get Support
              </Link>
            </div>
          </div>
        </div>
        {/* Forum Categories */}
        <div id="forum" className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Forum Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Getting Started */}
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Getting Started
                </h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                New to Enclosed.AI? Find tutorials, setup guides, and answers to
                common questions from fellow users.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">24 topics</span>
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  View Posts →
                </Link>
              </div>
            </div>
            {/* Best Practices */}
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Best Practices
                </h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Share and discover proven strategies, tips, and techniques for
                maximizing your direct mail marketing results.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">18 topics</span>
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  View Posts →
                </Link>
              </div>
            </div>
            {/* Feature Requests */}
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
                      d="M7 11l5-5m0 0l5 5m-5-5v12"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Feature Requests
                </h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Suggest new features, vote on ideas, and help shape the future of
                Enclosed.AI based on your needs.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">12 topics</span>
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  View Posts →
                </Link>
              </div>
            </div>
            {/* Troubleshooting */}
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
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Troubleshooting
                </h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Get help with technical issues, bugs, and problems you're
                experiencing with the platform.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">8 topics</span>
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  View Posts →
                </Link>
              </div>
            </div>
            {/* Success Stories */}
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Success Stories
                </h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Share your wins, celebrate achievements, and inspire others with
                your direct mail marketing success stories.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">15 topics</span>
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  View Posts →
                </Link>
              </div>
            </div>
            {/* General Discussion */}
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
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  General Discussion
                </h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Chat about anything related to direct mail marketing, industry
                trends, or just connect with the community.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">32 topics</span>
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  View Posts →
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Recent Activity */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Recent Activity
          </h2>
          <div className="bg-black rounded-2xl shadow-lg p-8">
            <div className="space-y-6">
              {/* Sample Post 1 */}
              <div className="border-b border-gray-200 pb-6 last:border-b-0">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">JD</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold text-white">
                        John Doe
                      </h3>
                      <span className="text-sm text-gray-500">2 hours ago</span>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Best practices for A/B testing direct mail campaigns?
                    </h4>
                    <p className="text-gray-400 mb-3">
                      I'm looking to optimize my direct mail campaigns through
                      A/B testing. What are the most effective elements to test
                      and how should I structure my tests for meaningful results?
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>5 replies</span>
                      <span>12 likes</span>
                      <span className="text-blue-600">Getting Started</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sample Post 2 */}
              <div className="border-b border-gray-200 pb-6 last:border-b-0">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">SM</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold text-white">
                        Sarah Miller
                      </h3>
                      <span className="text-sm text-gray-500">5 hours ago</span>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Success: 300% ROI increase with personalized content
                    </h4>
                    <p className="text-gray-400 mb-3">
                      Just wanted to share my recent success! By using
                      Enclosed.AI's personalization features, I increased my ROI
                      by 300% in just 3 months. The key was testing different
                      personalization levels...
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>8 replies</span>
                      <span>24 likes</span>
                      <span className="text-pink-600">Success Stories</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sample Post 3 */}
              <div className="border-b border-gray-200 pb-6 last:border-b-0">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">MR</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold text-white">
                        Mike Rodriguez
                      </h3>
                      <span className="text-sm text-gray-500">1 day ago</span>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Feature Request: Integration with Salesforce
                    </h4>
                    <p className="text-gray-400 mb-3">
                      Would love to see native Salesforce integration for easier
                      lead management and campaign tracking. Anyone else
                      interested in this feature?
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>12 replies</span>
                      <span>18 likes</span>
                      <span className="text-purple-600">Feature Requests</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CTA Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 rounded-3xl p-16 text-center text-white">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-black rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl font-extrabold mb-6">
              Ready to Join the Community?
            </h2>
            <p className="text-lg md:text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Connect with fellow marketers, share your experiences, and learn
              from the collective wisdom of our growing community.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/auth/signup"
                className="group inline-flex items-center px-10 py-4 border border-transparent text-lg font-semibold rounded-full text-blue-600 bg-black hover:bg-black transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-xl"
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
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  />
                </svg>
                Create Account
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center px-10 py-4 border-2 border-white text-lg font-semibold rounded-full text-white hover:bg-black hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
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
                Get Support
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