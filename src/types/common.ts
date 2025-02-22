export type PaymentMethod = 'card' | 'bank' | 'ach' | 'wire' | 'international_wire' | 'wonderpay';
export type CurrencyEnum = 'USD' | 'EUR' | 'GBP';
export type PaymentTerm = '30' | '60' | '90';

export interface PaymentDetails {
  method: PaymentMethod;
  term?: PaymentTerm;
  amount: number;
  currency: CurrencyEnum;
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
}

export interface Card {
  id: string;
  type: 'credit' | 'debit';
  status: 'active' | 'inactive';
  lastFour: string;
  expiryMonth: number;
  expiryYear: number;
  cardholderName: string;
}