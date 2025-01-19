'use client';

import React from 'react';
import { Card } from "@/components/ui/card";
import { useChart } from "@/components/ui/chart";
import { Area, AreaChart, XAxis, YAxis, Tooltip } from "recharts";
import { Loader2 } from "lucide-react";
import { Transaction } from '@/types/financial';

interface TransactionsChartProps {
  transactions: Transaction[];
  period: string;
  isLoading: boolean;
}

const TransactionsChart = ({ transactions, period, isLoading }: TransactionsChartProps) => {
  const { config } = useChart();

  if (isLoading) {
    return (
      <Card className="p-6 bg-white/50 backdrop-blur-sm h-[300px] flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-6 w-6 animate-spin text-gray-500" />
          <span className="text-sm text-gray-500">Loading chart data...</span>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 bg-white/50 backdrop-blur-sm">
      <div className="h-[300px]">
        <AreaChart 
          data={transactions} 
          {...config}
        >
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="date" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#6B7280', fontSize: 12 }}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#6B7280', fontSize: 12 }}
            tickFormatter={(value) => `${value/1000}k`}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="amount"
            stroke="#8884d8"
            strokeWidth={2}
            fill="url(#colorValue)"
          />
        </AreaChart>
      </div>
    </Card>
  );
};

export default TransactionsChart;