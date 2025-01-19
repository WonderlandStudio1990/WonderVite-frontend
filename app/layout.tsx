import { Suspense } from 'react';
import { PlasmicWrapper } from "@/components/plasmic/PlasmicWrapper";
import { QueryProvider } from '@/providers/QueryProvider';
import { AuthProvider } from '@/providers/AuthProvider';
import { SettingsProvider } from '@/contexts/SettingsContext';
import './globals.css';

export const metadata = {
  title: 'WonderVite Frontend',
  description: 'Financial operations platform',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <PlasmicWrapper>
          <QueryProvider>
            <AuthProvider>
              <SettingsProvider>
                <Suspense fallback={<div>Loading...</div>}>
                  {children}
                </Suspense>
              </SettingsProvider>
            </AuthProvider>
          </QueryProvider>
        </PlasmicWrapper>
      </body>
    </html>
  );
}
