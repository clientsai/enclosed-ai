import Link from "next/link";
import Logo from "@/components/Logo";
export const metadata = {
  title: "Community Forum - Enclosed.AI | Connect with Users & Get Support",
  description:
    "Join the Enclosed.AI community forum to connect with other users, share tips, get advice, and learn best practices for direct mail marketing.",
};
export default function CommunityPage() {
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
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <h1 >
              Community
              <span > Forum</span>
            </h1>
            <p >
              Connect with other Enclosed.AI users, share tips, get advice, and
              learn best practices for direct mail marketing success.
            </p>
            <div >
              <Link
                href="#forum"
              >
                Browse Discussions
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
                Get Support
              </Link>
            </div>
          </div>
        </div>
        {/* Forum Categories */}
        <div id="forum" >
          <h2 >
            Forum Categories
          </h2>
          <div >
            {/* Getting Started */}
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
                  Getting Started
                </h3>
              </div>
              <p >
                New to Enclosed.AI? Find tutorials, setup guides, and answers to
                common questions from fellow users.
              </p>
              <div >
                <span >24 topics</span>
                <Link
                  href="#"
                >
                  View Posts →
                </Link>
              </div>
            </div>
            {/* Best Practices */}
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
                <h3 >
                  Best Practices
                </h3>
              </div>
              <p >
                Share and discover proven strategies, tips, and techniques for
                maximizing your direct mail marketing results.
              </p>
              <div >
                <span >18 topics</span>
                <Link
                  href="#"
                >
                  View Posts →
                </Link>
              </div>
            </div>
            {/* Feature Requests */}
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
                      d="M7 11l5-5m0 0l5 5m-5-5v12"
                    />
                  </svg>
                </div>
                <h3 >
                  Feature Requests
                </h3>
              </div>
              <p >
                Suggest new features, vote on ideas, and help shape the future of
                Enclosed.AI based on your needs.
              </p>
              <div >
                <span >12 topics</span>
                <Link
                  href="#"
                >
                  View Posts →
                </Link>
              </div>
            </div>
            {/* Troubleshooting */}
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
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                </div>
                <h3 >
                  Troubleshooting
                </h3>
              </div>
              <p >
                Get help with technical issues, bugs, and problems you're
                experiencing with the platform.
              </p>
              <div >
                <span >8 topics</span>
                <Link
                  href="#"
                >
                  View Posts →
                </Link>
              </div>
            </div>
            {/* Success Stories */}
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 >
                  Success Stories
                </h3>
              </div>
              <p >
                Share your wins, celebrate achievements, and inspire others with
                your direct mail marketing success stories.
              </p>
              <div >
                <span >15 topics</span>
                <Link
                  href="#"
                >
                  View Posts →
                </Link>
              </div>
            </div>
            {/* General Discussion */}
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
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                </div>
                <h3 >
                  General Discussion
                </h3>
              </div>
              <p >
                Chat about anything related to direct mail marketing, industry
                trends, or just connect with the community.
              </p>
              <div >
                <span >32 topics</span>
                <Link
                  href="#"
                >
                  View Posts →
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Recent Activity */}
        <div >
          <h2 >
            Recent Activity
          </h2>
          <div >
            <div >
              {/* Sample Post 1 */}
              <div >
                <div >
                  <div >
                    <span >JD</span>
                  </div>
                  <div >
                    <div >
                      <h3 >
                        John Doe
                      </h3>
                      <span >2 hours ago</span>
                    </div>
                    <h4 >
                      Best practices for A/B testing direct mail campaigns?
                    </h4>
                    <p >
                      I'm looking to optimize my direct mail campaigns through
                      A/B testing. What are the most effective elements to test
                      and how should I structure my tests for meaningful results?
                    </p>
                    <div >
                      <span>5 replies</span>
                      <span>12 likes</span>
                      <span >Getting Started</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sample Post 2 */}
              <div >
                <div >
                  <div >
                    <span >SM</span>
                  </div>
                  <div >
                    <div >
                      <h3 >
                        Sarah Miller
                      </h3>
                      <span >5 hours ago</span>
                    </div>
                    <h4 >
                      Success: 300% ROI increase with personalized content
                    </h4>
                    <p >
                      Just wanted to share my recent success! By using
                      Enclosed.AI's personalization features, I increased my ROI
                      by 300% in just 3 months. The key was testing different
                      personalization levels...
                    </p>
                    <div >
                      <span>8 replies</span>
                      <span>24 likes</span>
                      <span >Success Stories</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sample Post 3 */}
              <div >
                <div >
                  <div >
                    <span >MR</span>
                  </div>
                  <div >
                    <div >
                      <h3 >
                        Mike Rodriguez
                      </h3>
                      <span >1 day ago</span>
                    </div>
                    <h4 >
                      Feature Request: Integration with Salesforce
                    </h4>
                    <p >
                      Would love to see native Salesforce integration for easier
                      lead management and campaign tracking. Anyone else
                      interested in this feature?
                    </p>
                    <div >
                      <span>12 replies</span>
                      <span>18 likes</span>
                      <span >Feature Requests</span>
                    </div>
                  </div>
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
              Ready to Join the Community?
            </h2>
            <p >
              Connect with fellow marketers, share your experiences, and learn
              from the collective wisdom of our growing community.
            </p>
            <div >
              <Link
                href="/auth/signup"
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
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  />
                </svg>
                Create Account
              </Link>
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
                Get Support
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