import { Node } from '@xyflow/react';

export const layerNodes: Node[] = [
  {
    id: 'auth',
    type: 'layer',
    position: { x: 250, y: 0 },
    data: {
      label: 'Authentication Layer',
      type: 'auth',
      description: 'Authentication and authorization with Supabase Auth',
      tools: [
        'Email/Password',
        'OAuth Providers',
        'Session Management',
        'Protected Routes'
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
      description: 'Core layout components and structure',
      tools: [
        'DashboardLayout',
        'Sidebar Navigation',
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
      description: 'Main application features and pages',
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
      description: 'Core business logic and API integrations',
      tools: [
        'Monite SDK',
        'Data Services',
        'API Clients'
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
      description: 'Data persistence and state management',
      tools: [
        'Supabase Database',
        'React Query',
        'Local State'
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
      label: 'Bill Pay',
      service: 'billpay',
      status: 'active',
      hook: 'useBills',
      description: 'Manage and process vendor payments'
    }
  },
  {
    id: 'invoices',
    type: 'service',
    position: { x: 200, y: 250 },
    data: {
      label: 'Invoices',
      service: 'invoices',
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
      label: 'Capital',
      service: 'capital',
      status: 'active',
      hook: 'useCapital',
      description: 'Access working capital solutions'
    }
  },
  {
    id: 'quickpay',
    type: 'service',
    position: { x: 500, y: 250 },
    data: {
      label: 'Quick Pay',
      service: 'quickpay',
      status: 'active',
      hook: 'useQuickPay',
      description: 'Fast payment processing'
    }
  }
];