import { layerNodes, serviceNodes } from './nodes/architecture-nodes';
import { architectureEdges } from './edges/architecture-edges';

export const nodes = [...layerNodes, ...serviceNodes];
export const edges = architectureEdges;