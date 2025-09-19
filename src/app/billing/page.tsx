/* UI Component Transformation - Diverse lightweight components with no duplicates per page */
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { formatCurrency } from "@/lib/pricing";
import Logo from "@/components/Logo";

import Navigation from "@/components/Navigation";
interface Transaction {
  id: string;
  type: "credit" | "debit";
  amount: number;
  description: string;
  created_at: string;
  campaign_id?: string;
}
interface Subscription {
  id: string;
  plan: "starter" | "premium";
  status: "active" | "canceled" | "past_due";
  currentPeriodEnd: Date;
  monthlyLetters: number;
  lettersUsed: number;
  pricePerMonth: number;
}
interface MailingCredit {
  total: number;
  used: number;
  available: number;
  addOns: number;
}
export default function BillingPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPackage, setSelectedPackage] = useState<string>("");
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [credits, setCredits] = useState<MailingCredit>({
    total: 0,
    used: 0,
    available: 0,
    addOns: 0,
  });
  const [showLowCreditWarning, setShowLowCreditWarning] = useState(false);
  const subscriptionPlans = [
    { id: "starter", name: "Starter Plan", letters: 50, price: 99.99 },
    { id: "premium", name: "Premium Plan", letters: 100, price: 299.99 },
  ];
  const letterBundles = [
    { id: "bundle100", name: "100 Letter Bundle", letters: 100, price: 200 },
  ];
  useEffect(() => {
    loadBillingData();
  }, []);
  const loadBillingData = async () => {
    const {
      data: { user: authUser },
    } = await supabase.auth.getUser();
    if (!authUser) {
      router.push("/auth/login");
      return;
    }
    const { data: userData } = await supabase
      .from("enclosed_users")
      .select("*")
      .eq("id", authUser.id)
      .single();
    if (userData) {
      setUser(userData);
    }
    // In a real app, load transactions from a transactions table
    setTransactions([
      {
        id: "1",
        type: "credit",
        amount: 100,
        description: "Starter package purchase",
        created_at: new Date(
          Date.now() - 7 * 24 * 60 * 60 * 1000,
        ).toISOString(),
      },
      {
        id: "2",
        type: "debit",
        amount: 25,
        description: "Campaign: Q4 Marketing",
        created_at: new Date(
          Date.now() - 3 * 24 * 60 * 60 * 1000,
        ).toISOString(),
        campaign_id: "camp_123",
      },
    ]);
    setLoading(false);
  };
  const handlePurchase = async (packageId: string) => {
    try {
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ packageId }),
      });
      const { url } = await response.json();
      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Failed to create checkout session");
    }
  };
  if (loading) {
    return (
      <div className="min-h-screen bg-black">
      <Navigation variant="app" />
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        {/* Header - Highlight Row Component */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center space-x-3">
            <span className="text-2xl md:text-3xl">💰</span>
            <div>
              <div className="font-semibold text-white">Current Balance</div>
              <div className="text-xl md:text-2xl font-bold text-green-600">
                {formatCurrency(user?.credits_balance || 0)}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-2xl md:text-3xl">📊</span>
            <div>
              <div className="font-semibold text-white">Total Spent</div>
              <div className="text-xl md:text-2xl font-bold text-gray-300">
                {formatCurrency(
                  transactions
                    .filter((t) => t.type === "debit")
                    .reduce((sum, t) => sum + t.amount, 0),
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-2xl md:text-3xl">✉️</span>
            <div>
              <div className="font-semibold text-white">Letters Sent</div>
              <div className="text-xl md:text-2xl font-bold text-blue-600">
                {user?.total_pieces_sent || 0}
              </div>
            </div>
          </div>
        </div>
        {/* Credit Packages - Card Row Emphasis Component */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
            Purchase Credits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {creditPackages.map((pkg, index) => (
              <article
                key={pkg.id}
                className={`relative bg-black border-2 rounded-xl p-6 cursor-pointer transition-all hover:shadow-lg ${
                  selectedPackage === pkg.id
                    ? "border-blue-600 shadow-lg"
                    : "border-gray-200"
                } ${index === 2 ? "md:scale-105 md:shadow-xl" : ""}`}
                onClick={() => setSelectedPackage(pkg.id)}
              >
                {index === 2 && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {pkg.name}
                </h3>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  ${pkg.price}
                </div>
                <div className="text-sm text-gray-400 mb-4">
                  {pkg.credits.toLocaleString()} credits
                </div>
                <div className="text-xs text-gray-500 mb-4">
                  ${(pkg.price / pkg.credits).toFixed(3)} per letter
                </div>
                {pkg.savings > 0 && (
                  <div className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs font-medium">
                    Save ${pkg.savings}
                  </div>
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePurchase(pkg.id);
                  }}
                  className={`mt-4 w-full py-2 rounded-lg font-medium transition-colors ${
                    selectedPackage === pkg.id
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-100 text-gray-300 hover:bg-gray-200"
                  }`}
                >
                  Purchase
                </button>
              </article>
            ))}
          </div>
        </div>
        {/* Transaction History - Timeline Vertical Component */}
        <div className="bg-black rounded-lg shadow-sm p-6">
          <h2 className="text-lg md:text-xl font-semibold text-white mb-6">
            Transaction History
          </h2>
          <div className="space-y-4">
            {transactions.length === 0 ? (
              <p className="text-gray-500 text-center py-8">
                No transactions yet
              </p>
            ) : (
              transactions.map((transaction, index) => (
                <div key={transaction.id} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        transaction.type === "credit"
                          ? "bg-green-100"
                          : "bg-red-100"
                      }`}
                    >
                      {transaction.type === "credit" ? (
                        <svg
                          className="w-5 h-5 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-5 h-5 text-red-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 12H4"
                          />
                        </svg>
                      )}
                    </div>
                    {index < transactions.length - 1 && (
                      <div className="w-0.5 h-16 bg-gray-200 mx-auto mt-2"></div>
                    )}
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium text-white">
                          {transaction.description}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          {new Date(
                            transaction.created_at,
                          ).toLocaleDateString()}{" "}
                          at{" "}
                          {new Date(
                            transaction.created_at,
                          ).toLocaleTimeString()}
                        </p>
                        {transaction.campaign_id && (
                          <Link
                            href={`/campaigns/${transaction.campaign_id}`}
                            className="text-sm text-blue-600 hover:text-blue-700 mt-1 inline-block"
                          >
                            View campaign →
                          </Link>
                        )}
                      </div>
                      <span
                        className={`font-semibold ${
                          transaction.type === "credit"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {transaction.type === "credit" ? "+" : "-"}
                        {formatCurrency(transaction.amount)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        {/* Info Section - Inset Note Component */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <svg
              className="h-5 w-5 text-blue-600 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <div className="text-sm text-blue-800">
              <p className="font-medium mb-1">How credits work</p>
              <p>
                Each credit equals $1 and covers the full cost of sending one
                letter including AI generation, printing, and postage. Bulk
                purchases receive discounted rates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}