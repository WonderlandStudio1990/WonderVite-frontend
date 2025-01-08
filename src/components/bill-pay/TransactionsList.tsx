import { Bill } from '@/types/payments';
import { TransactionItem } from './TransactionItem';

interface TransactionsListProps {
  transactions: Bill[];
}

export function TransactionsList({ transactions }: TransactionsListProps) {
  if (transactions.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No bills found. Try adjusting your filters or create a new bill.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-sm font-medium text-gray-500">Recent transactions</h2>
      <div className="space-y-2">
        {transactions.map((transaction) => (
          <TransactionItem 
            key={transaction.id}
            id={transaction.id}
            vendorName={transaction.vendor_name}
            invoiceNumber={transaction.invoice_number || ''}
            status={transaction.status || 'draft'}
            dueDate={transaction.due_date}
            amount={Number(transaction.amount)}
          />
        ))}
      </div>
    </div>
  );
}