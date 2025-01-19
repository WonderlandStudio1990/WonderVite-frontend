'use client';

import dynamic from 'next/dynamic';
import { Loader2 } from "lucide-react";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/config/queryClient';

const OrganizationSettingsPage = dynamic(
  () => import('@/components/settings/OrganizationSettings').then(mod => mod.OrganizationSettings),
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
      <OrganizationSettingsPage />
    </QueryClientProvider>
  );
}
