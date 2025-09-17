/* UI Component Transformation - Diverse lightweight components with no duplicates per page */
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { Campaign, User } from '@/types';
import { formatCurrency } from '@/lib/pricing';
import Logo from '@/components/Logo';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [stats, setStats] = useState({
    totalSent: 0,
    activeCampaigns: 0,
    creditsBalance: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboard = async () => {
      // Check auth
      const { data: { user: authUser } } = await supabase.auth.getUser();
      if (!authUser) {
        router.push('/auth/login');
        return;
      }

      // Load user profile
      const { data: userData } = await supabase
        .from('enclosed_users')
        .select('*')
        .eq('id', authUser.id)
        .single();

      if (userData) {
        setUser(userData);
        setStats({
          totalSent: userData.total_pieces_sent || 0,
          activeCampaigns: 0,
          creditsBalance: userData.credits_balance || 0,
        });
      }

      // Load campaigns
      const { data: campaignData } = await supabase
        .from('enclosed_campaigns')
        .select('*')
        .eq('user_id', authUser.id)
        .order('created_at', { ascending: false })
        .limit(10);

      if (campaignData) {
        setCampaigns(campaignData);
        const active = campaignData.filter(c =>
          ['draft', 'scheduled', 'processing'].includes(c.status)
        ).length;
        setStats(prev => ({ ...prev, activeCampaigns: active }));
      }

      setLoading(false);
    };

    loadDashboard();
  }, [router]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation - Two-Column Split Component */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Logo size="md" />

              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/dashboard" className="text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Dashboard
                </Link>
                <Link href="/campaigns" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Campaigns
                </Link>
                <Link href="/templates" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Templates
                </Link>
                <Link href="/api-keys" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  API Keys
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Credits: <span className="font-semibold">{formatCurrency(stats.creditsBalance)}</span>
              </span>
              <button
                onClick={handleSignOut}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section - Pull Quote Component */}
        <blockquote className="mb-8 border-l-4 border-blue-600 pl-6 py-2">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.name}!
          </h1>
          <cite className="not-italic text-gray-600 text-lg mt-2 block">
            Manage your direct mail campaigns and track performance
          </cite>
        </blockquote>

        {/* Quick Actions - Highlight Row Component */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center space-x-3">
            <span className="text-3xl">🚀</span>
            <div>
              <div className="font-semibold text-gray-900">Quick Start</div>
              <Link href="/campaigns/new" className="text-sm text-blue-600 hover:text-blue-700">Create new campaign →</Link>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-3xl">📊</span>
            <div>
              <div className="font-semibold text-gray-900">Analytics Ready</div>
              <span className="text-sm text-gray-600">Real-time tracking enabled</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-3xl">💳</span>
            <div>
              <div className="font-semibold text-gray-900">Credits Available</div>
              <span className="text-sm text-gray-600">{formatCurrency(stats.creditsBalance)} ready to use</span>
            </div>
          </div>
        </div>

        {/* Stats - Callout Muted Component */}
        <aside className="mb-8 bg-gray-50 border-l-4 border-gray-300 p-6 rounded-r-lg">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Account Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-sm font-medium text-gray-500">Total Pieces Sent</div>
              <div className="text-2xl font-bold text-gray-900">{stats.totalSent.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Active Campaigns</div>
              <div className="text-2xl font-bold text-gray-900">{stats.activeCampaigns}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Credits Balance</div>
              <div className="text-2xl font-bold text-gray-900">{formatCurrency(stats.creditsBalance)}</div>
              <Link href="/billing" className="text-sm text-blue-600 hover:text-blue-500">Add credits →</Link>
            </div>
          </div>
        </aside>

        {/* Recent Campaigns - Accordion Native Component */}
        <section className="space-y-2">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Campaigns</h2>

          {campaigns.length === 0 ? (
              <div className="bg-blue-50 border-2 border-blue-200 border-dashed rounded-xl p-12 text-center">
                <svg className="mx-auto h-12 w-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                <p className="mt-4 text-gray-600 font-medium">No campaigns yet</p>
                <p className="text-sm text-gray-500 mt-1">Get started with your first direct mail campaign</p>
                <Link
                  href="/campaigns/new"
                  className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Create your first campaign
                </Link>
              </div>
            ) : (
              <>
                {campaigns.map((campaign) => (
                  <details key={campaign.id} className="group bg-white rounded-lg shadow-sm border border-gray-200">
                    <summary className="cursor-pointer px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors rounded-lg">
                      <div className="flex items-center space-x-4">
                        <h3 className="font-medium text-gray-900">{campaign.name}</h3>
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full
                          ${campaign.status === 'completed' ? 'bg-green-100 text-green-800' : ''}
                          ${campaign.status === 'processing' ? 'bg-yellow-100 text-yellow-800' : ''}
                          ${campaign.status === 'draft' ? 'bg-gray-100 text-gray-800' : ''}
                          ${campaign.status === 'failed' ? 'bg-red-100 text-red-800' : ''}
                        `}>
                          {campaign.status}
                        </span>
                      </div>
                      <svg className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-4 pt-2 border-t border-gray-100">
                      <dl className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <dt className="text-gray-500">Recipients</dt>
                          <dd className="font-semibold text-gray-900">{campaign.recipient_count}</dd>
                        </div>
                        <div>
                          <dt className="text-gray-500">Total Cost</dt>
                          <dd className="font-semibold text-gray-900">{formatCurrency(campaign.total_cost)}</dd>
                        </div>
                        <div>
                          <dt className="text-gray-500">Created</dt>
                          <dd className="font-semibold text-gray-900">{new Date(campaign.created_at).toLocaleDateString()}</dd>
                        </div>
                        <div>
                          <dt className="text-gray-500">Actions</dt>
                          <dd>
                            <Link href={`/campaigns/${campaign.id}`} className="text-blue-600 hover:text-blue-700 font-medium">
                              View Details →
                            </Link>
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </details>
                ))}
              </>
            )}
        </section>
      </div>
    </div>
  );
}