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
    <div className="min-h-screen bg-black">
      {/* Header */}
      {/* Hero Section */}
      <Section className="text-center">
        <Flex gap={6}>
          <Badge>Press Center</Badge>
          <H1 level={1}>
            Latest News & Media Resources
          </H1>
          <Text className="max-w-3xl mx-auto">
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
      <Section className="bg-black">
        <Flex gap={8}>
          <div className="text-center">
            <H1 level={2}>Latest Press Releases</H1>
            <Text className="max-w-3xl mx-auto">
              Recent announcements and company updates
            </Text>
          </div>
          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <Card key={index} hover className={`p-8 ${release.featured ? 'border-2 border-gray-900' : ''}`}>
                <Flex gap={4}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <Flex gap={3} className="mb-3">
                        <Badge variant={release.featured ? "default" : "success"}>
                          {release.category}
                        </Badge>
                        {release.featured && (
                          <Badge variant="default" className="bg-gray-900 text-white">
                            Featured
                          </Badge>
                        )}
                        <span className="text-sm text-gray-400">{release.date}</span>
                      </Flex>
                      <H1 level={3} className="text-lg md:text-xl mb-3">
                        {release.title}
                      </H1>
                      <p className="text-gray-300 leading-relaxed mb-4">
                        {release.content}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
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
          <div className="text-center">
            <H1 level={2}>Media Coverage</H1>
            <Text className="max-w-3xl mx-auto">
              What industry publications are saying about Enclosed.AI
            </Text>
          </div>
          <div className="space-y-4">
            {coverage.map((item, index) => (
              <Card key={index} hover className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="font-semibold text-white">{item.outlet}</span>
                      <Badge variant="success">{item.type}</Badge>
                      <span className="text-sm text-gray-400">{item.date}</span>
                    </div>
                    <H1 level={4} className="text-lg text-white">
                      {item.headline}
                    </H1>
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
      <Section id="media-kit" className="bg-black">
        <Flex gap={8}>
          <div className="text-center">
            <H1 level={2}>Media Kit</H1>
            <Text className="max-w-3xl mx-auto">
              Download logos, photos, and company resources for your stories
            </Text>
          </div>
          <Grid columns={3}>
            {/* Logos */}
            <Card className="p-6">
              <Flex gap={4}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 bg-gray-900 rounded-lg flex items-center justify-center">
                    <svg
                      className="h-5 w-5 text-white"
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
                  <H1 level={4}>Logos & Brand Assets</H1>
                </div>
                <div className="space-y-3">
                  {mediaKit.logos.map((logo, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <div>
                        <div className="font-medium text-sm text-white">{logo.name}</div>
                        <div className="text-xs text-gray-400">{logo.description}</div>
                      </div>
                      <span className="text-xs text-gray-500">{logo.format}</span>
                    </div>
                  ))}
                </div>
                <Button size="sm" className="w-full">
                  Download All Logos
                </Button>
              </Flex>
            </Card>
            {/* Photos */}
            <Card className="p-6">
              <Flex gap={4}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 bg-gray-900 rounded-lg flex items-center justify-center">
                    <svg
                      className="h-5 w-5 text-white"
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
                  <H1 level={4}>Photos & Screenshots</H1>
                </div>
                <div className="space-y-3">
                  {mediaKit.photos.map((photo, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <div>
                        <div className="font-medium text-sm text-white">{photo.name}</div>
                        <div className="text-xs text-gray-400">{photo.description}</div>
                      </div>
                      <span className="text-xs text-gray-500">{photo.format}</span>
                    </div>
                  ))}
                </div>
                <Button size="sm" className="w-full">
                  Download All Photos
                </Button>
              </Flex>
            </Card>
            {/* Documents */}
            <Card className="p-6">
              <Flex gap={4}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 bg-gray-900 rounded-lg flex items-center justify-center">
                    <svg
                      className="h-5 w-5 text-white"
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
                  <H1 level={4}>Documents & Reports</H1>
                </div>
                <div className="space-y-3">
                  {mediaKit.documents.map((doc, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <div>
                        <div className="font-medium text-sm text-white">{doc.name}</div>
                        <div className="text-xs text-gray-400">{doc.description}</div>
                      </div>
                      <span className="text-xs text-gray-500">{doc.format}</span>
                    </div>
                  ))}
                </div>
                <Button size="sm" className="w-full">
                  Download All Documents
                </Button>
              </Flex>
            </Card>
          </Grid>
          <div className="text-center">
            <Button size="lg">
              Download Complete Media Kit
            </Button>
            <p className="text-sm text-gray-400 mt-2">
              Includes all logos, photos, documents, and brand guidelines
            </p>
          </div>
        </Flex>
      </Section>
      {/* Executive Contacts */}
      <Section>
        <Flex gap={8}>
          <div className="text-center">
            <H1 level={2}>Executive Team</H1>
            <Text className="max-w-3xl mx-auto">
              Connect with our leadership team for interviews and expert commentary
            </Text>
          </div>
          <Grid columns={3}>
            {executives.map((exec, index) => (
              <Card key={index} className="p-6">
                <Flex gap={4}>
                  <div className="text-center">
                    <div className="h-20 w-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-xl md:text-2xl font-bold text-gray-400">
                        {exec.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <H1 level={4}>{exec.name}</H1>
                    <p className="text-blue-600 font-medium text-sm">{exec.title}</p>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {exec.bio}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href={`mailto:${exec.email}`} className="text-blue-600 hover:underline">
                        {exec.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <svg className="h-4 w-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <a href={`https://${exec.linkedin}`} className="text-blue-600 hover:underline">
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
      <Section id="contact" className="bg-black">
        <div className="max-w-4xl mx-auto">
          <Flex gap={8}>
            <div className="text-center">
              <H1 level={2}>Press Contact</H1>
              <Text className="max-w-3xl mx-auto">
                Get in touch with our press team for interviews, quotes, and exclusive access
              </Text>
            </div>
            <Grid columns={2}>
              <Card className="p-8">
                <Flex gap={6}>
                  <div>
                    <H1 level={3}>Media Inquiries</H1>
                    <p className="text-gray-400 mt-2">
                      For press releases, executive interviews, and general media questions
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-white">Email</div>
                        <a href="mailto:press@enclosed.ai" className="text-blue-600 hover:underline">
                          press@enclosed.ai
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-white">Phone</div>
                        <a href="tel:+1-555-123-4567" className="text-blue-600 hover:underline">
                          +1 (555) 123-4567
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-white">Response Time</div>
                        <div className="text-gray-400">Within 24 hours</div>
                      </div>
                    </div>
                  </div>
                </Flex>
              </Card>
              <Card className="p-8">
                <Flex gap={6}>
                  <div>
                    <H1 level={3}>Quick Media Request</H1>
                    <p className="text-gray-400 mt-2">
                      Submit your request and we'll get back to you quickly
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Publication/Outlet *
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="TechCrunch"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="jane@techcrunch.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Request Type
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option value="">Select request type</option>
                        <option value="interview">Executive Interview</option>
                        <option value="quote">Expert Quote</option>
                        <option value="media-kit">Media Kit Access</option>
                        <option value="background">Background Information</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Tell us about your story and what you need..."
                      />
                    </div>
                  </div>
                  <Button size="md" className="w-full">
                    Submit Request
                  </Button>
                </Flex>
              </Card>
            </Grid>
          </Flex>
        </div>
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
                <Link href="/press" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Press
                </Link>
              </Flex>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <Flex gap={2}>
                <Link href="/press" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Press Center
                </Link>
                <Link href="/webinars" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Webinars
                </Link>
                <Link href="/partners" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Partners
                </Link>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
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