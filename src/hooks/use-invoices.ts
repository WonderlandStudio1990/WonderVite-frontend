import { useQuery } from '@tanstack/react-query';
import type { InvoiceData } from '@/types/invoice';

interface UseInvoicesOptions {
  status?: InvoiceData['status'];
  limit?: number;
}

export function useInvoices({ status, limit }: UseInvoicesOptions = {}) {
  return useQuery({
    queryKey: ['invoices', { status, limit }],
    queryFn: async () => {
      // Implementation...
      return [] as InvoiceData[];
    }
  });
}