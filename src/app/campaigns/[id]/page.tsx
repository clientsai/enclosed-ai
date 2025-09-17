/* UI Component Transformation - Diverse lightweight components with no duplicates per page */
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { Campaign, Recipient } from '@/types';
import { formatCurrency } from '@/lib/pricing';
import { generateSalesLetter } from '@/lib/letter-generator';
import Logo from '@/components/Logo';

export default function CampaignDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [recipients, setRecipients] = useState<Recipient[]>([]);
  const [sampleLetter, setSampleLetter] = useState('');
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [selectedTab, setSelectedTab] = useState('overview');

  useEffect(() => {
    const loadCampaign = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/auth/login');
        return;
      }

      // Load campaign
      const { data: campaignData, error: campaignError } = await supabase
        .from('enclosed_campaigns')
        .select('*')
        .eq('id', params.id)
        .single();

      if (campaignError || !campaignData) {
        setError('Campaign not found');
        setLoading(false);
        return;
      }

      setCampaign(campaignData);

      // Load recipients
      const { data: recipientData } = await supabase
        .from('enclosed_recipients')
        .select('*')
        .eq('campaign_id', params.id)
        .limit(100);

      if (recipientData) {
        setRecipients(recipientData);

        // Generate sample letter
        if (recipientData.length > 0) {
          const sample = await generateSalesLetter(
            recipientData[0],
            campaignData.offer_type
          );
          setSampleLetter(sample);
        }
      }

      setLoading(false);
    };

    loadCampaign();
  }, [params.id, router]);

  const handleSendCampaign = async () => {
    if (!campaign) return;

    if (!confirm(`Are you sure you want to send this campaign? This will cost ${formatCurrency(campaign.total_cost)}.`)) {
      return;
    }

    setSending(true);
    setError('');

    try {
      // Check user balance
      const { data: { user } } = await supabase.auth.getUser();
      const { data: userData } = await supabase
        .from('enclosed_users')
        .select('credits_balance')
        .eq('id', user?.id)
        .single();

      if (!userData || userData.credits_balance < campaign.total_cost) {
        throw new Error('Insufficient credits. Please add more credits to send this campaign.');
      }

      // Update campaign status
      const { error: updateError } = await supabase
        .from('enclosed_campaigns')
        .update({ status: 'processing' })
        .eq('id', campaign.id);

      if (updateError) throw updateError;

      // In a real app, this would trigger a background job
      // For now, we'll just simulate sending
      setTimeout(async () => {
        await supabase
          .from('enclosed_campaigns')
          .update({
            status: 'completed',
            sent_date: new Date().toISOString(),
          })
          .eq('id', campaign.id);

        // Update user balance and stats
        await supabase
          .from('enclosed_users')
          .update({
            credits_balance: userData.credits_balance - campaign.total_cost,
            total_pieces_sent: supabase.raw('total_pieces_sent + ?', [campaign.recipient_count]),
          })
          .eq('id', user?.id);

        // Reload campaign
        const { data: updatedCampaign } = await supabase
          .from('enclosed_campaigns')
          .select('*')
          .eq('id', campaign.id)
          .single();

        if (updatedCampaign) {
          setCampaign(updatedCampaign);
        }

        setSending(false);
        alert('Campaign sent successfully!');
      }, 3000);
    } catch (err: any) {
      setError(err.message);
      setSending(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!campaign) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Campaign not found</p>
          <Link href="/dashboard" className="text-blue-600 hover:text-blue-700">
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/dashboard" className="flex items-center space-x-2">
                <Logo size="md" />
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 transition-colors">
                ← Back to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Campaign Header - Key Bullet Summary Component */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">{campaign.name}</h1>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span className="font-medium">Status:</span>
                  <span className={`ml-2 inline-flex px-3 py-1 text-sm font-semibold rounded-full
                    ${campaign.status === 'completed' ? 'bg-green-100 text-green-800' : ''}
                    ${campaign.status === 'processing' ? 'bg-yellow-100 text-yellow-800' : ''}
                    ${campaign.status === 'draft' ? 'bg-gray-100 text-gray-800' : ''}
                    ${campaign.status === 'failed' ? 'bg-red-100 text-red-800' : ''}
                  `}>
                    {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span className="font-medium">Created:</span>
                  <span className="ml-2 text-gray-600">{new Date(campaign.created_at).toLocaleDateString()}</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span className="font-medium">Total Cost:</span>
                  <span className="ml-2 text-blue-600 font-semibold">{formatCurrency(campaign.total_cost)}</span>
                </li>
              </ul>
            </div>

            {campaign.status === 'draft' && (
              <button
                onClick={handleSendCampaign}
                disabled={sending}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
              >
                {sending ? 'Sending...' : 'Send Campaign'}
              </button>
            )}
          </div>

          {error && (
            <div className="mt-4 bg-red-50 text-red-600 px-4 py-3 rounded-lg border border-red-200">
              {error}
            </div>
          )}
        </div>

        {/* Mini Tabs CSS-only Component */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="p-6">
            <style jsx>{`
              input[type="radio"] { display: none; }
              input#tab-overview:checked ~ .tab-content .content-overview { display: block; }
              input#tab-recipients:checked ~ .tab-content .content-recipients { display: block; }
              input#tab-preview:checked ~ .tab-content .content-preview { display: block; }
              input#tab-overview:checked ~ .tab-labels label[for="tab-overview"],
              input#tab-recipients:checked ~ .tab-labels label[for="tab-recipients"],
              input#tab-preview:checked ~ .tab-labels label[for="tab-preview"] {
                border-bottom: 2px solid #3B82F6;
                color: #3B82F6;
              }
              .tab-content > div { display: none; }
            `}</style>

            <input type="radio" id="tab-overview" name="tabs" defaultChecked />
            <input type="radio" id="tab-recipients" name="tabs" />
            <input type="radio" id="tab-preview" name="tabs" />

            <div className="tab-labels flex border-b mb-6">
              <label htmlFor="tab-overview" className="px-4 py-3 cursor-pointer text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Overview
              </label>
              <label htmlFor="tab-recipients" className="px-4 py-3 cursor-pointer text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Recipients ({campaign.recipient_count})
              </label>
              <label htmlFor="tab-preview" className="px-4 py-3 cursor-pointer text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Letter Preview
              </label>
            </div>

            <div className="tab-content">
              {/* Overview Tab - Metric Callouts Component */}
              <div className="content-overview">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Campaign Details</h3>
                    <dl className="space-y-3">
                      <div className="flex justify-between">
                        <dt className="text-sm text-gray-600">Offer Type</dt>
                        <dd className="font-medium text-gray-900">{campaign.offer_type.replace(/_/g, ' ')}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-sm text-gray-600">Mail Type</dt>
                        <dd className="font-medium text-gray-900">{campaign.mail_type.replace(/_/g, ' ')}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-sm text-gray-600">Recipients</dt>
                        <dd className="font-medium text-gray-900">{campaign.recipient_count}</dd>
                      </div>
                      {campaign.sent_date && (
                        <div className="flex justify-between">
                          <dt className="text-sm text-gray-600">Sent Date</dt>
                          <dd className="font-medium text-gray-900">
                            {new Date(campaign.sent_date).toLocaleString()}
                          </dd>
                        </div>
                      )}
                    </dl>
                  </div>

                  <div className="border-2 border-blue-200 rounded-lg p-6 bg-blue-50">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Cost Metrics</h3>
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600">{formatCurrency(campaign.cost_per_piece)}</div>
                        <div className="text-sm text-gray-600">Per Piece</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600">{campaign.recipient_count}</div>
                        <div className="text-sm text-gray-600">Total Recipients</div>
                      </div>
                      <div className="border-t-2 border-blue-200 pt-4 text-center">
                        <div className="text-4xl font-bold text-blue-700">{formatCurrency(campaign.total_cost)}</div>
                        <div className="text-sm text-gray-600">Total Campaign Cost</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recipients Tab - Comparison Table Compact Component */}
              <div className="content-recipients">
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="bg-gray-100 border-b-2 border-gray-200">
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Recipient
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Address
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Location
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {recipients.slice(0, 20).map((recipient, index) => (
                        <tr key={recipient.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-4 py-3 text-sm">
                            <div className="font-medium text-gray-900">{recipient.name}</div>
                            {recipient.company && (
                              <div className="text-xs text-gray-500">{recipient.company}</div>
                            )}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-600">
                            <div>{recipient.address_line1}</div>
                            {recipient.address_line2 && <div className="text-xs">{recipient.address_line2}</div>}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-600">
                            {recipient.city}, {recipient.state} {recipient.zip_code}
                          </td>
                          <td className="px-4 py-3">
                            <span className="inline-flex px-2 py-1 text-xs font-medium rounded bg-gray-200 text-gray-700">
                              {recipient.delivery_status || 'Pending'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {recipients.length > 20 && (
                  <div className="mt-4 bg-blue-50 border-l-4 border-blue-400 p-4">
                    <p className="text-sm text-blue-800">
                      Showing first 20 of {recipients.length} recipients. Full list available for export.
                    </p>
                  </div>
                )}
              </div>

              {/* Preview Tab - Code Snippet Box Component */}
              <div className="content-preview">
                <div className="bg-gray-900 rounded-lg p-1">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-800 rounded-t-lg">
                    <span className="text-gray-400 text-sm font-medium">Letter Preview</span>
                    <button
                      onClick={() => navigator.clipboard.writeText(sampleLetter)}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      Copy
                    </button>
                  </div>
                  <div className="p-6 overflow-x-auto">
                    <pre className="text-gray-300 text-sm font-mono leading-relaxed">
                      {sampleLetter || 'Loading preview...'}
                    </pre>
                  </div>
                </div>
                <div className="mt-4 bg-amber-50 border-l-4 border-amber-400 p-4">
                  <p className="text-sm text-amber-800">
                    <strong>Note:</strong> This is a sample preview. Each recipient will receive a personalized version with their specific information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions - Inline Q&A List Component */}
        {campaign.status === 'draft' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Before You Send</h3>
            <div className="space-y-3">
              <div>
                <span className="font-medium text-gray-900">Q: Have you reviewed all recipient addresses?</span>
                <p className="text-sm text-gray-600 mt-1">Ensure all addresses are valid to maximize delivery rates.</p>
              </div>
              <div>
                <span className="font-medium text-gray-900">Q: Do you have sufficient credits?</span>
                <p className="text-sm text-gray-600 mt-1">This campaign requires {formatCurrency(campaign.total_cost)} in credits.</p>
              </div>
              <div>
                <span className="font-medium text-gray-900">Q: Is your offer message clear?</span>
                <p className="text-sm text-gray-600 mt-1">Review the letter preview to ensure your message is compelling.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}