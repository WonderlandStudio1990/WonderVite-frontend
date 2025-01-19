'use client';

import React from 'react';
import { OverviewSection } from './OverviewSection';
import { useMoniteDashboard } from '@/hooks/use-monite-dashboard';
import type { Transaction } from '@/types/financial';

export default function DashboardPage() {
  const { dashboardData, isLoading } = useMoniteDashboard();
  const transactions = React.useMemo<Transaction[]>(() => {
    if (!dashboardData) return [];
    return dashboardData.map(t => ({
      id: t.id,
      amount: t.amount,
      currency: t.currency || 'USD',
      date: t.created_at,
      description: t.notes || undefined,
      status: (t.status as 'pending' | 'completed' | 'failed') || 'pending',
      type: t.amount >= 0 ? 'income' : 'expense',
      metadata: t.items ? t.items as Record<string, unknown> : undefined
    }));
  }, [dashboardData]);

  return (
    <div className="container mx-auto py-8">
      <OverviewSection
        transactions={transactions}
        isLoading={isLoading}
      />
    </div>
  );
}
