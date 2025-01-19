'use client';

import { type InvoiceItem } from '@/types/invoice';

interface FormData {
  items: Array<{
    description: string;
    quantity: number;
    price: number;
  }>;
  subtotal: number;
  tax: number;
  total: number;
}

interface InvoiceFormProps {
  onSubmit: (data: FormData) => Promise<void>;
  _initialData?: Partial<FormData>; // Changed initialData to _initialData
}

export function InvoiceForm({ onSubmit, _initialData }: InvoiceFormProps) { // Changed initialData to _initialData
  const handleSubmit = async () => {
    // TODO: Implement form submission
    await onSubmit({
      items: [],
      subtotal: 0,
      tax: 0,
      total: 0
    });
  };

  return (
    <form className="space-y-4" onSubmit={(e) => {
      e.preventDefault();
      handleSubmit();
    }}>
      {/* TODO: Add form fields */}
      <button type="submit">Submit</button>
    </form>
  );
}

export function calculateSubtotal(items: InvoiceItem[]): number {
  return items.reduce((sum, item) => sum + item.amount, 0);
}

export function calculateTax(subtotal: number, taxRate: number = 0.1): number {
  return subtotal * taxRate;
}

export function calculateTotal(subtotal: number, tax: number): number {
  return subtotal + tax;
}