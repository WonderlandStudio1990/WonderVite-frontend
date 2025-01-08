import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';

interface ComponentNodeData {
  label: string;
  type: string;
}

export const ComponentNode = memo(({ data }: { data: ComponentNodeData }) => {
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-violet-200">
      <Handle type="target" position={Position.Top} className="w-3 h-3" />
      <div>
        <div className="font-bold">{data.label}</div>
        <div className="text-xs text-gray-500">{data.type}</div>
      </div>
      <Handle type="source" position={Position.Bottom} className="w-3 h-3" />
    </div>
  );
});

ComponentNode.displayName = 'ComponentNode';