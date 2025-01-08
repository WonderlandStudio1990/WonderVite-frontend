CREATE OR REPLACE FUNCTION public.handle_new_user_monite_setup()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Create the profile
  INSERT INTO public.profiles (user_id, username)
  VALUES (new.id, COALESCE(new.raw_user_meta_data->>'business_name', new.email));

  -- Create a default entity for the user
  INSERT INTO public.entities (
    user_id,
    name,
    status
  )
  VALUES (
    new.id,
    COALESCE(new.raw_user_meta_data->>'business_name', 'My Business'),
    'active'
  );

  -- Create default user settings
  INSERT INTO public.user_settings (
    user_id,
    display_name
  )
  VALUES (
    new.id,
    COALESCE(new.raw_user_meta_data->>'business_name', new.email)
  );

  RETURN new;
END;
$$;