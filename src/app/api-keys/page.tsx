/* UI Component Transformation - Diverse lightweight components with no duplicates per page */
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import crypto from "crypto";
import Logo from "@/components/Logo";
import Navigation from "@/components/Navigation";
interface ApiKey {
  id: string;
  name: string;
  api_key: string;
  webhook_url?: string;
  is_active: boolean;
  last_used_at?: string;
  created_at: string;
}
export default function ApiKeysPage() {
  const router = useRouter();
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([]);
  const [loading, setLoading] = useState(true);
  const [showNewKeyModal, setShowNewKeyModal] = useState(false);
  const [newKeyData, setNewKeyData] = useState({
    name: "",
    webhook_url: "",
  });
  const [generatedKey, setGeneratedKey] = useState("");
  useEffect(() => {
    loadApiKeys();
  }, []);
  const loadApiKeys = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      router.push("/auth/login");
      return;
    }
    const { data } = await supabase
      .from("enclosed_api_clients")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });
    if (data) {
      setApiKeys(data);
    }
    setLoading(false);
  };
  const generateApiKey = () => {
    const key = "enc_" + crypto.randomBytes(32).toString("hex");
    return key;
  };
  const handleCreateKey = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;
    const apiKey = generateApiKey();
    const apiKeyHash = crypto.createHash("sha256").update(apiKey).digest("hex");
    const { error } = await supabase.from("enclosed_api_clients").insert({
      user_id: user.id,
      name: newKeyData.name,
      api_key: apiKey,
      api_key_hash: apiKeyHash,
      webhook_url: newKeyData.webhook_url || null,
    });
    if (!error) {
      setGeneratedKey(apiKey);
      await loadApiKeys();
    }
  };
  const handleDeleteKey = async (id: string) => {
    if (!confirm("Are you sure you want to delete this API key?")) return;
    await supabase.from("enclosed_api_clients").delete().eq("id", id);
    await loadApiKeys();
  };
  const handleToggleActive = async (id: string, isActive: boolean) => {
    await supabase
      .from("enclosed_api_clients")
      .update({ is_active: !isActive })
      .eq("id", id);
    await loadApiKeys();
  };
  if (loading) {
    return (
      <div className="min-h-screen bg-black">
      <Navigation variant="app" />
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-black">
      <Navigation variant="app" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        {/* Header - Badge Header Component */}
        <div className="mb-8">
          <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full mb-3 uppercase tracking-wide">
            Developer Tools
          </span>
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">API Keys</h1>
              <p className="mt-2 text-gray-400">
                Manage API keys for Clients.AI integration
              </p>
            </div>
            <button
              onClick={() => setShowNewKeyModal(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Generate New Key
            </button>
          </div>
        </div>
        {/* API Documentation - Numbered Steps Component */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
          <h3 className="font-semibold text-white mb-4">
            Quick Start Guide
          </h3>
          <ol className="space-y-3">
            <li className="flex">
              <span className="flex-shrink-0 w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">
                1
              </span>
              <div>
                <div className="font-medium text-white">
                  Generate an API key
                </div>
                <div className="text-sm text-gray-400">
                  Click "Generate New Key" and give it a descriptive name
                </div>
              </div>
            </li>
            <li className="flex">
              <span className="flex-shrink-0 w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">
                2
              </span>
              <div>
                <div className="font-medium text-white">
                  Configure your application
                </div>
                <div className="text-sm text-gray-400">
                  Add the API key to your environment variables
                </div>
              </div>
            </li>
            <li className="flex">
              <span className="flex-shrink-0 w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">
                3
              </span>
              <div>
                <div className="font-medium text-white">Make API calls</div>
                <div className="text-sm text-gray-400">
                  Use the endpoints below to interact with Enclosed.AI
                </div>
              </div>
            </li>
          </ol>
        </div>
        {/* API Endpoints - KBD Keys Component */}
        <div className="bg-black rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h3 className="font-semibold text-white mb-4">
            Available Endpoints
          </h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <kbd className="px-2 py-1 text-xs font-semibold text-white bg-gray-100 border border-gray-300 rounded">
                POST
              </kbd>
              <code className="text-sm text-gray-300">/api/v1/campaigns</code>
              <span className="text-sm text-gray-500">
                - Create a new campaign
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <kbd className="px-2 py-1 text-xs font-semibold text-white bg-gray-100 border border-gray-300 rounded">
                GET
              </kbd>
              <code className="text-sm text-gray-300">/api/v1/campaigns</code>
              <span className="text-sm text-gray-500">
                - List all campaigns
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <kbd className="px-2 py-1 text-xs font-semibold text-white bg-gray-100 border border-gray-300 rounded">
                GET
              </kbd>
              <code className="text-sm text-gray-300">
                /api/v1/campaigns/{"{id}"}
              </code>
              <span className="text-sm text-gray-500">
                - Get campaign details
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <kbd className="px-2 py-1 text-xs font-semibold text-white bg-gray-100 border border-gray-300 rounded">
                POST
              </kbd>
              <code className="text-sm text-gray-300">
                /api/v1/campaigns/{"{id}"}/send
              </code>
              <span className="text-sm text-gray-500">- Send a campaign</span>
            </div>
          </div>
        </div>
        {/* API Keys List - Bordered List Component */}
        <div className="bg-black rounded-lg shadow-sm">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-white">Your API Keys</h2>
          </div>
          {apiKeys.length === 0 ? (
            <div className="text-center py-12">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                />
              </svg>
              <p className="mt-4 text-gray-400">No API keys yet</p>
              <button
                onClick={() => setShowNewKeyModal(true)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Generate your first key
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {apiKeys.map((key) => (
                <li
                  key={key.id}
                  className="px-6 py-4 hover:bg-black transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-sm font-semibold text-white">
                          {key.name}
                        </h3>
                        <button
                          onClick={() =>
                            handleToggleActive(key.id, key.is_active)
                          }
                          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full cursor-pointer transition-colors
                            ${key.is_active ? "bg-green-100 text-green-800 hover:bg-green-200" : "bg-gray-100 text-white hover:bg-gray-200"}
                          `}
                        >
                          {key.is_active ? "Active" : "Inactive"}
                        </button>
                      </div>
                      <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                        <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                          {key.api_key.substring(0, 12)}...
                        </span>
                        {key.webhook_url && (
                          <span className="flex items-center">
                            <span className="text-gray-400 mr-1">→</span>
                            {key.webhook_url}
                          </span>
                        )}
                        <span>
                          Last used:{" "}
                          {key.last_used_at
                            ? new Date(key.last_used_at).toLocaleDateString()
                            : "Never"}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeleteKey(key.id)}
                      className="ml-4 text-red-600 hover:text-red-700 text-sm font-medium transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* Footer Info - Inset Note Component */}
        <div className="mt-8 relative">
          <div className="absolute inset-x-0 top-1/2 border-t border-gray-200"></div>
          <div className="relative flex justify-center">
            <div className="bg-black px-4">
              <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-2 inline-flex items-center space-x-2">
                <svg
                  className="h-4 w-4 text-amber-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-amber-800">
                  Keep your API keys secure and never commit them to version
                  control
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* New Key Modal - Toggle Reveal Component */}
      {showNewKeyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-black rounded-lg max-w-md w-full p-6">
            <h2 className="text-lg md:text-xl font-semibold mb-4">Generate API Key</h2>
            {!generatedKey ? (
              <>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      value={newKeyData.name}
                      onChange={(e) =>
                        setNewKeyData({ ...newKeyData, name: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Clients.AI Integration"
                    />
                  </div>
                  <details className="group">
                    <summary className="cursor-pointer text-sm text-blue-600 hover:text-blue-700 font-medium">
                      Advanced Options
                    </summary>
                    <div className="mt-3">
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Webhook URL
                      </label>
                      <input
                        type="url"
                        value={newKeyData.webhook_url}
                        onChange={(e) =>
                          setNewKeyData({
                            ...newKeyData,
                            webhook_url: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="https://clients.ai/webhooks/enclosed"
                      />
                      <p className="mt-1 text-xs text-gray-500">
                        Optional: Receive event notifications at this URL
                      </p>
                    </div>
                  </details>
                </div>
                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    onClick={() => {
                      setShowNewKeyModal(false);
                      setNewKeyData({ name: "", webhook_url: "" });
                    }}
                    className="px-4 py-2 border border-gray-300 text-gray-300 rounded-lg hover:bg-black transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleCreateKey}
                    disabled={!newKeyData.name}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
                  >
                    Generate
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <svg
                      className="h-5 w-5 text-green-600 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div className="flex-1">
                      <p className="text-green-900 font-medium">
                        API Key Generated Successfully!
                      </p>
                      <p className="text-sm text-green-700 mt-1">
                        Copy this key now. You won't be able to see it again.
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 bg-black rounded p-3 font-mono text-xs break-all border border-green-200">
                    {generatedKey}
                  </div>
                  <button
                    onClick={() => navigator.clipboard.writeText(generatedKey)}
                    className="mt-3 w-full px-3 py-2 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors"
                  >
                    Copy to Clipboard
                  </button>
                </div>
                <button
                  onClick={() => {
                    setShowNewKeyModal(false);
                    setGeneratedKey("");
                    setNewKeyData({ name: "", webhook_url: "" });
                  }}
                  className="mt-4 w-full px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Done
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}