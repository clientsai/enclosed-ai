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
  title: "Press - Enclosed.AI | News, Media Kit & Press Releases",
  description:
    "Latest news, press releases, and media resources for Enclosed.AI. Download our media kit, logos, and access press materials for journalists and partners.",
};
export default function PressPage() {
  const pressReleases = [
    {
      date: "March 15, 2024",
      title: "Enclosed.AI Raises $12M Series A to Revolutionize Direct Mail Marketing with AI",
      content: "Texting venture capital firms invest in AI-powered direct mail platform that's helping businesses achieve 3-5x higher response rates than traditional methods.",
      category: "Funding",
      featured: true,
    },
    {
      date: "February 28, 2024",
      title: "Enclosed.AI Launches Advanced Analytics Dashboard for Enterprise Customers",
      content: "New feature provides real-time campaign tracking, ROI analysis, and predictive insights to help enterprise clients optimize their direct mail strategies.",
      category: "Product",
      featured: false,
    },
    {
      date: "January 20, 2024",
      title: "Study Shows Enclosed.AI Customers Achieve 45% Higher ROI Than Industry Average",
      content: "Independent research reveals that businesses using Enclosed.AI's AI-powered personalization see significantly better returns on their direct mail investments.",
      category: "Research",
      featured: false,
    },
    {
      date: "December 10, 2023",
      title: "Enclosed.AI Partners with Salesforce to Integrate Direct Mail with CRM Workflows",
      content: "Strategic partnership enables seamless integration between Salesforce CRM and Enclosed.AI's direct mail platform, streamlining omnichannel marketing efforts.",
      category: "Partnership",
      featured: false,
    },
    {
      date: "November 15, 2023",
      title: "Enclosed.AI Named 'Rising Star' in MarTech Breakthrough Awards 2023",
      content: "Recognition highlights company's innovative approach to modernizing direct mail marketing through artificial intelligence and automation.",
      category: "Award",
      featured: false,
    },
    {
      date: "October 5, 2023",
      title: "Enclosed.AI Processes 1 Million Personalized Direct Mail Pieces in Single Month",
      content: "Milestone demonstrates platform's scalability and growing adoption among businesses seeking effective offline marketing channels.",
      category: "Milestone",
      featured: false,
    },
  ];
  const mediaKit = {
    logos: [
      { name: "Primary Logo", format: "SVG, PNG", description: "Full color logo with text" },
      { name: "Logo Mark", format: "SVG, PNG", description: "Icon only, no text" },
      { name: "White Logo", format: "SVG, PNG", description: "For dark backgrounds" },
      { name: "Black Logo", format: "SVG, PNG", description: "Single color version" },
    ],
    photos: [
      { name: "Textership Team", format: "High-res JPG", description: "Professional headshots of key executives" },
      { name: "Office Photos", format: "High-res JPG", description: "Modern office space and team collaboration" },
      { name: "Product Screenshots", format: "PNG", description: "Platform interface and dashboard views" },
      { name: "Event Photos", format: "High-res JPG", description: "Conference presentations and partnerships" },
    ],
    documents: [
      { name: "Company Fact Sheet", format: "PDF", description: "Key statistics and company overview" },
      { name: "Product Overview", format: "PDF", description: "Detailed platform capabilities and features" },
      { name: "Industry Report", format: "PDF", description: "Direct mail marketing trends and insights" },
      { name: "Customer Case Studies", format: "PDF", description: "Success stories and ROI examples" },
    ],
  };
  const coverage = [
    {
      outlet: "TechCrunch",
      headline: "Enclosed.AI Brings Artificial Intelligence to Traditional Direct Mail",
      date: "March 2024",
      type: "Article",
      url: "#",
    },
    {
      outlet: "Forbes",
      headline: "Why Direct Mail is Making a Comeback in the Digital Age",
      date: "February 2024",
      type: "Feature",
      url: "#",
    },
    {
      outlet: "Marketing Land",
      headline: "How AI is Transforming Direct Mail ROI for Modern Businesses",
      date: "January 2024",
      type: "Interview",
      url: "#",
    },
    {
      outlet: "VentureBeat",
      headline: "Direct Mail Gets Smart: Enclosed.AI's Platform Personalizes at Scale",
      date: "December 2023",
      type: "Review",
      url: "#",
    },
    {
      outlet: "AdAge",
      headline: "The Future of Offline Marketing: AI-Powered Direct Mail Solutions",
      date: "November 2023",
      type: "Analysis",
      url: "#",
    },
  ];
  const executives = [
    {
      name: "Sarah Chen",
      title: "CEO & Co-Founder",
      bio: "Former VP of Marketing at Mailchimp with 12+ years experience in marketing technology and AI applications.",
      email: "sarah.chen@enclosed.ai",
      linkedin: "linkedin.com/in/sarahchen",
    },
    {
      name: "Michael Rodriguez",
      title: "CTO & Co-Founder",
      bio: "Former Principal Engineer at Google with expertise in machine learning and large-scale data processing systems.",
      email: "michael.rodriguez@enclosed.ai",
      linkedin: "linkedin.com/in/michaelrodriguez",
    },
    {
      name: "Jennifer Walsh",
      title: "VP of Marketing",
      bio: "Marketing leader with 10+ years experience at high-growth SaaS companies including HubSpot and Segment.",
      email: "jennifer.walsh@enclosed.ai",
      linkedin: "linkedin.com/in/jenniferwalsh",
    },
  ];
  return (
    <div >
      {/* Header */}
      {/* Hero Section */}
      <Section >
        <Flex gap={6}>
          <Badge>Press Center</Badge>
          <H1>
            Latest News & Media Resources
          </H1>
          <Text >
            Stay up to date with Enclosed.AI's latest announcements, product updates, and industry insights. Access our comprehensive media kit and connect with our press team for interviews and exclusive stories.
          </Text>
          <Flex gap={4} justify="center">
            <Button as={Link} href="#media-kit" size="lg">
              Download Media Kit
            </Button>
            <Button as={Link} href="#contact" variant="ghost" size="lg">
              Contact Press Team
            </Button>
          </Flex>
        </Flex>
      </Section>
      {/* Latest News */}
      <Section >
        <Flex gap={8}>
          <div >
            <H2>Latest Press Releases</H2>
            <Text >
              Recent announcements and company updates
            </Text>
          </div>
          <div >
            {pressReleases.map((release, index) => (
              <Card key={index} hover className={`p-8 ${release.featured ? 'border-2 border-gray-900' : ''}`}>
                <Flex gap={4}>
                  <div >
                    <div >
                      <Flex gap={4} >
                        <Badge variant={release.featured ? "default" : "success"}>
                          {release.category}
                        </Badge>
                        {release.featured && (
                          <Badge variant="default" >
                            Featured
                          </Badge>
                        )}
                        <span >{release.date}</span>
                      </Flex>
                      <H3 >
                        {release.title}
                      </H3>
                      <p >
                        {release.content}
                      </p>
                    </div>
                  </div>
                  <div >
                    <Button size="sm">
                      Read Full Release
                    </Button>
                    <Button size="sm" variant="ghost">
                      Download PDF
                    </Button>
                    <Button size="sm" variant="ghost">
                      Share
                    </Button>
                  </div>
                </Flex>
              </Card>
            ))}
          </div>
        </Flex>
      </Section>
      {/* Media Coverage */}
      <Section>
        <Flex gap={8}>
          <div >
            <H2>Media Coverage</H2>
            <Text >
              What industry publications are saying about Enclosed.AI
            </Text>
          </div>
          <div >
            {coverage.map((item, index) => (
              <Card key={index} hover >
                <div >
                  <div >
                    <div >
                      <span >{item.outlet}</span>
                      <Badge variant="success">{item.type}</Badge>
                      <span >{item.date}</span>
                    </div>
                    <H4 >
                      {item.headline}
                    </H4>
                  </div>
                  <Button size="sm" variant="ghost">
                    Read Article →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Flex>
      </Section>
      {/* Media Kit */}
      <Section id="media-kit" >
        <Flex gap={8}>
          <div >
            <H2>Media Kit</H2>
            <Text >
              Download logos, photos, and company resources for your stories
            </Text>
          </div>
          <Grid cols={3}>
            {/* Logos */}
            <Card >
              <Flex gap={4}>
                <div >
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
                        d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 110 2h-1v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6H3a1 1 0 110-2h4z"
                      />
                    </svg>
                  </div>
                  <H4>Logos & Brand Assets</H4>
                </div>
                <div >
                  {mediaKit.logos.map((logo, index) => (
                    <div key={index} >
                      <div>
                        <div >{logo.name}</div>
                        <div >{logo.description}</div>
                      </div>
                      <span >{logo.format}</span>
                    </div>
                  ))}
                </div>
                <Button size="sm" >
                  Download All Logos
                </Button>
              </Flex>
            </Card>
            {/* Photos */}
            <Card >
              <Flex gap={4}>
                <div >
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
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <H4>Photos & Screenshots</H4>
                </div>
                <div >
                  {mediaKit.photos.map((photo, index) => (
                    <div key={index} >
                      <div>
                        <div >{photo.name}</div>
                        <div >{photo.description}</div>
                      </div>
                      <span >{photo.format}</span>
                    </div>
                  ))}
                </div>
                <Button size="sm" >
                  Download All Photos
                </Button>
              </Flex>
            </Card>
            {/* Documents */}
            <Card >
              <Flex gap={4}>
                <div >
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
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <H4>Documents & Reports</H4>
                </div>
                <div >
                  {mediaKit.documents.map((doc, index) => (
                    <div key={index} >
                      <div>
                        <div >{doc.name}</div>
                        <div >{doc.description}</div>
                      </div>
                      <span >{doc.format}</span>
                    </div>
                  ))}
                </div>
                <Button size="sm" >
                  Download All Documents
                </Button>
              </Flex>
            </Card>
          </Grid>
          <div >
            <Button size="lg">
              Download Complete Media Kit
            </Button>
            <p >
              Includes all logos, photos, documents, and brand guidelines
            </p>
          </div>
        </Flex>
      </Section>
      {/* Executive Contacts */}
      <Section>
        <Flex gap={8}>
          <div >
            <H2>Executive Team</H2>
            <Text >
              Connect with our leadership team for interviews and expert commentary
            </Text>
          </div>
          <Grid cols={3}>
            {executives.map((exec, index) => (
              <Card key={index} >
                <Flex gap={4}>
                  <div >
                    <div >
                      <span >
                        {exec.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <H4>{exec.name}</H4>
                    <p >{exec.title}</p>
                  </div>
                  <p >
                    {exec.bio}
                  </p>
                  <div >
                    <div >
                      <svg  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href={`mailto:${exec.email}`} >
                        {exec.email}
                      </a>
                    </div>
                    <div >
                      <svg  fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <a href={`https://${exec.linkedin}`} >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </Flex>
              </Card>
            ))}
          </Grid>
        </Flex>
      </Section>
      {/* Press Contact */}
      <Section id="contact" >
        <div >
          <Flex gap={8}>
            <div >
              <H2>Press Contact</H2>
              <Text >
                Get in touch with our press team for interviews, quotes, and exclusive access
              </Text>
            </div>
            <Grid cols={2}>
              <Card >
                <Flex gap={6}>
                  <div>
                    <H3>Media Inquiries</H3>
                    <p >
                      For press releases, executive interviews, and general media questions
                    </p>
                  </div>
                  <div >
                    <div >
                      <div >
                        <svg  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div >Email</div>
                        <a href="mailto:press@enclosed.ai" >
                          press@enclosed.ai
                        </a>
                      </div>
                    </div>
                    <div >
                      <div >
                        <svg  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <div >Phone</div>
                        <a href="tel:+1-555-123-4567" >
                          +1 (555) 123-4567
                        </a>
                      </div>
                    </div>
                    <div >
                      <div >
                        <svg  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div >Response Time</div>
                        <div >Within 24 hours</div>
                      </div>
                    </div>
                  </div>
                </Flex>
              </Card>
              <Card >
                <Flex gap={6}>
                  <div>
                    <H3>Quick Media Request</H3>
                    <p >
                      Submit your request and we'll get back to you quickly
                    </p>
                  </div>
                  <div >
                    <div>
                      <label >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div>
                      <label >
                        Publication/Outlet *
                      </label>
                      <input
                        type="text"
                        placeholder="TechCrunch"
                      />
                    </div>
                    <div>
                      <label >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="jane@techcrunch.com"
                      />
                    </div>
                    <div>
                      <label >
                        Request Type
                      </label>
                      <select >
                        <option value="">Select request type</option>
                        <option value="interview">Executive Interview</option>
                        <option value="quote">Expert Quote</option>
                        <option value="media-kit">Media Kit Access</option>
                        <option value="background">Background Information</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label >
                        Message *
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your story and what you need..."
                      />
                    </div>
                  </div>
                  <Button size="default" >
                    Submit Request
                  </Button>
                </Flex>
              </Card>
            </Grid>
          </Flex>
        </div>
      </Section>
      {/* Footer */}
      <footer >
        <Section >
          <Grid cols={4}>
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
                <Link href="/press" >
                  Press
                </Link>
              </Flex>
            </div>
            <div>
              <h3 >Resources</h3>
              <Flex gap={2}>
                <Link href="/press" >
                  Press Center
                </Link>
                <Link href="/webinars" >
                  Webinars
                </Link>
                <Link href="/partners" >
                  Partners
                </Link>
                <Link href="/contact" >
                  Contact
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