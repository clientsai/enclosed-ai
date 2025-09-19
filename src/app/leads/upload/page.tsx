"use client";
import { useState, useCallback, useRef } from "react";
import { useDropzone } from "react-dropzone";
import Papa from "papaparse";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
interface CSVData {
  headers: string[];
  rows: any[];
}
interface ColumnMapping {
  [key: string]: string;
}
const REQUIRED_FIELDS = [
  "firstName",
  "lastName",
  "address",
  "city",
  "state",
  "zipCode",
];
const OPTIONAL_FIELDS = [
  "company",
  "email",
  "phone",
  "industry",
  "position",
  "revenue",
  "employees",
  "website",
  "notes",
  "customField1",
  "customField2",
  "customField3",
];
export default function CSVUploadPage() {
  const [csvData, setCsvData] = useState<CSVData | null>(null);
  const [columnMapping, setColumnMapping] = useState<ColumnMapping>({});
  const [step, setStep] = useState<
    "upload" | "mapping" | "preview" | "processing"
  >("upload");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      Papa.parse(file, {
        complete: (result) => {
          const headers = result.data[0] as string[];
          const rows = result.data
            .slice(1)
            .filter((row: any) =>
              row.some((cell: any) => cell && cell.toString().trim()),
            );
          setCsvData({ headers, rows });
          autoMapColumns(headers);
          setStep("mapping");
        },
        header: false,
        skipEmptyLines: true,
      });
    }
  }, []);
  const autoMapColumns = (headers: string[]) => {
    const mapping: ColumnMapping = {};
    headers.forEach((header, index) => {
      const normalizedHeader = header.toLowerCase().trim();
      // Auto-map common field names
      if (
        normalizedHeader.includes("first") &&
        normalizedHeader.includes("name")
      ) {
        mapping.firstName = header;
      } else if (
        normalizedHeader.includes("last") &&
        normalizedHeader.includes("name")
      ) {
        mapping.lastName = header;
      } else if (
        normalizedHeader === "name" ||
        normalizedHeader === "fullname"
      ) {
        mapping.fullName = header;
      } else if (
        normalizedHeader.includes("address") ||
        normalizedHeader.includes("street")
      ) {
        mapping.address = header;
      } else if (normalizedHeader === "city") {
        mapping.city = header;
      } else if (
        normalizedHeader === "state" ||
        normalizedHeader === "province"
      ) {
        mapping.state = header;
      } else if (
        normalizedHeader.includes("zip") ||
        normalizedHeader.includes("postal")
      ) {
        mapping.zipCode = header;
      } else if (
        normalizedHeader.includes("company") ||
        normalizedHeader.includes("business")
      ) {
        mapping.company = header;
      } else if (normalizedHeader.includes("email")) {
        mapping.email = header;
      } else if (
        normalizedHeader.includes("phone") ||
        normalizedHeader.includes("tel")
      ) {
        mapping.phone = header;
      }
    });
    setColumnMapping(mapping);
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "text/csv": [".csv"],
      "application/vnd.ms-excel": [".xls"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
        ".xlsx",
      ],
    },
    maxFiles: 1,
  });
  const handleMappingChange = (field: string, csvColumn: string) => {
    setColumnMapping((prev) => ({
      ...prev,
      [field]: csvColumn,
    }));
  };
  const validateMapping = () => {
    const missingRequired = REQUIRED_FIELDS.filter(
      (field) => !columnMapping[field],
    );
    if (missingRequired.length > 0) {
      alert(
        `Please map the following required fields: ${missingRequired.join(", ")}`,
      );
      return false;
    }
    return true;
  };
  const handlePreview = () => {
    if (validateMapping()) {
      setStep("preview");
      // Select all rows by default
      setSelectedRows(csvData?.rows.map((_, index) => index) || []);
    }
  };
  const toggleRowSelection = (index: number) => {
    setSelectedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };
  const selectAllRows = () => {
    setSelectedRows(csvData?.rows.map((_, index) => index) || []);
  };
  const deselectAllRows = () => {
    setSelectedRows([]);
  };
  const getMappedValue = (row: any[], field: string) => {
    const columnName = columnMapping[field];
    if (!columnName || !csvData) return "";
    const columnIndex = csvData.headers.indexOf(columnName);
    return columnIndex >= 0 ? row[columnIndex] : "";
  };
  const handleProcessData = async () => {
    setStep("processing");
    setUploadProgress(0);
    const processedData = selectedRows.map((index) => {
      const row = csvData!.rows[index];
      const mappedRow: any = {};
      [...REQUIRED_FIELDS, ...OPTIONAL_FIELDS].forEach((field) => {
        if (columnMapping[field]) {
          mappedRow[field] = getMappedValue(row, field);
        }
      });
      return mappedRow;
    });
    // Simulate processing with progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Here you would save to database
          setTimeout(() => {
            alert(`Successfully imported ${selectedRows.length} leads!`);
            // Reset for next upload
            setStep("upload");
            setCsvData(null);
            setColumnMapping({});
            setSelectedRows([]);
            setUploadProgress(0);
          }, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };
  return (
    <div >
      <Navigation variant="app" />
      <div >
        <div >
          <h1 >Import Texts</h1>
          <p >
            Upload your CSV file to import leads for direct mail campaigns
          </p>
        </div>
        {/* Progress Steps */}
        <div >
          <div >
            <div
              className={`flex items-center ${step === "upload" ? "text-blue-600" : "text-gray-400"}`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                  step === "upload"
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-300 bg-black"
                }`}
              >
                1
              </div>
              <span >Upload</span>
            </div>
            <div ></div>
            <div
              className={`flex items-center ${step === "mapping" ? "text-blue-600" : "text-gray-400"}`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                  step === "mapping"
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-300 bg-black"
                }`}
              >
                2
              </div>
              <span >Map Columns</span>
            </div>
            <div ></div>
            <div
              className={`flex items-center ${step === "preview" ? "text-blue-600" : "text-gray-400"}`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                  step === "preview"
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-300 bg-black"
                }`}
              >
                3
              </div>
              <span >Preview</span>
            </div>
          </div>
        </div>
        <AnimatePresence mode="wait">
          {/* Upload Step */}
          {step === "upload" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors ${
                  isDragActive
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                <input {...getInputProps()} />
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                {isDragActive ? (
                  <p >Drop the CSV file here...</p>
                ) : (
                  <>
                    <p >
                      Drag & drop your CSV file here
                    </p>
                    <p >
                      or click to select a file
                    </p>
                    <button >
                      Choose File
                    </button>
                  </>
                )}
              </div>
              <div >
                <h3 >
                  Required Fields
                </h3>
                <p >
                  Your CSV should include the following columns:
                </p>
                <div >
                  {REQUIRED_FIELDS.map((field) => (
                    <div key={field} >
                      <span ></span>
                      <span >
                        {field.replace(/([A-Z])/g, " $1").trim()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
          {/* Mapping Step */}
          {step === "mapping" && csvData && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <h2 >Map Your Columns</h2>
              <div >
                <div>
                  <h3 >
                    Required Fields
                  </h3>
                  <div >
                    {REQUIRED_FIELDS.map((field) => (
                      <div key={field} >
                        <label >
                          {field.replace(/([A-Z])/g, " $1").trim()}:
                        </label>
                        <select
                          value={columnMapping[field] || ""}
                          onChange={(e) =>
                            handleMappingChange(field, e.target.value)
                          }
                        >
                          <option value="">-- Select Column --</option>
                          {csvData.headers.map((header) => (
                            <option key={header} value={header}>
                              {header}
                            </option>
                          ))}
                        </select>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 >
                    Optional Fields
                  </h3>
                  <div >
                    {OPTIONAL_FIELDS.map((field) => (
                      <div key={field} >
                        <label >
                          {field.replace(/([A-Z])/g, " $1").trim()}:
                        </label>
                        <select
                          value={columnMapping[field] || ""}
                          onChange={(e) =>
                            handleMappingChange(field, e.target.value)
                          }
                        >
                          <option value="">-- Select Column --</option>
                          {csvData.headers.map((header) => (
                            <option key={header} value={header}>
                              {header}
                            </option>
                          ))}
                        </select>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div >
                <button
                  onClick={() => setStep("upload")}
                >
                  Back
                </button>
                <button
                  onClick={handlePreview}
                >
                  Preview Import
                </button>
              </div>
            </motion.div>
          )}
          {/* Preview Step */}
          {step === "preview" && csvData && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div >
                <h2 >Preview Import</h2>
                <div >
                  <span >
                    {selectedRows.length} of {csvData.rows.length} selected
                  </span>
                  <button
                    onClick={selectAllRows}
                  >
                    Select All
                  </button>
                  <button
                    onClick={deselectAllRows}
                  >
                    Deselect All
                  </button>
                </div>
              </div>
              <div >
                <table >
                  <thead >
                    <tr>
                      <th >
                        <input
                          type="checkbox"
                          checked={selectedRows.length === csvData.rows.length}
                          onChange={() =>
                            selectedRows.length === csvData.rows.length
                              ? deselectAllRows()
                              : selectAllRows()
                          }
                        />
                      </th>
                      <th >
                        Name
                      </th>
                      <th >
                        Address
                      </th>
                      <th >
                        Citye ZIP
                      </th>
                      {columnMapping.company && (
                        <th >
                          Company
                        </th>
                      )}
                    </tr>
                  </thead>
                  <tbody >
                    {csvData.rows.slice(0, 10).map((row, index) => (
                      <tr
                        key={index}
                        className={
                          selectedRows.includes(index) ? "bg-blue-50" : ""
                        }
                      >
                        <td >
                          <input
                            type="checkbox"
                            checked={selectedRows.includes(index)}
                            onChange={() => toggleRowSelection(index)}
                          />
                        </td>
                        <td >
                          {getMappedValue(row, "firstName")}{" "}
                          {getMappedValue(row, "lastName")}
                        </td>
                        <td >
                          {getMappedValue(row, "address")}
                        </td>
                        <td >
                          {getMappedValue(row, "city")},{" "}
                          {getMappedValue(row, "state")}{" "}
                          {getMappedValue(row, "zipCode")}
                        </td>
                        {columnMapping.company && (
                          <td >
                            {getMappedValue(row, "company")}
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {csvData.rows.length > 10 && (
                <p >
                  Showing first 10 of {csvData.rows.length} leads
                </p>
              )}
              <div >
                <button
                  onClick={() => setStep("mapping")}
                >
                  Back
                </button>
                <button
                  onClick={handleProcessData}
                  disabled={selectedRows.length === 0}
                >
                  Import {selectedRows.length} Texts
                </button>
              </div>
            </motion.div>
          )}
          {/* Processing Step */}
          {step === "processing" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div >
                <div >
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <h3 >
                    Importing Texts...
                  </h3>
                  <p >
                    Please wait while we process your data
                  </p>
                </div>
                <div >
                  <div
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
                <p >
                  {uploadProgress}% Complete
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}