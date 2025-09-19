/* UI Component Transformation - Diverse lightweight components with no duplicates per page */
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { OFFER_DETAILS, OfferType } from "@/types";
import Logo from "@/components/Logo";
import Navigation from "@/components/Navigation";
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
      <div >
      <Navigation variant="app" />
      <div ></div>
      </div>
    );
  }
  return (
    <div >
      {/* Navigation */}
      <div >
        {/* Header - Pull Quote Component */}
        <blockquote >
          <h1 >Letter Templates</h1>
          <cite >
            Customize AI-powered templates for each offer type
          </cite>
        </blockquote>
        {/* Template Categories - Feature Grid Component */}
        <div >
          {(Object.keys(OFFER_DETAILS) as OfferType[]).map((offerType) => {
            const offerTemplates = templates.filter(
              (t) => t.offer_type === offerType,
            );
            return (
              <article
                key={offerType}
              >
                <div >
                  <span >
                    {OFFER_DETAILS[offerType].icon || "📄"}
                  </span>
                </div>
                <h3 >
                  {OFFER_DETAILS[offerType].title}
                </h3>
                <p >
                  {OFFER_DETAILS[offerType].description}
                </p>
                <div >
                  {offerTemplates.length} template
                  {offerTemplates.length !== 1 ? "s" : ""}
                </div>
              </article>
            );
          })}
        </div>
        {/* Templates List - Comparison Table Component */}
        <div >
          <div >
            <h2 >All Templates</h2>
          </div>
          <table >
            <thead>
              <tr >
                <th >
                  Template Name
                </th>
                <th >
                  Offer Type
                </th>
                <th >
                  Variables
                </th>
                <th >
                  Status
                </th>
                <th >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {templates.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                  >
                    <svg
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
                    className={index % 2 === 0 ? "bg-black" : "bg-black"}
                  >
                    <td >
                      {template.name}
                    </td>
                    <td >
                      {OFFER_DETAILS[template.offer_type]?.title ||
                        template.offer_type}
                    </td>
                    <td >
                      <div >
                        {template.variables.slice(0, 3).map((v) => (
                          <span
                            key={v}
                          >
                            {v}
                          </span>
                        ))}
                        {template.variables.length > 3 && (
                          <span >
                            +{template.variables.length - 3}
                          </span>
                        )}
                      </div>
                    </td>
                    <td >
                      {template.is_default ? (
                        <span >
                          Default
                        </span>
                      ) : (
                        <span >
                          Custom
                        </span>
                      )}
                    </td>
                    <td >
                      <button
                        onClick={() => {
                          setSelectedTemplate(template);
                          setEditContent(template.content);
                          setShowEditor(true);
                        }}
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
        <aside >
          <h3 >
            Template Variables
          </h3>
          <p >
            Use these variables in your templates to personalize each letter:
          </p>
          <div >
            <code >
              {"{name}"}
            </code>
            <code >
              {"{company}"}
            </code>
            <code >
              {"{address}"}
            </code>
            <code >
              {"{offer}"}
            </code>
          </div>
        </aside>
      </div>
      {/* Edit Modal - Toggle Reveal Component */}
      {showEditor && selectedTemplate && (
        <div >
          <div >
            <div >
              <h2 >
                Edit Template: {selectedTemplate.name}
              </h2>
            </div>
            <div >
              <textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                placeholder="Enter your template content..."
              />
              <details >
                <summary >
                  Show available variables
                </summary>
                <div >
                  <div >
                    {selectedTemplate.variables.map((v) => (
                      <code
                        key={v}
                      >
                        {`{${v}}`}
                      </code>
                    ))}
                  </div>
                </div>
              </details>
            </div>
            <div >
              <button
                onClick={() => {
                  setShowEditor(false);
                  setSelectedTemplate(null);
                  setEditContent("");
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleSaveTemplate}
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