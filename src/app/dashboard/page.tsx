/*
 * Dashboard - Minimalist Dark Theme
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
      <div className="min-h-screen flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navigation variant="app" user={user} />
      {/* Main Content */}
      <Container size="xl" className="pt-24">
        <div className="space-y-12">
          {/* Welcome Section */}
          <div className="space-y-4">
            <Text size="sm" color="muted">
              Welcome back
            </Text>
            <H1 className="text-4xl font-light">
              {user?.name || "Dashboard"}
            </H1>
            <Text size="lg" color="secondary">
              Here's what's happening with your campaigns today
            </Text>
          </div>
          {/* Quick Actions */}
          <Grid cols={3} gap={4}>
            <Button
              variant="primary"
              size="lg"
              href="/campaigns/new"
              className="justify-center"
            >
              <span className="text-xl mr-2">+</span>
              <span>New Campaign</span>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="/leads/upload"
              className="justify-center"
            >
              <span className="text-xl mr-2">📤</span>
              <span>Upload Texts</span>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="/templates"
              className="justify-center"
            >
              <span className="text-xl mr-2">📝</span>
              <span>Templates</span>
            </Button>
          </Grid>
          {/* Stats Grid */}
          <Grid cols={4} gap={6}>
            <Card glass className="text-center">
              <Text size="sm" color="muted" className="mb-2">Total Sent</Text>
              <H2 className="text-3xl font-light mb-2">{stats.totalSent.toLocaleString()}</H2>
              <Text size="sm" color="secondary">
                <span className="text-green-400">↑ 12%</span> from last month
              </Text>
            </Card>
            <Card glass className="text-center">
              <Text size="sm" color="muted" className="mb-2">Active Campaigns</Text>
              <H2 className="text-3xl font-light mb-2">{stats.activeCampaigns}</H2>
              <Text size="sm" color="secondary">
                {stats.activeCampaigns === 0 ? "Create your first campaign" : "Currently running"}
              </Text>
            </Card>
            <Card glass className="text-center">
              <Text size="sm" color="muted" className="mb-2">Response Rate</Text>
              <H2 className="text-3xl font-light mb-2">{stats.responseRate}%</H2>
              <Text size="sm" color="secondary">
                <span className="text-green-400">↑ 3.2%</span> above average
              </Text>
            </Card>
            <Card glass className="text-center">
              <Text size="sm" color="muted" className="mb-2">Credits Balance</Text>
              <H2 className="text-3xl font-light mb-2">{formatCurrency(stats.creditsBalance)}</H2>
              <Link href="/billing">
                <Text size="sm" color="accent" className="hover:underline">
                  Add more credits →
                </Text>
              </Link>
            </Card>
          </Grid>
          {/* Recent Campaigns */}
          <div className="space-y-6">
            <Flex justify="between" align="center">
              <H3 className="text-2xl font-semibold">Recent Campaigns</H3>
              <Button variant="ghost" size="sm" href="/campaigns">
                View All →
              </Button>
            </Flex>
            {campaigns.length === 0 ? (
              <Card glass className="text-center py-12">
                <div className="text-6xl mb-4">📮</div>
                <H3 className="text-2xl font-semibold mb-4">No campaigns yet</H3>
                <Text color="secondary" className="mb-6 max-w-md mx-auto">
                  Create your first campaign to start sending personalized direct mail
                </Text>
                <Button variant="primary" href="/campaigns/new">
                  Create First Campaign
                </Button>
              </Card>
            ) : (
              <div className="space-y-4">
                {campaigns.map((campaign) => (
                  <Card key={campaign.id} hover className="p-6">
                    <Flex justify="between" align="center">
                      <Flex gap={4} align="center">
                        <div>
                          <Flex gap={2} align="center" className="mb-2">
                            <Text weight="semibold" className="text-lg">{campaign.name}</Text>
                            <Badge
                              variant={
                                campaign.status === "completed" ? "success" :
                                campaign.status === "processing" ? "warning" :
                                campaign.status === "failed" ? "error" : "default"
                              }
                            >
                              {campaign.status}
                            </Badge>
                          </Flex>
                          <Flex gap={4} className="text-sm text-gray-400">
                            <span>{campaign.recipient_count} recipients</span>
                            <span>{formatCurrency(campaign.total_cost)}</span>
                            <span>{new Date(campaign.created_at).toLocaleDateString()}</span>
                          </Flex>
                        </div>
                      </Flex>
                      <Button
                        variant="ghost"
                        size="sm"
                        href={`/campaigns/${campaign.id}`}
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
          <div className="space-y-6">
            <H3 className="text-2xl font-semibold">Performance Overview</H3>
            <Card glass className="p-8 text-center">
              <Text color="muted" className="text-lg">Chart visualization coming soon</Text>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}