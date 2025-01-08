import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { Layers } from 'lucide-react';

interface ServiceNodeData {
  label: string;
  service: 'quickpay' | 'capital' | 'invoice' | 'settings';
  status?: 'active' | 'inactive';
}

export const ServiceNode = memo(({ data }: { data: ServiceNodeData }) => {
  const getServiceColor = (service: ServiceNodeData['service']) => {
    const colors = {
      quickpay: 'border-emerald-400 bg-emerald-50',
      capital: 'border-blue-400 bg-blue-50',
      invoice: 'border-violet-400 bg-violet-50',
      settings: 'border-gray-400 bg-gray-50'
    };
    return colors[service];
  };

  return (
    <div className={`px-4 py-3 shadow-md rounded-lg border-2 ${getServiceColor(data.service)} backdrop-blur-sm`}>
      <Handle type="target" position={Position.Top} className="w-3 h-3" />
      <div className="flex items-center space-x-2">
        <Layers className="w-4 h-4 text-gray-600" />
        <div>
          <div className="font-bold text-gray-800">{data.label}</div>
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