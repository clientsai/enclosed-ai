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
    <div >
      {/* Header */}
      {/* Hero Section */}
      <Section >
        <Flex gap={6}>
          <Badge>Financial Services Use Case</Badge>
          <H1>Compliant Direct Mail for Financial Services</H1>
          <Text >
            Build trust, acquire customers, and promote financial products with compliant direct mail campaigns. Our platform ensures regulatory compliance while delivering personalized messaging that drives results.
          </Text>
          <Flex gap={4} justify="center">
            <Button as={Link} href="/auth/signup" size="lg">Start Your Campaign</Button>
            <Button as={Link} href="#case-study" variant="ghost" size="lg">See Success Story</Button>
          </Flex>
        </Flex>
      </Section>
      {/* Challenges Section */}
      <Section >
        <Flex gap={8}>
          <div >
            <H2>Financial Marketing Challenges</H2>
            <Text >How direct mail addresses unique financial services marketing needs</Text>
          </div>
          <Grid cols={2}>
            {challenges.map((challenge, index) => (
              <Card key={index} >
                <Flex gap={4}>
                  <H4>{challenge.title}</H4>
                  <p >{challenge.description}</p>
                  <div >
                    <p >Solution: {challenge.solution}</p>
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
          <div >
            <H2>Built-in Compliance Features</H2>
            <Text >Ensure regulatory compliance with automated checks and industry-specific templates</Text>
          </div>
          <Card >
            <Grid cols={2}>
              {complianceFeatures.map((feature, index) => (
                <div key={index} >
                  <div >
                    <span >✓</span>
                  </div>
                  <span >{feature}</span>
                </div>
              ))}
            </Grid>
          </Card>
          <Alert >
            <strong>Compliance Guarantee:</strong> Our platform includes built-in checks for CFPB, FDIC, and state banking regulations. All templates are pre-reviewed by financial compliance experts.
          </Alert>
        </Flex>
      </Section>
      {/* Use Cases */}
      <Section >
        <Flex gap={8}>
          <div >
            <H2>Financial Services Campaign Types</H2>
            <Text >Proven direct mail strategies for financial institutions</Text>
          </div>
          <Grid cols={2}>
            {useCases.map((useCase, index) => (
              <Card key={index} hover >
                <Flex gap={4}>
                  <H3>{useCase.title}</H3>
                  <p >{useCase.description}</p>
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
                    <p >Typical Results: {useCase.results}</p>
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
            <Text >How Community First Bank increased mortgage applications by 42%</Text>
          </div>
          <Card >
            <Flex gap={6}>
              <div >
                <div >
                  <span >CF</span>
                </div>
                <div>
                  <H3>{caseStudy.company}</H3>
                  <p >{caseStudy.type}</p>
                </div>
              </div>
              <div >
                <div>
                  <h4 >Challenge</h4>
                  <p >{caseStudy.challenge}</p>
                </div>
                <div>
                  <h4 >Solution</h4>
                  <p >{caseStudy.solution}</p>
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
      {/* Benchmarks */}
      <Section >
        <Flex gap={8}>
          <div >
            <H2>Financial Services Benchmarks</H2>
            <Text >Industry performance standards for financial direct mail</Text>
          </div>
          <Grid cols={4}>
            <Card >
              <H3 >4.8%</H3>
              <Text size="sm" color="muted">Average Response Rate</Text>
              <Text size="xs" >Financial services mail</Text>
            </Card>
            <Card >
              <H3 >$225</H3>
              <Text size="sm" color="muted">Cost per Acquisition</Text>
              <Text size="xs" >vs $380 digital ads</Text>
            </Card>
            <Card >
              <H3 >32%</H3>
              <Text size="sm" color="muted">Application Rate</Text>
              <Text size="xs" >for pre-qualified offers</Text>
            </Card>
            <Card >
              <H3 >520%</H3>
              <Text size="sm" color="muted">Return on Investment</Text>
              <Text size="xs" >for mortgage campaigns</Text>
            </Card>
          </Grid>
        </Flex>
      </Section>
      {/* CTA Section */}
      <Section >
        <Flex gap={6}>
          <H2>Ready to Launch Compliant Campaigns?</H2>
          <Text >
            Join financial institutions using Enclosed.AI to acquire customers and promote products with confidence in regulatory compliance.
          </Text>
          <Flex gap={4} justify="center">
            <Button as={Link} href="/auth/signup" size="lg" >Start Free Trial</Button>
            <Button as={Link} href="/contact" variant="ghost" size="lg" >Schedule Demo</Button>
          </Flex>
        </Flex>
      </Section>
      {/* Footer */}
      <footer >
        <Section >
          <Grid cols={4}>
            <div>
              <Logo size="md" showText={true} linkToHome={false}  />
              <p >Direct mail marketing powered by artificial intelligence</p>
            </div>
            <div>
              <h3 >Use Cases</h3>
              <Flex gap={2}>
                <Link href="/use-cases/b2b" >B2B Sales</Link>
                <Link href="/use-cases/real-estate" >Real Estate</Link>
                <Link href="/use-cases/ecommerce" >E-commerce</Link>
                <Link href="/use-cases/financial" >Financial Services</Link>
              </Flex>
            </div>
            <div>
              <h3 >Product</h3>
              <Flex gap={2}>
                <Link href="/features" >Features</Link>
                <Link href="/pricing" >Pricing</Link>
                <Link href="/integrations" >Integrations</Link>
                <Link href="/roi-calculator" >ROI Calculator</Link>
              </Flex>
            </div>
            <div>
              <h3 >Company</h3>
              <Flex gap={2}>
                <Link href="/about" >About Us</Link>
                <Link href="/careers" >Careers</Link>
                <Link href="/press" >Press</Link>
                <Link href="/contact" >Contact</Link>
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