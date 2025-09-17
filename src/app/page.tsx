/* UI Component Transformation - Diverse lightweight components with no duplicates per page */
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import Logo from '@/components/Logo';

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      if (user) {
        router.push('/dashboard');
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
            <Link
              href="/auth/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section - Lead Intro Component */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <section className="bg-gradient-to-r from-blue-50/50 to-indigo-50/50 rounded-2xl p-12 mb-16">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-6xl mb-6">
              Direct Mail Marketing
              <span className="text-blue-600"> Powered by AI</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Create and send personalized direct mail campaigns with AI-generated sales letters.
              Upload your list, choose your offer, and let AI craft compelling letters for each recipient.
            </p>
            <div className="mt-8 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link
                href="/auth/signup"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Get Started Free
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section - Feature Grid (Cards) Component */}
        <section id="features" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Everything you need for direct mail success</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-16 w-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered Letters</h3>
              <p className="text-gray-600">
                Generate personalized sales letters for each recipient using advanced AI that understands your offer and audience.
              </p>
            </article>

            <article className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-16 w-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Real Mail Delivery</h3>
              <p className="text-gray-600">
                Send actual physical mail pieces through our partnership with leading mail providers. Track delivery and responses.
              </p>
            </article>

            <article className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-16 w-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Campaign Analytics</h3>
              <p className="text-gray-600">
                Monitor campaign performance with detailed analytics. Track delivery rates, response rates, and ROI.
              </p>
            </article>
          </div>
        </section>

        {/* Pricing Section - Stat Row Component */}
        <section className="mb-16 bg-white rounded-2xl shadow-lg p-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Simple, Transparent Pricing</h2>
            <p className="mt-2 text-gray-600">Pay only for what you send. No monthly fees or contracts.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">$0.75</div>
              <div className="text-sm text-gray-600 mt-1">Per Letter</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600">100%</div>
              <div className="text-sm text-gray-600 mt-1">Delivery Tracking</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600">$0</div>
              <div className="text-sm text-gray-600 mt-1">Setup Fees</div>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-600">
            Includes AI generation, printing, postage, and delivery
          </div>
        </section>

        {/* Benefits - Checklist Component */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">✓</span>
                <span className="text-gray-700">AI-powered personalization for every recipient</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">✓</span>
                <span className="text-gray-700">Professional printing on high-quality paper stock</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">✓</span>
                <span className="text-gray-700">First-class postage and USPS delivery tracking</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">✓</span>
                <span className="text-gray-700">Campaign analytics and response tracking</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">✓</span>
                <span className="text-gray-700">Bulk discounts for large campaigns</span>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA Section - CTA Band Component */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of businesses using Enclosed.AI for their direct mail campaigns.
          </p>
          <Link
            href="/auth/signup"
            className="inline-flex items-center px-8 py-3 border-2 border-white text-lg font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
          >
            Start Your First Campaign
          </Link>
        </section>
      </div>

      {/* Footer - Info Pill Group Component */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Logo size="md" showText={true} linkToHome={false} className="text-white [&>div>span]:text-white" />
            </div>
            <p className="text-gray-400 mb-6">Direct mail marketing powered by artificial intelligence</p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="inline-block px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">AI-Powered</span>
              <span className="inline-block px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Direct Mail</span>
              <span className="inline-block px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Marketing Automation</span>
              <span className="inline-block px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Analytics</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
