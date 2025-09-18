/* UI Component Transformation - Diverse lightweight components with no duplicates per page */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import Logo from "@/components/Logo";

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
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden">
        {/* Header - Quote Stack Component */}
        <div className="bg-gray-900 p-8 text-white">
          <Logo
            size="md"
            showText={true}
            linkToHome={false}
            className="text-white [&>div>span]:text-white mb-2"
          />
          <blockquote className="border-l-4 border-white/50 pl-4 mt-4">
            <p className="text-gray-300">
              "The future of direct mail marketing"
            </p>
            <cite className="text-xs text-gray-400 not-italic">
              — Powered by AI
            </cite>
          </blockquote>
        </div>

        {/* Form - Card Row Emphasis Component */}
        <form onSubmit={handleLogin} className="p-8">
          <div className="space-y-6">
            <div className="border-l-4 border-gray-900 pl-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                placeholder="you@company.com"
              />
            </div>

            <div className="border-l-4 border-gray-300 pl-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          {error && (
            <div className="mt-4 bg-gray-100 border-l-4 border-gray-900 text-gray-900 px-4 py-3 rounded-r-lg text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200 disabled:opacity-50 shadow-lg"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {/* Footer - Do/Don't List Component */}
        <div className="bg-gray-50 px-8 pb-8 pt-4">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <div className="flex items-center text-gray-700 mb-2">
                <span className="mr-2">✓</span>
                <span className="text-xs font-semibold">Remember me</span>
              </div>
              <div className="flex items-center text-gray-700">
                <span className="mr-2">✓</span>
                <span className="text-xs font-semibold">Secure login</span>
              </div>
            </div>
            <div>
              <div className="flex items-center text-gray-400 mb-2">
                <span className="mr-2">✗</span>
                <span className="text-xs">No spam</span>
              </div>
              <div className="flex items-center text-gray-400">
                <span className="mr-2">✗</span>
                <span className="text-xs">No ads</span>
              </div>
            </div>
          </div>

          <div className="text-center border-t pt-4">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link
                href="/auth/signup"
                className="text-gray-900 hover:text-gray-700 font-semibold transition-colors"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
