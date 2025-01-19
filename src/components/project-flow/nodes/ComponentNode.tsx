'use client';

import React from 'react';
import { Handle, Position } from 'reactflow';

interface ComponentNodeData {
  label: string;
  type: string;
}

interface ComponentNodeProps {
  data: ComponentNodeData;
}

export function ComponentNode({ data }: ComponentNodeProps) {
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-violet-200">
      <Handle 
        type="target" 
        position={Position.Top} 
        className="w-3 h-3"
        isConnectable={true}
      />
      <div>
        <div className="font-bold">{data.label}</div>
        <div className="text-xs text-gray-500">{data.type}</div>
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