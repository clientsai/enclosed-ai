import Link from "next/link";
import Logo from "@/components/Logo";
export const metadata = {
  title: "Case Studies - Enclosed.AI | Success Stories & Results",
  description:
    "Discover how businesses are achieving remarkable results with Enclosed.AI's AI-powered direct mail marketing. Real case studies and success stories.",
};
export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl mb-6">
            Success
            <span className="text-blue-600"> Stories</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover how businesses across industries are achieving remarkable
            results with AI-powered direct mail marketing. Real results from
            real customers.
          </p>
        </div>
        {/* Featured Case Study */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-black/20 rounded-full px-4 py-2 text-sm font-medium mb-6">
                  Featured Case Study
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  TechCorp Increases Text Generation by 340%
                </h2>
                <p className="text-lg opacity-90 mb-8 leading-relaxed">
                  A B2B software company used Enclosed.AI to transform their
                  lead generation strategy, resulting in a 340% increase in
                  qualified leads and a 280% improvement in conversion rates.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="text-2xl md:text-3xl font-bold">340%</div>
                    <div className="text-sm opacity-80">
                      Increase in Qualified Texts
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold">280%</div>
                    <div className="text-sm opacity-80">
                      Improvement in Conversion
                    </div>
                  </div>
                </div>
                <Link
                  href="#techcorp-case"
                  className="inline-flex items-center px-6 py-3 bg-black text-blue-600 rounded-lg font-medium hover:bg-black transition-colors"
                >
                  Read Full Case Study →
                </Link>
              </div>
              <div className="bg-black/10 rounded-xl p-8">
                <blockquote className="text-lg italic mb-6">
                  "Enclosed.AI completely transformed our lead generation
                  strategy. The AI personalization made our direct mail
                  campaigns feel like one-on-one conversations, and the results
                  speak for themselves."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-black/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">SM</span>
                  </div>
                  <div>
                    <div className="font-semibold">Sarah Mitchell</div>
                    <div className="text-sm opacity-80">
                      VP of Marketing, TechCorp
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Case Studies Grid */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">
            All Case Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="bg-black rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-2">340%</div>
                  <div className="text-sm opacity-90">Text Increase</div>
                </div>
              </div>
              <div className="p-8">
                <div className="text-sm text-blue-600 font-medium mb-2">
                  B2B Software
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-4">
                  TechCorp Text Generation Success
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  How a B2B software company used AI-powered direct mail to
                  increase qualified leads by 340% and improve conversion rates
                  by 280%.
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    href="#techcorp"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read Case Study →
                  </Link>
                  <span className="text-sm text-gray-500">5 min read</span>
                </div>
              </div>
            </div>
            {/* Case Study 2 */}
            <div className="bg-black rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-2">450%</div>
                  <div className="text-sm opacity-90">ROI Improvement</div>
                </div>
              </div>
              <div className="p-8">
                <div className="text-sm text-green-600 font-medium mb-2">
                  E-commerce
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-4">
                  RetailMax Customer Retention
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  An e-commerce retailer achieved 450% ROI improvement by using
                  personalized direct mail to re-engage dormant customers.
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    href="#retailmax"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read Case Study →
                  </Link>
                  <span className="text-sm text-gray-500">4 min read</span>
                </div>
              </div>
            </div>
            {/* Case Study 3 */}
            <div className="bg-black rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-2">520%</div>
                  <div className="text-sm opacity-90">Response Rate</div>
                </div>
              </div>
              <div className="p-8">
                <div className="text-sm text-purple-600 font-medium mb-2">
                  Financial Services
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-4">
                  FinanceFirst Product Launch
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  A financial services company used AI personalization to
                  achieve a 520% higher response rate for their new product
                  launch campaign.
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    href="#financefirst"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read Case Study →
                  </Link>
                  <span className="text-sm text-gray-500">6 min read</span>
                </div>
              </div>
            </div>
            {/* Case Study 4 */}
            <div className="bg-black rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-2">280%</div>
                  <div className="text-sm opacity-90">Event Attendance</div>
                </div>
              </div>
              <div className="p-8">
                <div className="text-sm text-orange-600 font-medium mb-2">
                  Events & Conferences
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-4">
                  EventPro Conference Marketing
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  An event management company increased conference attendance by
                  280% using targeted direct mail campaigns with AI
                  personalization.
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    href="#eventpro"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read Case Study →
                  </Link>
                  <span className="text-sm text-gray-500">5 min read</span>
                </div>
              </div>
            </div>
            {/* Case Study 5 */}
            <div className="bg-black rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-2">380%</div>
                  <div className="text-sm opacity-90">Sales Increase</div>
                </div>
              </div>
              <div className="p-8">
                <div className="text-sm text-teal-600 font-medium mb-2">
                  Real Estate
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-4">
                  PropertyPro Sales Growth
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  A real estate agency achieved 380% sales increase by using
                  AI-powered direct mail to nurture leads and close more deals.
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    href="#propertypro"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read Case Study →
                  </Link>
                  <span className="text-sm text-gray-500">4 min read</span>
                </div>
              </div>
            </div>
            {/* Case Study 6 */}
            <div className="bg-black rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-2">290%</div>
                  <div className="text-sm opacity-90">Customer Acquisition</div>
                </div>
              </div>
              <div className="p-8">
                <div className="text-sm text-pink-600 font-medium mb-2">
                  Healthcare
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-4">
                  HealthPlus Patient Acquisition
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  A healthcare provider increased patient acquisition by 290%
                  using personalized direct mail campaigns for new service
                  offerings.
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    href="#healthplus"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read Case Study →
                  </Link>
                  <span className="text-sm text-gray-500">5 min read</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Industry Results */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              Industry Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  3.2x
                </div>
                <div className="text-sm text-gray-400 mb-2">
                  Average Response Rate
                </div>
                <p className="text-xs text-gray-500">
                  Compared to traditional direct mail
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  85%
                </div>
                <div className="text-sm text-gray-400 mb-2">
                  Customer Satisfaction
                </div>
                <p className="text-xs text-gray-500">
                  Based on post-campaign surveys
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  420%
                </div>
                <div className="text-sm text-gray-400 mb-2">Average ROI</div>
                <p className="text-xs text-gray-500">
                  Across all customer campaigns
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  95%
                </div>
                <div className="text-sm text-gray-400 mb-2">
                  Delivery Success Rate
                </div>
                <p className="text-xs text-gray-500">
                  Guaranteed delivery tracking
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black rounded-xl shadow-sm p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">JM</span>
                </div>
                <div>
                  <div className="font-semibold text-white">
                    John Martinez
                  </div>
                  <div className="text-sm text-gray-400">CMO, RetailMax</div>
                </div>
              </div>
              <p className="text-gray-300 italic mb-4">
                "The AI personalization is incredible. Each letter feels like it
                was written specifically for that customer. Our response rates
                have never been higher."
              </p>
              <div className="flex text-yellow-400">★★★★★</div>
            </div>
            <div className="bg-black rounded-xl shadow-sm p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold">LC</span>
                </div>
                <div>
                  <div className="font-semibold text-white">Lisa Chen</div>
                  <div className="text-sm text-gray-400">
                    VP Marketing, FinanceFirst
                  </div>
                </div>
              </div>
              <p className="text-gray-300 italic mb-4">
                "Enclosed.AI has transformed our marketing strategy. The ROI is
                outstanding, and the platform is incredibly easy to use."
              </p>
              <div className="flex text-yellow-400">★★★★★</div>
            </div>
            <div className="bg-black rounded-xl shadow-sm p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold">MR</span>
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Michael Rodriguez
                  </div>
                  <div className="text-sm text-gray-400">CEO, PropertyPro</div>
                </div>
              </div>
              <p className="text-gray-300 italic mb-4">
                "The results speak for themselves. We've seen a 380% increase in
                sales since implementing Enclosed.AI. It's been a game-changer."
              </p>
              <div className="flex text-yellow-400">★★★★★</div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of businesses already achieving remarkable results
            with AI-powered direct mail marketing. Start your success story
            today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/signup"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-lg font-medium rounded-md text-blue-600 bg-black hover:bg-black transition-colors"
            >
              Start Your Success Story
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-black hover:text-blue-600 transition-colors"
            >
              Talk to Sales
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