/*
 * Signup Page - Minimalist Dark Theme
 * Clean, focused onboarding experience
 */
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import Logo from "@/components/Logo";
import {
  Container,
  Grid,
  Flex,
  H2,
  Text,
  Button,
  Input,
  Card,
  Alert,
  Form,
  FormGroup,
  Badge,
  GlowOrb,
} from "@/components/ui";
export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    company: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      // Create auth user with metadata
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            name: formData.name,
            company: formData.company,
          },
        },
      });
      if (authError) throw authError;
      // Profile will be created automatically by trigger
      if (authData.user && (formData.name || formData.company)) {
        const { error: profileError } = await supabase
          .from("enclosed_users")
          .update({
            name: formData.name,
            company: formData.company,
          })
          .eq("auth_id", authData.user.id);
        if (profileError) {
          console.log("Profile update note:", profileError);
        }
      }
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-black text-white py-12">
      {/* Background effects */}
      <GlowOrb color="accent" size="lg" className="top-1/4 left-1/4" />
      <GlowOrb color="purple" size="default" className="top-3/4 right-1/4" />
      <Container size="default">
        <Grid cols={2} gap={8} className="items-center">
          {/* Left side - Benefits */}
          <div className="space-y-8">
            <Badge variant="accent" className="mb-4">
              Join 5,000+ Companies
            </Badge>
            <H2 className="text-5xl font-light leading-tight">
              Start sending smarter
              <br />
              <span className="gradient-text-accent">direct mail today</span>
            </H2>
            <div className="space-y-6">
              {[
                { icon: "✓", title: "14-day free trial", desc: "No credit card required" },
                { icon: "✓", title: "AI-powered personalization", desc: "Unique letters for each recipient" },
                { icon: "✓", title: "Complete automation", desc: "From creation to delivery" },
                { icon: "✓", title: "Real-time analytics", desc: "Track ROI instantly" },
              ].map((item, i) => (
                <Flex key={i} gap={3} align="start">
                  <span className="text-green-400 text-xl">{item.icon}</span>
                  <div>
                    <Text weight="semibold" className="mb-1">{item.title}</Text>
                    <Text size="sm" color="muted">{item.desc}</Text>
                  </div>
                </Flex>
              ))}
            </div>
            {/* Testimonial */}
            <Card glass className="mt-8">
              <Text className="mb-4 italic">
                "The AI personalization is incredible. Our response rates went from 0.5% to 12% overnight."
              </Text>
              <Flex align="center" gap={3}>
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                  MT
                </div>
                <div>
                  <Text weight="semibold" size="sm">Michael Torres</Text>
                  <Text size="xs" color="muted">CEO, SaaS Ventures</Text>
                </div>
              </Flex>
            </Card>
          </div>
          {/* Right side - Form */}
          <Card glass className="max-w-md mx-auto">
            {/* Logo */}
            <Flex justify="center" className="mb-8">
              <Logo size="lg" showText />
            </Flex>
            {/* Header */}
            <div className="text-center mb-8">
              <H2 className="mb-2">Create your account</H2>
              <Text color="secondary">
                Get started with your 14-day free trial
              </Text>
            </div>
            {/* Form */}
            <Form onSubmit={handleSignup}>
              <Grid cols={2} gap={4}>
                <FormGroup>
                  <Input
                    type="text"
                    label="Full Name"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="text"
                    label="Company (Optional)"
                    placeholder="Acme Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </FormGroup>
              </Grid>
              <FormGroup>
                <Input
                  type="email"
                  label="Work Email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="password"
                  label="Password"
                  placeholder="Create a secure password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
                <Text size="xs" color="muted" >
                  Minimum 6 characters
                </Text>
              </FormGroup>
              {error && (
                <Alert variant="error" className="mb-6">
                  {error}
                </Alert>
              )}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                loading={loading}
                className="w-full mb-6"
              >
                Create Account
              </Button>
              {/* Terms */}
              <Text size="xs" color="muted" className="text-center">
                By signing up, you agree to our{" "}
                <Link href="/terms" className="text-blue-400 hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-blue-400 hover:underline">
                  Privacy Policy
                </Link>
              </Text>
            </Form>
            {/* Sign in link */}
            <div className="text-center mt-6">
              <Text size="sm" color="secondary">
                Already have an account?{" "}
                <Link href="/auth/login">
                  <span className="text-blue-400 hover:underline">
                    Sign in
                  </span>
                </Link>
              </Text>
            </div>
          </Card>
        </Grid>
      </Container>
    </div>
  );
}