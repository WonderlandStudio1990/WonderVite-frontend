'use client';

interface ReceivableItemProps {
  amount: number;
  currency: string;
  status: string;
  date: string;
  description?: string;
  details?: {
    items: Array<{
      description: string;
      quantity: number;
      rate: number;
      amount: number;
    }>;
    subtotal: number;
    tax: number;
    total: number;
  };
}

export function ReceivableItem({ amount, currency, status, date, description, details }: ReceivableItemProps) {
  return (
    <div className="p-4 rounded-lg bg-white/50 backdrop-blur-sm hover:bg-black/5 transition-all">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500">{new Date(date).toLocaleDateString()}</p>
          {description && <p className="text-sm text-gray-700">{description}</p>}
        </div>
        <div className="text-right">
          <p className="font-semibold">{amount.toLocaleString('en-US', { style: 'currency', currency })}</p>
          <span className="text-sm text-gray-500">{status}</span>
        </div>
      </div>
      {details && (
        <div className="mt-4 border-t pt-4">
          <p className="text-sm font-medium">Details</p>
          <div className="space-y-2">
            {details.items.map((item, index) => (
              <div key={index} className="flex justify-between text-sm">
                <span>{item.description}</span>
                <span>{item.amount.toLocaleString('en-US', { style: 'currency', currency })}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}