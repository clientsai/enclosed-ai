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
    <div >
      {/* Header */}
      {/* Hero Section */}
      <Section >
        <Flex gap={6}>
          <Badge>B2B Use Case</Badge>
          <H1>
            Drive B2B Sales with AI-Powered Direct Mail
          </H1>
          <Text >
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
      <Section >
        <Flex gap={8}>
          <div >
            <H2>B2B Marketing Challenges</H2>
            <Text >
              Traditional digital marketing faces increasing obstacles in reaching B2B decision makers
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
            <H2>Direct Mail Solutions for B2B</H2>
            <Text >
              Overcome digital marketing challenges with strategic direct mail campaigns
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
            <H2>B2B Campaign Types</H2>
            <Text >
              Proven direct mail strategies for different B2B marketing objectives
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
              How TechFlow Solutions transformed their B2B lead generation
            </Text>
          </div>
          <Card >
            <Flex gap={6}>
              <div >
                <div >
                  <span >TF</span>
                </div>
                <div>
                  <H3>{caseStudy.company}</H3>
                  <p >{caseStudy.industry}</p>
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
              <Card >
                <Flex gap={4}>
                  <blockquote >
                    "{caseStudy.testimonial.quote}"
                  </blockquote>
                  <div >
                    <div >{caseStudy.testimonial.author}</div>
                    <div >{caseStudy.testimonial.role}</div>
                    <div >{caseStudy.testimonial.company}</div>
                  </div>
                </Flex>
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
              Follow these steps to launch successful B2B direct mail campaigns
            </Text>
          </div>
          <div >
            <Flex gap={6}>
              {implementation.map((step, index) => (
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
        </Flex>
      </Section>
      {/* Industry Benchmarks */}
      <Section>
        <Flex gap={8}>
          <div >
            <H2>B2B Direct Mail Benchmarks</H2>
            <Text >
              Industry performance standards to guide your campaign expectations
            </Text>
          </div>
          <Grid cols={4}>
            {benchmarks.map((benchmark, index) => (
              <Card key={index} >
                <H3 >{benchmark.value}</H3>
                <Text size="sm" color="muted">{benchmark.metric}</Text>
                <Text size="xs" >{benchmark.industry}</Text>
              </Card>
            ))}
          </Grid>
        </Flex>
      </Section>
      {/* Related Use Cases */}
      <Section >
        <Flex gap={8}>
          <div >
            <H2>Explore Other Use Cases</H2>
            <Text >
              Discover how different industries leverage direct mail marketing
            </Text>
          </div>
          <Grid cols={3}>
            <Card hover >
              <Flex gap={4}>
                <div >
                  <span >🏠</span>
                </div>
                <H4>Real Estate</H4>
                <p >
                  Generate leads, nurture prospects, and close more property deals with targeted direct mail campaigns.
                </p>
                <Button as={Link} href="/use-cases/real-estate" variant="ghost" size="sm" >
                  Learn More
                </Button>
              </Flex>
            </Card>
            <Card hover >
              <Flex gap={4}>
                <div >
                  <span >🛒</span>
                </div>
                <H4>E-commerce</H4>
                <p >
                  Drive online sales, recover abandoned carts, and increase customer lifetime value with personalized mail.
                </p>
                <Button as={Link} href="/use-cases/ecommerce" variant="ghost" size="sm" >
                  Learn More
                </Button>
              </Flex>
            </Card>
            <Card hover >
              <Flex gap={4}>
                <div >
                  <span >💰</span>
                </div>
                <H4>Financial Services</H4>
                <p >
                  Build trust, acquire customers, and promote financial products with compliant direct mail strategies.
                </p>
                <Button as={Link} href="/use-cases/financial" variant="ghost" size="sm" >
                  Learn More
                </Button>
              </Flex>
            </Card>
          </Grid>
        </Flex>
      </Section>
      {/* CTA Section */}
      <Section >
        <Flex gap={6}>
          <H2 >
            Ready to Transform Your B2B Marketing?
          </H2>
          <Text >
            Join hundreds of B2B companies using Enclosed.AI to reach decision makers, generate qualified leads, and accelerate sales cycles with AI-powered direct mail.
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