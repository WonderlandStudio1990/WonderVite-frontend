import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import OverviewSection from '@/components/dashboard/OverviewSection';
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { useAuth } from '@/providers/AuthProvider';
import { Loader2 } from "lucide-react";

const Dashboard = () => {
  const { session } = useAuth();

  const { data: transactions, isLoading } = useQuery({
    queryKey: ['recent-transactions'],
    queryFn: async () => {
      const { data: bills } = await supabase
        .from('bills')
        .select('*')
        .eq('user_id', session?.user.id)
        .order('created_at', { ascending: false })
        .limit(3);

      const { data: invoices } = await supabase
        .from('invoices')
        .select('*')
        .eq('user_id', session?.user.id)
        .order('created_at', { ascending: false })
        .limit(3);

      // Combine and sort transactions
      const combined = [...(bills || []), ...(invoices || [])]
        .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
        .slice(0, 3);

      return combined;
    },
    enabled: !!session?.user.id,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <OverviewSection />
      
      <div className="mt-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900 font-inter">Recent Transactions</h2>
          <span className="text-sm text-gray-500 font-inter">Last 30 days</span>
        </div>

        <Card className="border-gray-200/50 backdrop-blur-lg bg-white/50 shadow-lg">
          <CardContent className="p-0">
            <Table>
              <TableBody>
                {transactions?.map((transaction) => (
                  <TableRow 
                    key={transaction.id} 
                    className="hover:bg-black/5 cursor-pointer transition-colors duration-200"
                  >
                    <TableCell className="flex items-center gap-3 py-4">
                      <div className="w-10 h-10 bg-gray-100/50 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-gray-300/50 rounded-full" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium text-gray-900 font-inter">
                          {transaction.description || transaction.client_name || transaction.vendor_name}
                        </span>
                        <span className="text-sm text-gray-500 font-inter">
                          {transaction.invoice_number}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex flex-col items-end">
                        <span className={`${
                          transaction.status === 'overdue' ? 'text-orange-500' : 
                          transaction.status === 'paid' ? 'text-green-500' : 
                          'text-gray-500'
                        } font-medium font-inter`}>
                          {transaction.status}
                        </span>
                        <span className="text-sm text-gray-500 font-inter">
                          {new Date(transaction.created_at).toLocaleDateString()}
                        </span>
                        <span className="font-medium text-gray-900 font-inter">
                          ${transaction.amount.toLocaleString()}
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;