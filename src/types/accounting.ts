export interface AccountingIntegration {
  id: string;
  type: 'quickbooks' | 'xero' | 'sage';
  status: 'active' | 'inactive' | 'pending';
  metadata?: Record<string, unknown>;
}