import { Edge } from '@xyflow/react';

export const architectureEdges: Edge[] = [
  { 
    id: 'e1', 
    source: 'development', 
    target: 'auth', 
    animated: true,
    style: { stroke: '#818cf8' }
  },
  { 
    id: 'e2', 
    source: 'auth', 
    target: 'client', 
    animated: true,
    style: { stroke: '#818cf8' }
  },
  { 
    id: 'e3', 
    source: 'client', 
    target: 'quickpay',
    style: { stroke: '#818cf8' }
  },
  { 
    id: 'e4', 
    source: 'client', 
    target: 'capital',
    style: { stroke: '#818cf8' }
  },
  { 
    id: 'e5', 
    source: 'client', 
    target: 'invoice',
    style: { stroke: '#818cf8' }
  },
  { 
    id: 'e6', 
    source: 'quickpay', 
    target: 'validation',
    style: { stroke: '#818cf8' }
  },
  { 
    id: 'e7', 
    source: 'capital', 
    target: 'validation',
    style: { stroke: '#818cf8' }
  },
  { 
    id: 'e8', 
    source: 'invoice', 
    target: 'validation',
    style: { stroke: '#818cf8' }
  },
  { 
    id: 'e9', 
    source: 'validation', 
    target: 'service', 
    animated: true,
    style: { stroke: '#818cf8' }
  },
  { 
    id: 'e10', 
    source: 'service', 
    target: 'monitoring', 
    animated: true,
    style: { stroke: '#818cf8' }
  },
  { 
    id: 'e11', 
    source: 'monitoring', 
    target: 'data', 
    animated: true,
    style: { stroke: '#818cf8' }
  }
];