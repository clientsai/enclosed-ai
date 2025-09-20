/* UI Component Transformation - Diverse lightweight components with no duplicates per page */
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { Campaign, Recipient } from "@/types";
import { formatCurrency } from "@/lib/pricing";
import { generateSalesLetter } from "@/lib/letter-generator";
import Logo from "@/components/Logo";
import Navigation from "@/components/Navigation";
export default function CampaignDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [recipients, setRecipients] = useState<Recipient[]>([]);
  const [sampleLetter, setSampleLetter] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [selectedTab, setSelectedTab] = useState("overview");
  useEffect(() => {
    const loadCampaign = async () => {
      const { id } = await params;
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        router.push("/auth/login");
        return;
      }
      // Load campaign
      const { data: campaignData, error: campaignError } = await supabase
        .from("enclosed_campaigns")
        .select("*")
        .eq("id", id)
        .single();
      if (campaignError || !campaignData) {
        setError("Campaign not found");
        setLoading(false);
        return;
      }
      setCampaign(campaignData);
      // Load recipients
      const { data: recipientData } = await supabase
        .from("enclosed_recipients")
        .select("*")
        .eq("campaign_id", id)
        .limit(100);
      if (recipientData) {
        setRecipients(recipientData);
        // Generate sample letter
        if (recipientData.length > 0) {
          const sample = await generateSalesLetter(
            recipientData[0],
            campaignData.offer_type,
          );
          setSampleLetter(sample);
        }
      }
      setLoading(false);
    };
    loadCampaign();
  }, [params, router]);
  const handleSendCampaign = async () => {
    if (!campaign) return;
    if (
      !confirm(
        `Are you sure you want to send this campaign? This will cost ${formatCurrency(campaign.total_cost)}.`,
      )
    ) {
      return;
    }
    setSending(true);
    setError("");
    try {
      // Check user balance
      const {
        data: { user },
      } = await supabase.auth.getUser();
      const { data: userData } = await supabase
        .from("enclosed_users")
        .select("credits_balance")
        .eq("id", user?.id)
        .single();
      if (!userData || userData.credits_balance < campaign.total_cost) {
        throw new Error(
          "Insufficient credits. Please add more credits to send this campaign.",
        );
      }
      // Update campaign status
      const { error: updateError } = await supabase
        .from("enclosed_campaigns")
        .update({ status: "processing" })
        .eq("id", campaign.id);
      if (updateError) throw updateError;
      // In a real app, this would trigger a background job
      // For now, we'll just simulate sending
      setTimeout(async () => {
        await supabase
          .from("enclosed_campaigns")
          .update({
            status: "completed",
            sent_date: new Date().toISOString(),
          })
          .eq("id", campaign.id);
        // Update user balance and stats
        await supabase
          .from("enclosed_users")
          .update({
            credits_balance: userData.credits_balance - campaign.total_cost,
            total_pieces_sent: supabase.raw("total_pieces_sent + ?", [
              campaign.recipient_count,
            ]),
          })
          .eq("id", user?.id);
        // Reload campaign
        const { data: updatedCampaign } = await supabase
          .from("enclosed_campaigns")
          .select("*")
          .eq("id", campaign.id)
          .single();
        if (updatedCampaign) {
          setCampaign(updatedCampaign);
        }
        setSending(false);
        alert("Campaign sent successfully!");
      }, 3000);
    } catch (err: any) {
      setError(err.message);
      setSending(false);
    }
  };
  if (loading) {
    return (
      <div >
      <Navigation variant="app" />
      <div ></div>
      </div>
    );
  }
  if (!campaign) {
    return (
      <div >
        <div >
          <p >Campaign not found</p>
          <Link href="/dashboard" >
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div >
      {/* Navigation */}
      <div >
        {/* Campaign Header - Key Bullet Summary Component */}
        <div >
          <div >
            <div>
              <h1 >
                {campaign.name}
              </h1>
              <ul >
                <li >
                  <span >•</span>
                  <span >Status:</span>
                  <span
                    className={`ml-2 inline-flex px-3 py-1 text-sm font-semibold rounded-full
                    ${campaign.status === "completed" ? "bg-green-100 text-green-800" : ""}
                    ${campaign.status === "processing" ? "bg-yellow-100 text-yellow-800" : ""}
                    ${campaign.status === "draft" ? "bg-gray-100 text-white" : ""}
                    ${campaign.status === "failed" ? "bg-red-100 text-red-800" : ""}
                  `}
                  >
                    {campaign.status.charAt(0).toUpperCase() +
                      campaign.status.slice(1)}
                  </span>
                </li>
                <li >
                  <span >•</span>
                  <span >Created:</span>
                  <span >
                    {new Date(campaign.created_at).toLocaleDateString()}
                  </span>
                </li>
                <li >
                  <span >•</span>
                  <span >Total Cost:</span>
                  <span >
                    {formatCurrency(campaign.total_cost)}
                  </span>
                </li>
              </ul>
            </div>
            {campaign.status === "draft" && (
              <button
                onClick={handleSendCampaign}
                disabled={sending}
              >
                {sending ? "Sending..." : "Send Campaign"}
              </button>
            )}
          </div>
          {error && (
            <div >
              {error}
            </div>
          )}
        </div>
        {/* Mini Tabs CSS-only Component */}
        <div >
          <div >
            <input type="radio" id="tab-overview" name="tabs" defaultChecked />
            <input type="radio" id="tab-recipients" name="tabs" />
            <input type="radio" id="tab-preview" name="tabs" />
            <div >
              <label
                htmlFor="tab-overview"
              >
                Overview
              </label>
              <label
                htmlFor="tab-recipients"
              >
                Recipients ({campaign.recipient_count})
              </label>
              <label
                htmlFor="tab-preview"
              >
                Letter Preview
              </label>
            </div>
            <div >
              {/* Overview Tab - Metric Callouts Component */}
              <div >
                <div >
                  <div >
                    <h3 >
                      Campaign Details
                    </h3>
                    <dl >
                      <div >
                        <dt >Offer Type</dt>
                        <dd >
                          {campaign.offer_type.replace(/_/g, " ")}
                        </dd>
                      </div>
                      <div >
                        <dt >Mail Type</dt>
                        <dd >
                          {campaign.mail_type.replace(/_/g, " ")}
                        </dd>
                      </div>
                      <div >
                        <dt >Recipients</dt>
                        <dd >
                          {campaign.recipient_count}
                        </dd>
                      </div>
                      {campaign.sent_date && (
                        <div >
                          <dt >Sent Date</dt>
                          <dd >
                            {new Date(campaign.sent_date).toLocaleString()}
                          </dd>
                        </div>
                      )}
                    </dl>
                  </div>
                  <div >
                    <h3 >
                      Cost Metrics
                    </h3>
                    <div >
                      <div >
                        <div >
                          {formatCurrency(campaign.cost_per_piece)}
                        </div>
                        <div >Per Piece</div>
                      </div>
                      <div >
                        <div >
                          {campaign.recipient_count}
                        </div>
                        <div >
                          Total Recipients
                        </div>
                      </div>
                      <div >
                        <div >
                          {formatCurrency(campaign.total_cost)}
                        </div>
                        <div >
                          Total Campaign Cost
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Recipients Tab - Comparison Table Compact Component */}
              <div >
                <div >
                  <table >
                    <thead>
                      <tr >
                        <th >
                          Recipient
                        </th>
                        <th >
                          Address
                        </th>
                        <th >
                          Location
                        </th>
                        <th >
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {recipients.slice(0, 20).map((recipient, index) => (
                        <tr
                          key={recipient.id}
                          className={
                            index % 2 === 0 ? "bg-black" : "bg-black"
                          }
                        >
                          <td >
                            <div >
                              {recipient.name}
                            </div>
                            {recipient.company && (
                              <div >
                                {recipient.company}
                              </div>
                            )}
                          </td>
                          <td >
                            <div>{recipient.address_line1}</div>
                            {recipient.address_line2 && (
                              <div >
                                {recipient.address_line2}
                              </div>
                            )}
                          </td>
                          <td >
                            {recipient.city}, {recipient.state}{" "}
                            {recipient.zip_code}
                          </td>
                          <td >
                            <span >
                              {recipient.delivery_status || "Pending"}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {recipients.length > 20 && (
                  <div >
                    <p >
                      Showing first 20 of {recipients.length} recipients. Full
                      list available for export.
                    </p>
                  </div>
                )}
              </div>
              {/* Preview Tab - Code Snippet Box Component */}
              <div >
                <div >
                  <div >
                    <span >
                      Letter Preview
                    </span>
                    <button
                      onClick={() =>
                        navigator.clipboard.writeText(sampleLetter)
                      }
                    >
                      Copy
                    </button>
                  </div>
                  <div >
                    <pre >
                      {sampleLetter || "Loading preview..."}
                    </pre>
                  </div>
                </div>
                <div >
                  <p >
                    <strong>Note:</strong> This is a sample preview. Each
                    recipient will receive a personalized version with their
                    specific information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Actions - Inline Q&A List Component */}
        {campaign.status === "draft" && (
          <div >
            <h3 >
              Before You Send
            </h3>
            <div >
              <div>
                <span >
                  Q: Have you reviewed all recipient addresses?
                </span>
                <p >
                  Ensure all addresses are valid to maximize delivery rates.
                </p>
              </div>
              <div>
                <span >
                  Q: Do you have sufficient credits?
                </span>
                <p >
                  This campaign requires {formatCurrency(campaign.total_cost)}{" "}
                  in credits.
                </p>
              </div>
              <div>
                <span >
                  Q: Is your offer message clear?
                </span>
                <p >
                  Review the letter preview to ensure your message is
                  compelling.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}