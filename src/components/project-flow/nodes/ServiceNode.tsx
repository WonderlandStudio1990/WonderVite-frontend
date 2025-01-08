import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { Layers, AlertCircle } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ServiceNodeData {
  label: string;
  service: 'quickpay' | 'capital' | 'invoice';
  status?: 'active' | 'inactive';
  description?: string;
  hook?: string;
}

export const ServiceNode = memo(({ data }: { data: ServiceNodeData }) => {
  const getServiceColor = (service: ServiceNodeData['service']) => {
    const colors = {
      quickpay: 'border-emerald-400 bg-emerald-50/80',
      capital: 'border-blue-400 bg-blue-50/80',
      invoice: 'border-violet-400 bg-violet-50/80'
    };
    return colors[service];
  };

  return (
    <div className={`px-4 py-3 shadow-md rounded-lg border-2 ${getServiceColor(data.service)} backdrop-blur-sm min-w-[200px]`}>
      <Handle type="target" position={Position.Top} className="w-3 h-3" />
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Layers className="w-4 h-4 text-gray-600" />
            <div>
              <div className="font-bold text-gray-800">{data.label}</div>
              {data.hook && (
                <div className="text-xs text-gray-500 font-mono">{data.hook}</div>
              )}
            </div>
          </div>
          {data.description && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <AlertCircle className="h-4 w-4 text-gray-500" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs text-sm">{data.description}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
        {data.status && (
          <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
            data.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
          }`}>
            {data.status}
          </span>
        )}
      </div>
      <Handle type="source" position={Position.Bottom} className="w-3 h-3" />
    </div>
  );
});

ServiceNode.displayName = 'ServiceNode';