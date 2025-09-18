import Link from "next/link";
import Logo from "@/components/Logo";

export const metadata = {
  title: "Managing Recipient Lists - Enclosed.AI Help",
  description:
    "Tips for organizing, segmenting, and maintaining high-quality recipient lists for your direct mail campaigns.",
};

export default function ManagingRecipientListsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                href="/help"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                Help Center
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <Link
                  href="/help"
                  className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2"
                >
                  Articles
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
                  Managing Recipient Lists
                </span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Article Header */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
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
            <div>
              <span className="text-sm text-orange-600 font-semibold">
                Data Management
              </span>
              <span className="text-sm text-gray-500 mx-2">•</span>
              <span className="text-sm text-gray-500">10 min read</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Managing Recipient Lists
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Tips for organizing, segmenting, and maintaining high-quality
            recipient lists that drive campaign success.
          </p>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              The Foundation of Successful Campaigns
            </h2>
            <p className="text-gray-600 mb-6">
              Your recipient list is the foundation of every successful direct
              mail campaign. A well-managed, high-quality list can make the
              difference between a campaign that generates significant ROI and
              one that falls flat. Here's how to build and maintain lists that
              drive results.
            </p>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Why List Quality Matters
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Performance Impact
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Higher response rates</li>
                    <li>• Lower bounce rates</li>
                    <li>• Better deliverability</li>
                    <li>• Improved ROI</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Cost Benefits
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Reduced waste</li>
                    <li>• Lower postage costs</li>
                    <li>• Fewer undeliverables</li>
                    <li>• Better targeting efficiency</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Building High-Quality Lists
            </h2>
            <p className="text-gray-600 mb-6">
              Start with the right data collection and validation processes to
              ensure your lists are accurate and up-to-date:
            </p>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Data Collection Best Practices
                </h3>
                <p className="text-gray-600 mb-4">
                  Collect data through multiple channels and ensure you have
                  permission to use it for marketing purposes.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Website opt-ins and lead magnets</li>
                  <li>• Trade shows and events</li>
                  <li>• Referral programs</li>
                  <li>• Social media engagement</li>
                  <li>• Customer service interactions</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Data Validation and Cleaning
                </h3>
                <p className="text-gray-600 mb-4">
                  Regularly clean and validate your data to maintain list quality
                  and compliance.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Validation Checks
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Address verification</li>
                      <li>• Email format validation</li>
                      <li>• Phone number formatting</li>
                      <li>• Duplicate detection</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Cleaning Processes
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Remove inactive contacts</li>
                      <li>• Update outdated information</li>
                      <li>• Standardize formatting</li>
                      <li>• Flag suspicious entries</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Segmentation Strategies
            </h2>
            <p className="text-gray-600 mb-6">
              Effective segmentation allows you to send targeted messages to the
              right people at the right time. Here are proven segmentation
              strategies:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Demographic Segmentation
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Basic Demographics
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Age and gender</li>
                      <li>• Geographic location</li>
                      <li>• Income level</li>
                      <li>• Education level</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Professional Demographics
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Job title and industry</li>
                      <li>• Company size</li>
                      <li>• Years of experience</li>
                      <li>• Department or function</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Behavioral Segmentation
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Engagement Behavior
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Response history</li>
                      <li>• Purchase patterns</li>
                      <li>• Website activity</li>
                      <li>• Email engagement</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Lifecycle Stage
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• New prospects</li>
                      <li>• Active customers</li>
                      <li>• At-risk customers</li>
                      <li>• Lapsed customers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              List Organization and Management
            </h2>
            <p className="text-gray-600 mb-6">
              Keep your lists organized and manageable with these proven
              strategies:
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">
                  Naming Conventions
                </h3>
                <p className="text-blue-800 mb-4">
                  Use consistent naming conventions to make lists easy to find
                  and manage:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">
                      List Naming Format
                    </h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• [Source]_[Segment]_[Date]</li>
                      <li>• Example: Website_Leads_Q1_2024</li>
                      <li>• Example: TradeShow_Prospects_Jan</li>
                      <li>• Example: Customers_Active_Current</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">
                      Tagging System
                    </h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Use descriptive tags</li>
                      <li>• Include campaign types</li>
                      <li>• Add source information</li>
                      <li>• Include status indicators</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-4">
                  Regular Maintenance Schedule
                </h3>
                <p className="text-green-800 mb-4">
                  Establish a regular maintenance schedule to keep your lists
                  clean and up-to-date:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-900 mb-2">
                      Weekly Tasks
                    </h4>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• Remove hard bounces</li>
                      <li>• Update opt-out requests</li>
                      <li>• Check for duplicates</li>
                      <li>• Review new additions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-900 mb-2">
                      Monthly Tasks
                    </h4>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• Full data validation</li>
                      <li>• Segment performance review</li>
                      <li>• List growth analysis</li>
                      <li>• Compliance audit</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Data Privacy and Compliance
            </h2>
            <p className="text-gray-600 mb-6">
              Ensure your list management practices comply with privacy
              regulations and respect recipient preferences:
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg
                    className="h-3 w-3 text-green-600"
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
                  <h4 className="font-semibold text-gray-900">
                    Obtain Proper Consent
                  </h4>
                  <p className="text-sm text-gray-600">
                    Ensure you have explicit permission to send marketing
                    communications to each recipient.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg
                    className="h-3 w-3 text-green-600"
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
                  <h4 className="font-semibold text-gray-900">
                    Honor Opt-Out Requests
                  </h4>
                  <p className="text-sm text-gray-600">
                    Immediately remove recipients who request to be removed from
                    your lists.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg
                    className="h-3 w-3 text-green-600"
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
                  <h4 className="font-semibold text-gray-900">
                    Secure Data Storage
                  </h4>
                  <p className="text-sm text-gray-600">
                    Use secure, encrypted storage for all recipient data and
                    implement access controls.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg
                    className="h-3 w-3 text-green-600"
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
                  <h4 className="font-semibold text-gray-900">
                    Regular Compliance Audits
                  </h4>
                  <p className="text-sm text-gray-600">
                    Conduct regular audits to ensure compliance with GDPR, CAN-SPAM,
                    and other relevant regulations.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              List Growth Strategies
            </h2>
            <p className="text-gray-600 mb-6">
              Continuously grow your lists with high-quality, engaged recipients:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Organic Growth
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Content Marketing
                    </h4>
                    <p className="text-sm text-gray-600">
                      Create valuable content that encourages people to opt-in
                      to your lists.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Referral Programs
                    </h4>
                    <p className="text-sm text-gray-600">
                      Incentivize existing customers to refer others to your
                      business.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Social Media
                    </h4>
                    <p className="text-sm text-gray-600">
                      Use social media to drive traffic to your opt-in forms
                      and landing pages.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Paid Acquisition
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Lead Magnets
                    </h4>
                    <p className="text-sm text-gray-600">
                      Offer valuable resources in exchange for contact
                      information.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Partner Lists
                    </h4>
                    <p className="text-sm text-gray-600">
                      Partner with complementary businesses to exchange or
                      rent lists.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      List Rental
                    </h4>
                    <p className="text-sm text-gray-600">
                      Rent targeted lists from reputable providers for
                      specific campaigns.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Measuring List Performance
            </h2>
            <p className="text-gray-600 mb-6">
              Track key metrics to measure the health and performance of your
              recipient lists:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Quality Metrics
                </h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li>• Delivery rate (target: 95%+)</li>
                  <li>• Bounce rate (target: &lt;5%)</li>
                  <li>• Unsubscribe rate (target: &lt;2%)</li>
                  <li>• Data completeness score</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  Engagement Metrics
                </h3>
                <ul className="space-y-2 text-sm text-green-800">
                  <li>• Response rate by segment</li>
                  <li>• Conversion rate by source</li>
                  <li>• Customer lifetime value</li>
                  <li>• List growth rate</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-lg p-8 text-white">
              <h3 className="text-xl font-bold mb-4">
                Ready to Optimize Your Lists?
              </h3>
              <p className="mb-6 opacity-90">
                Start implementing these list management best practices to
                improve your campaign performance and ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/campaigns/new"
                  className="inline-flex items-center px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Create Your First Campaign
                </Link>
                <Link
                  href="/help/campaigns"
                  className="inline-flex items-center px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors"
                >
                  Learn About Campaigns
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

