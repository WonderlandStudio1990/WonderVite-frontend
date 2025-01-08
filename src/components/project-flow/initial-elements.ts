import { Node, Edge } from '@xyflow/react';

export const nodes: Node[] = [
  {
    id: 'development',
    type: 'layer',
    position: { x: 250, y: 0 },
    data: {
      label: 'Development Workflow',
      type: 'development',
      description: 'TypeScript, ESLint, Pre-commit Hooks'
    }
  },
  {
    id: 'auth',
    type: 'layer',
    position: { x: 250, y: 100 },
    data: {
      label: 'Auth Layer (Clerk)',
      type: 'auth',
      description: 'JWT & Session Management'
    }
  },
  {
    id: 'client',
    type: 'layer',
    position: { x: 250, y: 200 },
    data: {
      label: 'Client Layer',
      type: 'client',
      description: 'Next.js & Subframe Components'
    }
  },
  {
    id: 'quickpay',
    type: 'service',
    position: { x: 50, y: 300 },
    data: {
      label: 'QuickPay',
      service: 'quickpay',
      status: 'active'
    }
  },
  {
    id: 'capital',
    type: 'service',
    position: { x: 200, y: 300 },
    data: {
      label: 'Capital',
      service: 'capital',
      status: 'active'
    }
  },
  {
    id: 'invoice',
    type: 'service',
    position: { x: 350, y: 300 },
    data: {
      label: 'Invoice',
      service: 'invoice',
      status: 'active'
    }
  },
  {
    id: 'validation',
    type: 'layer',
    position: { x: 250, y: 400 },
    data: {
      label: 'Validation Layer',
      type: 'validation',
      description: 'OpenAPI Spec & Middleware'
    }
  },
  {
    id: 'service',
    type: 'layer',
    position: { x: 250, y: 500 },
    data: {
      label: 'Service Layer',
      type: 'service',
      description: 'Monite SDK & Services'
    }
  },
  {
    id: 'monitoring',
    type: 'layer',
    position: { x: 250, y: 600 },
    data: {
      label: 'Monitoring Layer',
      type: 'monitoring',
      description: 'Webhooks & API Monitoring'
    }
  },
  {
    id: 'data',
    type: 'layer',
    position: { x: 250, y: 700 },
    data: {
      label: 'Data Layer (Supabase)',
      type: 'data',
      description: 'Real-time Updates & Storage'
    }
  }
];

export const edges: Edge[] = [
  { id: 'e1', source: 'development', target: 'auth', animated: true },
  { id: 'e2', source: 'auth', target: 'client', animated: true },
  { id: 'e3', source: 'client', target: 'quickpay' },
  { id: 'e4', source: 'client', target: 'capital' },
  { id: 'e5', source: 'client', target: 'invoice' },
  { id: 'e6', source: 'quickpay', target: 'validation' },
  { id: 'e7', source: 'capital', target: 'validation' },
  { id: 'e8', source: 'invoice', target: 'validation' },
  { id: 'e9', source: 'validation', target: 'service', animated: true },
  { id: 'e10', source: 'service', target: 'monitoring', animated: true },
  { id: 'e11', source: 'monitoring', target: 'data', animated: true }
];