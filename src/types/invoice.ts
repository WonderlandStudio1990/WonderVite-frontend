export interface CompanyDetails {
  name: string;
  address: string;
  email: string;
  phone: string;
  taxId?: string;
}

export interface PaymentDetails {
  bankName?: string;
  accountNumber?: string;
  routingNumber?: string;
  paymentMethod?: 'bank' | 'card' | 'other';
  notes?: string;
}

export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  amount: number;
}

export interface InvoiceData {
  items: InvoiceItem[];
  subtotal: number;
  tax: number;
  total: number;
  dueDate: string;
  companyDetails: CompanyDetails;
  paymentDetails?: PaymentDetails;
  status: 'draft' | 'pending' | 'paid';
  createdAt: string;
  updatedAt: string;
}

export interface Invoice extends InvoiceData {
  id: string;
}