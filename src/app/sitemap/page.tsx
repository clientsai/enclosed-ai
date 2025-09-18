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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Logo size="md" />
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </Link>
              <Link href="/features" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Features
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/auth/login" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Sign In
              </Link>
              <Link href="/auth/signup" className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <Flex gap={8}>
            <div className="text-center">
              <H1 level={1}>Sitemap</H1>
              <Text className="max-w-2xl mx-auto">
                Navigate through all pages and resources available on the Enclosed.AI website. Find exactly what you're looking for.
              </Text>
            </div>

            <div className="space-y-12">
              {Object.entries(siteMap).map(([category, pages]) => (
                <div key={category}>
                  <H1 level={2} className="text-2xl mb-6 text-gray-900 border-b border-gray-200 pb-2">
                    {category}
                  </H1>
                  <Grid columns={2}>
                    {pages.map((page) => (
                      <div key={page.href} className="py-3 border-b border-gray-100 last:border-b-0">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <Link
                              href={page.href}
                              className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
                            >
                              {page.name}
                            </Link>
                            <p className="text-sm text-gray-600 mt-1">
                              {page.description}
                            </p>
                          </div>
                          <Link
                            href={page.href}
                            className="ml-4 text-gray-400 hover:text-gray-600 transition-colors"
                          >
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <div className="bg-gray-50 p-8 rounded-lg">
              <Flex gap={4}>
                <H1 level={3}>Can't Find What You're Looking For?</H1>
                <p className="text-gray-700">
                  If you can't find a specific page or resource, try using our search function or contact our support team for assistance.
                </p>
                <div className="flex gap-4">
                  <Link href="/help" className="text-blue-600 hover:text-blue-700 font-medium">
                    Visit Help Center →
                  </Link>
                  <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
                    Contact Support →
                  </Link>
                </div>
              </Flex>
            </div>
          </Flex>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <Section>
          <div className="text-center">
            <Logo size="md" showText={true} linkToHome={false} className="text-white [&>div>span]:text-white mb-4" />
            <p className="text-gray-400 text-sm">
              Direct mail marketing powered by artificial intelligence
            </p>
          </div>
        </Section>
      </footer>
    </div>
  );
}