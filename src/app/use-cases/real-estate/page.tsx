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
  H4,
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
    <div >
      {/* Header */}
      {/* Hero Section */}
      <Section >
        <Flex gap={6}>
          <Badge>Real Estate Use Case</Badge>
          <H1>
            Generate More Real Estate Texts with Direct Mail
          </H1>
          <Text >
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
      <Section >
        <Flex gap={8}>
          <div >
            <H2>Real Estate Marketing Challenges</H2>
            <Text >
              Common obstacles facing real estate professionals in today's competitive market
            </Text>
          </div>
          <Grid cols={2}>
            {challenges.map((challenge, index) => (
              <Card key={index} >
                <Flex gap={4}>
                  <H4 >
                    {challenge.title}
                  </H4>
                  <p >
                    {challenge.description}
                  </p>
                  <p >
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
          <div >
            <H2>Direct Mail Solutions for Real Estate</H2>
            <Text >
              Proven strategies to overcome marketing challenges and grow your real estate business
            </Text>
          </div>
          <Grid cols={2}>
            {solutions.map((solution, index) => (
              <Card key={index} >
                <Flex gap={4}>
                  <div >
                    <span >{solution.icon}</span>
                    <H4 >
                      {solution.title}
                    </H4>
                  </div>
                  <p >
                    {solution.description}
                  </p>
                  <p >
                    Benefit: {solution.benefit}
                  </p>
                </Flex>
              </Card>
            ))}
          </Grid>
        </Flex>
      </Section>
      {/* Use Case Examples */}
      <Section >
        <Flex gap={8}>
          <div >
            <H2>Real Estate Campaign Types</H2>
            <Text >
              Effective direct mail strategies for different real estate objectives
            </Text>
          </div>
          <Grid cols={2}>
            {useCaseExamples.map((useCase, index) => (
              <Card key={index} hover >
                <Flex gap={4}>
                  <H3 >
                    {useCase.title}
                  </H3>
                  <p >
                    {useCase.description}
                  </p>
                  <div>
                    <h4 >Key Tactics:</h4>
                    <ul >
                      {useCase.tactics.map((tactic, tacticIndex) => (
                        <li key={tacticIndex} >
                          <div >
                            <span >✓</span>
                          </div>
                          {tactic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div >
                    <p >
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
          <div >
            <H2>Success Story</H2>
            <Text >
              How Maria Santos built her real estate business with direct mail
            </Text>
          </div>
          <Card >
            <Flex gap={6}>
              <div >
                <div >
                  <span >MS</span>
                </div>
                <div>
                  <H3>{caseStudy.agent}</H3>
                  <p >{caseStudy.company} • {caseStudy.market}</p>
                </div>
              </div>
              <div >
                <div>
                  <h4 >Challenge</h4>
                  <p >
                    {caseStudy.challenge}
                  </p>
                </div>
                <div>
                  <h4 >Solution</h4>
                  <p >
                    {caseStudy.solution}
                  </p>
                </div>
                <div>
                  <h4 >Results</h4>
                  <div >
                    {caseStudy.results.map((result, index) => (
                      <div key={index} >
                        <span >{result.metric}:</span>
                        <div >
                          <div >{result.value}</div>
                          <div >{result.comparison}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <Card glass >
                <blockquote >
                  "{caseStudy.testimonial.quote}"
                </blockquote>
                <div >
                  <div >{caseStudy.testimonial.author}</div>
                  <Text size="sm" color="muted">{caseStudy.testimonial.role}</Text>
                  <Text size="sm" color="muted">{caseStudy.testimonial.company}</Text>
                </div>
              </Card>
            </Flex>
          </Card>
        </Flex>
      </Section>
      {/* Implementation Guide */}
      <Section >
        <Flex gap={8}>
          <div >
            <H2>Implementation Guide</H2>
            <Text >
              Steps to launch successful real estate direct mail campaigns
            </Text>
          </div>
          <div >
            <div >
              {implementation.map((step, index) => (
                <Card key={index} glass >
                  <Flex gap={4} align="start">
                    <div >
                      <span >{index + 1}</span>
                    </div>
                    <div>
                      <H3 >{step.title}</H3>
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
          <div >
            <H2>Real Estate Direct Mail Benchmarks</H2>
            <Text >
              Industry performance standards for real estate marketing
            </Text>
          </div>
          <Grid cols={4}>
            {benchmarks.map((benchmark, index) => (
              <Card key={index} glass >
                <H3 >{benchmark.value}</H3>
                <Text size="sm" color="secondary" >{benchmark.metric}</Text>
                <Text size="xs" color="muted">{benchmark.industry}</Text>
              </Card>
            ))}
          </Grid>
        </Flex>
      </Section>
      {/* CTA Section */}
      <Section >
        <Flex gap={6}>
          <H2 >
            Ready to Grow Your Real Estate Business?
          </H2>
          <Text >
            Join thousands of real estate professionals using Enclosed.AI to generate leads, build relationships, and close more deals with targeted direct mail campaigns.
          </Text>
          <Flex gap={4} justify="center">
            <Button as={Link} href="/auth/signup" size="lg" >
              Start Free Trial
            </Button>
            <Button as={Link} href="/contact" variant="ghost" size="lg" >
              Schedule Demo
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
              <h3 >Use Cases</h3>
              <Flex gap={2}>
                <Link href="/use-cases/b2b" >
                  B2B Sales
                </Link>
                <Link href="/use-cases/real-estate" >
                  Real Estate
                </Link>
                <Link href="/use-cases/ecommerce" >
                  E-commerce
                </Link>
                <Link href="/use-cases/financial" >
                  Financial Services
                </Link>
              </Flex>
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
                <Link href="/careers" >
                  Careers
                </Link>
                <Link href="/press" >
                  Press
                </Link>
                <Link href="/contact" >
                  Contact
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