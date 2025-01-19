'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface CapitalProductCardProps {
  title: string;
  description: string;
  onClick: () => void;
  isSelected: boolean;
}

export function CapitalProductCard({ title, description, onClick, isSelected }: CapitalProductCardProps) {
  return (
    <Card 
      className={`cursor-pointer transition-all ${isSelected ? 'ring-2 ring-primary' : 'hover:shadow-lg'}`}
      onClick={onClick}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}