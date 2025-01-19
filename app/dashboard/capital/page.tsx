'use client';

import dynamic from 'next/dynamic';
import { Loader2 } from "lucide-react";

const CapitalPage = dynamic(
  () => import('@/components/capital/CapitalPage').then(mod => mod.CapitalPage),
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
  return <CapitalPage />;
}
