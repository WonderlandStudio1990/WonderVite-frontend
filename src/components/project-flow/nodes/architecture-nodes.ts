import { Node } from '@xyflow/react';

export const layerNodes: Node[] = [
  {
    id: 'auth',
    type: 'layer',
    position: { x: 250, y: 0 },
    data: {
      label: 'Authentication Layer',
      type: 'auth',
      description: 'Supabase Authentication & Authorization',
      tools: [
        'Session Management',
        'Protected Routes',
        'User Profiles',
        'RLS Policies'
      ]
    }
  },
  {
    id: 'layout',
    type: 'layer',
    position: { x: 250, y: 100 },
    data: {
      label: 'Layout Layer',
      type: 'layout',
      description: 'Core application layout and navigation',
      tools: [
        'DashboardLayout',
        'Sidebar',
        'Header',
        'Settings Layout'
      ]
    }
  },
  {
    id: 'features',
    type: 'layer',
    position: { x: 250, y: 200 },
    data: {
      label: 'Feature Layer',
      type: 'features',
      description: 'Main application features',
      tools: [
        'Dashboard',
        'Bill Pay',
        'Invoices',
        'Capital',
        'Quick Pay'
      ]
    }
  },
  {
    id: 'services',
    type: 'layer',
    position: { x: 250, y: 300 },
    data: {
      label: 'Services Layer',
      type: 'services',
      description: 'API Integration & Business Logic',
      tools: [
        'Monite SDK',
        'React Query',
        'Edge Functions'
      ]
    }
  },
  {
    id: 'data',
    type: 'layer',
    position: { x: 250, y: 400 },
    data: {
      label: 'Data Layer',
      type: 'data',
      description: 'Data persistence and state',
      tools: [
        'Supabase Database',
        'RLS Policies',
        'Real-time Updates'
      ]
    }
  }
];

export const serviceNodes: Node[] = [
  {
    id: 'billpay',
    type: 'service',
    position: { x: 50, y: 250 },
    data: {
      label: 'Bill Pay Service',
      service: 'billpay',
      status: 'active',
      hook: 'useBills',
      description: 'Manage vendor payments and bills'
    }
  },
  {
    id: 'invoices',
    type: 'service',
    position: { x: 200, y: 250 },
    data: {
      label: 'Invoice Service',
      service: 'invoice',
      status: 'active',
      hook: 'useInvoices',
      description: 'Generate and manage invoices'
    }
  },
  {
    id: 'capital',
    type: 'service',
    position: { x: 350, y: 250 },
    data: {
      label: 'Capital Service',
      service: 'capital',
      status: 'active',
      hook: 'useCapital',
      description: 'Working capital solutions'
    }
  },
  {
    id: 'quickpay',
    type: 'service',
    position: { x: 500, y: 250 },
    data: {
      label: 'Quick Pay Service',
      service: 'quickpay',
      status: 'active',
      hook: 'useQuickPay',
      description: 'Fast payment processing'
    }
  }
];