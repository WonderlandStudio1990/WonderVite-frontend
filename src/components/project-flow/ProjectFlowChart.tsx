import { useCallback } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { initialNodes, initialEdges } from './initial-elements';
import { LayerNode } from './nodes/LayerNode';
import { ServiceNode } from './nodes/ServiceNode';

const nodeTypes = {
  layerNode: LayerNode,
  serviceNode: ServiceNode,
};

export const ProjectFlowChart = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params) => {
    console.log('New connection:', params);
    setEdges((eds) => addEdge(params, eds));
  }, []);

  return (
    <div style={{ width: '100%', height: '80vh' }} className="bg-gray-50 rounded-lg shadow-inner">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        attributionPosition="bottom-right"
      >
        <Controls />
        <MiniMap />
        <Background gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};