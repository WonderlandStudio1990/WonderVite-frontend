'use client';

import React from 'react';
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export interface PeriodSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const PeriodSelector = ({ value, onChange }: PeriodSelectorProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-gray-100 rounded-full px-4 py-2 text-sm flex items-center gap-2 hover:bg-gray-200 transition-colors">
        Last {value} days
        <ChevronDown className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem onClick={() => onChange('30')}>
          Last 30 days
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onChange('60')}>
          Last 60 days
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onChange('90')}>
          Last 90 days
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PeriodSelector;