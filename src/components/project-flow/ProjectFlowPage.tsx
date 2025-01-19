'use client'

import React from 'react';
import { ProjectFlowChart } from '@/components/project-flow/ProjectFlowChart';
import { useAuth } from '@/providers/AuthProvider';

const ProjectFlowPage: React.FC = () => {
  const { session } = useAuth();

  if (!session) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Project Flow</h1>
      <ProjectFlowChart />
    </div>
  );
};

export default ProjectFlowPage;
