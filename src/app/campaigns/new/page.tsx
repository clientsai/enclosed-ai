/* Simplified Campaign Creation - Template-based with CSV Upload */
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { useDropzone } from "react-dropzone";
import Logo from "@/components/Logo";
import { letterTemplates, applyVariables } from "@/lib/letter-templates";
import Papa from "papaparse";
import Navigation from "@/components/Navigation";
export default function NewCampaignPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // Campaign data
  const [campaignData, setCampaignData] = useState({
    name: "",
    description: "",
    templateId: "",
    csvFile: null as File | null,
    csvData: [] as any[],
    csvHeaders: [] as string[],
    columnMapping: {} as Record<string, string>,
    sampleLetter: "",
    letterCount: 0,
  });
  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { user: authUser },
      } = await supabase.auth.getUser();
      if (!authUser) {
        router.push("/auth/login");
        return;
      }
      const { data: userData } = await supabase
        .from("enclosed_users")
        .select("*")
        .eq("id", authUser.id)
        .single();
      setUser(userData);
    };
    checkAuth();
  }, [router]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "text/csv": [".csv"],
    },
    onDrop: async (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        const reader = new FileReader();
        reader.onload = (e) => {
          const csv = e.target?.result as string;
          Papa.parse(csv, {
            header: true,
            complete: (results) => {
              const headers = Object.keys(results.data[0] || {});
              // Auto-map common fields
              const autoMapping: Record<string, string> = {};
              const template = letterTemplates.find(t => t.id === campaignData.templateId);
              headers.forEach((header) => {
                const lower = header.toLowerCase();
                if (lower.includes('first') && lower.includes('name')) {
                  autoMapping['RECIPIENT_NAME'] = header;
                } else if (lower === 'name' || lower === 'full_name' || lower === 'fullname') {
                  autoMapping['RECIPIENT_NAME'] = header;
                } else if (lower.includes('company')) {
                  autoMapping['COMPANY_NAME'] = header;
                } else if (lower.includes('email')) {
                  autoMapping['SENDER_EMAIL'] = header;
                } else if (lower.includes('address') && !lower.includes('2')) {
                  autoMapping['ADDRESS'] = header;
                } else if (lower.includes('city')) {
                  autoMapping['CITY'] = header;
                } else if (lower.includes('state')) {
                  autoMapping['STATE'] = header;
                } else if (lower.includes('zip') || lower.includes('postal')) {
                  autoMapping['ZIP_CODE'] = header;
                } else if (lower.includes('industry')) {
                  autoMapping['INDUSTRY'] = header;
                } else if (lower.includes('phone')) {
                  autoMapping['PHONE'] = header;
                }
              });
              setCampaignData((prev) => ({
                ...prev,
                csvFile: file,
                csvData: results.data,
                csvHeaders: headers,
                columnMapping: autoMapping,
                letterCount: results.data.filter(row => Object.values(row).some(v => v)).length,
              }));
            },
            error: (err) => {
              setError("Failed to parse CSV: " + err.message);
            },
          });
        };
        reader.readAsText(file);
      }
    },
  });
  const selectedTemplate = letterTemplates.find(t => t.id === campaignData.templateId);
  const handleStep1Submit = () => {
    if (!campaignData.name || !campaignData.templateId) {
      setError("Please fill in all required fields");
      return;
    }
    setError("");
    setStep(2);
  };
  const handleStep2Submit = () => {
    if (!campaignData.csvFile) {
      setError("Please upload a CSV file");
      return;
    }
    setError("");
    setStep(3);
  };
  const handleStep3Submit = () => {
    // Check required address fields are mapped
    const requiredFields = ['RECIPIENT_NAME', 'ADDRESS', 'CITY', 'STATE', 'ZIP_CODE'];
    const missingRequired = requiredFields.filter(field => !campaignData.columnMapping[field]);
    if (missingRequired.length > 0) {
      setError(`Please map required fields: ${missingRequired.join(', ')}`);
      return;
    }
    // Generate sample with first row of data
    if (campaignData.csvData.length > 0 && selectedTemplate) {
      const sampleRow = campaignData.csvData[0];
      const variables: Record<string, string> = {};
      Object.entries(campaignData.columnMapping).forEach(([variable, column]) => {
        variables[variable] = sampleRow[column] || '';
      });
      // Add default values for unmapped variables
      selectedTemplate.variables.forEach(v => {
        if (!variables[v]) {
          variables[v] = `[${v}]`;
        }
      });
      const sampleLetter = applyVariables(selectedTemplate.content, variables);
      setCampaignData(prev => ({ ...prev, sampleLetter }));
    }
    setError("");
    setStep(4);
  };
  const handleCreateCampaign = async () => {
    setLoading(true);
    setError("");
    try {
      // Calculate cost (assuming $2 per letter for simplicity)
      const totalCost = campaignData.letterCount * 2;
      // Save campaign to database
      const { data: campaign, error: campaignError } = await supabase
        .from('enclosed_campaigns')
        .insert({
          user_id: user.id,
          name: campaignData.name,
          description: campaignData.description,
          template_id: campaignData.templateId,
          status: 'draft',
          letter_count: campaignData.letterCount,
          total_cost: totalCost,
        })
        .select()
        .single();
      if (campaignError) throw campaignError;
      // Import leads to database
      const leadsToImport = campaignData.csvData
        .filter(row => Object.values(row).some(v => v))
        .map((row) => {
          const mappedData: any = {
            user_id: user.id,
            campaign_id: campaign.id,
          };
          // Map CSV columns to lead fields
          Object.entries(campaignData.columnMapping).forEach(([variable, column]) => {
            const value = row[column];
            // Map to database fields
            switch(variable) {
              case 'RECIPIENT_NAME':
                const names = value?.split(' ') || [];
                mappedData.first_name = names[0] || '';
                mappedData.last_name = names.slice(1).join(' ') || '';
                break;
              case 'COMPANY_NAME':
                mappedData.company = value || '';
                break;
              case 'ADDRESS':
                mappedData.address = value || '';
                break;
              case 'CITY':
                mappedData.city = value || '';
                break;
              case 'STATE':
                mappedData.state = value || '';
                break;
              case 'ZIP_CODE':
                mappedData.zip_code = value || '';
                break;
              case 'PHONE':
                mappedData.phone = value || '';
                break;
              case 'INDUSTRY':
                mappedData.industry = value || '';
                break;
              case 'SENDER_EMAIL':
                mappedData.email = value || '';
                break;
            }
          });
          // Store column mapping and raw data for letter generation
          mappedData.custom_data = JSON.stringify({
            _columnMapping: campaignData.columnMapping,
            _templateId: campaignData.templateId,
            _rawData: row,
          });
          return mappedData;
        });
      // Insert leads in batches of 100
      const batchSize = 100;
      for (let i = 0; i < leadsToImport.length; i += batchSize) {
        const batch = leadsToImport.slice(i, i + batchSize);
        const { error: leadsError } = await supabase
          .from('enclosed_leads')
          .insert(batch);
        if (leadsError) throw leadsError;
      }
      // Redirect to campaign page
      router.push(`/campaigns/${campaign.id}`);
    } catch (err: any) {
      setError(err.message || 'Failed to create campaign');
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navigation variant="app" />
      {/* Header */}
      <div className="pt-24">
        <Container size="xl">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-light mb-4">
              Create New Campaign
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Set up your direct mail campaign in just a few simple steps
            </p>
          </div>
          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex items-center justify-center">
              {[
                { num: 1, label: "Template" },
                { num: 2, label: "Upload CSV" },
                { num: 3, label: "Map Fields" },
                { num: 4, label: "Preview" },
                { num: 5, label: "Confirm" },
              ].map(({ num, label }) => (
                <div key={num} className="flex items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300
                    ${step >= num ? "bg-blue-500 border-blue-500 text-white shadow-lg" : "border-gray-600 text-gray-500 bg-gray-800"}`}
                  >
                    {step > num ? "✓" : num}
                  </div>
                  <span className={`ml-3 text-sm font-medium ${step >= num ? "text-white" : "text-gray-500"}`}>
                    {label}
                  </span>
                  {num < 5 && (
                    <div className={`flex-1 h-0.5 mx-6 ${step > num ? "bg-blue-500" : "bg-gray-600"}`} />
                  )}
                </div>
              ))}
            </div>
          </div>
          {error && (
            <div className="mb-8">
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-red-400">
                {error}
              </div>
            </div>
          )}
          {/* Step 1: Campaign Info & Template Selection */}
          {step === 1 && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold mb-8 text-center">Campaign Details & Template</h2>
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Campaign Name
                    </label>
                    <input
                      type="text"
                      value={campaignData.name}
                      onChange={(e) =>
                        setCampaignData({ ...campaignData, name: e.target.value })
                      }
                      placeholder="Q1 Direct Mail Campaign"
                      className="input w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Description (Optional)
                    </label>
                    <textarea
                      value={campaignData.description}
                      onChange={(e) =>
                        setCampaignData({ ...campaignData, description: e.target.value })
                      }
                      rows={3}
                      placeholder="Describe your campaign goals..."
                      className="input w-full"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-4">
                    Select Letter Template
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {letterTemplates.map((template) => (
                      <div
                        key={template.id}
                        onClick={() =>
                          setCampaignData({ ...campaignData, templateId: template.id })
                        }
                        className={`p-6 border-2 rounded-xl cursor-pointer transition-all hover:scale-105 ${
                          campaignData.templateId === template.id
                            ? "border-blue-500 bg-blue-500/10"
                            : "border-gray-600 hover:border-gray-500 bg-gray-800/50"
                        }`}
                      >
                        <div className="font-semibold text-lg mb-2">{template.name}</div>
                        <div className="text-gray-400 text-sm mb-3">{template.description}</div>
                        <div>
                          <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                            template.category === 'sales' ? 'bg-green-500/20 text-green-400' :
                            template.category === 'marketing' ? 'bg-purple-500/20 text-purple-400' :
                            template.category === 'followup' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-blue-500/20 text-blue-400'
                          }`}>
                            {template.category}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-center">
                  <button
                    onClick={handleStep1Submit}
                    className="btn btn-primary btn-lg"
                  >
                    Continue to Upload CSV
                  </button>
                </div>
              </div>
            </div>
          )}
          {/* Step 2: Upload CSV */}
          {step === 2 && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold mb-8 text-center">Upload Your Mailing List</h2>
              <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-xl p-16 text-center cursor-pointer transition-all hover:scale-105 ${
                  isDragActive
                    ? "border-blue-500 bg-blue-500/10"
                    : "border-gray-600 hover:border-gray-500 bg-gray-800/50"
                }`}
              >
                <input {...getInputProps()} />
                {campaignData.csvFile ? (
                  <div>
                    <div className="text-6xl mb-4">✓</div>
                    <p className="text-xl font-semibold mb-2">
                      {campaignData.csvFile.name}
                    </p>
                    <p className="text-lg text-gray-400 mb-2">
                      {campaignData.letterCount} recipients found
                    </p>
                    <p className="text-sm text-gray-500">
                      Click to upload a different file
                    </p>
                  </div>
                ) : (
                  <div>
                    <div className="text-6xl mb-4">📁</div>
                    <p className="text-xl font-semibold mb-2">
                      {isDragActive
                        ? "Drop your CSV file here"
                        : "Drag & drop your CSV file here"}
                    </p>
                    <p className="text-gray-400">
                      or click to select from your computer
                    </p>
                  </div>
                )}
              </div>
              {campaignData.csvFile && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">CSV Preview</h3>
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <p className="text-gray-300">Columns detected: {campaignData.csvHeaders.join(", ")}</p>
                  </div>
                </div>
              )}
              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setStep(1)}
                  className="btn btn-ghost"
                >
                  Back
                </button>
                <button
                  onClick={handleStep2Submit}
                  className="btn btn-primary"
                >
                  Continue to Map Fields
                </button>
              </div>
            </div>
          )}
          {/* Step 3: Map Fields */}
          {step === 3 && selectedTemplate && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold mb-8 text-center">Map CSV Columns to Template Fields</h2>
              <div className="mb-8">
                <p className="text-gray-400 text-center">
                  Map your CSV columns to the template variables. Required fields are marked with *
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedTemplate.variables.map((variable) => {
                  const isRequired = ['RECIPIENT_NAME', 'ADDRESS', 'CITY', 'STATE', 'ZIP_CODE'].includes(variable);
                  return (
                    <div key={variable} className="space-y-2">
                      <div>
                        <label className="block text-sm font-medium text-gray-300">
                          {variable.replace(/_/g, ' ')}
                          {isRequired && <span className="text-red-400 ml-1">*</span>}
                        </label>
                      </div>
                      <select
                        value={campaignData.columnMapping[variable] || ''}
                        onChange={(e) => {
                          setCampaignData({
                            ...campaignData,
                            columnMapping: {
                              ...campaignData.columnMapping,
                              [variable]: e.target.value,
                            },
                          });
                        }}
                        className="input w-full"
                      >
                        <option value="">-- Select Column --</option>
                        {campaignData.csvHeaders.map((header) => (
                          <option key={header} value={header}>
                            {header}
                          </option>
                        ))}
                      </select>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setStep(2)}
                  className="btn btn-ghost"
                >
                  Back
                </button>
                <button
                  onClick={handleStep3Submit}
                  className="btn btn-primary"
                >
                  Generate Preview
                </button>
              </div>
            </div>
          )}
          {/* Step 4: Preview */}
          {step === 4 && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold mb-8 text-center">Preview Your Letter</h2>
              <div className="mb-8">
                <p className="text-gray-400 text-center">
                  This is how your letter will look using data from the first row of your CSV
                </p>
              </div>
              <div className="bg-white text-black rounded-xl p-8 shadow-2xl">
                <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed">
                  {campaignData.sampleLetter}
                </pre>
              </div>
              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setStep(3)}
                  className="btn btn-ghost"
                >
                  Back to Mapping
                </button>
                <button
                  onClick={() => setStep(5)}
                  className="btn btn-primary"
                >
                  Review & Launch
                </button>
              </div>
            </div>
          )}
          {/* Step 5: Confirm */}
          {step === 5 && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold mb-8 text-center">Review & Launch Campaign</h2>
              <div className="space-y-8">
                <div className="bg-gray-800/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4">Campaign Summary</h3>
                  <dl className="space-y-3">
                    <div className="flex justify-between">
                      <dt className="text-gray-400">Campaign Name:</dt>
                      <dd className="font-semibold">{campaignData.name}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-400">Template:</dt>
                      <dd className="font-semibold">{selectedTemplate?.name}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-400">Recipients:</dt>
                      <dd className="font-semibold">{campaignData.letterCount}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-400">Cost per Letter:</dt>
                      <dd className="font-semibold">$2.00</dd>
                    </div>
                    <div className="flex justify-between text-lg border-t border-gray-600 pt-3">
                      <dt className="text-gray-400">Total Cost:</dt>
                      <dd className="font-bold text-blue-400">${(campaignData.letterCount * 2).toFixed(2)}</dd>
                    </div>
                  </dl>
                </div>
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                  <p className="text-yellow-400 text-sm">
                    By launching this campaign, you agree to the charges above. Letters will be printed and mailed within 2 business days.
                  </p>
                </div>
                <div className="flex justify-between">
                  <button
                    onClick={() => setStep(4)}
                    className="btn btn-ghost"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleCreateCampaign}
                    disabled={loading}
                    className="btn btn-primary btn-lg"
                  >
                    {loading ? "Creating Campaign..." : "Launch Campaign"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </Container>
      </div>
    </div>
  );
}