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
      <div >
        <Navigation variant="app" />
        <div >
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
    <div >
      {/* Navigation */}
      <Container size="xl">
        <div >
          {/* Header */}
          <div >
            <Flex justify="between" align="start" >
              <div>
                <H1 >Campaigns</H1>
                <Text size="lg" color="secondary">
                  Manage and track all your direct mail campaigns
                </Text>
              </div>
              <Button variant="primary" size="lg" href="/campaigns/new">
                <span >+</span>
                Create Campaign
              </Button>
            </Flex>
          </div>
          {/* Stats Cards */}
          <Grid cols={4} gap={6} >
            <Card glass>
              <Text size="sm" color="muted" >Total Campaigns</Text>
              <H2>{stats.total}</H2>
            </Card>
            <Card glass>
              <Text size="sm" color="muted" >Active</Text>
              <H2 >{stats.active}</H2>
            </Card>
            <Card glass>
              <Text size="sm" color="muted" >Completed</Text>
              <H2 >{stats.completed}</H2>
            </Card>
            <Card glass>
              <Text size="sm" color="muted" >Total Spent</Text>
              <H2>{formatCurrency(stats.totalSpent)}</H2>
            </Card>
          </Grid>
          {/* Filters */}
          <Flex justify="between" >
            <Flex gap={2}>
              {["all", "draft", "processing", "scheduled", "completed", "failed"].map((status) => (
                <Button
                  key={status}
                  variant={filter === status ? "primary" : "ghost"}
                  size="sm"
                  onClick={() => setFilter(status)}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </Button>
              ))}
            </Flex>
            <Select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="created_at">Newest First</option>
              <option value="name">Name</option>
              <option value="recipient_count">Recipients</option>
              <option value="total_cost">Cost</option>
            </Select>
          </Flex>
          {/* Campaigns List */}
          {campaigns.length === 0 ? (
            <Card glass >
              <div >📭</div>
              <H3 >No campaigns found</H3>
              <Text color="secondary" >
                {filter !== "all"
                  ? `No ${filter} campaigns yet`
                  : "Create your first campaign to get started"}
              </Text>
              <Button variant="primary" href="/campaigns/new">
                Create Campaign
              </Button>
            </Card>
          ) : (
            <Grid cols={1} gap={4}>
              {campaigns.map((campaign) => (
                <Card key={campaign.id} hover >
                  <Flex justify="between" align="start">
                    <div >
                      <Flex gap={3} align="center" >
                        <H3 >{campaign.name}</H3>
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
                      <Grid cols={4} gap={4} >
                        <div>
                          <Text size="sm" color="muted">Recipients</Text>
                          <Text weight="semibold">{campaign.recipient_count.toLocaleString()}</Text>
                        </div>
                        <div>
                          <Text size="sm" color="muted">Total Cost</Text>
                          <Text weight="semibold">{formatCurrency(campaign.total_cost)}</Text>
                        </div>
                        <div>
                          <Text size="sm" color="muted">Offer Type</Text>
                          <Text weight="semibold">
                            {campaign.offer_type.replace(/_/g, " ").charAt(0).toUpperCase() +
                             campaign.offer_type.replace(/_/g, " ").slice(1)}
                          </Text>
                        </div>
                        <div>
                          <Text size="sm" color="muted">Created</Text>
                          <Text weight="semibold">
                            {new Date(campaign.created_at).toLocaleDateString()}
                          </Text>
                        </div>
                      </Grid>
                      {campaign.status === "completed" && (
                        <Flex gap={6}>
                          <Text size="sm">
                            <span >✓</span> Delivered: {campaign.sent_count || 0}
                          </Text>
                          <Text size="sm">
                            <span >📊</span> Response Rate: 12.4%
                          </Text>
                        </Flex>
                      )}
                    </div>
                    <Flex gap={2}>
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
            </Grid>
          )}
        </div>
      </Container>
    </div>
  );
}