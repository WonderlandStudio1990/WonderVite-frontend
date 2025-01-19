'use client';

import React from 'react';
import { Handle, Position } from 'reactflow';
import { Layers } from 'lucide-react';

interface LayerNodeData {
  label: string;
  type: 'frontend' | 'backend' | 'database' | 'infrastructure';
  description?: string;
}

interface LayerNodeProps {
  data: LayerNodeData;
}

export function LayerNode({ data }: LayerNodeProps) {
  const getLayerColor = (type: string) => {
    switch (type) {
      case 'frontend':
        return 'border-blue-200 bg-blue-50/50';
      case 'backend':
        return 'border-green-200 bg-green-50/50';
      case 'database':
        return 'border-purple-200 bg-purple-50/50';
      case 'infrastructure':
        return 'border-orange-200 bg-orange-50/50';
      default:
        return 'border-gray-200 bg-gray-50/50';
    }
  };

  return (
    <div className={`px-4 py-3 shadow-md rounded-lg border-2 ${getLayerColor(data.type)} backdrop-blur-sm min-w-[250px]`}>
      <Handle 
        type="target" 
        position={Position.Top} 
        className="w-3 h-3"
        isConnectable={true}
      />
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="font-bold text-gray-800">{data.label}</div>
          <Layers className="w-4 h-4 text-gray-500" />
        </div>
        {data.description && (
          <div className="text-sm text-gray-600">{data.description}</div>
        )}
      </div>
      <Handle 
        type="source" 
        position={Position.Bottom} 
        className="w-3 h-3"
        isConnectable={true}
      />
    </div>
  );
}