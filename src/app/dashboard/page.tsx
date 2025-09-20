/*
 * Dashboard - Jony Ive-Inspired Dark Theme
 * Clean, focused interface for campaign management
 */
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { Campaign, User } from "@/types";
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
  Nav,
  NavLink,
  Spinner,
  Alert,
  GlowOrb,
  Noise,
  Metric,
  ProgressBar,
} from "@/components/ui";
export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [stats, setStats] = useState({
    totalSent: 0,
    activeCampaigns: 0,
    creditsBalance: 0,
    responseRate: 0,
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadDashboard = async () => {
      const { data: { user: authUser } } = await supabase.auth.getUser();
      if (!authUser) {
        router.push("/auth/login");
        return;
      }
      // Load user profile
      const { data: userData } = await supabase
        .from("enclosed_users")
        .select("*")
        .eq("id", authUser.id)
        .single();
      if (userData) {
        setUser(userData);
        setStats({
          totalSent: userData.total_pieces_sent || 0,
          activeCampaigns: 0,
          creditsBalance: userData.credits_balance || 0,
          responseRate: 12.4, // Example stat
        });
      }
      // Load campaigns
      const { data: campaignData } = await supabase
        .from("enclosed_campaigns")
        .select("*")
        .eq("user_id", authUser.id)
        .order("created_at", { ascending: false })
        .limit(5);
      if (campaignData) {
        setCampaigns(campaignData);
        const active = campaignData.filter((c) =>
          ["draft", "scheduled", "processing"].includes(c.status)
        ).length;
        setStats((prev) => ({ ...prev, activeCampaigns: active }));
      }
      setLoading(false);
    };
    loadDashboard();
  }, [router]);
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };
  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center space-y-4">
          <Spinner size="lg" />
          <Text size="sm" color="muted">Loading dashboard...</Text>
        </div>
      </div>
    );
  }
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

      {/* Main Content */}
      <Section className="relative min-h-screen pt-24">
        <Container size="xl">
          <div className="space-y-12 relative z-10">
            {/* Welcome Section */}
            <div className="space-y-4 animate-fade-in">
              <Text size="sm" color="muted" className="uppercase tracking-wide">
                Welcome back
              </Text>
              <H1 className="text-6xl font-bold gradient-text">
                {user?.name || "Dashboard"}
              </H1>
              <Text size="lg" color="secondary">
                Here's what's happening with your campaigns today
              </Text>
            </div>
            {/* Quick Actions */}
            <div className="animate-slide-up animation-delay-200">
              <Grid cols={3} gap={6}>
                <Button
                  variant="primary"
                  size="lg"
                  href="/campaigns/new"
                  className="hover-lift shadow-lg shadow-blue-500/20 backdrop-blur-sm"
                >
                  <span className="text-xl">+</span>
                  <span>New Campaign</span>
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  href="/leads/upload"
                  className="hover-lift backdrop-blur-sm"
                >
                  <span className="text-lg">📤</span>
                  <span>Upload Leads</span>
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  href="/templates"
                  className="hover-lift backdrop-blur-sm"
                >
                  <span className="text-lg">📝</span>
                  <span>Templates</span>
                </Button>
              </Grid>
            </div>
            {/* Stats Grid */}
            <div className="animate-slide-up animation-delay-400">
              <Grid cols={4} gap={6}>
                <Card glass className="hover-lift backdrop-blur-xl border-gray-800/50 premium-shadow">
                  <Metric
                    value={stats.totalSent.toLocaleString()}
                    label="Total Sent"
                    change={{ value: 12, type: "increase" }}
                  />
                </Card>
                <Card glass className="hover-lift backdrop-blur-xl border-gray-800/50 premium-shadow">
                  <Metric
                    value={stats.activeCampaigns}
                    label="Active Campaigns"
                  />
                  <Text size="sm" color="secondary" className="mt-2">
                    {stats.activeCampaigns === 0 ? "Create your first campaign" : "Currently running"}
                  </Text>
                </Card>
                <Card glass className="hover-lift backdrop-blur-xl border-gray-800/50 premium-shadow">
                  <Metric
                    value={`${stats.responseRate}%`}
                    label="Response Rate"
                    change={{ value: 3.2, type: "increase" }}
                  />
                  <Text size="sm" color="secondary" className="mt-2">
                    Above industry average
                  </Text>
                </Card>
                <Card glass className="hover-lift backdrop-blur-xl border-gray-800/50 premium-shadow">
                  <Metric
                    value={formatCurrency(stats.creditsBalance)}
                    label="Credits Balance"
                  />
                  <Link href="/billing" className="mt-2 block">
                    <Text size="sm" color="accent" className="hover:text-blue-400 transition-colors">
                      Add more credits →
                    </Text>
                  </Link>
                </Card>
              </Grid>
            </div>
            {/* Recent Campaigns */}
            <div className="animate-slide-up animation-delay-600">
              <Flex justify="between" align="center" className="mb-6">
                <H3 className="text-2xl font-semibold">Recent Campaigns</H3>
                <Button variant="ghost" size="sm" href="/campaigns" className="hover:scale-105 transition-transform">
                  View All →
                </Button>
              </Flex>
              {campaigns.length === 0 ? (
                <Card glass className="text-center space-y-6 backdrop-blur-xl border-gray-800/50 premium-shadow hover-lift p-12">
                  <div className="text-6xl opacity-50">📮</div>
                  <H3 className="text-xl">No campaigns yet</H3>
                  <Text color="secondary" className="max-w-md mx-auto">
                    Create your first campaign to start sending personalized direct mail
                  </Text>
                  <Button variant="primary" href="/campaigns/new" className="shadow-lg shadow-blue-500/20">
                    Create First Campaign
                  </Button>
                </Card>
              ) : (
                <div className="space-y-4">
                  {campaigns.map((campaign, index) => (
                    <Card key={campaign.id} className="hover-lift backdrop-blur-sm border-gray-800/50 premium-shadow transition-all duration-300 hover:scale-[1.02]">
                      <Flex justify="between" align="center">
                        <Flex gap={4} align="center">
                          <div className="space-y-2">
                            <Flex gap={3} align="center">
                              <Text weight="semibold" size="lg">{campaign.name}</Text>
                              <Badge
                                variant={
                                  campaign.status === "completed" ? "success" :
                                  campaign.status === "processing" ? "warning" :
                                  campaign.status === "failed" ? "error" : "default"
                                }
                                pulse={campaign.status === "processing"}
                              >
                                {campaign.status}
                              </Badge>
                            </Flex>
                            <Flex gap={6}>
                              <Text size="sm" color="muted">
                                {campaign.recipient_count} recipients
                              </Text>
                              <Text size="sm" color="muted">
                                {formatCurrency(campaign.total_cost)}
                              </Text>
                              <Text size="sm" color="muted">
                                {new Date(campaign.created_at).toLocaleDateString()}
                              </Text>
                            </Flex>
                          </div>
                        </Flex>
                        <Button
                          variant="ghost"
                          size="sm"
                          href={`/campaigns/${campaign.id}`}
                          className="hover:scale-105 transition-transform"
                        >
                          View →
                        </Button>
                      </Flex>
                    </Card>
                  ))}
                </div>
              )}
            </div>
            {/* Performance Chart Placeholder */}
            <div className="animate-slide-up animation-delay-800">
              <H3 className="text-2xl font-semibold mb-6">Performance Overview</H3>
              <Card glass className="backdrop-blur-xl border-gray-800/50 premium-shadow hover-lift p-12 text-center">
                <div className="space-y-4">
                  <div className="text-4xl opacity-50">📊</div>
                  <Text color="muted" size="lg">Advanced analytics dashboard coming soon</Text>
                  <ProgressBar value={75} max={100} variant="accent" className="w-48 mx-auto" />
                  <Text size="sm" color="muted">75% complete</Text>
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