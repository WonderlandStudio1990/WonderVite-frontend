import { ReceivableDetail } from '@/components/receivables/ReceivableDetail';

interface PageProps {
  params: Promise<{
    invoiceId: string;
  }>;
}

export default async function ReceivableDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  return <ReceivableDetail invoiceId={resolvedParams.invoiceId} />;
}

export const metadata = {
  title: 'Receivable Detail',
};
