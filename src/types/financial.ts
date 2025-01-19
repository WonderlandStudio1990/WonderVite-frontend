export interface Transaction {
  id: string;
  amount: number;
  currency: string;
  date: string;
  description?: string;
  status: 'pending' | 'completed' | 'failed';
  type: 'income' | 'expense';
  metadata?: Record<string, unknown>;
}

export interface BankAccount {
  id: string;
  accountNumber: string;
  routingNumber: string;
  bankName: string;
  accountType: 'checking' | 'savings';
  status: 'active' | 'pending' | 'inactive';
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}