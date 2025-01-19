'use client';

import dynamic from 'next/dynamic';
import { Loader2 } from "lucide-react";

const AddressSettings = dynamic(
  () => import('@/components/settings/AddressSettings').then(mod => mod.AddressSettings),
  {
    loading: () => (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    ),
    ssr: false
  }
);

export default function AddressSettingsPage() {
  return <AddressSettings />;
}
