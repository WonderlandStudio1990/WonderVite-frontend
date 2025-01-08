import { Node, Edge } from '@xyflow/react';

export const initialNodes: Node[] = [
  // Frontend Components
  {
    id: 'dashboard',
    type: 'componentNode',
    position: { x: 250, y: 0 },
    data: { label: 'Dashboard', type: 'Page Component' },
  },
  {
    id: 'billpay',
    type: 'componentNode',
    position: { x: 50, y: 100 },
    data: { label: 'Bill Pay', type: 'Page Component' },
  },
  {
    id: 'capital',
    type: 'componentNode',
    position: { x: 250, y: 100 },
    data: { label: 'Capital', type: 'Page Component' },
  },
  {
    id: 'quickpay',
    type: 'componentNode',
    position: { x: 450, y: 100 },
    data: { label: 'Quick Pay', type: 'Page Component' },
  },

  // API Endpoints
  {
    id: 'bills-api',
    type: 'apiNode',
    position: { x: 50, y: 250 },
    data: { 
      label: 'Bills API',
      method: 'GET',
      endpoint: '/api/bills'
    },
  },
  {
    id: 'capital-api',
    type: 'apiNode',
    position: { x: 250, y: 250 },
    data: { 
      label: 'Capital API',
      method: 'POST',
      endpoint: '/api/capital/applications'
    },
  },
  {
    id: 'quickpay-api',
    type: 'apiNode',
    position: { x: 450, y: 250 },
    data: { 
      label: 'QuickPay API',
      method: 'POST',
      endpoint: '/api/quickpay'
    },
  },

  // Database Tables
  {
    id: 'bills-db',
    type: 'databaseNode',
    position: { x: 50, y: 400 },
    data: { 
      label: 'Bills',
      table: 'bills'
    },
  },
  {
    id: 'capital-db',
    type: 'databaseNode',
    position: { x: 250, y: 400 },
    data: { 
      label: 'Capital Applications',
      table: 'wonderpay_capital_applications'
    },
  },
  {
    id: 'quickpay-db',
    type: 'databaseNode',
    position: { x: 450, y: 400 },
    data: { 
      label: 'Quick Pay Transactions',
      table: 'quick_pay_transactions'
    },
  },
];

export const initialEdges: Edge[] = [
  // Dashboard connections
  { id: 'e1-1', source: 'dashboard', target: 'billpay' },
  { id: 'e1-2', source: 'dashboard', target: 'capital' },
  { id: 'e1-3', source: 'dashboard', target: 'quickpay' },

  // Bill Pay flow
  { id: 'e2-1', source: 'billpay', target: 'bills-api' },
  { id: 'e2-2', source: 'bills-api', target: 'bills-db', animated: true },

  // Capital flow
  { id: 'e3-1', source: 'capital', target: 'capital-api' },
  { id: 'e3-2', source: 'capital-api', target: 'capital-db', animated: true },

  // Quick Pay flow
  { id: 'e4-1', source: 'quickpay', target: 'quickpay-api' },
  { id: 'e4-2', source: 'quickpay-api', target: 'quickpay-db', animated: true },
];