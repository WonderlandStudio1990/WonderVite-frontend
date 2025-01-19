import React from 'react';
import { PaymentMethod } from '@/types/common';
import { Button } from '@/components/ui/button';

export interface PaymentMethodSelectorProps {
  onSelect: (method: PaymentMethod) => void;
  selectedMethod?: PaymentMethod;
}

export function PaymentMethodSelector({ onSelect, selectedMethod }: PaymentMethodSelectorProps) {
  const methods: PaymentMethod[] = ['card', 'bank', 'ach', 'wire', 'international_wire', 'wonderpay'];

  return (
    <div className="grid grid-cols-2 gap-4">
      {methods.map((method) => (
        <Button
          key={method}
          variant={selectedMethod === method ? 'default' : 'outline'}
          onClick={() => onSelect(method)}
          className="w-full"
        >
          {method.replace('_', ' ').toUpperCase()}
        </Button>
      ))}
    </div>
  );
}