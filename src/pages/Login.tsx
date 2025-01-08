import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from '@/providers/AuthProvider';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const navigate = useNavigate();
  const { session } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, currentSession) => {
      if (event === 'SIGNED_IN') {
        toast({
          title: "Welcome!",
          description: "You have successfully signed in.",
        });
        navigate('/dashboard');
      }
    });

    // If already authenticated, redirect to dashboard
    if (session) {
      navigate('/dashboard');
    }

    return () => subscription.unsubscribe();
  }, [session, navigate, toast]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-6">
          <h1 
            className="text-5xl font-bold text-[#1A1F2C]"
            style={{ fontFamily: 'Times New Roman, serif' }}
          >
            WonderPay
          </h1>
          
          <div className="w-20 h-20 mx-auto transform hover:scale-105 transition-transform duration-300">
            <img 
              src="/lovable-uploads/2cfe764c-e03d-4bd4-9aec-40a3f9d1a7ae.png" 
              alt="WonderPay Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        
        <Auth
          supabaseClient={supabase}
          view="sign_in"
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#1A1F2C',
                  brandAccent: '#403E43',
                }
              }
            },
            className: {
              container: 'w-full',
              button: 'w-full px-4 py-2 rounded-full',
              input: 'rounded-lg bg-white/50 backdrop-blur-sm',
            }
          }}
          providers={[]}
          redirectTo={window.location.origin + '/dashboard'}
          showLinks={true}
          magicLink={false}
          localization={{
            variables: {
              sign_in: {
                email_label: 'Email',
                password_label: 'Password',
              },
              sign_up: {
                email_label: 'Email',
                password_label: 'Password',
                business_name_label: 'Business Name',
                business_type_label: 'Business Type',
                country_label: 'Country',
                city_label: 'City',
                state_label: 'State',
                postal_code_label: 'Postal Code',
                address_line1_label: 'Address',
                tax_id_label: 'Tax ID',
              }
            }
          }}
        />

        <div className="flex items-center justify-center space-x-2">
          <p className="text-sm text-gray-600">
            Powered by Wonderland Studio
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;