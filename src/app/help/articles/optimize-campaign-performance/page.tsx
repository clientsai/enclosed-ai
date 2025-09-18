import Link from "next/link";
import Logo from "@/components/Logo";

export const metadata = {
  title: "Optimizing Campaign Performance - Enclosed.AI Help",
  description:
    "Best practices for improving response rates and maximizing ROI on your direct mail campaigns.",
};

export default function OptimizeCampaignPerformancePage() {
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
                  Optimize Campaign Performance
                </span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Article Header */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
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
            <div>
              <span className="text-sm text-purple-600 font-semibold">
                Best Practices
              </span>
              <span className="text-sm text-gray-500 mx-2">•</span>
              <span className="text-sm text-gray-500">15 min read</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Optimizing Campaign Performance
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Best practices for improving response rates and maximizing ROI on
            your direct mail campaigns.
          </p>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              The Foundation of High-Performing Campaigns
            </h2>
            <p className="text-gray-600 mb-6">
              Successful direct mail campaigns don't happen by accident. They're
              the result of careful planning, strategic execution, and continuous
              optimization. Here's how to build campaigns that consistently
              deliver results.
            </p>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Key Performance Indicators
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Primary Metrics
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Response Rate (target: 2-5%)</li>
                    <li>• Conversion Rate (target: 1-3%)</li>
                    <li>• ROI (target: 300%+)</li>
                    <li>• Cost Per Acquisition</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Secondary Metrics
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Delivery Rate</li>
                    <li>• Time to Response</li>
                    <li>• Customer Lifetime Value</li>
                    <li>• Brand Awareness Lift</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Audience Targeting Excellence
            </h2>
            <p className="text-gray-600 mb-6">
              The foundation of any successful campaign is reaching the right
              people with the right message at the right time. Here's how to
              master audience targeting:
            </p>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Data Quality is Everything
                </h3>
                <p className="text-gray-600 mb-4">
                  Start with clean, accurate, and up-to-date recipient data.
                  Poor data quality can kill campaign performance before it even
                  begins.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Verify addresses and contact information</li>
                  <li>• Remove duplicates and invalid entries</li>
                  <li>• Update records with recent activity data</li>
                  <li>• Segment based on behavior and preferences</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Advanced Segmentation Strategies
                </h3>
                <p className="text-gray-600 mb-4">
                  Move beyond basic demographics to create meaningful audience
                  segments that respond to your messaging.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Behavioral Segments
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Purchase history</li>
                      <li>• Engagement patterns</li>
                      <li>• Response history</li>
                      <li>• Lifecycle stage</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Psychographic Segments
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Values and interests</li>
                      <li>• Lifestyle preferences</li>
                      <li>• Communication style</li>
                      <li>• Decision-making patterns</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Creative Excellence
            </h2>
            <p className="text-gray-600 mb-6">
              Your creative elements can make or break campaign performance.
              Here's how to create compelling, high-converting designs:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Design Principles
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Visual Hierarchy
                    </h4>
                    <p className="text-sm text-gray-600">
                      Guide the eye through your message with clear visual
                      hierarchy and strategic use of white space.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Brand Consistency
                    </h4>
                    <p className="text-sm text-gray-600">
                      Maintain consistent branding while adapting to different
                      audience segments and campaign types.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Mobile Optimization
                    </h4>
                    <p className="text-sm text-gray-600">
                      Ensure your design works well across all devices and
                      viewing contexts.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Copywriting Best Practices
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Compelling H1s
                    </h4>
                    <p className="text-sm text-gray-600">
                      Create headlines that grab attention and communicate value
                      within the first few seconds.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Clear Value Proposition
                    </h4>
                    <p className="text-sm text-gray-600">
                      Clearly communicate what's in it for the recipient and why
                      they should take action.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Strong Call-to-Action
                    </h4>
                    <p className="text-sm text-gray-600">
                      Make it easy for recipients to respond with clear,
                      actionable next steps.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              A/B Testing for Continuous Improvement
            </h2>
            <p className="text-gray-600 mb-6">
              Never stop testing and optimizing. A/B testing is your secret
              weapon for improving campaign performance over time.
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-yellow-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-900 mb-4">
                  What to Test
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-yellow-900 mb-2">
                      Creative Elements
                    </h4>
                    <ul className="text-sm text-yellow-800 space-y-1">
                      <li>• H1s and subject lines</li>
                      <li>• Visual designs and layouts</li>
                      <li>• Color schemes and imagery</li>
                      <li>• Call-to-action buttons</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-900 mb-2">
                      Content Elements
                    </h4>
                    <ul className="text-sm text-yellow-800 space-y-1">
                      <li>• Personalization levels</li>
                      <li>• Offer types and amounts</li>
                      <li>• Message tone and style</li>
                      <li>• Timing and frequency</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">
                  Testing Best Practices
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-blue-600 font-semibold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900">
                        Test One Variable at a Time
                      </h4>
                      <p className="text-sm text-blue-800">
                        Isolate variables to understand what's driving
                        performance changes.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-blue-600 font-semibold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900">
                        Use Statistically Significant Sample Sizes
                      </h4>
                      <p className="text-sm text-blue-800">
                        Ensure your test results are reliable and actionable.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-blue-600 font-semibold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900">
                        Document and Apply Learnings
                      </h4>
                      <p className="text-sm text-blue-800">
                        Build a knowledge base of what works for your audience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Timing and Frequency Optimization
            </h2>
            <p className="text-gray-600 mb-6">
              When you send your campaigns can be just as important as what you
              send. Optimize timing for maximum impact:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Day of Week
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Test different days to find when your audience is most
                  responsive.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Tuesday-Thursday typically perform best</li>
                  <li>• Avoid Mondays and Fridays</li>
                  <li>• Consider your industry norms</li>
                  <li>• Test weekend sending</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Time of Day
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Timing can vary significantly by audience and industry.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• B2B: 10 AM - 2 PM</li>
                  <li>• B2C: 6 PM - 8 PM</li>
                  <li>• Consider time zones</li>
                  <li>• Test off-peak hours</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Frequency
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Balance engagement with fatigue to maintain response rates.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Start with monthly frequency</li>
                  <li>• Monitor unsubscribe rates</li>
                  <li>• Segment by engagement level</li>
                  <li>• Use behavioral triggers</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Performance Monitoring and Analysis
            </h2>
            <p className="text-gray-600 mb-6">
              Track the right metrics and analyze performance data to make
              informed optimization decisions:
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-4">
                  Real-Time Monitoring
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-900 mb-2">
                      Immediate Metrics
                    </h4>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• Delivery rates and bounces</li>
                      <li>• Open and engagement rates</li>
                      <li>• Response patterns</li>
                      <li>• Error rates and issues</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-900 mb-2">
                      Action Items
                    </h4>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• Set up automated alerts</li>
                      <li>• Monitor for anomalies</li>
                      <li>• Adjust in real-time if needed</li>
                      <li>• Document learnings</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-4">
                  Long-Term Analysis
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-purple-900 mb-2">
                      Trend Analysis
                    </h4>
                    <ul className="text-sm text-purple-800 space-y-1">
                      <li>• Performance over time</li>
                      <li>• Seasonal patterns</li>
                      <li>• Audience evolution</li>
                      <li>• Competitive landscape</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-900 mb-2">
                      Strategic Insights
                    </h4>
                    <ul className="text-sm text-purple-800 space-y-1">
                      <li>• ROI optimization opportunities</li>
                      <li>• Audience expansion potential</li>
                      <li>• Creative refresh needs</li>
                      <li>• Channel integration strategies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Common Optimization Mistakes to Avoid
            </h2>
            <p className="text-gray-600 mb-6">
              Learn from common mistakes to avoid costly optimization errors:
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg
                    className="h-3 w-3 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Testing Too Many Variables at Once
                  </h4>
                  <p className="text-sm text-gray-600">
                    This makes it impossible to determine what's driving
                    performance changes.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg
                    className="h-3 w-3 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Not Waiting for Statistical Significance
                  </h4>
                  <p className="text-sm text-gray-600">
                    Making decisions based on insufficient data leads to false
                    conclusions.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg
                    className="h-3 w-3 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Ignoring Audience Feedback
                  </h4>
                  <p className="text-sm text-gray-600">
                    Unsubscribe rates and complaints are valuable feedback that
                    shouldn't be ignored.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg
                    className="h-3 w-3 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Focusing Only on Response Rates
                  </h4>
                  <p className="text-sm text-gray-600">
                    ROI and customer lifetime value are often more important
                    metrics than raw response rates.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-white">
              <h3 className="text-xl font-bold mb-4">
                Ready to Optimize Your Campaigns?
              </h3>
              <p className="mb-6 opacity-90">
                Start implementing these optimization strategies in your next
                campaign and watch your performance improve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/campaigns/new"
                  className="inline-flex items-center px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Create Optimized Campaign
                </Link>
                <Link
                  href="/help/analytics"
                  className="inline-flex items-center px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Learn About Analytics
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

