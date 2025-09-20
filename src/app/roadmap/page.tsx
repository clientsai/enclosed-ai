import Link from "next/link";
import Logo from "@/components/Logo";
import {
  Section,
  Grid,
  Flex,
  H1,
  H2,
  H3,
  H4,
  Text,
  Button,
  Card,
  Badge,
} from "@/components/ui";
export const metadata = {
  title: "Product Roadmap - Enclosed.AI | Upcoming Features & Updates",
  description:
    "Explore our product roadmap and see what new features and improvements are coming to Enclosed.AI's AI-powered direct mail platform.",
};
export default function RoadmapPage() {
  const roadmapItems = [
    {
      date: "Q2 2024",
      title: "Advanced AI Personalization Engine 2.0",
      content: "Enhanced machine learning algorithms that analyze customer behavior patterns to create even more personalized and effective direct mail content. Includes sentiment analysis and predictive modeling for optimal messaging timing."
    },
    {
      date: "Q2 2024",
      title: "Real-Time Campaign Optimization",
      content: "Automatic campaign adjustments based on real-time performance data. The system will dynamically modify messaging, timing, and targeting to improve response rates during active campaigns."
    },
    {
      date: "Q3 2024",
      title: "Mobile App for Campaign Management",
      content: "Native iOS and Android apps allowing full campaign management on mobile devices. Includes approval workflows, performance monitoring, and instant notifications for campaign milestones."
    },
    {
      date: "Q3 2024",
      title: "Enhanced CRM Integrations",
      content: "Deeper integrations with Salesforce, HubSpot, and Microsoft Dynamics. Includes bidirectional data sync, automated lead scoring, and trigger-based campaign launches from CRM events."
    },
    {
      date: "Q4 2024",
      title: "International Expansion",
      content: "Support for international direct mail campaigns in Canada, UK, and Australia. Includes local postal regulations, currency handling, and region-specific compliance features."
    },
    {
      date: "Q4 2024",
      title: "Advanced Analytics Dashboard",
      content: "Comprehensive analytics suite with predictive insights, cohort analysis, and advanced segmentation tools. Includes custom report builder and automated performance alerts."
    },
    {
      date: "Q1 2025",
      title: "AI Voice Assistant Integration",
      content: "Voice-controlled campaign creation and management through integration with popular AI assistants. Create campaigns, check performance, and approve designs using natural language commands."
    },
    {
      date: "Q1 2025",
      title: "White-Label Platform",
      content: "Complete white-label solution for agencies and resellers. Includes custom branding, client management tools, and sub-account functionality with granular permissions."
    },
  ];
  const currentFeatures = [
    "AI-Powered Content Generation",
    "Multi-Channel Campaign Coordination",
    "Real-Time Performance Tracking",
    "CRM Integration (Salesforce, HubSpot)",
    "Automated A/B Testing",
    "Compliance Management Tools",
    "Custom Template Builder",
    "Advanced Audience Segmentation",
  ];
  const upcomingHighlights = [
    {
      title: "Global Expansion",
      description: "Expanding direct mail capabilities to international markets with local compliance and postal integration.",
      quarter: "Q4 2024",
      impact: "Access new markets and serve international customers",
    },
    {
      title: "Mobile-First Experience",
      description: "Native mobile apps for campaign management and performance monitoring on the go.",
      quarter: "Q3 2024",
      impact: "Manage campaigns from anywhere with full functionality",
    },
    {
      title: "AI 2.0 Engine",
      description: "Next-generation AI with advanced behavioral analysis and predictive personalization.",
      quarter: "Q2 2024",
      impact: "20-30% improvement in campaign response rates",
    },
  ];
  return (
    <div >
      {/* Header */}
      {/* Hero Section */}
      <Section >
        <Flex direction="col" gap={6}>
          <Badge>Product Roadmap</Badge>
          <H1>The Future of AI-Powered Direct Mail</H1>
          <Text size="lg" >
            Discover what's coming next for Enclosed.AI. Our roadmap reflects customer feedback, market trends, and our vision for the future of direct mail marketing. Stay ahead with the latest innovations.
          </Text>
          <Flex gap={4} justify="center">
            <Button as={Link} href="/auth/signup" size="lg">Get Early Access</Button>
            <Button as={Link} href="#timeline" variant="ghost" size="lg">View Timeline</Button>
          </Flex>
        </Flex>
      </Section>
      {/* Current Features */}
      <Section >
        <Flex direction="col" gap={8}>
          <div >
            <H2>Available Today</H2>
            <Text size="lg" >Powerful features already helping thousands of businesses succeed</Text>
          </div>
          <Card >
            <Grid cols={2}>
              {currentFeatures.map((feature, index) => (
                <div key={index} >
                  <div >
                    <span >✓</span>
                  </div>
                  <span >{feature}</span>
                </div>
              ))}
            </Grid>
          </Card>
        </Flex>
      </Section>
      {/* Upcoming Highlights */}
      <Section>
        <Flex direction="col" gap={8}>
          <div >
            <H2>Coming Soon Highlights</H2>
            <Text size="lg" >Major features and improvements on the horizon</Text>
          </div>
          <Grid cols={3}>
            {upcomingHighlights.map((highlight, index) => (
              <Card key={index} >
                <Flex direction="col" gap={4}>
                  <div >
                    <Badge variant="default">{highlight.quarter}</Badge>
                  </div>
                  <H4 >{highlight.title}</H4>
                  <p >{highlight.description}</p>
                  <div >
                    <p >Impact: {highlight.impact}</p>
                  </div>
                </Flex>
              </Card>
            ))}
          </Grid>
        </Flex>
      </Section>
      {/* Roadmap Timeline */}
      <Section id="timeline" >
        <Flex direction="col" gap={8}>
          <div >
            <H2>Development Timeline</H2>
            <Text size="lg" >Detailed roadmap of upcoming features and improvements</Text>
          </div>
          <div >
            {/* Custom Timeline Implementation */}
            <div >
              {roadmapItems.map((item, index) => (
                <div key={index} >
                  {/* Timeline Line */}
                  {index < roadmapItems.length - 1 && (
                    <div ></div>
                  )}
                  <Flex gap={6} align="start">
                    {/* Timeline Dot */}
                    <div >
                      <div >
                        <div ></div>
                      </div>
                    </div>
                    {/* Content */}
                    <Card >
                      <Flex direction="col" gap={4}>
                        <div >
                          <Badge variant="accent">{item.date}</Badge>
                        </div>
                        <H4>{item.title}</H4>
                        <Text >{item.content}</Text>
                      </Flex>
                    </Card>
                  </Flex>
                </div>
              ))}
            </div>
          </div>
        </Flex>
      </Section>
      {/* Feature Requests */}
      <Section>
        <Flex direction="col" gap={8}>
          <div >
            <H2>Shape Our Future</H2>
            <Text size="lg" >Your feedback drives our development priorities</Text>
          </div>
          <Grid cols={2}>
            <Card >
              <Flex direction="col" gap={4}>
                <H3>Request a Feature</H3>
                <p >
                  Have an idea for a feature that would improve your direct mail campaigns? We want to hear from you! Our product team reviews all submissions and prioritizes based on customer impact.
                </p>
                <Button>Submit Feature Request</Button>
              </Flex>
            </Card>
            <Card >
              <Flex direction="col" gap={4}>
                <H3>Join Beta Testing</H3>
                <p >
                  Get early access to new features and help us perfect them before general release. Beta testers receive exclusive previews and can directly influence final implementations.
                </p>
                <Button variant="ghost">Join Beta Program</Button>
              </Flex>
            </Card>
          </Grid>
        </Flex>
      </Section>
      {/* CTA Section */}
      <Section >
        <Flex direction="col" gap={6}>
          <H2>Ready to Experience the Future?</H2>
          <Text size="lg" >
            Start using Enclosed.AI today and get automatic access to all new features as they're released. No additional costs, just continuous innovation.
          </Text>
          <Flex gap={4} justify="center">
            <Button as={Link} href="/auth/signup" size="lg" >Start Free Trial</Button>
            <Button as={Link} href="/contact" variant="ghost" size="lg" >Contact Us</Button>
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
              <h3 >Product</h3>
              <Flex direction="col" gap={2}>
                <Link href="/features" >Features</Link>
                <Link href="/pricing" >Pricing</Link>
                <Link href="/roadmap" >Roadmap</Link>
                <Link href="/integrations" >Integrations</Link>
              </Flex>
            </div>
            <div>
              <h3 >Company</h3>
              <Flex direction="col" gap={2}>
                <Link href="/about" >About Us</Link>
                <Link href="/careers" >Careers</Link>
                <Link href="/press" >Press</Link>
                <Link href="/contact" >Contact</Link>
              </Flex>
            </div>
            <div>
              <h3 >Resources</h3>
              <Flex direction="col" gap={2}>
                <Link href="/webinars" >Webinars</Link>
                <Link href="/partners" >Partners</Link>
                <Link href="/press" >Press</Link>
                <Link href="/help" >Support</Link>
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