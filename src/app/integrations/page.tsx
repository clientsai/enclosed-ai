import Link from "next/link";
import Logo from "@/components/Logo";

export const metadata = {
  title: "Integrations - Enclosed.AI | Connect Your Marketing Flex",
  description:
    "Integrate Enclosed.AI with your existing marketing tools and CRM systems. Seamless connections with Salesforce, HubSpot, Mailchimp, and more.",
};

export default function IntegrationsPage() {
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
            Powerful
            <span className="text-blue-600"> Integrations</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Connect Enclosed.AI with your existing marketing stack and business
            tools. Seamlessly sync data, automate workflows, and create unified
            marketing experiences.
          </p>
        </div>

        {/* CRM Integrations */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            CRM Integrations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-8 text-center hover:shadow-md transition-shadow">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Salesforce
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Sync contacts, leads, and opportunities directly with
                Salesforce. Automatically trigger direct mail campaigns based on
                CRM activities and lead scores.
              </p>
              <ul className="text-sm text-gray-500 space-y-1 mb-6">
                <li>• Two-way contact synchronization</li>
                <li>• Text scoring integration</li>
                <li>• Campaign attribution tracking</li>
                <li>• Custom field mapping</li>
              </ul>
              <Link
                href="/contact"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 text-center hover:shadow-md transition-shadow">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                HubSpot
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Integrate with HubSpot's marketing automation platform. Create
                sophisticated workflows that combine email and direct mail for
                maximum impact.
              </p>
              <ul className="text-sm text-gray-500 space-y-1 mb-6">
                <li>• Contact list synchronization</li>
                <li>• Workflow automation triggers</li>
                <li>• Text nurturing sequences</li>
                <li>• ROI tracking and reporting</li>
              </ul>
              <Link
                href="/contact"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 text-center hover:shadow-md transition-shadow">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Pipedrive
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Connect with Pipedrive's sales-focused CRM. Automatically send
                follow-up mail pieces based on deal stages and sales activities.
              </p>
              <ul className="text-sm text-gray-500 space-y-1 mb-6">
                <li>• Deal stage automation</li>
                <li>• Contact import/export</li>
                <li>• Sales activity tracking</li>
                <li>• Pipeline reporting</li>
              </ul>
              <Link
                href="/contact"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </section>

        {/* Email Marketing Integrations */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Email Marketing Platforms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-8 text-center hover:shadow-md transition-shadow">
              <div className="h-16 w-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg
                  className="h-8 w-8 text-red-600"
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Mailchimp
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Sync your Mailchimp audiences with Enclosed.AI for coordinated
                email and direct mail campaigns that reinforce your message.
              </p>
              <ul className="text-sm text-gray-500 space-y-1 mb-6">
                <li>• Audience synchronization</li>
                <li>• Campaign coordination</li>
                <li>• Segment-based targeting</li>
                <li>• Cross-channel analytics</li>
              </ul>
              <Link
                href="/contact"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 text-center hover:shadow-md transition-shadow">
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
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Constant Contact
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Integrate with Constant Contact to create powerful multi-channel
                marketing campaigns that reach customers through both digital
                and physical channels.
              </p>
              <ul className="text-sm text-gray-500 space-y-1 mb-6">
                <li>• Contact list sharing</li>
                <li>• Campaign automation</li>
                <li>• Performance tracking</li>
                <li>• A/B testing coordination</li>
              </ul>
              <Link
                href="/contact"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 text-center hover:shadow-md transition-shadow">
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
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                SendGrid
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Connect with SendGrid's email platform to create comprehensive
                marketing strategies that combine transactional emails with
                direct mail follow-ups.
              </p>
              <ul className="text-sm text-gray-500 space-y-1 mb-6">
                <li>• Event-based triggers</li>
                <li>• Customer journey mapping</li>
                <li>• Deliverability optimization</li>
                <li>• Cross-platform analytics</li>
              </ul>
              <Link
                href="/contact"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </section>

        {/* Analytics & Tracking */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Analytics & Tracking
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-8 text-center hover:shadow-md transition-shadow">
              <div className="h-16 w-16 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg
                  className="h-8 w-8 text-yellow-600"
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Google Analytics
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Track the complete customer journey from direct mail to website
                conversion. Measure ROI and optimize campaigns based on
                comprehensive analytics data.
              </p>
              <ul className="text-sm text-gray-500 space-y-1 mb-6">
                <li>• UTM parameter tracking</li>
                <li>• Conversion attribution</li>
                <li>• Customer journey mapping</li>
                <li>• ROI measurement</li>
              </ul>
              <Link
                href="/contact"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 text-center hover:shadow-md transition-shadow">
              <div className="h-16 w-16 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg
                  className="h-8 w-8 text-indigo-600"
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Mixpanel
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Advanced event tracking and user behavior analysis. Understand
                how direct mail campaigns influence user actions and engagement
                patterns.
              </p>
              <ul className="text-sm text-gray-500 space-y-1 mb-6">
                <li>• Event tracking</li>
                <li>• User behavior analysis</li>
                <li>• Funnel optimization</li>
                <li>• Cohort analysis</li>
              </ul>
              <Link
                href="/contact"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </section>

        {/* API & Custom Integrations */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              API & Custom Integrations
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center">
                Don't see your preferred tool? Our robust API and custom
                integration services make it easy to connect Enclosed.AI with
                any system in your tech stack.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    REST API
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Full-featured REST API with comprehensive documentation,
                    SDKs, and code examples for all major programming languages.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li>• Campaign management endpoints</li>
                    <li>• Contact and list management</li>
                    <li>• Real-time analytics data</li>
                    <li>• Webhook support</li>
                    <li>• Rate limiting and authentication</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Custom Integrations
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Our integration specialists can build custom connections to
                    any system, ensuring seamless data flow and optimal
                    performance.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li>• Custom connector development</li>
                    <li>• Data mapping and transformation</li>
                    <li>• Real-time synchronization</li>
                    <li>• Error handling and monitoring</li>
                    <li>• Ongoing support and maintenance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Connect Your Tools?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Start integrating Enclosed.AI with your existing marketing stack
            today. Our team is here to help you set up seamless connections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-lg font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
            >
              Get Integration Help
            </Link>
            <Link
              href="/auth/signup"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              Start Free Trial
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

