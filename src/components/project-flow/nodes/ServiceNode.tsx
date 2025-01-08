import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { Layers } from 'lucide-react';

interface ServiceNodeData {
  label: string;
  service: string;
  status?: 'active' | 'inactive';
}

export const ServiceNode = memo(({ data }: { data: ServiceNodeData }) => {
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white/80 backdrop-blur-sm border-2 border-blue-200">
      <Handle type="target" position={Position.Top} className="w-3 h-3" />
      <div className="flex items-center space-x-2">
        <Layers className="w-4 h-4 text-blue-500" />
        <div>
          <div className="font-bold text-blue-700">{data.label}</div>
          <div className="text-xs text-gray-500">{data.service}</div>
          {data.status && (
            <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
              data.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
            }`}>
              {data.status}
            </span>
          )}
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} className="w-3 h-3" />
    </div>
  );
});

ServiceNode.displayName = 'ServiceNode';