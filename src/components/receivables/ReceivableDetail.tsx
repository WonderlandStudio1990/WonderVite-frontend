'use client';

import { useEffect, useState } from 'react';
import { useMoniteClient } from '@/hooks/use-monite-client';
import { Card } from '@/components/ui/card';

interface ReceivableDetailProps {
  invoiceId: string;
}

export function ReceivableDetail({ invoiceId }: ReceivableDetailProps) {
  const [loading, setLoading] = useState(true);
  const { handleApiCall } = useMoniteClient();

  useEffect(() => {
    async function fetchReceivable() {
      try {
        await handleApiCall(`/receivables/${invoiceId}`);
      } catch (_error) {
        // Error handling will be implemented later
      } finally {
        setLoading(false);
      }
    }
    fetchReceivable();
  }, [invoiceId, handleApiCall]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="p-6">
      <h1>Receivable Details</h1>
      <p>ID: {invoiceId}</p>
      {/* Additional details will be added here */}
    </Card>
  );
}
