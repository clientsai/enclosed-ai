"use client";

import { useState, useCallback, useRef } from "react";
import { useDropzone } from "react-dropzone";
import Papa from "papaparse";
import { motion, AnimatePresence } from "framer-motion";

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
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Import Leads</h1>
          <p className="text-gray-600 mt-2">
            Upload your CSV file to import leads for direct mail campaigns
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between max-w-3xl">
            <div
              className={`flex items-center ${step === "upload" ? "text-blue-600" : "text-gray-400"}`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                  step === "upload"
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-300 bg-white"
                }`}
              >
                1
              </div>
              <span className="ml-2 font-medium">Upload</span>
            </div>
            <div className="flex-1 h-0.5 bg-gray-300 mx-4"></div>
            <div
              className={`flex items-center ${step === "mapping" ? "text-blue-600" : "text-gray-400"}`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                  step === "mapping"
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-300 bg-white"
                }`}
              >
                2
              </div>
              <span className="ml-2 font-medium">Map Columns</span>
            </div>
            <div className="flex-1 h-0.5 bg-gray-300 mx-4"></div>
            <div
              className={`flex items-center ${step === "preview" ? "text-blue-600" : "text-gray-400"}`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                  step === "preview"
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-300 bg-white"
                }`}
              >
                3
              </div>
              <span className="ml-2 font-medium">Preview</span>
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
              className="bg-white rounded-lg shadow-sm p-8"
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
                  className="mx-auto h-12 w-12 text-gray-400 mb-4"
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
                  <p className="text-lg">Drop the CSV file here...</p>
                ) : (
                  <>
                    <p className="text-lg mb-2">
                      Drag & drop your CSV file here
                    </p>
                    <p className="text-sm text-gray-500">
                      or click to select a file
                    </p>
                    <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Choose File
                    </button>
                  </>
                )}
              </div>

              <div className="mt-8 bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Required Fields
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Your CSV should include the following columns:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {REQUIRED_FIELDS.map((field) => (
                    <div key={field} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      <span className="text-sm">
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
              className="bg-white rounded-lg shadow-sm p-8"
            >
              <h2 className="text-xl font-semibold mb-6">Map Your Columns</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-4">
                    Required Fields
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {REQUIRED_FIELDS.map((field) => (
                      <div key={field} className="flex items-center space-x-3">
                        <label className="w-32 text-sm font-medium text-gray-700">
                          {field.replace(/([A-Z])/g, " $1").trim()}:
                        </label>
                        <select
                          value={columnMapping[field] || ""}
                          onChange={(e) =>
                            handleMappingChange(field, e.target.value)
                          }
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  <h3 className="font-medium text-gray-900 mb-4">
                    Optional Fields
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {OPTIONAL_FIELDS.map((field) => (
                      <div key={field} className="flex items-center space-x-3">
                        <label className="w-32 text-sm text-gray-700">
                          {field.replace(/([A-Z])/g, " $1").trim()}:
                        </label>
                        <select
                          value={columnMapping[field] || ""}
                          onChange={(e) =>
                            handleMappingChange(field, e.target.value)
                          }
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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

              <div className="mt-8 flex justify-between">
                <button
                  onClick={() => setStep("upload")}
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handlePreview}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
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
              className="bg-white rounded-lg shadow-sm p-8"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Preview Import</h2>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">
                    {selectedRows.length} of {csvData.rows.length} selected
                  </span>
                  <button
                    onClick={selectAllRows}
                    className="text-sm text-blue-600 hover:text-blue-700"
                  >
                    Select All
                  </button>
                  <button
                    onClick={deselectAllRows}
                    className="text-sm text-blue-600 hover:text-blue-700"
                  >
                    Deselect All
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <input
                          type="checkbox"
                          checked={selectedRows.length === csvData.rows.length}
                          onChange={() =>
                            selectedRows.length === csvData.rows.length
                              ? deselectAllRows()
                              : selectAllRows()
                          }
                          className="rounded border-gray-300"
                        />
                      </th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Address
                      </th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        City, State ZIP
                      </th>
                      {columnMapping.company && (
                        <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Company
                        </th>
                      )}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {csvData.rows.slice(0, 10).map((row, index) => (
                      <tr
                        key={index}
                        className={
                          selectedRows.includes(index) ? "bg-blue-50" : ""
                        }
                      >
                        <td className="px-3 py-3">
                          <input
                            type="checkbox"
                            checked={selectedRows.includes(index)}
                            onChange={() => toggleRowSelection(index)}
                            className="rounded border-gray-300"
                          />
                        </td>
                        <td className="px-3 py-3 text-sm">
                          {getMappedValue(row, "firstName")}{" "}
                          {getMappedValue(row, "lastName")}
                        </td>
                        <td className="px-3 py-3 text-sm">
                          {getMappedValue(row, "address")}
                        </td>
                        <td className="px-3 py-3 text-sm">
                          {getMappedValue(row, "city")},{" "}
                          {getMappedValue(row, "state")}{" "}
                          {getMappedValue(row, "zipCode")}
                        </td>
                        {columnMapping.company && (
                          <td className="px-3 py-3 text-sm">
                            {getMappedValue(row, "company")}
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {csvData.rows.length > 10 && (
                <p className="mt-4 text-sm text-gray-500 text-center">
                  Showing first 10 of {csvData.rows.length} leads
                </p>
              )}

              <div className="mt-8 flex justify-between">
                <button
                  onClick={() => setStep("mapping")}
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleProcessData}
                  disabled={selectedRows.length === 0}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Import {selectedRows.length} Leads
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
              className="bg-white rounded-lg shadow-sm p-8"
            >
              <div className="max-w-md mx-auto text-center">
                <div className="mb-8">
                  <svg
                    className="w-16 h-16 text-blue-600 mx-auto mb-4 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">
                    Importing Leads...
                  </h3>
                  <p className="text-gray-600">
                    Please wait while we process your data
                  </p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                  <div
                    className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500">
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
