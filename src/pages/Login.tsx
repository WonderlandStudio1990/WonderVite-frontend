import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from '@/providers/AuthProvider';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AuthError } from '@supabase/supabase-js';

const Login = () => {
  const navigate = useNavigate();
  const { session } = useAuth();
  const { toast } = useToast();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // If already authenticated, redirect to dashboard
    if (session) {
      navigate('/dashboard');
    }

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, currentSession) => {
      if (event === 'SIGNED_IN') {
        // Check if Monite entity exists
        const { data: entity, error: entityError } = await supabase
          .from('monite_entities')
          .select('*')
          .eq('user_id', currentSession?.user.id)
          .single();

        if (entityError || !entity) {
          toast({
            title: "Welcome!",
            description: "Please complete your business setup.",
          });
          navigate('/onboarding');
        } else {
          toast({
            title: "Welcome back!",
            description: "You have successfully signed in.",
          });
          navigate('/dashboard');
        }
      } else if (event === 'SIGNED_OUT') {
        setError(null);
      } else if (event === 'USER_UPDATED' && !currentSession) {
        setError("Authentication failed. Please try again.");
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [session, navigate, toast]);

  const getErrorMessage = (error: AuthError) => {
    switch (error.message) {
      case 'Invalid login credentials':
        return 'Invalid email or password. Please check your credentials.';
      case 'Email not confirmed':
        return 'Please verify your email address before signing in.';
      case 'User not found':
        return 'No account found with these credentials.';
      default:
        return error.message;
    }
  };

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

        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        
        <Auth
          supabaseClient={supabase}
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
          view="sign_in"
          localization={{
            variables: {
              sign_in: {
                email_label: 'Email',
                password_label: 'Password',
              },
              sign_up: {
                email_label: 'Email',
                password_label: 'Password',
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