import { Node } from '@xyflow/react';

export const layerNodes: Node[] = [
  {
    id: 'development',
    type: 'layer',
    position: { x: 250, y: 0 },
    data: {
      label: 'Development Workflow',
      type: 'development',
      description: 'Development tools and processes for code quality',
      tools: [
        'TypeScript Compiler',
        'ESLint + Monite Rules',
        'Pre-commit Hooks',
        'OpenAPI Types Generator'
      ]
    }
  },
  {
    id: 'auth',
    type: 'layer',
    position: { x: 250, y: 100 },
    data: {
      label: 'Auth Layer (Clerk)',
      type: 'auth',
      description: 'Authentication and session management',
      tools: [
        'JWT Template',
        'Session Management',
        'Token Generation'
      ]
    }
  },
  {
    id: 'client',
    type: 'layer',
    position: { x: 250, y: 200 },
    data: {
      label: 'Client Layer',
      type: 'client',
      description: 'Frontend UI built with Next.js and Subframe',
      tools: [
        'Next.js',
        'Subframe Components',
        'Feature Components'
      ]
    }
  },
  {
    id: 'validation',
    type: 'layer',
    position: { x: 250, y: 400 },
    data: {
      label: 'Validation Layer',
      type: 'validation',
      description: 'Data validation using OpenAPI specifications',
      tools: [
        'OpenAPI Spec',
        'Request Validation',
        'Response Validation'
      ]
    }
  },
  {
    id: 'service',
    type: 'layer',
    position: { x: 250, y: 500 },
    data: {
      label: 'Service Layer',
      type: 'service',
      description: 'Core business logic powered by Monite SDK',
      tools: [
        'Payment Service',
        'Working Capital',
        'Invoice Service'
      ]
    }
  },
  {
    id: 'monitoring',
    type: 'layer',
    position: { x: 250, y: 600 },
    data: {
      label: 'Monitoring Layer',
      type: 'monitoring',
      description: 'System monitoring and webhooks',
      tools: [
        'Webhook Handlers',
        'API Monitoring',
        'Usage Limits'
      ]
    }
  },
  {
    id: 'data',
    type: 'layer',
    position: { x: 250, y: 700 },
    data: {
      label: 'Data Layer (Supabase)',
      type: 'data',
      description: 'Data storage and real-time updates',
      tools: [
        'Real-time Updates',
        'Row Level Security',
        'Data Sync'
      ]
    }
  }
];

export const serviceNodes: Node[] = [
  {
    id: 'quickpay',
    type: 'service',
    position: { x: 50, y: 300 },
    data: {
      label: 'QuickPay',
      service: 'quickpay',
      status: 'active',
      hook: 'useMonitePayment',
      description: 'Fast payment processing service'
    }
  },
  {
    id: 'capital',
    type: 'service',
    position: { x: 250, y: 300 },
    data: {
      label: 'Capital',
      service: 'capital',
      status: 'active',
      hook: 'useMoniteCapital',
      description: 'Business financing and capital management'
    }
  },
  {
    id: 'invoice',
    type: 'service',
    position: { x: 450, y: 300 },
    data: {
      label: 'Invoice',
      service: 'invoice',
      status: 'active',
      hook: 'useMoniteInvoice',
      description: 'Invoice generation and management'
    }
  }
];