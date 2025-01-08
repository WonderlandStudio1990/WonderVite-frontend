import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { Info } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface LayerNodeData {
  label: string;
  description: string;
  type: 'development' | 'auth' | 'client' | 'validation' | 'service' | 'monitoring' | 'data';
  tools?: string[];
}

export const LayerNode = memo(({ data }: { data: LayerNodeData }) => {
  const getLayerColor = (type: LayerNodeData['type']) => {
    const colors = {
      development: 'border-blue-400 bg-blue-50/80',
      auth: 'border-purple-400 bg-purple-50/80',
      client: 'border-green-400 bg-green-50/80',
      validation: 'border-yellow-400 bg-yellow-50/80',
      service: 'border-red-400 bg-red-50/80',
      monitoring: 'border-indigo-400 bg-indigo-50/80',
      data: 'border-pink-400 bg-pink-50/80'
    };
    return colors[type];
  };

  return (
    <div className={`px-4 py-3 shadow-md rounded-lg border-2 ${getLayerColor(data.type)} backdrop-blur-sm min-w-[250px]`}>
      <Handle type="target" position={Position.Top} className="w-3 h-3" />
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="font-bold text-gray-800">{data.label}</div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info className="h-4 w-4 text-gray-500" />
              </TooltipTrigger>
              <TooltipContent>
                <div className="max-w-xs">
                  <p className="text-sm">{data.description}</p>
                  {data.tools && (
                    <ul className="mt-2 text-xs list-disc list-inside">
                      {data.tools.map((tool) => (
                        <li key={tool}>{tool}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} className="w-3 h-3" />
    </div>
  );
});

LayerNode.displayName = 'LayerNode';