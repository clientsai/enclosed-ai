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
    <div >
      {/* Header */}
      {/* Hero Section */}
      <Section >
        <Flex direction="col" gap={8}>
          <div >
            <Flex direction="col" gap={6}>
              <Badge>Talented Team • 25+ Experts • Global Impact</Badge>
              <H1>
                Meet Our Amazing Team
              </H1>
              <Text size="lg" >
                We're a diverse group of marketers, engineers, and AI specialists
                united by our passion for revolutionizing direct mail marketing
                through technology and innovation.
              </Text>
              <Flex gap={4} justify="center">
                <Button as={Link} href="#leadership" size="lg">
                  Meet the Texters
                  <svg
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
          <div >
            <Flex direction="col" gap={4}>
              <H2>Textership Team</H2>
              <div ></div>
              <Text size="lg" >
                Meet the visionary leaders driving innovation and growth at
                Enclosed.AI
              </Text>
            </Flex>
          </div>
          <Grid cols={3}>
            {/* CEO */}
            <Card hover >
              <Flex direction="col" gap={6}>
                <div >
                  <div >
                    <span >SM</span>
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
                  <a href="#" >
                    <svg  fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="#" >
                    <svg  fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </Flex>
              </Flex>
            </Card>
            {/* CTO */}
            <Card hover >
              <Flex direction="col" gap={6}>
                <div >
                  <div >
                    <span >DJ</span>
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
                  <a href="#" >
                    <svg  fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="#" >
                    <svg  fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </Flex>
              </Flex>
            </Card>
            {/* Head of Product */}
            <Card hover >
              <Flex direction="col" gap={6}>
                <div >
                  <div >
                    <span >LC</span>
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
                  <a href="#" >
                    <svg  fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="#" >
                    <svg  fill="currentColor" viewBox="0 0 24 24">
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
      <Section >
        <Flex direction="col" gap={8}>
          <div >
            <Flex direction="col" gap={4}>
              <H2>Engineering Excellence</H2>
              <Text size="lg" >
                Our engineering team combines deep technical expertise with creative
                problem-solving to build the most advanced AI-powered platform.
              </Text>
            </Flex>
          </div>
          <Grid cols={4}>
            {/* Engineering team members */}
            <Card hover >
              <Flex direction="col" gap={4}>
                <div >
                  <span >MR</span>
                </div>
                <Flex direction="col" gap={1}>
                  <H4>Michael Rodriguez</H4>
                  <Badge variant="default">Head of Engineering</Badge>
                </Flex>
                <p >
                  Full-stack developer and scalability expert building robust systems.
                </p>
              </Flex>
            </Card>
            <Card hover >
              <Flex direction="col" gap={4}>
                <div >
                  <span >AK</span>
                </div>
                <Flex direction="col" gap={1}>
                  <H4>Alex Kim</H4>
                  <Badge variant="default">Senior AI Engineer</Badge>
                </Flex>
                <p >
                  Machine learning specialist focused on personalization algorithms.
                </p>
              </Flex>
            </Card>
            <Card hover >
              <Flex direction="col" gap={4}>
                <div >
                  <span >JS</span>
                </div>
                <Flex direction="col" gap={1}>
                  <H4>Jessica Smith</H4>
                  <Badge variant="default">Frontend Engineer</Badge>
                </Flex>
                <p >
                  React and TypeScript expert creating beautiful user interfaces.
                </p>
              </Flex>
            </Card>
            <Card hover >
              <Flex direction="col" gap={4}>
                <div >
                  <span >RC</span>
                </div>
                <Flex direction="col" gap={1}>
                  <H4>Ryan Chen</H4>
                  <Badge variant="default">Backend Engineer</Badge>
                </Flex>
                <p >
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
          <div >
            <Flex direction="col" gap={4}>
              <H2>Our Values</H2>
              <Text size="lg" >
                These core values guide everything we do, from how we build our
                product to how we serve our customers.
              </Text>
            </Flex>
          </div>
          <Grid cols={4}>
            <Card >
              <Flex direction="col" gap={4}>
                <div >
                  <svg  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <H4>Innovation</H4>
                <p >
                  We constantly push boundaries and explore new technologies to
                  solve real marketing challenges.
                </p>
              </Flex>
            </Card>
            <Card >
              <Flex direction="col" gap={4}>
                <div >
                  <svg  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <H4>Customer Success</H4>
                <p >
                  Your success is our success. We measure performance by how
                  well customers achieve their goals.
                </p>
              </Flex>
            </Card>
            <Card >
              <Flex direction="col" gap={4}>
                <div >
                  <svg  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <H4>Collaboration</H4>
                <p >
                  Best solutions come from diverse teams working together,
                  fostering an inclusive environment.
                </p>
              </Flex>
            </Card>
            <Card >
              <Flex direction="col" gap={4}>
                <div >
                  <svg  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <H4>Excellence</H4>
                <p >
                  We strive for excellence in everything, ensuring every
                  interaction exceeds expectations.
                </p>
              </Flex>
            </Card>
          </Grid>
        </Flex>
      </Section>
      {/* Join Our Team */}
      <Section >
        <Flex direction="col" gap={8}>
          <div >
            <Flex direction="col" gap={6}>
              <H2 >
                Ready to Join Our Team?
              </H2>
              <Text size="lg" >
                We're always looking for talented individuals who share our passion
                for innovation and excellence. Join us in revolutionizing direct mail.
              </Text>
              <Flex gap={4} justify="center">
                <Button as={Link} href="/careers" size="lg" >
                  View Open Positions
                </Button>
                <Button as={Link} href="/contact" variant="ghost" size="lg" >
                  Get in Touch
                </Button>
              </Flex>
            </Flex>
          </div>
          <Grid cols={3}>
            <div >
              <div >50+</div>
              <div >Team Members</div>
            </div>
            <div >
              <div >15+</div>
              <div >Countries</div>
            </div>
            <div >
              <div >100%</div>
              <div >Remote Friendly</div>
            </div>
          </Grid>
        </Flex>
      </Section>
      {/* Footer */}
      <footer >
        <div >
          <Grid cols={4}>
            <div>
              <Logo size="md" showText={true} linkToHome={false}  />
              <p >
                Direct mail marketing powered by artificial intelligence
              </p>
            </div>
            <div>
              <h3 >Product</h3>
              <Flex direction="col" gap={2}>
                <Link href="/features" >Features</Link>
                <Link href="/pricing" >Pricing</Link>
                <Link href="/integrations" >Integrations</Link>
              </Flex>
            </div>
            <div>
              <h3 >Company</h3>
              <Flex direction="col" gap={2}>
                <Link href="/about" >About</Link>
                <Link href="/team" >Team</Link>
                <Link href="/careers" >Careers</Link>
              </Flex>
            </div>
            <div>
              <h3 >Support</h3>
              <Flex direction="col" gap={2}>
                <Link href="/help" >Help Center</Link>
                <Link href="/privacy" >Privacy</Link>
                <Link href="/terms" >Terms</Link>
              </Flex>
            </div>
          </Grid>
          <div >
            <p>&copy; 2024 Enclosed.AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}