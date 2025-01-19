'use client';

import { ReactNode, Suspense } from 'react';
import { PlasmicWrapper } from "@/components/plasmic/PlasmicWrapper";
import { QueryProvider } from '@/providers/QueryProvider';
import { AuthProvider } from '@/providers/AuthProvider';
import { SettingsProvider } from '@/contexts/SettingsContext';

export const RootLayout = ({ children }: { children: ReactNode }) => {
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
};
