'use client';

import { type CompanyDetails } from '@/types/invoice';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface CompanyDetailsFormProps {
  value: CompanyDetails;
  onChange: (value: CompanyDetails) => void;
}

export default function CompanyDetailsForm({ value, onChange }: CompanyDetailsFormProps) {
  const handleChange = (field: keyof CompanyDetails) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    onChange({
      ...value,
      [field]: e.target.value
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="name">Company Name</Label>
        <Input
          id="name"
          value={value.name}
          onChange={handleChange('name')}
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={value.email}
          onChange={handleChange('email')}
        />
      </div>
      {/* Add other company detail fields */}
    </div>
  );
}