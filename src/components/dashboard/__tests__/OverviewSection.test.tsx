import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/test/utils';
import { OverviewSection } from '../OverviewSection';

describe('OverviewSection', () => {
  it('renders overview cards and chart', () => {
    renderWithProviders(
      <OverviewSection 
        transactions={[]}
        isLoading={false}
      />
    );
    
    expect(screen.getByText(/Overview/i)).toBeDefined();
    expect(screen.getByText(/Period/i)).toBeDefined();
    expect(screen.getByRole('figure')).toBeDefined();
  });
});