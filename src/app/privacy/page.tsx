/*
 * Privacy Policy Page - Jony Ive-Inspired Dark Theme
 * Clean, readable legal document with elegant presentation
 */
"use client";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Container,
  Section,
  Flex,
  H1,
  H2,
  H3,
  Text,
  Button,
  Card,
  Badge,
  Divider,
  GlowOrb,
  Noise,
} from "@/components/ui";

export default function PrivacyPage() {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "We collect information that you provide directly to us when you create an account, make a purchase, use our services, or contact us for support.",
        "This includes your name, email address, company information, billing details, and any content you upload to our platform.",
        "We also automatically collect certain information about your device and usage patterns when you interact with our services."
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        "We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you about your account.",
        "Your data helps us personalize your experience, provide customer support, and develop new features that better serve your needs.",
        "We may also use aggregated, anonymized data for research and analytics to improve our platform's performance and capabilities."
      ]
    },
    {
      title: "Information Sharing and Disclosure",
      content: [
        "We do not sell, trade, or otherwise transfer your personal information to third parties without your explicit consent, except as described in this policy.",
        "We may share your information with trusted service providers who assist us in operating our platform, conducting business, or serving you.",
        "We will disclose your information only when required by law or to protect our rights, property, or safety, or that of our users or others."
      ]
    },
    {
      title: "Data Security and Protection",
      content: [
        "We implement industry-standard security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
        "Your data is encrypted both in transit and at rest using advanced cryptographic protocols.",
        "We regularly review and update our security practices to ensure your information remains protected against evolving threats."
      ]
    },
    {
      title: "Your Privacy Rights",
      content: [
        "You have the right to access, update, correct, or delete your personal information at any time through your account settings.",
        "You may also request a copy of your data or ask us to transfer it to another service provider.",
        "You can opt out of certain communications from us, though some service-related messages may still be necessary."
      ]
    },
    {
      title: "Data Retention",
      content: [
        "We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy.",
        "When you delete your account, we will remove your personal information from our active systems within 30 days.",
        "Some information may be retained in our backups for security and legal compliance purposes for a limited period."
      ]
    },
    {
      title: "International Data Transfers",
      content: [
        "Our services are hosted in the United States, and your information may be transferred to and processed in countries other than your own.",
        "We ensure appropriate safeguards are in place to protect your information during international transfers.",
        "By using our services, you consent to the transfer of your information to countries that may have different data protection laws."
      ]
    },
    {
      title: "Changes to This Policy",
      content: [
        "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws.",
        "We will notify you of any material changes by posting the updated policy on our website and updating the 'Last Modified' date.",
        "Your continued use of our services after such modifications constitutes acceptance of the updated policy."
      ]
    }
  ];

  const contactInfo = [
    { label: "Email", value: "privacy@enclosed.ai", href: "mailto:privacy@enclosed.ai" },
    { label: "Address", value: "123 Innovation Drive, San Francisco, CA 94105", href: null },
    { label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
  ];

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Premium Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 via-black to-black" />
        <GlowOrb color="accent" size="lg" className="top-20 -left-32 opacity-30" />
        <GlowOrb color="purple" size="default" className="bottom-20 right-10 opacity-20" />
        <GlowOrb color="white" size="sm" className="top-1/3 right-1/3 opacity-10" />
      </div>
      <Noise opacity={0.015} />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Section className="relative pt-24">
        <Container size="default">
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-6">
              <Badge variant="accent" pulse className="animate-fade-in">
                Legal
              </Badge>
              <H1 className="animate-slide-up" gradient>
                Privacy Policy
              </H1>
              <Text size="xl" color="secondary" className="max-w-3xl mx-auto animate-fade-in animation-delay-200">
                Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
              </Text>
              <Text size="sm" color="muted" className="animate-fade-in animation-delay-400">
                Last updated: March 15, 2024
              </Text>
            </div>
          </div>
        </Container>
      </Section>

      {/* Content Sections */}
      <Section className="relative">
        <Container size="default">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={section.title} className={`animate-slide-up animation-delay-${(index + 1) * 200}`}>
                <Card glass className="backdrop-blur-xl border-gray-800/50 premium-shadow">
                  <div className="space-y-6">
                    <H2>{section.title}</H2>
                    <div className="space-y-4">
                      {section.content.map((paragraph, pIndex) => (
                        <Text key={pIndex} color="secondary" className="leading-relaxed">
                          {paragraph}
                        </Text>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            ))}

            {/* Contact Information */}
            <div className="animate-slide-up animation-delay-1800">
              <Card glass className="backdrop-blur-xl border-gray-800/50 premium-shadow">
                <div className="space-y-6">
                  <H2>Contact Us</H2>
                  <Text color="secondary" className="leading-relaxed">
                    If you have any questions about this Privacy Policy or our privacy practices, please contact us using the information below:
                  </Text>
                  <div className="space-y-4">
                    {contactInfo.map((contact, index) => (
                      <div key={contact.label} className="flex items-start gap-4">
                        <Text weight="semibold" color="primary" className="min-w-[80px]">
                          {contact.label}:
                        </Text>
                        {contact.href ? (
                          <Link href={contact.href as any} className="text-blue-500 hover:text-blue-400 transition-colors">
                            {contact.value}
                          </Link>
                        ) : (
                          <Text color="secondary">{contact.value}</Text>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="animate-slide-up animation-delay-2000">
              <Card glass className="text-center space-y-6 backdrop-blur-xl border-gray-800/50 premium-shadow relative overflow-hidden p-12">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
                <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
                  <H2>Questions About Your Privacy?</H2>
                  <Text size="lg" color="secondary">
                    We're committed to transparency and protecting your data. Contact our privacy team for any concerns.
                  </Text>
                  <Flex gap={4} justify="center" className="pt-4">
                    <Button size="lg" href="/contact" className="shadow-lg shadow-blue-500/20">
                      Contact Privacy Team
                    </Button>
                    <Button variant="outline" size="lg" href="/help">
                      Privacy Help Center
                    </Button>
                  </Flex>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Footer */}
      <Footer />
    </div>
  );
}