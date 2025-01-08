import { CurrencyEnum, PaymentMethod as MonitePaymentMethod, ReceivablesStatusEnum } from '@monite/sdk-api';

export type PaymentMethod = 'ach' | 'wire' | 'international_wire' | 'card' | 'wonderpay';
export type PaymentTerm = '30' | '60' | '90';

export interface WonderPayCapitalTerms {
  status: 'approved' | 'pending' | 'rejected';
  availableTerms: PaymentTerm[];
  interestRates: Record<PaymentTerm, number>;
  limit: number;
}

export interface Transaction {
  id: string;
  vendorName: string;
  invoiceNumber: string;
  status: string;
  dueDate: string;
  amount: number;
  currency: string;
  date: string;
  recipient: string;
  description?: string;
  value?: number;
}

export interface Bill {
  id: string;
  user_id: string;
  vendor_name: string;
  invoice_number?: string;
  amount: number;
  currency?: string;
  status?: string;
  due_date: string;
  description?: string;
  created_at: string;
  updated_at: string;
}
