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
  title: "Webinars - Enclosed.AI | Learn Direct Mail Marketing",
  description:
    "Join our expert-led webinars to master AI-powered direct mail marketing. Access live sessions and recorded content to grow your marketing expertise.",
};
export default function WebinarsPage() {
  const upcomingWebinars = [
    {
      title: "AI-Powered Personalization: The Future of Direct Mail",
      date: "March 28, 2024",
      time: "2:00 PM EST",
      duration: "60 minutes",
      presenter: "Sarah Chen, VP of AI Innovation",
      description: "Discover how artificial intelligence is revolutionizing direct mail personalization. Learn advanced techniques to create hyper-targeted campaigns that drive unprecedented response rates.",
      registrations: 847,
      featured: true,
    },
    {
      title: "Maximizing ROI: Advanced Analytics for Direct Mail Campaigns",
      date: "April 5, 2024",
      time: "1:00 PM EST",
      duration: "45 minutes",
      presenter: "Michael Rodriguez, Senior Data Scientist",
      description: "Deep dive into analytics strategies that can triple your direct mail ROI. Learn to interpret data, optimize campaigns, and make data-driven decisions.",
      registrations: 623,
      featured: false,
    },
    {
      title: "Compliance and Privacy in Direct Mail Marketing",
      date: "April 12, 2024",
      time: "11:00 AM EST",
      duration: "45 minutes",
      presenter: "Jennifer Walsh, Legal Affairs Director",
      description: "Navigate the complex landscape of privacy regulations and compliance requirements. Ensure your campaigns meet GDPR, CCPA, and other regulatory standards.",
      registrations: 445,
      featured: false,
    },
    {
      title: "Cross-Channel Integration: Direct Mail + Digital Strategy",
      date: "April 19, 2024",
      time: "3:00 PM EST",
      duration: "60 minutes",
      presenter: "David Kim, Marketing Strategy Text",
      description: "Learn how to seamlessly integrate direct mail with your digital marketing channels for maximum impact. Real case studies and actionable strategies included.",
      registrations: 789,
      featured: false,
    },
  ];
  const recordedWebinars = [
    {
      title: "Getting Started with Enclosed.AI: Platform Overview",
      date: "February 15, 2024",
      duration: "30 minutes",
      presenter: "Alex Johnson, Product Manager",
      views: 2347,
      category: "Platform",
      description: "Complete walkthrough of the Enclosed.AI platform, from account setup to sending your first campaign.",
    },
    {
      title: "List Management Best Practices",
      date: "February 8, 2024",
      duration: "45 minutes",
      presenter: "Lisa Park, Customer Success",
      views: 1876,
      category: "Strategy",
      description: "Learn proven strategies for building, segmenting, and maintaining high-quality prospect lists.",
    },
    {
      title: "Design That Converts: Direct Mail Creative Best Practices",
      date: "January 25, 2024",
      duration: "50 minutes",
      presenter: "Rachel Thompson, Creative Director",
      views: 3124,
      category: "Design",
      description: "Master the art of direct mail design with proven techniques that boost response rates.",
    },
    {
      title: "Advanced Targeting Strategies",
      date: "January 18, 2024",
      duration: "40 minutes",
      presenter: "Chris Martinez, Data Analyst",
      views: 2689,
      category: "Strategy",
      description: "Go beyond basic demographics with advanced targeting techniques using behavioral and psychographic data.",
    },
    {
      title: "A/B Testing Your Direct Mail Campaigns",
      date: "January 11, 2024",
      duration: "35 minutes",
      presenter: "Emily Foster, Growth Marketing",
      views: 1954,
      category: "Analytics",
      description: "Learn how to design, execute, and analyze A/B tests to continuously improve your campaign performance.",
    },
    {
      title: "Seasonal Campaign Planning and Execution",
      date: "December 20, 2023",
      duration: "55 minutes",
      presenter: "Mark Wilson, Campaign Manager",
      views: 2156,
      category: "Strategy",
      description: "Plan and execute successful seasonal campaigns with timing strategies and seasonal messaging techniques.",
    },
  ];
  const webinarCategories = [
    { name: "All", count: recordedWebinars.length },
    { name: "Platform", count: 1 },
    { name: "Strategy", count: 3 },
    { name: "Design", count: 1 },
    { name: "Analytics", count: 1 },
  ];
  return (
    <div >
      {/* Header */}
      {/* Hero Section */}
      <Section >
        <Flex gap={6}>
          <Badge>Expert Training</Badge>
          <H1 level={1}>
            Master Direct Mail Marketing with Expert-Led Webinars
          </H1>
          <Text >
            Join industry experts and successful marketers in live and recorded sessions designed to help you maximize your direct mail ROI. Learn advanced strategies, best practices, and insider tips from the professionals who've mastered AI-powered direct mail marketing.
          </Text>
          <Flex gap={4} justify="center">
            <Button as={Link} href="#upcoming" size="lg">
              View Upcoming Sessions
            </Button>
            <Button as={Link} href="#recorded" variant="ghost" size="lg">
              Browse Library
            </Button>
          </Flex>
        </Flex>
      </Section>
      {/* Upcoming Webinars Section */}
      <Section id="upcoming">
        <Flex gap={8}>
          <div >
            <H1 level={2}>Upcoming Live Webinars</H1>
            <Text >
              Reserve your spot in our upcoming live sessions. Interact directly with experts, ask questions, and get personalized advice for your specific challenges.
            </Text>
          </div>
          <div >
            {upcomingWebinars.map((webinar, index) => (
              <Card key={index} hover className={`p-8 ${webinar.featured ? 'border-2 border-gray-900' : ''}`}>
                <div >
                  <div >
                    <Flex gap={4}>
                      <div >
                        <div >
                          <Flex gap={2} >
                            {webinar.featured && (
                              <Badge variant="default" >
                                Featured
                              </Badge>
                            )}
                            <span >
                              {webinar.registrations} registered
                            </span>
                          </Flex>
                          <H1 level={3} >
                            {webinar.title}
                          </H1>
                        </div>
                      </div>
                      <div >
                        <div>
                          <span >Date:</span>
                          <div >{webinar.date}</div>
                        </div>
                        <div>
                          <span >Time:</span>
                          <div >{webinar.time}</div>
                        </div>
                        <div>
                          <span >Duration:</span>
                          <div >{webinar.duration}</div>
                        </div>
                      </div>
                      <div >
                        <span >Presenter:</span>
                        <span >{webinar.presenter}</span>
                      </div>
                      <p >
                        {webinar.description}
                      </p>
                    </Flex>
                  </div>
                  <div >
                    <Button size="md" >
                      Register Free
                    </Button>
                    <Button variant="ghost" size="md" >
                      Add to Calendar
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Flex>
      </Section>
      {/* Recorded Webinars Section */}
      <Section id="recorded" >
        <Flex gap={8}>
          <div >
            <H1 level={2}>On-Demand Webinar Library</H1>
            <Text >
              Access our comprehensive library of recorded webinars. Learn at your own pace with expert insights available 24/7.
            </Text>
          </div>
          <div >
            <Flex gap={4} >
              <Button variant="ghost" >
                All Webinars
              </Button>
              <Button variant="ghost" >
                Strategy
              </Button>
              <Button variant="ghost" >
                Design
              </Button>
              <Button variant="ghost" >
                Analytics
              </Button>
            </Flex>
            <Grid columns={2}>
              {recordedWebinars.map((webinar, index) => (
                      <Card key={index} hover >
                        <Flex gap={4}>
                          <div >
                            <Badge variant="default">
                              {webinar.category}
                            </Badge>
                            <span >
                              {webinar.views.toLocaleString()} views
                            </span>
                          </div>
                          <H1 level={4} >
                            {webinar.title}
                          </H1>
                          <div >
                            <div>
                              <span >Date:</span>
                              <div >{webinar.date}</div>
                            </div>
                            <div>
                              <span >Duration:</span>
                              <div >{webinar.duration}</div>
                            </div>
                          </div>
                          <div >
                            <span >Presenter:</span>
                            <span >{webinar.presenter}</span>
                          </div>
                          <p >
                            {webinar.description}
                          </p>
                          <Button size="sm" >
                            Watch Now
                          </Button>
                        </Flex>
                      </Card>
                    ))}
            </Grid>
          </div>
        </Flex>
      </Section>
      {/* Benefits Section */}
      <Section>
        <Flex gap={8}>
          <div >
            <H1 level={2}>Why Attend Our Webinars?</H1>
            <Text >
              Learn from industry experts and join a community of successful direct mail marketers
            </Text>
          </div>
          <Grid columns={3}>
            <Card >
              <Flex gap={4}>
                <div >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <H1 level={4}>Expert Knowledge</H1>
                <p >
                  Learn from industry professionals with years of direct mail marketing experience and proven track records.
                </p>
              </Flex>
            </Card>
            <Card >
              <Flex gap={4}>
                <div >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <H1 level={4}>Interactive Learning</H1>
                <p >
                  Participate in live Q&A sessions, polls, and discussions with fellow marketers and industry experts.
                </p>
              </Flex>
            </Card>
            <Card >
              <Flex gap={4}>
                <div >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <H1 level={4}>Actionable Strategies</H1>
                <p >
                  Walk away with concrete tactics and frameworks you can implement immediately to improve your campaigns.
                </p>
              </Flex>
            </Card>
          </Grid>
        </Flex>
      </Section>
      {/* CTA Section */}
      <Section >
        <Flex gap={6}>
          <H1 level={2} >
            Ready to Level Up Your Direct Mail Marketing?
          </H1>
          <Text >
            Join thousands of marketers who have transformed their campaigns through our expert-led training. Register for upcoming webinars or start learning today with our on-demand library.
          </Text>
          <Flex gap={4} justify="center">
            <Button as={Link} href="#upcoming" size="lg" >
              Register for Webinar
            </Button>
            <Button as={Link} href="/auth/signup" variant="ghost" size="lg" >
              Start Free Trial
            </Button>
          </Flex>
        </Flex>
      </Section>
      {/* Footer */}
      <footer >
        <Section >
          <Grid columns={4}>
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
                <Link href="/team" >
                  Team
                </Link>
                <Link href="/careers" >
                  Careers
                </Link>
                <Link href="/contact" >
                  Contact
                </Link>
              </Flex>
            </div>
            <div>
              <h3 >Resources</h3>
              <Flex gap={2}>
                <Link href="/webinars" >
                  Webinars
                </Link>
                <Link href="/resources" >
                  Resources
                </Link>
                <Link href="/press" >
                  Press
                </Link>
                <Link href="/partners" >
                  Partners
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