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
      <div >
        <Spinner size="lg" />
      </div>
    );
  }
  return (
    <div >
      {/* Navigation */}
      {/* Main Content */}
      <Container size="xl">
        <div >
          {/* Welcome Section */}
          <div >
            <Text size="sm" color="muted" >
              Welcome back
            </Text>
            <H1 >
              {user?.name || "Dashboard"}
            </H1>
            <Text size="lg" color="secondary">
              Here's what's happening with your campaigns today
            </Text>
          </div>
          {/* Quick Actions */}
          <Grid cols={3} gap={4} >
            <Button
              variant="primary"
              size="lg"
              href="/campaigns/new"
            >
              <span >+</span>
              <span>New Campaign</span>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="/leads/upload"
            >
              <span >📤</span>
              <span>Upload Texts</span>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="/templates"
            >
              <span >📝</span>
              <span>Templates</span>
            </Button>
          </Grid>
          {/* Stats Grid */}
          <Grid cols={4} gap={6} >
            <Card glass>
              <Text size="sm" color="muted" >Total Sent</Text>
              <H2 >{stats.totalSent.toLocaleString()}</H2>
              <Text size="sm" color="secondary" >
                <span >↑ 12%</span> from last month
              </Text>
            </Card>
            <Card glass>
              <Text size="sm" color="muted" >Active Campaigns</Text>
              <H2 >{stats.activeCampaigns}</H2>
              <Text size="sm" color="secondary" >
                {stats.activeCampaigns === 0 ? "Create your first campaign" : "Currently running"}
              </Text>
            </Card>
            <Card glass>
              <Text size="sm" color="muted" >Response Rate</Text>
              <H2 >{stats.responseRate}%</H2>
              <Text size="sm" color="secondary" >
                <span >↑ 3.2%</span> above average
              </Text>
            </Card>
            <Card glass>
              <Text size="sm" color="muted" >Credits Balance</Text>
              <H2 >{formatCurrency(stats.creditsBalance)}</H2>
              <Link href="/billing">
                <Text size="sm" color="accent" >
                  Add more credits →
                </Text>
              </Link>
            </Card>
          </Grid>
          {/* Recent Campaigns */}
          <div>
            <Flex justify="between" align="center" >
              <H3>Recent Campaigns</H3>
              <Button variant="ghost" size="sm" href="/campaigns">
                View All →
              </Button>
            </Flex>
            {campaigns.length === 0 ? (
              <Card glass >
                <div >📮</div>
                <H3 >No campaigns yet</H3>
                <Text color="secondary" >
                  Create your first campaign to start sending personalized direct mail
                </Text>
                <Button variant="primary" href="/campaigns/new">
                  Create First Campaign
                </Button>
              </Card>
            ) : (
              <div >
                {campaigns.map((campaign) => (
                  <Card key={campaign.id} hover >
                    <Flex justify="between" align="center">
                      <Flex gap={4} align="center">
                        <div>
                          <Flex gap={2} align="center" >
                            <Text weight="semibold">{campaign.name}</Text>
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
                          <Flex gap={4}>
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
          <div >
            <H3 >Performance Overview</H3>
            <Card glass >
              <Text color="muted">Chart visualization coming soon</Text>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}