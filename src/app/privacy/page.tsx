"use client";

import Link from "next/link";
import {
  Section,
  Stack,
  Cluster,
  Headline,
  Subhead,
  Prose,
  Button
} from "@/components/premium";
import Logo from "@/components/Logo";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
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
            <Cluster gap={4}>
              <Button as={Link} href="/auth/login" variant="ghost" size="sm">
                Sign In
              </Button>
              <Button as={Link} href="/auth/signup" variant="primary" size="sm">
                Get Started
              </Button>
            </Cluster>
          </div>
        </div>
      </header>

      <Section className="max-w-4xl">
        <Stack gap={8}>
          <div className="text-center">
            <Stack gap={4}>
              <Headline level={1}>
                Privacy Policy
              </Headline>
              <Subhead>
                Last updated: December 15, 2024
              </Subhead>
            </Stack>
          </div>

          <Prose>
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                1. Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Enclosed.AI, Inc. ("Company," "we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered direct mail marketing platform and services (the "Service").
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access or use the Service.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of this Privacy Policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                2. Information We Collect
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Personal Information You Provide
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Register for an account</li>
                <li>Use our Service or request customer support</li>
                <li>Subscribe to our newsletter or marketing communications</li>
                <li>Participate in surveys, contests, or promotions</li>
                <li>Contact us directly</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Information Automatically Collected
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you use our Service, we may automatically collect certain information, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Usage data and analytics</li>
                <li>Device information and browser type</li>
                <li>IP address and location data</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Log files and system activity</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Campaign Data
              </h3>
              <p className="text-gray-700 leading-relaxed">
                When you use our Service to create direct mail campaigns, we collect and process:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Recipient lists and contact information</li>
                <li>Campaign content and creative materials</li>
                <li>Mail piece design and personalization data</li>
                <li>Delivery and performance analytics</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Providing, operating, and maintaining our Service</li>
                <li>Processing and fulfilling direct mail campaigns</li>
                <li>Improving and personalizing your experience</li>
                <li>Communicating with you about your account and campaigns</li>
                <li>Providing customer support and technical assistance</li>
                <li>Sending marketing communications (with your consent)</li>
                <li>Detecting and preventing fraud or unauthorized access</li>
                <li>Complying with legal obligations and regulations</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                4. Information Sharing and Disclosure
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share your information in the following situations:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Service Providers
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We may share your information with third-party service providers who perform services on our behalf, including printing facilities, mailing services, payment processors, and analytics providers.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Legal Requirements
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We may disclose your information if required to do so by law or in response to valid requests by public authorities.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Business Transfers
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                With Your Consent
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We may disclose your personal information for any other purpose with your consent.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                5. Data Security
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security audits and penetration testing</li>
                <li>Access controls and employee training</li>
                <li>Secure data centers and infrastructure</li>
                <li>Incident response and data breach procedures</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                6. Data Retention
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Campaign data and recipient information is typically retained for:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Active campaigns: For the duration of the campaign plus 90 days</li>
                <li>Historical campaigns: Up to 7 years for analytics and compliance</li>
                <li>Account data: Until account deletion plus 30 days</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                When we no longer need your personal information, we will securely delete or anonymize it.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                7. Your Privacy Rights
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Right to access and receive a copy of your personal information</li>
                <li>Right to rectify inaccurate personal information</li>
                <li>Right to erase your personal information</li>
                <li>Right to restrict processing of your personal information</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
                <li>Right to withdraw consent at any time</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                To exercise any of these rights, please contact us using the information provided in the "Contact Us" section below.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                8. Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to track activity on our Service and store certain information. Cookies are files with small amounts of data that may include an anonymous unique identifier.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We use both session and persistent cookies for various purposes including authentication, preferences, analytics, and marketing.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                9. International Data Transfers
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your information, including personal information, may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If you are located outside the United States and choose to provide information to us, please note that we transfer the information, including personal information, to the United States and process it there.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                10. Children's Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our Service is not intended for children under the age of 18. We do not knowingly collect personally identifiable information from children under 18.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us. If we become aware that we have collected personal information from children without verification of parental consent, we will take steps to remove that information from our servers.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                11. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                12. Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> privacy@enclosed.ai
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Address:</strong> 123 Innovation Drive, San Francisco, CA 94105
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
                <p className="text-gray-700">
                  <strong>Data Protection Officer:</strong> dpo@enclosed.ai
                </p>
              </div>
            </section>
          </Prose>
        </Stack>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Logo size="md" showText={true} linkToHome={false} className="mb-4" />
              <p className="text-gray-600 text-sm">
                Direct mail marketing powered by artificial intelligence
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Product</h3>
              <Stack gap={2}>
                <Link href="/features" className="text-gray-600 hover:text-gray-900 text-sm">Features</Link>
                <Link href="/pricing" className="text-gray-600 hover:text-gray-900 text-sm">Pricing</Link>
                <Link href="/integrations" className="text-gray-600 hover:text-gray-900 text-sm">Integrations</Link>
              </Stack>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Company</h3>
              <Stack gap={2}>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm">About</Link>
                <Link href="/team" className="text-gray-600 hover:text-gray-900 text-sm">Team</Link>
                <Link href="/careers" className="text-gray-600 hover:text-gray-900 text-sm">Careers</Link>
              </Stack>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Support</h3>
              <Stack gap={2}>
                <Link href="/help" className="text-gray-600 hover:text-gray-900 text-sm">Help Center</Link>
                <Link href="/privacy" className="text-gray-600 hover:text-gray-900 text-sm">Privacy</Link>
                <Link href="/terms" className="text-gray-600 hover:text-gray-900 text-sm">Terms</Link>
              </Stack>
            </div>
          </div>
          <div className="border-t border-gray-300 mt-8 pt-8 text-center text-sm text-gray-600">
            <p>&copy; 2024 Enclosed.AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}