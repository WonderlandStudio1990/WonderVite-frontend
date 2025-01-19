'use client';

import { useEffect, useState } from 'react';
import { useMoniteClient } from '@/hooks/use-monite-client';
import { Card } from '@/components/ui/card';

interface InvoiceDetailProps {
  invoiceId: string;
}

export function InvoiceDetail({ invoiceId }: InvoiceDetailProps) {
  const [loading, setLoading] = useState(true);
  const { handleApiCall } = useMoniteClient();

  useEffect(() => {
    async function fetchInvoice() {
      try {
        await handleApiCall(`/invoices/${invoiceId}`);
      } catch (_error) {
        // Error handling will be implemented later
      } finally {
        setLoading(false);
      }
    }
    fetchInvoice();
  }, [invoiceId, handleApiCall]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="p-6">
      <h1>Invoice Details</h1>
      <p>ID: {invoiceId}</p>
      {/* Additional details will be added here */}
    </Card>
  );
}
