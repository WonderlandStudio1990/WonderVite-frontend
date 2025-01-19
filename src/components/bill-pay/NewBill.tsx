'use client';

import { type Payable } from '@/types/payables';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface NewBillProps {
  onSubmit: (payable: Payable) => Promise<void>;
  _initialData?: Partial<Payable>;
}

export function NewBill({ onSubmit, _initialData }: NewBillProps) {
  const handleSubmit = async () => {
    // TODO: Implement form submission
    await onSubmit({
      id: '',
      amount: 0,
      currency: 'USD',
      due_date: new Date().toISOString(),
      status: 'draft',
      vendor_name: '',
      invoice_number: '',
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>New Bill</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}>
          {/* TODO: Add form fields */}
          <Button type="submit">Create Bill</Button>
        </form>
      </CardContent>
    </Card>
  );
}
