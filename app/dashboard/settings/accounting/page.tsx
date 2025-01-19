'use client';

import dynamic from 'next/dynamic';
import { Loader2 } from "lucide-react";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/config/queryClient';

const AccountingSettingsPage = dynamic(
  () => import('@/components/settings/AccountingSettings').then(mod => mod.AccountingSettings),
  {
    loading: () => (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    ),
    ssr: false
  }
);

export default function Page() {
  return (
    <QueryClientProvider client={queryClient}>
      <AccountingSettingsPage />
    </QueryClientProvider>
  );
}
