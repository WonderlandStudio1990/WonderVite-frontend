import { Json } from '@/integrations/supabase/types';

export interface CapitalProduct {
  id: string;
  name: string;
  description: string;
  minAmount: number;
  maxAmount: number;
  interestRate: number;
  terms: number[];
}

export interface ApplicationFormData {
  requestedAmount: number;
  terms: number;
  businessName: string;
  businessType: string;
  annualRevenue: number;
  yearsInBusiness: number;
}

export interface CapitalApplication {
  id: string;
  product: string;
  requested_amount: number | null;
  approved_amount: number | null;
  interest_rate: number | null;
  terms: number | null;
  status: string | null;
  application_data: Json | null;
  created_at: string;
  updated_at: string;
  user_id: string;
}