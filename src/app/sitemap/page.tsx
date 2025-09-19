import Link from "next/link";
import Logo from "@/components/Logo";
import {
  Section,
  Grid,
  Flex,
  H1,
  Text,
} from "@/components/ui";
export const metadata = {
  title: "Sitemap - Enclosed.AI | Website Navigation & Page Directory",
  description:
    "Complete sitemap of Enclosed.AI website pages including product features, resources, legal pages, and support documentation.",
};
export default function SitemapPage() {
  const siteMap = {
    "Product": [
      { name: "Features", href: "/features", description: "AI-powered direct mail features and capabilities" },
      { name: "Pricing", href: "/pricing", description: "Transparent pricing plans for all business sizes" },
      { name: "Integrations", href: "/integrations", description: "Connect with your favorite marketing tools" },
      { name: "ROI Calculator", href: "/roi-calculator", description: "Calculate your direct mail campaign returns" },
      { name: "Demo", href: "/demo", description: "See Enclosed.AI in action with a live demo" },
      { name: "Roadmap", href: "/roadmap", description: "Upcoming features and product development" },
    ],
    "Use Cases": [
      { name: "B2B Sales", href: "/use-cases/b2b", description: "Direct mail for business-to-business marketing" },
      { name: "Real Estate", href: "/use-cases/real-estate", description: "Text generation for real estate professionals" },
      { name: "E-commerce", href: "/use-cases/ecommerce", description: "Drive online sales with direct mail" },
      { name: "Financial Services", href: "/use-cases/financial", description: "Compliant marketing for financial institutions" },
    ],
    "Resources": [
      { name: "Blog", href: "/blog", description: "Latest insights and best practices" },
      { name: "Webinars", href: "/webinars", description: "Expert-led training sessions and workshops" },
      { name: "Case Studies", href: "/case-studies", description: "Real customer success stories and results" },
      { name: "Resources", href: "/resources", description: "Guides, templates, and marketing materials" },
      { name: "Documentation", href: "/docs", description: "Technical documentation and API guides" },
      { name: "Help Center", href: "/help", description: "Support articles and troubleshooting guides" },
      { name: "FAQ", href: "/faq", description: "Frequently asked questions and answers" },
    ],
    "Company": [
      { name: "About Us", href: "/about", description: "Our mission, vision, and company story" },
      { name: "Team", href: "/team", description: "Meet the people behind Enclosed.AI" },
      { name: "Careers", href: "/careers", description: "Join our growing team of innovators" },
      { name: "Press", href: "/press", description: "Press releases, media kit, and company news" },
      { name: "Partners", href: "/partners", description: "Partnership opportunities and integrations" },
      { name: "Contact", href: "/contact", description: "Get in touch with our team" },
    ],
    "Account": [
      { name: "Sign In", href: "/auth/login", description: "Access your Enclosed.AI account" },
      { name: "Sign Up", href: "/auth/signup", description: "Create a new account and start your free trial" },
      { name: "Dashboard", href: "/dashboard", description: "Campaign management and analytics dashboard" },
      { name: "API Keys", href: "/api-keys", description: "Manage your API keys and integrations" },
      { name: "Billing", href: "/billing", description: "Billing information and subscription management" },
    ],
    "Campaign Management": [
      { name: "Campaigns", href: "/campaigns", description: "Create and manage your direct mail campaigns" },
      { name: "Templates", href: "/templates", description: "Browse and customize mail templates" },
      { name: "Texts", href: "/leads", description: "Upload and manage your prospect lists" },
    ],
    "Legal & Compliance": [
      { name: "Privacy Policy", href: "/privacy", description: "How we collect, use, and protect your data" },
      { name: "Terms of Service", href: "/terms", description: "Legal terms governing use of our services" },
      { name: "Cookie Policy", href: "/cookies", description: "Information about cookies and tracking" },
      { name: "GDPR Compliance", href: "/gdpr", description: "Data protection and privacy rights information" },
      { name: "Security", href: "/security", description: "Security measures and compliance certifications" },
    ],
    "Support": [
      { name: "Community", href: "/community", description: "Join our user community and discussions" },
      { name: "Status Page", href: "https://status.enclosed.ai", description: "Real-time service status and uptime" },
    ],
  };
  return (
    <div >
      {/* Header */}
      {/* Content */}
      <Section>
        <div >
          <Flex gap={8}>
            <div >
              <H1 level={1}>Sitemap</H1>
              <Text >
                Navigate through all pages and resources available on the Enclosed.AI website. Find exactly what you're looking for.
              </Text>
            </div>
            <div >
              {Object.entries(siteMap).map(([category, pages]) => (
                <div key={category}>
                  <H1 level={2} >
                    {category}
                  </H1>
                  <Grid columns={2}>
                    {pages.map((page) => (
                      <div key={page.href} >
                        <div >
                          <div >
                            <Link
                              href={page.href}
                            >
                              {page.name}
                            </Link>
                            <p >
                              {page.description}
                            </p>
                          </div>
                          <Link
                            href={page.href}
                          >
                            <svg  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </Grid>
                </div>
              ))}
            </div>
            {/* Additional Information */}
            <div >
              <Flex gap={4}>
                <H1 level={3}>Can't Find What You're Looking For?</H1>
                <p >
                  If you can't find a specific page or resource, try using our search function or contact our support team for assistance.
                </p>
                <div >
                  <Link href="/help" >
                    Visit Help Center →
                  </Link>
                  <Link href="/contact" >
                    Contact Support →
                  </Link>
                </div>
              </Flex>
            </div>
          </Flex>
        </div>
      </Section>
      {/* Footer */}
      <footer >
        <Section>
          <div >
            <Logo size="md" showText={true} linkToHome={false}  />
            <p >
              Direct mail marketing powered by artificial intelligence
            </p>
          </div>
        </Section>
      </footer>
    </div>
  );
}