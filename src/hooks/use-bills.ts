import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from '@/hooks/use-toast';
import { supabase } from "@/integrations/supabase/client";

export function useBills() {
  const queryClient = useQueryClient();

  const { data: bills, isLoading, error } = useQuery({
    queryKey: ['bills'],
    queryFn: async () => {
      console.log('Fetching bills from Supabase');
      const { data, error } = await supabase
        .from('bills')
        .select('*')
        .order('due_date', { ascending: true });
      
      if (error) {
        console.error('Error fetching bills:', error);
        throw error;
      }

      return data;
    },
  });

  const createBillMutation = useMutation({
    mutationFn: async (billData: {
      vendor_name: string;
      invoice_number: string;
      amount: number;
      due_date: string;
      description?: string;
    }) => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Not authenticated');

      const { data, error } = await supabase
        .from('bills')
        .insert({
          ...billData,
          user_id: user.id,
          status: 'draft'
        })
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bills'] });
      toast({
        title: "Success",
        description: "Bill created successfully",
      });
    },
    onError: (error) => {
      console.error('Error creating bill:', error);
      toast({
        title: "Error",
        description: "Failed to create bill",
        variant: "destructive",
      });
    },
  });

  const updateBillMutation = useMutation({
    mutationFn: async ({ id, ...billData }: {
      id: string;
      status?: string;
      amount?: number;
      due_date?: string;
      description?: string;
    }) => {
      const { data, error } = await supabase
        .from('bills')
        .update(billData)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bills'] });
      toast({
        title: "Success",
        description: "Bill updated successfully",
      });
    },
    onError: (error) => {
      console.error('Error updating bill:', error);
      toast({
        title: "Error",
        description: "Failed to update bill",
        variant: "destructive",
      });
    },
  });

  return {
    bills,
    isLoading,
    error,
    createBill: createBillMutation.mutate,
    updateBill: updateBillMutation.mutate,
    isCreating: createBillMutation.isPending,
    isUpdating: updateBillMutation.isPending,
  };
}