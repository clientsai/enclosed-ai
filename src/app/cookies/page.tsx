import Link from "next/link";
import Logo from "@/components/Logo";
import {
  Container,
  Section,
  Flex,
  H1,
  H2,
  H3,
  Text,
  Button,
  Nav,
  NavLink,
  GlowOrb,
  Divider,
  Badge,
} from "@/components/ui";
export const metadata = {
  title: "Cookie Policy - Enclosed.AI | How We Use Cookies",
  description:
    "Learn about how Enclosed.AI uses cookies to improve your experience and provide personalized services.",
};
export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Ambient background effects */}
      <GlowOrb color="accent" size="lg" className="top-1/4 -left-32" />
      <GlowOrb color="purple" size="default" className="bottom-1/4 right-0" />
      {/* Navigation */}
      {/* Content */}
      <Section className="pt-24">
        <Container size="default">
          <Flex direction="col" gap={12}>
            <div className="text-center">
              <Badge className="mb-4">Legal</Badge>
              <H1 className="mb-4" gradient>Cookie Policy</H1>
              <Text size="xl" color="secondary" className="max-w-2xl mx-auto">
                This policy explains how Enclosed.AI uses cookies and similar technologies on our website.
              </Text>
              <Text size="sm" color="muted" className="mt-4">Last updated: March 15, 2024</Text>
            </div>
            <div className="prose prose-invert max-w-none">
              <H2>What Are Cookies</H2>
              <Text color="secondary" className="mb-6">
                Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and analyzing how you use our services.
              </Text>
              <H2>Types of Cookies We Use</H2>
              <H3>Essential Cookies</H3>
              <Text color="secondary" className="mb-4">
                These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt-out of these cookies.
              </Text>
              <ul className="space-y-2 mb-6">
                <li><Text><span className="font-semibold text-white">Authentication cookies:</span> Remember your login status</Text></li>
                <li><Text><span className="font-semibold text-white">Security cookies:</span> Protect against fraud and security threats</Text></li>
                <li><Text><span className="font-semibold text-white">Load balancing cookies:</span> Distribute traffic across our servers</Text></li>
              </ul>
              <H3>Analytics Cookies</H3>
              <Text color="secondary" className="mb-4">
                We use analytics cookies to understand how visitors interact with our website. This helps us improve our services and user experience.
              </Text>
              <ul className="space-y-2 mb-6">
                <li><Text><span className="font-semibold text-white">Google Analytics:</span> Tracks website usage and performance</Text></li>
                <li><Text><span className="font-semibold text-white">Mixpanel:</span> Analyzes user behavior and feature usage</Text></li>
                <li><Text><span className="font-semibold text-white">Hotjar:</span> Records user sessions for usability analysis</Text></li>
              </ul>
              <H3>Marketing Cookies</H3>
              <Text color="secondary" className="mb-4">
                These cookies track your online activity to help advertisers deliver more relevant advertising or to limit how many times you see an ad.
              </Text>
              <ul className="space-y-2 mb-6">
                <li><Text><span className="font-semibold text-white">Google Ads:</span> Tracks conversions and remarketing</Text></li>
                <li><Text><span className="font-semibold text-white">Facebook Pixel:</span> Measures advertising effectiveness</Text></li>
                <li><Text><span className="font-semibold text-white">LinkedIn Insight Tag:</span> Provides audience insights</Text></li>
              </ul>
              <H3>Functionality Cookies</H3>
              <Text color="secondary" className="mb-4">
                These cookies enable enhanced functionality and personalization, such as remembering your preferences and providing customized content.
              </Text>
              <ul className="space-y-2 mb-6">
                <li><Text><span className="font-semibold text-white">Preference cookies:</span> Remember your settings and choices</Text></li>
                <li><Text><span className="font-semibold text-white">Language cookies:</span> Store your language preference</Text></li>
                <li><Text><span className="font-semibold text-white">Theme cookies:</span> Remember your display preferences</Text></li>
              </ul>
              <H2>Third-Party Cookies</H2>
              <Text color="secondary" className="mb-4">
                Some cookies are placed by third-party services that appear on our pages. We do not control these cookies and recommend you check the privacy policies of these third parties.
              </Text>
              <H3>Third-Party Services We Use:</H3>
              <ul className="space-y-2 mb-6">
                <li><Text><span className="font-semibold text-white">Google Analytics:</span> Web analytics service</Text></li>
                <li><Text><span className="font-semibold text-white">Intercom:</span> Customer support and messaging</Text></li>
                <li><Text><span className="font-semibold text-white">Stripe:</span> Payment processing</Text></li>
                <li><Text><span className="font-semibold text-white">Salesforce:</span> Customer relationship management</Text></li>
                <li><Text><span className="font-semibold text-white">Zendesk:</span> Customer support ticketing</Text></li>
              </ul>
              <H2>Cookie Retention</H2>
              <Text color="secondary" className="mb-4">
                Different cookies have different lifespans:
              </Text>
              <ul className="space-y-2 mb-6">
                <li><Text><span className="font-semibold text-white">Session cookies:</span> Deleted when you close your browser</Text></li>
                <li><Text><span className="font-semibold text-white">Persistent cookies:</span> Remain for a set period (typically 30 days to 2 years)</Text></li>
                <li><Text><span className="font-semibold text-white">Authentication cookies:</span> Expire after 30 days of inactivity</Text></li>
                <li><Text><span className="font-semibold text-white">Preference cookies:</span> Stored for up to 1 year</Text></li>
              </ul>
              <H2>Managing Your Cookie Preferences</H2>
              <Text color="secondary" className="mb-4">
                You have several options for managing cookies:
              </Text>
              <H3>Browser Settings</H3>
              <Text color="secondary" className="mb-6">
                Most browsers allow you to control cookies through their settings. You can usually find these in the "Options" or "Preferences" menu of your browser.
              </Text>
              <H3>Cookie Consent Manager</H3>
              <Text color="secondary" className="mb-6">
                When you first visit our website, you'll see a cookie consent banner. You can manage your preferences by clicking on "Cookie Settings" or by accessing our cookie preference center.
              </Text>
              <H3>Opt-Out Tools</H3>
              <Text color="secondary" className="mb-4">
                You can opt out of certain third-party cookies using these tools:
              </Text>
              <ul className="space-y-2 mb-6">
                <li><Text><span className="font-semibold text-white">Google Analytics:</span> <a href="https://tools.google.com/dlpage/gaoptout" className="text-[var(--accent)] hover:underline">Google Analytics Opt-out Browser Add-on</a></Text></li>
                <li><Text><span className="font-semibold text-white">Network Advertising Initiative:</span> <a href="http://optout.networkadvertising.org/" className="text-[var(--accent)] hover:underline">NAI Opt-out Tool</a></Text></li>
                <li><Text><span className="font-semibold text-white">Digital Advertising Alliance:</span> <a href="http://optout.aboutads.info/" className="text-[var(--accent)] hover:underline">DAA Opt-out Tool</a></Text></li>
              </ul>
              <H2>Impact of Disabling Cookies</H2>
              <Text color="secondary" className="mb-4">
                If you disable cookies, some features of our website may not function properly:
              </Text>
              <ul className="space-y-2 mb-6">
                <li><Text>You may need to log in repeatedly</Text></li>
                <li><Text>Your preferences may not be saved</Text></li>
                <li><Text>Some personalized features may not work</Text></li>
                <li><Text>Website performance analytics may be affected</Text></li>
              </ul>
              <H2>Mobile App Data</H2>
              <Text color="secondary" className="mb-4">
                Our mobile applications may use similar technologies to cookies, including:
              </Text>
              <ul className="space-y-2 mb-6">
                <li><Text><span className="font-semibold text-white">Device identifiers:</span> Unique identifiers for analytics</Text></li>
                <li><Text><span className="font-semibold text-white">Local storage:</span> Stores app preferences and data</Text></li>
                <li><Text><span className="font-semibold text-white">Push tokens:</span> Enables push notifications</Text></li>
                <li><Text><span className="font-semibold text-white">Analytics SDKs:</span> Third-party analytics tools</Text></li>
              </ul>
              <H2>Data Protection Rights</H2>
              <Text color="secondary" className="mb-4">
                Under applicable data protection laws, you have rights regarding your personal data:
              </Text>
              <ul className="space-y-2 mb-6">
                <li><Text><span className="font-semibold text-white">Access:</span> Request information about data processing</Text></li>
                <li><Text><span className="font-semibold text-white">Rectification:</span> Correct inaccurate personal data</Text></li>
                <li><Text><span className="font-semibold text-white">Erasure:</span> Request deletion of personal data</Text></li>
                <li><Text><span className="font-semibold text-white">Portability:</span> Receive your data in a machine-readable format</Text></li>
                <li><Text><span className="font-semibold text-white">Objection:</span> Object to certain types of processing</Text></li>
              </ul>
              <H2>Changes to This Policy</H2>
              <Text color="secondary" className="mb-6">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date.
              </Text>
              <H2>Contact Us</H2>
              <Text color="secondary" className="mb-4">
                If you have any questions about this Cookie Policy or our use of cookies, please contact us:
              </Text>
              <ul className="space-y-2 mb-6">
                <li><Text><span className="font-semibold text-white">Email:</span> privacy@enclosed.ai</Text></li>
                <li><Text><span className="font-semibold text-white">Address:</span> 123 Innovation Drive, San Francisco, CA 94105</Text></li>
                <li><Text><span className="font-semibold text-white">Phone:</span> +1 (555) 123-4567</Text></li>
              </ul>
              <H2>Additional Resources</H2>
              <Text color="secondary" className="mb-4">
                For more information about cookies and privacy, visit:
              </Text>
              <ul className="space-y-2 mb-6">
                <li><Text><a href="https://allaboutcookies.org/" className="text-[var(--accent)] hover:underline">All About Cookies</a></Text></li>
                <li><Text><a href="https://www.youronlinechoices.com/" className="text-[var(--accent)] hover:underline">Your Online Choices</a></Text></li>
                <li><Text><a href="https://ico.org.uk/for-the-public/online/cookies/" className="text-[var(--accent)] hover:underline">ICO Cookie Guidance</a></Text></li>
              </ul>
            </div>
          </Flex>
        </Container>
      </Section>
      {/* Footer */}
      <footer className="border-t border-white/5 mt-24">
        <Container>
          <div className="py-12">
            <div className="text-center">
              <Logo showText size="sm" className="mb-4" />
              <Text size="sm" color="muted">
                Direct mail marketing powered by artificial intelligence
              </Text>
            </div>
            <Divider className="my-8" />
            <Flex justify="between" align="center">
              <Text size="sm" color="muted">
                © 2024 Enclosed.AI. All rights reserved.
              </Text>
              <Flex gap={6}>
                <Text size="sm" color="muted" className="hover:text-white transition-colors cursor-pointer">
                  Privacy
                </Text>
                <Text size="sm" color="muted" className="hover:text-white transition-colors cursor-pointer">
                  Terms
                </Text>
                <Text size="sm" color="muted" className="hover:text-white transition-colors cursor-pointer">
                  Cookies
                </Text>
              </Flex>
            </Flex>
          </div>
        </Container>
      </footer>
    </div>
  );
}