import { z } from 'zod';

// Common validation patterns
export const emailSchema = z.string().email('Please enter a valid email address');
export const phoneSchema = z.string().regex(/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number').optional();
export const zipCodeSchema = z.string().regex(/^\d{5}(-\d{4})?$/, 'Please enter a valid ZIP code');
export const urlSchema = z.string().url('Please enter a valid URL').optional().or(z.literal(''));

// User validation schemas
export const createUserSchema = z.object({
  email: emailSchema,
  name: z.string().min(1, 'Name is required').max(255, 'Name is too long'),
  company: z.string().max(255, 'Company name is too long').optional(),
});

export const updateUserSchema = z.object({
  name: z.string().min(1, 'Name is required').max(255, 'Name is too long').optional(),
  company: z.string().max(255, 'Company name is too long').optional(),
}).refine(data => Object.keys(data).length > 0, {
  message: 'At least one field must be provided for update'
});

// Campaign validation schemas
export const offerTypeSchema = z.enum([
  'free_consultation',
  'trial_offer',
  'discount_offer',
  'exclusive_access',
  'free_audit',
  'demo_request',
  'limited_time_offer',
  'free_resource',
]);

export const mailTypeSchema = z.enum(['letter', 'postcard_4x6', 'postcard_6x11']);
export const campaignStatusSchema = z.enum(['draft', 'scheduled', 'processing', 'sent', 'completed', 'failed']);

export const recipientSchema = z.object({
  name: z.string().min(1, 'Name is required').max(255, 'Name is too long'),
  company: z.string().max(255, 'Company name is too long').optional(),
  address_line1: z.string().min(1, 'Address is required').max(255, 'Address is too long'),
  address_line2: z.string().max(255, 'Address line 2 is too long').optional(),
  city: z.string().min(1, 'City is required').max(100, 'City name is too long'),
  state: z.string().min(1, 'State is required').max(50, 'State name is too long'),
  zip_code: zipCodeSchema,
  custom_variables: z.record(z.unknown()).optional(),
});

export const createCampaignSchema = z.object({
  name: z.string().min(1, 'Campaign name is required').max(255, 'Campaign name is too long'),
  offer_type: offerTypeSchema,
  mail_type: mailTypeSchema.default('letter'),
  recipients: z.array(recipientSchema).min(1, 'At least one recipient is required').max(10000, 'Maximum 10,000 recipients allowed'),
  variables: z.record(z.unknown()).optional(),
  scheduled_date: z.string().datetime().optional(),
});

export const updateCampaignSchema = z.object({
  name: z.string().min(1, 'Campaign name is required').max(255, 'Campaign name is too long').optional(),
  offer_type: offerTypeSchema.optional(),
  mail_type: mailTypeSchema.optional(),
  status: campaignStatusSchema.optional(),
  scheduled_date: z.string().datetime().optional(),
}).refine(data => Object.keys(data).length > 0, {
  message: 'At least one field must be provided for update'
});

// Template validation schemas
export const createTemplateSchema = z.object({
  name: z.string().min(1, 'Template name is required').max(255, 'Template name is too long'),
  offer_type: offerTypeSchema,
  content: z.string().min(10, 'Template content must be at least 10 characters').max(10000, 'Template content is too long'),
  variables: z.array(z.string()).optional().default([]),
});

export const updateTemplateSchema = z.object({
  name: z.string().min(1, 'Template name is required').max(255, 'Template name is too long').optional(),
  offer_type: offerTypeSchema.optional(),
  content: z.string().min(10, 'Template content must be at least 10 characters').max(10000, 'Template content is too long').optional(),
  variables: z.array(z.string()).optional(),
}).refine(data => Object.keys(data).length > 0, {
  message: 'At least one field must be provided for update'
});

// API Client validation schemas
export const createApiClientSchema = z.object({
  name: z.string().min(1, 'Client name is required').max(255, 'Client name is too long'),
  webhook_url: urlSchema,
  rate_limit: z.number().int().min(1, 'Rate limit must be at least 1').max(100000, 'Rate limit is too high').default(1000),
});

export const updateApiClientSchema = z.object({
  name: z.string().min(1, 'Client name is required').max(255, 'Client name is too long').optional(),
  webhook_url: urlSchema,
  rate_limit: z.number().int().min(1, 'Rate limit must be at least 1').max(100000, 'Rate limit is too high').optional(),
  is_active: z.boolean().optional(),
}).refine(data => Object.keys(data).length > 0, {
  message: 'At least one field must be provided for update'
});

// Billing validation schemas
export const creditPackageSchema = z.object({
  package_id: z.string().min(1, 'Package ID is required'),
  credits: z.number().int().min(1, 'Credits must be at least 1'),
  amount: z.number().min(0.01, 'Amount must be at least $0.01'),
});

// Query parameter validation
export const paginationSchema = z.object({
  limit: z.coerce.number().int().min(1, 'Limit must be at least 1').max(100, 'Limit cannot exceed 100').default(20),
  offset: z.coerce.number().int().min(0, 'Offset cannot be negative').default(0),
});

export const campaignQuerySchema = paginationSchema.extend({
  status: campaignStatusSchema.optional(),
  offer_type: offerTypeSchema.optional(),
});

export const recipientQuerySchema = paginationSchema.extend({
  campaign_id: z.string().uuid('Invalid campaign ID').optional(),
});

// File upload validation
export const csvUploadSchema = z.object({
  file: z.instanceof(File, { message: 'File is required' }),
  campaign_id: z.string().uuid('Invalid campaign ID').optional(),
}).refine(data => {
  const allowedTypes = ['text/csv', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
  return allowedTypes.includes(data.file.type);
}, {
  message: 'File must be a CSV or Excel file',
}).refine(data => {
  // 10MB limit
  return data.file.size <= 10 * 1024 * 1024;
}, {
  message: 'File size must be less than 10MB',
});

// Authentication validation
export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, 'Password is required'),
});

export const signupSchema = z.object({
  email: emailSchema,
  password: z.string().min(8, 'Password must be at least 8 characters').max(100, 'Password is too long'),
  name: z.string().min(1, 'Name is required').max(255, 'Name is too long'),
  company: z.string().max(255, 'Company name is too long').optional(),
});

export const resetPasswordSchema = z.object({
  email: emailSchema,
});

export const updatePasswordSchema = z.object({
  current_password: z.string().min(1, 'Current password is required'),
  new_password: z.string().min(8, 'New password must be at least 8 characters').max(100, 'Password is too long'),
  confirm_password: z.string().min(1, 'Password confirmation is required'),
}).refine(data => data.new_password === data.confirm_password, {
  message: 'Passwords do not match',
  path: ['confirm_password'],
});

// Webhook validation
export const webhookEventSchema = z.object({
  event: z.enum(['campaign.created', 'campaign.sent', 'campaign.completed', 'mail.delivered', 'mail.failed']),
  campaign_id: z.string().uuid(),
  recipient_id: z.string().uuid().optional(),
  timestamp: z.string().datetime(),
  data: z.record(z.any()).optional(),
});

// Rate limiting validation
export const rateLimitSchema = z.object({
  requests_per_minute: z.number().int().min(1).max(1000).default(60),
  requests_per_hour: z.number().int().min(1).max(10000).default(1000),
  requests_per_day: z.number().int().min(1).max(100000).default(10000),
});

// Search and filter validation
export const searchSchema = z.object({
  query: z.string().min(1, 'Search query is required').max(255, 'Search query is too long'),
  fields: z.array(z.string()).optional(),
  exact_match: z.boolean().default(false),
});

// Utility functions for validation
export function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '');
}

export function validateEmail(email: string): boolean {
  return emailSchema.safeParse(email).success;
}

export function validateUrl(url: string): boolean {
  return urlSchema.safeParse(url).success;
}

export function validateZipCode(zipCode: string): boolean {
  return zipCodeSchema.safeParse(zipCode).success;
}

// Custom validation error formatter
export function formatValidationErrors(errors: z.ZodError) {
  return errors.errors.map(error => ({
    field: error.path.join('.'),
    message: error.message,
  }));
}

// Middleware validation helper
export function validateRequestBody<T>(schema: z.ZodSchema<T>) {
  return (body: unknown): T => {
    try {
      return schema.parse(body);
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw error;
      }
      throw new Error('Invalid request body');
    }
  };
}