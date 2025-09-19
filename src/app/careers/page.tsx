
import Link from "next/link";
import {
  Container,
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
  Nav,
  NavLink,
  GlowOrb,
  Divider,
} from "@/components/ui";
import Logo from "@/components/Logo";
export default function CareersPage() {
  return (
    <div >
      {/* Ambient background effects */}
      <GlowOrb color="accent" size="lg"  />
      <GlowOrb color="purple" size="default"  />
      {/* Navigation */}
      {/* Hero Section */}
      <Section >
        <Container size="lg">
          <Flex direction="col" align="center" gap={8} >
            <Badge variant="accent" >
              Join Our Mission • Build the Future • Make an Impact
            </Badge>
            <H1  gradient>
              Join Our Mission
            </H1>
            <Text
              size="2xl"
              color="secondary"
              weight="light"
            >
              Help us revolutionize direct mail marketing with AI. We're building
              the future of personalized marketing, and we need talented people to
              join our journey.
            </Text>
            <Flex gap={4} >
              <Button size="lg" href="#positions">
                View Open Positions
                <span >→</span>
              </Button>
              <Button variant="secondary" size="lg" href="#culture">
                Learn About Our Culture
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Section>
      {/* Why Work With Us */}
      <Section id="culture">
        <Container>
          <Flex direction="col" gap={12}>
            <div >
              <Badge >Culture</Badge>
              <H2 >Why Work at Enclosed.AI?</H2>
              <Text size="xl" color="secondary" >
                We're building something extraordinary, and we want you to be part of it.
              </Text>
            </div>
            <Grid cols={3} gap={8}>
              <Card hover >
                <Flex direction="col" gap={4}>
                  <div >
                    <svg  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <H4>Cutting-Edge Technology</H4>
                  <Text color="secondary">
                    Work with the latest AI and machine learning technologies to
                    solve real-world marketing challenges.
                  </Text>
                </Flex>
              </Card>
              <Card hover >
                <Flex direction="col" gap={4}>
                  <div >
                    <svg  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <H4>Collaborative Culture</H4>
                  <Text color="secondary">
                    Join a diverse, inclusive team where your ideas matter and
                    collaboration is encouraged.
                  </Text>
                </Flex>
              </Card>
              <Card hover >
                <Flex direction="col" gap={4}>
                  <div >
                    <svg  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <H4>Competitive Benefits</H4>
                  <Text color="secondary">
                    Comprehensive health coverage, flexible PTO, stock options,
                    and professional development opportunities.
                  </Text>
                </Flex>
              </Card>
              <Card hover >
                <Flex direction="col" gap={4}>
                  <div >
                    <svg  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <H4>Impact & Growth</H4>
                  <Text color="secondary">
                    Make a real impact on how businesses connect with customers
                    while growing your career in an innovative environment.
                  </Text>
                </Flex>
              </Card>
              <Card hover >
                <Flex direction="col" gap={4}>
                  <div >
                    <svg  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <H4>Learning & Development</H4>
                  <Text color="secondary">
                    Continuous learning with resources, conferences, courses,
                    and mentorship to help you grow.
                  </Text>
                </Flex>
              </Card>
              <Card hover >
                <Flex direction="col" gap={4}>
                  <div >
                    <svg  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <H4>Remote-First</H4>
                  <Text color="secondary">
                    Work from anywhere in the world with our remote-first culture
                    and all the tools you need to succeed.
                  </Text>
                </Flex>
              </Card>
            </Grid>
          </Flex>
        </Container>
      </Section>
      {/* Open Positions */}
      <Section id="positions">
        <Container>
          <Flex direction="col" gap={12}>
            <div >
              <Badge >Open Positions</Badge>
              <H2 >Open Positions</H2>
              <Text size="xl" color="secondary" >
                Join our team and help build the future of direct mail marketing.
              </Text>
            </div>
            <Flex direction="col" gap={6}>
              <Card glass >
                <Grid cols={2} gap={8} align="center">
                  <Flex direction="col" gap={4}>
                    <Flex direction="col" gap={2}>
                      <H3>Senior Full-Flex Engineer</H3>
                      <Flex gap={2}>
                        <Badge>Engineering</Badge>
                        <Badge>Full-time</Badge>
                        <Badge>Remote</Badge>
                      </Flex>
                    </Flex>
                    <Text size="lg" weight="light">
                      Build and scale our AI-powered direct mail platform. Work on
                      React frontend, Node.js backend, with AI/ML integration opportunities.
                    </Text>
                    <Flex gap={4}>
                      <Button href="/contact">
                        Apply Now
                      </Button>
                      <Button variant="ghost">
                        View Details →
                      </Button>
                    </Flex>
                  </Flex>
                  <div >
                    <div >$120,000 - $180,000</div>
                    <Text color="secondary">+ Equity + Benefits</Text>
                  </div>
                </Grid>
              </Card>
              <Card glass >
                <Grid cols={2} gap={8} align="center">
                  <Flex direction="col" gap={4}>
                    <Flex direction="col" gap={2}>
                      <H3>AI/ML Engineer</H3>
                      <Flex gap={2}>
                        <Badge>Engineering</Badge>
                        <Badge>Full-time</Badge>
                        <Badge>Remote</Badge>
                      </Flex>
                    </Flex>
                    <Text size="lg" weight="light">
                      Develop personalization algorithms using large language models,
                      NLP, and machine learning for effective direct mail campaigns.
                    </Text>
                    <Flex gap={4}>
                      <Button href="/contact">
                        Apply Now
                      </Button>
                      <Button variant="ghost">
                        View Details →
                      </Button>
                    </Flex>
                  </Flex>
                  <div >
                    <div >$130,000 - $200,000</div>
                    <Text color="secondary">+ Equity + Benefits</Text>
                  </div>
                </Grid>
              </Card>
              <Card glass >
                <Grid cols={2} gap={8} align="center">
                  <Flex direction="col" gap={4}>
                    <Flex direction="col" gap={2}>
                      <H3>Product Marketing Manager</H3>
                      <Flex gap={2}>
                        <Badge>Marketing</Badge>
                        <Badge>Full-time</Badge>
                        <Badge>Remote</Badge>
                      </Flex>
                    </Flex>
                    <Text size="lg" weight="light">
                      Tell the story of AI-powered direct mail marketing. Develop
                      go-to-market strategies and work with product and sales teams.
                    </Text>
                    <Flex gap={4}>
                      <Button href="/contact">
                        Apply Now
                      </Button>
                      <Button variant="ghost">
                        View Details →
                      </Button>
                    </Flex>
                  </Flex>
                  <div >
                    <div >$90,000 - $140,000</div>
                    <Text color="secondary">+ Equity + Benefits</Text>
                  </div>
                </Grid>
              </Card>
              <Card glass >
                <Grid cols={2} gap={8} align="center">
                  <Flex direction="col" gap={4}>
                    <Flex direction="col" gap={2}>
                      <H3>Customer Success Manager</H3>
                      <Flex gap={2}>
                        <Badge>Customer Success</Badge>
                        <Badge>Full-time</Badge>
                        <Badge>Remote</Badge>
                      </Flex>
                    </Flex>
                    <Text size="lg" weight="light">
                      Ensure customer success with direct mail campaigns. Work directly
                      with clients to optimize campaigns and maximize ROI.
                    </Text>
                    <Flex gap={4}>
                      <Button href="/contact">
                        Apply Now
                      </Button>
                      <Button variant="ghost">
                        View Details →
                      </Button>
                    </Flex>
                  </Flex>
                  <div >
                    <div >$70,000 - $110,000</div>
                    <Text color="secondary">+ Equity + Benefits</Text>
                  </div>
                </Grid>
              </Card>
            </Flex>
          </Flex>
        </Container>
      </Section>
      {/* Benefits */}
      <Section>
        <Container>
          <Flex direction="col" gap={12}>
            <div >
              <Badge >Benefits</Badge>
              <H2 >Benefits & Perks</H2>
              <Text size="xl" color="secondary" >
                We take care of our team so you can focus on doing your best work.
              </Text>
            </div>
            <Grid cols={3} gap={8}>
              <div >
                <Flex direction="col" gap={3}>
                  <div >🏥</div>
                  <H4>Health & Wellness</H4>
                  <Text size="sm" color="secondary">
                    Comprehensive health, dental, and vision coverage for you and
                    your family
                  </Text>
                </Flex>
              </div>
              <div >
                <Flex direction="col" gap={3}>
                  <div >💰</div>
                  <H4>Equity & Compensation</H4>
                  <Text size="sm" color="secondary">
                    Competitive salary, stock options, and performance bonuses
                  </Text>
                </Flex>
              </div>
              <div >
                <Flex direction="col" gap={3}>
                  <div >🏖️</div>
                  <H4>Time Off</H4>
                  <Text size="sm" color="secondary">
                    Unlimited PTO, paid holidays, and flexible work arrangements
                  </Text>
                </Flex>
              </div>
              <div >
                <Flex direction="col" gap={3}>
                  <div >📚</div>
                  <H4>Learning Budget</H4>
                  <Text size="sm" color="secondary">
                    $2,000 annual learning budget for courses, conferences, and books
                  </Text>
                </Flex>
              </div>
              <div >
                <Flex direction="col" gap={3}>
                  <div >💻</div>
                  <H4>Equipment</H4>
                  <Text size="sm" color="secondary">
                    Latest MacBook Pro, monitor, and all the tools you need to succeed
                  </Text>
                </Flex>
              </div>
              <div >
                <Flex direction="col" gap={3}>
                  <div >🏠</div>
                  <H4>Remote Work</H4>
                  <Text size="sm" color="secondary">
                    Work from anywhere with home office stipend and co-working access
                  </Text>
                </Flex>
              </div>
            </Grid>
          </Flex>
        </Container>
      </Section>
      {/* Hiring Process */}
      <Section>
        <Container>
          <Flex direction="col" gap={12}>
            <div >
              <Badge >Process</Badge>
              <H2 >Our Hiring Process</H2>
              <Text size="xl" color="secondary" >
                A transparent, efficient process designed to find the right fit for both sides.
              </Text>
            </div>
            <Grid cols={4} gap={8}>
              {[
                {
                  step: "01",
                  title: "Apply",
                  content: "Submit your application with resume and cover letter through our careers page."
                },
                {
                  step: "02",
                  title: "Initial Screen",
                  content: "30-minute phone call with our hiring team to discuss your background and interests."
                },
                {
                  step: "03",
                  title: "Technical Interview",
                  content: "Technical assessment and team interview to evaluate your skills and approach."
                },
                {
                  step: "04",
                  title: "Final Interview",
                  content: "Meet the team and discuss culture fit, values alignment, and any final questions."
                }
              ].map((step, i) => (
                <div key={i} >
                  <div >
                    {step.step}
                  </div>
                  <H3 >{step.title}</H3>
                  <Text color="secondary">{step.content}</Text>
                </div>
              ))}
            </Grid>
          </Flex>
        </Container>
      </Section>
      {/* CTA Section */}
      <Section>
        <Container>
          <Card glass >
            <H2 >Don't See Your Role?</H2>
            <Text size="xl" color="secondary" >
              We're always looking for talented people who share our vision. Send
              us your resume and tell us how you'd like to contribute.
            </Text>
            <Flex gap={4} justify="center">
              <Button size="lg" href="/contact">
                Send Resume
              </Button>
              <Button variant="ghost" size="lg" href="/team">
                Meet the Team
              </Button>
            </Flex>
          </Card>
        </Container>
      </Section>
      {/* Footer */}
      <footer >
        <Container>
          <div >
            <Grid cols={5} gap={8} >
              <div>
                <Logo showText size="sm"  />
                <Text size="sm" color="muted">
                  Direct mail marketing powered by artificial intelligence
                </Text>
              </div>
              {[
                {
                  title: "Product",
                  links: ["Features", "Pricing", "API", "Integrations"],
                },
                {
                  title: "Company",
                  links: ["About", "Team", "Careers", "Contact"],
                },
                {
                  title: "Resources",
                  links: ["Documentation", "Help Center", "Community", "FAQ"],
                },
                {
                  title: "Legal",
                  links: ["Privacy", "Terms", "Security", "Cookies"],
                },
              ].map((col, i) => (
                <div key={i}>
                  <Text weight="semibold" >
                    {col.title}
                  </Text>
                  <div >
                    {col.links.map((link, j) => (
                      <Text key={j} size="sm" color="muted" >
                        {link}
                      </Text>
                    ))}
                  </div>
                </div>
              ))}
            </Grid>
            <Divider  />
            <Flex justify="between" align="center">
              <Text size="sm" color="muted">
                © 2024 Enclosed.AI. All rights reserved.
              </Text>
              <Flex gap={6}>
                <Text size="sm" color="muted" >
                  Twitter
                </Text>
                <Text size="sm" color="muted" >
                  LinkedIn
                </Text>
                <Text size="sm" color="muted" >
                  GitHub
                </Text>
              </Flex>
            </Flex>
          </div>
        </Container>
      </footer>
    </div>
  );
}