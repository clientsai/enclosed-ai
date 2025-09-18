import Link from "next/link";
import Logo from "@/components/Logo";
import {
  Section,
  Stack,
  Headline,
  Subhead,
  Prose,
  Card,
  Button,
} from "@/components/premium";

export const metadata = {
  title: "GDPR Compliance - Enclosed.AI | Data Protection & Privacy Rights",
  description:
    "Learn about Enclosed.AI's GDPR compliance measures and how we protect your personal data and privacy rights.",
};

export default function GDPRPage() {
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
              <Link href="/security" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Security</Link>
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
              <Headline level={1}>GDPR Compliance</Headline>
              <Subhead className="max-w-2xl mx-auto">
                How Enclosed.AI protects your personal data and ensures compliance with the General Data Protection Regulation.
              </Subhead>
              <p className="text-sm text-gray-600 mt-4">Last updated: March 15, 2024</p>
            </div>

            <Card className="p-8 bg-blue-50 border-blue-200">
              <Stack gap={4}>
                <Headline level={3} className="text-blue-900">Your Rights Under GDPR</Headline>
                <p className="text-blue-800">
                  As a data subject under GDPR, you have specific rights regarding your personal data. We are committed to honoring these rights and providing transparent data processing practices.
                </p>
                <Button size="sm" className="w-fit">Exercise Your Rights</Button>
              </Stack>
            </Card>

            <Prose>
              <h2>Our Commitment to GDPR Compliance</h2>
              <p>
                Enclosed.AI is committed to protecting your privacy and ensuring compliance with the General Data Protection Regulation (GDPR). We have implemented comprehensive measures to safeguard personal data and provide transparency in our data processing activities.
              </p>

              <h2>Legal Basis for Processing</h2>
              <p>
                We process personal data based on the following lawful bases under GDPR Article 6:
              </p>
              <ul>
                <li><strong>Consent (Article 6(1)(a)):</strong> When you provide explicit consent for specific processing activities</li>
                <li><strong>Contract (Article 6(1)(b)):</strong> To perform our services under the terms of service</li>
                <li><strong>Legal Obligation (Article 6(1)(c)):</strong> To comply with legal requirements</li>
                <li><strong>Legitimate Interests (Article 6(1)(f)):</strong> For business operations and service improvement</li>
              </ul>

              <h2>Data We Collect</h2>
              <p>
                We collect and process the following categories of personal data:
              </p>

              <h3>Account Information</h3>
              <ul>
                <li>Name and contact details</li>
                <li>Email address and phone number</li>
                <li>Company information</li>
                <li>Billing and payment information</li>
              </ul>

              <h3>Usage Data</h3>
              <ul>
                <li>Platform usage statistics</li>
                <li>Campaign performance data</li>
                <li>Feature utilization metrics</li>
                <li>Technical logs and analytics</li>
              </ul>

              <h3>Communication Data</h3>
              <ul>
                <li>Support ticket contents</li>
                <li>Email communications</li>
                <li>Feedback and survey responses</li>
                <li>Marketing preferences</li>
              </ul>

              <h2>Your GDPR Rights</h2>
              <p>
                Under GDPR, you have the following rights regarding your personal data:
              </p>

              <h3>Right of Access (Article 15)</h3>
              <p>
                You have the right to obtain confirmation of whether we process your personal data and, if so, access to that data along with specific information about the processing.
              </p>

              <h3>Right to Rectification (Article 16)</h3>
              <p>
                You can request correction of inaccurate personal data and completion of incomplete data.
              </p>

              <h3>Right to Erasure (Article 17)</h3>
              <p>
                You may request deletion of your personal data in certain circumstances, including when:
              </p>
              <ul>
                <li>The data is no longer necessary for the original purpose</li>
                <li>You withdraw consent and there's no other legal basis</li>
                <li>The data has been unlawfully processed</li>
                <li>Erasure is required for legal compliance</li>
              </ul>

              <h3>Right to Restrict Processing (Article 18)</h3>
              <p>
                You can request restriction of processing in specific situations, such as when you contest the accuracy of the data.
              </p>

              <h3>Right to Data Portability (Article 20)</h3>
              <p>
                You have the right to receive your personal data in a structured, commonly used, and machine-readable format and to transmit that data to another controller.
              </p>

              <h3>Right to Object (Article 21)</h3>
              <p>
                You can object to processing based on legitimate interests or for direct marketing purposes.
              </p>

              <h3>Right to Withdraw Consent</h3>
              <p>
                Where processing is based on consent, you have the right to withdraw that consent at any time.
              </p>

              <h2>How to Exercise Your Rights</h2>
              <p>
                To exercise any of your GDPR rights, please contact us using the following methods:
              </p>
              <ul>
                <li><strong>Email:</strong> gdpr@enclosed.ai</li>
                <li><strong>Data Protection Portal:</strong> Access through your account settings</li>
                <li><strong>Written Request:</strong> Mail to our data protection officer</li>
              </ul>

              <h3>Response Timeline</h3>
              <p>
                We will respond to your request within one month of receipt. In complex cases, we may extend this period by two additional months, with notification of the delay and reasons.
              </p>

              <h2>Data Processing Activities</h2>

              <h3>Customer Data</h3>
              <p>
                For our direct mail services, we process customer data as a data processor on behalf of our clients. Our clients remain the data controllers and are responsible for:
              </p>
              <ul>
                <li>Obtaining proper consent from data subjects</li>
                <li>Providing privacy notices</li>
                <li>Handling data subject requests</li>
                <li>Ensuring lawful processing basis</li>
              </ul>

              <h3>Employee Data</h3>
              <p>
                We process employee personal data for legitimate business purposes including:
              </p>
              <ul>
                <li>Employment administration</li>
                <li>Payroll and benefits management</li>
                <li>Performance management</li>
                <li>Legal compliance</li>
              </ul>

              <h2>Data Transfers</h2>
              <p>
                When transferring personal data outside the European Economic Area (EEA), we ensure adequate protection through:
              </p>
              <ul>
                <li><strong>Adequacy Decisions:</strong> Transfers to countries with adequate data protection</li>
                <li><strong>Standard Contractual Clauses:</strong> EU-approved contractual safeguards</li>
                <li><strong>Binding Corporate Rules:</strong> Internal data protection standards</li>
                <li><strong>Certification Schemes:</strong> Recognized data protection certifications</li>
              </ul>

              <h2>Data Retention</h2>
              <p>
                We retain personal data only as long as necessary for the purposes outlined in our privacy policy:
              </p>
              <ul>
                <li><strong>Account data:</strong> For the duration of your account plus 7 years for legal requirements</li>
                <li><strong>Usage data:</strong> Aggregated data may be retained indefinitely after anonymization</li>
                <li><strong>Communication data:</strong> Support tickets retained for 3 years</li>
                <li><strong>Marketing data:</strong> Until consent is withdrawn or 2 years of inactivity</li>
              </ul>

              <h2>Data Security Measures</h2>
              <p>
                We implement appropriate technical and organizational measures to protect personal data:
              </p>

              <h3>Technical Safeguards</h3>
              <ul>
                <li>End-to-end encryption for data in transit and at rest</li>
                <li>Multi-factor authentication for all accounts</li>
                <li>Regular security assessments and penetration testing</li>
                <li>Automated security monitoring and incident response</li>
              </ul>

              <h3>Organizational Measures</h3>
              <ul>
                <li>Regular staff training on data protection</li>
                <li>Strict access controls and need-to-know basis</li>
                <li>Data protection impact assessments</li>
                <li>Vendor due diligence and contractual protections</li>
              </ul>

              <h2>Data Breach Notification</h2>
              <p>
                In case of a data breach that poses risks to individuals' rights and freedoms, we will:
              </p>
              <ul>
                <li>Notify the relevant supervisory authority within 72 hours</li>
                <li>Inform affected individuals without undue delay if high risk exists</li>
                <li>Document all breaches and remediation measures</li>
                <li>Implement additional safeguards to prevent future incidents</li>
              </ul>

              <h2>Children's Privacy</h2>
              <p>
                Our services are not directed to children under 16 years of age. We do not knowingly collect personal data from children under 16 without parental consent. If we learn that we have collected such data, we will take steps to delete it promptly.
              </p>

              <h2>Supervisory Authority</h2>
              <p>
                You have the right to lodge a complaint with your local data protection supervisory authority if you believe we have not complied with GDPR requirements. You can find your local authority through the European Data Protection Board website.
              </p>

              <h2>Data Protection Officer</h2>
              <p>
                We have appointed a Data Protection Officer (DPO) to monitor compliance and serve as a contact point for data protection matters:
              </p>
              <ul>
                <li><strong>Email:</strong> dpo@enclosed.ai</li>
                <li><strong>Address:</strong> Data Protection Officer, Enclosed.AI, 123 Innovation Drive, San Francisco, CA 94105</li>
              </ul>

              <h2>Updates to This Notice</h2>
              <p>
                We may update this GDPR compliance notice to reflect changes in our practices or legal requirements. Material changes will be communicated through email notification or prominent website notice at least 30 days before taking effect.
              </p>

              <h2>Contact Information</h2>
              <p>
                For any questions about our GDPR compliance or to exercise your rights:
              </p>
              <ul>
                <li><strong>GDPR Requests:</strong> gdpr@enclosed.ai</li>
                <li><strong>General Privacy:</strong> privacy@enclosed.ai</li>
                <li><strong>Data Protection Officer:</strong> dpo@enclosed.ai</li>
                <li><strong>Legal Team:</strong> legal@enclosed.ai</li>
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