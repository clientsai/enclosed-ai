import Link from "next/link";
import Logo from "@/components/Logo";
import {
  Section,
  Grid,
  Stack,
  Cluster,
  Eyebrow,
  Headline,
  Subhead,
  Button,
  Card,
  Stat,
  Testimonial,
} from "@/components/premium";

export const metadata = {
  title: "E-commerce Use Case - Enclosed.AI | Direct Mail for Online Retail",
  description:
    "Discover how e-commerce brands use Enclosed.AI to drive online sales, recover abandoned carts, and increase customer lifetime value with personalized direct mail.",
};

export default function EcommerceUseCasePage() {
  const challenges = [
    {
      title: "Digital Ad Fatigue",
      description: "Customers are overwhelmed by digital ads and developing banner blindness, reducing online advertising effectiveness.",
      solution: "Physical mail creates a tangible, memorable brand experience that cuts through digital noise.",
    },
    {
      title: "Cart Abandonment",
      description: "70% of shopping carts are abandoned, representing significant lost revenue for e-commerce businesses.",
      solution: "Targeted direct mail campaigns can recover abandoned carts with personalized incentives and reminders.",
    },
    {
      title: "Customer Acquisition Costs",
      description: "Rising digital advertising costs make customer acquisition increasingly expensive across all channels.",
      solution: "Direct mail provides a cost-effective alternative channel with higher conversion rates for certain segments.",
    },
    {
      title: "Brand Differentiation",
      description: "Online marketplaces make it difficult to stand out from competitors selling similar products.",
      solution: "Premium direct mail creates brand differentiation and positions your business as high-quality and trustworthy.",
    },
  ];

  const useCases = [
    {
      title: "Cart Abandonment Recovery",
      description: "Win back customers who left items in their cart with personalized incentives and product reminders.",
      results: "25-35% recovery rate",
      tactics: ["Discount codes", "Product photos", "Scarcity messaging", "Free shipping offers"],
    },
    {
      title: "Customer Win-Back",
      description: "Re-engage inactive customers with special offers and new product announcements.",
      results: "15-20% reactivation rate",
      tactics: ["Exclusive offers", "Product catalogs", "Loyalty rewards", "Personal notes"],
    },
    {
      title: "VIP Customer Programs",
      description: "Treat high-value customers with premium direct mail packages and exclusive access.",
      results: "40% increase in CLV",
      tactics: ["Premium packaging", "Early access offers", "Personal touches", "Surprise gifts"],
    },
    {
      title: "Seasonal Campaigns",
      description: "Drive sales during peak seasons with targeted holiday and event-based mailings.",
      results: "50% boost in seasonal sales",
      tactics: ["Holiday themes", "Gift guides", "Limited editions", "Time-sensitive offers"],
    },
  ];

  const caseStudy = {
    company: "Artisan Home Goods",
    industry: "Home Decor E-commerce",
    challenge: "High cart abandonment rates and increasing customer acquisition costs were hurting profitability.",
    solution: "Implemented cart abandonment recovery campaigns and customer win-back programs using AI-personalized direct mail.",
    results: [
      { metric: "Cart Recovery", value: "28%", comparison: "vs 8% email" },
      { metric: "Customer LTV", value: "+45%", comparison: "for mail recipients" },
      { metric: "ROAS", value: "650%", comparison: "on direct mail spend" },
      { metric: "Reactivation Rate", value: "22%", comparison: "inactive customers" },
    ],
    testimonial: {
      quote: "Direct mail has become our secret weapon for customer retention. The physical catalogs we send create an emotional connection that emails simply can't match, and our customers actually keep them for reference.",
      author: "Sarah Mitchell",
      role: "Marketing Director",
      company: "Artisan Home Goods",
    },
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
              <Link href="/use-cases/ecommerce" className="text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Use Cases
              </Link>
              <Link href="/pricing" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Pricing
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/auth/login" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
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
        <Stack gap={6}>
          <Eyebrow>E-commerce Use Case</Eyebrow>
          <Headline level={1}>
            Boost Online Sales with Strategic Direct Mail
          </Headline>
          <Subhead className="max-w-3xl mx-auto">
            Complement your digital marketing with targeted direct mail campaigns that recover abandoned carts, win back customers, and increase lifetime value. Stand out in crowded inboxes with tangible, personalized experiences.
          </Subhead>
          <Cluster gap={4} justify="center">
            <Button as={Link} href="/auth/signup" size="lg">
              Start Your Campaign
            </Button>
            <Button as={Link} href="#case-study" variant="ghost" size="lg">
              See Success Story
            </Button>
          </Cluster>
        </Stack>
      </Section>

      {/* Challenges Section */}
      <Section className="bg-gray-50">
        <Stack gap={8}>
          <div className="text-center">
            <Headline level={2}>E-commerce Marketing Challenges</Headline>
            <Subhead className="max-w-3xl mx-auto">
              How direct mail solves common online retail marketing problems
            </Subhead>
          </div>

          <Grid columns={2}>
            {challenges.map((challenge, index) => (
              <Card key={index} className="p-6">
                <Stack gap={4}>
                  <Headline level={4} className="text-lg text-red-600">
                    {challenge.title}
                  </Headline>
                  <p className="text-gray-700 leading-relaxed">
                    {challenge.description}
                  </p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-green-700 font-medium text-sm">
                      Solution: {challenge.solution}
                    </p>
                  </div>
                </Stack>
              </Card>
            ))}
          </Grid>
        </Stack>
      </Section>

      {/* Use Cases */}
      <Section>
        <Stack gap={8}>
          <div className="text-center">
            <Headline level={2}>E-commerce Campaign Types</Headline>
            <Subhead className="max-w-3xl mx-auto">
              Proven direct mail strategies for online retailers
            </Subhead>
          </div>

          <Grid columns={2}>
            {useCases.map((useCase, index) => (
              <Card key={index} hover className="p-8">
                <Stack gap={4}>
                  <Headline level={3} className="text-xl">
                    {useCase.title}
                  </Headline>
                  <p className="text-gray-700 leading-relaxed">
                    {useCase.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Tactics:</h4>
                    <ul className="space-y-1">
                      {useCase.tactics.map((tactic, tacticIndex) => (
                        <li key={tacticIndex} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="h-4 w-4 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 text-xs font-bold">✓</span>
                          </div>
                          {tactic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-green-700 font-medium text-sm">
                      Typical Results: {useCase.results}
                    </p>
                  </div>
                </Stack>
              </Card>
            ))}
          </Grid>
        </Stack>
      </Section>

      {/* Case Study */}
      <Section id="case-study" className="bg-gray-50">
        <Stack gap={8}>
          <div className="text-center">
            <Headline level={2}>Success Story</Headline>
            <Subhead className="max-w-3xl mx-auto">
              How Artisan Home Goods increased customer lifetime value by 45%
            </Subhead>
          </div>

          <Card className="p-8 max-w-5xl mx-auto">
            <Stack gap={6}>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-16 w-16 bg-gray-900 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">AH</span>
                </div>
                <div>
                  <Headline level={3}>{caseStudy.company}</Headline>
                  <p className="text-gray-600">{caseStudy.industry}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {caseStudy.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {caseStudy.solution}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
                  <div className="space-y-2">
                    {caseStudy.results.map((result, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm text-gray-700">{result.metric}:</span>
                        <div className="text-right">
                          <div className="font-bold text-green-600">{result.value}</div>
                          <div className="text-xs text-gray-500">{result.comparison}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Testimonial
                quote={caseStudy.testimonial.quote}
                author={caseStudy.testimonial.author}
                role={caseStudy.testimonial.role}
                company={caseStudy.testimonial.company}
                className="mt-6"
              />
            </Stack>
          </Card>
        </Stack>
      </Section>

      {/* Benchmarks */}
      <Section>
        <Stack gap={8}>
          <div className="text-center">
            <Headline level={2}>E-commerce Direct Mail Benchmarks</Headline>
            <Subhead className="max-w-3xl mx-auto">
              Industry performance standards for e-commerce direct mail
            </Subhead>
          </div>

          <Grid columns={4}>
            <Stat value="3.2%" label="Average Response Rate" delta="E-commerce direct mail" />
            <Stat value="$85" label="Cost per Acquisition" delta="vs $125 digital ads" />
            <Stat value="24%" label="Cart Recovery Rate" delta="with follow-up campaigns" />
            <Stat value="450%" label="Return on Ad Spend" delta="for targeted campaigns" />
          </Grid>
        </Stack>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gray-900 text-white text-center">
        <Stack gap={6}>
          <Headline level={2} className="text-white">
            Ready to Boost Your E-commerce Sales?
          </Headline>
          <Subhead className="text-gray-300 max-w-3xl mx-auto">
            Join successful e-commerce brands using Enclosed.AI to complement their digital marketing with high-converting direct mail campaigns.
          </Subhead>
          <Cluster gap={4} justify="center">
            <Button as={Link} href="/auth/signup" size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              Start Free Trial
            </Button>
            <Button as={Link} href="/contact" variant="ghost" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
              Schedule Demo
            </Button>
          </Cluster>
        </Stack>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <Section className="border-b border-gray-800">
          <Grid columns={4}>
            <div>
              <Logo size="md" showText={true} linkToHome={false} className="text-white [&>div>span]:text-white mb-4" />
              <p className="text-gray-400 text-sm">Direct mail marketing powered by artificial intelligence</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Use Cases</h3>
              <Stack gap={2}>
                <Link href="/use-cases/b2b" className="text-gray-400 hover:text-white transition-colors text-sm">B2B Sales</Link>
                <Link href="/use-cases/real-estate" className="text-gray-400 hover:text-white transition-colors text-sm">Real Estate</Link>
                <Link href="/use-cases/ecommerce" className="text-gray-400 hover:text-white transition-colors text-sm">E-commerce</Link>
                <Link href="/use-cases/financial" className="text-gray-400 hover:text-white transition-colors text-sm">Financial Services</Link>
              </Stack>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <Stack gap={2}>
                <Link href="/features" className="text-gray-400 hover:text-white transition-colors text-sm">Features</Link>
                <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors text-sm">Pricing</Link>
                <Link href="/integrations" className="text-gray-400 hover:text-white transition-colors text-sm">Integrations</Link>
                <Link href="/roi-calculator" className="text-gray-400 hover:text-white transition-colors text-sm">ROI Calculator</Link>
              </Stack>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <Stack gap={2}>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link>
                <Link href="/careers" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</Link>
                <Link href="/press" className="text-gray-400 hover:text-white transition-colors text-sm">Press</Link>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link>
              </Stack>
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