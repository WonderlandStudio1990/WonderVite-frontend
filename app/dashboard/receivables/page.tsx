'use client';

import { Card } from "@/components/ui/card";
import { ReceivableItem } from "@/components/receivables/ReceivableItem";
import { StatusCard } from "@/components/receivables/StatusCard";

export default function ReceivablesPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatusCard title="Total Receivables" amount={0} />
        <StatusCard title="Overdue" amount={0} status="sent" />
        <StatusCard title="Due Soon" amount={0} status="draft" />
        <StatusCard title="Paid" amount={0} status="paid" />
      </div>
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Receivables</h2>
        <div className="space-y-4">
          <ReceivableItem
            amount={0}
            currency="USD"
            status="pending"
            date={new Date().toISOString()}
            description="No receivables found"
          />
        </div>
      </Card>
    </div>
  );
}
