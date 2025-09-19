import Link from "next/link";
import Logo from "@/components/Logo";
export const metadata = {
  title: "How to Create Your First Campaign - Enclosed.AI Help",
  description:
    "Step-by-step guide to creating and sending your first AI-powered direct mail campaign with Enclosed.AI.",
};
export default function CreateFirstCampaignPage() {
  return (
    <div >
      {/* Header */}
      <div >
        {/* Breadcrumb */}
        {/* Article Header */}
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
            <div>
              <span >
                Getting Started
              </span>
              <span >•</span>
              <span >8 min read</span>
            </div>
          </div>
          <h1 >
            How to Create Your First Campaign
          </h1>
          <p >
            Step-by-step guide to creating and sending your first AI-powered
            direct mail campaign. Get up and running in minutes.
          </p>
        </div>
        {/* Article Content */}
        <div >
          <div >
            <h2 >
              Prerequisites
            </h2>
            <p >
              Before creating your first campaign, ensure you have the following
              set up:
            </p>
            <ul >
              <li>An active Enclosed.AI account</li>
              <li>Sufficient credits in your account</li>
              <li>A recipient list (CSV file or CRM integration)</li>
              <li>Your business information and return address</li>
            </ul>
            <h2 >
              Step 1: Access the Campaign Builder
            </h2>
            <p >
              Navigate to the Campaigns section in your dashboard and click
              "Create New Campaign." You'll be taken to our intuitive campaign
              builder interface.
            </p>
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
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div >
                  <h3 >
                    Pro Tip
                  </h3>
                  <p >
                    Start with our template gallery to get inspiration and save
                    time on design. You can always customize templates to match
                    your brand.
                  </p>
                </div>
              </div>
            </div>
            <h2 >
              Step 2: Choose Your Campaign Type
            </h2>
            <p >
              Select the type of campaign that best fits your marketing goals:
            </p>
            <div >
              <div >
                <h3 >
                  Promotional
                </h3>
                <p >
                  Perfect for sales, discounts, and product announcements
                </p>
              </div>
              <div >
                <h3 >
                  Welcome Series
                </h3>
                <p >
                  Onboard new customers with personalized content
                </p>
              </div>
              <div >
                <h3 >
                  Follow-up
                </h3>
                <p >
                  Re-engage customers and nurture leads
                </p>
              </div>
            </div>
            <h2 >
              Step 3: Design Your Mail Piece
            </h2>
            <p >
              Use our AI-powered design tools to create compelling visuals that
              resonate with your audience:
            </p>
            <ol >
              <li>
                <strong>Upload your logo and brand assets</strong> - Ensure
                consistent branding across all materials
              </li>
              <li>
                <strong>Choose a layout</strong> - Select from our professional
                templates or start from scratch
              </li>
              <li>
                <strong>Add your content</strong> - Write compelling headlines
                and copy that drives action
              </li>
              <li>
                <strong>Include a clear call-to-action</strong> - Make it easy
                for recipients to respond
              </li>
            </ol>
            <h2 >
              Step 4: Configure Personalization
            </h2>
            <p >
              Set up dynamic content that adapts to each recipient using our AI
              personalization features:
            </p>
            <div >
              <h3 >
                Personalization Options
              </h3>
              <div >
                <div>
                  <h4 >
                    Basic Personalization
                  </h4>
                  <ul >
                    <li>• Recipient name and company</li>
                    <li>• Location-based content</li>
                    <li>• Industry-specific messaging</li>
                  </ul>
                </div>
                <div>
                  <h4 >
                    Advanced Personalization
                  </h4>
                  <ul >
                    <li>• Purchase history integration</li>
                    <li>• Behavioral triggers</li>
                    <li>• Custom product recommendations</li>
                  </ul>
                </div>
              </div>
            </div>
            <h2 >
              Step 5: Select Your Audience
            </h2>
            <p >
              Choose who will receive your campaign by selecting from your
              existing lists or creating a new segment:
            </p>
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 >
                    Upload CSV File
                  </h4>
                  <p >
                    Import your recipient list from a spreadsheet
                  </p>
                </div>
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
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                </div>
                <div>
                  <h4 >
                    Connect CRM
                  </h4>
                  <p >
                    Sync with Salesforce, HubSpot, or other CRM systems
                  </p>
                </div>
              </div>
            </div>
            <h2 >
              Step 6: Preview and Test
            </h2>
            <p >
              Before launching, preview your campaign and send test versions to
              ensure everything looks perfect:
            </p>
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
                <div >
                  <h3 >
                    Important
                  </h3>
                  <p >
                    Always send a test version to yourself and team members
                    before launching to catch any errors or design issues.
                  </p>
                </div>
              </div>
            </div>
            <h2 >
              Step 7: Launch Your Campaign
            </h2>
            <p >
              Once you're satisfied with your campaign, it's time to launch:
            </p>
            <ol >
              <li>
                <strong>Set your budget</strong> - Choose how many credits to
                allocate to this campaign
              </li>
              <li>
                <strong>Schedule delivery</strong> - Send immediately or schedule
                for a specific date
              </li>
              <li>
                <strong>Confirm and launch</strong> - Review all settings and
                click "Launch Campaign"
              </li>
              <li>
                <strong>Monitor performance</strong> - Track delivery and
                engagement in real-time
              </li>
            </ol>
            <h2 >
              Next Steps
            </h2>
            <p >
              After launching your first campaign, focus on these areas to
              maximize success:
            </p>
            <div >
              <div >
                <h3 >
                  Monitor Performance
                </h3>
                <ul >
                  <li>• Track delivery rates</li>
                  <li>• Monitor response rates</li>
                  <li>• Analyze engagement metrics</li>
                  <li>• Calculate ROI</li>
                </ul>
              </div>
              <div >
                <h3 >
                  Optimize Future Campaigns
                </h3>
                <ul >
                  <li>• A/B test different elements</li>
                  <li>• Refine your targeting</li>
                  <li>• Improve personalization</li>
                  <li>• Scale successful campaigns</li>
                </ul>
              </div>
            </div>
            <div >
              <h3 >
                Need Help Getting Started?
              </h3>
              <p >
                Our support team is here to help you create successful campaigns.
                Contact us for personalized assistance.
              </p>
              <div >
                <Link
                  href="/contact"
                >
                  Contact Support
                </Link>
                <Link
                  href="/help/getting-started"
                >
                  View Getting Started Guide
                </Link>
              </div>
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