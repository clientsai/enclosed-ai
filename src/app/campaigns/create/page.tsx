"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Campaign {
  name: string;
  offerName: string;
  offerDescription: string;
  businessDescription: string;
  targetAudience: string;
  leadMagnetName: string;
  senderName: string;
  companyName: string;
  industry: string;
}

interface Lead {
  id: string;
  firstName: string;
  lastName: string;
  company: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  selected: boolean;
}

export default function CreateCampaignPage() {
  const router = useRouter();
  const [step, setStep] = useState<"details" | "leads" | "preview" | "confirm">(
    "details",
  );
  const [campaign, setCampaign] = useState<Campaign>({
    name: "",
    offerName: "",
    offerDescription: "",
    businessDescription: "",
    targetAudience: "",
    leadMagnetName: "",
    senderName: "",
    companyName: "",
    industry: "",
  });
  const [leads, setLeads] = useState<Lead[]>([]);
  const [selectedLeads, setSelectedLeads] = useState<string[]>([]);
  const [previewLetter, setPreviewLetter] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [customPrompt, setCustomPrompt] = useState("");
  const [mailingCredits, setMailingCredits] = useState(100); // Example credits

  useEffect(() => {
    // Load saved leads from localStorage or API
    loadSavedLeads();
  }, []);

  const loadSavedLeads = () => {
    // Mock data - replace with actual API call
    const mockLeads: Lead[] = [
      {
        id: "1",
        firstName: "John",
        lastName: "Smith",
        company: "Acme Corp",
        address: "123 Main St",
        city: "San Francisco",
        state: "CA",
        zipCode: "94105",
        selected: false,
      },
      {
        id: "2",
        firstName: "Jane",
        lastName: "Doe",
        company: "Tech Solutions",
        address: "456 Oak Ave",
        city: "San Jose",
        state: "CA",
        zipCode: "95110",
        selected: false,
      },
    ];
    setLeads(mockLeads);
  };

  const handleCampaignChange = (field: keyof Campaign, value: string) => {
    setCampaign((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleLeadSelection = (leadId: string) => {
    setSelectedLeads((prev) =>
      prev.includes(leadId)
        ? prev.filter((id) => id !== leadId)
        : [...prev, leadId],
    );
  };

  const selectAllLeads = () => {
    setSelectedLeads(leads.map((lead) => lead.id));
  };

  const deselectAllLeads = () => {
    setSelectedLeads([]);
  };

  const generatePreview = async () => {
    setIsGenerating(true);
    try {
      const sampleLead =
        leads.find((l) => selectedLeads.includes(l.id)) || leads[0];

      const response = await fetch("/api/letters/preview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lead: sampleLead,
          campaign,
          customPrompt,
        }),
      });

      const data = await response.json();
      setPreviewLetter(data.letter);
    } catch (error) {
      console.error("Error generating preview:", error);
      // Use a mock letter for demo
      setPreviewLetter(generateMockLetter());
    } finally {
      setIsGenerating(false);
    }
  };

  const generateMockLetter = () => {
    const lead = leads[0];
    return `${campaign.companyName}
${new Date().toLocaleDateString()}

Dear ${lead?.firstName || "Business Owner"},

I noticed that ${lead?.company || "your company"} has been making impressive strides in the ${campaign.industry || "market"}. As someone who's been following businesses like yours in ${lead?.city || "your area"}, I wanted to reach out with something that could significantly impact your growth trajectory.

${campaign.offerDescription}

Here's what makes this particularly relevant for ${lead?.company || "companies like yours"}:

The Challenge You're Facing
I understand that businesses in ${campaign.industry || "your industry"} are dealing with increasing competition and the constant pressure to differentiate. You're probably finding that traditional ${campaign.targetAudience || "marketing approaches"} aren't delivering the results they once did.

The Opportunity
${campaign.offerName} was specifically designed for ${campaign.targetAudience || "businesses like yours"}. We've helped over 50 similar companies in ${lead?.state || "your state"} achieve remarkable results, including:

• 40% average increase in qualified leads within 90 days
• 25% reduction in customer acquisition costs
• 3x improvement in conversion rates

Why This Matters Now
The market is shifting rapidly, and the companies that adapt quickly are the ones that will dominate in the coming years. ${lead?.company || "Your business"} has all the fundamentals in place – you just need the right strategy to accelerate your growth.

Your Next Step
I'd like to offer you a complimentary ${campaign.leadMagnetName || "consultation"} where we can:
1. Analyze your current situation
2. Identify your biggest growth opportunities
3. Create a customized roadmap for your success

This offer is limited to 10 businesses in ${lead?.city || "your area"} this month, and we're already 70% booked.

To claim your spot, simply call us at 1-800-XXX-XXXX or visit www.example.com/meeting

Looking forward to helping ${lead?.company || "your business"} reach its full potential.

Best regards,

${campaign.senderName}
${campaign.companyName}

P.S. I'll also include our exclusive guide "${campaign.leadMagnetName || "Business Growth Secrets"}" absolutely free when you schedule your consultation. This alone has helped businesses increase their revenue by an average of 15%.`;
  };

  const handleSendCampaign = async () => {
    if (selectedLeads.length > mailingCredits) {
      alert(
        `Insufficient credits. You have ${mailingCredits} credits but selected ${selectedLeads.length} leads.`,
      );
      return;
    }

    // Process campaign
    alert(
      `Campaign created successfully! ${selectedLeads.length} letters will be sent.`,
    );
    router.push("/campaigns");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Create Campaign</h1>
          <p className="text-gray-600 mt-2">
            Set up your personalized direct mail campaign
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between max-w-4xl">
            {["details", "leads", "preview", "confirm"].map((s, index) => (
              <div key={s} className="flex items-center">
                <div
                  className={`flex items-center ${step === s ? "text-blue-600" : "text-gray-400"}`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                      step === s
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-300 bg-white"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <span className="ml-2 font-medium capitalize">{s}</span>
                </div>
                {index < 3 && (
                  <div className="w-20 h-0.5 bg-gray-300 mx-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {/* Campaign Details Step */}
          {step === "details" && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-lg shadow-sm p-8"
            >
              <h2 className="text-xl font-semibold mb-6">Campaign Details</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Campaign Name
                  </label>
                  <input
                    type="text"
                    value={campaign.name}
                    onChange={(e) =>
                      handleCampaignChange("name", e.target.value)
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Q1 Real Estate Campaign"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Company Name
                  </label>
                  <input
                    type="text"
                    value={campaign.companyName}
                    onChange={(e) =>
                      handleCampaignChange("companyName", e.target.value)
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enclosed AI"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sender Name
                  </label>
                  <input
                    type="text"
                    value={campaign.senderName}
                    onChange={(e) =>
                      handleCampaignChange("senderName", e.target.value)
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John Smith, CEO"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Industry
                  </label>
                  <input
                    type="text"
                    value={campaign.industry}
                    onChange={(e) =>
                      handleCampaignChange("industry", e.target.value)
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Real Estate"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Offer Name
                  </label>
                  <input
                    type="text"
                    value={campaign.offerName}
                    onChange={(e) =>
                      handleCampaignChange("offerName", e.target.value)
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Free Home Valuation"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Lead Magnet
                  </label>
                  <input
                    type="text"
                    value={campaign.leadMagnetName}
                    onChange={(e) =>
                      handleCampaignChange("leadMagnetName", e.target.value)
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Home Seller's Guide"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Offer Description
                  </label>
                  <textarea
                    value={campaign.offerDescription}
                    onChange={(e) =>
                      handleCampaignChange("offerDescription", e.target.value)
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
                    placeholder="Describe your offer and its benefits..."
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Description
                  </label>
                  <textarea
                    value={campaign.businessDescription}
                    onChange={(e) =>
                      handleCampaignChange(
                        "businessDescription",
                        e.target.value,
                      )
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
                    placeholder="Describe your business and what makes it unique..."
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Target Audience
                  </label>
                  <input
                    type="text"
                    value={campaign.targetAudience}
                    onChange={(e) =>
                      handleCampaignChange("targetAudience", e.target.value)
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Homeowners looking to sell in the next 6 months"
                  />
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setStep("leads")}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Next: Select Leads
                </button>
              </div>
            </motion.div>
          )}

          {/* Lead Selection Step */}
          {step === "leads" && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-lg shadow-sm p-8"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Select Leads</h2>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">
                    {selectedLeads.length} of {leads.length} selected
                  </span>
                  <button
                    onClick={selectAllLeads}
                    className="text-sm text-blue-600 hover:text-blue-700"
                  >
                    Select All
                  </button>
                  <button
                    onClick={deselectAllLeads}
                    className="text-sm text-blue-600 hover:text-blue-700"
                  >
                    Deselect All
                  </button>
                  <Link
                    href="/leads/upload"
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                  >
                    Import CSV
                  </Link>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <input
                          type="checkbox"
                          checked={selectedLeads.length === leads.length}
                          onChange={() =>
                            selectedLeads.length === leads.length
                              ? deselectAllLeads()
                              : selectAllLeads()
                          }
                          className="rounded border-gray-300"
                        />
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Company
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Location
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {leads.map((lead) => (
                      <tr
                        key={lead.id}
                        className={
                          selectedLeads.includes(lead.id) ? "bg-blue-50" : ""
                        }
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input
                            type="checkbox"
                            checked={selectedLeads.includes(lead.id)}
                            onChange={() => handleLeadSelection(lead.id)}
                            className="rounded border-gray-300"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {lead.firstName} {lead.lastName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {lead.company}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {lead.city}, {lead.state}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 flex justify-between">
                <button
                  onClick={() => setStep("details")}
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => {
                    if (selectedLeads.length === 0) {
                      alert("Please select at least one lead");
                      return;
                    }
                    generatePreview();
                    setStep("preview");
                  }}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Generate Preview
                </button>
              </div>
            </motion.div>
          )}

          {/* Preview Step */}
          {step === "preview" && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-lg shadow-sm p-8"
            >
              <h2 className="text-xl font-semibold mb-6">Preview Letter</h2>

              {isGenerating ? (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">
                    Generating personalized letter...
                  </p>
                </div>
              ) : (
                <>
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <p className="text-sm text-gray-600 mb-2">
                      Preview for: {leads[0]?.firstName} {leads[0]?.lastName}
                    </p>
                    <div className="bg-white rounded border border-gray-200 p-8 font-serif">
                      <pre className="whitespace-pre-wrap text-sm leading-relaxed">
                        {previewLetter}
                      </pre>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Custom Instructions (Optional)
                    </label>
                    <textarea
                      value={customPrompt}
                      onChange={(e) => setCustomPrompt(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={3}
                      placeholder="Add any specific instructions for letter generation..."
                    />
                    <button
                      onClick={generatePreview}
                      className="mt-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm"
                    >
                      Regenerate Preview
                    </button>
                  </div>

                  <div className="mt-8 flex justify-between">
                    <button
                      onClick={() => setStep("leads")}
                      className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setStep("confirm")}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Review & Send
                    </button>
                  </div>
                </>
              )}
            </motion.div>
          )}

          {/* Confirm Step */}
          {step === "confirm" && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-lg shadow-sm p-8"
            >
              <h2 className="text-xl font-semibold mb-6">Review & Confirm</h2>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-blue-900 mb-4">
                  Campaign Summary
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Campaign Name:</span>
                    <span className="ml-2 font-medium">{campaign.name}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Recipients:</span>
                    <span className="ml-2 font-medium">
                      {selectedLeads.length} leads
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Offer:</span>
                    <span className="ml-2 font-medium">
                      {campaign.offerName}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Credits Required:</span>
                    <span className="ml-2 font-medium">
                      {selectedLeads.length * 2}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-green-900 mb-2">
                  Mailing Credits
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Available Credits:{" "}
                  <span className="font-bold">{mailingCredits}</span>
                </p>
                <p className="text-sm text-gray-600">
                  After Campaign:{" "}
                  <span className="font-bold">
                    {mailingCredits - selectedLeads.length * 2}
                  </span>
                </p>
                {mailingCredits < selectedLeads.length * 2 && (
                  <div className="mt-4 p-3 bg-red-100 border border-red-200 rounded">
                    <p className="text-sm text-red-800">
                      Insufficient credits! You need{" "}
                      {selectedLeads.length * 2 - mailingCredits} more credits.
                    </p>
                    <Link
                      href="/pricing"
                      className="text-sm text-red-900 underline"
                    >
                      Purchase more credits
                    </Link>
                  </div>
                )}
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-yellow-900 mb-2">
                  Important
                </h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>
                    • Letters will be printed and mailed within 24-48 hours
                  </li>
                  <li>• Delivery typically takes 3-5 business days</li>
                  <li>• You'll receive tracking information via email</li>
                  <li>• This action cannot be undone once confirmed</li>
                </ul>
              </div>

              <div className="mt-8 flex justify-between">
                <button
                  onClick={() => setStep("preview")}
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleSendCampaign}
                  disabled={mailingCredits < selectedLeads.length * 2}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send Campaign ({selectedLeads.length} Letters)
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
