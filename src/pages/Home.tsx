import { CreateEntityForm } from '@/components/onboarding/CreateEntityForm';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <CreateEntityForm />
      </div>
    </div>
  );
};

export default Home;