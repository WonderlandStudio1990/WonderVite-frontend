import { createContext, useContext } from 'react';
import { Session } from '@supabase/supabase-js';

export const AUTH_STORAGE_KEY = 'auth_session';

export interface AuthContextType {
  session: Session | null;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
