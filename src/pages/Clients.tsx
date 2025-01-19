'use client';

import { ContactsList } from '@/components/contacts/ContactsList';
import { useState } from 'react';

export default function Clients() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-6">Clients & Vendors</h1>
      <ContactsList type="all" searchQuery={searchQuery} />
    </div>
  );
}