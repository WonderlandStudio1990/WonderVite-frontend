import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { userId } = await req.json()
    if (!userId) {
      throw new Error('User ID is required')
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Missing Supabase configuration')
    }
    const supabase = createClient(supabaseUrl, supabaseKey)

    // Get Monite credentials
    const clientId = Deno.env.get('MONITE_CLIENT_ID')
    const clientSecret = Deno.env.get('MONITE_CLIENT_SECRET')
    const entityId = Deno.env.get('MONITE_ENTITY_ID')
    
    if (!clientId || !clientSecret || !entityId) {
      throw new Error('Missing Monite configuration')
    }

    // Get new token from Monite
    const moniteResponse = await fetch('https://api.sandbox.monite.com/v1/auth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-monite-version': '2024-05-25'
      },
      body: JSON.stringify({
        grant_type: 'client_credentials',
        client_id: clientId,
        client_secret: clientSecret,
      })
    })

    if (!moniteResponse.ok) {
      throw new Error('Failed to refresh Monite token')
    }

    const tokenData = await moniteResponse.json()
    
    // Calculate expiration time (usually 1 hour from now)
    const expiresAt = new Date()
    expiresAt.setSeconds(expiresAt.getSeconds() + tokenData.expires_in)

    // Update token in database
    const { error: updateError } = await supabase
      .from('monite_tokens')
      .upsert({
        user_id: userId,
        access_token: tokenData.access_token,
        refresh_token: tokenData.refresh_token,
        expires_at: expiresAt.toISOString(),
      })

    if (updateError) {
      throw updateError
    }

    return new Response(
      JSON.stringify(tokenData),
      { 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json'
        }
      }
    )
  } catch (error) {
    console.error('Token refresh error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 400,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json'
        }
      }
    )
  }
})