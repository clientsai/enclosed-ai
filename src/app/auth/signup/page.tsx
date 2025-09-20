/*
 * Signup Page - Premium Minimalist Design
 * Clean, focused onboarding experience with elegant UI
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
  H3,
  Text,
  Button,
  Input,
  Card,
  Alert,
  Form,
  FormGroup,
  Badge,
  GlowOrb,
  Divider,
  Noise,
  ProgressBar,
  Avatar,
  Checkbox,
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
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const calculatePasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 6) strength += 25;
    if (password.length >= 10) strength += 25;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 12.5;
    if (/[^a-zA-Z0-9]/.test(password)) strength += 12.5;
    setPasswordStrength(strength);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!agreedToTerms) {
      setError("Please agree to the Terms of Service and Privacy Policy");
      return;
    }

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
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden py-12">
      {/* Premium Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-black to-black" />
        <GlowOrb color="accent" size="lg" className="top-10 -left-20 opacity-30" />
        <GlowOrb color="purple" size="default" className="bottom-10 right-20 opacity-20" />
        <GlowOrb color="white" size="sm" className="top-1/2 left-1/3 opacity-10" />
      </div>
      <Noise opacity={0.01} />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]" />

      <Container size="xl" className="relative z-10">
        <Grid cols={2} gap={12} className="items-center">
          {/* Left side - Benefits */}
          <div className="hidden lg:block space-y-8 animate-fade-in">
            <Badge variant="accent" pulse className="inline-block">
              Join 5,000+ Companies
            </Badge>

            <H2 className="text-5xl leading-tight">
              Start sending smarter
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                direct mail today
              </span>
            </H2>

            <div className="space-y-4">
              {[
                {
                  icon: "🚀",
                  title: "14-day free trial",
                  desc: "No credit card required",
                },
                {
                  icon: "🤖",
                  title: "AI-powered personalization",
                  desc: "Unique letters for each recipient",
                },
                {
                  icon: "⚡",
                  title: "Complete automation",
                  desc: "From creation to delivery",
                },
                {
                  icon: "📊",
                  title: "Real-time analytics",
                  desc: "Track ROI instantly",
                },
              ].map((item, i) => (
                <Flex key={i} gap={4} align="start" className="group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <Text weight="semibold" className="text-white">
                      {item.title}
                    </Text>
                    <Text size="sm" color="muted">
                      {item.desc}
                    </Text>
                  </div>
                </Flex>
              ))}
            </div>

            {/* Testimonial */}
            <Card glass className="backdrop-blur-xl border-gray-800/50 p-6 hover-lift">
              <Text className="italic text-gray-300 mb-4">
                "The AI personalization is incredible. Our response rates went from 0.5% to 12% overnight."
              </Text>
              <Flex align="center" gap={3}>
                <Avatar src="" alt="Michael Torres" size="default" />
                <div>
                  <Text weight="semibold" size="sm">
                    Michael Torres
                  </Text>
                  <Text size="xs" color="muted">
                    CEO, SaaS Ventures
                  </Text>
                </div>
              </Flex>
            </Card>

            {/* Trust badges */}
            <Flex gap={6} className="pt-4">
              <div className="text-center">
                <Text size="2xl" weight="bold" className="text-white">
                  99.9%
                </Text>
                <Text size="xs" color="muted">
                  Uptime SLA
                </Text>
              </div>
              <div className="text-center">
                <Text size="2xl" weight="bold" className="text-white">
                  256-bit
                </Text>
                <Text size="xs" color="muted">
                  Encryption
                </Text>
              </div>
              <div className="text-center">
                <Text size="2xl" weight="bold" className="text-white">
                  SOC2
                </Text>
                <Text size="xs" color="muted">
                  Compliant
                </Text>
              </div>
            </Flex>
          </div>

          {/* Right side - Form */}
          <div className="w-full max-w-md mx-auto lg:max-w-none">
            <div className="mb-6 text-center lg:hidden animate-fade-in">
              <Logo size="lg" showText linkToHome />
            </div>

            <Card glass className="backdrop-blur-2xl border-gray-800/50 p-8 md:p-10 shadow-2xl animate-slide-up">
              {/* Logo (desktop only) */}
              <div className="hidden lg:block mb-8 text-center">
                <Logo size="md" showText linkToHome />
              </div>

              {/* Header */}
              <div className="text-center space-y-2 mb-8">
                <H3 className="text-3xl font-bold text-white">Create your account</H3>
                <Text color="secondary">Get started with your 14-day free trial</Text>
              </div>

              {/* Form */}
              <Form onSubmit={handleSignup} className="space-y-5">
                <Grid cols={2} gap={4}>
                  <FormGroup>
                    <Input
                      type="text"
                      label="Full Name"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      prefix={
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      }
                    />
                  </FormGroup>

                  <FormGroup>
                    <Input
                      type="text"
                      label="Company (Optional)"
                      placeholder="Acme Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      prefix={
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      }
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
                    prefix={
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    }
                  />
                </FormGroup>

                <FormGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    label="Password"
                    placeholder="Create a secure password"
                    value={formData.password}
                    onChange={(e) => {
                      setFormData({ ...formData, password: e.target.value });
                      calculatePasswordStrength(e.target.value);
                    }}
                    required
                    prefix={
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    }
                    suffix={
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {showPassword ? (
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        )}
                      </button>
                    }
                  />
                  {formData.password && (
                    <div className="mt-2 space-y-1 animate-fade-in">
                      <ProgressBar
                        value={passwordStrength}
                        max={100}
                        variant={
                          passwordStrength < 50
                            ? "error"
                            : passwordStrength < 75
                            ? "warning"
                            : "success"
                        }
                        className="h-1"
                      />
                      <Text size="xs" color="muted">
                        Password strength:{" "}
                        {passwordStrength < 50
                          ? "Weak"
                          : passwordStrength < 75
                          ? "Good"
                          : "Strong"}
                      </Text>
                    </div>
                  )}
                </FormGroup>

                {/* Terms checkbox */}
                <FormGroup>
                  <Checkbox
                    label={
                      <Text size="sm" color="secondary">
                        I agree to the{" "}
                        <Link href="/terms" className="text-blue-500 hover:text-blue-400">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-blue-500 hover:text-blue-400">
                          Privacy Policy
                        </Link>
                      </Text>
                    }
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                  />
                </FormGroup>

                {error && (
                  <Alert variant="error" dismissible className="animate-fade-in">
                    {error}
                  </Alert>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  loading={loading}
                  fullWidth
                  disabled={!agreedToTerms}
                  className="shadow-lg shadow-blue-500/20"
                >
                  {loading ? "Creating account..." : "Create Account"}
                </Button>

                {/* Divider */}
                <div className="relative py-6">
                  <Divider />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-4">
                    <Text size="sm" color="muted">
                      Or sign up with
                    </Text>
                  </div>
                </div>

                {/* Social signup */}
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    onClick={() => {
                      /* Add Google signup */
                    }}
                    className="group"
                  >
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    <span>Google</span>
                  </Button>

                  <Button
                    variant="outline"
                    onClick={() => {
                      /* Add GitHub signup */
                    }}
                    className="group"
                  >
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>GitHub</span>
                  </Button>
                </div>
              </Form>

              {/* Sign in link */}
              <div className="text-center pt-6">
                <Text size="sm" color="secondary">
                  Already have an account?{" "}
                  <Link href="/auth/login" className="text-blue-500 hover:text-blue-400 font-medium transition-colors">
                    Sign in
                  </Link>
                </Text>
              </div>
            </Card>
          </div>
        </Grid>
      </Container>
    </div>
  );
}