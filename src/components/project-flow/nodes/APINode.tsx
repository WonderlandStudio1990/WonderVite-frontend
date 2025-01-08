import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';

interface APINodeData {
  label: string;
  method: string;
  endpoint: string;
}

export const APINode = memo(({ data }: { data: APINodeData }) => {
  const getMethodColor = (method: string) => {
    switch (method.toLowerCase()) {
      case 'get': return 'bg-blue-500';
      case 'post': return 'bg-green-500';
      case 'put': return 'bg-yellow-500';
      case 'delete': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-gray-200">
      <Handle type="target" position={Position.Top} className="w-3 h-3" />
      <div className="flex items-center">
        <span className={`px-2 py-1 rounded text-white text-xs ${getMethodColor(data.method)}`}>
          {data.method}
        </span>
        <span className="ml-2 text-sm font-medium">{data.label}</span>
      </div>
      <div className="mt-2">
        <code className="text-xs text-gray-500">{data.endpoint}</code>
      </div>
      <Handle type="source" position={Position.Bottom} className="w-3 h-3" />
    </div>
  );
});

APINode.displayName = 'APINode';