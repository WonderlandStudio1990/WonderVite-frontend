'use client';

import React from 'react';
import { Handle, Position } from 'reactflow';

interface APINodeData {
  method: string;
  path: string;
}

interface APINodeProps {
  data: APINodeData;
}

export function APINode({ data }: APINodeProps) {
  const getMethodColor = (method: string) => {
    switch (method.toUpperCase()) {
      case 'GET': return 'bg-blue-500';
      case 'POST': return 'bg-green-500';
      case 'PUT': return 'bg-yellow-500';
      case 'DELETE': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-gray-200">
      <Handle 
        type="target" 
        position={Position.Top} 
        className="w-3 h-3"
        isConnectable={true}
      />
      <div className="flex items-center">
        <span className={`px-2 py-1 rounded text-white text-xs ${getMethodColor(data.method)}`}>
          {data.method}
        </span>
        <span className="ml-2 text-sm font-medium">{data.path}</span>
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