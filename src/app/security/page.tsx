/* Security & Compliance - Enterprise-Grade Protection */
import Link from "next/link";
import {
  Section,
  Grid,
  Stack,
  Cluster,
  Headline,
  Subhead,
  Lead,
  Eyebrow,
  Button,
  Card,
  Badge,
  Accordion,
} from "@/components/premium";
import Logo from "@/components/Logo";

export const metadata = {
  title: "Security & Compliance - Enterprise-Grade Protection | Enclosed.AI",
  description: "Bank-level security and comprehensive compliance. SOC 2 Type II certified, GDPR compliant, HIPAA ready. Learn how we protect your data.",
};

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <Section className="py-0">
          <div className="flex justify-between items-center h-16">
            <Logo size="md" />
            <nav className="hidden md:flex">
              <Cluster gap={2}>
                <Link href="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/features" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Features
                </Link>
                <Link href="/pricing" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Pricing
                </Link>
                <Link href="/security" className="text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Security
                </Link>
              </Cluster>
            </nav>
            <Cluster gap={2}>
              <Button as={Link} href="/auth/login" variant="ghost" size="sm">
                Sign In
              </Button>
              <Button as={Link} href="/auth/signup" size="sm">
                Get Started
              </Button>
            </Cluster>
          </div>
        </Section>
      </header>

      {/* Hero Section */}
      <Section className="bg-gray-50">
        <Stack gap={8} align="center" className="text-center">
          <Eyebrow>Security & Compliance</Eyebrow>
          <Headline level={1} className="max-w-4xl">
            Bank-Level Security for Your
            <span className="block">Most Sensitive Data</span>
          </Headline>
          <Lead className="max-w-3xl">
            Enclosed.AI is built on a foundation of security-first architecture. We protect your customer
            data with military-grade encryption, comprehensive compliance certifications, and industry-leading
            security practices. Your trust is our highest priority.
          </Lead>
          <div className="flex flex-wrap gap-4 justify-center">
            <Badge>SOC 2 Type II</Badge>
            <Badge>GDPR Compliant</Badge>
            <Badge>CCPA Ready</Badge>
            <Badge>HIPAA Available</Badge>
            <Badge>ISO 27001</Badge>
            <Badge>PCI DSS</Badge>
          </div>
        </Stack>
      </Section>

      {/* Certifications Grid */}
      <Section>
        <Stack gap={12}>
          <div className="text-center">
            <Eyebrow>Certifications</Eyebrow>
            <Headline level={2}>Independently Verified Security</Headline>
            <Subhead className="mt-4 max-w-3xl mx-auto">
              Our security practices are continuously audited and certified by leading independent firms
            </Subhead>
          </div>
          <Grid columns={3}>
            <Card hover className="text-center">
              <Stack gap={4}>
                <div className="h-20 w-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-3xl font-bold text-gray-900">SOC2</span>
                </div>
                <Headline level={4}>SOC 2 Type II</Headline>
                <p className="text-gray-600">
                  Annual third-party audit validating our security controls, availability, processing
                  integrity, confidentiality, and privacy practices. Type II certification demonstrates
                  ongoing operational effectiveness.
                </p>
                <Link href="/compliance/soc2" className="text-gray-900 font-medium">
                  View Report →
                </Link>
              </Stack>
            </Card>
            <Card hover className="text-center">
              <Stack gap={4}>
                <div className="h-20 w-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-3xl font-bold text-gray-900">ISO</span>
                </div>
                <Headline level={4}>ISO 27001</Headline>
                <p className="text-gray-600">
                  International standard for information security management systems. Demonstrates our
                  systematic approach to managing sensitive information and continuous improvement.
                </p>
                <Link href="/compliance/iso27001" className="text-gray-900 font-medium">
                  View Certificate →
                </Link>
              </Stack>
            </Card>
            <Card hover className="text-center">
              <Stack gap={4}>
                <div className="h-20 w-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-3xl font-bold text-gray-900">PCI</span>
                </div>
                <Headline level={4}>PCI DSS Level 1</Headline>
                <p className="text-gray-600">
                  Highest level of payment card security certification. Your payment information is
                  protected by the same standards used by major banks and payment processors.
                </p>
                <Link href="/compliance/pci" className="text-gray-900 font-medium">
                  View Compliance →
                </Link>
              </Stack>
            </Card>
          </Grid>
        </Stack>
      </Section>

      {/* Data Protection */}
      <Section className="bg-gray-50">
        <Stack gap={12}>
          <div className="text-center">
            <Eyebrow>Data Protection</Eyebrow>
            <Headline level={2}>Multi-Layer Defense in Depth</Headline>
            <Subhead className="mt-4 max-w-3xl mx-auto">
              Your data is protected by multiple layers of security controls at every level
            </Subhead>
          </div>
          <Grid columns={2}>
            <Card>
              <Stack gap={4}>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 bg-gray-900 text-white rounded-xl flex items-center justify-center">
                    <span className="text-xl">🔐</span>
                  </div>
                  <Headline level={4}>Encryption Everywhere</Headline>
                </div>
                <p className="text-gray-600">
                  All data is encrypted both in transit and at rest using AES-256 encryption. We use
                  TLS 1.3 for all network communications and encrypt database fields containing sensitive
                  information. Encryption keys are managed using industry-standard key management services
                  with automatic rotation.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 mt-0.5">✓</span>
                    <span className="text-gray-600">AES-256 encryption at rest</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 mt-0.5">✓</span>
                    <span className="text-gray-600">TLS 1.3 in transit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 mt-0.5">✓</span>
                    <span className="text-gray-600">Automatic key rotation</span>
                  </li>
                </ul>
              </Stack>
            </Card>
            <Card>
              <Stack gap={4}>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 bg-gray-900 text-white rounded-xl flex items-center justify-center">
                    <span className="text-xl">🛡️</span>
                  </div>
                  <Headline level={4}>Access Controls</Headline>
                </div>
                <p className="text-gray-600">
                  Zero-trust security model with principle of least privilege. Multi-factor authentication
                  required for all accounts. Role-based access controls ensure users only access data they
                  need. All access is logged and continuously monitored for anomalies.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 mt-0.5">✓</span>
                    <span className="text-gray-600">Mandatory MFA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 mt-0.5">✓</span>
                    <span className="text-gray-600">Role-based permissions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 mt-0.5">✓</span>
                    <span className="text-gray-600">Audit logging</span>
                  </li>
                </ul>
              </Stack>
            </Card>
            <Card>
              <Stack gap={4}>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 bg-gray-900 text-white rounded-xl flex items-center justify-center">
                    <span className="text-xl">🔍</span>
                  </div>
                  <Headline level={4}>Continuous Monitoring</Headline>
                </div>
                <p className="text-gray-600">
                  24/7 security monitoring with automated threat detection and response. Our Security
                  Operations Center uses AI-powered tools to identify and respond to threats in real-time.
                  Regular penetration testing and vulnerability assessments ensure proactive security.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 mt-0.5">✓</span>
                    <span className="text-gray-600">24/7 SOC monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 mt-0.5">✓</span>
                    <span className="text-gray-600">AI threat detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 mt-0.5">✓</span>
                    <span className="text-gray-600">Quarterly pen testing</span>
                  </li>
                </ul>
              </Stack>
            </Card>
            <Card>
              <Stack gap={4}>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 bg-gray-900 text-white rounded-xl flex items-center justify-center">
                    <span className="text-xl">💾</span>
                  </div>
                  <Headline level={4}>Secure Infrastructure</Headline>
                </div>
                <p className="text-gray-600">
                  Hosted on enterprise-grade cloud infrastructure with built-in security controls.
                  Geographically distributed with automatic failover and disaster recovery. Regular
                  backups with point-in-time recovery capabilities ensure data durability.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 mt-0.5">✓</span>
                    <span className="text-gray-600">99.99% uptime SLA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 mt-0.5">✓</span>
                    <span className="text-gray-600">Geo-redundant backups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 mt-0.5">✓</span>
                    <span className="text-gray-600">Disaster recovery</span>
                  </li>
                </ul>
              </Stack>
            </Card>
          </Grid>
        </Stack>
      </Section>

      {/* Privacy & Compliance */}
      <Section>
        <Stack gap={12}>
          <div className="text-center">
            <Eyebrow>Privacy & Compliance</Eyebrow>
            <Headline level={2}>Global Privacy Standards</Headline>
            <Subhead className="mt-4 max-w-3xl mx-auto">
              We comply with the strictest privacy regulations worldwide to protect your data rights
            </Subhead>
          </div>
          <Grid columns={3}>
            <Card hover>
              <Stack gap={4}>
                <Badge>GDPR</Badge>
                <Headline level={4}>European Data Protection</Headline>
                <p className="text-gray-600">
                  Full GDPR compliance with data subject rights, privacy by design, and data protection
                  officer. We process data lawfully with clear legal basis and provide complete transparency.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900">✓</span>
                    <span className="text-gray-600">Right to access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900">✓</span>
                    <span className="text-gray-600">Right to deletion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900">✓</span>
                    <span className="text-gray-600">Data portability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900">✓</span>
                    <span className="text-gray-600">Privacy by design</span>
                  </li>
                </ul>
              </Stack>
            </Card>
            <Card hover>
              <Stack gap={4}>
                <Badge>CCPA</Badge>
                <Headline level={4}>California Privacy Rights</Headline>
                <p className="text-gray-600">
                  Complete CCPA compliance protecting California residents' privacy rights. Transparent
                  data collection, clear opt-out mechanisms, and no sale of personal information.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900">✓</span>
                    <span className="text-gray-600">Do not sell data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900">✓</span>
                    <span className="text-gray-600">Opt-out rights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900">✓</span>
                    <span className="text-gray-600">Data disclosure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900">✓</span>
                    <span className="text-gray-600">Non-discrimination</span>
                  </li>
                </ul>
              </Stack>
            </Card>
            <Card hover>
              <Stack gap={4}>
                <Badge>HIPAA</Badge>
                <Headline level={4}>Healthcare Compliance</Headline>
                <p className="text-gray-600">
                  HIPAA-compliant infrastructure available for healthcare organizations. Signed BAAs,
                  PHI protection, and comprehensive administrative, physical, and technical safeguards.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900">✓</span>
                    <span className="text-gray-600">BAA available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900">✓</span>
                    <span className="text-gray-600">PHI encryption</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900">✓</span>
                    <span className="text-gray-600">Access controls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900">✓</span>
                    <span className="text-gray-600">Audit logs</span>
                  </li>
                </ul>
              </Stack>
            </Card>
          </Grid>
        </Stack>
      </Section>

      {/* Security Practices */}
      <Section className="bg-gray-50">
        <Stack gap={12}>
          <div className="text-center">
            <Eyebrow>Security Practices</Eyebrow>
            <Headline level={2}>Built Into Everything We Do</Headline>
            <Subhead className="mt-4 max-w-3xl mx-auto">
              Security isn't an afterthought—it's fundamental to how we build and operate
            </Subhead>
          </div>
          <div className="max-w-4xl mx-auto">
            <Accordion
              items={[
                {
                  title: "Secure Development Lifecycle",
                  content: (
                    <p className="text-gray-600">
                      All code undergoes security review before deployment. We use static and dynamic
                      analysis tools, dependency scanning, and manual code review. Security training is
                      mandatory for all engineers. We follow OWASP guidelines and secure coding best practices.
                      Regular security updates and patches are applied within 24 hours of release.
                    </p>
                  ),
                },
                {
                  title: "Employee Security",
                  content: (
                    <p className="text-gray-600">
                      Comprehensive background checks for all employees. Security awareness training required
                      quarterly. Strict access controls with principle of least privilege. All employee devices
                      are managed with endpoint protection, encryption, and remote wipe capabilities. Regular
                      security drills and incident response training ensure readiness.
                    </p>
                  ),
                },
                {
                  title: "Vendor Security",
                  content: (
                    <p className="text-gray-600">
                      All vendors undergo security assessment before onboarding. We require SOC 2 or equivalent
                      certifications from critical vendors. Regular vendor risk assessments and continuous
                      monitoring. Data processing agreements and security addendums required. No vendor has
                      access to customer data without explicit approval and audit logging.
                    </p>
                  ),
                },
                {
                  title: "Incident Response",
                  content: (
                    <p className="text-gray-600">
                      24/7 incident response team with defined escalation procedures. Average response time
                      under 15 minutes for critical incidents. Comprehensive incident response plan tested
                      quarterly. Transparent communication with affected customers within 72 hours. Post-incident
                      reviews and continuous improvement of security controls.
                    </p>
                  ),
                },
                {
                  title: "Data Retention & Deletion",
                  content: (
                    <p className="text-gray-600">
                      Clear data retention policies aligned with legal requirements and business needs.
                      Automatic data expiration and secure deletion processes. Customer data deleted within
                      30 days of account closure. Secure data destruction for physical media. Complete audit
                      trail of all data deletion activities.
                    </p>
                  ),
                },
                {
                  title: "Business Continuity",
                  content: (
                    <p className="text-gray-600">
                      Comprehensive disaster recovery plan with RTO of 4 hours and RPO of 1 hour. Geographically
                      distributed infrastructure with automatic failover. Regular disaster recovery drills and
                      testing. Redundant systems and data centers. Insurance coverage for cyber incidents and
                      business interruption.
                    </p>
                  ),
                },
              ]}
            />
          </div>
        </Stack>
      </Section>

      {/* Trust Center CTA */}
      <Section className="bg-gray-900 text-white">
        <Stack gap={8} align="center" className="text-center">
          <Headline level={2} className="text-white">
            Visit Our Trust Center
          </Headline>
          <Lead className="text-gray-300 max-w-2xl">
            Access security documentation, compliance reports, and real-time system status.
            Full transparency into our security posture.
          </Lead>
          <Cluster gap={4} justify="center">
            <Button as={Link} href="/trust" className="bg-white text-gray-900 hover:bg-gray-100">
              Visit Trust Center
            </Button>
            <Button as={Link} href="/contact" variant="ghost" className="border-white text-white hover:bg-white hover:text-gray-900">
              Contact Security Team
            </Button>
          </Cluster>
        </Stack>
      </Section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100">
        <Section>
          <div className="border-t border-gray-100 pt-8 text-center text-sm text-gray-600">
            <p>© 2024 Enclosed.AI. All rights reserved.</p>
          </div>
        </Section>
      </footer>
    </div>
  );
}