import React from 'react';
import { ProjectFlowChart } from '@/components/project-flow/ProjectFlowChart';

const ProjectFlow = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Project Architecture</h1>
        <p className="text-gray-500 mt-2">
          Interactive visualization of WonderPay's components and data flow
        </p>
      </div>
      <ProjectFlowChart />
    </div>
  );
};

export default ProjectFlow;