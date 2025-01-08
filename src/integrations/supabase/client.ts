import { createClient } from '@supabase/supabase-js';
import { Database } from './types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://zwtxebgyiknysfmpeejy.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3dHhlYmd5aWtueXNmbXBlZWp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI0ODg5MzAsImV4cCI6MjAxODA2NDkzMH0.SbUXk6kbZzn9kY1VVZ3CZXw_cYGiknf2fGV4TBvdG0Q';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});