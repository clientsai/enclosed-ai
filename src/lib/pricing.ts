import { PRICING, MailType } from '@/types';

export function calculateCampaignCost(
  mailType: MailType,
  recipientCount: number
): { perPiece: number; total: number; discount: number } {
  const pricing = PRICING[mailType];

  let perPiece = pricing.base;
  let discount = 0;

  if (recipientCount >= 5000) {
    perPiece = pricing.bulk_5000;
    discount = 20;
  } else if (recipientCount >= 500) {
    perPiece = pricing.bulk_500;
    discount = 10;
  }

  const total = recipientCount * perPiece;

  return {
    perPiece: Math.round(perPiece * 100) / 100,
    total: Math.round(total * 100) / 100,
    discount,
  };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}