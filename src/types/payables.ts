export interface Payable {
  id: string;
  amount: number;
  currency: string;
  due_date: string;
  status: 'draft' | 'pending' | 'paid' | 'overdue';
  vendor_name: string;
  invoice_number: string;
}