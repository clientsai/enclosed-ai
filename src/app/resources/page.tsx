/* Resources Hub - Comprehensive Learning Center */
import Link from "next/link";
import {
  Section,
  Grid,
  Flex,
  H1,
  H2,
  H4,
  Text,
  Button,
  Card,
  Badge,
} from "@/components/ui";
import Logo from "@/components/Logo";
export const metadata = {
  title: "Resources - Learning Center | Enclosed.AI",
  description: "Master direct mail marketing with AI. Access guides, templates, webinars, case studies, and tools to maximize your campaign ROI.",
};
export default function ResourcesPage() {
  return (
    <div >
      {/* Header */}
      {/* Hero */}
      <Section >
        <Flex direction="col" gap={8}  >
          <Badge>Learning Center</Badge>
          <H1 >
            Everything You Need to Master
            <span >AI-Powered Direct Mail</span>
          </H1>
          <Text size="xl" >
            From beginner guides to advanced strategies, our comprehensive resource library helps you
            maximize ROI at every stage of your direct mail journey. Access proven templates, real-world
            case studies, expert webinars, and powerful tools—all designed to make you successful.
          </Text>
          <div >
            <Badge>500+ Resources</Badge>
            <Badge>50+ Templates</Badge>
            <Badge>100+ Case Studies</Badge>
            <Badge>Weekly Webinars</Badge>
          </div>
        </Flex>
      </Section>
      {/* Quick Links */}
      <Section>
        <Grid cols={4}>
          <Card hover >
            <Flex direction="col" gap={4}>
              <div >
                <span >📚</span>
              </div>
              <H4>Getting Started</H4>
              <p >New to AI direct mail? Start here</p>
              <Link href={"/help/getting-started" as any} >
                Begin Learning →
              </Link>
            </Flex>
          </Card>
          <Card hover >
            <Flex direction="col" gap={4}>
              <div >
                <span >📝</span>
              </div>
              <H4>Templates</H4>
              <p >Ready-to-use campaign templates</p>
              <Link href={"/templates" as any} >
                Browse Templates →
              </Link>
            </Flex>
          </Card>
          <Card hover >
            <Flex direction="col" gap={4}>
              <div >
                <span >🎥</span>
              </div>
              <H4>Webinars</H4>
              <p >Live and recorded expert sessions</p>
              <Link href={"/webinars" as any} >
                Watch Webinars →
              </Link>
            </Flex>
          </Card>
          <Card hover >
            <Flex direction="col" gap={4}>
              <div >
                <span >📊</span>
              </div>
              <H4>Case Studies</H4>
              <p >Real success stories and results</p>
              <Link href={"/case-studies" as any} >
                Read Studies →
              </Link>
            </Flex>
          </Card>
        </Grid>
      </Section>
      {/* Featured Guides */}
      <Section >
        <Flex direction="col" gap={8}>
          <div >
            <Badge>Featured Guides</Badge>
            <H2>Master Every Aspect of AI Direct Mail</H2>
            <Text size="lg" >
              In-depth guides written by experts to help you succeed at every stage
            </Text>
          </div>
          <Grid cols={3}>
            <Card hover>
              <Flex direction="col" gap={4}>
                <Badge>Beginner</Badge>
                <H4>Complete Guide to AI Personalization</H4>
                <p >
                  Learn how artificial intelligence transforms generic mail into hyper-personalized
                  messages that convert. This comprehensive guide covers data requirements, AI training,
                  personalization strategies, and best practices for maximum impact.
                </p>
                <div >
                  <span>45 min read</span>
                  <span>•</span>
                  <span>12,000 reads</span>
                </div>
                <Link href={"/guides/ai-personalization" as any} >
                  Read Guide →
                </Link>
              </Flex>
            </Card>
            <Card hover>
              <Flex direction="col" gap={4}>
                <Badge>Intermediate</Badge>
                <H4>Data-Driven Campaign Optimization</H4>
                <p >
                  Discover how to use analytics and A/B testing to continuously improve your campaigns.
                  Learn to identify winning messages, optimize send times, segment audiences effectively,
                  and scale successful campaigns for maximum ROI.
                </p>
                <div >
                  <span>30 min read</span>
                  <span>•</span>
                  <span>8,500 reads</span>
                </div>
                <Link href={"/guides/campaign-optimization" as any} >
                  Read Guide →
                </Link>
              </Flex>
            </Card>
            <Card hover>
              <Flex direction="col" gap={4}>
                <Badge>Advanced</Badge>
                <H4>Enterprise Direct Mail at Scale</H4>
                <p >
                  Scale your direct mail operations from thousands to millions of pieces while maintaining
                  personalization and quality. Learn automation strategies, API integration, multi-channel
                  orchestration, and enterprise best practices.
                </p>
                <div >
                  <span>60 min read</span>
                  <span>•</span>
                  <span>5,200 reads</span>
                </div>
                <Link href={"/guides/enterprise-scale" as any} >
                  Read Guide →
                </Link>
              </Flex>
            </Card>
          </Grid>
        </Flex>
      </Section>
      {/* Industry Playbooks */}
      <Section>
        <Flex direction="col" gap={8}>
          <div >
            <Badge>Industry Playbooks</Badge>
            <H2>Proven Strategies for Your Industry</H2>
            <Text size="lg" >
              Industry-specific playbooks with strategies, templates, and benchmarks tailored to your business
            </Text>
          </div>
          <Grid cols={2}>
            <Card hover>
              <Flex direction="col" gap={4}>
                <div >
                  <div >
                    <span>🏢</span>
                  </div>
                  <H4>B2B Sales & Marketing</H4>
                </div>
                <p >
                  Account-based marketing strategies for reaching decision-makers. Learn how to break through
                  digital noise, personalize at the account level, time campaigns with sales outreach, and
                  measure pipeline impact. Includes templates for C-suite outreach, meeting requests, and
                  follow-up sequences.
                </p>
                <ul >
                  <li >
                    <span >✓</span>
                    <span >15 proven templates</span>
                  </li>
                  <li >
                    <span >✓</span>
                    <span >Industry benchmarks</span>
                  </li>
                  <li >
                    <span >✓</span>
                    <span >Integration guides</span>
                  </li>
                </ul>
                <Button as={Link} href="/playbooks/b2b" variant="ghost">
                  Access B2B Playbook
                </Button>
              </Flex>
            </Card>
            <Card hover>
              <Flex direction="col" gap={4}>
                <div >
                  <div >
                    <span>🏠</span>
                  </div>
                  <H4>Real Estate</H4>
                </div>
                <p >
                  Generate more listings and buyers with targeted neighborhood campaigns. Master farming
                  strategies, just-listed/just-sold campaigns, expired listing outreach, and FSBO conversion.
                  Includes market update templates, valuation offers, and seasonal campaign calendars.
                </p>
                <ul >
                  <li >
                    <span >✓</span>
                    <span >20 listing templates</span>
                  </li>
                  <li >
                    <span >✓</span>
                    <span >Farming strategies</span>
                  </li>
                  <li >
                    <span >✓</span>
                    <span >ROI calculators</span>
                  </li>
                </ul>
                <Button as={Link} href="/playbooks/real-estate" variant="ghost">
                  Access Real Estate Playbook
                </Button>
              </Flex>
            </Card>
            <Card hover>
              <Flex direction="col" gap={4}>
                <div >
                  <div >
                    <span>🛒</span>
                  </div>
                  <H4>E-commerce & Retail</H4>
                </div>
                <p >
                  Drive repeat purchases and win back dormant customers with personalized offers. Learn
                  cart abandonment recovery, VIP customer programs, seasonal promotions, and product
                  launch strategies. Includes offer templates, loyalty programs, and lifecycle campaigns.
                </p>
                <ul >
                  <li >
                    <span >✓</span>
                    <span >25 offer templates</span>
                  </li>
                  <li >
                    <span >✓</span>
                    <span >Segmentation guides</span>
                  </li>
                  <li >
                    <span >✓</span>
                    <span >LTV optimization</span>
                  </li>
                </ul>
                <Button as={Link} href="/playbooks/ecommerce" variant="ghost">
                  Access E-commerce Playbook
                </Button>
              </Flex>
            </Card>
            <Card hover>
              <Flex direction="col" gap={4}>
                <div >
                  <div >
                    <span>💰</span>
                  </div>
                  <H4>Financial Services</H4>
                </div>
                <p >
                  Acquire new customers and deepen relationships with compliant, personalized campaigns.
                  Master life-event targeting, cross-sell strategies, refinance campaigns, and wealth
                  management outreach. Includes compliance guidelines and regulated industry best practices.
                </p>
                <ul >
                  <li >
                    <span >✓</span>
                    <span >Compliance toolkit</span>
                  </li>
                  <li >
                    <span >✓</span>
                    <span >Life-event triggers</span>
                  </li>
                  <li >
                    <span >✓</span>
                    <span >Product templates</span>
                  </li>
                </ul>
                <Button as={Link} href="/playbooks/financial" variant="ghost">
                  Access Financial Playbook
                </Button>
              </Flex>
            </Card>
          </Grid>
        </Flex>
      </Section>
      {/* Tools & Calculators */}
      <Section >
        <Flex direction="col" gap={8}>
          <div >
            <Badge>Interactive Tools</Badge>
            <H2>Powerful Tools to Plan and Optimize</H2>
            <Text size="lg" >
              Free tools to help you calculate ROI, plan campaigns, and make data-driven decisions
            </Text>
          </div>
          <Grid cols={3}>
            <Card hover >
              <Flex direction="col" gap={4}>
                <div >
                  ROI
                </div>
                <H4>ROI Calculator</H4>
                <p >
                  Calculate your expected return on investment based on your industry, list size,
                  and average order value. See how AI personalization impacts your bottom line.
                </p>
                <Button as={Link} href="/roi-calculator">
                  Calculate ROI
                </Button>
              </Flex>
            </Card>
            <Card hover >
              <Flex direction="col" gap={4}>
                <div >
                  A/B
                </div>
                <H4>A/B Test Calculator</H4>
                <p >
                  Determine statistical significance and sample sizes for your direct mail tests.
                  Make confident decisions based on data, not guesswork.
                </p>
                <Button as={Link} href="/ab-calculator">
                  Plan A/B Tests
                </Button>
              </Flex>
            </Card>
            <Card hover >
              <Flex direction="col" gap={4}>
                <div >
                  $$$
                </div>
                <H4>Budget Planner</H4>
                <p >
                  Plan your direct mail budget across campaigns, segments, and time periods.
                  Optimize spend allocation for maximum impact.
                </p>
                <Button as={Link} href="/budget-planner">
                  Plan Budget
                </Button>
              </Flex>
            </Card>
          </Grid>
        </Flex>
      </Section>
      {/* Latest Content */}
      <Section>
        <Flex direction="col" gap={8}>
          <div >
            <Badge>Fresh Content</Badge>
            <H2>Latest Resources</H2>
            <Text size="lg" >
              Stay updated with new guides, templates, and insights added weekly
            </Text>
          </div>
          <Grid cols={3}>
            {[
              {
                type: "Article",
                title: "2024 Direct Mail Benchmarks Report",
                date: "2 days ago",
                description: "Industry benchmarks across 15 verticals with response rates, ROI, and best practices.",
                link: "/blog/2024-benchmarks",
              },
              {
                type: "Template",
                title: "Holiday Campaign Bundle",
                date: "1 week ago",
                description: "20 ready-to-use templates for Black Friday, Cyber Monday, and holiday promotions.",
                link: "/templates/holiday-bundle",
              },
              {
                type: "Webinar",
                title: "Mastering Multi-Touch Attribution",
                date: "2 weeks ago",
                description: "Learn how to track and attribute revenue across direct mail and digital channels.",
                link: "/webinars/multi-touch-attribution",
              },
              {
                type: "Case Study",
                title: "How TechCo Achieved 1,200% ROI",
                date: "3 weeks ago",
                description: "B2B SaaS company generates $2.4M pipeline from targeted ABM campaigns.",
                link: "/case-studies/techco",
              },
              {
                type: "Guide",
                title: "GDPR Compliance for Direct Mail",
                date: "1 month ago",
                description: "Everything you need to know about data privacy regulations and direct mail.",
                link: "/guides/gdpr-compliance",
              },
              {
                type: "Tool",
                title: "New: Merge Tag Generator",
                date: "1 month ago",
                description: "Automatically generate personalization tags for your CRM data fields.",
                link: "/tools/merge-tag-generator",
              },
            ].map((item, index) => (
              <Card hover key={index}>
                <Flex direction="col" gap={4}>
                  <div >
                    <Badge>{item.type}</Badge>
                    <span >{item.date}</span>
                  </div>
                  <H4>{item.title}</H4>
                  <p >{item.description}</p>
                  <Link href={item.link as any} >
                    Read more →
                  </Link>
                </Flex>
              </Card>
            ))}
          </Grid>
        </Flex>
      </Section>
      {/* Newsletter CTA */}
      <Section >
        <Flex direction="col" gap={8}  >
          <H2 >
            Get Weekly Direct Mail Insights
          </H2>
          <Text size="xl" >
            Join 25,000+ marketers receiving exclusive tips, templates, and case studies every week.
            Unsubscribe anytime.
          </Text>
          <form >
            <input
              type="email"
              placeholder="Enter your email"
              required
            />
            <Button type="submit" >
              Subscribe
            </Button>
          </form>
          <p >
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </Flex>
      </Section>
      {/* Footer */}
      <footer >
        <Section>
          <div >
            <p>© 2024 Enclosed.AI. All rights reserved.</p>
          </div>
        </Section>
      </footer>
    </div>
  );
}