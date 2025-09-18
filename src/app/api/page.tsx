import Link from "next/link";
import Logo from "@/components/Logo";

export const metadata = {
  title: "API Documentation - Enclosed.AI | Developer Resources",
  description:
    "Access Enclosed.AI's powerful REST API to integrate direct mail marketing into your applications. Complete documentation, SDKs, and code examples.",
};

export default function APIPage() {
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
            Developer
            <span className="text-blue-600"> API</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Integrate Enclosed.AI's powerful direct mail capabilities into your
            applications with our comprehensive REST API. Build amazing
            experiences with our developer-friendly tools.
          </p>
        </div>

        {/* Quick Start */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Quick Start
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Get Your API Key
                </h3>
                <div className="bg-gray-900 rounded-lg p-6 mb-6">
                  <pre className="text-green-400 text-sm overflow-x-auto">
                    {`curl -X POST https://api.enclosed.ai/v1/auth/token \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "your@email.com",
    "password": "your_password"
  }'`}
                  </pre>
                </div>
                <p className="text-gray-600 mb-6">
                  Get your API key from the dashboard or use our authentication
                  endpoint to generate a token programmatically.
                </p>
                <Link
                  href="/auth/signup"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get API Key
                </Link>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Send Your First Campaign
                </h3>
                <div className="bg-gray-900 rounded-lg p-6 mb-6">
                  <pre className="text-green-400 text-sm overflow-x-auto">
                    {`curl -X POST https://api.enclosed.ai/v1/campaigns \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "My First Campaign",
    "offer_type": "discount",
    "recipients": [
      {
        "first_name": "John",
        "last_name": "Doe",
        "address": "123 Main St",
        "city": "San Francisco",
        "state": "CA",
        "zip": "94105"
      }
    ]
  }'`}
                  </pre>
                </div>
                <p className="text-gray-600">
                  Create and send your first AI-powered direct mail campaign
                  with just a few lines of code.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* API Features */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            API Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                RESTful Design
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Clean, intuitive REST API following industry best practices.
                Easy to understand and integrate with any programming language.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Comprehensive Documentation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Detailed documentation with interactive examples, code samples,
                and SDKs for all major programming languages.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Real-time Webhooks
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Get instant notifications about campaign status, delivery
                updates, and performance metrics through webhooks.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Rate Limiting
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Generous rate limits with clear headers and automatic retry
                logic. Scale your applications without worrying about API
                constraints.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <div className="h-16 w-16 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg
                  className="h-8 w-8 text-teal-600"
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
                Analytics & Reporting
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Access detailed campaign analytics, performance metrics, and ROI
                data through our comprehensive reporting endpoints.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <div className="h-16 w-16 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg
                  className="h-8 w-8 text-pink-600"
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Developer Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Dedicated developer support team, community forums, and
                comprehensive troubleshooting guides to help you succeed.
              </p>
            </div>
          </div>
        </section>

        {/* SDKs */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Official SDKs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <div className="text-4xl mb-4">🐍</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Python
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                pip install enclosed-ai
              </p>
              <Link
                href="#"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                View Docs →
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <div className="text-4xl mb-4">🟢</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Node.js
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                npm install @enclosed-ai/sdk
              </p>
              <Link
                href="#"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                View Docs →
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <div className="text-4xl mb-4">☕</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Java</h3>
              <p className="text-gray-600 text-sm mb-4">Maven/Gradle support</p>
              <Link
                href="#"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                View Docs →
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <div className="text-4xl mb-4">🔷</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">C#</h3>
              <p className="text-gray-600 text-sm mb-4">NuGet package</p>
              <Link
                href="#"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                View Docs →
              </Link>
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Code Examples
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Create a Campaign
              </h3>
              <div className="bg-gray-900 rounded-lg p-6 mb-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
                  {`import { EnclosedAI } from '@enclosed-ai/sdk';

const client = new EnclosedAI('your-api-key');

const campaign = await client.campaigns.create({
  name: 'Holiday Sale Campaign',
  offer_type: 'discount',
  recipients: [
    {
      first_name: 'John',
      last_name: 'Doe',
      address: '123 Main St',
      city: 'San Francisco',
      state: 'CA',
      zip: '94105',
      email: 'john@example.com'
    }
  ],
  settings: {
    personalization_level: 'high',
    include_tracking: true
  }
});

console.log('Campaign created:', campaign.id);`}
                </pre>
              </div>
              <p className="text-gray-600 text-sm">
                Create and configure a new direct mail campaign with AI-powered
                personalization.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Track Performance
              </h3>
              <div className="bg-gray-900 rounded-lg p-6 mb-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
                  {`import { EnclosedAI } from '@enclosed-ai/sdk';

const client = new EnclosedAI('your-api-key');

// Get campaign analytics
const analytics = await client.analytics.getCampaign('campaign-id');

console.log('Delivery rate:', analytics.delivery_rate);
console.log('Response rate:', analytics.response_rate);
console.log('ROI:', analytics.roi);

// Get real-time updates via webhook
client.webhooks.on('campaign.delivered', (data) => {
  console.log('Letter delivered:', data.recipient_id);
});`}
                </pre>
              </div>
              <p className="text-gray-600 text-sm">
                Monitor campaign performance and receive real-time updates
                through our analytics API.
              </p>
            </div>
          </div>
        </section>

        {/* API Reference */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              API Reference
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-8 text-center">
                Explore our complete API reference with interactive examples and
                detailed documentation for every endpoint.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Authentication
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    API keys, tokens, and security
                  </p>
                  <Link
                    href="#"
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    View Docs →
                  </Link>
                </div>
                <div className="bg-white rounded-xl p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Campaigns
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Create, manage, and track campaigns
                  </p>
                  <Link
                    href="#"
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    View Docs →
                  </Link>
                </div>
                <div className="bg-white rounded-xl p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Analytics
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Performance metrics and reporting
                  </p>
                  <Link
                    href="#"
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    View Docs →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Building?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Get your API key and start integrating Enclosed.AI into your
            applications today. Join thousands of developers building the future
            of direct mail marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/signup"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-lg font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
            >
              Get API Key
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              Developer Support
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

