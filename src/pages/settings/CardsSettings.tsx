'use client';

import React, { useState } from 'react';
import { Card as CardComponent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { AddCardDialog } from "@/components/cards/AddCardDialog";
import type { Card as PaymentCard } from '@/types/common';

const CardsSettings = () => {
  const { toast } = useToast();
  const [isSaving, setIsSaving] = useState(false);
  const [cards] = useState<PaymentCard[]>([]);
  const [isLoading] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Success",
        description: "Card settings have been successfully saved.",
      });
    } catch (_err) {
      toast({
        title: "Error",
        description: "Failed to save card settings. Please try again.",
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
          <h1 className="text-3xl font-semibold text-gray-900">Payment Cards</h1>
          <p className="text-gray-500 mt-2">Manage your payment cards.</p>
        </div>
        <div className="flex gap-4">
          <AddCardDialog />
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
      
      <CardComponent className="p-6 space-y-8 bg-white/50">
        {isLoading ? (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        ) : cards.length === 0 ? (
          <div className="text-sm text-gray-500">No cards added yet.</div>
        ) : (
          <div className="space-y-4">
            {cards.map((card) => (
              <div key={card.id} className="p-4 border rounded-lg">
                <div className="font-medium">{card.type}</div>
                <div className="text-sm text-gray-500">
                  Status: {card.status}
                </div>
              </div>
            ))}
          </div>
        )}
      </CardComponent>
    </div>
  );
};

export default CardsSettings;