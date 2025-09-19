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
      <div className="min-h-screen bg-black text-white">
        <Navigation variant="app" />
        <div className="flex items-center justify-center min-h-screen">
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  const creditPackages = [
    { id: "starter", name: "Starter", credits: 50, price: 99.99, savings: 0 },
    { id: "premium", name: "Premium", credits: 100, price: 199.99, savings: 0 },
    { id: "pro", name: "Pro", credits: 250, price: 449.99, savings: 50 },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navigation variant="app" />
      <div className="pt-24">
        <Container size="xl">
          <div className="space-y-12">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-light mb-4">Billing & Credits</h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Manage your account balance and purchase additional credits
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card glass text-center p-6">
                <div className="text-4xl mb-4">💰</div>
                <div className="text-sm text-gray-400 mb-2">Current Balance</div>
                <div className="text-3xl font-light">
                  {formatCurrency(user?.credits_balance || 0)}
                </div>
              </div>
              <div className="card glass text-center p-6">
                <div className="text-4xl mb-4">📊</div>
                <div className="text-sm text-gray-400 mb-2">Total Spent</div>
                <div className="text-3xl font-light">
                  {formatCurrency(
                    transactions
                      .filter((t) => t.type === "debit")
                      .reduce((sum, t) => sum + t.amount, 0),
                  )}
                </div>
              </div>
              <div className="card glass text-center p-6">
                <div className="text-4xl mb-4">✉️</div>
                <div className="text-sm text-gray-400 mb-2">Letters Sent</div>
                <div className="text-3xl font-light">
                  {user?.total_pieces_sent || 0}
                </div>
              </div>
            </div>
            {/* Credit Packages */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-semibold mb-4">Purchase Credits</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Choose a credit package that fits your needs. Each credit covers one complete letter including AI generation, printing, and postage.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {creditPackages.map((pkg, index) => (
                  <div
                    key={pkg.id}
                    className={`relative card glass p-8 cursor-pointer transition-all hover:scale-105 ${
                      selectedPackage === pkg.id
                        ? "border-blue-500 bg-blue-500/10"
                        : "border-gray-600"
                    } ${index === 2 ? "md:scale-105 md:shadow-2xl" : ""}`}
                    onClick={() => setSelectedPackage(pkg.id)}
                  >
                    {index === 2 && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="badge badge-accent">
                          MOST POPULAR
                        </span>
                      </div>
                    )}
                    <div className="text-center">
                      <h3 className="text-2xl font-semibold mb-2">{pkg.name}</h3>
                      <div className="text-4xl font-light mb-2">${pkg.price}</div>
                      <div className="text-lg text-gray-400 mb-4">
                        {pkg.credits.toLocaleString()} credits
                      </div>
                      <div className="text-sm text-gray-500 mb-4">
                        ${(pkg.price / pkg.credits).toFixed(3)} per letter
                      </div>
                      {pkg.savings > 0 && (
                        <div className="text-green-400 text-sm mb-6">
                          Save ${pkg.savings}
                        </div>
                      )}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePurchase(pkg.id);
                        }}
                        className={`w-full py-3 rounded-lg font-medium transition-all ${
                          selectedPackage === pkg.id
                            ? "btn btn-primary"
                            : "btn btn-ghost"
                        }`}
                      >
                        Purchase
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Transaction History */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-semibold mb-4">Transaction History</h2>
              </div>
              <div className="space-y-4">
                {transactions.length === 0 ? (
                  <div className="card glass text-center py-12">
                    <p className="text-gray-400 text-lg">No transactions yet</p>
                  </div>
                ) : (
                  transactions.map((transaction, index) => (
                    <div key={transaction.id} className="card glass p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center ${
                              transaction.type === "credit"
                                ? "bg-green-500/20 text-green-400"
                                : "bg-red-500/20 text-red-400"
                            }`}
                          >
                            {transaction.type === "credit" ? (
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                              </svg>
                            ) : (
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                              </svg>
                            )}
                          </div>
                          <div>
                            <p className="font-semibold text-lg">{transaction.description}</p>
                            <p className="text-gray-400 text-sm">
                              {new Date(transaction.created_at).toLocaleDateString()} at{" "}
                              {new Date(transaction.created_at).toLocaleTimeString()}
                            </p>
                            {transaction.campaign_id && (
                              <Link
                                href={`/campaigns/${transaction.campaign_id}`}
                                className="text-blue-400 hover:text-blue-300 text-sm"
                              >
                                View campaign →
                              </Link>
                            )}
                          </div>
                        </div>
                        <span
                          className={`text-2xl font-light ${
                            transaction.type === "credit"
                              ? "text-green-400"
                              : "text-red-400"
                          }`}
                        >
                          {transaction.type === "credit" ? "+" : "-"}
                          {formatCurrency(transaction.amount)}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Info Section */}
            <div className="card glass p-6">
              <div className="flex items-start space-x-4">
                <svg className="w-6 h-6 text-blue-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <p className="font-semibold text-lg mb-2">How credits work</p>
                  <p className="text-gray-400">
                    Each credit equals $1 and covers the full cost of sending one
                    letter including AI generation, printing, and postage. Bulk
                    purchases receive discounted rates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}