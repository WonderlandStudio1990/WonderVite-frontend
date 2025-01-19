'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { ApplicationForm } from '@/components/capital/ApplicationForm';
import { ApplicationsList } from '@/components/capital/ApplicationsList';
import { CapitalProductCard } from '@/components/capital/CapitalProductCard';
import { CapitalProduct, ApplicationFormData } from '@/types/capital';
import type { Database } from '@/integrations/supabase/types';

type WonderPayCapitalApplication = Database['public']['Tables']['wonderpay_capital_applications']['Insert'];

export function CapitalPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const handleSubmit = async (applicationData: ApplicationFormData) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Not authenticated');

      if (!selectedProduct) throw new Error('No product selected');

      const newApplication: WonderPayCapitalApplication = {
        user_id: user.id,
        product: selectedProduct,
        requested_amount: applicationData.requestedAmount,
        terms: applicationData.terms,
        status: 'pending'
      };

      const { error } = await supabase
        .from('wonderpay_capital_applications')
        .insert(newApplication);

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Application submitted successfully',
      });

      router.push('/dashboard');
    } catch (_error) {
      toast({
        title: 'Error',
        description: 'Failed to submit application',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">WonderPay Capital</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <CapitalProductCard
          title="WonderFlex"
          description="Flexible financing for your business"
          onClick={() => setSelectedProduct('wonderflex')}
          isSelected={selectedProduct === 'wonderflex'}
        />
        <CapitalProductCard
          title="WonderGrow"
          description="Growth capital for expanding businesses"
          onClick={() => setSelectedProduct('wondergrow')}
          isSelected={selectedProduct === 'wondergrow'}
        />
      </div>

      {selectedProduct && (
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">Apply for {selectedProduct}</h2>
          <ApplicationForm
            product={selectedProduct}
            onSubmit={handleSubmit}
          />
        </div>
      )}

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Your Applications</h2>
        <ApplicationsList />
      </div>
    </div>
  );
}
