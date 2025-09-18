import Link from "next/link";
import Logo from "@/components/Logo";
import {
  Section,
  Stack,
  Headline,
  Subhead,
  Prose,
} from "@/components/premium";

export const metadata = {
  title: "Cookie Policy - Enclosed.AI | How We Use Cookies",
  description:
    "Learn about how Enclosed.AI uses cookies to improve your experience and provide personalized services.",
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Logo size="md" />
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
              <Link href="/features" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Features</Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/auth/login" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Sign In</Link>
              <Link href="/auth/signup" className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">Get Started</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <Stack gap={8}>
            <div className="text-center">
              <Headline level={1}>Cookie Policy</Headline>
              <Subhead className="max-w-2xl mx-auto">
                This policy explains how Enclosed.AI uses cookies and similar technologies on our website.
              </Subhead>
              <p className="text-sm text-gray-600 mt-4">Last updated: March 15, 2024</p>
            </div>

            <Prose>
              <h2>What Are Cookies</h2>
              <p>
                Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and analyzing how you use our services.
              </p>

              <h2>Types of Cookies We Use</h2>

              <h3>Essential Cookies</h3>
              <p>
                These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt-out of these cookies.
              </p>
              <ul>
                <li><strong>Authentication cookies:</strong> Remember your login status</li>
                <li><strong>Security cookies:</strong> Protect against fraud and security threats</li>
                <li><strong>Load balancing cookies:</strong> Distribute traffic across our servers</li>
              </ul>

              <h3>Analytics Cookies</h3>
              <p>
                We use analytics cookies to understand how visitors interact with our website. This helps us improve our services and user experience.
              </p>
              <ul>
                <li><strong>Google Analytics:</strong> Tracks website usage and performance</li>
                <li><strong>Mixpanel:</strong> Analyzes user behavior and feature usage</li>
                <li><strong>Hotjar:</strong> Records user sessions for usability analysis</li>
              </ul>

              <h3>Marketing Cookies</h3>
              <p>
                These cookies track your online activity to help advertisers deliver more relevant advertising or to limit how many times you see an ad.
              </p>
              <ul>
                <li><strong>Google Ads:</strong> Tracks conversions and remarketing</li>
                <li><strong>Facebook Pixel:</strong> Measures advertising effectiveness</li>
                <li><strong>LinkedIn Insight Tag:</strong> Provides audience insights</li>
              </ul>

              <h3>Functionality Cookies</h3>
              <p>
                These cookies enable enhanced functionality and personalization, such as remembering your preferences and providing customized content.
              </p>
              <ul>
                <li><strong>Preference cookies:</strong> Remember your settings and choices</li>
                <li><strong>Language cookies:</strong> Store your language preference</li>
                <li><strong>Theme cookies:</strong> Remember your display preferences</li>
              </ul>

              <h2>Third-Party Cookies</h2>
              <p>
                Some cookies are placed by third-party services that appear on our pages. We do not control these cookies and recommend you check the privacy policies of these third parties.
              </p>

              <h3>Third-Party Services We Use:</h3>
              <ul>
                <li><strong>Google Analytics:</strong> Web analytics service</li>
                <li><strong>Intercom:</strong> Customer support and messaging</li>
                <li><strong>Stripe:</strong> Payment processing</li>
                <li><strong>Salesforce:</strong> Customer relationship management</li>
                <li><strong>Zendesk:</strong> Customer support ticketing</li>
              </ul>

              <h2>Cookie Retention</h2>
              <p>
                Different cookies have different lifespans:
              </p>
              <ul>
                <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent cookies:</strong> Remain for a set period (typically 30 days to 2 years)</li>
                <li><strong>Authentication cookies:</strong> Expire after 30 days of inactivity</li>
                <li><strong>Preference cookies:</strong> Stored for up to 1 year</li>
              </ul>

              <h2>Managing Your Cookie Preferences</h2>
              <p>
                You have several options for managing cookies:
              </p>

              <h3>Browser Settings</h3>
              <p>
                Most browsers allow you to control cookies through their settings. You can usually find these in the "Options" or "Preferences" menu of your browser.
              </p>

              <h3>Cookie Consent Manager</h3>
              <p>
                When you first visit our website, you'll see a cookie consent banner. You can manage your preferences by clicking on "Cookie Settings" or by accessing our cookie preference center.
              </p>

              <h3>Opt-Out Tools</h3>
              <p>
                You can opt out of certain third-party cookies using these tools:
              </p>
              <ul>
                <li><strong>Google Analytics:</strong> <a href="https://tools.google.com/dlpage/gaoptout">Google Analytics Opt-out Browser Add-on</a></li>
                <li><strong>Network Advertising Initiative:</strong> <a href="http://optout.networkadvertising.org/">NAI Opt-out Tool</a></li>
                <li><strong>Digital Advertising Alliance:</strong> <a href="http://optout.aboutads.info/">DAA Opt-out Tool</a></li>
              </ul>

              <h2>Impact of Disabling Cookies</h2>
              <p>
                If you disable cookies, some features of our website may not function properly:
              </p>
              <ul>
                <li>You may need to log in repeatedly</li>
                <li>Your preferences may not be saved</li>
                <li>Some personalized features may not work</li>
                <li>Website performance analytics may be affected</li>
              </ul>

              <h2>Mobile App Data</h2>
              <p>
                Our mobile applications may use similar technologies to cookies, including:
              </p>
              <ul>
                <li><strong>Device identifiers:</strong> Unique identifiers for analytics</li>
                <li><strong>Local storage:</strong> Stores app preferences and data</li>
                <li><strong>Push tokens:</strong> Enables push notifications</li>
                <li><strong>Analytics SDKs:</strong> Third-party analytics tools</li>
              </ul>

              <h2>Data Protection Rights</h2>
              <p>
                Under applicable data protection laws, you have rights regarding your personal data:
              </p>
              <ul>
                <li><strong>Access:</strong> Request information about data processing</li>
                <li><strong>Rectification:</strong> Correct inaccurate personal data</li>
                <li><strong>Erasure:</strong> Request deletion of personal data</li>
                <li><strong>Portability:</strong> Receive your data in a machine-readable format</li>
                <li><strong>Objection:</strong> Object to certain types of processing</li>
              </ul>

              <h2>Changes to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Cookie Policy or our use of cookies, please contact us:
              </p>
              <ul>
                <li><strong>Email:</strong> privacy@enclosed.ai</li>
                <li><strong>Address:</strong> 123 Innovation Drive, San Francisco, CA 94105</li>
                <li><strong>Phone:</strong> +1 (555) 123-4567</li>
              </ul>

              <h2>Additional Resources</h2>
              <p>
                For more information about cookies and privacy, visit:
              </p>
              <ul>
                <li><a href="https://allaboutcookies.org/">All About Cookies</a></li>
                <li><a href="https://www.youronlinechoices.com/">Your Online Choices</a></li>
                <li><a href="https://ico.org.uk/for-the-public/online/cookies/">ICO Cookie Guidance</a></li>
              </ul>
            </Prose>
          </Stack>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <Section>
          <div className="text-center">
            <Logo size="md" showText={true} linkToHome={false} className="text-white [&>div>span]:text-white mb-4" />
            <p className="text-gray-400 text-sm">Direct mail marketing powered by artificial intelligence</p>
          </div>
        </Section>
      </footer>
    </div>
  );
}