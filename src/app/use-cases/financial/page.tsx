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
  Alert,
} from "@/components/ui";
export const metadata = {
  title: "Financial Services Use Case - Enclosed.AI | Compliant Direct Mail Marketing",
  description:
    "Discover how financial institutions use Enclosed.AI for compliant direct mail campaigns that build trust, acquire customers, and promote financial products.",
};
export default function FinancialUseCasePage() {
  const challenges = [
    {
      title: "Regulatory Compliance",
      description: "Financial services face strict regulations requiring careful messaging, disclosures, and approval processes.",
      solution: "Automated compliance checks and pre-approved templates ensure all mailings meet regulatory requirements.",
    },
    {
      title: "Trust and Credibility",
      description: "Financial decisions require high trust levels, making it crucial to establish credibility with prospects.",
      solution: "Professional, branded direct mail creates tangible credibility that digital channels often lack.",
    },
    {
      title: "Complex Products",
      description: "Financial products often require detailed explanations and educational content to drive understanding.",
      solution: "Multi-page formats allow for comprehensive product education while maintaining engagement.",
    },
    {
      title: "Demographic Targeting",
      description: "Different financial products appeal to specific age groups, income levels, and life stages.",
      solution: "Precise demographic targeting ensures relevant product offers reach the right audience segments.",
    },
  ];
  const useCases = [
    {
      title: "Mortgage & Home Loans",
      description: "Target homebuyers and refinancing prospects with personalized rate offers and approval pre-qualifications.",
      results: "35% increase in loan applications",
      tactics: ["Rate calculators", "Pre-approval offers", "Market timing", "Local expertise"],
    },
    {
      title: "Investment Services",
      description: "Educate prospects about investment opportunities and retirement planning with professional materials.",
      results: "28% boost in consultations",
      tactics: ["Market insights", "Portfolio examples", "Risk assessments", "Educational content"],
    },
    {
      title: "Credit Card Acquisition",
      description: "Promote credit cards with personalized offers based on credit profiles and spending patterns.",
      results: "22% higher approval rates",
      tactics: ["Pre-approved offers", "Rewards highlights", "Balance transfer deals", "Credit education"],
    },
    {
      title: "Business Banking",
      description: "Target small businesses with tailored banking solutions, loans, and merchant services.",
      results: "40% increase in business accounts",
      tactics: ["Industry-specific solutions", "Cash flow tools", "Relationship benefits", "Success stories"],
    },
  ];
  const complianceFeatures = [
    "Automated regulatory compliance checks",
    "Pre-approved template library",
    "Required disclosure integration",
    "Audit trail and documentation",
    "Multi-level approval workflows",
    "Industry-specific guidelines",
  ];
  const caseStudy = {
    company: "Community First Bank",
    type: "Regional Bank",
    challenge: "Struggling to compete with large national banks for mortgage customers while maintaining compliance with changing regulations.",
    solution: "Launched targeted mortgage campaigns using Enclosed.AI's compliance features and local market data integration.",
    results: [
      { metric: "Mortgage Applications", value: "+42%", comparison: "vs previous year" },
      { metric: "Cost per Text", value: "$180", comparison: "vs $340 digital" },
      { metric: "Compliance Score", value: "100%", comparison: "regulatory audit" },
      { metric: "Market Share", value: "+8%", comparison: "in target areas" },
    ],
    testimonial: {
      quote: "Enclosed.AI's compliance features gave us confidence to scale our direct mail campaigns. We can compete with the big banks while ensuring every piece meets regulatory standards. Our loan officers now have a steady stream of qualified prospects.",
      author: "Robert Chen",
      role: "VP of Marketing",
      company: "Community First Bank",
    },
  };
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      {/* Hero Section */}
      <Section className="text-center">
        <Flex gap={6}>
          <Badge>Financial Services Use Case</Badge>
          <H1 level={1}>Compliant Direct Mail for Financial Services</H1>
          <Text className="max-w-3xl mx-auto">
            Build trust, acquire customers, and promote financial products with compliant direct mail campaigns. Our platform ensures regulatory compliance while delivering personalized messaging that drives results.
          </Text>
          <Flex gap={4} justify="center">
            <Button as={Link} href="/auth/signup" size="lg">Start Your Campaign</Button>
            <Button as={Link} href="#case-study" variant="ghost" size="lg">See Success Story</Button>
          </Flex>
        </Flex>
      </Section>
      {/* Challenges Section */}
      <Section className="bg-black">
        <Flex gap={8}>
          <div className="text-center">
            <H1 level={2}>Financial Marketing Challenges</H1>
            <Text className="max-w-3xl mx-auto">How direct mail addresses unique financial services marketing needs</Text>
          </div>
          <Grid columns={2}>
            {challenges.map((challenge, index) => (
              <Card key={index} className="p-6">
                <Flex gap={4}>
                  <H1 level={4} className="text-lg text-red-600">{challenge.title}</H1>
                  <p className="text-gray-300 leading-relaxed">{challenge.description}</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-green-700 font-medium text-sm">Solution: {challenge.solution}</p>
                  </div>
                </Flex>
              </Card>
            ))}
          </Grid>
        </Flex>
      </Section>
      {/* Compliance Features */}
      <Section>
        <Flex gap={8}>
          <div className="text-center">
            <H1 level={2}>Built-in Compliance Features</H1>
            <Text className="max-w-3xl mx-auto">Ensure regulatory compliance with automated checks and industry-specific templates</Text>
          </div>
          <Card className="p-8 max-w-4xl mx-auto">
            <Grid columns={2}>
              {complianceFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 py-2">
                  <div className="h-5 w-5 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xs font-bold">✓</span>
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </Grid>
          </Card>
          <Alert className="max-w-4xl mx-auto">
            <strong>Compliance Guarantee:</strong> Our platform includes built-in checks for CFPB, FDIC, and state banking regulations. All templates are pre-reviewed by financial compliance experts.
          </Alert>
        </Flex>
      </Section>
      {/* Use Cases */}
      <Section className="bg-black">
        <Flex gap={8}>
          <div className="text-center">
            <H1 level={2}>Financial Services Campaign Types</H1>
            <Text className="max-w-3xl mx-auto">Proven direct mail strategies for financial institutions</Text>
          </div>
          <Grid columns={2}>
            {useCases.map((useCase, index) => (
              <Card key={index} hover className="p-8">
                <Flex gap={4}>
                  <H1 level={3} className="text-lg md:text-xl">{useCase.title}</H1>
                  <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
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
                    <p className="text-green-700 font-medium text-sm">Typical Results: {useCase.results}</p>
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
            <Text className="max-w-3xl mx-auto">How Community First Bank increased mortgage applications by 42%</Text>
          </div>
          <Card className="p-8 max-w-5xl mx-auto">
            <Flex gap={6}>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-16 w-16 bg-gray-900 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg md:text-xl">CF</span>
                </div>
                <div>
                  <H1 level={3}>{caseStudy.company}</H1>
                  <p className="text-gray-400">{caseStudy.type}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-white mb-2">Challenge</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{caseStudy.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Solution</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{caseStudy.solution}</p>
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
              <Card className="mt-6 p-6 bg-black">
                <Flex gap={4}>
                  <blockquote className="text-gray-300 italic leading-relaxed">
                    "{caseStudy.testimonial.quote}"
                  </blockquote>
                  <div className="text-right">
                    <div className="font-semibold text-white">{caseStudy.testimonial.author}</div>
                    <div className="text-sm text-gray-400">{caseStudy.testimonial.role}</div>
                    <div className="text-sm text-gray-400">{caseStudy.testimonial.company}</div>
                  </div>
                </Flex>
              </Card>
            </Flex>
          </Card>
        </Flex>
      </Section>
      {/* Benchmarks */}
      <Section className="bg-black">
        <Flex gap={8}>
          <div className="text-center">
            <H1 level={2}>Financial Services Benchmarks</H1>
            <Text className="max-w-3xl mx-auto">Industry performance standards for financial direct mail</Text>
          </div>
          <Grid columns={4}>
            <Card className="p-6 text-center">
              <H3 className="text-xl md:text-2xl font-bold text-white">4.8%</H3>
              <Text size="sm" color="muted">Average Response Rate</Text>
              <Text size="xs" className="text-gray-500">Financial services mail</Text>
            </Card>
            <Card className="p-6 text-center">
              <H3 className="text-xl md:text-2xl font-bold text-white">$225</H3>
              <Text size="sm" color="muted">Cost per Acquisition</Text>
              <Text size="xs" className="text-gray-500">vs $380 digital ads</Text>
            </Card>
            <Card className="p-6 text-center">
              <H3 className="text-xl md:text-2xl font-bold text-white">32%</H3>
              <Text size="sm" color="muted">Application Rate</Text>
              <Text size="xs" className="text-gray-500">for pre-qualified offers</Text>
            </Card>
            <Card className="p-6 text-center">
              <H3 className="text-xl md:text-2xl font-bold text-white">520%</H3>
              <Text size="sm" color="muted">Return on Investment</Text>
              <Text size="xs" className="text-gray-500">for mortgage campaigns</Text>
            </Card>
          </Grid>
        </Flex>
      </Section>
      {/* CTA Section */}
      <Section className="bg-gray-900 text-white text-center">
        <Flex gap={6}>
          <H1 level={2} className="text-white">Ready to Launch Compliant Campaigns?</H1>
          <Text className="text-gray-300 max-w-3xl mx-auto">
            Join financial institutions using Enclosed.AI to acquire customers and promote products with confidence in regulatory compliance.
          </Text>
          <Flex gap={4} justify="center">
            <Button as={Link} href="/auth/signup" size="lg" className="bg-black text-white hover:bg-gray-100">Start Free Trial</Button>
            <Button as={Link} href="/contact" variant="ghost" size="lg" className="border-white text-white hover:bg-black hover:text-white">Schedule Demo</Button>
          </Flex>
        </Flex>
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
              <Flex gap={2}>
                <Link href="/use-cases/b2b" className="text-gray-400 hover:text-white transition-colors text-sm">B2B Sales</Link>
                <Link href="/use-cases/real-estate" className="text-gray-400 hover:text-white transition-colors text-sm">Real Estate</Link>
                <Link href="/use-cases/ecommerce" className="text-gray-400 hover:text-white transition-colors text-sm">E-commerce</Link>
                <Link href="/use-cases/financial" className="text-gray-400 hover:text-white transition-colors text-sm">Financial Services</Link>
              </Flex>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <Flex gap={2}>
                <Link href="/features" className="text-gray-400 hover:text-white transition-colors text-sm">Features</Link>
                <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors text-sm">Pricing</Link>
                <Link href="/integrations" className="text-gray-400 hover:text-white transition-colors text-sm">Integrations</Link>
                <Link href="/roi-calculator" className="text-gray-400 hover:text-white transition-colors text-sm">ROI Calculator</Link>
              </Flex>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <Flex gap={2}>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link>
                <Link href="/careers" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</Link>
                <Link href="/press" className="text-gray-400 hover:text-white transition-colors text-sm">Press</Link>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link>
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