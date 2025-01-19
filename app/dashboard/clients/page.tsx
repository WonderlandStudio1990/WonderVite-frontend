'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/config/queryClient';
import Clients from '@/pages/Clients';

export default function ClientsPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <Clients />
    </QueryClientProvider>
  );
}
