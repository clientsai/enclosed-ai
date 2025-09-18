"use client";

import Link from "next/link";
import {
  Section,
  Split,
  Grid,
  Stack,
  Cluster,
  Headline,
  Subhead,
  Lead,
  Eyebrow,
  Button,
  Card,
  Badge,
  Steps
} from "@/components/premium";
import Logo from "@/components/Logo";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
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
                href="/about"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </Link>
            </nav>
            <Cluster gap={4}>
              <Button as={Link} href="/auth/login" variant="ghost" size="sm">
                Sign In
              </Button>
              <Button as={Link} href="/auth/signup" variant="primary" size="sm">
                Get Started
              </Button>
            </Cluster>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <Section className="bg-gray-50">
        <Stack gap={8}>
          <div className="text-center">
            <Stack gap={6}>
              <Eyebrow>Join Our Mission • Build the Future • Make an Impact</Eyebrow>
              <Headline level={1}>
                Join Our Mission
              </Headline>
              <Subhead className="max-w-3xl mx-auto">
                Help us revolutionize direct mail marketing with AI. We're building
                the future of personalized marketing, and we need talented people to
                join our journey.
              </Subhead>
              <Cluster gap={4} justify="center">
                <Button as={Link} href="#positions" size="lg">
                  View Open Positions
                </Button>
                <Button as={Link} href="#culture" variant="ghost" size="lg">
                  Learn About Our Culture
                </Button>
              </Cluster>
            </Stack>
          </div>
        </Stack>
      </Section>

      {/* Why Work With Us */}
      <Section id="culture">
        <Stack gap={8}>
          <div className="text-center">
            <Stack gap={4}>
              <Headline level={2}>Why Work at Enclosed.AI?</Headline>
              <Subhead className="max-w-3xl mx-auto">
                We're building something extraordinary, and we want you to be part of it.
              </Subhead>
            </Stack>
          </div>

          <Grid columns={3}>
            <Card className="p-8 text-center">
              <Stack gap={4}>
                <div className="h-16 w-16 bg-gray-900 rounded-xl flex items-center justify-center mx-auto">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <Headline level={4}>Cutting-Edge Technology</Headline>
                <p className="text-gray-600">
                  Work with the latest AI and machine learning technologies to
                  solve real-world marketing challenges.
                </p>
              </Stack>
            </Card>

            <Card className="p-8 text-center">
              <Stack gap={4}>
                <div className="h-16 w-16 bg-gray-700 rounded-xl flex items-center justify-center mx-auto">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <Headline level={4}>Collaborative Culture</Headline>
                <p className="text-gray-600">
                  Join a diverse, inclusive team where your ideas matter and
                  collaboration is encouraged.
                </p>
              </Stack>
            </Card>

            <Card className="p-8 text-center">
              <Stack gap={4}>
                <div className="h-16 w-16 bg-gray-600 rounded-xl flex items-center justify-center mx-auto">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <Headline level={4}>Competitive Benefits</Headline>
                <p className="text-gray-600">
                  Comprehensive health coverage, flexible PTO, stock options,
                  and professional development opportunities.
                </p>
              </Stack>
            </Card>

            <Card className="p-8 text-center">
              <Stack gap={4}>
                <div className="h-16 w-16 bg-gray-800 rounded-xl flex items-center justify-center mx-auto">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <Headline level={4}>Impact & Growth</Headline>
                <p className="text-gray-600">
                  Make a real impact on how businesses connect with customers
                  while growing your career in an innovative environment.
                </p>
              </Stack>
            </Card>

            <Card className="p-8 text-center">
              <Stack gap={4}>
                <div className="h-16 w-16 bg-gray-500 rounded-xl flex items-center justify-center mx-auto">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <Headline level={4}>Learning & Development</Headline>
                <p className="text-gray-600">
                  Continuous learning with resources, conferences, courses,
                  and mentorship to help you grow.
                </p>
              </Stack>
            </Card>

            <Card className="p-8 text-center">
              <Stack gap={4}>
                <div className="h-16 w-16 bg-gray-400 rounded-xl flex items-center justify-center mx-auto">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <Headline level={4}>Remote-First</Headline>
                <p className="text-gray-600">
                  Work from anywhere in the world with our remote-first culture
                  and all the tools you need to succeed.
                </p>
              </Stack>
            </Card>
          </Grid>
        </Stack>
      </Section>

      {/* Open Positions */}
      <Section id="positions" className="bg-gray-50">
        <Stack gap={8}>
          <div className="text-center">
            <Stack gap={4}>
              <Headline level={2}>Open Positions</Headline>
              <Subhead className="max-w-3xl mx-auto">
                Join our team and help build the future of direct mail marketing.
              </Subhead>
            </Stack>
          </div>

          <Stack gap={6}>
            <Card className="p-8">
              <Split>
                <Stack gap={4}>
                  <Stack gap={2}>
                    <Headline level={3}>Senior Full-Stack Engineer</Headline>
                    <Cluster gap={2}>
                      <Badge>Engineering</Badge>
                      <Badge>Full-time</Badge>
                      <Badge>Remote</Badge>
                    </Cluster>
                  </Stack>
                  <Lead>
                    Build and scale our AI-powered direct mail platform. Work on
                    React frontend, Node.js backend, with AI/ML integration opportunities.
                  </Lead>
                  <Cluster gap={4}>
                    <Button as={Link} href="/contact">
                      Apply Now
                    </Button>
                    <Button variant="ghost">
                      View Details →
                    </Button>
                  </Cluster>
                </Stack>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">$120,000 - $180,000</div>
                  <div className="text-gray-600">+ Equity + Benefits</div>
                </div>
              </Split>
            </Card>

            <Card className="p-8">
              <Split>
                <Stack gap={4}>
                  <Stack gap={2}>
                    <Headline level={3}>AI/ML Engineer</Headline>
                    <Cluster gap={2}>
                      <Badge>Engineering</Badge>
                      <Badge>Full-time</Badge>
                      <Badge>Remote</Badge>
                    </Cluster>
                  </Stack>
                  <Lead>
                    Develop personalization algorithms using large language models,
                    NLP, and machine learning for effective direct mail campaigns.
                  </Lead>
                  <Cluster gap={4}>
                    <Button as={Link} href="/contact">
                      Apply Now
                    </Button>
                    <Button variant="ghost">
                      View Details →
                    </Button>
                  </Cluster>
                </Stack>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">$130,000 - $200,000</div>
                  <div className="text-gray-600">+ Equity + Benefits</div>
                </div>
              </Split>
            </Card>

            <Card className="p-8">
              <Split>
                <Stack gap={4}>
                  <Stack gap={2}>
                    <Headline level={3}>Product Marketing Manager</Headline>
                    <Cluster gap={2}>
                      <Badge>Marketing</Badge>
                      <Badge>Full-time</Badge>
                      <Badge>Remote</Badge>
                    </Cluster>
                  </Stack>
                  <Lead>
                    Tell the story of AI-powered direct mail marketing. Develop
                    go-to-market strategies and work with product and sales teams.
                  </Lead>
                  <Cluster gap={4}>
                    <Button as={Link} href="/contact">
                      Apply Now
                    </Button>
                    <Button variant="ghost">
                      View Details →
                    </Button>
                  </Cluster>
                </Stack>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">$90,000 - $140,000</div>
                  <div className="text-gray-600">+ Equity + Benefits</div>
                </div>
              </Split>
            </Card>

            <Card className="p-8">
              <Split>
                <Stack gap={4}>
                  <Stack gap={2}>
                    <Headline level={3}>Customer Success Manager</Headline>
                    <Cluster gap={2}>
                      <Badge>Customer Success</Badge>
                      <Badge>Full-time</Badge>
                      <Badge>Remote</Badge>
                    </Cluster>
                  </Stack>
                  <Lead>
                    Ensure customer success with direct mail campaigns. Work directly
                    with clients to optimize campaigns and maximize ROI.
                  </Lead>
                  <Cluster gap={4}>
                    <Button as={Link} href="/contact">
                      Apply Now
                    </Button>
                    <Button variant="ghost">
                      View Details →
                    </Button>
                  </Cluster>
                </Stack>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">$70,000 - $110,000</div>
                  <div className="text-gray-600">+ Equity + Benefits</div>
                </div>
              </Split>
            </Card>
          </Stack>
        </Stack>
      </Section>

      {/* Benefits */}
      <Section>
        <Stack gap={8}>
          <div className="text-center">
            <Stack gap={4}>
              <Headline level={2}>Benefits & Perks</Headline>
              <Subhead className="max-w-3xl mx-auto">
                We take care of our team so you can focus on doing your best work.
              </Subhead>
            </Stack>
          </div>

          <Grid columns={3}>
            <div className="text-center">
              <Stack gap={3}>
                <div className="text-4xl">🏥</div>
                <Headline level={4}>Health & Wellness</Headline>
                <p className="text-gray-600 text-sm">
                  Comprehensive health, dental, and vision coverage for you and
                  your family
                </p>
              </Stack>
            </div>

            <div className="text-center">
              <Stack gap={3}>
                <div className="text-4xl">💰</div>
                <Headline level={4}>Equity & Compensation</Headline>
                <p className="text-gray-600 text-sm">
                  Competitive salary, stock options, and performance bonuses
                </p>
              </Stack>
            </div>

            <div className="text-center">
              <Stack gap={3}>
                <div className="text-4xl">🏖️</div>
                <Headline level={4}>Time Off</Headline>
                <p className="text-gray-600 text-sm">
                  Unlimited PTO, paid holidays, and flexible work arrangements
                </p>
              </Stack>
            </div>

            <div className="text-center">
              <Stack gap={3}>
                <div className="text-4xl">📚</div>
                <Headline level={4}>Learning Budget</Headline>
                <p className="text-gray-600 text-sm">
                  $2,000 annual learning budget for courses, conferences, and books
                </p>
              </Stack>
            </div>

            <div className="text-center">
              <Stack gap={3}>
                <div className="text-4xl">💻</div>
                <Headline level={4}>Equipment</Headline>
                <p className="text-gray-600 text-sm">
                  Latest MacBook Pro, monitor, and all the tools you need to succeed
                </p>
              </Stack>
            </div>

            <div className="text-center">
              <Stack gap={3}>
                <div className="text-4xl">🏠</div>
                <Headline level={4}>Remote Work</Headline>
                <p className="text-gray-600 text-sm">
                  Work from anywhere with home office stipend and co-working access
                </p>
              </Stack>
            </div>
          </Grid>
        </Stack>
      </Section>

      {/* Hiring Process */}
      <Section className="bg-gray-50">
        <Stack gap={8}>
          <div className="text-center">
            <Stack gap={4}>
              <Headline level={2}>Our Hiring Process</Headline>
              <Subhead className="max-w-3xl mx-auto">
                A transparent, efficient process designed to find the right fit for both sides.
              </Subhead>
            </Stack>
          </div>

          <Steps items={[
            {
              title: "Apply",
              content: "Submit your application with resume and cover letter through our careers page."
            },
            {
              title: "Initial Screen",
              content: "30-minute phone call with our hiring team to discuss your background and interests."
            },
            {
              title: "Technical Interview",
              content: "Technical assessment and team interview to evaluate your skills and approach."
            },
            {
              title: "Final Interview",
              content: "Meet the team and discuss culture fit, values alignment, and any final questions."
            }
          ]} />
        </Stack>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gray-900 text-white">
        <Stack gap={8}>
          <div className="text-center">
            <Stack gap={6}>
              <Headline level={2} className="text-white">
                Don't See Your Role?
              </Headline>
              <Subhead className="text-gray-300 max-w-2xl mx-auto">
                We're always looking for talented people who share our vision. Send
                us your resume and tell us how you'd like to contribute.
              </Subhead>
              <Cluster gap={4} justify="center">
                <Button as={Link} href="/contact" className="bg-white text-gray-900 hover:bg-gray-100">
                  Send Resume
                </Button>
                <Button as={Link} href="/team" variant="ghost" className="border-white text-white hover:bg-white hover:text-gray-900">
                  Meet the Team
                </Button>
              </Cluster>
            </Stack>
          </div>
        </Stack>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <Grid columns={4}>
            <div>
              <Logo size="md" showText={true} linkToHome={false} className="mb-4" />
              <p className="text-gray-600 text-sm">
                Direct mail marketing powered by artificial intelligence
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Product</h3>
              <Stack gap={2}>
                <Link href="/features" className="text-gray-600 hover:text-gray-900 text-sm">Features</Link>
                <Link href="/pricing" className="text-gray-600 hover:text-gray-900 text-sm">Pricing</Link>
                <Link href="/integrations" className="text-gray-600 hover:text-gray-900 text-sm">Integrations</Link>
              </Stack>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Company</h3>
              <Stack gap={2}>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm">About</Link>
                <Link href="/team" className="text-gray-600 hover:text-gray-900 text-sm">Team</Link>
                <Link href="/careers" className="text-gray-600 hover:text-gray-900 text-sm">Careers</Link>
              </Stack>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Support</h3>
              <Stack gap={2}>
                <Link href="/help" className="text-gray-600 hover:text-gray-900 text-sm">Help Center</Link>
                <Link href="/privacy" className="text-gray-600 hover:text-gray-900 text-sm">Privacy</Link>
                <Link href="/terms" className="text-gray-600 hover:text-gray-900 text-sm">Terms</Link>
              </Stack>
            </div>
          </Grid>
          <div className="border-t border-gray-300 mt-8 pt-8 text-center text-sm text-gray-600">
            <p>&copy; 2024 Enclosed.AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}