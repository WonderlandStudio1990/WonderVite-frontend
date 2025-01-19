'use client'

import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { Database } from '@/integrations/supabase/types';

type Invoice = Database['public']['Tables']['invoices']['Row'];

export function useMoniteDashboard() {
  const [dashboardData, setDashboardData] = useState<Invoice[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data } = await supabase
          .from('invoices')
          .select('*')
          .eq('user_id', user.id);
        setDashboardData(data);
      }
    } catch (error) {
      console.error('Dashboard data fetch failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return { dashboardData, isLoading };
}