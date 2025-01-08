import React from 'react';
import ProjectFlowChart from '@/components/project-flow/ProjectFlowChart';
import { useSession } from '@supabase/auth-helpers-react';
import { Navigate } from 'react-router-dom';

const ProjectFlow = () => {
  const session = useSession();

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="p-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-gray-900">WonderPay Architecture</h1>
        <p className="text-gray-600">
          Interactive visualization of WonderPay's system architecture and data flow. 
          This diagram shows how different services interact with each other through our API layer.
        </p>
      </div>
      <ProjectFlowChart />
    </div>
  );
};

export default ProjectFlow;