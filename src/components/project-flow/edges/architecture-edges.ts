import { Edge } from '@xyflow/react';

export const architectureEdges: Edge[] = [
  // Auth to Layout connection
  { 
    id: 'e1', 
    source: 'auth', 
    target: 'layout', 
    animated: true,
    style: { stroke: '#818cf8' }
  },
  // Layout to Features connection
  { 
    id: 'e2', 
    source: 'layout', 
    target: 'features', 
    animated: true,
    style: { stroke: '#818cf8' }
  },
  // Features to Services connections
  { 
    id: 'e3', 
    source: 'features', 
    target: 'billpay',
    style: { stroke: '#818cf8' }
  },
  { 
    id: 'e4', 
    source: 'features', 
    target: 'invoices',
    style: { stroke: '#818cf8' }
  },
  { 
    id: 'e5', 
    source: 'features', 
    target: 'capital',
    style: { stroke: '#818cf8' }
  },
  { 
    id: 'e6', 
    source: 'features', 
    target: 'quickpay',
    style: { stroke: '#818cf8' }
  },
  // Services to Data Layer connections
  { 
    id: 'e7', 
    source: 'billpay', 
    target: 'services',
    style: { stroke: '#818cf8' }
  },
  { 
    id: 'e8', 
    source: 'invoices', 
    target: 'services',
    style: { stroke: '#818cf8' }
  },
  { 
    id: 'e9', 
    source: 'capital', 
    target: 'services',
    style: { stroke: '#818cf8' }
  },
  { 
    id: 'e10', 
    source: 'quickpay', 
    target: 'services',
    style: { stroke: '#818cf8' }
  },
  // Services to Data connection
  { 
    id: 'e11', 
    source: 'services', 
    target: 'data', 
    animated: true,
    style: { stroke: '#818cf8' }
  }
];