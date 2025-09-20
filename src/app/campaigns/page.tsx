/*
 * Campaigns Page - Jony Ive-Inspired Dark Theme
 * Campaign management interface
 */
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { Campaign } from "@/types";
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
  Nav,
  NavLink,
  Spinner,
  Select,
  GlowOrb,
  Noise,
  Metric,
  ProgressBar,
} from "@/components/ui";
export default function CampaignsPage() {
  const router = useRouter();
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("created_at");
  useEffect(() => {
    loadCampaigns();
  }, [filter, sortBy]);
  const loadCampaigns = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      router.push("/auth/login");
      return;
    }
    let query = supabase
      .from("enclosed_campaigns")
      .select("*")
      .eq("user_id", user.id)
      .order(sortBy, { ascending: false });
    if (filter !== "all") {
      query = query.eq("status", filter);
    }
    const { data } = await query;
    if (data) {
      setCampaigns(data);
    }
    setLoading(false);
  };
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };
  if (loading) {
    return (
      <div className="min-h-screen bg-black">
        <Navigation />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-4">
            <Spinner size="lg" />
            <Text size="sm" color="muted">Loading campaigns...</Text>
          </div>
        </div>
      </div>
    );
  }
  const stats = {
    total: campaigns.length,
    active: campaigns.filter((c) =>
      ["draft", "scheduled", "processing"].includes(c.status)
    ).length,
    completed: campaigns.filter((c) => c.status === "completed").length,
    totalSpent: campaigns.reduce(
      (sum, c) => sum + (c.status === "completed" ? c.total_cost : 0),
      0
    ),
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
              <Flex justify="between" align="start" className="mb-8">
                <div className="space-y-2">
                  <H1 className="text-6xl font-bold gradient-text">Campaigns</H1>
                  <Text size="lg" color="secondary">
                    Manage and track all your direct mail campaigns
                  </Text>
                </div>
                <Button variant="primary" size="lg" href="/campaigns/new" className="hover-lift shadow-lg shadow-blue-500/20">
                  <span className="text-xl">+</span>
                  Create Campaign
                </Button>
              </Flex>
            </div>
            {/* Stats Cards */}
            <div className="animate-slide-up animation-delay-200">
              <Grid cols={4} gap={6}>
                <Card glass className="hover-lift backdrop-blur-xl border-gray-800/50 premium-shadow">
                  <Metric
                    value={stats.total}
                    label="Total Campaigns"
                  />
                </Card>
                <Card glass className="hover-lift backdrop-blur-xl border-gray-800/50 premium-shadow">
                  <Metric
                    value={stats.active}
                    label="Active"
                  />
                  <div className="mt-2">
                    <ProgressBar
                      value={stats.active}
                      max={stats.total || 1}
                      variant="warning"
                      className="h-1"
                    />
                  </div>
                </Card>
                <Card glass className="hover-lift backdrop-blur-xl border-gray-800/50 premium-shadow">
                  <Metric
                    value={stats.completed}
                    label="Completed"
                  />
                  <div className="mt-2">
                    <ProgressBar
                      value={stats.completed}
                      max={stats.total || 1}
                      variant="success"
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
              </Grid>
            </div>
            {/* Filters */}
            <div className="animate-slide-up animation-delay-400">
              <Card glass className="backdrop-blur-xl border-gray-800/50 p-6">
                <Flex justify="between" align="center">
                  <div>
                    <Text size="sm" color="muted" className="mb-3 block">Filter by status</Text>
                    <Flex gap={2} wrap>
                      {["all", "draft", "processing", "scheduled", "completed", "failed"].map((status) => (
                        <Button
                          key={status}
                          variant={filter === status ? "primary" : "ghost"}
                          size="sm"
                          onClick={() => setFilter(status)}
                          className={filter === status ? "shadow-lg shadow-blue-500/20" : ""}
                        >
                          {status.charAt(0).toUpperCase() + status.slice(1)}
                        </Button>
                      ))}
                    </Flex>
                  </div>
                  <div className="min-w-[200px]">
                    <Text size="sm" color="muted" className="mb-3 block">Sort by</Text>
                    <Select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full"
                    >
                      <option value="created_at">Newest First</option>
                      <option value="name">Name</option>
                      <option value="recipient_count">Recipients</option>
                      <option value="total_cost">Cost</option>
                    </Select>
                  </div>
                </Flex>
              </Card>
            </div>
            {/* Campaigns List */}
            <div className="animate-slide-up animation-delay-600">
              {campaigns.length === 0 ? (
                <Card glass className="text-center space-y-6 backdrop-blur-xl border-gray-800/50 premium-shadow hover-lift p-12">
                  <div className="text-6xl opacity-50">📭</div>
                  <H3 className="text-2xl">No campaigns found</H3>
                  <Text color="secondary" className="max-w-md mx-auto">
                    {filter !== "all"
                      ? `No ${filter} campaigns yet`
                      : "Create your first campaign to get started"}
                  </Text>
                  <Button variant="primary" href="/campaigns/new" className="shadow-lg shadow-blue-500/20">
                    Create Campaign
                  </Button>
                </Card>
              ) : (
                <div className="space-y-4">
                  {campaigns.map((campaign, index) => (
                    <Card key={campaign.id} className="hover-lift backdrop-blur-sm border-gray-800/50 premium-shadow transition-all duration-300 hover:scale-[1.01]">
                      <Flex justify="between" align="start">
                        <div className="space-y-4 flex-1">
                          <Flex gap={3} align="center">
                            <H3 className="text-xl font-semibold">{campaign.name}</H3>
                            <Badge
                              variant={
                                campaign.status === "completed" ? "success" :
                                campaign.status === "processing" ? "warning" :
                                campaign.status === "scheduled" ? "accent" :
                                campaign.status === "failed" ? "error" : "default"
                              }
                              pulse={campaign.status === "processing"}
                            >
                              {campaign.status}
                            </Badge>
                          </Flex>

                          <Grid cols={4} gap={6} className="mt-4">
                            <div className="space-y-1">
                              <Text size="sm" color="muted">Recipients</Text>
                              <Text weight="semibold" size="lg">{campaign.recipient_count.toLocaleString()}</Text>
                            </div>
                            <div className="space-y-1">
                              <Text size="sm" color="muted">Total Cost</Text>
                              <Text weight="semibold" size="lg">{formatCurrency(campaign.total_cost)}</Text>
                            </div>
                            <div className="space-y-1">
                              <Text size="sm" color="muted">Offer Type</Text>
                              <Text weight="semibold">
                                {campaign.offer_type.replace(/_/g, " ").charAt(0).toUpperCase() +
                                 campaign.offer_type.replace(/_/g, " ").slice(1)}
                              </Text>
                            </div>
                            <div className="space-y-1">
                              <Text size="sm" color="muted">Created</Text>
                              <Text weight="semibold">
                                {new Date(campaign.created_at).toLocaleDateString()}
                              </Text>
                            </div>
                          </Grid>

                          {campaign.status === "completed" && (
                            <div className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                              <Flex gap={6}>
                                <Text size="sm" color="success">
                                  <span className="text-green-400">✓</span> Delivered: {campaign.sent_count || 0}
                                </Text>
                                <Text size="sm" color="success">
                                  <span className="text-green-400">📊</span> Response Rate: 12.4%
                                </Text>
                              </Flex>
                            </div>
                          )}
                        </div>

                        <Flex gap={3} direction="col" className="ml-6">
                          <Button
                            variant="ghost"
                            size="sm"
                            href={`/campaigns/${campaign.id}`}
                            className="hover:scale-105 transition-transform"
                          >
                            View Details
                          </Button>
                          {campaign.status === "draft" && (
                            <Button
                              variant="primary"
                              size="sm"
                              href={`/campaigns/${campaign.id}/send`}
                              className="shadow-lg shadow-blue-500/20"
                            >
                              Send Now
                            </Button>
                          )}
                        </Flex>
                      </Flex>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* Footer */}
      <Footer />
    </div>
  );
}