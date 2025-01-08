import { Node, Edge } from '@xyflow/react';

export const initialNodes: Node[] = [
  // Development Layer
  {
    id: 'dev-layer',
    type: 'layerNode',
    position: { x: 250, y: 0 },
    data: { 
      label: 'Development Layer',
      type: 'Development Workflow',
      description: 'TypeScript, ESLint, Pre-commit Hooks'
    },
  },

  // Auth Layer
  {
    id: 'auth-layer',
    type: 'layerNode',
    position: { x: 250, y: 100 },
    data: { 
      label: 'Auth Layer',
      type: 'Authentication',
      description: 'Clerk Auth, JWT & Session Management'
    },
  },

  // Client Layer
  {
    id: 'client-layer',
    type: 'layerNode',
    position: { x: 250, y: 200 },
    data: { 
      label: 'Client Layer',
      type: 'Frontend',
      description: 'Next.js, Subframe Components'
    },
  },

  // Services
  {
    id: 'quickpay-service',
    type: 'serviceNode',
    position: { x: 50, y: 300 },
    data: { 
      label: 'QuickPay',
      service: 'useMonitePayment',
      status: 'active'
    },
  },
  {
    id: 'capital-service',
    type: 'serviceNode',
    position: { x: 250, y: 300 },
    data: { 
      label: 'Capital',
      service: 'useMoniteCapital',
      status: 'active'
    },
  },
  {
    id: 'invoice-service',
    type: 'serviceNode',
    position: { x: 450, y: 300 },
    data: { 
      label: 'Invoice',
      service: 'useMoniteInvoice',
      status: 'active'
    },
  },

  // Validation Layer
  {
    id: 'validation-layer',
    type: 'layerNode',
    position: { x: 250, y: 400 },
    data: { 
      label: 'Validation Layer',
      type: 'Data Validation',
      description: 'OpenAPI Spec & Middleware'
    },
  },

  // Service Layer
  {
    id: 'service-layer',
    type: 'layerNode',
    position: { x: 250, y: 500 },
    data: { 
      label: 'Service Layer',
      type: 'Monite Services',
      description: 'Payment, Capital, Invoice Services'
    },
  },

  // Monitoring Layer
  {
    id: 'monitoring-layer',
    type: 'layerNode',
    position: { x: 250, y: 600 },
    data: { 
      label: 'Monitoring Layer',
      type: 'System Monitoring',
      description: 'Webhooks, API Monitoring, Usage Limits'
    },
  },

  // Data Layer
  {
    id: 'data-layer',
    type: 'layerNode',
    position: { x: 250, y: 700 },
    data: { 
      label: 'Data Layer',
      type: 'Supabase',
      description: 'Data Storage & Real-time Updates'
    },
  },
];

export const initialEdges: Edge[] = [
  // Connect layers vertically
  { id: 'e1-1', source: 'dev-layer', target: 'auth-layer', animated: true },
  { id: 'e1-2', source: 'auth-layer', target: 'client-layer', animated: true },
  
  // Connect services to client layer
  { id: 'e2-1', source: 'client-layer', target: 'quickpay-service' },
  { id: 'e2-2', source: 'client-layer', target: 'capital-service' },
  { id: 'e2-3', source: 'client-layer', target: 'invoice-service' },
  
  // Connect services to validation layer
  { id: 'e3-1', source: 'quickpay-service', target: 'validation-layer' },
  { id: 'e3-2', source: 'capital-service', target: 'validation-layer' },
  { id: 'e3-3', source: 'invoice-service', target: 'validation-layer' },
  
  // Connect remaining layers
  { id: 'e4-1', source: 'validation-layer', target: 'service-layer', animated: true },
  { id: 'e4-2', source: 'service-layer', target: 'monitoring-layer', animated: true },
  { id: 'e4-3', source: 'monitoring-layer', target: 'data-layer', animated: true },
];