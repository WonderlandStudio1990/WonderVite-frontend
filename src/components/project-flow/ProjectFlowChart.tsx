import React, { useCallback } from 'react';
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

import { nodes as initialNodes, edges as initialEdges } from './initial-elements';
import { LayerNode } from './nodes/LayerNode';
import { ServiceNode } from './nodes/ServiceNode';

const nodeTypes = {
  layer: LayerNode,
  service: ServiceNode,
};

const ProjectFlowChart = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="h-[800px] bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200 shadow-xl">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        attributionPosition="bottom-right"
        minZoom={0.5}
        maxZoom={1.5}
      >
        <MiniMap 
          nodeColor={(node) => {
            switch (node.type) {
              case 'service':
                return '#818cf8';
              default:
                return '#e2e8f0';
            }
          }}
          maskColor="#f8fafc80"
        />
        <Controls />
        <Background color="#94a3b8" gap={16} />
      </ReactFlow>
    </div>
  );
};

export default ProjectFlowChart;