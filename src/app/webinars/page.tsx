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
                href="/pricing"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/webinars"
                className="text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Webinars
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
          <Badge>Expert Training</Badge>
          <H1 level={1}>
            Master Direct Mail Marketing with Expert-Led Webinars
          </H1>
          <Text className="max-w-3xl mx-auto">
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
          <div className="text-center">
            <H1 level={2}>Upcoming Live Webinars</H1>
            <Text className="max-w-3xl mx-auto">
              Reserve your spot in our upcoming live sessions. Interact directly with experts, ask questions, and get personalized advice for your specific challenges.
            </Text>
          </div>

          <div className="space-y-6">
            {upcomingWebinars.map((webinar, index) => (
              <Card key={index} hover className={`p-8 ${webinar.featured ? 'border-2 border-gray-900' : ''}`}>
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <Flex gap={4}>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <Flex gap={2} className="mb-2">
                            {webinar.featured && (
                              <Badge variant="default" className="bg-gray-900 text-white">
                                Featured
                              </Badge>
                            )}
                            <span className="text-sm text-gray-600">
                              {webinar.registrations} registered
                            </span>
                          </Flex>
                          <H1 level={3} className="text-xl">
                            {webinar.title}
                          </H1>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="font-semibold text-gray-900">Date:</span>
                          <div className="text-gray-700">{webinar.date}</div>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900">Time:</span>
                          <div className="text-gray-700">{webinar.time}</div>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900">Duration:</span>
                          <div className="text-gray-700">{webinar.duration}</div>
                        </div>
                      </div>

                      <div className="text-sm">
                        <span className="font-semibold text-gray-900">Presenter:</span>
                        <span className="text-gray-700 ml-2">{webinar.presenter}</span>
                      </div>

                      <p className="text-gray-700 leading-relaxed">
                        {webinar.description}
                      </p>
                    </Flex>
                  </div>

                  <div className="flex flex-col justify-center gap-3 lg:w-48">
                    <Button size="md" className="w-full">
                      Register Free
                    </Button>
                    <Button variant="ghost" size="md" className="w-full">
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
      <Section id="recorded" className="bg-gray-50">
        <Flex gap={8}>
          <div className="text-center">
            <H1 level={2}>On-Demand Webinar Library</H1>
            <Text className="max-w-3xl mx-auto">
              Access our comprehensive library of recorded webinars. Learn at your own pace with expert insights available 24/7.
            </Text>
          </div>

          <div className="space-y-8">
            <Flex gap={4} className="border-b border-gray-200 pb-2">
              <Button variant="ghost" className="pb-2 border-b-2 border-blue-600">
                All Webinars
              </Button>
              <Button variant="ghost" className="pb-2">
                Strategy
              </Button>
              <Button variant="ghost" className="pb-2">
                Design
              </Button>
              <Button variant="ghost" className="pb-2">
                Analytics
              </Button>
            </Flex>

            <Grid columns={2}>
              {recordedWebinars.map((webinar, index) => (
                      <Card key={index} hover className="p-6">
                        <Flex gap={4}>
                          <div className="flex items-start justify-between">
                            <Badge variant="default">
                              {webinar.category}
                            </Badge>
                            <span className="text-sm text-gray-600">
                              {webinar.views.toLocaleString()} views
                            </span>
                          </div>

                          <H1 level={4} className="text-lg">
                            {webinar.title}
                          </H1>

                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="font-semibold text-gray-900">Date:</span>
                              <div className="text-gray-700">{webinar.date}</div>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-900">Duration:</span>
                              <div className="text-gray-700">{webinar.duration}</div>
                            </div>
                          </div>

                          <div className="text-sm">
                            <span className="font-semibold text-gray-900">Presenter:</span>
                            <span className="text-gray-700 ml-2">{webinar.presenter}</span>
                          </div>

                          <p className="text-gray-700 text-sm leading-relaxed">
                            {webinar.description}
                          </p>

                          <Button size="sm" className="w-full mt-auto">
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
          <div className="text-center">
            <H1 level={2}>Why Attend Our Webinars?</H1>
            <Text className="max-w-3xl mx-auto">
              Learn from industry experts and join a community of successful direct mail marketers
            </Text>
          </div>

          <Grid columns={3}>
            <Card className="p-6 text-center">
              <Flex gap={4}>
                <div className="h-12 w-12 bg-gray-900 rounded-lg flex items-center justify-center mx-auto">
                  <svg
                    className="h-6 w-6 text-white"
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
                <p className="text-gray-700 leading-relaxed">
                  Learn from industry professionals with years of direct mail marketing experience and proven track records.
                </p>
              </Flex>
            </Card>

            <Card className="p-6 text-center">
              <Flex gap={4}>
                <div className="h-12 w-12 bg-gray-900 rounded-lg flex items-center justify-center mx-auto">
                  <svg
                    className="h-6 w-6 text-white"
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
                <p className="text-gray-700 leading-relaxed">
                  Participate in live Q&A sessions, polls, and discussions with fellow marketers and industry experts.
                </p>
              </Flex>
            </Card>

            <Card className="p-6 text-center">
              <Flex gap={4}>
                <div className="h-12 w-12 bg-gray-900 rounded-lg flex items-center justify-center mx-auto">
                  <svg
                    className="h-6 w-6 text-white"
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
                <p className="text-gray-700 leading-relaxed">
                  Walk away with concrete tactics and frameworks you can implement immediately to improve your campaigns.
                </p>
              </Flex>
            </Card>
          </Grid>
        </Flex>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gray-900 text-white text-center">
        <Flex gap={6}>
          <H1 level={2} className="text-white">
            Ready to Level Up Your Direct Mail Marketing?
          </H1>
          <Text className="text-gray-300 max-w-3xl mx-auto">
            Join thousands of marketers who have transformed their campaigns through our expert-led training. Register for upcoming webinars or start learning today with our on-demand library.
          </Text>
          <Flex gap={4} justify="center">
            <Button as={Link} href="#upcoming" size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              Register for Webinar
            </Button>
            <Button as={Link} href="/auth/signup" variant="ghost" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
              Start Free Trial
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
                <Link href="/team" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Team
                </Link>
                <Link href="/careers" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Careers
                </Link>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </Flex>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <Flex gap={2}>
                <Link href="/webinars" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Webinars
                </Link>
                <Link href="/resources" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Resources
                </Link>
                <Link href="/press" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Press
                </Link>
                <Link href="/partners" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Partners
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