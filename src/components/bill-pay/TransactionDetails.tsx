'use client';

interface TransactionDetailsProps {
  invoiceId: string;
  status: string;
  dueDate: string;
  amount: number;
  onPayNow: () => void;
}

export function TransactionDetails({ invoiceId, status, dueDate, amount, onPayNow }: TransactionDetailsProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Transaction Details</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500">Amount</p>
          <p>${amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Status</p>
          <p>{status}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Due Date</p>
          <p>{new Date(dueDate).toLocaleDateString()}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Invoice ID</p>
          <p>{invoiceId}</p>
        </div>
      </div>
      <button
        onClick={onPayNow}
        className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
      >
        Pay Now
      </button>
    </div>
  );
}