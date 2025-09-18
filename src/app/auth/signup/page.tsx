/* UI Component Transformation - Diverse lightweight components with no duplicates per page */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import Logo from "@/components/Logo";

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
      // Update with additional info if needed
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
          // Don't throw - profile might not exist yet, trigger will handle it
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
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden">
        {/* Header - Pros/Cons Table Component */}
        <div className="bg-gray-900 p-6 text-white">
          <Logo
            size="md"
            showText={true}
            linkToHome={false}
            className="text-white [&>div>span]:text-white mb-2"
          />
          <h1 className="text-2xl font-bold mb-4">Join the Platform</h1>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <h3 className="font-semibold mb-2 text-gray-300">
                What you get:
              </h3>
              <ul className="space-y-1">
                <li className="flex items-start">
                  <span className="mr-1">✓</span>
                  <span className="text-white/90">AI-powered letters</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-1">✓</span>
                  <span className="text-white/90">Campaign analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-1">✓</span>
                  <span className="text-white/90">API access</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-300">
                No need for:
              </h3>
              <ul className="space-y-1">
                <li className="flex items-start">
                  <span className="mr-1">×</span>
                  <span className="text-white/90">Manual writing</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-1">×</span>
                  <span className="text-white/90">Complex setup</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-1">×</span>
                  <span className="text-white/90">Credit card upfront</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Form - Legal Clause List Component */}
        <form onSubmit={handleSignup} className="p-8">
          <ol className="space-y-5 list-decimal list-inside">
            <li className="text-sm text-gray-700">
              <span className="font-semibold">Personal Information</span>
              <div className="mt-2 ml-5 space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm"
                    placeholder="Acme Corp"
                  />
                </div>
              </div>
            </li>

            <li className="text-sm text-gray-700">
              <span className="font-semibold">Account Credentials</span>
              <div className="mt-2 ml-5 space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Password * (min 6 characters)
                  </label>
                  <input
                    type="password"
                    required
                    minLength={6}
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </li>
          </ol>

          {error && (
            <div className="mt-4 bg-gray-100 border border-gray-900 text-gray-900 px-4 py-3 rounded-lg text-sm">
              <strong>Error:</strong> {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200 disabled:opacity-50 shadow-lg"
          >
            {loading ? "Creating account..." : "Create Free Account"}
          </button>
        </form>

        {/* Footer - FAQ Strip Component */}
        <div className="bg-gray-50 px-8 pb-8">
          <details className="group border-t pt-4">
            <summary className="cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              What happens after I sign up?
            </summary>
            <p className="mt-2 text-sm text-gray-600 pl-4 border-l-2 border-gray-200">
              You'll get instant access to your dashboard where you can create
              your first campaign, upload recipient lists, and start sending
              AI-powered direct mail.
            </p>
          </details>

          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="text-gray-900 hover:text-gray-700 font-semibold transition-colors"
              >
                Sign in instead
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
