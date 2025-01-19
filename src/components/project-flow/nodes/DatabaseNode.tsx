'use client';

import React from 'react';
import { Handle, Position } from 'reactflow';
import { Database } from 'lucide-react';

interface DatabaseNodeData {
  label: string;
}

interface DatabaseNodeProps {
  data: DatabaseNodeData;
}

export function DatabaseNode({ data }: DatabaseNodeProps) {
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-blue-200">
      <Handle 
        type="target" 
        position={Position.Top} 
        className="w-3 h-3"
        isConnectable={true}
      />
      <div className="flex items-center">
        <Database className="w-4 h-4 text-blue-500 mr-2" />
        <div>
          <div className="font-bold">{data.label}</div>
        </div>
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