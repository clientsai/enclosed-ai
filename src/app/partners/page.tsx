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
    <div >
      {/* Header */}
      {/* Hero Section */}
      <Section >
        <Flex gap={6}>
          <Badge>Partnership Ecosystem</Badge>
          <H1>
            Build the Future of Direct Mail Marketing Together
          </H1>
          <Text >
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
      <Section >
        <Flex gap={8}>
          <div >
            <H2>Partner Success by the Numbers</H2>
            <Text >
              Our partners see real results when they join the Enclosed.AI ecosystem
            </Text>
          </div>
          <Grid cols={4}>
            {partnerStats.map((stat, index) => (
              <Card key={index} >
                <H3 >{stat.value}</H3>
                <Text size="sm" color="muted">{stat.label}</Text>
                <Text size="xs" >{stat.delta}</Text>
              </Card>
            ))}
          </Grid>
        </Flex>
      </Section>
      {/* Integration Partners */}
      <Section id="integrations">
        <Flex gap={8}>
          <div >
            <H2>Technology Integration Partners</H2>
            <Text >
              Seamlessly connect Enclosed.AI with your existing marketing stack through our certified integration partners
            </Text>
          </div>
          <Grid cols={3}>
            {techPartners.map((partner, index) => (
              <Card key={index} hover >
                <Flex gap={4}>
                  <div >
                    <div >
                      <div >
                        <span >
                          {partner.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <H4 >
                          {partner.name}
                        </H4>
                        <span >{partner.category}</span>
                      </div>
                    </div>
                    <Badge variant={partner.tier === "Premier" ? "default" : "success"}>
                      {partner.tier}
                    </Badge>
                  </div>
                  <p >
                    {partner.description}
                  </p>
                  <div>
                    <h5 >Key Features:</h5>
                    <ul >
                      {partner.features.map((feature, featureIndex) => (
                        <li key={featureIndex} >
                          <div >
                            <span >✓</span>
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button size="sm" variant="ghost" >
                    Learn More
                  </Button>
                </Flex>
              </Card>
            ))}
          </Grid>
        </Flex>
      </Section>
      {/* Partner Types */}
      <Section >
        <Flex gap={8}>
          <div >
            <H2>Partnership Opportunities</H2>
            <Text >
              Choose the partnership model that aligns with your business goals and capabilities
            </Text>
          </div>
          <Grid cols={3}>
            {/* Technology Partners */}
            <Card >
              <Flex gap={6}>
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
                  <H3>Technology Partners</H3>
                  <p >
                    Build native integrations and enhance your platform's capabilities
                  </p>
                </div>
                <div>
                  <h4 >Benefits Include:</h4>
                  <ul >
                    {partnerBenefits.technology.map((benefit, index) => (
                      <li key={index} >
                        <div >
                          <span >✓</span>
                        </div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button as={Link} href="#apply" >
                  Apply Now
                </Button>
              </Flex>
            </Card>
            {/* Reseller Partners */}
            <Card >
              <Flex gap={6}>
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
                  <H3>Reseller Partners</H3>
                  <p >
                    Sell Enclosed.AI services and earn competitive commissions
                  </p>
                </div>
                <div>
                  <h4 >Benefits Include:</h4>
                  <ul >
                    {partnerBenefits.reseller.map((benefit, index) => (
                      <li key={index} >
                        <div >
                          <span >✓</span>
                        </div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button as={Link} href="#apply" >
                  Apply Now
                </Button>
              </Flex>
            </Card>
            {/* Agency Partners */}
            <Card >
              <Flex gap={6}>
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
                  <H3>Agency Partners</H3>
                  <p >
                    Offer direct mail services to your clients with white-label options
                  </p>
                </div>
                <div>
                  <h4 >Benefits Include:</h4>
                  <ul >
                    {partnerBenefits.agency.map((benefit, index) => (
                      <li key={index} >
                        <div >
                          <span >✓</span>
                        </div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button as={Link} href="#apply" >
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
          <div >
            <H2>How to Become a Partner</H2>
            <Text >
              Our streamlined application process gets you up and running quickly
            </Text>
          </div>
          <div >
            <Flex gap={6}>
              {applicationSteps.map((step, index) => (
                <Card key={index} >
                  <Flex gap={4}>
                    <div >
                      <span >{index + 1}</span>
                    </div>
                    <div>
                      <H3 >{step.title}</H3>
                      <Text >{step.content}</Text>
                    </div>
                  </Flex>
                </Card>
              ))}
            </Flex>
          </div>
          <div >
            <Card >
              <Flex gap={6}>
                <div >
                  <H3>Ready to Apply?</H3>
                  <p >
                    Tell us about your company and partnership interests
                  </p>
                </div>
                <div >
                  <div >
                    <div>
                      <label >
                        Company Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label >
                        Partnership Type *
                      </label>
                      <select >
                        <option value="">Select Partnership Type</option>
                        <option value="technology">Technology Integration</option>
                        <option value="reseller">Reseller</option>
                        <option value="agency">Agency</option>
                      </select>
                    </div>
                  </div>
                  <div >
                    <div>
                      <label >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label >
                      Tell us about your integration or partnership goals *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe your integration plans, target market, or how you plan to work with Enclosed.AI..."
                    />
                  </div>
                </div>
                <Button size="lg" >
                  Submit Application
                </Button>
                <p >
                  Our partnership team will review your application and respond within 2 business days.
                </p>
              </Flex>
            </Card>
          </div>
        </Flex>
      </Section>
      {/* Support Section */}
      <Section >
        <Flex gap={8}>
          <div >
            <H2>Partner Support & Resources</H2>
            <Text >
              We provide comprehensive support to ensure your success as a partner
            </Text>
          </div>
          <Grid cols={3}>
            <Card >
              <Flex gap={4}>
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
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <H4>Technical Documentation</H4>
                <p >
                  Comprehensive API documentation, SDKs, and integration guides to get you started quickly.
                </p>
              </Flex>
            </Card>
            <Card >
              <Flex gap={4}>
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
                <H4>Dedicated Support</H4>
                <p >
                  Access to our partner success team for technical support, account management, and strategic guidance.
                </p>
              </Flex>
            </Card>
            <Card >
              <Flex gap={4}>
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
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <H4>Marketing Resources</H4>
                <p >
                  Co-branded materials, case studies, sales tools, and marketing support to help you promote our partnership.
                </p>
              </Flex>
            </Card>
          </Grid>
        </Flex>
      </Section>
      {/* CTA Section */}
      <Section >
        <Flex gap={6}>
          <H2 >
            Ready to Partner with Enclosed.AI?
          </H2>
          <Text >
            Join our ecosystem of successful partners and unlock new revenue opportunities while providing innovative direct mail solutions to your customers.
          </Text>
          <Flex gap={4} justify="center">
            <Button as={Link} href="#apply" size="lg" >
              Become a Partner
            </Button>
            <Button as={Link} href="/contact" variant="ghost" size="lg" >
              Contact Partnership Team
            </Button>
          </Flex>
        </Flex>
      </Section>
      {/* Footer */}
      <footer >
        <Section >
          <Grid cols={4}>
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
              <Flex gap={2}>
                <Link href="/features" >
                  Features
                </Link>
                <Link href="/pricing" >
                  Pricing
                </Link>
                <Link href="/integrations" >
                  Integrations
                </Link>
                <Link href="/roi-calculator" >
                  ROI Calculator
                </Link>
              </Flex>
            </div>
            <div>
              <h3 >Company</h3>
              <Flex gap={2}>
                <Link href="/about" >
                  About Us
                </Link>
                <Link href="/team" >
                  Team
                </Link>
                <Link href="/careers" >
                  Careers
                </Link>
                <Link href="/contact" >
                  Contact
                </Link>
              </Flex>
            </div>
            <div>
              <h3 >Partners</h3>
              <Flex gap={2}>
                <Link href="/partners" >
                  Become a Partner
                </Link>
                <Link href="/integrations" >
                  Integrations
                </Link>
                <Link href="/press" >
                  Press Kit
                </Link>
                <Link href="/resources" >
                  Resources
                </Link>
              </Flex>
            </div>
          </Grid>
        </Section>
        <div >
          <p>&copy; 2024 Enclosed.AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}