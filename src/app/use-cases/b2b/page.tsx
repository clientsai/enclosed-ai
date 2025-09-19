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
  title: "B2B Use Case - Enclosed.AI | Direct Mail for Business Sales",
  description:
    "Discover how B2B companies use Enclosed.AI to generate leads, nurture prospects, and close more deals with AI-powered direct mail marketing.",
};

export default function B2BUseCasePage() {
  const challenges = [
    {
      title: "Low Email Open Rates",
      description: "B2B email campaigns typically see 15-25% open rates, making it difficult to reach decision makers.",
      impact: "Lost opportunities and wasted marketing spend",
    },
    {
      title: "Crowded Digital Channels",
      description: "Executives receive hundreds of emails daily, making it hard to stand out in digital noise.",
      impact: "Reduced response rates and longer sales cycles",
    },
    {
      title: "Generic Messaging",
      description: "One-size-fits-all campaigns fail to resonate with diverse B2B personas and industries.",
      impact: "Poor engagement and low conversion rates",
    },
    {
      title: "Difficulty Reaching C-Suite",
      description: "Senior executives are gatekeepers who filter most digital communications.",
      impact: "Limited access to key decision makers",
    },
  ];

  const solutions = [
    {
      title: "Higher Engagement Rates",
      description: "Direct mail achieves 3-5x higher response rates than email in B2B campaigns.",
      benefit: "More qualified leads and opportunities",
      icon: "📈",
    },
    {
      title: "Executive Attention",
      description: "Physical mail bypasses digital gatekeepers and reaches C-suite executives directly.",
      benefit: "Direct access to decision makers",
      icon: "🎯",
    },
    {
      title: "AI-Powered Personalization",
      description: "Dynamic content adapts to company size, industry, role, and specific business challenges.",
      benefit: "Highly relevant, compelling messaging",
      icon: "🤖",
    },
    {
      title: "Multi-Touch Integration",
      description: "Coordinate direct mail with email, LinkedIn, and sales calls for omnichannel campaigns.",
      benefit: "Improved campaign effectiveness",
      icon: "🔗",
    },
  ];

  const useCaseExamples = [
    {
      title: "Text Generation Campaigns",
      description: "Target prospects with personalized offers, whitepapers, or demo invitations based on their company profile and industry challenges.",
      tactics: ["Industry-specific messaging", "Dimensional mailers", "QR codes for easy response", "Follow-up sequences"],
      results: "35% increase in qualified leads",
    },
    {
      title: "Account-Based Marketing (ABM)",
      description: "Create highly targeted campaigns for specific high-value accounts with personalized messaging for each decision maker.",
      tactics: ["Executive-level targeting", "Custom case studies", "Premium packaging", "Multi-stakeholder approach"],
      results: "60% higher close rates",
    },
    {
      title: "Event Invitations & Follow-up",
      description: "Drive attendance to webinars, conferences, and sales events with compelling direct mail invitations and post-event nurturing.",
      tactics: ["VIP invitations", "Save-the-date cards", "Event swag", "Thank you packages"],
      results: "40% boost in event attendance",
    },
    {
      title: "Customer Retention & Upselling",
      description: "Re-engage existing customers with upgrade offers, renewal reminders, and success stories from similar companies.",
      tactics: ["Success story packages", "Upgrade incentives", "Renewal campaigns", "Loyalty programs"],
      results: "25% increase in customer lifetime value",
    },
  ];

  const caseStudy = {
    company: "TechFlow Solutions",
    industry: "Enterprise Software",
    challenge: "Struggling to reach IT decision makers at Fortune 500 companies with their cybersecurity platform. Email campaigns were getting lost in spam filters and achieving only 12% open rates.",
    solution: "Implemented targeted direct mail campaign using Enclosed.AI's AI personalization to create industry-specific security threat scenarios and ROI calculators for each prospect company.",
    results: [
      { metric: "Response Rate", value: "18%", comparison: "vs 2% email" },
      { metric: "Qualified Texts", value: "245", comparison: "65% increase" },
      { metric: "Sales Pipeline", value: "$2.4M", comparison: "180% growth" },
      { metric: "Cost per Text", value: "$145", comparison: "40% reduction" },
    ],
    testimonial: {
      quote: "Enclosed.AI transformed our B2B outreach. We're now reaching CISOs and IT directors who never responded to our emails. The AI personalization makes each piece feel like it was written specifically for their company's security challenges.",
      author: "Mark Thompson",
      role: "VP of Marketing",
      company: "TechFlow Solutions",
    },
  };

  const implementation = [
    {
      title: "Audience Segmentation",
      content: "Define target personas based on company size, industry, role, and buying stage. Use firmographic and technographic data to create precise segments."
    },
    {
      title: "Message Personalization",
      content: "Leverage AI to create industry-specific messaging that addresses unique business challenges and opportunities for each segment."
    },
    {
      title: "Creative Development",
      content: "Design professional materials that reflect your brand and resonate with B2B audiences. Include relevant case studies and ROI data."
    },
    {
      title: "Multi-Channel Integration",
      content: "Coordinate direct mail timing with email sequences, LinkedIn outreach, and sales team follow-up for maximum impact."
    },
    {
      title: "Performance Tracking",
      content: "Monitor response rates, lead quality, and ROI. Use unique phone numbers, landing pages, and promo codes to track attribution."
    },
  ];

  const benchmarks = [
    { metric: "Average Response Rate", value: "4.2%", industry: "B2B Direct Mail" },
    { metric: "Cost per Text", value: "$180", industry: "Technology Companies" },
    { metric: "Text-to-Customer Rate", value: "12%", industry: "Enterprise Software" },
    { metric: "ROI", value: "420%", industry: "B2B Campaigns" },
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
                href="/use-cases/b2b"
                className="text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Use Cases
              </Link>
              <Link
                href="/pricing"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Pricing
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
          <Badge>B2B Use Case</Badge>
          <H1 level={1}>
            Drive B2B Sales with AI-Powered Direct Mail
          </H1>
          <Text className="max-w-3xl mx-auto">
            Break through digital noise and reach decision makers with personalized direct mail campaigns that generate qualified leads, accelerate sales cycles, and drive revenue growth for B2B companies.
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
      <Section className="bg-gray-50">
        <Flex gap={8}>
          <div className="text-center">
            <H1 level={2}>B2B Marketing Challenges</H1>
            <Text className="max-w-3xl mx-auto">
              Traditional digital marketing faces increasing obstacles in reaching B2B decision makers
            </Text>
          </div>

          <Grid columns={2}>
            {challenges.map((challenge, index) => (
              <Card key={index} className="p-6">
                <Flex gap={4}>
                  <H1 level={4} className="text-lg text-red-600">
                    {challenge.title}
                  </H1>
                  <p className="text-gray-700 leading-relaxed">
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
            <H1 level={2}>Direct Mail Solutions for B2B</H1>
            <Text className="max-w-3xl mx-auto">
              Overcome digital marketing challenges with strategic direct mail campaigns
            </Text>
          </div>

          <Grid columns={2}>
            {solutions.map((solution, index) => (
              <Card key={index} className="p-6">
                <Flex gap={4}>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{solution.icon}</span>
                    <H1 level={4} className="text-lg text-green-600">
                      {solution.title}
                    </H1>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
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
      <Section className="bg-gray-50">
        <Flex gap={8}>
          <div className="text-center">
            <H1 level={2}>B2B Campaign Types</H1>
            <Text className="max-w-3xl mx-auto">
              Proven direct mail strategies for different B2B marketing objectives
            </Text>
          </div>

          <Grid columns={2}>
            {useCaseExamples.map((useCase, index) => (
              <Card key={index} hover className="p-8">
                <Flex gap={4}>
                  <H1 level={3} className="text-xl">
                    {useCase.title}
                  </H1>
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
              How TechFlow Solutions transformed their B2B lead generation
            </Text>
          </div>

          <Card className="p-8 max-w-5xl mx-auto">
            <Flex gap={6}>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-16 w-16 bg-gray-900 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">TF</span>
                </div>
                <div>
                  <H1 level={3}>{caseStudy.company}</H1>
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

              <Card className="mt-6 p-6 bg-gray-50">
                <Flex gap={4}>
                  <blockquote className="text-gray-700 italic leading-relaxed">
                    "{caseStudy.testimonial.quote}"
                  </blockquote>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900">{caseStudy.testimonial.author}</div>
                    <div className="text-sm text-gray-600">{caseStudy.testimonial.role}</div>
                    <div className="text-sm text-gray-600">{caseStudy.testimonial.company}</div>
                  </div>
                </Flex>
              </Card>
            </Flex>
          </Card>
        </Flex>
      </Section>

      {/* Implementation Guide */}
      <Section className="bg-gray-50">
        <Flex gap={8}>
          <div className="text-center">
            <H1 level={2}>Implementation Guide</H1>
            <Text className="max-w-3xl mx-auto">
              Follow these steps to launch successful B2B direct mail campaigns
            </Text>
          </div>

          <div className="max-w-4xl mx-auto">
            <Flex gap={6}>
              {implementation.map((step, index) => (
                <Card key={index} className="p-6">
                  <Flex gap={4}>
                    <div className="h-8 w-8 bg-gray-900 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <H3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</H3>
                      <Text className="text-gray-700 leading-relaxed">{step.content}</Text>
                    </div>
                  </Flex>
                </Card>
              ))}
            </Flex>
          </div>
        </Flex>
      </Section>

      {/* Industry Benchmarks */}
      <Section>
        <Flex gap={8}>
          <div className="text-center">
            <H1 level={2}>B2B Direct Mail Benchmarks</H1>
            <Text className="max-w-3xl mx-auto">
              Industry performance standards to guide your campaign expectations
            </Text>
          </div>

          <Grid columns={4}>
            {benchmarks.map((benchmark, index) => (
              <Card key={index} className="p-6 text-center">
                <H3 className="text-2xl font-bold text-gray-900">{benchmark.value}</H3>
                <Text size="sm" color="muted">{benchmark.metric}</Text>
                <Text size="xs" className="text-gray-500">{benchmark.industry}</Text>
              </Card>
            ))}
          </Grid>
        </Flex>
      </Section>

      {/* Related Use Cases */}
      <Section className="bg-gray-50">
        <Flex gap={8}>
          <div className="text-center">
            <H1 level={2}>Explore Other Use Cases</H1>
            <Text className="max-w-3xl mx-auto">
              Discover how different industries leverage direct mail marketing
            </Text>
          </div>

          <Grid columns={3}>
            <Card hover className="p-6">
              <Flex gap={4}>
                <div className="h-12 w-12 bg-gray-900 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">🏠</span>
                </div>
                <H1 level={4}>Real Estate</H1>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Generate leads, nurture prospects, and close more property deals with targeted direct mail campaigns.
                </p>
                <Button as={Link} href="/use-cases/real-estate" variant="ghost" size="sm" className="w-full mt-auto">
                  Learn More
                </Button>
              </Flex>
            </Card>

            <Card hover className="p-6">
              <Flex gap={4}>
                <div className="h-12 w-12 bg-gray-900 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">🛒</span>
                </div>
                <H1 level={4}>E-commerce</H1>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Drive online sales, recover abandoned carts, and increase customer lifetime value with personalized mail.
                </p>
                <Button as={Link} href="/use-cases/ecommerce" variant="ghost" size="sm" className="w-full mt-auto">
                  Learn More
                </Button>
              </Flex>
            </Card>

            <Card hover className="p-6">
              <Flex gap={4}>
                <div className="h-12 w-12 bg-gray-900 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">💰</span>
                </div>
                <H1 level={4}>Financial Services</H1>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Build trust, acquire customers, and promote financial products with compliant direct mail strategies.
                </p>
                <Button as={Link} href="/use-cases/financial" variant="ghost" size="sm" className="w-full mt-auto">
                  Learn More
                </Button>
              </Flex>
            </Card>
          </Grid>
        </Flex>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gray-900 text-white text-center">
        <Flex gap={6}>
          <H1 level={2} className="text-white">
            Ready to Transform Your B2B Marketing?
          </H1>
          <Text className="text-gray-300 max-w-3xl mx-auto">
            Join hundreds of B2B companies using Enclosed.AI to reach decision makers, generate qualified leads, and accelerate sales cycles with AI-powered direct mail.
          </Text>
          <Flex gap={4} justify="center">
            <Button as={Link} href="/auth/signup" size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              Start Free Trial
            </Button>
            <Button as={Link} href="/contact" variant="ghost" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
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