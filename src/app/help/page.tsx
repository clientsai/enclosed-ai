import Link from "next/link";
import Logo from "@/components/Logo";
export const metadata = {
  title: "Help Center - Enclosed.AI | Support & Documentation",
  description:
    "Get help with Enclosed.AI. Find tutorials, documentation, and support resources to maximize your direct mail marketing success.",
};
export default function HelpPage() {
  return (
    <div >
      {/* Header */}
      <div >
        {/* Hero Section */}
        <div >
          <h1 >
            Help
            <span > Center</span>
          </h1>
          <p >
            Find answers, tutorials, and resources to help you succeed with
            Enclosed.AI's direct mail marketing platform.
          </p>
        </div>
        {/* Search Bar */}
        <div >
          <div >
            <input
              type="text"
              placeholder="Search for help articles, tutorials, or FAQs..."
            />
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
        </div>
        {/* Quick Help Categories */}
        <section >
          <h2 >
            Quick Help
          </h2>
          <div >
            <Link
              href="/help/getting-started"
            >
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
                Getting Started
              </h3>
              <p >
                Learn the basics and create your first campaign
              </p>
            </Link>
            <Link
              href="/help/campaigns"
            >
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
                Campaigns
              </h3>
              <p >
                Create, manage, and optimize your campaigns
              </p>
            </Link>
            <Link
              href="/help/analytics"
            >
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
                Analytics
              </h3>
              <p >
                Track performance and measure success
              </p>
            </Link>
            <Link
              href="/help/billing"
            >
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
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h3 >
                Billing
              </h3>
              <p >
                Manage payments and account settings
              </p>
            </Link>
          </div>
        </section>
        {/* Popular Articles */}
        <section >
          <h2 >
            Popular Articles
          </h2>
          <div >
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div >
                  <h3 >
                    How to Create Your First Campaign
                  </h3>
                  <p >
                    Step-by-step guide to creating and sending your first
                    AI-powered direct mail campaign.
                  </p>
                  <Link
                    href="/help/articles/create-first-campaign"
                  >
                    Read Article →
                  </Link>
                </div>
              </div>
            </div>
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div >
                  <h3 >
                    Understanding AI Personalization
                  </h3>
                  <p >
                    Learn how our AI creates personalized content for each
                    recipient in your campaigns.
                  </p>
                  <Link
                    href="/help/articles/ai-personalization"
                  >
                    Read Article →
                  </Link>
                </div>
              </div>
            </div>
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
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                </div>
                <div >
                  <h3 >
                    Optimizing Campaign Performance
                  </h3>
                  <p >
                    Best practices for improving response rates and maximizing
                    ROI on your campaigns.
                  </p>
                  <Link
                    href="/help/articles/optimize-campaign-performance"
                  >
                    Read Article →
                  </Link>
                </div>
              </div>
            </div>
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
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                      />
                    </svg>
                  </div>
                </div>
                <div >
                  <h3 >
                    Managing Recipient Lists
                  </h3>
                  <p >
                    Tips for organizing, segmenting, and maintaining
                    high-quality recipient lists.
                  </p>
                  <Link
                    href="/help/articles/managing-recipient-lists"
                  >
                    Read Article →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Additional Resources */}
        <section >
          <h2 >
            Additional Resources
          </h2>
          <div >
            <Link
              href="/docs"
            >
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
              <h3 >
                Knowledge Base
              </h3>
              <p >
                Comprehensive documentation, tutorials, and best practices guides.
              </p>
              <span >
                Browse Docs →
              </span>
            </Link>
            <Link
              href="/community"
            >
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 >
                Community Forum
              </h3>
              <p >
                Connect with other users, share tips, and get advice from the community.
              </p>
              <span >
                Join Community →
              </span>
            </Link>
            <Link
              href="/demo"
            >
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 >
                Schedule Demo
              </h3>
              <p >
                Book a personalized demo to see how Enclosed.AI can work for your business.
              </p>
              <span >
                Book Demo →
              </span>
            </Link>
          </div>
        </section>
        {/* Contact Support */}
        <section >
          <h2 >Still Need Help?</h2>
          <p >
            Can't find what you're looking for? Our support team is here to help
            you succeed with your direct mail campaigns.
          </p>
          <div >
            <Link
              href="/contact"
            >
              Contact Support
            </Link>
            <Link
              href="/faq"
            >
              View FAQ
            </Link>
          </div>
        </section>
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
                    href="/privacy"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                  >
                    Terms of Service
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