import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';

interface LayerNodeData {
  label: string;
  description: string;
  type: 'development' | 'auth' | 'client' | 'validation' | 'service' | 'monitoring' | 'data';
}

export const LayerNode = memo(({ data }: { data: LayerNodeData }) => {
  const getLayerColor = (type: LayerNodeData['type']) => {
    const colors = {
      development: 'border-blue-400 bg-blue-50',
      auth: 'border-purple-400 bg-purple-50',
      client: 'border-green-400 bg-green-50',
      validation: 'border-yellow-400 bg-yellow-50',
      service: 'border-red-400 bg-red-50',
      monitoring: 'border-indigo-400 bg-indigo-50',
      data: 'border-pink-400 bg-pink-50'
    };
    return colors[type];
  };

  return (
    <div className={`px-4 py-3 shadow-md rounded-lg border-2 ${getLayerColor(data.type)} backdrop-blur-sm min-w-[200px]`}>
      <Handle type="target" position={Position.Top} className="w-3 h-3" />
      <div className="space-y-2">
        <div className="font-bold text-gray-800">{data.label}</div>
        <div className="text-sm text-gray-600">{data.description}</div>
      </div>
      <Handle type="source" position={Position.Bottom} className="w-3 h-3" />
    </div>
  );
});

LayerNode.displayName = 'LayerNode';