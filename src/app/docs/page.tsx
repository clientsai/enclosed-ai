import Link from "next/link";
import Logo from "@/components/Logo";
export const metadata = {
  title: "Knowledge Base - Enclosed.AI | Documentation & Tutorials",
  description:
    "Browse our comprehensive documentation, tutorials, and best practices guides for Enclosed.AI direct mail marketing platform.",
};
export default function DocsPage() {
  return (
    <div >
      {/* Header */}
      <div >
        {/* Hero Section */}
        <div >
          <div >
            <div ></div>
            <div ></div>
            <div ></div>
          </div>
          <div >
            <div >
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h1 >
              Knowledge
              <span > Base</span>
            </h1>
            <p >
              Comprehensive documentation, tutorials, and best practices guides
              to help you master direct mail marketing with Enclosed.AI.
            </p>
            <div >
              <Link
                href="#getting-started"
              >
                Get Started
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>
              <Link
                href="/contact"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
        {/* Search Bar */}
        <div >
          <div >
            <div >
              <div >
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search documentation..."
              />
            </div>
          </div>
        </div>
        {/* Getting Started Section */}
        <div id="getting-started" >
          <h2 >
            Getting Started
          </h2>
          <div >
            {/* Quick Start Guide */}
            <div >
              <div >
                <div >
                  <svg
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
                <h3 >
                  Quick Start Guide
                </h3>
              </div>
              <p >
                Get up and running with Enclosed.AI in under 10 minutes. Learn
                the basics of creating your first campaign.
              </p>
              <div >
                <span >5 min read</span>
                <Link
                  href="#"
                >
                  Read Guide →
                </Link>
              </div>
            </div>
            {/* Account Setup */}
            <div >
              <div >
                <div >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 >
                  Account Setup
                </h3>
              </div>
              <p >
                Complete guide to setting up your account, configuring
                preferences, and connecting your payment method.
              </p>
              <div >
                <span >8 min read</span>
                <Link
                  href="#"
                >
                  Read Guide →
                </Link>
              </div>
            </div>
            {/* First Campaign */}
            <div >
              <div >
                <div >
                  <svg
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
                <h3 >
                  Creating Your First Campaign
                </h3>
              </div>
              <p >
                Step-by-step tutorial on creating, designing, and launching your
                first direct mail campaign.
              </p>
              <div >
                <span >12 min read</span>
                <Link
                  href="#"
                >
                  Read Guide →
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Feature Guides */}
        <div >
          <h2 >
            Feature Guides
          </h2>
          <div >
            {/* AI Personalization */}
            <div >
              <div >
                <div >
                  <svg
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
                <h3 >
                  AI Personalization
                </h3>
              </div>
              <p >
                Learn how to leverage our AI to create highly personalized
                content that resonates with your audience and drives results.
              </p>
              <div >
                <span >15 min read</span>
                <Link
                  href="#"
                >
                  Read Guide →
                </Link>
              </div>
            </div>
            {/* Analytics & Reporting */}
            <div >
              <div >
                <div >
                  <svg
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
                <h3 >
                  Analytics & Reporting
                </h3>
              </div>
              <p >
                Master our analytics dashboard to track performance, measure ROI,
                and optimize your campaigns for better results.
              </p>
              <div >
                <span >10 min read</span>
                <Link
                  href="#"
                >
                  Read Guide →
                </Link>
              </div>
            </div>
            {/* Integrations */}
            <div >
              <div >
                <div >
                  <svg
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
                <h3 >
                  Integrations
                </h3>
              </div>
              <p >
                Connect Enclosed.AI with your favorite tools and platforms to
                streamline your workflow and maximize efficiency.
              </p>
              <div >
                <span >12 min read</span>
                <Link
                  href="#"
                >
                  Read Guide →
                </Link>
              </div>
            </div>
            {/* API Documentation */}
            <div >
              <div >
                <div >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 >
                  API Documentation
                </h3>
              </div>
              <p >
                Complete API reference with examples, authentication, and
                integration guides for developers.
              </p>
              <div >
                <span >20 min read</span>
                <Link
                  href="#"
                >
                  Read Guide →
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Best Practices */}
        <div >
          <h2 >
            Best Practices
          </h2>
          <div >
            {/* Design Guidelines */}
            <div >
              <div >
                <div >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                    />
                  </svg>
                </div>
                <h3 >
                  Design Guidelines
                </h3>
              </div>
              <p >
                Learn the principles of effective direct mail design, including
                layout, typography, and visual hierarchy.
              </p>
              <div >
                <span >18 min read</span>
                <Link
                  href="#"
                >
                  Read Guide →
                </Link>
              </div>
            </div>
            {/* Copywriting Tips */}
            <div >
              <div >
                <div >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </div>
                <h3 >
                  Copywriting Tips
                </h3>
              </div>
              <p >
                Master the art of persuasive copywriting for direct mail
                campaigns that convert prospects into customers.
              </p>
              <div >
                <span >14 min read</span>
                <Link
                  href="#"
                >
                  Read Guide →
                </Link>
              </div>
            </div>
            {/* A/B Testing */}
            <div >
              <div >
                <div >
                  <svg
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
                <h3 >
                  A/B Testing
                </h3>
              </div>
              <p >
                Learn how to test different elements of your campaigns to
                optimize performance and maximize ROI.
              </p>
              <div >
                <span >16 min read</span>
                <Link
                  href="#"
                >
                  Read Guide →
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Troubleshooting */}
        <div >
          <h2 >
            Troubleshooting
          </h2>
          <div >
            <div >
              {/* Common Issues */}
              <div>
                <h3 >
                  Common Issues
                </h3>
                <div >
                  <div >
                    <h4 >
                      Campaign not sending
                    </h4>
                    <p >
                      Check your account balance and payment method
                    </p>
                  </div>
                  <div >
                    <h4 >
                      Design not rendering correctly
                    </h4>
                    <p >
                      Ensure all images are properly uploaded and accessible
                    </p>
                  </div>
                  <div >
                    <h4 >
                      Analytics not updating
                    </h4>
                    <p >
                      Allow 24-48 hours for data to appear in reports
                    </p>
                  </div>
                </div>
              </div>
              {/* Contact Support */}
              <div>
                <h3 >
                  Need More Help?
                </h3>
                <p >
                  Can't find what you're looking for? Our support team is here to
                  help you succeed.
                </p>
                <div >
                  <Link
                    href="/contact"
                  >
                    Contact Support
                  </Link>
                  <Link
                    href="/community"
                  >
                    Ask Community
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CTA Section */}
        <div >
          <div >
            <div ></div>
            <div ></div>
            <div ></div>
          </div>
          <div >
            <h2 >
              Still Need Help?
            </h2>
            <p >
              Our support team is available 24/7 to help you succeed with
              Enclosed.AI. Get personalized assistance when you need it most.
            </p>
            <div >
              <Link
                href="/contact"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Contact Support
              </Link>
              <Link
                href="/community"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
                Join Community
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer >
        <div >
          <div >
            <div>
              <Logo
                size="md"
                showText={true}
                linkToHome={false}
              />
              <p >
                Direct mail marketing powered by artificial intelligence
              </p>
            </div>
            <div>
              <h3 >Product</h3>
              <ul >
                <li>
                  <Link
                    href="/features"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/integrations"
                  >
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/api"
                  >
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 >Company</h3>
              <ul >
                <li>
                  <Link
                    href="/about"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/team"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 >Support</h3>
              <ul >
                <li>
                  <Link
                    href="/help"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/community"
                  >
                    Community
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div >
            <p>&copy; 2024 Enclosed.AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}