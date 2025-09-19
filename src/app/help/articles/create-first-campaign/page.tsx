import Link from "next/link";
import Logo from "@/components/Logo";
export const metadata = {
  title: "How to Create Your First Campaign - Enclosed.AI Help",
  description:
    "Step-by-step guide to creating and sending your first AI-powered direct mail campaign with Enclosed.AI.",
};
export default function CreateFirstCampaignPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        {/* Article Header */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
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
            <div>
              <span className="text-sm text-blue-600 font-semibold">
                Getting Started
              </span>
              <span className="text-sm text-gray-500 mx-2">•</span>
              <span className="text-sm text-gray-500">8 min read</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            How to Create Your First Campaign
          </h1>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            Step-by-step guide to creating and sending your first AI-powered
            direct mail campaign. Get up and running in minutes.
          </p>
        </div>
        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-black rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
              Prerequisites
            </h2>
            <p className="text-gray-400 mb-6">
              Before creating your first campaign, ensure you have the following
              set up:
            </p>
            <ul className="list-disc list-inside text-gray-400 mb-8 space-y-2">
              <li>An active Enclosed.AI account</li>
              <li>Sufficient credits in your account</li>
              <li>A recipient list (CSV file or CRM integration)</li>
              <li>Your business information and return address</li>
            </ul>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
              Step 1: Access the Campaign Builder
            </h2>
            <p className="text-gray-400 mb-6">
              Navigate to the Campaigns section in your dashboard and click
              "Create New Campaign." You'll be taken to our intuitive campaign
              builder interface.
            </p>
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
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
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    Pro Tip
                  </h3>
                  <p className="text-blue-800">
                    Start with our template gallery to get inspiration and save
                    time on design. You can always customize templates to match
                    your brand.
                  </p>
                </div>
              </div>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
              Step 2: Choose Your Campaign Type
            </h2>
            <p className="text-gray-400 mb-6">
              Select the type of campaign that best fits your marketing goals:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-black rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Promotional
                </h3>
                <p className="text-sm text-gray-400">
                  Perfect for sales, discounts, and product announcements
                </p>
              </div>
              <div className="bg-black rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Welcome Series
                </h3>
                <p className="text-sm text-gray-400">
                  Onboard new customers with personalized content
                </p>
              </div>
              <div className="bg-black rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Follow-up
                </h3>
                <p className="text-sm text-gray-400">
                  Re-engage customers and nurture leads
                </p>
              </div>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
              Step 3: Design Your Mail Piece
            </h2>
            <p className="text-gray-400 mb-6">
              Use our AI-powered design tools to create compelling visuals that
              resonate with your audience:
            </p>
            <ol className="list-decimal list-inside text-gray-400 mb-8 space-y-3">
              <li>
                <strong>Upload your logo and brand assets</strong> - Ensure
                consistent branding across all materials
              </li>
              <li>
                <strong>Choose a layout</strong> - Select from our professional
                templates or start from scratch
              </li>
              <li>
                <strong>Add your content</strong> - Write compelling headlines
                and copy that drives action
              </li>
              <li>
                <strong>Include a clear call-to-action</strong> - Make it easy
                for recipients to respond
              </li>
            </ol>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
              Step 4: Configure Personalization
            </h2>
            <p className="text-gray-400 mb-6">
              Set up dynamic content that adapts to each recipient using our AI
              personalization features:
            </p>
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">
                Personalization Options
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    Basic Personalization
                  </h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Recipient name and company</li>
                    <li>• Location-based content</li>
                    <li>• Industry-specific messaging</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    Advanced Personalization
                  </h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Purchase history integration</li>
                    <li>• Behavioral triggers</li>
                    <li>• Custom product recommendations</li>
                  </ul>
                </div>
              </div>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
              Step 5: Select Your Audience
            </h2>
            <p className="text-gray-400 mb-6">
              Choose who will receive your campaign by selecting from your
              existing lists or creating a new segment:
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center p-4 bg-black rounded-lg">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="h-4 w-4 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white">
                    Upload CSV File
                  </h4>
                  <p className="text-sm text-gray-400">
                    Import your recipient list from a spreadsheet
                  </p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-black rounded-lg">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="h-4 w-4 text-blue-600"
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
                <div>
                  <h4 className="font-semibold text-white">
                    Connect CRM
                  </h4>
                  <p className="text-sm text-gray-400">
                    Sync with Salesforce, HubSpot, or other CRM systems
                  </p>
                </div>
              </div>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
              Step 6: Preview and Test
            </h2>
            <p className="text-gray-400 mb-6">
              Before launching, preview your campaign and send test versions to
              ensure everything looks perfect:
            </p>
            <div className="bg-yellow-50 rounded-lg p-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-yellow-600"
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
                <div className="ml-3">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-2">
                    Important
                  </h3>
                  <p className="text-yellow-800">
                    Always send a test version to yourself and team members
                    before launching to catch any errors or design issues.
                  </p>
                </div>
              </div>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
              Step 7: Launch Your Campaign
            </h2>
            <p className="text-gray-400 mb-6">
              Once you're satisfied with your campaign, it's time to launch:
            </p>
            <ol className="list-decimal list-inside text-gray-400 mb-8 space-y-3">
              <li>
                <strong>Set your budget</strong> - Choose how many credits to
                allocate to this campaign
              </li>
              <li>
                <strong>Schedule delivery</strong> - Send immediately or schedule
                for a specific date
              </li>
              <li>
                <strong>Confirm and launch</strong> - Review all settings and
                click "Launch Campaign"
              </li>
              <li>
                <strong>Monitor performance</strong> - Track delivery and
                engagement in real-time
              </li>
            </ol>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
              Next Steps
            </h2>
            <p className="text-gray-400 mb-6">
              After launching your first campaign, focus on these areas to
              maximize success:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-black rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Monitor Performance
                </h3>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Track delivery rates</li>
                  <li>• Monitor response rates</li>
                  <li>• Analyze engagement metrics</li>
                  <li>• Calculate ROI</li>
                </ul>
              </div>
              <div className="bg-black rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Optimize Future Campaigns
                </h3>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• A/B test different elements</li>
                  <li>• Refine your targeting</li>
                  <li>• Improve personalization</li>
                  <li>• Scale successful campaigns</li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-white">
              <h3 className="text-lg md:text-xl font-bold mb-4">
                Need Help Getting Started?
              </h3>
              <p className="mb-6 opacity-90">
                Our support team is here to help you create successful campaigns.
                Contact us for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-black text-blue-600 font-semibold rounded-lg hover:bg-black transition-colors"
                >
                  Contact Support
                </Link>
                <Link
                  href="/help/getting-started"
                  className="inline-flex items-center px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-black hover:text-blue-600 transition-colors"
                >
                  View Getting Started Guide
                </Link>
              </div>
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