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
import { useToast } from '@/hooks/use-toast';

const nodeTypes = {
  layer: LayerNode,
  service: ServiceNode,
};

const nodeClassName = (node) => node.type;

const ProjectFlowChart = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const { toast } = useToast();

  const onConnect = useCallback(
    (params) => {
      setEdges((eds) => addEdge(params, eds));
      toast({
        title: "Connection Created",
        description: "New service connection established",
      });
    },
    [setEdges, toast]
  );

  const onNodeClick = useCallback((event, node) => {
    toast({
      title: node.data.label,
      description: node.data.description || "Component of the WonderPay architecture",
    });
  }, [toast]);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onNodeClick={onNodeClick}
      fitView
      attributionPosition="bottom-right"
      nodeTypes={nodeTypes}
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
  );
};

export default ProjectFlowChart;