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
      <div >
      <Navigation variant="app" />
      <div ></div>
      </div>
    );
  }
  return (
    <div >
      <Navigation variant="app" />
      <div >
        {/* Header - Badge Header Component */}
        <div >
          <span >
            Developer Tools
          </span>
          <div >
            <div>
              <h1 >API Keys</h1>
              <p >
                Manage API keys for Clients.AI integration
              </p>
            </div>
            <button
              onClick={() => setShowNewKeyModal(true)}
            >
              Generate New Key
            </button>
          </div>
        </div>
        {/* API Documentation - Numbered Steps Component */}
        <div >
          <h3 >
            Quick Start Guide
          </h3>
          <ol >
            <li >
              <span >
                1
              </span>
              <div>
                <div >
                  Generate an API key
                </div>
                <div >
                  Click "Generate New Key" and give it a descriptive name
                </div>
              </div>
            </li>
            <li >
              <span >
                2
              </span>
              <div>
                <div >
                  Configure your application
                </div>
                <div >
                  Add the API key to your environment variables
                </div>
              </div>
            </li>
            <li >
              <span >
                3
              </span>
              <div>
                <div >Make API calls</div>
                <div >
                  Use the endpoints below to interact with Enclosed.AI
                </div>
              </div>
            </li>
          </ol>
        </div>
        {/* API Endpoints - KBD Keys Component */}
        <div >
          <h3 >
            Available Endpoints
          </h3>
          <div >
            <div >
              <kbd >
                POST
              </kbd>
              <code >/api/v1/campaigns</code>
              <span >
                - Create a new campaign
              </span>
            </div>
            <div >
              <kbd >
                GET
              </kbd>
              <code >/api/v1/campaigns</code>
              <span >
                - List all campaigns
              </span>
            </div>
            <div >
              <kbd >
                GET
              </kbd>
              <code >
                /api/v1/campaigns/{"{id}"}
              </code>
              <span >
                - Get campaign details
              </span>
            </div>
            <div >
              <kbd >
                POST
              </kbd>
              <code >
                /api/v1/campaigns/{"{id}"}/send
              </code>
              <span >- Send a campaign</span>
            </div>
          </div>
        </div>
        {/* API Keys List - Bordered List Component */}
        <div >
          <div >
            <h2 >Your API Keys</h2>
          </div>
          {apiKeys.length === 0 ? (
            <div >
              <svg
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
              <p >No API keys yet</p>
              <button
                onClick={() => setShowNewKeyModal(true)}
              >
                Generate your first key
              </button>
            </div>
          ) : (
            <ul >
              {apiKeys.map((key) => (
                <li
                  key={key.id}
                >
                  <div >
                    <div >
                      <div >
                        <h3 >
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
                      <div >
                        <span >
                          {key.api_key.substring(0, 12)}...
                        </span>
                        {key.webhook_url && (
                          <span >
                            <span >→</span>
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
        <div >
          <div ></div>
          <div >
            <div >
              <div >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span >
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
        <div >
          <div >
            <h2 >Generate API Key</h2>
            {!generatedKey ? (
              <>
                <div >
                  <div>
                    <label >
                      Name
                    </label>
                    <input
                      type="text"
                      value={newKeyData.name}
                      onChange={(e) =>
                        setNewKeyData({ ...newKeyData, name: e.target.value })
                      }
                      placeholder="Clients.AI Integration"
                    />
                  </div>
                  <details >
                    <summary >
                      Advanced Options
                    </summary>
                    <div >
                      <label >
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
                        placeholder="https://clients.ai/webhooks/enclosed"
                      />
                      <p >
                        Optional: Receive event notifications at this URL
                      </p>
                    </div>
                  </details>
                </div>
                <div >
                  <button
                    onClick={() => {
                      setShowNewKeyModal(false);
                      setNewKeyData({ name: "", webhook_url: "" });
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleCreateKey}
                    disabled={!newKeyData.name}
                  >
                    Generate
                  </button>
                </div>
              </>
            ) : (
              <>
                <div >
                  <div >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div >
                      <p >
                        API Key Generated Successfully!
                      </p>
                      <p >
                        Copy this key now. You won't be able to see it again.
                      </p>
                    </div>
                  </div>
                  <div >
                    {generatedKey}
                  </div>
                  <button
                    onClick={() => navigator.clipboard.writeText(generatedKey)}
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