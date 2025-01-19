'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ApplicationFormData } from '@/types/capital';
import { Loader2 } from 'lucide-react';

interface ApplicationFormProps {
  product: string;
  onSubmit: (data: ApplicationFormData) => Promise<void>;
}

export function ApplicationForm({ product, onSubmit }: ApplicationFormProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await onSubmit({
        requestedAmount: 0,
        terms: product === 'wonderflex' ? 30 : 12, // Default to 12 months for other products
        businessName: '',
        businessType: '',
        annualRevenue: 0,
        yearsInBusiness: 0
      });
    } catch (_error) {
      // Handle error
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label>Business Name</Label>
        <Input type="text" required />
      </div>
      <div>
        <Label>Business Type</Label>
        <Input type="text" required />
      </div>
      <div>
        <Label>Annual Revenue</Label>
        <Input type="number" min="0" required />
      </div>
      <div>
        <Label>Years in Business</Label>
        <Input type="number" min="0" required />
      </div>
      <div>
        <Label>Requested Amount</Label>
        <Input type="number" min="0" required />
      </div>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Submit Application'}
      </Button>
    </form>
  );
}