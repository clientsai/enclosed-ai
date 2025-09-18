import Link from "next/link";
import Logo from "@/components/Logo";

export const metadata = {
  title: "Blog - Enclosed.AI | Direct Mail Marketing Insights & Tips",
  description:
    "Stay updated with the latest insights, tips, and strategies for AI-powered direct mail marketing. Expert advice to maximize your campaign success.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Logo size="md" />
            <nav className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/features"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link
                href="/auth/login"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/auth/signup"
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-6">
            Marketing
            <span className="text-blue-600"> Insights</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Expert insights, tips, and strategies to help you master AI-powered
            direct mail marketing and achieve remarkable results.
          </p>
        </div>

        {/* Featured Article */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-white/20 rounded-full px-4 py-2 text-sm font-medium mb-6">
                  Featured Article
                </div>
                <h2 className="text-3xl font-bold mb-6">
                  The Future of Direct Mail: How AI is Revolutionizing Marketing
                </h2>
                <p className="text-lg opacity-90 mb-8 leading-relaxed">
                  Discover how artificial intelligence is transforming direct
                  mail marketing, from personalized content generation to
                  predictive analytics and automated optimization.
                </p>
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">SM</span>
                  </div>
                  <div>
                    <div className="font-semibold">Sarah Mitchell</div>
                    <div className="text-sm opacity-80">
                      CEO, Enclosed.AI • Dec 15, 2024
                    </div>
                  </div>
                </div>
                <Link
                  href="#featured-article"
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Read Full Article →
                </Link>
              </div>
              <div className="bg-white/10 rounded-xl p-8">
                <div className="aspect-video bg-white/20 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="h-16 w-16 text-white/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2z"
                    />
                  </svg>
                </div>
                <p className="text-sm opacity-90">
                  Learn about the latest AI technologies and how they're being
                  applied to create more effective, personalized direct mail
                  campaigns that deliver exceptional results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Categories */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="#strategy"
              className="bg-white rounded-xl shadow-sm p-8 text-center hover:shadow-md transition-shadow"
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Strategy
              </h3>
              <p className="text-gray-600 text-sm">
                Marketing strategies and campaign planning
              </p>
            </Link>

            <Link
              href="#ai-technology"
              className="bg-white rounded-xl shadow-sm p-8 text-center hover:shadow-md transition-shadow"
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
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                AI Technology
              </h3>
              <p className="text-gray-600 text-sm">
                AI insights and technical deep dives
              </p>
            </Link>

            <Link
              href="#case-studies"
              className="bg-white rounded-xl shadow-sm p-8 text-center hover:shadow-md transition-shadow"
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Case Studies
              </h3>
              <p className="text-gray-600 text-sm">
                Real success stories and results
              </p>
            </Link>

            <Link
              href="#tips-tricks"
              className="bg-white rounded-xl shadow-sm p-8 text-center hover:shadow-md transition-shadow"
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
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Tips & Tricks
              </h3>
              <p className="text-gray-600 text-sm">
                Practical advice and best practices
              </p>
            </Link>
          </div>
        </section>

        {/* Recent Articles */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Recent Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article 1 */}
            <article className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold mb-2">AI</div>
                  <div className="text-sm opacity-90">Personalization</div>
                </div>
              </div>
              <div className="p-8">
                <div className="text-sm text-blue-600 font-medium mb-2">
                  AI Technology
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  5 Ways AI Personalization is Transforming Direct Mail
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Discover how AI personalization is revolutionizing direct mail
                  marketing, from dynamic content generation to predictive
                  targeting.
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    href="#ai-personalization"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read More →
                  </Link>
                  <span className="text-sm text-gray-500">Dec 12, 2024</span>
                </div>
              </div>
            </article>

            {/* Article 2 */}
            <article className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold mb-2">ROI</div>
                  <div className="text-sm opacity-90">Optimization</div>
                </div>
              </div>
              <div className="p-8">
                <div className="text-sm text-green-600 font-medium mb-2">
                  Strategy
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Maximizing ROI: A Complete Guide to Direct Mail Analytics
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Learn how to track, measure, and optimize your direct mail
                  campaigns for maximum return on investment.
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    href="#roi-guide"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read More →
                  </Link>
                  <span className="text-sm text-gray-500">Dec 10, 2024</span>
                </div>
              </div>
            </article>

            {/* Article 3 */}
            <article className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold mb-2">B2B</div>
                  <div className="text-sm opacity-90">Marketing</div>
                </div>
              </div>
              <div className="p-8">
                <div className="text-sm text-purple-600 font-medium mb-2">
                  Case Studies
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  How B2B Companies Are Winning with Direct Mail
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Real examples of B2B companies achieving remarkable results
                  with AI-powered direct mail campaigns.
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    href="#b2b-success"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read More →
                  </Link>
                  <span className="text-sm text-gray-500">Dec 8, 2024</span>
                </div>
              </div>
            </article>

            {/* Article 4 */}
            <article className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold mb-2">Tips</div>
                  <div className="text-sm opacity-90">Best Practices</div>
                </div>
              </div>
              <div className="p-8">
                <div className="text-sm text-orange-600 font-medium mb-2">
                  Tips & Tricks
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  10 Direct Mail Mistakes That Kill Your Response Rates
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Avoid these common pitfalls that can sabotage your direct mail
                  campaigns and learn how to fix them.
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    href="#common-mistakes"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read More →
                  </Link>
                  <span className="text-sm text-gray-500">Dec 5, 2024</span>
                </div>
              </div>
            </article>

            {/* Article 5 */}
            <article className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold mb-2">Data</div>
                  <div className="text-sm opacity-90">Analytics</div>
                </div>
              </div>
              <div className="p-8">
                <div className="text-sm text-teal-600 font-medium mb-2">
                  AI Technology
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  The Science Behind AI Content Generation
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A deep dive into how AI algorithms create compelling,
                  personalized content for direct mail campaigns.
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    href="#ai-science"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read More →
                  </Link>
                  <span className="text-sm text-gray-500">Dec 3, 2024</span>
                </div>
              </div>
            </article>

            {/* Article 6 */}
            <article className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold mb-2">Future</div>
                  <div className="text-sm opacity-90">Trends</div>
                </div>
              </div>
              <div className="p-8">
                <div className="text-sm text-pink-600 font-medium mb-2">
                  Strategy
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Direct Mail Trends to Watch in 2025
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Stay ahead of the curve with these emerging trends and
                  technologies shaping the future of direct mail marketing.
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    href="#2025-trends"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read More →
                  </Link>
                  <span className="text-sm text-gray-500">Dec 1, 2024</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-12">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Stay Updated
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Get the latest insights, tips, and strategies delivered straight
                to your inbox. Join thousands of marketers who trust our
                expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Put These Insights into Action?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Start implementing these strategies with Enclosed.AI and see the
            results for yourself. Join thousands of successful marketers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/signup"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-lg font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
            >
              Start Free Trial
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Case Studies
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

