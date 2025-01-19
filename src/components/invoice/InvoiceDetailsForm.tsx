import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { InvoiceItem } from '@/types/invoice';

interface InvoiceDetailsFormProps {
  _onSubmit?: (items: InvoiceItem[]) => void;
  _initialData?: InvoiceItem[];
}

const InvoiceDetailsForm = ({ _onSubmit, _initialData }: InvoiceDetailsFormProps) => {
  const [_newItem, _setNewItem] = useState<InvoiceItem>({
    id: '',
    description: '',
    quantity: 0,
    unitPrice: 0,
    amount: 0
  });

  return (
    <div className="space-y-4">
      <div className="grid gap-4">
        <div>
          <Label>Description</Label>
          <Input type="text" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <Label>Quantity</Label>
            <Input type="number" min="0" />
          </div>
          <div>
            <Label>Unit Price</Label>
            <Input type="number" min="0" step="0.01" />
          </div>
          <div>
            <Label>Amount</Label>
            <Input type="number" disabled />
          </div>
        </div>
      </div>
      <Button type="button">Add Item</Button>
    </div>
  );
};

export { InvoiceDetailsForm };