import Link from "next/link";
import Logo from "@/components/Logo";
export const metadata = {
  title: "API Documentation - Enclosed.AI | Developer Resources",
  description:
    "Access Enclosed.AI's powerful REST API to integrate direct mail marketing into your applications. Complete documentation, SDKs, and code examples.",
};
export default function APIPage() {
  return (
    <div >
      {/* Header */}
      <div >
        {/* Hero Section */}
        <div >
          <h1 >
            Developer
            <span > API</span>
          </h1>
          <p >
            Integrate Enclosed.AI's powerful direct mail capabilities into your
            applications with our comprehensive REST API. Build amazing
            experiences with our developer-friendly tools.
          </p>
        </div>
        {/* Quick Start */}
        <section >
          <div >
            <h2 >
              Quick Start
            </h2>
            <div >
              <div>
                <h3 >
                  Get Your API Key
                </h3>
                <div >
                  <pre >
                    {`curl -X POST https://api.enclosed.ai/v1/auth/token \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "your@email.com",
    "password": "your_password"
  }'`}
                  </pre>
                </div>
                <p >
                  Get your API key from the dashboard or use our authentication
                  endpoint to generate a token programmatically.
                </p>
                <Link
                  href="/auth/signup"
                >
                  Get API Key
                </Link>
              </div>
              <div>
                <h3 >
                  Send Your First Campaign
                </h3>
                <div >
                  <pre >
                    {`curl -X POST https://api.enclosed.ai/v1/campaigns \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "My First Campaign",
    "offer_type": "discount",
    "recipients": [
      {
        "first_name": "John",
        "last_name": "Doe",
        "address": "123 Main St",
        "city": "San Francisco",
        "state": "CA",
        "zip": "94105"
      }
    ]
  }'`}
                  </pre>
                </div>
                <p >
                  Create and send your first AI-powered direct mail campaign
                  with just a few lines of code.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* API Features */}
        <section >
          <h2 >
            API Features
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 >
                RESTful Design
              </h3>
              <p >
                Clean, intuitive REST API following industry best practices.
                Easy to understand and integrate with any programming language.
              </p>
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 >
                Comprehensive Documentation
              </h3>
              <p >
                Detailed documentation with interactive examples, code samples,
                and SDKs for all major programming languages.
              </p>
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
                Real-time Webhooks
              </h3>
              <p >
                Get instant notifications about campaign status, delivery
                updates, and performance metrics through webhooks.
              </p>
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
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h3 >
                Rate Limiting
              </h3>
              <p >
                Generous rate limits with clear headers and automatic retry
                logic. Scale your applications without worrying about API
                constraints.
              </p>
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
                Analytics & Reporting
              </h3>
              <p >
                Access detailed campaign analytics, performance metrics, and ROI
                data through our comprehensive reporting endpoints.
              </p>
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 >
                Developer Support
              </h3>
              <p >
                Dedicated developer support team, community forums, and
                comprehensive troubleshooting guides to help you succeed.
              </p>
            </div>
          </div>
        </section>
        {/* SDKs */}
        <section >
          <h2 >
            Official SDKs
          </h2>
          <div >
            <div >
              <div >🐍</div>
              <h3 >
                Python
              </h3>
              <p >
                pip install enclosed-ai
              </p>
              <Link
                href="#"
              >
                View Docs →
              </Link>
            </div>
            <div >
              <div >🟢</div>
              <h3 >
                Node.js
              </h3>
              <p >
                npm install @enclosed-ai/sdk
              </p>
              <Link
                href="#"
              >
                View Docs →
              </Link>
            </div>
            <div >
              <div >☕</div>
              <h3 >Java</h3>
              <p >Maven/Gradle support</p>
              <Link
                href="#"
              >
                View Docs →
              </Link>
            </div>
            <div >
              <div >🔷</div>
              <h3 >C#</h3>
              <p >NuGet package</p>
              <Link
                href="#"
              >
                View Docs →
              </Link>
            </div>
          </div>
        </section>
        {/* Code Examples */}
        <section >
          <h2 >
            Code Examples
          </h2>
          <div >
            <div >
              <h3 >
                Create a Campaign
              </h3>
              <div >
                <pre >
                  {`import { EnclosedAI } from '@enclosed-ai/sdk';
const client = new EnclosedAI('your-api-key');
const campaign = await client.campaigns.create({
  name: 'Holiday Sale Campaign',
  offer_type: 'discount',
  recipients: [
    {
      first_name: 'John',
      last_name: 'Doe',
      address: '123 Main St',
      city: 'San Francisco',
      state: 'CA',
      zip: '94105',
      email: 'john@example.com'
    }
  ],
  settings: {
    personalization_level: 'high',
    include_tracking: true
  }
});
console.log('Campaign created:', campaign.id);`}
                </pre>
              </div>
              <p >
                Create and configure a new direct mail campaign with AI-powered
                personalization.
              </p>
            </div>
            <div >
              <h3 >
                Track Performance
              </h3>
              <div >
                <pre >
                  {`import { EnclosedAI } from '@enclosed-ai/sdk';
const client = new EnclosedAI('your-api-key');
// Get campaign analytics
const analytics = await client.analytics.getCampaign('campaign-id');
console.log('Delivery rate:', analytics.delivery_rate);
console.log('Response rate:', analytics.response_rate);
console.log('ROI:', analytics.roi);
// Get real-time updates via webhook
client.webhooks.on('campaign.delivered', (data) => {
  console.log('Letter delivered:', data.recipient_id);
});`}
                </pre>
              </div>
              <p >
                Monitor campaign performance and receive real-time updates
                through our analytics API.
              </p>
            </div>
          </div>
        </section>
        {/* API Reference */}
        <section >
          <div >
            <h2 >
              API Reference
            </h2>
            <div >
              <p >
                Explore our complete API reference with interactive examples and
                detailed documentation for every endpoint.
              </p>
              <div >
                <div >
                  <h3 >
                    Authentication
                  </h3>
                  <p >
                    API keys, tokens, and security
                  </p>
                  <Link
                    href="#"
                  >
                    View Docs →
                  </Link>
                </div>
                <div >
                  <h3 >
                    Campaigns
                  </h3>
                  <p >
                    Create, manage, and track campaigns
                  </p>
                  <Link
                    href="#"
                  >
                    View Docs →
                  </Link>
                </div>
                <div >
                  <h3 >
                    Analytics
                  </h3>
                  <p >
                    Performance metrics and reporting
                  </p>
                  <Link
                    href="#"
                  >
                    View Docs →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section >
          <h2 >Ready to Start Building?</h2>
          <p >
            Get your API key and start integrating Enclosed.AI into your
            applications today. Join thousands of developers building the future
            of direct mail marketing.
          </p>
          <div >
            <Link
              href="/auth/signup"
            >
              Get API Key
            </Link>
            <Link
              href="/contact"
            >
              Developer Support
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