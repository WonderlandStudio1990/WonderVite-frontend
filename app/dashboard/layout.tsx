import { Suspense } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';

interface DashboardLayoutWrapperProps {
  children: React.ReactNode;
}

export default function DashboardLayoutWrapper({ children }: DashboardLayoutWrapperProps) {
  return (
    <DashboardLayout>
      <Suspense fallback={<div>Loading...</div>}>
        {children}
      </Suspense>
    </DashboardLayout>
  );
}
