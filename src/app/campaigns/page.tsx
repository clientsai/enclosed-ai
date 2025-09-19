/*
 * Campaigns Page - Minimalist Dark Theme
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
import {
  Container,
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
      <div className="min-h-screen bg-black text-white">
        <Navigation variant="app" />
        <div className="flex items-center justify-center min-h-screen">
          <Spinner size="lg" />
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
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navigation variant="app" />
      <Container size="xl" className="pt-24">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <Flex justify="between" align="start">
              <div>
                <H1 className="text-4xl font-light mb-2">Campaigns</H1>
                <Text size="lg" color="secondary">
                  Manage and track all your direct mail campaigns
                </Text>
              </div>
              <Button variant="primary" size="lg" href="/campaigns/new" className="flex items-center gap-2">
                <span className="text-xl">+</span>
                Create Campaign
              </Button>
            </Flex>
          </div>
          {/* Stats Cards */}
          <Grid cols={4} gap={6}>
            <Card glass className="text-center">
              <Text size="sm" color="muted" className="mb-2">Total Campaigns</Text>
              <H2 className="text-3xl font-light">{stats.total}</H2>
            </Card>
            <Card glass className="text-center">
              <Text size="sm" color="muted" className="mb-2">Active</Text>
              <H2 className="text-3xl font-light">{stats.active}</H2>
            </Card>
            <Card glass className="text-center">
              <Text size="sm" color="muted" className="mb-2">Completed</Text>
              <H2 className="text-3xl font-light">{stats.completed}</H2>
            </Card>
            <Card glass className="text-center">
              <Text size="sm" color="muted" className="mb-2">Total Spent</Text>
              <H2 className="text-3xl font-light">{formatCurrency(stats.totalSpent)}</H2>
            </Card>
          </Grid>
          {/* Filters */}
          <Flex justify="between" className="py-6">
            <Flex gap={2} className="flex-wrap">
              {["all", "draft", "processing", "scheduled", "completed", "failed"].map((status) => (
                <Button
                  key={status}
                  variant={filter === status ? "primary" : "ghost"}
                  size="sm"
                  onClick={() => setFilter(status)}
                  className="capitalize"
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </Button>
              ))}
            </Flex>
            <Select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="min-w-[150px]"
            >
              <option value="created_at">Newest First</option>
              <option value="name">Name</option>
              <option value="recipient_count">Recipients</option>
              <option value="total_cost">Cost</option>
            </Select>
          </Flex>
          {/* Campaigns List */}
          {campaigns.length === 0 ? (
            <Card glass className="text-center py-16">
              <div className="text-6xl mb-6">📭</div>
              <H3 className="text-2xl font-semibold mb-4">No campaigns found</H3>
              <Text color="secondary" className="mb-8 max-w-md mx-auto">
                {filter !== "all"
                  ? `No ${filter} campaigns yet`
                  : "Create your first campaign to get started"}
              </Text>
              <Button variant="primary" href="/campaigns/new">
                Create Campaign
              </Button>
            </Card>
          ) : (
            <div className="space-y-4">
              {campaigns.map((campaign) => (
                <Card key={campaign.id} hover className="p-6">
                  <Flex justify="between" align="start">
                    <div className="flex-1">
                      <Flex gap={3} align="center" className="mb-4">
                        <H3 className="text-xl font-semibold">{campaign.name}</H3>
                        <Badge
                          variant={
                            campaign.status === "completed" ? "success" :
                            campaign.status === "processing" ? "warning" :
                            campaign.status === "scheduled" ? "accent" :
                            campaign.status === "failed" ? "error" : "default"
                          }
                        >
                          {campaign.status}
                        </Badge>
                      </Flex>
                      <Grid cols={4} gap={6} className="mb-4">
                        <div>
                          <Text size="sm" color="muted" className="mb-1">Recipients</Text>
                          <Text weight="semibold" className="text-lg">{campaign.recipient_count.toLocaleString()}</Text>
                        </div>
                        <div>
                          <Text size="sm" color="muted" className="mb-1">Total Cost</Text>
                          <Text weight="semibold" className="text-lg">{formatCurrency(campaign.total_cost)}</Text>
                        </div>
                        <div>
                          <Text size="sm" color="muted" className="mb-1">Offer Type</Text>
                          <Text weight="semibold" className="text-lg">
                            {campaign.offer_type?.replace(/_/g, " ").charAt(0).toUpperCase() +
                             campaign.offer_type?.replace(/_/g, " ").slice(1) || 'N/A'}
                          </Text>
                        </div>
                        <div>
                          <Text size="sm" color="muted" className="mb-1">Created</Text>
                          <Text weight="semibold" className="text-lg">
                            {new Date(campaign.created_at).toLocaleDateString()}
                          </Text>
                        </div>
                      </Grid>
                      {campaign.status === "completed" && (
                        <Flex gap={6} className="text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <span className="text-green-400">✓</span> Delivered: {campaign.sent_count || 0}
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="text-blue-400">📊</span> Response Rate: 12.4%
                          </span>
                        </Flex>
                      )}
                    </div>
                    <Flex gap={2} className="ml-6">
                      <Button
                        variant="ghost"
                        size="sm"
                        href={`/campaigns/${campaign.id}`}
                      >
                        View Details
                      </Button>
                      {campaign.status === "draft" && (
                        <Button
                          variant="primary"
                          size="sm"
                          href={`/campaigns/${campaign.id}/send`}
                        >
                          Send
                        </Button>
                      )}
                    </Flex>
                  </Flex>
                </Card>
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}