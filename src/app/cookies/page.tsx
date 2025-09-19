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
    <div >
      {/* Ambient background effects */}
      <GlowOrb color="accent" size="lg"  />
      <GlowOrb color="purple" size="default"  />
      {/* Navigation */}
      {/* Content */}
      <Section >
        <Container size="default">
          <Flex direction="col" gap={12}>
            <div >
              <Badge >Legal</Badge>
              <H1  gradient>Cookie Policy</H1>
              <Text size="xl" color="secondary" >
                This policy explains how Enclosed.AI uses cookies and similar technologies on our website.
              </Text>
              <Text size="sm" color="muted" >Last updated: March 15, 2024</Text>
            </div>
            <div >
              <H2>What Are Cookies</H2>
              <Text color="secondary" >
                Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and analyzing how you use our services.
              </Text>
              <H2>Types of Cookies We Use</H2>
              <H3>Essential Cookies</H3>
              <Text color="secondary" >
                These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt-out of these cookies.
              </Text>
              <ul >
                <li><Text><span >Authentication cookies:</span> Remember your login status</Text></li>
                <li><Text><span >Security cookies:</span> Protect against fraud and security threats</Text></li>
                <li><Text><span >Load balancing cookies:</span> Distribute traffic across our servers</Text></li>
              </ul>
              <H3>Analytics Cookies</H3>
              <Text color="secondary" >
                We use analytics cookies to understand how visitors interact with our website. This helps us improve our services and user experience.
              </Text>
              <ul >
                <li><Text><span >Google Analytics:</span> Tracks website usage and performance</Text></li>
                <li><Text><span >Mixpanel:</span> Analyzes user behavior and feature usage</Text></li>
                <li><Text><span >Hotjar:</span> Records user sessions for usability analysis</Text></li>
              </ul>
              <H3>Marketing Cookies</H3>
              <Text color="secondary" >
                These cookies track your online activity to help advertisers deliver more relevant advertising or to limit how many times you see an ad.
              </Text>
              <ul >
                <li><Text><span >Google Ads:</span> Tracks conversions and remarketing</Text></li>
                <li><Text><span >Facebook Pixel:</span> Measures advertising effectiveness</Text></li>
                <li><Text><span >LinkedIn Insight Tag:</span> Provides audience insights</Text></li>
              </ul>
              <H3>Functionality Cookies</H3>
              <Text color="secondary" >
                These cookies enable enhanced functionality and personalization, such as remembering your preferences and providing customized content.
              </Text>
              <ul >
                <li><Text><span >Preference cookies:</span> Remember your settings and choices</Text></li>
                <li><Text><span >Language cookies:</span> Store your language preference</Text></li>
                <li><Text><span >Theme cookies:</span> Remember your display preferences</Text></li>
              </ul>
              <H2>Third-Party Cookies</H2>
              <Text color="secondary" >
                Some cookies are placed by third-party services that appear on our pages. We do not control these cookies and recommend you check the privacy policies of these third parties.
              </Text>
              <H3>Third-Party Services We Use:</H3>
              <ul >
                <li><Text><span >Google Analytics:</span> Web analytics service</Text></li>
                <li><Text><span >Intercom:</span> Customer support and messaging</Text></li>
                <li><Text><span >Stripe:</span> Payment processing</Text></li>
                <li><Text><span >Salesforce:</span> Customer relationship management</Text></li>
                <li><Text><span >Zendesk:</span> Customer support ticketing</Text></li>
              </ul>
              <H2>Cookie Retention</H2>
              <Text color="secondary" >
                Different cookies have different lifespans:
              </Text>
              <ul >
                <li><Text><span >Session cookies:</span> Deleted when you close your browser</Text></li>
                <li><Text><span >Persistent cookies:</span> Remain for a set period (typically 30 days to 2 years)</Text></li>
                <li><Text><span >Authentication cookies:</span> Expire after 30 days of inactivity</Text></li>
                <li><Text><span >Preference cookies:</span> Stored for up to 1 year</Text></li>
              </ul>
              <H2>Managing Your Cookie Preferences</H2>
              <Text color="secondary" >
                You have several options for managing cookies:
              </Text>
              <H3>Browser Settings</H3>
              <Text color="secondary" >
                Most browsers allow you to control cookies through their settings. You can usually find these in the "Options" or "Preferences" menu of your browser.
              </Text>
              <H3>Cookie Consent Manager</H3>
              <Text color="secondary" >
                When you first visit our website, you'll see a cookie consent banner. You can manage your preferences by clicking on "Cookie Settings" or by accessing our cookie preference center.
              </Text>
              <H3>Opt-Out Tools</H3>
              <Text color="secondary" >
                You can opt out of certain third-party cookies using these tools:
              </Text>
              <ul >
                <li><Text><span >Google Analytics:</span> <a href="https://tools.google.com/dlpage/gaoptout" >Google Analytics Opt-out Browser Add-on</a></Text></li>
                <li><Text><span >Network Advertising Initiative:</span> <a href="http://optout.networkadvertising.org/" >NAI Opt-out Tool</a></Text></li>
                <li><Text><span >Digital Advertising Alliance:</span> <a href="http://optout.aboutads.info/" >DAA Opt-out Tool</a></Text></li>
              </ul>
              <H2>Impact of Disabling Cookies</H2>
              <Text color="secondary" >
                If you disable cookies, some features of our website may not function properly:
              </Text>
              <ul >
                <li><Text>You may need to log in repeatedly</Text></li>
                <li><Text>Your preferences may not be saved</Text></li>
                <li><Text>Some personalized features may not work</Text></li>
                <li><Text>Website performance analytics may be affected</Text></li>
              </ul>
              <H2>Mobile App Data</H2>
              <Text color="secondary" >
                Our mobile applications may use similar technologies to cookies, including:
              </Text>
              <ul >
                <li><Text><span >Device identifiers:</span> Unique identifiers for analytics</Text></li>
                <li><Text><span >Local storage:</span> Stores app preferences and data</Text></li>
                <li><Text><span >Push tokens:</span> Enables push notifications</Text></li>
                <li><Text><span >Analytics SDKs:</span> Third-party analytics tools</Text></li>
              </ul>
              <H2>Data Protection Rights</H2>
              <Text color="secondary" >
                Under applicable data protection laws, you have rights regarding your personal data:
              </Text>
              <ul >
                <li><Text><span >Access:</span> Request information about data processing</Text></li>
                <li><Text><span >Rectification:</span> Correct inaccurate personal data</Text></li>
                <li><Text><span >Erasure:</span> Request deletion of personal data</Text></li>
                <li><Text><span >Portability:</span> Receive your data in a machine-readable format</Text></li>
                <li><Text><span >Objection:</span> Object to certain types of processing</Text></li>
              </ul>
              <H2>Changes to This Policy</H2>
              <Text color="secondary" >
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date.
              </Text>
              <H2>Contact Us</H2>
              <Text color="secondary" >
                If you have any questions about this Cookie Policy or our use of cookies, please contact us:
              </Text>
              <ul >
                <li><Text><span >Email:</span> privacy@enclosed.ai</Text></li>
                <li><Text><span >Address:</span> 123 Innovation Drive, San Francisco, CA 94105</Text></li>
                <li><Text><span >Phone:</span> +1 (555) 123-4567</Text></li>
              </ul>
              <H2>Additional Resources</H2>
              <Text color="secondary" >
                For more information about cookies and privacy, visit:
              </Text>
              <ul >
                <li><Text><a href="https://allaboutcookies.org/" >All About Cookies</a></Text></li>
                <li><Text><a href="https://www.youronlinechoices.com/" >Your Online Choices</a></Text></li>
                <li><Text><a href="https://ico.org.uk/for-the-public/online/cookies/" >ICO Cookie Guidance</a></Text></li>
              </ul>
            </div>
          </Flex>
        </Container>
      </Section>
      {/* Footer */}
      <footer >
        <Container>
          <div >
            <div >
              <Logo showText size="sm"  />
              <Text size="sm" color="muted">
                Direct mail marketing powered by artificial intelligence
              </Text>
            </div>
            <Divider  />
            <Flex justify="between" align="center">
              <Text size="sm" color="muted">
                © 2024 Enclosed.AI. All rights reserved.
              </Text>
              <Flex gap={6}>
                <Text size="sm" color="muted" >
                  Privacy
                </Text>
                <Text size="sm" color="muted" >
                  Terms
                </Text>
                <Text size="sm" color="muted" >
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