import Link from "next/link";
import Logo from "@/components/Logo";
import {
  Section,
  Grid,
  Flex,
  H1,
  H2,
  H3,
  H4,
  Text,
  Button,
  Card,
  Badge,
} from "@/components/ui";

export const metadata = {
  title: "Partners - Enclosed.AI | Integration Partners & Reseller Program",
  description:
    "Join our partner ecosystem and integrate with Enclosed.AI. Explore technology partnerships, reseller opportunities, and strategic alliances.",
};

export default function PartnersPage() {
  const techPartners = [
    {
      name: "Salesforce",
      logo: "/logos/salesforce.svg",
      category: "CRM",
      description: "Seamless integration with Salesforce CRM for lead management and campaign tracking.",
      features: ["Text sync", "Campaign automation", "Activity tracking", "Custom fields"],
      tier: "Premier",
    },
    {
      name: "HubSpot",
      logo: "/logos/hubspot.svg",
      category: "Marketing",
      description: "Connect your HubSpot workflows with direct mail campaigns for omnichannel marketing.",
      features: ["Contact sync", "Workflow triggers", "Attribution tracking", "ROI reporting"],
      tier: "Premier",
    },
    {
      name: "Zapier",
      logo: "/logos/zapier.svg",
      category: "Automation",
      description: "Connect Enclosed.AI with 5,000+ apps through Zapier's automation platform.",
      features: ["No-code automation", "Trigger campaigns", "Data sync", "Multi-app workflows"],
      tier: "Certified",
    },
    {
      name: "Mailchimp",
      logo: "/logos/mailchimp.svg",
      category: "Email Marketing",
      description: "Combine email and direct mail marketing for comprehensive customer outreach.",
      features: ["Audience sync", "Campaign coordination", "Performance tracking", "A/B testing"],
      tier: "Certified",
    },
    {
      name: "Shopify",
      logo: "/logos/shopify.svg",
      category: "E-commerce",
      description: "Target customers based on purchase history and cart abandonment data.",
      features: ["Customer data sync", "Purchase triggers", "Cart abandonment", "Loyalty campaigns"],
      tier: "Premier",
    },
    {
      name: "Google Analytics",
      logo: "/logos/google-analytics.svg",
      category: "Analytics",
      description: "Track direct mail attribution and ROI alongside your digital marketing efforts.",
      features: ["Attribution tracking", "UTM management", "Goal tracking", "Custom reports"],
      tier: "Certified",
    },
  ];

  const partnerBenefits = {
    technology: [
      "Technical documentation and API access",
      "Dedicated integration support team",
      "Co-marketing opportunities",
      "Joint webinars and events",
      "Revenue sharing programs",
      "Priority feature requests",
    ],
    reseller: [
      "Competitive margins and pricing tiers",
      "Sales training and certification",
      "Marketing materials and co-branding",
      "Text sharing and referrals",
      "Dedicated partner success manager",
      "Quarterly business reviews",
    ],
    agency: [
      "White-label platform options",
      "Bulk pricing and volume discounts",
      "Client management tools",
      "Training and certification programs",
      "Marketing support and resources",
      "Priority customer support",
    ],
  };

  const partnerStats = [
    { value: "150+", label: "Active Partners", delta: "Growing monthly" },
    { value: "98%", label: "Partner Satisfaction", delta: "Based on quarterly surveys" },
    { value: "45%", label: "Average Revenue Increase", delta: "For partners in first year" },
    { value: "24/7", label: "Partner Support", delta: "Dedicated team available" },
  ];

  const applicationSteps = [
    {
      title: "Submit Application",
      content: "Complete our partner application form with details about your company, integration plans, and target markets."
    },
    {
      title: "Technical Review",
      content: "Our technical team reviews your integration requirements and discusses API capabilities and documentation."
    },
    {
      title: "Partnership Agreement",
      content: "We finalize partnership terms, including revenue sharing, support levels, and marketing collaboration."
    },
    {
      title: "Integration & Launch",
      content: "Begin development with our support team and launch your integration with joint marketing efforts."
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Logo size="md" />
            <nav className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/features"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/partners"
                className="text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Partners
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link
                href="/auth/login"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Sign In
              </Link>
              <Button as={Link} href="/auth/signup" size="sm">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <Section className="text-center">
        <Flex gap={6}>
          <Badge>Partnership Ecosystem</Badge>
          <H1 level={1}>
            Build the Future of Direct Mail Marketing Together
          </H1>
          <Text className="max-w-3xl mx-auto">
            Join our growing ecosystem of technology partners, resellers, and agencies. Whether you're looking to integrate with our platform, resell our services, or build custom solutions for your clients, we provide the tools, support, and opportunities you need to succeed.
          </Text>
          <Flex gap={4} justify="center">
            <Button as={Link} href="#apply" size="lg">
              Become a Partner
            </Button>
            <Button as={Link} href="#integrations" variant="ghost" size="lg">
              View Integrations
            </Button>
          </Flex>
        </Flex>
      </Section>

      {/* Partner Stats */}
      <Section className="bg-gray-50">
        <Flex gap={8}>
          <div className="text-center">
            <H1 level={2}>Partner Success by the Numbers</H1>
            <Text className="max-w-3xl mx-auto">
              Our partners see real results when they join the Enclosed.AI ecosystem
            </Text>
          </div>

          <Grid columns={4}>
            {partnerStats.map((stat, index) => (
              <Stat
                key={index}
                value={stat.value}
                label={stat.label}
                delta={stat.delta}
              />
            ))}
          </Grid>
        </Flex>
      </Section>

      {/* Integration Partners */}
      <Section id="integrations">
        <Flex gap={8}>
          <div className="text-center">
            <H1 level={2}>Technology Integration Partners</H1>
            <Text className="max-w-3xl mx-auto">
              Seamlessly connect Enclosed.AI with your existing marketing stack through our certified integration partners
            </Text>
          </div>

          <Grid columns={3}>
            {techPartners.map((partner, index) => (
              <Card key={index} hover className="p-6">
                <Flex gap={4}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-sm font-semibold text-gray-600">
                          {partner.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <H1 level={4} className="text-lg">
                          {partner.name}
                        </H1>
                        <span className="text-sm text-gray-600">{partner.category}</span>
                      </div>
                    </div>
                    <Badge variant={partner.tier === "Premier" ? "default" : "success"}>
                      {partner.tier}
                    </Badge>
                  </div>

                  <p className="text-gray-700 leading-relaxed text-sm">
                    {partner.description}
                  </p>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2 text-sm">Key Features:</h5>
                    <ul className="space-y-1">
                      {partner.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="h-4 w-4 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 text-xs font-bold">✓</span>
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button size="sm" variant="ghost" className="w-full mt-auto">
                    Learn More
                  </Button>
                </Flex>
              </Card>
            ))}
          </Grid>
        </Flex>
      </Section>

      {/* Partner Types */}
      <Section className="bg-gray-50">
        <Flex gap={8}>
          <div className="text-center">
            <H1 level={2}>Partnership Opportunities</H1>
            <Text className="max-w-3xl mx-auto">
              Choose the partnership model that aligns with your business goals and capabilities
            </Text>
          </div>

          <Grid columns={3}>
            {/* Technology Partners */}
            <Card className="p-8">
              <Flex gap={6}>
                <div className="text-center">
                  <div className="h-16 w-16 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="h-8 w-8 text-white"
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
                  <H1 level={3}>Technology Partners</H1>
                  <p className="text-gray-600 mt-2">
                    Build native integrations and enhance your platform's capabilities
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits Include:</h4>
                  <ul className="space-y-2">
                    {partnerBenefits.technology.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                        <div className="h-4 w-4 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                          <span className="text-blue-600 text-xs font-bold">✓</span>
                        </div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button as={Link} href="#apply" className="w-full">
                  Apply Now
                </Button>
              </Flex>
            </Card>

            {/* Reseller Partners */}
            <Card className="p-8">
              <Flex gap={6}>
                <div className="text-center">
                  <div className="h-16 w-16 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="h-8 w-8 text-white"
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
                  <H1 level={3}>Reseller Partners</H1>
                  <p className="text-gray-600 mt-2">
                    Sell Enclosed.AI services and earn competitive commissions
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits Include:</h4>
                  <ul className="space-y-2">
                    {partnerBenefits.reseller.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                        <div className="h-4 w-4 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                          <span className="text-blue-600 text-xs font-bold">✓</span>
                        </div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button as={Link} href="#apply" className="w-full">
                  Apply Now
                </Button>
              </Flex>
            </Card>

            {/* Agency Partners */}
            <Card className="p-8">
              <Flex gap={6}>
                <div className="text-center">
                  <div className="h-16 w-16 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="h-8 w-8 text-white"
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
                  <H1 level={3}>Agency Partners</H1>
                  <p className="text-gray-600 mt-2">
                    Offer direct mail services to your clients with white-label options
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits Include:</h4>
                  <ul className="space-y-2">
                    {partnerBenefits.agency.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                        <div className="h-4 w-4 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                          <span className="text-blue-600 text-xs font-bold">✓</span>
                        </div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button as={Link} href="#apply" className="w-full">
                  Apply Now
                </Button>
              </Flex>
            </Card>
          </Grid>
        </Flex>
      </Section>

      {/* Application Process */}
      <Section id="apply">
        <Flex gap={8}>
          <div className="text-center">
            <H1 level={2}>How to Become a Partner</H1>
            <Text className="max-w-3xl mx-auto">
              Our streamlined application process gets you up and running quickly
            </Text>
          </div>

          <div className="max-w-4xl mx-auto">
            <Steps items={applicationSteps} />
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <Flex gap={6}>
                <div className="text-center">
                  <H1 level={3}>Ready to Apply?</H1>
                  <p className="text-gray-600 mt-2">
                    Tell us about your company and partnership interests
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Partnership Type *
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option value="">Select Partnership Type</option>
                        <option value="technology">Technology Integration</option>
                        <option value="reseller">Reseller</option>
                        <option value="agency">Agency</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tell us about your integration or partnership goals *
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Describe your integration plans, target market, or how you plan to work with Enclosed.AI..."
                    />
                  </div>
                </div>

                <Button size="lg" className="w-full">
                  Submit Application
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  Our partnership team will review your application and respond within 2 business days.
                </p>
              </Flex>
            </Card>
          </div>
        </Flex>
      </Section>

      {/* Support Section */}
      <Section className="bg-gray-50">
        <Flex gap={8}>
          <div className="text-center">
            <H1 level={2}>Partner Support & Resources</H1>
            <Text className="max-w-3xl mx-auto">
              We provide comprehensive support to ensure your success as a partner
            </Text>
          </div>

          <Grid columns={3}>
            <Card className="p-6 text-center">
              <Flex gap={4}>
                <div className="h-12 w-12 bg-gray-900 rounded-lg flex items-center justify-center mx-auto">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <H1 level={4}>Technical Documentation</H1>
                <p className="text-gray-700 leading-relaxed">
                  Comprehensive API documentation, SDKs, and integration guides to get you started quickly.
                </p>
              </Flex>
            </Card>

            <Card className="p-6 text-center">
              <Flex gap={4}>
                <div className="h-12 w-12 bg-gray-900 rounded-lg flex items-center justify-center mx-auto">
                  <svg
                    className="h-6 w-6 text-white"
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
                <H1 level={4}>Dedicated Support</H1>
                <p className="text-gray-700 leading-relaxed">
                  Access to our partner success team for technical support, account management, and strategic guidance.
                </p>
              </Flex>
            </Card>

            <Card className="p-6 text-center">
              <Flex gap={4}>
                <div className="h-12 w-12 bg-gray-900 rounded-lg flex items-center justify-center mx-auto">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <H1 level={4}>Marketing Resources</H1>
                <p className="text-gray-700 leading-relaxed">
                  Co-branded materials, case studies, sales tools, and marketing support to help you promote our partnership.
                </p>
              </Flex>
            </Card>
          </Grid>
        </Flex>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gray-900 text-white text-center">
        <Flex gap={6}>
          <H1 level={2} className="text-white">
            Ready to Partner with Enclosed.AI?
          </H1>
          <Text className="text-gray-300 max-w-3xl mx-auto">
            Join our ecosystem of successful partners and unlock new revenue opportunities while providing innovative direct mail solutions to your customers.
          </Text>
          <Flex gap={4} justify="center">
            <Button as={Link} href="#apply" size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              Become a Partner
            </Button>
            <Button as={Link} href="/contact" variant="ghost" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
              Contact Partnership Team
            </Button>
          </Flex>
        </Flex>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <Section className="border-b border-gray-800">
          <Grid columns={4}>
            <div>
              <Logo
                size="md"
                showText={true}
                linkToHome={false}
                className="text-white [&>div>span]:text-white mb-4"
              />
              <p className="text-gray-400 text-sm">
                Direct mail marketing powered by artificial intelligence
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <Flex gap={2}>
                <Link href="/features" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Features
                </Link>
                <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Pricing
                </Link>
                <Link href="/integrations" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Integrations
                </Link>
                <Link href="/roi-calculator" className="text-gray-400 hover:text-white transition-colors text-sm">
                  ROI Calculator
                </Link>
              </Flex>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <Flex gap={2}>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
                <Link href="/team" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Team
                </Link>
                <Link href="/careers" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Careers
                </Link>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </Flex>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Partners</h3>
              <Flex gap={2}>
                <Link href="/partners" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Become a Partner
                </Link>
                <Link href="/integrations" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Integrations
                </Link>
                <Link href="/press" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Press Kit
                </Link>
                <Link href="/resources" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Resources
                </Link>
              </Flex>
            </div>
          </Grid>
        </Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Enclosed.AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}