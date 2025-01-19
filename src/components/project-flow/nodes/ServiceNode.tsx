'use client';

import React from 'react';
import { Handle, Position } from 'reactflow';
import { Cloud, Server } from 'lucide-react';

interface ServiceNodeData {
  label: string;
  service: 'aws' | 'gcp' | 'azure';
  description?: string;
}

interface ServiceNodeProps {
  data: ServiceNodeData;
}

export function ServiceNode({ data }: ServiceNodeProps) {
  const getServiceColor = (service: string) => {
    switch (service) {
      case 'aws':
        return 'border-orange-200 bg-orange-50/50';
      case 'gcp':
        return 'border-blue-200 bg-blue-50/50';
      case 'azure':
        return 'border-purple-200 bg-purple-50/50';
      default:
        return 'border-gray-200 bg-gray-50/50';
    }
  };

  return (
    <div className={`px-4 py-3 shadow-md rounded-lg border-2 ${getServiceColor(data.service)} backdrop-blur-sm min-w-[200px]`}>
      <Handle 
        type="target" 
        position={Position.Top} 
        className="w-3 h-3"
        isConnectable={true}
      />
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Cloud className="w-4 h-4 text-gray-500" />
            <div className="font-bold text-gray-800">{data.label}</div>
          </div>
          <Server className="w-4 h-4 text-gray-500" />
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