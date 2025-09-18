/*
 * Login Page - Minimalist Dark Theme
 * Focus on simplicity and clarity
 */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import Logo from "@/components/Logo";
import {
  Container,
  Flex,
  H2,
  Text,
  Button,
  Input,
  Card,
  Alert,
  Form,
  FormGroup,
  GlowOrb,
} from "@/components/ui";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <GlowOrb color="accent" size="lg" className="top-0 -right-32 opacity-10" />
      <GlowOrb color="purple" size="default" className="bottom-0 -left-32 opacity-10" />

      <Container size="sm">
        <Card glass className="p-8 md:p-12">
          {/* Logo */}
          <Flex justify="center" className="mb-8">
            <Logo size="lg" showText />
          </Flex>

          {/* Header */}
          <div className="text-center mb-8">
            <H2 className="mb-3">Welcome back</H2>
            <Text color="secondary">
              Sign in to continue to your dashboard
            </Text>
          </div>

          {/* Form */}
          <Form onSubmit={handleLogin}>
            <FormGroup>
              <Input
                type="email"
                label="Email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormGroup>

            <FormGroup>
              <Input
                type="password"
                label="Password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormGroup>

            {/* Forgot password link */}
            <Flex justify="end" className="mb-6">
              <Link href="/auth/forgot-password">
                <Text size="sm" color="accent" className="hover:underline">
                  Forgot password?
                </Text>
              </Link>
            </Flex>

            {error && (
              <Alert variant="error" className="mb-6">
                {error}
              </Alert>
            )}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              loading={loading}
            >
              Sign In
            </Button>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-800"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-black text-gray-500">Or continue with</span>
              </div>
            </div>

            {/* Social login */}
            <Flex gap={4}>
              <Button
                variant="secondary"
                className="flex-1"
                onClick={() => {/* Add Google login */}}
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </Button>
              <Button
                variant="secondary"
                className="flex-1"
                onClick={() => {/* Add GitHub login */}}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </Button>
            </Flex>
          </Form>

          {/* Sign up link */}
          <div className="text-center mt-8">
            <Text size="sm" color="secondary">
              Don't have an account?{" "}
              <Link href="/auth/signup">
                <span className="text-[var(--accent)] hover:underline">
                  Sign up for free
                </span>
              </Link>
            </Text>
          </div>
        </Card>
      </Container>
    </div>
  );
}