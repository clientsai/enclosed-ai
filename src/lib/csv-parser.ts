import Papa from 'papaparse';
import { CSVMapping } from '@/types';

export interface ParsedRecipient {
  name: string;
  company?: string;
  address_line1: string;
  address_line2?: string;
  city: string;
  state: string;
  zip_code: string;
  [key: string]: any;
}

export function parseCSV(file: File): Promise<{ data: any[]; headers: string[] }> {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const headers = results.meta.fields || [];
        resolve({ data: results.data, headers });
      },
      error: (error) => {
        reject(error);
      },
    });
  });
}

export function mapCSVToRecipients(
  data: any[],
  mapping: CSVMapping
): ParsedRecipient[] {
  return data.map((row) => {
    const recipient: ParsedRecipient = {
      name: row[mapping.name] || '',
      company: mapping.company ? row[mapping.company] : undefined,
      address_line1: row[mapping.address_line1] || '',
      address_line2: mapping.address_line2 ? row[mapping.address_line2] : undefined,
      city: row[mapping.city] || '',
      state: row[mapping.state] || '',
      zip_code: row[mapping.zip_code] || '',
    };

    // Add any unmapped fields as custom variables
    Object.keys(row).forEach((key) => {
      if (!Object.values(mapping).includes(key)) {
        recipient[key] = row[key];
      }
    });

    return recipient;
  });
}

export function validateAddress(recipient: ParsedRecipient): string[] {
  const errors: string[] = [];

  if (!recipient.name || recipient.name.trim() === '') {
    errors.push('Name is required');
  }

  if (!recipient.address_line1 || recipient.address_line1.trim() === '') {
    errors.push('Address is required');
  }

  if (!recipient.city || recipient.city.trim() === '') {
    errors.push('City is required');
  }

  if (!recipient.state || recipient.state.trim() === '') {
    errors.push('State is required');
  }

  if (!recipient.zip_code || recipient.zip_code.trim() === '') {
    errors.push('ZIP code is required');
  }

  // Basic ZIP code validation
  const zipRegex = /^\d{5}(-\d{4})?$/;
  if (recipient.zip_code && !zipRegex.test(recipient.zip_code.trim())) {
    errors.push('Invalid ZIP code format');
  }

  // State code validation (2 letters)
  if (recipient.state && recipient.state.trim().length !== 2) {
    errors.push('State must be a 2-letter code (e.g., CA, NY)');
  }

  return errors;
}

export function getIntelligentMapping(headers: string[]): Partial<CSVMapping> {
  const mapping: Partial<CSVMapping> = {};

  // Common field name patterns
  const patterns = {
    name: /^(name|full[\s_]?name|recipient|contact)$/i,
    company: /^(company|business|organization|org|firm)$/i,
    address_line1: /^(address|address[\s_]?1|address[\s_]?line[\s_]?1|street|street[\s_]?address)$/i,
    address_line2: /^(address[\s_]?2|address[\s_]?line[\s_]?2|apt|apartment|suite|unit)$/i,
    city: /^(city|town)$/i,
    state: /^(state|st|province)$/i,
    zip_code: /^(zip|zip[\s_]?code|postal|postal[\s_]?code|postcode)$/i,
  };

  headers.forEach((header) => {
    const normalizedHeader = header.toLowerCase().trim();

    for (const [field, pattern] of Object.entries(patterns)) {
      if (pattern.test(normalizedHeader)) {
        (mapping as any)[field] = header;
        break;
      }
    }
  });

  return mapping;
}