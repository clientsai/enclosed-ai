import Link from "next/link";
import Logo from "@/components/Logo";
import {
  Section,
  Grid,
  Flex,
  Badge,
  H1,
  H2,
  H3,
  Text,
  Button,
  Card,
} from "@/components/ui";
export const metadata = {
  title: "Real Estate Use Case - Enclosed.AI | Direct Mail for Property Marketing",
  description:
    "Discover how real estate professionals use Enclosed.AI to generate leads, nurture prospects, and close more property deals with targeted direct mail campaigns.",
};
export default function RealEstateUseCasePage() {
  const challenges = [
    {
      title: "High Competition",
      description: "Multiple agents competing for the same prospects with similar digital marketing approaches.",
      impact: "Difficulty standing out and capturing attention",
    },
    {
      title: "Trust Building",
      description: "Real estate is a high-trust industry where prospects need to feel confident in their agent choice.",
      impact: "Longer sales cycles and hesitant prospects",
    },
    {
      title: "Geographic Targeting",
      description: "Need to reach specific neighborhoods and property types with relevant messaging.",
      impact: "Wasted marketing spend on irrelevant audiences",
    },
    {
      title: "Market Timing",
      description: "Real estate decisions are often driven by life events and market conditions.",
      impact: "Missing opportunities due to poor timing",
    },
  ];
  const solutions = [
    {
      title: "Premium Brand Positioning",
      description: "High-quality direct mail creates a premium brand impression that builds trust and credibility.",
      benefit: "Elevated brand perception and trust",
      icon: "👑",
    },
    {
      title: "Hyper-Local Targeting",
      description: "Target specific zip codes, neighborhoods, and property types with personalized market insights.",
      benefit: "Relevant messaging for each area",
      icon: "🎯",
    },
    {
      title: "Market Data Integration",
      description: "Include personalized property valuations, market trends, and neighborhood statistics.",
      benefit: "Valuable information that prospects keep",
      icon: "📊",
    },
    {
      title: "Multi-Touch Campaigns",
      description: "Stay top-of-mind with strategic follow-up campaigns based on property and market activity.",
      benefit: "Consistent presence builds relationships",
      icon: "🔄",
    },
  ];
  const useCaseExamples = [
    {
      title: "Seller Text Generation",
      description: "Target homeowners with personalized property valuations and market reports to generate listing opportunities.",
      tactics: ["Home valuation reports", "Market trend analysis", "Sold comparables", "Commission structures"],
      results: "40% increase in listing appointments",
    },
    {
      title: "Buyer Prospecting",
      description: "Reach potential buyers with new listing alerts, buyer guides, and market opportunity insights.",
      tactics: ["New listing previews", "Buyer's guides", "Mortgage calculators", "Neighborhood profiles"],
      results: "55% more qualified buyer leads",
    },
    {
      title: "Geographic Farming",
      description: "Consistently market to specific neighborhoods with regular market updates and local expertise.",
      tactics: ["Monthly market reports", "Local event highlights", "Success stories", "Seasonal tips"],
      results: "25% market share increase in target areas",
    },
    {
      title: "Past Client Retention",
      description: "Stay connected with previous clients to generate referrals and repeat business opportunities.",
      tactics: ["Anniversary mailings", "Market updates", "Home maintenance tips", "Referral incentives"],
      results: "35% increase in referral business",
    },
  ];
  const caseStudy = {
    company: "Premier Realty Group",
    agent: "Maria Santos",
    market: "Suburban Dallas",
    challenge: "New agent struggling to establish presence in competitive market dominated by established teams. Digital marketing wasn't generating quality leads.",
    solution: "Implemented targeted direct mail campaign using Enclosed.AI to send personalized market reports and property valuations to homeowners in target neighborhoods.",
    results: [
      { metric: "Listing Texts", value: "24", comparison: "in 90 days" },
      { metric: "Closed Transactions", value: "$2.8M", comparison: "first quarter" },
      { metric: "Response Rate", value: "8.2%", comparison: "vs 1.5% email" },
      { metric: "Cost per Text", value: "$95", comparison: "60% lower than digital" },
    ],
    testimonial: {
      quote: "Enclosed.AI helped me break into established neighborhoods where other agents had relationships for years. The personalized market reports positioned me as a local expert and homeowners started calling me directly.",
      author: "Maria Santos",
      role: "Real Estate Agent",
      company: "Premier Realty Group",
    },
  };
  const implementation = [
    {
      title: "Market Analysis",
      content: "Research target neighborhoods, analyze recent sales data, and identify opportunities for both buyers and sellers."
    },
    {
      title: "List Building",
      content: "Use public records and MLS data to build targeted lists of homeowners, prospects, and potential clients."
    },
    {
      title: "Content Creation",
      content: "Develop valuable content including market reports, property valuations, and neighborhood insights using AI personalization."
    },
    {
      title: "Campaign Launch",
      content: "Deploy targeted campaigns with tracking mechanisms to measure response rates and lead quality."
    },
    {
      title: "Follow-up Strategy",
      content: "Implement systematic follow-up sequences to nurture leads and maintain relationships with prospects."
    },
  ];
  const benchmarks = [
    { metric: "Average Response Rate", value: "5.8%", industry: "Real Estate Direct Mail" },
    { metric: "Cost per Text", value: "$125", industry: "Real Estate Marketing" },
    { metric: "Text-to-Client Rate", value: "18%", industry: "Real Estate Prospecting" },
    { metric: "ROI", value: "680%", industry: "Real Estate Campaigns" },
  ];
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      {/* Hero Section */}
      <Section className="text-center">
        <Flex gap={6}>
          <Badge>Real Estate Use Case</Badge>
          <H1 level={1}>
            Generate More Real Estate Texts with Direct Mail
          </H1>
          <Text className="max-w-3xl mx-auto">
            Build trust, establish local expertise, and generate high-quality leads with personalized direct mail campaigns tailored for real estate professionals. Stand out in competitive markets and grow your business.
          </Text>
          <Flex gap={4} justify="center">
            <Button as={Link} href="/auth/signup" size="lg">
              Start Your Campaign
            </Button>
            <Button as={Link} href="#case-study" variant="ghost" size="lg">
              See Success Story
            </Button>
          </Flex>
        </Flex>
      </Section>
      {/* Challenges Section */}
      <Section className="bg-black">
        <Flex gap={8}>
          <div className="text-center">
            <H1 level={2}>Real Estate Marketing Challenges</H1>
            <Text className="max-w-3xl mx-auto">
              Common obstacles facing real estate professionals in today's competitive market
            </Text>
          </div>
          <Grid columns={2}>
            {challenges.map((challenge, index) => (
              <Card key={index} className="p-6">
                <Flex gap={4}>
                  <H1 level={4} className="text-lg text-red-600">
                    {challenge.title}
                  </H1>
                  <p className="text-gray-300 leading-relaxed">
                    {challenge.description}
                  </p>
                  <p className="text-sm text-red-700 font-medium">
                    Impact: {challenge.impact}
                  </p>
                </Flex>
              </Card>
            ))}
          </Grid>
        </Flex>
      </Section>
      {/* Solutions Section */}
      <Section>
        <Flex gap={8}>
          <div className="text-center">
            <H1 level={2}>Direct Mail Solutions for Real Estate</H1>
            <Text className="max-w-3xl mx-auto">
              Proven strategies to overcome marketing challenges and grow your real estate business
            </Text>
          </div>
          <Grid columns={2}>
            {solutions.map((solution, index) => (
              <Card key={index} className="p-6">
                <Flex gap={4}>
                  <div className="flex items-center gap-3">
                    <span className="text-xl md:text-2xl">{solution.icon}</span>
                    <H1 level={4} className="text-lg text-green-600">
                      {solution.title}
                    </H1>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {solution.description}
                  </p>
                  <p className="text-sm text-green-700 font-medium">
                    Benefit: {solution.benefit}
                  </p>
                </Flex>
              </Card>
            ))}
          </Grid>
        </Flex>
      </Section>
      {/* Use Case Examples */}
      <Section className="bg-black">
        <Flex gap={8}>
          <div className="text-center">
            <H1 level={2}>Real Estate Campaign Types</H1>
            <Text className="max-w-3xl mx-auto">
              Effective direct mail strategies for different real estate objectives
            </Text>
          </div>
          <Grid columns={2}>
            {useCaseExamples.map((useCase, index) => (
              <Card key={index} hover className="p-8">
                <Flex gap={4}>
                  <H1 level={3} className="text-lg md:text-xl">
                    {useCase.title}
                  </H1>
                  <p className="text-gray-300 leading-relaxed">
                    {useCase.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Key Tactics:</h4>
                    <ul className="space-y-1">
                      {useCase.tactics.map((tactic, tacticIndex) => (
                        <li key={tacticIndex} className="flex items-center gap-2 text-sm text-gray-300">
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
                </Flex>
              </Card>
            ))}
          </Grid>
        </Flex>
      </Section>
      {/* Case Study */}
      <Section id="case-study">
        <Flex gap={8}>
          <div className="text-center">
            <H1 level={2}>Success Story</H1>
            <Text className="max-w-3xl mx-auto">
              How Maria Santos built her real estate business with direct mail
            </Text>
          </div>
          <Card className="p-8 max-w-5xl mx-auto">
            <Flex gap={6}>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-16 w-16 bg-gray-900 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg md:text-xl">MS</span>
                </div>
                <div>
                  <H1 level={3}>{caseStudy.agent}</H1>
                  <p className="text-gray-400">{caseStudy.company} • {caseStudy.market}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-white mb-2">Challenge</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {caseStudy.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Solution</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {caseStudy.solution}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Results</h4>
                  <div className="space-y-2">
                    {caseStudy.results.map((result, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm text-gray-300">{result.metric}:</span>
                        <div className="text-right">
                          <div className="font-bold text-green-600">{result.value}</div>
                          <div className="text-xs text-gray-500">{result.comparison}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <Card glass className="mt-6 p-6">
                <blockquote className="text-gray-300 italic leading-relaxed mb-4">
                  "{caseStudy.testimonial.quote}"
                </blockquote>
                <div className="text-right">
                  <div className="font-semibold">{caseStudy.testimonial.author}</div>
                  <Text size="sm" color="muted">{caseStudy.testimonial.role}</Text>
                  <Text size="sm" color="muted">{caseStudy.testimonial.company}</Text>
                </div>
              </Card>
            </Flex>
          </Card>
        </Flex>
      </Section>
      {/* Implementation Guide */}
      <Section className="bg-black">
        <Flex gap={8}>
          <div className="text-center">
            <H1 level={2}>Implementation Guide</H1>
            <Text className="max-w-3xl mx-auto">
              Steps to launch successful real estate direct mail campaigns
            </Text>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {implementation.map((step, index) => (
                <Card key={index} glass className="p-6">
                  <Flex gap={4} align="start">
                    <div className="h-10 w-10 bg-[var(--accent)] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-semibold">{index + 1}</span>
                    </div>
                    <div>
                      <H3 className="text-lg mb-2">{step.title}</H3>
                      <Text color="secondary">{step.content}</Text>
                    </div>
                  </Flex>
                </Card>
              ))}
            </div>
          </div>
        </Flex>
      </Section>
      {/* Industry Benchmarks */}
      <Section>
        <Flex gap={8}>
          <div className="text-center">
            <H1 level={2}>Real Estate Direct Mail Benchmarks</H1>
            <Text className="max-w-3xl mx-auto">
              Industry performance standards for real estate marketing
            </Text>
          </div>
          <Grid columns={4}>
            {benchmarks.map((benchmark, index) => (
              <Card key={index} glass className="p-6 text-center">
                <H3 className="text-xl md:text-2xl font-bold gradient-text-accent mb-2">{benchmark.value}</H3>
                <Text size="sm" color="secondary" className="mb-1">{benchmark.metric}</Text>
                <Text size="xs" color="muted">{benchmark.industry}</Text>
              </Card>
            ))}
          </Grid>
        </Flex>
      </Section>
      {/* CTA Section */}
      <Section className="bg-gray-900 text-white text-center">
        <Flex gap={6}>
          <H1 level={2} className="text-white">
            Ready to Grow Your Real Estate Business?
          </H1>
          <Text className="text-gray-300 max-w-3xl mx-auto">
            Join thousands of real estate professionals using Enclosed.AI to generate leads, build relationships, and close more deals with targeted direct mail campaigns.
          </Text>
          <Flex gap={4} justify="center">
            <Button as={Link} href="/auth/signup" size="lg" className="bg-black text-white hover:bg-gray-100">
              Start Free Trial
            </Button>
            <Button as={Link} href="/contact" variant="ghost" size="lg" className="border-white text-white hover:bg-black hover:text-white">
              Schedule Demo
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
              <h3 className="font-semibold mb-4">Use Cases</h3>
              <Flex gap={2}>
                <Link href="/use-cases/b2b" className="text-gray-400 hover:text-white transition-colors text-sm">
                  B2B Sales
                </Link>
                <Link href="/use-cases/real-estate" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Real Estate
                </Link>
                <Link href="/use-cases/ecommerce" className="text-gray-400 hover:text-white transition-colors text-sm">
                  E-commerce
                </Link>
                <Link href="/use-cases/financial" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Financial Services
                </Link>
              </Flex>
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
                <Link href="/careers" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Careers
                </Link>
                <Link href="/press" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Press
                </Link>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
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