'use client';

import { type PaymentDetails } from '@/types/invoice';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface PaymentDetailsFormProps {
  value: PaymentDetails;
  onChange: (value: PaymentDetails) => void;
}

export default function PaymentDetailsForm({ value, onChange }: PaymentDetailsFormProps) {
  return (
    <div className="space-y-4">
      <div>
        <Label>Payment Method</Label>
        <Select
          value={value.paymentMethod}
          onValueChange={(paymentMethod) => onChange({ ...value, paymentMethod: paymentMethod as PaymentDetails['paymentMethod'] })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select payment method" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bank">Bank Transfer</SelectItem>
            <SelectItem value="card">Credit Card</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {value.paymentMethod === 'bank' && (
        <>
          <div>
            <Label>Bank Name</Label>
            <Input
              type="text"
              value={value.bankName}
              onChange={(e) => onChange({ ...value, bankName: e.target.value })}
            />
          </div>
          <div>
            <Label>Account Number</Label>
            <Input
              type="text"
              value={value.accountNumber}
              onChange={(e) => onChange({ ...value, accountNumber: e.target.value })}
            />
          </div>
          <div>
            <Label>Routing Number</Label>
            <Input
              type="text"
              value={value.routingNumber}
              onChange={(e) => onChange({ ...value, routingNumber: e.target.value })}
            />
          </div>
        </>
      )}

      <div>
        <Label>Notes</Label>
        <Input
          type="text"
          value={value.notes}
          onChange={(e) => onChange({ ...value, notes: e.target.value })}
        />
      </div>
    </div>
  );
}