import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export function useMoniteToken() {
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchToken();
  }, []);

  const fetchToken = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        throw new Error('No active session');
      }

      const { data: tokenData, error } = await supabase
        .from('monite_tokens')
        .select('*')
        .eq('user_id', session.user.id)
        .single();

      if (error) throw error;

      if (tokenData && new Date(tokenData.expires_at) > new Date()) {
        setToken(tokenData.access_token);
      } else {
        await refreshToken();
      }
    } catch (error) {
      console.error('Error fetching Monite token:', error);
      toast({
        title: "Error",
        description: "Failed to fetch authentication token",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const refreshToken = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) throw new Error('No active session');

      const response = await supabase.functions.invoke('refresh-monite-token', {
        body: { userId: session.user.id }
      });

      if (response.error) throw response.error;
      
      setToken(response.data.access_token);
    } catch (error) {
      console.error('Error refreshing token:', error);
      toast({
        title: "Error",
        description: "Failed to refresh authentication token",
        variant: "destructive",
      });
    }
  };

  return { token, isLoading, refreshToken };
}