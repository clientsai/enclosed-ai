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
    <div >
      {/* Header */}
      {/* Hero Section */}
      <Section >
        <Flex gap={6}>
          <Badge>E-commerce Use Case</Badge>
          <H1 level={1}>
            Boost Online Sales with Strategic Direct Mail
          </H1>
          <Text >
            Complement your digital marketing with targeted direct mail campaigns that recover abandoned carts, win back customers, and increase lifetime value. Stand out in crowded inboxes with tangible, personalized experiences.
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
            <H1 level={2}>E-commerce Marketing Challenges</H1>
            <Text >
              How direct mail solves common online retail marketing problems
            </Text>
          </div>
          <Grid columns={2}>
            {challenges.map((challenge, index) => (
              <Card key={index} >
                <Flex gap={4}>
                  <H1 level={4} >
                    {challenge.title}
                  </H1>
                  <p >
                    {challenge.description}
                  </p>
                  <div >
                    <p >
                      Solution: {challenge.solution}
                    </p>
                  </div>
                </Flex>
              </Card>
            ))}
          </Grid>
        </Flex>
      </Section>
      {/* Use Cases */}
      <Section>
        <Flex gap={8}>
          <div >
            <H1 level={2}>E-commerce Campaign Types</H1>
            <Text >
              Proven direct mail strategies for online retailers
            </Text>
          </div>
          <Grid columns={2}>
            {useCases.map((useCase, index) => (
              <Card key={index} hover >
                <Flex gap={4}>
                  <H1 level={3} >
                    {useCase.title}
                  </H1>
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
      <Section id="case-study" >
        <Flex gap={8}>
          <div >
            <H1 level={2}>Success Story</H1>
            <Text >
              How Artisan Home Goods increased customer lifetime value by 45%
            </Text>
          </div>
          <Card >
            <Flex gap={6}>
              <div >
                <div >
                  <span >AH</span>
                </div>
                <div>
                  <H1 level={3}>{caseStudy.company}</H1>
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
      {/* Benchmarks */}
      <Section>
        <Flex gap={8}>
          <div >
            <H1 level={2}>E-commerce Direct Mail Benchmarks</H1>
            <Text >
              Industry performance standards for e-commerce direct mail
            </Text>
          </div>
          <Grid columns={4}>
            <Card >
              <H3 >3.2%</H3>
              <Text size="sm" color="muted">Average Response Rate</Text>
              <Text size="xs" >E-commerce direct mail</Text>
            </Card>
            <Card >
              <H3 >$85</H3>
              <Text size="sm" color="muted">Cost per Acquisition</Text>
              <Text size="xs" >vs $125 digital ads</Text>
            </Card>
            <Card >
              <H3 >24%</H3>
              <Text size="sm" color="muted">Cart Recovery Rate</Text>
              <Text size="xs" >with follow-up campaigns</Text>
            </Card>
            <Card >
              <H3 >450%</H3>
              <Text size="sm" color="muted">Return on Ad Spend</Text>
              <Text size="xs" >for targeted campaigns</Text>
            </Card>
          </Grid>
        </Flex>
      </Section>
      {/* CTA Section */}
      <Section >
        <Flex gap={6}>
          <H1 level={2} >
            Ready to Boost Your E-commerce Sales?
          </H1>
          <Text >
            Join successful e-commerce brands using Enclosed.AI to complement their digital marketing with high-converting direct mail campaigns.
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
          <Grid columns={4}>
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