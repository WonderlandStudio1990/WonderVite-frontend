'use client';

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface InvoiceTermsFormProps {
  value?: string;
  onChange?: (value: string) => void;
}

export default function InvoiceTermsForm({ value, onChange }: InvoiceTermsFormProps) {
  return (
    <div className="space-y-4">
      <div>
        <Label>Payment Terms</Label>
        <Input
          type="text"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder="Net 30"
        />
      </div>
    </div>
  );
}