'use client';

import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { VerifyBankAccountDialog } from "@/components/bank-accounts/VerifyBankAccountDialog";
import type { BankAccount } from '@/types/financial';

// This will be implemented later when integrating with the APIs
const useBankAccounts = () => {
  const [accounts] = useState<BankAccount[]>([]);
  const [isLoading] = useState(false);

  // Placeholder for future API integration
  const refreshAccounts = async () => {
    console.log('This will refresh accounts from Monite/Finicity/Plaid');
  };

  return { accounts, isLoading, refreshAccounts };
};

const BankAccountsSettings = () => {
  const { toast } = useToast();
  const [isSaving, setIsSaving] = useState(false);
  const { accounts, isLoading } = useBankAccounts();

  const handleSave = async () => {
    setIsSaving(true);
    try {
      // This will be implemented when integrating with the APIs
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Success",
        description: "Bank account settings have been successfully saved.",
      });
    } catch (_error) {
      toast({
        title: "Error",
        description: "Failed to save bank account settings. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Bank Accounts</h1>
          <p className="text-gray-500 mt-2">Manage your connected bank accounts.</p>
        </div>
        <div className="flex gap-4">
          <VerifyBankAccountDialog />
          <Button onClick={handleSave} disabled={isSaving}>
            {isSaving ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              'Save changes'
            )}
          </Button>
        </div>
      </div>
      
      <Card className="p-6 space-y-8 bg-white/50">
        {isLoading ? (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        ) : accounts.length === 0 ? (
          <div className="text-sm text-gray-500">No bank accounts added yet.</div>
        ) : (
          <div className="space-y-4">
            {accounts.map((account) => (
              <div key={account.id} className="p-4 border rounded-lg">
                <div className="font-medium">{account.bankName}</div>
                <div className="text-sm text-gray-500">
                  {account.accountType.charAt(0).toUpperCase() + account.accountType.slice(1)} •••• 
                  {account.accountNumber.slice(-4)}
                </div>
                <div className="text-sm text-gray-500">
                  Status: {account.status}
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
};

export default BankAccountsSettings;