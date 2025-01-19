'use client';

import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PaymentMethodSelector, type PaymentMethod } from '@/components/payments/PaymentMethodSelector';

export function QuickPayPage() {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>();

  const handleMethodSelect = (method: PaymentMethod) => {
    setPaymentMethod(method);
  };

  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-md mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Quick Pay</h1>
        <div className="space-y-4">
          <div>
            <Label>Amount</Label>
            <Input
              type="number"
              min="0"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
            />
          </div>
          <div className="pt-4">
            <PaymentMethodSelector
              amount={Number(amount)}
              onMethodSelect={handleMethodSelect}
              selectedMethod={paymentMethod}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
