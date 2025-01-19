'use client'

import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import SettingsSidebar from './SettingsSidebar';

import { usePathname } from 'next/navigation';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname() || '';
  const isSettingsPage = pathname.includes('/dashboard/organization-settings') || 
                        pathname.includes('/dashboard/settings');
  const isInvoiceGenerator = pathname === '/dashboard/bill-pay/generate';

  // If we're on the invoice generator page, render without sidebars
  if (isInvoiceGenerator) {
    return (
      <>
        {children}

      </>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      <div className="flex h-[calc(100vh-4rem)]">
        {/* Only render one sidebar based on the current route */}
        {isSettingsPage ? (
          <SettingsSidebar />
        ) : (
          <Sidebar />
        )}
        <main className="flex-1 overflow-y-auto px-6 backdrop-blur-md bg-white/50">
          {children}
        </main>
      </div>
      {/* StatusDisplay component removed */}
    </div>
  );
};
