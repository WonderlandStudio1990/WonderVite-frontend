'use client';

import { type InvoiceData, type InvoiceItem } from '@/types/invoice';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface InvoiceDetailsFormProps {
  onSubmit: (data: InvoiceData) => Promise<void>;
  initialData?: Partial<InvoiceData>;
}

export function InvoiceDetailsForm({ onSubmit, initialData }: InvoiceDetailsFormProps) {
  const handleAddItem = () => {
    const newItem: InvoiceItem = {
      id: crypto.randomUUID(),
      description: '',
      quantity: 1,
      unitPrice: 0,
      amount: 0
    };
    // TODO: Add item to form state
  };

  return (
    <form className="space-y-4" onSubmit={(e) => {
      e.preventDefault();
      // TODO: Implement form submission
    }}>
      <div>
        <Label>Description</Label>
        <Input type="text" required />
      </div>
      <div>
        <Label>Quantity</Label>
        <Input type="number" min="1" required />
      </div>
      <div>
        <Label>Unit Price</Label>
        <Input type="number" min="0" step="0.01" required />
      </div>
      <Button type="button" onClick={handleAddItem}>Add Item</Button>
    </form>
  );
}