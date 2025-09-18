/* UI Component Transformation - Diverse lightweight components with no duplicates per page */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { Campaign } from "@/types";
import { formatCurrency } from "@/lib/pricing";
import Logo from "@/components/Logo";

export default function CampaignsPage() {
  const router = useRouter();
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    loadCampaigns();
  }, [filter]);

  const loadCampaigns = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      router.push("/auth/login");
      return;
    }

    let query = supabase
      .from("enclosed_campaigns")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (filter !== "all") {
      query = query.eq("status", filter);
    }

    const { data } = await query;
    if (data) {
      setCampaigns(data);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  const stats = {
    total: campaigns.length,
    active: campaigns.filter((c) =>
      ["draft", "scheduled", "processing"].includes(c.status),
    ).length,
    completed: campaigns.filter((c) => c.status === "completed").length,
    totalSpent: campaigns.reduce(
      (sum, c) => sum + (c.status === "completed" ? c.total_cost : 0),
      0,
    ),
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Logo size="md" />

              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/dashboard"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Dashboard
                </Link>
                <Link
                  href="/campaigns"
                  className="text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Campaigns
                </Link>
                <Link
                  href="/templates"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Templates
                </Link>
                <Link
                  href="/api-keys"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  API Keys
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header with Stats - Stat Row Component */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Campaigns</h1>
            <Link
              href="/campaigns/new"
              className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors shadow-sm"
            >
              Create New Campaign
            </Link>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <div className="text-2xl font-bold text-gray-900">
                {stats.total}
              </div>
              <div className="text-sm text-gray-600">Total Campaigns</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <div className="text-2xl font-bold text-gray-900">
                {stats.active}
              </div>
              <div className="text-sm text-gray-600">Active</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <div className="text-2xl font-bold text-gray-900">
                {stats.completed}
              </div>
              <div className="text-sm text-gray-600">Completed</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <div className="text-2xl font-bold text-gray-900">
                {formatCurrency(stats.totalSpent)}
              </div>
              <div className="text-sm text-gray-600">Total Spent</div>
            </div>
          </div>
        </div>

        {/* Filter Tabs - Info Pill Group Component */}
        <div className="mb-6 flex flex-wrap gap-2">
          {["all", "draft", "processing", "completed", "failed"].map(
            (status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === status
                    ? "bg-gray-900 text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ),
          )}
        </div>

        {/* Campaigns List - Accordion Grid Component */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {campaigns.length === 0 ? (
            <div className="col-span-2 text-center py-12 bg-white rounded-lg shadow-sm">
              <svg
                className="mx-auto h-12 w-12 text-gray-400 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
              <p className="text-gray-600 mb-4">No campaigns found</p>
              <Link
                href="/campaigns/new"
                className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors shadow-sm"
              >
                Create your first campaign
              </Link>
            </div>
          ) : (
            campaigns.map((campaign) => (
              <details
                key={campaign.id}
                className="group bg-white rounded-lg shadow-sm border border-gray-200"
              >
                <summary className="cursor-pointer p-6 hover:bg-gray-50 transition-colors rounded-t-lg">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {campaign.name}
                      </h3>
                      <div className="mt-2 flex items-center space-x-4 text-sm">
                        <span
                          className={`inline-flex px-2 py-1 rounded-full font-medium text-xs
                          ${campaign.status === "completed" ? "bg-gray-900 text-white" : ""}
                          ${campaign.status === "processing" ? "bg-gray-600 text-white" : ""}
                          ${campaign.status === "draft" ? "bg-gray-100 text-gray-800" : ""}
                          ${campaign.status === "failed" ? "bg-gray-200 text-gray-900" : ""}
                        `}
                        >
                          {campaign.status}
                        </span>
                        <span className="text-gray-500">
                          {new Date(campaign.created_at).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <svg
                      className="h-5 w-5 text-gray-400 group-open:rotate-180 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6 border-t border-gray-100">
                  <dl className="mt-4 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Offer Type</dt>
                      <dd className="font-medium text-gray-900">
                        {campaign.offer_type.replace(/_/g, " ")}
                      </dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Recipients</dt>
                      <dd className="font-medium text-gray-900">
                        {campaign.recipient_count}
                      </dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Total Cost</dt>
                      <dd className="font-medium text-gray-900">
                        {formatCurrency(campaign.total_cost)}
                      </dd>
                    </div>
                  </dl>
                  <div className="mt-4 flex space-x-3">
                    <Link
                      href={`/campaigns/${campaign.id}`}
                      className="flex-1 text-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm shadow-sm"
                    >
                      View Details
                    </Link>
                    {campaign.status === "draft" && (
                      <Link
                        href={`/campaigns/${campaign.id}`}
                        className="flex-1 text-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm shadow-sm"
                      >
                        Send Campaign
                      </Link>
                    )}
                  </div>
                </div>
              </details>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
