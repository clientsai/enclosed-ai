/* UI Component Transformation - Diverse lightweight components with no duplicates per page */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { OFFER_DETAILS, OfferType } from "@/types";
import Logo from "@/components/Logo";

interface Template {
  id: string;
  name: string;
  offer_type: OfferType;
  content: string;
  variables: string[];
  is_default: boolean;
  created_at: string;
}

export default function TemplatesPage() {
  const router = useRouter();
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    null,
  );
  const [showEditor, setShowEditor] = useState(false);
  const [editContent, setEditContent] = useState("");

  useEffect(() => {
    loadTemplates();
  }, []);

  const loadTemplates = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      router.push("/auth/login");
      return;
    }

    const { data } = await supabase
      .from("enclosed_templates")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) {
      setTemplates(data);
    }
    setLoading(false);
  };

  const handleSaveTemplate = async () => {
    if (!selectedTemplate) return;

    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;

    await supabase
      .from("enclosed_templates")
      .update({ content: editContent })
      .eq("id", selectedTemplate.id);

    setShowEditor(false);
    setSelectedTemplate(null);
    setEditContent("");
    await loadTemplates();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
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

              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/dashboard"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Dashboard
                </Link>
                <Link
                  href="/campaigns"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Campaigns
                </Link>
                <Link
                  href="/templates"
                  className="text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Templates
                </Link>
                <Link
                  href="/api-keys"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  API Keys
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header - Pull Quote Component */}
        <blockquote className="mb-8 border-l-4 border-gray-900 pl-6">
          <h1 className="text-3xl font-bold text-gray-900">Letter Templates</h1>
          <cite className="not-italic text-gray-600 text-lg mt-2 block">
            Customize AI-powered templates for each offer type
          </cite>
        </blockquote>

        {/* Template Categories - Feature Grid Component */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {(Object.keys(OFFER_DETAILS) as OfferType[]).map((offerType) => {
            const offerTemplates = templates.filter(
              (t) => t.offer_type === offerType,
            );
            return (
              <article
                key={offerType}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">
                    {OFFER_DETAILS[offerType].icon || "📄"}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {OFFER_DETAILS[offerType].title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {OFFER_DETAILS[offerType].description}
                </p>
                <div className="text-sm text-gray-500">
                  {offerTemplates.length} template
                  {offerTemplates.length !== 1 ? "s" : ""}
                </div>
              </article>
            );
          })}
        </div>

        {/* Templates List - Comparison Table Component */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <h2 className="text-lg font-medium text-gray-900">All Templates</h2>
          </div>
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-200">
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Template Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Offer Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Variables
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {templates.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-12 text-center text-gray-500"
                  >
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400 mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    No templates yet. Default templates will be created
                    automatically.
                  </td>
                </tr>
              ) : (
                templates.map((template, index) => (
                  <tr
                    key={template.id}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {template.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {OFFER_DETAILS[template.offer_type]?.title ||
                        template.offer_type}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {template.variables.slice(0, 3).map((v) => (
                          <span
                            key={v}
                            className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                          >
                            {v}
                          </span>
                        ))}
                        {template.variables.length > 3 && (
                          <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                            +{template.variables.length - 3}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {template.is_default ? (
                        <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                          Default
                        </span>
                      ) : (
                        <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                          Custom
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <button
                        onClick={() => {
                          setSelectedTemplate(template);
                          setEditContent(template.content);
                          setShowEditor(true);
                        }}
                        className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Help Section - Callout Accent Component */}
        <aside className="mt-8 bg-gray-50 border-l-4 border-gray-900 p-6 rounded-r-lg">
          <h3 className="text-gray-900 font-semibold mb-2">
            Template Variables
          </h3>
          <p className="text-gray-700 text-sm mb-3">
            Use these variables in your templates to personalize each letter:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            <code className="bg-white px-2 py-1 rounded text-gray-600">
              {"{name}"}
            </code>
            <code className="bg-white px-2 py-1 rounded text-gray-600">
              {"{company}"}
            </code>
            <code className="bg-white px-2 py-1 rounded text-gray-600">
              {"{address}"}
            </code>
            <code className="bg-white px-2 py-1 rounded text-gray-600">
              {"{offer}"}
            </code>
          </div>
        </aside>
      </div>

      {/* Edit Modal - Toggle Reveal Component */}
      {showEditor && selectedTemplate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
              <h2 className="text-xl font-semibold text-gray-900">
                Edit Template: {selectedTemplate.name}
              </h2>
            </div>
            <div className="flex-1 p-6 overflow-y-auto">
              <textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                className="w-full h-96 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent font-mono text-sm"
                placeholder="Enter your template content..."
              />
              <details className="mt-4 group">
                <summary className="cursor-pointer text-sm text-gray-600 hover:text-gray-900 font-medium">
                  Show available variables
                </summary>
                <div className="mt-3 p-4 bg-gray-50 rounded-lg">
                  <div className="flex flex-wrap gap-2">
                    {selectedTemplate.variables.map((v) => (
                      <code
                        key={v}
                        className="px-2 py-1 bg-white border border-gray-200 rounded text-xs"
                      >
                        {`{${v}}`}
                      </code>
                    ))}
                  </div>
                </div>
              </details>
            </div>
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex justify-end space-x-3">
              <button
                onClick={() => {
                  setShowEditor(false);
                  setSelectedTemplate(null);
                  setEditContent("");
                }}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveTemplate}
                className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Save Template
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
