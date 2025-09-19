import Link from "next/link";
import Logo from "@/components/Logo";
export const metadata = {
  title: "Integrations - Enclosed.AI | Connect Your Marketing Flex",
  description:
    "Integrate Enclosed.AI with your existing marketing tools and CRM systems. Seamless connections with Salesforce, HubSpot, Mailchimp, and more.",
};
export default function IntegrationsPage() {
  return (
    <div >
      {/* Header */}
      <div >
        {/* Hero Section */}
        <div >
          <h1 >
            Powerful
            <span > Integrations</span>
          </h1>
          <p >
            Connect Enclosed.AI with your existing marketing stack and business
            tools. Seamlessly sync data, automate workflows, and create unified
            marketing experiences.
          </p>
        </div>
        {/* CRM Integrations */}
        <section >
          <h2 >
            CRM Integrations
          </h2>
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 >
                Salesforce
              </h3>
              <p >
                Sync contacts, leads, and opportunities directly with
                Salesforce. Automatically trigger direct mail campaigns based on
                CRM activities and lead scores.
              </p>
              <ul >
                <li>• Two-way contact synchronization</li>
                <li>• Text scoring integration</li>
                <li>• Campaign attribution tracking</li>
                <li>• Custom field mapping</li>
              </ul>
              <Link
                href="/contact"
              >
                Learn More →
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 >
                HubSpot
              </h3>
              <p >
                Integrate with HubSpot's marketing automation platform. Create
                sophisticated workflows that combine email and direct mail for
                maximum impact.
              </p>
              <ul >
                <li>• Contact list synchronization</li>
                <li>• Workflow automation triggers</li>
                <li>• Text nurturing sequences</li>
                <li>• ROI tracking and reporting</li>
              </ul>
              <Link
                href="/contact"
              >
                Learn More →
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 >
                Pipedrive
              </h3>
              <p >
                Connect with Pipedrive's sales-focused CRM. Automatically send
                follow-up mail pieces based on deal stages and sales activities.
              </p>
              <ul >
                <li>• Deal stage automation</li>
                <li>• Contact import/export</li>
                <li>• Sales activity tracking</li>
                <li>• Pipeline reporting</li>
              </ul>
              <Link
                href="/contact"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </section>
        {/* Email Marketing Integrations */}
        <section >
          <h2 >
            Email Marketing Platforms
          </h2>
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
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 >
                Mailchimp
              </h3>
              <p >
                Sync your Mailchimp audiences with Enclosed.AI for coordinated
                email and direct mail campaigns that reinforce your message.
              </p>
              <ul >
                <li>• Audience synchronization</li>
                <li>• Campaign coordination</li>
                <li>• Segment-based targeting</li>
                <li>• Cross-channel analytics</li>
              </ul>
              <Link
                href="/contact"
              >
                Learn More →
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
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 >
                Constant Contact
              </h3>
              <p >
                Integrate with Constant Contact to create powerful multi-channel
                marketing campaigns that reach customers through both digital
                and physical channels.
              </p>
              <ul >
                <li>• Contact list sharing</li>
                <li>• Campaign automation</li>
                <li>• Performance tracking</li>
                <li>• A/B testing coordination</li>
              </ul>
              <Link
                href="/contact"
              >
                Learn More →
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
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 >
                SendGrid
              </h3>
              <p >
                Connect with SendGrid's email platform to create comprehensive
                marketing strategies that combine transactional emails with
                direct mail follow-ups.
              </p>
              <ul >
                <li>• Event-based triggers</li>
                <li>• Customer journey mapping</li>
                <li>• Deliverability optimization</li>
                <li>• Cross-platform analytics</li>
              </ul>
              <Link
                href="/contact"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </section>
        {/* Analytics & Tracking */}
        <section >
          <h2 >
            Analytics & Tracking
          </h2>
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
                Google Analytics
              </h3>
              <p >
                Track the complete customer journey from direct mail to website
                conversion. Measure ROI and optimize campaigns based on
                comprehensive analytics data.
              </p>
              <ul >
                <li>• UTM parameter tracking</li>
                <li>• Conversion attribution</li>
                <li>• Customer journey mapping</li>
                <li>• ROI measurement</li>
              </ul>
              <Link
                href="/contact"
              >
                Learn More →
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 >
                Mixpanel
              </h3>
              <p >
                Advanced event tracking and user behavior analysis. Understand
                how direct mail campaigns influence user actions and engagement
                patterns.
              </p>
              <ul >
                <li>• Event tracking</li>
                <li>• User behavior analysis</li>
                <li>• Funnel optimization</li>
                <li>• Cohort analysis</li>
              </ul>
              <Link
                href="/contact"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </section>
        {/* API & Custom Integrations */}
        <section >
          <div >
            <h2 >
              API & Custom Integrations
            </h2>
            <div >
              <p >
                Don't see your preferred tool? Our robust API and custom
                integration services make it easy to connect Enclosed.AI with
                any system in your tech stack.
              </p>
              <div >
                <div >
                  <h3 >
                    REST API
                  </h3>
                  <p >
                    Full-featured REST API with comprehensive documentation,
                    SDKs, and code examples for all major programming languages.
                  </p>
                  <ul >
                    <li>• Campaign management endpoints</li>
                    <li>• Contact and list management</li>
                    <li>• Real-time analytics data</li>
                    <li>• Webhook support</li>
                    <li>• Rate limiting and authentication</li>
                  </ul>
                </div>
                <div >
                  <h3 >
                    Custom Integrations
                  </h3>
                  <p >
                    Our integration specialists can build custom connections to
                    any system, ensuring seamless data flow and optimal
                    performance.
                  </p>
                  <ul >
                    <li>• Custom connector development</li>
                    <li>• Data mapping and transformation</li>
                    <li>• Real-time synchronization</li>
                    <li>• Error handling and monitoring</li>
                    <li>• Ongoing support and maintenance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section >
          <h2 >
            Ready to Connect Your Tools?
          </h2>
          <p >
            Start integrating Enclosed.AI with your existing marketing stack
            today. Our team is here to help you set up seamless connections.
          </p>
          <div >
            <Link
              href="/contact"
            >
              Get Integration Help
            </Link>
            <Link
              href="/auth/signup"
            >
              Start Free Trial
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