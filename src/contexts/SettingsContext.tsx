'use client'

import React, { createContext, useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import { defaultSettings, SETTINGS_STORAGE_KEY } from './settings-context-variants';

interface Address {
  street: string;
  unit?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

interface Settings {
  businessName: string;
  displayName: string;
  website: string;
  description: string;
  brandColor: string;
  logo?: string;
  address?: Address;
}

interface SettingsContextType {
  settings: Settings;
  updateSettings: (newSettings: Partial<Settings>) => void;
  saveSettings: () => Promise<void>;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const { toast } = useToast();
  const [settings, setSettings] = useState<Settings>(defaultSettings);

  useEffect(() => {
    // Load settings from localStorage on initial render
    if (typeof window !== 'undefined') {
      const savedSettings = localStorage.getItem(SETTINGS_STORAGE_KEY);
      if (savedSettings) {
        setSettings(JSON.parse(savedSettings));
      }
    }
  }, []);

  // Update localStorage whenever settings change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
    }
  }, [settings]);

  const updateSettings = (newSettings: Partial<Settings>) => {
    setSettings(prev => ({
      ...prev,
      ...newSettings
    }));
  };

  const saveSettings = async () => {
    try {
      // Here you would typically make an API call to save the settings
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (typeof window !== 'undefined') {
        localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
      }
      console.log('Settings saved:', settings);
      
      toast({
        title: "Settings saved",
        description: "Your settings have been successfully updated.",
      });
    } catch (error) {
      console.error('Error saving settings:', error);
      toast({
        title: "Error",
        description: "Failed to save settings. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings, saveSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}

export { useSettings } from './settings-context-variants';