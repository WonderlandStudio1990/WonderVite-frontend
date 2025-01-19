'use client'

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Check if user is already logged in
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        router.push('/dashboard');
      }
    });
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFFFFF] px-4 py-16">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-6">
          <h1 
            className="text-5xl md:text-[72px] font-bold text-[#1A1F2C] leading-tight"
            style={{ fontFamily: 'Times New Roman, serif' }}
          >
            WonderPay
          </h1>
          
          <div className="w-28 h-28 mx-auto transform hover:scale-105 transition-transform duration-300 bg-[#FFFFFF]">
            <Image 
              src="/lovable-uploads/2cfe764c-e03d-4bd4-9aec-40a3f9d1a7ae.png" 
              alt="WonderPay Logo" 
              width={200}
              height={200}
              className="w-full h-full object-contain"
            />
          </div>

          <p className="text-sm uppercase tracking-[0.2em] text-[#8E9196] font-semibold">
            BY WONDERLAND STUDIO
          </p>
        </div>

        <p className="text-lg md:text-xl text-[#403E43] max-w-[800px] mx-auto leading-relaxed font-light">
          WonderPay by Wonderland Studio is a private bill pay and payments automation platform to streamline AP & AR and offer working capital solutions for our clients, partners and colleagues in music, entertainment and luxury hospitality.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Button 
            variant="default"
            className="w-full sm:w-auto bg-[#1A1F2C] hover:bg-[#403E43] text-white rounded-full px-8 py-3 text-base font-normal h-auto transition-all duration-300 hover:shadow-lg"
            onClick={() => router.push('/login')}
          >
            Log In
          </Button>
          <Button 
            variant="outline"
            className="w-full sm:w-auto bg-[#9b87f5] hover:bg-[#8B5CF6] text-white border-none rounded-full px-8 py-3 text-base font-normal h-auto transition-all duration-300 hover:shadow-lg"
            onClick={() => router.push('/login')}
          >
            Inquire
          </Button>
        </div>
      </div>
    </div>
  );
}