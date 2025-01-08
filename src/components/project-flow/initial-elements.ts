import { Node, Edge } from '@xyflow/react';
import { layerNodes, serviceNodes } from './nodes/architecture-nodes';
import { architectureEdges } from './edges/architecture-edges';

export const nodes: Node[] = [...layerNodes, ...serviceNodes];
export const edges: Edge[] = architectureEdges;