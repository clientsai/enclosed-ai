"use client";

import Link from "next/link";
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
  Badge
} from "@/components/ui";
import Logo from "@/components/Logo";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
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
            <Flex gap={4}>
              <Button as={Link} href="/auth/login" variant="ghost" size="sm">
                Sign In
              </Button>
              <Button as={Link} href="/auth/signup" variant="primary" size="sm">
                Get Started
              </Button>
            </Flex>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <Section className="bg-gray-50">
        <Flex direction="col" gap={8}>
          <div className="text-center">
            <Flex direction="col" gap={6}>
              <Badge>Talented Team • 25+ Experts • Global Impact</Badge>
              <H1>
                Meet Our Amazing Team
              </H1>
              <Text size="lg" className="max-w-4xl mx-auto">
                We're a diverse group of marketers, engineers, and AI specialists
                united by our passion for revolutionizing direct mail marketing
                through technology and innovation.
              </Text>
              <Flex gap={4} justify="center">
                <Button as={Link} href="#leadership" size="lg">
                  Meet the Texters
                  <svg
                    className="ml-2 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Button>
                <Button as={Link} href="/careers" variant="ghost" size="lg">
                  Join Our Team
                </Button>
              </Flex>
            </Flex>
          </div>
        </Flex>
      </Section>

      {/* Textership Team Section */}
      <Section id="leadership">
        <Flex direction="col" gap={8}>
          <div className="text-center">
            <Flex direction="col" gap={4}>
              <H2>Textership Team</H2>
              <div className="w-20 h-1 bg-gray-900 rounded-full mx-auto"></div>
              <Text size="lg" className="max-w-3xl mx-auto">
                Meet the visionary leaders driving innovation and growth at
                Enclosed.AI
              </Text>
            </Flex>
          </div>

          <Grid cols={3}>
            {/* CEO */}
            <Card hover className="p-8 text-center">
              <Flex direction="col" gap={6}>
                <div className="relative mx-auto">
                  <div className="w-32 h-32 bg-gray-900 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">SM</span>
                  </div>
                </div>
                <Flex direction="col" gap={2}>
                  <H3>Sarah Mitchell</H3>
                  <Badge>CEO & Co-Founder</Badge>
                </Flex>
                <Text size="xl">
                  Former VP of Marketing at TechCorp with 15+ years in direct mail
                  marketing. Sarah leads our strategic vision and customer success
                  initiatives.
                </Text>
                <Flex gap={4} justify="center">
                  <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </Flex>
              </Flex>
            </Card>

            {/* CTO */}
            <Card hover className="p-8 text-center">
              <Flex direction="col" gap={6}>
                <div className="relative mx-auto">
                  <div className="w-32 h-32 bg-gray-700 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">DJ</span>
                  </div>
                </div>
                <Flex direction="col" gap={2}>
                  <H3>David Johnson</H3>
                  <Badge>CTO & Co-Founder</Badge>
                </Flex>
                <Text size="xl">
                  AI/ML expert and former Google engineer with 12+ years building
                  scalable systems. David leads our technical vision and AI
                  development.
                </Text>
                <Flex gap={4} justify="center">
                  <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </Flex>
              </Flex>
            </Card>

            {/* Head of Product */}
            <Card hover className="p-8 text-center">
              <Flex direction="col" gap={6}>
                <div className="relative mx-auto">
                  <div className="w-32 h-32 bg-gray-600 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">LC</span>
                  </div>
                </div>
                <Flex direction="col" gap={2}>
                  <H3>Lisa Chen</H3>
                  <Badge>Head of Product</Badge>
                </Flex>
                <Text size="xl">
                  UX specialist and former product lead at Mailchimp with 10+
                  years designing user-centric experiences. Lisa ensures our
                  platform is intuitive and delightful.
                </Text>
                <Flex gap={4} justify="center">
                  <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </Flex>
              </Flex>
            </Card>
          </Grid>
        </Flex>
      </Section>

      {/* Engineering Team */}
      <Section className="bg-gray-50">
        <Flex direction="col" gap={8}>
          <div className="text-center">
            <Flex direction="col" gap={4}>
              <H2>Engineering Excellence</H2>
              <Text size="lg" className="max-w-3xl mx-auto">
                Our engineering team combines deep technical expertise with creative
                problem-solving to build the most advanced AI-powered platform.
              </Text>
            </Flex>
          </div>

          <Grid cols={4}>
            {/* Engineering team members */}
            <Card hover className="p-6 text-center">
              <Flex direction="col" gap={4}>
                <div className="w-20 h-20 bg-gray-800 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-white text-xl font-bold">MR</span>
                </div>
                <Flex direction="col" gap={1}>
                  <H4>Michael Rodriguez</H4>
                  <Badge variant="default">Head of Engineering</Badge>
                </Flex>
                <p className="text-gray-600 text-sm">
                  Full-stack developer and scalability expert building robust systems.
                </p>
              </Flex>
            </Card>

            <Card hover className="p-6 text-center">
              <Flex direction="col" gap={4}>
                <div className="w-20 h-20 bg-gray-600 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-white text-xl font-bold">AK</span>
                </div>
                <Flex direction="col" gap={1}>
                  <H4>Alex Kim</H4>
                  <Badge variant="default">Senior AI Engineer</Badge>
                </Flex>
                <p className="text-gray-600 text-sm">
                  Machine learning specialist focused on personalization algorithms.
                </p>
              </Flex>
            </Card>

            <Card hover className="p-6 text-center">
              <Flex direction="col" gap={4}>
                <div className="w-20 h-20 bg-gray-500 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-white text-xl font-bold">JS</span>
                </div>
                <Flex direction="col" gap={1}>
                  <H4>Jessica Smith</H4>
                  <Badge variant="default">Frontend Engineer</Badge>
                </Flex>
                <p className="text-gray-600 text-sm">
                  React and TypeScript expert creating beautiful user interfaces.
                </p>
              </Flex>
            </Card>

            <Card hover className="p-6 text-center">
              <Flex direction="col" gap={4}>
                <div className="w-20 h-20 bg-gray-700 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-white text-xl font-bold">RC</span>
                </div>
                <Flex direction="col" gap={1}>
                  <H4>Ryan Chen</H4>
                  <Badge variant="default">Backend Engineer</Badge>
                </Flex>
                <p className="text-gray-600 text-sm">
                  Database specialist ensuring platform scales to millions of users.
                </p>
              </Flex>
            </Card>
          </Grid>
        </Flex>
      </Section>

      {/* Company Values */}
      <Section>
        <Flex direction="col" gap={8}>
          <div className="text-center">
            <Flex direction="col" gap={4}>
              <H2>Our Values</H2>
              <Text size="lg" className="max-w-3xl mx-auto">
                These core values guide everything we do, from how we build our
                product to how we serve our customers.
              </Text>
            </Flex>
          </div>

          <Grid cols={4}>
            <Card className="p-6 text-center">
              <Flex direction="col" gap={4}>
                <div className="h-16 w-16 bg-gray-900 rounded-xl flex items-center justify-center mx-auto">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <H4>Innovation</H4>
                <p className="text-gray-600 text-sm">
                  We constantly push boundaries and explore new technologies to
                  solve real marketing challenges.
                </p>
              </Flex>
            </Card>

            <Card className="p-6 text-center">
              <Flex direction="col" gap={4}>
                <div className="h-16 w-16 bg-gray-700 rounded-xl flex items-center justify-center mx-auto">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <H4>Customer Success</H4>
                <p className="text-gray-600 text-sm">
                  Your success is our success. We measure performance by how
                  well customers achieve their goals.
                </p>
              </Flex>
            </Card>

            <Card className="p-6 text-center">
              <Flex direction="col" gap={4}>
                <div className="h-16 w-16 bg-gray-600 rounded-xl flex items-center justify-center mx-auto">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <H4>Collaboration</H4>
                <p className="text-gray-600 text-sm">
                  Best solutions come from diverse teams working together,
                  fostering an inclusive environment.
                </p>
              </Flex>
            </Card>

            <Card className="p-6 text-center">
              <Flex direction="col" gap={4}>
                <div className="h-16 w-16 bg-gray-800 rounded-xl flex items-center justify-center mx-auto">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <H4>Excellence</H4>
                <p className="text-gray-600 text-sm">
                  We strive for excellence in everything, ensuring every
                  interaction exceeds expectations.
                </p>
              </Flex>
            </Card>
          </Grid>
        </Flex>
      </Section>

      {/* Join Our Team */}
      <Section className="bg-gray-900 text-white">
        <Flex direction="col" gap={8}>
          <div className="text-center">
            <Flex direction="col" gap={6}>
              <H2 className="text-white">
                Ready to Join Our Team?
              </H2>
              <Text size="lg" className="text-gray-300 max-w-3xl mx-auto">
                We're always looking for talented individuals who share our passion
                for innovation and excellence. Join us in revolutionizing direct mail.
              </Text>
              <Flex gap={4} justify="center">
                <Button as={Link} href="/careers" size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                  View Open Positions
                </Button>
                <Button as={Link} href="/contact" variant="ghost" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
                  Get in Touch
                </Button>
              </Flex>
            </Flex>
          </div>

          <Grid cols={3}>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-gray-300">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-gray-300">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-gray-300">Remote Friendly</div>
            </div>
          </Grid>
        </Flex>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <Grid cols={4}>
            <div>
              <Logo size="md" showText={true} linkToHome={false} className="mb-4" />
              <p className="text-gray-600 text-sm">
                Direct mail marketing powered by artificial intelligence
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Product</h3>
              <Flex direction="col" gap={2}>
                <Link href="/features" className="text-gray-600 hover:text-gray-900 text-sm">Features</Link>
                <Link href="/pricing" className="text-gray-600 hover:text-gray-900 text-sm">Pricing</Link>
                <Link href="/integrations" className="text-gray-600 hover:text-gray-900 text-sm">Integrations</Link>
              </Flex>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Company</h3>
              <Flex direction="col" gap={2}>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm">About</Link>
                <Link href="/team" className="text-gray-600 hover:text-gray-900 text-sm">Team</Link>
                <Link href="/careers" className="text-gray-600 hover:text-gray-900 text-sm">Careers</Link>
              </Flex>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Support</h3>
              <Flex direction="col" gap={2}>
                <Link href="/help" className="text-gray-600 hover:text-gray-900 text-sm">Help Center</Link>
                <Link href="/privacy" className="text-gray-600 hover:text-gray-900 text-sm">Privacy</Link>
                <Link href="/terms" className="text-gray-600 hover:text-gray-900 text-sm">Terms</Link>
              </Flex>
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