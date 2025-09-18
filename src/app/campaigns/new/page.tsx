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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/dashboard" className="flex items-center space-x-2">
                <Logo size="md" />
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/campaigns"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                ← Back to Campaigns
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Title */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Create New Campaign
          </h1>
          <p className="text-gray-600 mt-2">
            Set up your direct mail campaign in just a few simple steps
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8 bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between">
            {[
              { num: 1, label: "Template" },
              { num: 2, label: "Upload CSV" },
              { num: 3, label: "Map Fields" },
              { num: 4, label: "Preview" },
              { num: 5, label: "Confirm" },
            ].map(({ num, label }) => (
              <div key={num} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors
                  ${step >= num ? "bg-blue-600 border-blue-600 text-white" : "border-gray-300 text-gray-500 bg-white"}`}
                >
                  {step > num ? "✓" : num}
                </div>
                <span className={`ml-2 ${num < 5 ? "mr-8" : ""} ${step >= num ? "text-gray-900" : "text-gray-500"}`}>
                  {label}
                </span>
                {num < 5 && (
                  <div className={`flex-1 h-0.5 mx-4 ${step > num ? "bg-blue-600" : "bg-gray-300"}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {error && (
          <div className="mb-6 bg-red-50 text-red-600 px-4 py-3 rounded-lg border border-red-200">
            {error}
          </div>
        )}

        {/* Step 1: Campaign Info & Template Selection */}
        {step === 1 && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-6">Campaign Details & Template</h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Campaign Name
                </label>
                <input
                  type="text"
                  value={campaignData.name}
                  onChange={(e) =>
                    setCampaignData({ ...campaignData, name: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Q1 Direct Mail Campaign"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description (Optional)
                </label>
                <textarea
                  value={campaignData.description}
                  onChange={(e) =>
                    setCampaignData({ ...campaignData, description: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                  placeholder="Describe your campaign goals..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Select Letter Template
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {letterTemplates.map((template) => (
                    <div
                      key={template.id}
                      onClick={() =>
                        setCampaignData({ ...campaignData, templateId: template.id })
                      }
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        campaignData.templateId === template.id
                          ? "border-blue-600 bg-blue-50"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <div className="font-semibold text-gray-900">{template.name}</div>
                      <div className="text-sm text-gray-600 mt-1">{template.description}</div>
                      <div className="mt-2">
                        <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                          template.category === 'sales' ? 'bg-green-100 text-green-700' :
                          template.category === 'marketing' ? 'bg-purple-100 text-purple-700' :
                          template.category === 'followup' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {template.category}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={handleStep1Submit}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Continue to Upload CSV
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Upload CSV */}
        {step === 2 && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-6">Upload Your Mailing List</h2>

            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors ${
                isDragActive
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-300 hover:border-gray-400"
              }`}
            >
              <input {...getInputProps()} />
              {campaignData.csvFile ? (
                <div>
                  <div className="text-green-600 text-5xl mb-4">✓</div>
                  <p className="text-gray-900 font-medium">
                    {campaignData.csvFile.name}
                  </p>
                  <p className="text-gray-600 mt-2">
                    {campaignData.letterCount} recipients found
                  </p>
                  <p className="text-sm text-blue-600 mt-4">
                    Click to upload a different file
                  </p>
                </div>
              ) : (
                <div>
                  <div className="text-gray-400 text-5xl mb-4">📁</div>
                  <p className="text-gray-700 font-medium">
                    {isDragActive
                      ? "Drop your CSV file here"
                      : "Drag & drop your CSV file here"}
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    or click to select from your computer
                  </p>
                </div>
              )}
            </div>

            {campaignData.csvFile && (
              <div className="mt-6 bg-gray-50 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">CSV Preview</h3>
                <div className="text-sm text-gray-600">
                  <p>Columns detected: {campaignData.csvHeaders.join(", ")}</p>
                </div>
              </div>
            )}

            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setStep(1)}
                className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Back
              </button>
              <button
                onClick={handleStep2Submit}
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700"
              >
                Continue to Map Fields
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Map Fields */}
        {step === 3 && selectedTemplate && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-6">Map CSV Columns to Template Fields</h2>

            <div className="mb-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-900">
                Map your CSV columns to the template variables. Required fields are marked with *
              </p>
            </div>

            <div className="space-y-4">
              {selectedTemplate.variables.map((variable) => {
                const isRequired = ['RECIPIENT_NAME', 'ADDRESS', 'CITY', 'STATE', 'ZIP_CODE'].includes(variable);

                return (
                  <div key={variable} className="grid grid-cols-2 gap-4 items-center">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        {variable.replace(/_/g, ' ')}
                        {isRequired && <span className="text-red-500 ml-1">*</span>}
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
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
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

            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setStep(2)}
                className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Back
              </button>
              <button
                onClick={handleStep3Submit}
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700"
              >
                Generate Preview
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Preview */}
        {step === 4 && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-6">Preview Your Letter</h2>

            <div className="mb-4 p-4 bg-yellow-50 rounded-lg">
              <p className="text-sm text-yellow-900">
                This is how your letter will look using data from the first row of your CSV
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 font-mono text-sm whitespace-pre-line">
              {campaignData.sampleLetter}
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setStep(3)}
                className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Back to Mapping
              </button>
              <button
                onClick={() => setStep(5)}
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700"
              >
                Review & Launch
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Confirm */}
        {step === 5 && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-6">Review & Launch Campaign</h2>

            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Campaign Summary</h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Campaign Name:</dt>
                    <dd className="font-medium">{campaignData.name}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Template:</dt>
                    <dd className="font-medium">{selectedTemplate?.name}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Recipients:</dt>
                    <dd className="font-medium">{campaignData.letterCount}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Cost per Letter:</dt>
                    <dd className="font-medium">$2.00</dd>
                  </div>
                  <div className="flex justify-between text-lg font-semibold">
                    <dt className="text-gray-900">Total Cost:</dt>
                    <dd className="text-blue-600">${(campaignData.letterCount * 2).toFixed(2)}</dd>
                  </div>
                </dl>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-900">
                  By launching this campaign, you agree to the charges above. Letters will be printed and mailed within 2 business days.
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setStep(4)}
                  className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Back
                </button>
                <button
                  onClick={handleCreateCampaign}
                  disabled={loading}
                  className="flex-1 bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {loading ? "Creating Campaign..." : "Launch Campaign"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}