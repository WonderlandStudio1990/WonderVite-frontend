'use client';

import dynamic from 'next/dynamic';
import { Loader2 } from "lucide-react";

const Login = dynamic(
  () => import('@/components/auth/Login'),
  {
    loading: () => (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    ),
    ssr: false
  }
);

export default function LoginPage() {
  return <Login />;
}
