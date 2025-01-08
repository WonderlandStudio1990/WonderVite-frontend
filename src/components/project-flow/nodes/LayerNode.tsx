import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';

interface LayerNodeData {
  label: string;
  type: string;
  description: string;
}

export const LayerNode = memo(({ data }: { data: LayerNodeData }) => {
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white/80 backdrop-blur-sm border-2 border-indigo-200 min-w-[200px]">
      <Handle type="target" position={Position.Top} className="w-3 h-3" />
      <div className="space-y-2">
        <div className="font-bold text-indigo-700">{data.label}</div>
        <div className="text-xs text-gray-600">{data.type}</div>
        <div className="text-sm text-gray-700">{data.description}</div>
      </div>
      <Handle type="source" position={Position.Bottom} className="w-3 h-3" />
    </div>
  );
});

LayerNode.displayName = 'LayerNode';