import { InvoiceDetail } from '@/components/bill-pay/InvoiceDetail';

interface PageProps {
  params: Promise<{
    invoiceId: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  return <InvoiceDetail invoiceId={resolvedParams.invoiceId} />;
}

export const metadata = {
  title: 'Invoice Detail',
};
