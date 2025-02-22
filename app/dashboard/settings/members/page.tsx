'use client';

import dynamic from 'next/dynamic';
import { Loader2 } from "lucide-react";

const MembersSettings = dynamic(
  () => import('@/components/settings/MembersSettings').then(mod => mod.MembersSettings),
  {
    loading: () => (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    ),
    ssr: false
  }
);

export default function MembersSettingsPage() {
  return <MembersSettings />;
}
