'use client';

import React from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import OverviewCard from './overview/OverviewCard';
import PeriodSelector from './overview/PeriodSelector';
import TransactionsChart from './overview/TransactionsChart';
import { Transaction } from '@/types/financial';

interface OverviewSectionProps {
  transactions: Transaction[];
  isLoading: boolean;
}

export function OverviewSection({ transactions, isLoading }: OverviewSectionProps) {
  const [selectedPeriod, setSelectedPeriod] = React.useState('30');

  const metrics = React.useMemo(() => {
    const totalIncome = transactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);

    const totalExpenses = transactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + Math.abs(t.amount), 0);

    const netIncome = totalIncome - totalExpenses;

    return {
      totalIncome,
      totalExpenses,
      netIncome
    };
  }, [transactions]);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">Overview</h2>
          <p className="text-gray-500">Track your business performance</p>
        </div>
        <PeriodSelector 
          value={selectedPeriod}
          onChange={setSelectedPeriod}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <OverviewCard
          title="Total Income"
          amount={metrics.totalIncome}
          isLoading={isLoading}
          Icon={ArrowUp}
          trend="positive"
        />
        <OverviewCard
          title="Total Expenses"
          amount={metrics.totalExpenses}
          isLoading={isLoading}
          Icon={ArrowDown}
          trend="negative"
        />
        <OverviewCard
          title="Net Income"
          amount={metrics.netIncome}
          isLoading={isLoading}
          trend={metrics.netIncome >= 0 ? 'positive' : 'negative'}
        />
      </div>

      <TransactionsChart
        transactions={transactions}
        period={selectedPeriod}
        isLoading={isLoading}
      />
    </div>
  );
}