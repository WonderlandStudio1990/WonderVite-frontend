import React from 'react';
import ProjectFlowChart from '@/components/project-flow/ProjectFlowChart';

const ProjectFlow = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-gray-900">WonderPay Architecture</h1>
        <p className="text-gray-600">
          Interactive visualization of WonderPay's system architecture and data flow. Hover over nodes for more information about each component.
        </p>
      </div>
      <ProjectFlowChart />
    </div>
  );
};

export default ProjectFlow;