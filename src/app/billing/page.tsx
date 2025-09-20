/*
 * Billing Page - Jony Ive-Inspired Dark Theme
 * Clean, transparent billing and credit management
 */
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { formatCurrency } from "@/lib/pricing";
import Logo from "@/components/Logo";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Container,
  Section,
  Grid,
  Flex,
  H1,
  H2,
  H3,
  Text,
  Button,
  Card,
  Badge,
  Divider,
  Spinner,
  GlowOrb,
  Noise,
  Metric,
  ProgressBar,
  DataTable,
} from "@/components/ui";

interface Transaction {
  id: string;
  type: "credit" | "debit";
  amount: number;
  description: string;
  created_at: string;
  campaign_id?: string;
}

interface CreditPackage {
  id: string;
  name: string;
  credits: number;
  price: number;
  savings?: number;
  popular?: boolean;
}

export default function BillingPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPackage, setSelectedPackage] = useState<string>("");

  const creditPackages: CreditPackage[] = [
    {
      id: "package_50",
      name: "Starter Pack",
      credits: 50,
      price: 100,
    },
    {
      id: "package_100",
      name: "Growth Pack",
      credits: 100,
      price: 180,
      savings: 20,
    },
    {
      id: "package_500",
      name: "Pro Pack",
      credits: 500,
      price: 800,
      savings: 100,
      popular: true,
    },
    {
      id: "package_1000",
      name: "Enterprise Pack",
      credits: 1000,
      price: 1500,
      savings: 250,
    },
  ];

  useEffect(() => {
    loadBillingData();
  }, []);

  const loadBillingData = async () => {
    const { data: { user: authUser } } = await supabase.auth.getUser();
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

    // Mock transaction data
    setTransactions([
      {
        id: "1",
        type: "credit",
        amount: 100,
        description: "Growth Pack purchase",
        created_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      },
      {
        id: "2",
        type: "debit",
        amount: 25,
        description: "Campaign: Q4 Marketing",
        created_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
        campaign_id: "camp_123",
      },
      {
        id: "3",
        type: "credit",
        amount: 50,
        description: "Starter Pack purchase",
        created_at: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
      },
      {
        id: "4",
        type: "debit",
        amount: 45,
        description: "Campaign: Holiday Sale",
        created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
        campaign_id: "camp_456",
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
        <Navigation />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-4">
            <Spinner size="lg" />
            <Text size="sm" color="muted">Loading billing data...</Text>
          </div>
        </div>
      </div>
    );
  }

  const stats = {
    currentBalance: user?.credits_balance || 0,
    totalSpent: transactions
      .filter((t) => t.type === "debit")
      .reduce((sum, t) => sum + t.amount, 0),
    lettersSent: user?.total_pieces_sent || 0,
    creditsUsed: transactions
      .filter((t) => t.type === "debit")
      .reduce((sum, t) => sum + t.amount, 0),
  };

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Premium Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 via-black to-black" />
        <GlowOrb color="accent" size="lg" className="top-20 -left-20 opacity-20" />
        <GlowOrb color="purple" size="default" className="bottom-40 right-10 opacity-15" />
        <GlowOrb color="white" size="sm" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />
      </div>
      <Noise opacity={0.015} />

      {/* Navigation */}
      <Navigation />

      <Section className="relative pt-24">
        <Container size="xl">
          <div className="space-y-12 relative z-10">
            {/* Header */}
            <div className="animate-fade-in">
              <div className="space-y-2 mb-8">
                <H1 className="text-6xl font-bold gradient-text">Billing</H1>
                <Text size="lg" color="secondary">
                  Manage your credits and view transaction history
                </Text>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="animate-slide-up animation-delay-200">
              <Grid cols={4} gap={6}>
                <Card glass className="hover-lift backdrop-blur-xl border-gray-800/50 premium-shadow">
                  <Metric
                    value={formatCurrency(stats.currentBalance)}
                    label="Current Balance"
                  />
                  <div className="mt-2">
                    <ProgressBar
                      value={stats.currentBalance}
                      max={Math.max(200, stats.currentBalance)}
                      variant="accent"
                      className="h-1"
                    />
                  </div>
                </Card>
                <Card glass className="hover-lift backdrop-blur-xl border-gray-800/50 premium-shadow">
                  <Metric
                    value={formatCurrency(stats.totalSpent)}
                    label="Total Spent"
                  />
                </Card>
                <Card glass className="hover-lift backdrop-blur-xl border-gray-800/50 premium-shadow">
                  <Metric
                    value={stats.lettersSent.toLocaleString()}
                    label="Letters Sent"
                  />
                </Card>
                <Card glass className="hover-lift backdrop-blur-xl border-gray-800/50 premium-shadow">
                  <Metric
                    value={`${stats.creditsUsed}`}
                    label="Credits Used"
                  />
                </Card>
              </Grid>
            </div>

            {/* Credit Packages */}
            <div className="animate-slide-up animation-delay-400">
              <div className="text-center space-y-4 mb-12">
                <H2>Purchase Credits</H2>
                <Text size="lg" color="secondary">
                  Choose the perfect credit package for your campaigns
                </Text>
              </div>

              <Grid cols={4} gap={6}>
                {creditPackages.map((pkg) => (
                  <Card
                    key={pkg.id}
                    className={`relative overflow-hidden transition-all duration-300 hover-lift cursor-pointer ${
                      pkg.popular
                        ? "border-blue-500/50 bg-gradient-to-b from-gray-900/50 to-black scale-105 premium-shadow"
                        : "border-gray-800/50 backdrop-blur-xl premium-shadow"
                    } ${
                      selectedPackage === pkg.id ? "ring-2 ring-blue-500/50" : ""
                    }`}
                    glass={!pkg.popular}
                    onClick={() => setSelectedPackage(pkg.id)}
                  >
                    {pkg.popular && (
                      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
                    )}
                    {pkg.popular && (
                      <Badge
                        variant="accent"
                        className="absolute -top-3 left-1/2 -translate-x-1/2"
                      >
                        Most Popular
                      </Badge>
                    )}

                    <div className="space-y-6 text-center">
                      <div className="space-y-2">
                        <H3 className="text-xl font-semibold">{pkg.name}</H3>
                        <div className="flex items-baseline justify-center gap-2">
                          <span className="text-4xl font-bold text-white">
                            ${pkg.price}
                          </span>
                        </div>
                        <Text size="lg" color="accent" weight="semibold">
                          {pkg.credits.toLocaleString()} credits
                        </Text>
                        <Text size="sm" color="muted">
                          ${(pkg.price / pkg.credits).toFixed(3)} per credit
                        </Text>
                        {pkg.savings && (
                          <Text size="sm" color="success" className="flex items-center justify-center gap-1">
                            💰 Save ${pkg.savings}
                          </Text>
                        )}
                      </div>

                      <Divider />

                      <Button
                        variant={pkg.popular ? "primary" : "secondary"}
                        fullWidth
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePurchase(pkg.id);
                        }}
                        className={pkg.popular ? "shadow-lg shadow-blue-500/20" : ""}
                      >
                        Purchase Package
                      </Button>
                    </div>
                  </Card>
                ))}
              </Grid>
            </div>

            {/* Transaction History */}
            <div className="animate-slide-up animation-delay-600">
              <div className="space-y-6">
                <H2>Transaction History</H2>

                {transactions.length === 0 ? (
                  <Card glass className="text-center space-y-6 backdrop-blur-xl border-gray-800/50 premium-shadow hover-lift p-12">
                    <div className="text-6xl opacity-50">💳</div>
                    <H3 className="text-2xl">No transactions yet</H3>
                    <Text color="secondary">
                      Purchase your first credit package to get started
                    </Text>
                  </Card>
                ) : (
                  <Card glass className="backdrop-blur-xl border-gray-800/50 premium-shadow">
                    <div className="space-y-1">
                      {transactions.map((transaction, index) => (
                        <div
                          key={transaction.id}
                          className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-800/30 transition-colors"
                        >
                          <Flex gap={4} >
                            <div
                              className={`w-12 h-12 rounded-full flex items-center justify-center ${
                                transaction.type === "credit"
                                  ? "bg-green-500/20 text-green-400"
                                  : "bg-red-500/20 text-red-400"
                              }`}
                            >
                              {transaction.type === "credit" ? "+" : "-"}
                            </div>
                            <div className="space-y-1">
                              <Text weight="semibold">{transaction.description}</Text>
                              <Text size="sm" color="muted">
                                {new Date(transaction.created_at).toLocaleDateString()} at{" "}
                                {new Date(transaction.created_at).toLocaleTimeString()}
                              </Text>
                              {transaction.campaign_id && (
                                <Link
                                  href={`/campaigns/${transaction.campaign_id}`}
                                  className="text-blue-500 hover:text-blue-400 text-sm transition-colors"
                                >
                                  View campaign →
                                </Link>
                              )}
                            </div>
                          </Flex>
                          <div className="text-right">
                            <Text
                              weight="bold"
                              size="lg"
                              className={
                                transaction.type === "credit"
                                  ? "text-green-400"
                                  : "text-red-400"
                              }
                            >
                              {transaction.type === "credit" ? "+" : "-"}
                              {formatCurrency(transaction.amount)}
                            </Text>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                )}
              </div>
            </div>

            {/* Info Section */}
            <div className="animate-slide-up animation-delay-800">
              <Card glass className="backdrop-blur-xl border-gray-800/50 premium-shadow">
                <Flex gap={4} align="start">
                  <div className="text-blue-500 text-2xl">ℹ️</div>
                  <div className="space-y-2">
                    <Text weight="semibold" size="lg">How credits work</Text>
                    <Text color="secondary" className="leading-relaxed">
                      Each credit equals $1 and covers the full cost of sending one
                      letter including AI generation, printing, and postage. Bulk
                      purchases receive discounted rates and never expire.
                    </Text>
                  </div>
                </Flex>
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