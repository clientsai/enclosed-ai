/* Enhanced Homepage - Industry-Leading Copy Depth */
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Logo from "@/components/Logo";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      if (user) {
        router.push("/dashboard");
      }
      setLoading(false);
    };
    checkUser();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Logo size="md" />
            <nav className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
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

      {/* Hero Section - Enhanced Copy */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <section className="bg-gradient-to-r from-blue-50/50 to-indigo-50/50 rounded-2xl p-12 mb-16">
          <div className="text-center">
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              NEXT-GENERATION DIRECT MAIL PLATFORM
            </div>
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-6xl mb-6">
              Transform Your Marketing with
              <span className="text-blue-600"> AI-Powered Direct Mail</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-4">
              While digital channels become increasingly crowded and expensive, smart marketers are rediscovering the power of physical mail. Enclosed.AI combines the tangible impact of direct mail with cutting-edge artificial intelligence to create hyper-personalized campaigns that get noticed, opened, and acted upon.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Upload your contact list, select from proven templates, and watch as our AI crafts compelling, personalized letters for each recipient. No more generic mail merges or one-size-fits-all messaging. Every piece is uniquely tailored to resonate with its intended reader, driving response rates that digital channels simply can't match.
            </p>
            <div className="mt-8 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link
                href="/auth/signup"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Start Your First Campaign
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                See How It Works
              </Link>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              No credit card required • Send your first 10 letters free • Setup in under 5 minutes
            </p>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-red-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                The Direct Mail Dilemma
              </h3>
              <p className="text-gray-700 mb-4">
                Traditional direct mail campaigns are expensive, time-consuming, and impersonal. Most businesses struggle with:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Generic templates that fail to connect with recipients on a personal level</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Complex printing and mailing logistics that drain time and resources</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Poor tracking capabilities that leave ROI unclear and optimization impossible</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>High minimum order requirements that make testing prohibitively expensive</span>
                </li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                The Enclosed.AI Solution
              </h3>
              <p className="text-gray-700 mb-4">
                We've reimagined direct mail for the modern marketer. Our platform delivers:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>AI that writes unique, compelling copy for each recipient based on their data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Fully automated printing and mailing with no minimum quantities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Real-time tracking and analytics to measure every aspect of performance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Start with just one letter or scale to millions - complete flexibility</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              From Upload to Mailbox in Three Simple Steps
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our streamlined process takes the complexity out of direct mail campaigns. Here's how you can launch your first campaign in minutes, not weeks.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8 flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Upload Your Contact List
                </h3>
                <p className="text-gray-600 mb-3">
                  Simply upload a CSV file with your recipient information. Our intelligent mapping system automatically recognizes common fields like names, addresses, and custom variables. Whether you have 10 contacts or 10,000, our system handles it seamlessly.
                </p>
                <p className="text-gray-600">
                  Include any data points you want to personalize - company names, past purchase history, interests, or any other information. The more data you provide, the more personalized and effective your letters become.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Choose Your Template & Let AI Personalize
                </h3>
                <p className="text-gray-600 mb-3">
                  Select from our library of proven templates designed for various industries and objectives - from sales introductions to follow-ups, from event invitations to customer win-backs. Each template has been optimized through thousands of sends.
                </p>
                <p className="text-gray-600">
                  Our AI then takes over, crafting unique content for each recipient. It doesn't just swap out names - it rewrites entire paragraphs to address specific pain points, reference relevant details, and create a genuinely personal connection that feels hand-written.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Review, Send & Track Results
                </h3>
                <p className="text-gray-600 mb-3">
                  Preview exactly how each letter will look before sending. Make any final adjustments, then launch your campaign with a single click. We handle all printing on premium paper stock and manage postal delivery through USPS.
                </p>
                <p className="text-gray-600">
                  Track everything in real-time through your dashboard - see when letters are printed, mailed, and delivered. Monitor response rates, track conversions, and use our analytics to continuously improve your campaigns.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Enhanced */}
        <section id="features" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Powerful Features That Drive Real Results
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every feature is designed with one goal: helping you create direct mail campaigns that generate meaningful responses and measurable ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-16 w-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                AI Content Generation
              </h3>
              <p className="text-gray-600 mb-3">
                Our advanced AI doesn't just fill in blanks - it writes entirely unique letters for each recipient. It understands context, maintains consistent tone, and creates compelling narratives that feel personal and authentic.
              </p>
              <p className="text-gray-600">
                The AI analyzes successful campaigns to understand what works, then applies those insights to your specific audience and objectives. The result? Letters that connect, convince, and convert.
              </p>
            </article>

            <article className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-16 w-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
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
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Professional Printing & Delivery
              </h3>
              <p className="text-gray-600 mb-3">
                Every letter is printed on premium 24lb paper stock with high-resolution color printing. We use #10 business envelopes with your return address, creating a professional appearance that gets opened.
              </p>
              <p className="text-gray-600">
                Through our USPS partnership, we provide full delivery tracking and can handle both first-class and standard mail options. Your campaigns arrive looking professional and credible.
              </p>
            </article>

            <article className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-16 w-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Advanced Analytics & Tracking
              </h3>
              <p className="text-gray-600 mb-3">
                Go beyond basic delivery confirmation. Track open rates through QR codes, measure response rates, and calculate true ROI. Our dashboard provides real-time insights into campaign performance.
              </p>
              <p className="text-gray-600">
                Use A/B testing to optimize your templates, analyze which personalizations drive the best results, and continuously improve your campaigns based on actual data, not guesswork.
              </p>
            </article>

            <article className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-16 w-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Automated Campaign Management
              </h3>
              <p className="text-gray-600 mb-3">
                Set up drip campaigns that automatically send follow-up letters based on recipient behavior. Schedule campaigns in advance, trigger sends based on events, and let automation handle the heavy lifting.
              </p>
              <p className="text-gray-600">
                Integration with your CRM means campaigns can respond to customer actions in real-time, creating seamless multi-touch experiences that nurture leads effectively.
              </p>
            </article>

            <article className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-16 w-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Audience Segmentation
              </h3>
              <p className="text-gray-600 mb-3">
                Divide your list into segments based on any criteria - location, purchase history, engagement level, or custom attributes. Send different messages to different segments for maximum relevance.
              </p>
              <p className="text-gray-600">
                Our AI can even suggest optimal segmentation strategies based on your data, helping you discover audience groups you might not have considered.
              </p>
            </article>

            <article className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-16 w-16 bg-red-100 rounded-lg flex items-center justify-center mb-4">
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
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Bulk Upload & Processing
              </h3>
              <p className="text-gray-600 mb-3">
                Handle lists of any size with our robust upload system. Process thousands of recipients simultaneously, with automatic data validation and address verification to ensure deliverability.
              </p>
              <p className="text-gray-600">
                Smart deduplication prevents sending multiple letters to the same address, and our system can merge data from multiple sources for comprehensive personalization.
              </p>
            </article>
          </div>
        </section>

        {/* ROI Section */}
        <section className="mb-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Numbers Speak for Themselves
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Direct mail consistently outperforms digital channels in response rates and ROI. When you add AI personalization, the results are even more impressive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5.3%</div>
              <div className="text-sm font-semibold text-gray-900 mb-1">Average Response Rate</div>
              <div className="text-xs text-gray-600">
                Compared to 0.6% for email
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">42%</div>
              <div className="text-sm font-semibold text-gray-900 mb-1">Higher Conversion</div>
              <div className="text-xs text-gray-600">
                With AI personalization
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">70%</div>
              <div className="text-sm font-semibold text-gray-900 mb-1">Open Rate</div>
              <div className="text-xs text-gray-600">
                Physical mail gets opened
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">112%</div>
              <div className="text-sm font-semibold text-gray-900 mb-1">Average ROI</div>
              <div className="text-xs text-gray-600">
                For targeted campaigns
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            * Based on industry data and customer reported metrics from 2023-2024
          </p>
        </section>

        {/* Pricing Section - Enhanced */}
        <section className="mb-16 bg-white rounded-2xl shadow-lg p-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Transparent, Usage-Based Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              No hidden fees, no long-term contracts, no minimum commitments. Pay only for the letters you send, with volume discounts that grow with your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="border-2 border-gray-200 rounded-xl p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Starter</h3>
              <div className="text-4xl font-bold text-blue-600 mb-1">$2.00</div>
              <div className="text-sm text-gray-600 mb-4">per letter</div>
              <ul className="text-left space-y-2 text-sm text-gray-600">
                <li>✓ Up to 100 letters/month</li>
                <li>✓ AI personalization</li>
                <li>✓ Basic templates</li>
                <li>✓ Standard delivery</li>
                <li>✓ Email support</li>
              </ul>
            </div>
            <div className="border-2 border-blue-600 rounded-xl p-6 text-center bg-blue-50">
              <div className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-semibold mb-2">
                MOST POPULAR
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional</h3>
              <div className="text-4xl font-bold text-blue-600 mb-1">$1.50</div>
              <div className="text-sm text-gray-600 mb-4">per letter</div>
              <ul className="text-left space-y-2 text-sm text-gray-600">
                <li>✓ 100-1,000 letters/month</li>
                <li>✓ Advanced AI features</li>
                <li>✓ Premium templates</li>
                <li>✓ Priority delivery</li>
                <li>✓ Phone & chat support</li>
                <li>✓ A/B testing tools</li>
              </ul>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise</h3>
              <div className="text-4xl font-bold text-blue-600 mb-1">$0.75</div>
              <div className="text-sm text-gray-600 mb-4">per letter</div>
              <ul className="text-left space-y-2 text-sm text-gray-600">
                <li>✓ 1,000+ letters/month</li>
                <li>✓ Custom AI training</li>
                <li>✓ White-label options</li>
                <li>✓ Express delivery</li>
                <li>✓ Dedicated success manager</li>
                <li>✓ API access</li>
              </ul>
            </div>
          </div>

          <div className="text-center text-sm text-gray-600">
            All plans include: Printing • Postage • Envelope • Address verification • Delivery tracking
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Forward-Thinking Marketers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join thousands of businesses using Enclosed.AI to transform their direct mail campaigns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Our response rates increased by 300% after switching to Enclosed.AI. The AI personalization makes each letter feel hand-written, and the automation saves us dozens of hours per campaign."
              </p>
              <div className="font-semibold text-gray-900">Sarah Johnson</div>
              <div className="text-sm text-gray-500">Marketing Director, TechStart Inc.</div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Finally, a direct mail platform that's as easy to use as email marketing. We launched our first campaign in under an hour and saw ROI within two weeks."
              </p>
              <div className="font-semibold text-gray-900">Michael Chen</div>
              <div className="text-sm text-gray-500">CEO, Growth Solutions</div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "The quality of the AI-generated content is remarkable. It captures our brand voice perfectly while personalizing for each recipient. Game-changing technology."
              </p>
              <div className="font-semibold text-gray-900">Emily Rodriguez</div>
              <div className="text-sm text-gray-500">VP Sales, Innovate Corp</div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mb-16 bg-gray-50 rounded-2xl p-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Perfect for Every Marketing Goal
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether you're nurturing leads, winning back customers, or driving event attendance, Enclosed.AI adapts to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Lead Generation</h3>
              <p className="text-gray-600">
                Break through the digital noise with physical letters that get noticed. Perfect for B2B outreach, high-value prospects, and account-based marketing campaigns.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Customer Win-Back</h3>
              <p className="text-gray-600">
                Re-engage dormant customers with personalized letters that remind them why they chose you. Reference their history and offer compelling reasons to return.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Event Invitations</h3>
              <p className="text-gray-600">
                Drive attendance with elegant invitations that stand out. Perfect for conferences, webinars, product launches, and exclusive customer events.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Thank You Campaigns</h3>
              <p className="text-gray-600">
                Show genuine appreciation with personalized thank you letters. Build loyalty and encourage repeat business through meaningful connection.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section - Enhanced */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Direct Mail Marketing?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of marketers who are seeing unprecedented response rates with AI-powered direct mail. Start your first campaign today with 10 free letters.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link
              href="/auth/signup"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-lg font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
            >
              Start Free Trial
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-lg font-medium rounded-md text-white bg-transparent hover:bg-white/10 transition-colors"
            >
              Request Demo
            </Link>
          </div>
          <p className="mt-6 text-sm opacity-75">
            No credit card required • 10 free letters • Cancel anytime
          </p>
        </section>
      </div>

      {/* Footer - Enhanced */}
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
              <p className="text-gray-400 text-sm mb-4">
                The future of direct mail marketing is here. AI-powered personalization meets traditional mail for unmatched response rates.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
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
                    API Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/templates"
                    className="hover:text-white transition-colors"
                  >
                    Template Gallery
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
                    href="/blog"
                    className="hover:text-white transition-colors"
                  >
                    Blog
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
                <li>
                  <Link
                    href="/partners"
                    className="hover:text-white transition-colors"
                  >
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
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
                    href="/guides"
                    className="hover:text-white transition-colors"
                  >
                    Guides & Tutorials
                  </Link>
                </li>
                <li>
                  <Link
                    href="/case-studies"
                    className="hover:text-white transition-colors"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/community"
                    className="hover:text-white transition-colors"
                  >
                    Community Forum
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-400">
                &copy; 2024 Enclosed.AI. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link
                  href="/privacy"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/cookies"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}