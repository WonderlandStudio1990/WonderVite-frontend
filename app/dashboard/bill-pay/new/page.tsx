'use client';

import { NewBill } from '@/components/bill-pay/NewBill';
import { useRouter } from 'next/navigation';

export default function NewBillPage() {
  const router = useRouter();

  const handleSubmit = async () => {
    // TODO: Implement bill submission
    router.push('/dashboard/bill-pay');
  };

  return <NewBill onSubmit={handleSubmit} />;
}
