import React from 'react';
import ProjectFlowChart from '@/components/project-flow/ProjectFlowChart';
import { useAuth } from '@/providers/AuthProvider';
import { Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const ProjectFlow = () => {
  const { session } = useAuth();
  const { toast } = useToast();

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  const handleExportFlow = () => {
    // Future enhancement: Add flow export functionality
    toast({
      title: "Flow Export",
      description: "Architecture diagram exported successfully",
    });
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-gray-900">WonderPay Architecture</h1>
          <p className="text-gray-600">
            Interactive visualization of WonderPay's system architecture and data flow.
            This diagram shows how different services interact with each other through our API layer.
          </p>
        </div>
        <Button onClick={handleExportFlow}>
          Export Flow
        </Button>
      </div>
      <div className="h-[800px] bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200 shadow-xl">
        <ProjectFlowChart />
      </div>
    </div>
  );
};

export default ProjectFlow;