import Link from "next/link";
import Logo from "@/components/Logo";
export const metadata = {
  title: "Blog - Enclosed.AI | Direct Mail Marketing Insights & Tips",
  description:
    "Stay updated with the latest insights, tips, and strategies for AI-powered direct mail marketing. Expert advice to maximize your campaign success.",
};
export default function BlogPage() {
  return (
    <div >
      {/* Header */}
      <div >
        {/* Hero Section */}
        <div >
          <h1 >
            Marketing
            <span > Insights</span>
          </h1>
          <p >
            Expert insights, tips, and strategies to help you master AI-powered
            direct mail marketing and achieve remarkable results.
          </p>
        </div>
        {/* Featured Article */}
        <section >
          <div >
            <div >
              <div>
                <div >
                  Featured Article
                </div>
                <h2 >
                  The Future of Direct Mail: How AI is Revolutionizing Marketing
                </h2>
                <p >
                  Discover how artificial intelligence is transforming direct
                  mail marketing, from personalized content generation to
                  predictive analytics and automated optimization.
                </p>
                <div >
                  <div >
                    <span >SM</span>
                  </div>
                  <div>
                    <div >Sarah Mitchell</div>
                    <div >
                      CEO, Enclosed.AI • Dec 15, 2024
                    </div>
                  </div>
                </div>
                <Link
                  href="#featured-article"
                >
                  Read Full Article →
                </Link>
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
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2z"
                    />
                  </svg>
                </div>
                <p >
                  Learn about the latest AI technologies and how they're being
                  applied to create more effective, personalized direct mail
                  campaigns that deliver exceptional results.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Blog Categories */}
        <section >
          <h2 >
            Browse by Category
          </h2>
          <div >
            <Link
              href="#strategy"
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
                Strategy
              </h3>
              <p >
                Marketing strategies and campaign planning
              </p>
            </Link>
            <Link
              href="#ai-technology"
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
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 >
                AI Technology
              </h3>
              <p >
                AI insights and technical deep dives
              </p>
            </Link>
            <Link
              href="#case-studies"
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 >
                Case Studies
              </h3>
              <p >
                Real success stories and results
              </p>
            </Link>
            <Link
              href="#tips-tricks"
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
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 >
                Tips & Tricks
              </h3>
              <p >
                Practical advice and best practices
              </p>
            </Link>
          </div>
        </section>
        {/* Recent Articles */}
        <section >
          <h2 >
            Recent Articles
          </h2>
          <div >
            {/* Article 1 */}
            <article >
              <div >
                <div >
                  <div >AI</div>
                  <div >Personalization</div>
                </div>
              </div>
              <div >
                <div >
                  AI Technology
                </div>
                <h3 >
                  5 Ways AI Personalization is Transforming Direct Mail
                </h3>
                <p >
                  Discover how AI personalization is revolutionizing direct mail
                  marketing, from dynamic content generation to predictive
                  targeting.
                </p>
                <div >
                  <Link
                    href="#ai-personalization"
                  >
                    Read More →
                  </Link>
                  <span >Dec 12, 2024</span>
                </div>
              </div>
            </article>
            {/* Article 2 */}
            <article >
              <div >
                <div >
                  <div >ROI</div>
                  <div >Optimization</div>
                </div>
              </div>
              <div >
                <div >
                  Strategy
                </div>
                <h3 >
                  Maximizing ROI: A Complete Guide to Direct Mail Analytics
                </h3>
                <p >
                  Learn how to track, measure, and optimize your direct mail
                  campaigns for maximum return on investment.
                </p>
                <div >
                  <Link
                    href="#roi-guide"
                  >
                    Read More →
                  </Link>
                  <span >Dec 10, 2024</span>
                </div>
              </div>
            </article>
            {/* Article 3 */}
            <article >
              <div >
                <div >
                  <div >B2B</div>
                  <div >Marketing</div>
                </div>
              </div>
              <div >
                <div >
                  Case Studies
                </div>
                <h3 >
                  How B2B Companies Are Winning with Direct Mail
                </h3>
                <p >
                  Real examples of B2B companies achieving remarkable results
                  with AI-powered direct mail campaigns.
                </p>
                <div >
                  <Link
                    href="#b2b-success"
                  >
                    Read More →
                  </Link>
                  <span >Dec 8, 2024</span>
                </div>
              </div>
            </article>
            {/* Article 4 */}
            <article >
              <div >
                <div >
                  <div >Tips</div>
                  <div >Best Practices</div>
                </div>
              </div>
              <div >
                <div >
                  Tips & Tricks
                </div>
                <h3 >
                  10 Direct Mail Mistakes That Kill Your Response Rates
                </h3>
                <p >
                  Avoid these common pitfalls that can sabotage your direct mail
                  campaigns and learn how to fix them.
                </p>
                <div >
                  <Link
                    href="#common-mistakes"
                  >
                    Read More →
                  </Link>
                  <span >Dec 5, 2024</span>
                </div>
              </div>
            </article>
            {/* Article 5 */}
            <article >
              <div >
                <div >
                  <div >Data</div>
                  <div >Analytics</div>
                </div>
              </div>
              <div >
                <div >
                  AI Technology
                </div>
                <h3 >
                  The Science Behind AI Content Generation
                </h3>
                <p >
                  A deep dive into how AI algorithms create compelling,
                  personalized content for direct mail campaigns.
                </p>
                <div >
                  <Link
                    href="#ai-science"
                  >
                    Read More →
                  </Link>
                  <span >Dec 3, 2024</span>
                </div>
              </div>
            </article>
            {/* Article 6 */}
            <article >
              <div >
                <div >
                  <div >Future</div>
                  <div >Trends</div>
                </div>
              </div>
              <div >
                <div >
                  Strategy
                </div>
                <h3 >
                  Direct Mail Trends to Watch in 2025
                </h3>
                <p >
                  Stay ahead of the curve with these emerging trends and
                  technologies shaping the future of direct mail marketing.
                </p>
                <div >
                  <Link
                    href="#2025-trends"
                  >
                    Read More →
                  </Link>
                  <span >Dec 1, 2024</span>
                </div>
              </div>
            </article>
          </div>
        </section>
        {/* Newsletter Signup */}
        <section >
          <div >
            <div >
              <h2 >
                Stay Updated
              </h2>
              <p >
                Get the latest insights, tips, and strategies delivered straight
                to your inbox. Join thousands of marketers who trust our
                expertise.
              </p>
              <div >
                <input
                  type="email"
                  placeholder="Enter your email address"
                />
                <button >
                  Subscribe
                </button>
              </div>
              <p >
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section >
          <h2 >
            Ready to Put These Insights into Action?
          </h2>
          <p >
            Start implementing these strategies with Enclosed.AI and see the
            results for yourself. Join thousands of successful marketers.
          </p>
          <div >
            <Link
              href="/auth/signup"
            >
              Start Free Trial
            </Link>
            <Link
              href="/case-studies"
            >
              View Case Studies
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