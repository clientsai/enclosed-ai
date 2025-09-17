/* UI Component Transformation - Diverse lightweight components with no duplicates per page */
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { OFFER_DETAILS, OfferType, MailType, PRICING } from '@/types';
import { parseCSV, mapCSVToRecipients, getIntelligentMapping, validateAddress, CSVMapping } from '@/lib/csv-parser';
import { calculateCampaignCost, formatCurrency } from '@/lib/pricing';
import { generateSalesLetter, generateHTMLLetter } from '@/lib/letter-generator';
import { useDropzone } from 'react-dropzone';
import Logo from '@/components/Logo';

export default function NewCampaignPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Campaign data
  const [campaignData, setCampaignData] = useState({
    name: '',
    offerType: '' as OfferType,
    mailType: 'letter' as MailType,
    csvFile: null as File | null,
    csvData: [] as any[],
    csvHeaders: [] as string[],
    mapping: {} as CSVMapping,
    recipients: [] as any[],
    sampleLetter: '',
  });

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user: authUser } } = await supabase.auth.getUser();
      if (!authUser) {
        router.push('/auth/login');
        return;
      }

      const { data: userData } = await supabase
        .from('enclosed_users')
        .select('*')
        .eq('id', authUser.id)
        .single();

      setUser(userData);
    };

    checkAuth();
  }, [router]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'text/csv': ['.csv'],
    },
    onDrop: async (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        try {
          const { data, headers } = await parseCSV(file);
          const autoMapping = getIntelligentMapping(headers);

          setCampaignData(prev => ({
            ...prev,
            csvFile: file,
            csvData: data,
            csvHeaders: headers,
            mapping: autoMapping as CSVMapping,
          }));
        } catch (err: any) {
          setError('Failed to parse CSV file: ' + err.message);
        }
      }
    },
  });

  const handleStep1Submit = () => {
    if (!campaignData.name || !campaignData.offerType) {
      setError('Please fill in all required fields');
      return;
    }
    setError('');
    setStep(2);
  };

  const handleStep2Submit = () => {
    if (!campaignData.csvFile) {
      setError('Please upload a CSV file');
      return;
    }
    setError('');
    setStep(3);
  };

  const handleStep3Submit = () => {
    const requiredFields = ['name', 'address_line1', 'city', 'state', 'zip_code'];
    const mappedFields = Object.values(campaignData.mapping).filter(Boolean);

    const missingFields = requiredFields.filter(field =>
      !(campaignData.mapping as any)[field]
    );

    if (missingFields.length > 0) {
      setError(`Please map required fields: ${missingFields.join(', ')}`);
      return;
    }

    // Map recipients and validate
    const recipients = mapCSVToRecipients(campaignData.csvData, campaignData.mapping);
    const validRecipients = recipients.filter(r => validateAddress(r).length === 0);

    if (validRecipients.length === 0) {
      setError('No valid addresses found in CSV');
      return;
    }

    setCampaignData(prev => ({ ...prev, recipients: validRecipients }));
    setError('');
    setStep(4);
  };

  const generateSampleLetter = async () => {
    if (campaignData.recipients.length > 0) {
      const sample = await generateSalesLetter(
        campaignData.recipients[0],
        campaignData.offerType,
        { sender_name: user?.name || 'Your Name' }
      );
      setCampaignData(prev => ({ ...prev, sampleLetter: sample }));
    }
  };

  useEffect(() => {
    if (step === 4 && campaignData.recipients.length > 0) {
      generateSampleLetter();
    }
  }, [step, campaignData.recipients]);

  const handleCreateCampaign = async () => {
    setLoading(true);
    setError('');

    try {
      const { data: { user: authUser } } = await supabase.auth.getUser();
      if (!authUser) throw new Error('Not authenticated');

      const cost = calculateCampaignCost(campaignData.mailType, campaignData.recipients.length);

      // Create campaign
      const { data: campaign, error: campaignError } = await supabase
        .from('enclosed_campaigns')
        .insert({
          user_id: authUser.id,
          name: campaignData.name,
          offer_type: campaignData.offerType,
          mail_type: campaignData.mailType,
          recipient_count: campaignData.recipients.length,
          cost_per_piece: cost.perPiece,
          total_cost: cost.total,
          status: 'draft',
        })
        .select()
        .single();

      if (campaignError) throw campaignError;

      // Insert recipients
      const recipientData = campaignData.recipients.map(r => ({
        campaign_id: campaign.id,
        name: r.name,
        company: r.company,
        address_line1: r.address_line1,
        address_line2: r.address_line2,
        city: r.city,
        state: r.state,
        zip_code: r.zip_code,
        custom_variables: r,
      }));

      const { error: recipientError } = await supabase
        .from('enclosed_recipients')
        .insert(recipientData);

      if (recipientError) throw recipientError;

      router.push(`/campaigns/${campaign.id}`);
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  const cost = calculateCampaignCost(campaignData.mailType, campaignData.recipients.length);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Badge Header Component */}
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

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Title - Lead Intro Component */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Create New Campaign</h1>
          <p className="text-gray-600 mt-2">Set up your direct mail campaign in just 5 simple steps</p>
        </div>

        {/* Progress Steps - Timeline Vertical Component */}
        <div className="mb-8 bg-white rounded-lg shadow-sm p-6">
          <div className="space-y-4">
            {[
              { num: 1, label: 'Campaign Info', desc: 'Name and offer type' },
              { num: 2, label: 'Upload CSV', desc: 'Import your mailing list' },
              { num: 3, label: 'Map Fields', desc: 'Match CSV columns' },
              { num: 4, label: 'Preview', desc: 'Review sample letter' },
              { num: 5, label: 'Confirm', desc: 'Finalize campaign' }
            ].map(({ num, label, desc }) => (
              <div key={num} className="flex items-center">
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors
                  ${step >= num ? 'bg-blue-600 border-blue-600 text-white' : 'border-gray-300 text-gray-500 bg-white'}`}>
                  {step > num ? '✓' : num}
                </div>
                <div className={`ml-4 flex-1 ${num < 5 ? 'border-l-2 border-gray-200 pb-4 -mb-4 ml-9' : ''}`}>
                  <div className={`font-medium ${step === num ? 'text-blue-600' : 'text-gray-900'}`}>{label}</div>
                  <div className="text-sm text-gray-500">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {error && (
          <div className="mb-6 bg-red-50 text-red-600 px-4 py-3 rounded-lg border border-red-200">
            {error}
          </div>
        )}

        {/* Step 1: Campaign Info - Feature Grid Component */}
        {step === 1 && (
          <div className="bg-white rounded-lg shadow p-6">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-4">STEP 1</span>
            <h2 className="text-xl font-semibold mb-6">Campaign Information</h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Campaign Name
                </label>
                <input
                  type="text"
                  value={campaignData.name}
                  onChange={(e) => setCampaignData({ ...campaignData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Q1 Direct Mail Campaign"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Offer Type
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {(Object.keys(OFFER_DETAILS) as OfferType[]).map((offer) => (
                    <article
                      key={offer}
                      onClick={() => setCampaignData({ ...campaignData, offerType: offer })}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        campaignData.offerType === offer
                          ? 'border-blue-600 bg-blue-50 shadow-md'
                          : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                      }`}
                    >
                      <h3 className="font-semibold text-gray-900">{OFFER_DETAILS[offer].title}</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {OFFER_DETAILS[offer].description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mail Type
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { type: 'letter', label: 'Letter', price: '$0.89/piece' },
                    { type: 'postcard_4x6', label: 'Postcard 4x6', price: '$0.55/piece' },
                    { type: 'postcard_6x11', label: 'Postcard 6x11', price: '$0.75/piece' }
                  ].map(({ type, label, price }) => (
                    <button
                      key={type}
                      onClick={() => setCampaignData({ ...campaignData, mailType: type as MailType })}
                      className={`p-4 border-2 rounded-lg transition-all ${
                        campaignData.mailType === type
                          ? 'border-blue-600 bg-blue-50 shadow-md'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="font-medium">{label}</div>
                      <div className="text-sm text-gray-600">{price}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={handleStep1Submit}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Upload CSV - Callout Accent Component */}
        {step === 2 && (
          <div className="bg-white rounded-lg shadow p-6">
            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full mb-4">STEP 2</span>
            <h2 className="text-xl font-semibold mb-6">Upload Mailing List</h2>

            <aside className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6">
              <p className="text-blue-900 font-medium">File Requirements</p>
              <p className="text-blue-700 text-sm mt-1">CSV format with required fields: Name, Address, City, State, ZIP</p>
            </aside>

            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition
                ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'}`}
            >
              <input {...getInputProps()} />
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p className="mt-4 text-gray-600">
                {campaignData.csvFile
                  ? `Selected: ${campaignData.csvFile.name} (${campaignData.csvData.length} rows)`
                  : 'Drop your CSV file here, or click to browse'}
              </p>
            </div>

            <div className="mt-6 flex justify-between">
              <button
                onClick={() => setStep(1)}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleStep2Submit}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Map Fields - Definition List Component */}
        {step === 3 && (
          <div className="bg-white rounded-lg shadow p-6">
            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full mb-4">STEP 3</span>
            <h2 className="text-xl font-semibold mb-6">Map CSV Columns</h2>

            <p className="text-gray-600 mb-6">
              We've automatically mapped your columns. Please verify and adjust if needed.
            </p>

            <dl className="space-y-4">
              {['name', 'company', 'address_line1', 'address_line2', 'city', 'state', 'zip_code'].map((field) => (
                <div key={field} className="flex items-center border-b border-gray-100 pb-3">
                  <dt className="w-40 text-sm font-medium text-gray-700">
                    {field.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    {['name', 'address_line1', 'city', 'state', 'zip_code'].includes(field) && (
                      <span className="text-red-500 ml-1">*</span>
                    )}
                  </dt>
                  <dd className="flex-1">
                    <select
                      value={(campaignData.mapping as any)[field] || ''}
                      onChange={(e) => setCampaignData({
                        ...campaignData,
                        mapping: { ...campaignData.mapping, [field]: e.target.value }
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">-- Not mapped --</option>
                      {campaignData.csvHeaders.map((header) => (
                        <option key={header} value={header}>{header}</option>
                      ))}
                    </select>
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 flex justify-between">
              <button
                onClick={() => setStep(2)}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleStep3Submit}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Preview - Two Column Split Component */}
        {step === 4 && (
          <div className="bg-white rounded-lg shadow p-6">
            <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full mb-4">STEP 4</span>
            <h2 className="text-xl font-semibold mb-6">Preview Letter</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Sample Letter</h3>
                <div className="bg-white p-4 rounded border border-gray-200 max-h-96 overflow-y-auto">
                  <pre className="whitespace-pre-wrap font-sans text-sm text-gray-700">
                    {campaignData.sampleLetter || 'Generating sample letter...'}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Campaign Summary</h3>
                <div className="bg-blue-50 rounded-lg p-6">
                  <dl className="space-y-3">
                    <div className="flex justify-between">
                      <dt className="text-sm text-gray-600">Recipients</dt>
                      <dd className="font-semibold">{campaignData.recipients.length}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-sm text-gray-600">Mail Type</dt>
                      <dd className="font-semibold">{campaignData.mailType.replace(/_/g, ' ')}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-sm text-gray-600">Cost per piece</dt>
                      <dd className="font-semibold">{formatCurrency(cost.perPiece)}</dd>
                    </div>
                    <div className="flex justify-between pt-3 border-t border-blue-200">
                      <dt className="text-sm text-gray-600">Total Cost</dt>
                      <dd className="font-bold text-lg text-blue-600">{formatCurrency(cost.total)}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-between">
              <button
                onClick={() => setStep(3)}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
              <button
                onClick={() => setStep(5)}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Review & Create
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Confirm - Key Takeaways Component */}
        {step === 5 && (
          <div className="bg-white rounded-lg shadow p-6">
            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full mb-4">FINAL STEP</span>
            <h2 className="text-xl font-semibold mb-6">Confirm Campaign</h2>

            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-green-900 mb-3">Ready to Create Campaign</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-green-800">Campaign: {campaignData.name}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-green-800">Recipients: {campaignData.recipients.length} verified addresses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-green-800">Total cost: {formatCurrency(cost.total)}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-green-800">Status: Will be saved as draft</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3 mb-6 bg-gray-50 p-4 rounded-lg">
              <label className="flex items-start cursor-pointer">
                <input type="checkbox" className="mt-1 mr-3" required />
                <span className="text-sm text-gray-700">
                  I understand that this will create a draft campaign. I can review and send it later.
                </span>
              </label>
              <label className="flex items-start cursor-pointer">
                <input type="checkbox" className="mt-1 mr-3" required />
                <span className="text-sm text-gray-700">
                  I have verified that all addresses are correct and deliverable.
                </span>
              </label>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setStep(4)}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                disabled={loading}
              >
                Back
              </button>
              <button
                onClick={handleCreateCampaign}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                disabled={loading}
              >
                {loading ? 'Creating...' : 'Create Campaign'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}