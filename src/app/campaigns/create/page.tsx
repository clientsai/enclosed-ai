"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navigation from "@/components/Navigation";
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
interface Text {
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
  const [leads, setTexts] = useState<Text[]>([]);
  const [selectedTexts, setSelectedTexts] = useState<string[]>([]);
  const [previewLetter, setPreviewLetter] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [customPrompt, setCustomPrompt] = useState("");
  const [mailingCredits, setMailingCredits] = useState(100); // Example credits
  useEffect(() => {
    // Load saved leads from localStorage or API
    loadSavedTexts();
  }, []);
  const loadSavedTexts = () => {
    // Mock data - replace with actual API call
    const mockTexts: Text[] = [
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
    setTexts(mockTexts);
  };
  const handleCampaignChange = (field: keyof Campaign, value: string) => {
    setCampaign((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const handleTextSelection = (leadId: string) => {
    setSelectedTexts((prev) =>
      prev.includes(leadId)
        ? prev.filter((id) => id !== leadId)
        : [...prev, leadId],
    );
  };
  const selectAllTexts = () => {
    setSelectedTexts(leads.map((lead) => lead.id));
  };
  const deselectAllTexts = () => {
    setSelectedTexts([]);
  };
  const generatePreview = async () => {
    setIsGenerating(true);
    try {
      const sampleText =
        leads.find((l) => selectedTexts.includes(l.id)) || leads[0];
      const response = await fetch("/api/letters/preview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lead: sampleText,
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
    if (selectedTexts.length > mailingCredits) {
      alert(
        `Insufficient credits. You have ${mailingCredits} credits but selected ${selectedTexts.length} leads.`,
      );
      return;
    }
    // Process campaign
    alert(
      `Campaign created successfully! ${selectedTexts.length} letters will be sent.`,
    );
    router.push("/campaigns");
  };
  return (
    <div >
      <Navigation variant="app" />
      <div >
        <div >
          <h1 >Create Campaign</h1>
          <p >
            Set up your personalized direct mail campaign
          </p>
        </div>
        {/* Progress Steps */}
        <div >
          <div >
            {["details", "leads", "preview", "confirm"].map((s, index) => (
              <div key={s} >
                <div
                  className={`flex items-center ${step === s ? "text-blue-600" : "text-gray-400"}`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                      step === s
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-300 bg-black"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <span >{s}</span>
                </div>
                {index < 3 && (
                  <div ></div>
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
            >
              <h2 >Campaign Details</h2>
              <div >
                <div>
                  <label >
                    Campaign Name
                  </label>
                  <input
                    type="text"
                    value={campaign.name}
                    onChange={(e) =>
                      handleCampaignChange("name", e.target.value)
                    }
                    placeholder="Q1 Real Estate Campaign"
                  />
                </div>
                <div>
                  <label >
                    Your Company Name
                  </label>
                  <input
                    type="text"
                    value={campaign.companyName}
                    onChange={(e) =>
                      handleCampaignChange("companyName", e.target.value)
                    }
                    placeholder="Enclosed AI"
                  />
                </div>
                <div>
                  <label >
                    Sender Name
                  </label>
                  <input
                    type="text"
                    value={campaign.senderName}
                    onChange={(e) =>
                      handleCampaignChange("senderName", e.target.value)
                    }
                    placeholder="John Smith, CEO"
                  />
                </div>
                <div>
                  <label >
                    Industry
                  </label>
                  <input
                    type="text"
                    value={campaign.industry}
                    onChange={(e) =>
                      handleCampaignChange("industry", e.target.value)
                    }
                    placeholder="Real Estate"
                  />
                </div>
                <div>
                  <label >
                    Offer Name
                  </label>
                  <input
                    type="text"
                    value={campaign.offerName}
                    onChange={(e) =>
                      handleCampaignChange("offerName", e.target.value)
                    }
                    placeholder="Free Home Valuation"
                  />
                </div>
                <div>
                  <label >
                    Text Magnet
                  </label>
                  <input
                    type="text"
                    value={campaign.leadMagnetName}
                    onChange={(e) =>
                      handleCampaignChange("leadMagnetName", e.target.value)
                    }
                    placeholder="Home Seller's Guide"
                  />
                </div>
                <div >
                  <label >
                    Offer Description
                  </label>
                  <textarea
                    value={campaign.offerDescription}
                    onChange={(e) =>
                      handleCampaignChange("offerDescription", e.target.value)
                    }
                    rows={3}
                    placeholder="Describe your offer and its benefits..."
                  />
                </div>
                <div >
                  <label >
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
                    rows={3}
                    placeholder="Describe your business and what makes it unique..."
                  />
                </div>
                <div >
                  <label >
                    Target Audience
                  </label>
                  <input
                    type="text"
                    value={campaign.targetAudience}
                    onChange={(e) =>
                      handleCampaignChange("targetAudience", e.target.value)
                    }
                    placeholder="Homeowners looking to sell in the next 6 months"
                  />
                </div>
              </div>
              <div >
                <button
                  onClick={() => setStep("leads")}
                >
                  Next: Select Texts
                </button>
              </div>
            </motion.div>
          )}
          {/* Text Selection Step */}
          {step === "leads" && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div >
                <h2 >Select Texts</h2>
                <div >
                  <span >
                    {selectedTexts.length} of {leads.length} selected
                  </span>
                  <button
                    onClick={selectAllTexts}
                  >
                    Select All
                  </button>
                  <button
                    onClick={deselectAllTexts}
                  >
                    Deselect All
                  </button>
                  <Link
                    href="/leads/upload"
                  >
                    Import CSV
                  </Link>
                </div>
              </div>
              <div >
                <table >
                  <thead >
                    <tr>
                      <th >
                        <input
                          type="checkbox"
                          checked={selectedTexts.length === leads.length}
                          onChange={() =>
                            selectedTexts.length === leads.length
                              ? deselectAllTexts()
                              : selectAllTexts()
                          }
                        />
                      </th>
                      <th >
                        Name
                      </th>
                      <th >
                        Company
                      </th>
                      <th >
                        Location
                      </th>
                    </tr>
                  </thead>
                  <tbody >
                    {leads.map((lead) => (
                      <tr
                        key={lead.id}
                        className={
                          selectedTexts.includes(lead.id) ? "bg-blue-50" : ""
                        }
                      >
                        <td >
                          <input
                            type="checkbox"
                            checked={selectedTexts.includes(lead.id)}
                            onChange={() => handleTextSelection(lead.id)}
                          />
                        </td>
                        <td >
                          {lead.firstName} {lead.lastName}
                        </td>
                        <td >
                          {lead.company}
                        </td>
                        <td >
                          {lead.city}, {lead.state}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div >
                <button
                  onClick={() => setStep("details")}
                >
                  Back
                </button>
                <button
                  onClick={() => {
                    if (selectedTexts.length === 0) {
                      alert("Please select at least one lead");
                      return;
                    }
                    generatePreview();
                    setStep("preview");
                  }}
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
            >
              <h2 >Preview Letter</h2>
              {isGenerating ? (
                <div >
                  <div ></div>
                  <p >
                    Generating personalized letter...
                  </p>
                </div>
              ) : (
                <>
                  <div >
                    <p >
                      Preview for: {leads[0]?.firstName} {leads[0]?.lastName}
                    </p>
                    <div >
                      <pre >
                        {previewLetter}
                      </pre>
                    </div>
                  </div>
                  <div >
                    <label >
                      Custom Instructions (Optional)
                    </label>
                    <textarea
                      value={customPrompt}
                      onChange={(e) => setCustomPrompt(e.target.value)}
                      rows={3}
                      placeholder="Add any specific instructions for letter generation..."
                    />
                    <button
                      onClick={generatePreview}
                    >
                      Regenerate Preview
                    </button>
                  </div>
                  <div >
                    <button
                      onClick={() => setStep("leads")}
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setStep("confirm")}
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
            >
              <h2 >Review & Confirm</h2>
              <div >
                <h3 >
                  Campaign Summary
                </h3>
                <div >
                  <div>
                    <span >Campaign Name:</span>
                    <span >{campaign.name}</span>
                  </div>
                  <div>
                    <span >Recipients:</span>
                    <span >
                      {selectedTexts.length} leads
                    </span>
                  </div>
                  <div>
                    <span >Offer:</span>
                    <span >
                      {campaign.offerName}
                    </span>
                  </div>
                  <div>
                    <span >Credits Required:</span>
                    <span >
                      {selectedTexts.length * 2}
                    </span>
                  </div>
                </div>
              </div>
              <div >
                <h3 >
                  Mailing Credits
                </h3>
                <p >
                  Available Credits:{" "}
                  <span >{mailingCredits}</span>
                </p>
                <p >
                  After Campaign:{" "}
                  <span >
                    {mailingCredits - selectedTexts.length * 2}
                  </span>
                </p>
                {mailingCredits < selectedTexts.length * 2 && (
                  <div >
                    <p >
                      Insufficient credits! You need{" "}
                      {selectedTexts.length * 2 - mailingCredits} more credits.
                    </p>
                    <Link
                      href="/pricing"
                    >
                      Purchase more credits
                    </Link>
                  </div>
                )}
              </div>
              <div >
                <h3 >
                  Important
                </h3>
                <ul >
                  <li>
                    • Letters will be printed and mailed within 24-48 hours
                  </li>
                  <li>• Delivery typically takes 3-5 business days</li>
                  <li>• You'll receive tracking information via email</li>
                  <li>• This action cannot be undone once confirmed</li>
                </ul>
              </div>
              <div >
                <button
                  onClick={() => setStep("preview")}
                >
                  Back
                </button>
                <button
                  onClick={handleSendCampaign}
                  disabled={mailingCredits < selectedTexts.length * 2}
                >
                  Send Campaign ({selectedTexts.length} Letters)
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}