'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export type PaymentMethod = 'card' | 'bank';

export interface PaymentMethodSelectorProps {
  amount: number;
  selectedMethod?: PaymentMethod;
  onMethodSelect: (method: PaymentMethod) => void;
}

export function PaymentMethodSelector({ amount, selectedMethod, onMethodSelect }: PaymentMethodSelectorProps) {
  return (
    <div className="space-y-4">
      <Select value={selectedMethod} onValueChange={(value) => onMethodSelect(value as PaymentMethod)}>
        <SelectTrigger>
          <SelectValue placeholder="Select payment method" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="card">Credit Card</SelectItem>
          <SelectItem value="bank">Bank Transfer</SelectItem>
        </SelectContent>
      </Select>
      <Button 
        onClick={() => selectedMethod && onMethodSelect(selectedMethod)}
        disabled={!selectedMethod}
        className="w-full"
      >
        Pay ${amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
      </Button>
    </div>
  );
}