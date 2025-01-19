'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { PaymentMethodSelector, type PaymentMethod } from './PaymentMethodSelector';
import { PaymentSummary } from './PaymentSummary';
import { useState } from 'react';

export interface PaymentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  amount: number;
  onPaymentComplete: () => void;
}

export function PaymentDialog({ open, onOpenChange, amount, onPaymentComplete }: PaymentDialogProps) {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>();

  const handleMethodSelect = (method: PaymentMethod) => {
    setSelectedMethod(method);
    onPaymentComplete();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Payment Details</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <PaymentSummary amount={amount} />
          <PaymentMethodSelector
            amount={amount}
            selectedMethod={selectedMethod}
            onMethodSelect={handleMethodSelect}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}