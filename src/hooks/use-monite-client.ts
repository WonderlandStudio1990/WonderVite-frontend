import { useEffect, useState, useCallback } from 'react';
import { useMoniteToken } from './use-monite-token';
import { useToast } from './use-toast';

export function useMoniteClient() {
  const [isReady, setIsReady] = useState(false);
  const { token, isLoading, refreshToken } = useMoniteToken();
  const { toast } = useToast();

  const checkAuthStatus = useCallback(() => {
    if (token && !isLoading) {
      setIsReady(true);
    } else if (!isLoading && !token) {
      toast({
        title: "Authentication Error",
        description: "Please check your Monite configuration",
        variant: "destructive",
      });
    }
  }, [token, isLoading, toast]);

  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

  const handleApiCall = async (endpoint: string, options: RequestInit = {}) => {
    if (!token) {
      throw new Error('No valid token available');
    }

    const baseUrl = 'https://api.sandbox.monite.com/v1';
    const response = await fetch(`${baseUrl}${endpoint}`, {
      ...options,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'x-monite-version': '2024-05-25',
        ...options.headers,
      },
    });

    if (response.status === 401) {
      await refreshToken();
      return handleApiCall(endpoint, options);
    }

    if (!response.ok) {
      throw new Error(`API call failed: ${response.statusText}`);
    }

    return response.json();
  };

  return { isReady, handleApiCall };
}