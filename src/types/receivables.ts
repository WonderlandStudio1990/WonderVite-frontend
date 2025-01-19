export interface Receivable {
  id: string;
  amount: number;
  currency: string;
  dueDate: string;
  status: 'pending' | 'paid' | 'overdue';
  metadata?: Record<string, unknown>;
}