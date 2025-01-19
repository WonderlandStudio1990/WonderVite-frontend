'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface PaymentSummaryProps {
  amount: number;
  fromAccount?: string;
  toMethod?: string;
}

export function PaymentSummary({ amount, fromAccount, toMethod }: PaymentSummaryProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex justify-between">
          <span>Amount:</span>
          <span>${amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
        </div>
        {fromAccount && (
          <div className="flex justify-between">
            <span>From Account:</span>
            <span>{fromAccount}</span>
          </div>
        )}
        {toMethod && (
          <div className="flex justify-between">
            <span>Payment Method:</span>
            <span>{toMethod}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}