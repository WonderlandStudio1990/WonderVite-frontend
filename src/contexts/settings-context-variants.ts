import { createContext, useContext } from 'react';

export const SETTINGS_STORAGE_KEY = 'wondervite-settings';

export interface Settings {
  theme: 'light' | 'dark';
  notifications: boolean;
  brandColor: string;
  displayName: string;
  businessName: string;
  website: string;
  description: string;
}

export const defaultSettings: Settings = {
  theme: 'light',
  notifications: true,
  brandColor: '#4F46E5',
  displayName: 'WonderVite',
  businessName: 'WonderVite Inc',
  website: 'https://wondervite.com',
  description: 'Financial operations platform'
};

export const SettingsContext = createContext<Settings>(defaultSettings);

export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within SettingsProvider');
  }
  return context;
}
