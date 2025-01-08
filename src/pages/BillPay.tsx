import React, { useState, useMemo } from 'react';
import { BillPayHeader } from '@/components/bill-pay/BillPayHeader';
import { BillPayFilters } from '@/components/bill-pay/BillPayFilters';
import { StatusCard } from '@/components/bill-pay/StatusCard';
import { TransactionsList } from '@/components/bill-pay/TransactionsList';
import { useBills } from '@/hooks/use-bills';
import { Loader2 } from 'lucide-react';

const BillPay = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>(['draft', 'scheduled', 'paid', 'overdue']);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const { bills, isLoading, error } = useBills();

  const filteredAndSortedTransactions = useMemo(() => {
    if (!bills) return [];

    console.log('Filtering and sorting transactions:', { searchQuery, selectedFilters, sortOrder });
    return bills
      .filter(transaction => 
        selectedFilters.includes(transaction.status) &&
        (transaction.vendor_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
         transaction.invoice_number?.toLowerCase().includes(searchQuery.toLowerCase()))
      )
      .sort((a, b) => {
        const dateA = new Date(a.due_date).getTime();
        const dateB = new Date(b.due_date).getTime();
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
      });
  }, [bills, selectedFilters, searchQuery, sortOrder]);

  const totals = useMemo(() => {
    if (!bills) return {};
    
    console.log('Calculating totals for transactions');
    return bills.reduce((acc, transaction) => {
      acc[transaction.status] = (acc[transaction.status] || 0) + Number(transaction.amount);
      return acc;
    }, {} as Record<string, number>);
  }, [bills]);

  if (error) {
    return (
      <div className="p-6">
        <div className="text-red-500">Error loading bills: {error.message}</div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <BillPayHeader />

      <div className="grid md:grid-cols-3 gap-6">
        <StatusCard title="Draft" amount={totals.draft || 0} />
        <StatusCard title="Scheduled" amount={totals.scheduled || 0} />
        <StatusCard title="Paid" amount={totals.paid || 0} />
      </div>

      <BillPayFilters 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

      {isLoading ? (
        <div className="flex items-center justify-center py-8">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      ) : (
        <TransactionsList transactions={filteredAndSortedTransactions} />
      )}
    </div>
  );
};

export default BillPay;