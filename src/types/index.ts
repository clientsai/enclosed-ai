export type OfferType =
  | 'free_consultation'
  | 'trial_offer'
  | 'discount_offer'
  | 'exclusive_access'
  | 'free_audit'
  | 'demo_request'
  | 'limited_time_offer'
  | 'free_resource';

export type CampaignStatus = 'draft' | 'scheduled' | 'processing' | 'sent' | 'completed' | 'failed';

export type MailType = 'letter' | 'postcard_4x6' | 'postcard_6x11';

export interface User {
  id: string;
  email: string;
  name: string;
  company?: string;
  api_key_hash?: string;
  credits_balance: number;
  total_pieces_sent: number;
  created_at: string;
  updated_at: string;
}

export interface Campaign {
  id: string;
  user_id: string;
  name: string;
  offer_type: OfferType;
  template_id?: string;
  recipient_count: number;
  cost_per_piece: number;
  total_cost: number;
  status: CampaignStatus;
  mail_type: MailType;
  scheduled_date?: string;
  sent_date?: string;
  created_at: string;
}

export interface Recipient {
  id: string;
  campaign_id: string;
  name: string;
  company?: string;
  address_line1: string;
  address_line2?: string;
  city: string;
  state: string;
  zip_code: string;
  country: string;
  custom_variables: Record<string, unknown>;
  personalized_content?: string;
  mail_provider_id?: string;
  delivery_status: string;
  delivered_at?: string;
  created_at: string;
}

export interface Template {
  id: string;
  user_id?: string;
  name: string;
  offer_type: OfferType;
  content: string;
  variables: string[];
  is_default: boolean;
  created_at: string;
}

export interface ApiClient {
  id: string;
  user_id: string;
  name: string;
  api_key: string;
  api_key_hash: string;
  webhook_url?: string;
  rate_limit: number;
  is_active: boolean;
  last_used_at?: string;
  created_at: string;
}

export interface CSVMapping {
  name: string;
  company?: string;
  address_line1: string;
  address_line2?: string;
  city: string;
  state: string;
  zip_code: string;
}

export const OFFER_DETAILS = {
  free_consultation: {
    title: 'Free Consultation',
    description: 'Personal meeting to discuss needs',
    icon: '📅',
  },
  trial_offer: {
    title: 'Trial Offer',
    description: 'Try the service free for X days',
    icon: '🎯',
  },
  discount_offer: {
    title: 'Discount Offer',
    description: 'Special pricing for new customers',
    icon: '💰',
  },
  exclusive_access: {
    title: 'Exclusive Access',
    description: 'VIP or early access to products/services',
    icon: '🔑',
  },
  free_audit: {
    title: 'Free Audit',
    description: 'Complimentary review of current situation',
    icon: '🔍',
  },
  demo_request: {
    title: 'Demo Request',
    description: 'Product demonstration scheduling',
    icon: '🖥️',
  },
  limited_time_offer: {
    title: 'Limited Time Offer',
    description: 'Urgency-based special deal',
    icon: '⏰',
  },
  free_resource: {
    title: 'Free Resource',
    description: 'Valuable guide/report/tool',
    icon: '📚',
  },
};

export const PRICING = {
  letter: {
    base: 0.89,
    bulk_500: 0.79,
    bulk_5000: 0.69,
  },
  postcard_4x6: {
    base: 0.55,
    bulk_500: 0.48,
    bulk_5000: 0.42,
  },
  postcard_6x11: {
    base: 0.75,
    bulk_500: 0.65,
    bulk_5000: 0.58,
  },
};