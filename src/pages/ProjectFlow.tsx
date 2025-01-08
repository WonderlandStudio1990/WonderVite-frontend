import { ProjectFlowChart } from '@/components/project-flow/ProjectFlowChart';

const ProjectFlow = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">WonderPay Project Flow</h1>
        <p className="text-gray-500">Interactive visualization of project architecture and data flow</p>
      </div>
      <ProjectFlowChart />
    </div>
  );
};

export default ProjectFlow;