import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const authHeader = req.headers.get('Authorization')
    if (!authHeader) {
      throw new Error('No authorization header')
    }

    const { data: { user }, error: userError } = await supabaseClient.auth.getUser(
      authHeader.replace('Bearer ', '')
    )

    if (userError || !user) {
      throw new Error('Unauthorized')
    }

    // Get user metadata
    const { data: profile } = await supabaseClient
      .from('profiles')
      .select('*')
      .eq('user_id', user.id)
      .single()

    // Get Monite access token
    const moniteApiUrl = Deno.env.get('MONITE_API_URL') || 'https://api.sandbox.monite.com/v1'
    const moniteClientId = Deno.env.get('MONITE_CLIENT_ID')
    const moniteClientSecret = Deno.env.get('MONITE_CLIENT_SECRET')

    if (!moniteClientId || !moniteClientSecret) {
      throw new Error('Missing Monite credentials')
    }

    const tokenResponse = await fetch(`${moniteApiUrl}/auth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-monite-version': '2024-05-25'
      },
      body: JSON.stringify({
        grant_type: 'client_credentials',
        client_id: moniteClientId,
        client_secret: moniteClientSecret
      })
    })

    if (!tokenResponse.ok) {
      throw new Error('Failed to get Monite token')
    }

    const { access_token } = await tokenResponse.json()

    // Create Monite entity with user metadata
    const metadata = user.user_metadata || {}
    const createEntityResponse = await fetch(`${moniteApiUrl}/entities`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${access_token}`,
        'Content-Type': 'application/json',
        'x-monite-version': '2024-05-25'
      },
      body: JSON.stringify({
        type: metadata.business_type || 'individual',
        email: user.email,
        address: {
          country: metadata.country || 'US',
          city: metadata.city || 'Los Angeles',
          state: metadata.state || 'CA',
          postal_code: metadata.postal_code || '90001',
          line1: metadata.address_line1 || ''
        },
        tax_id: metadata.tax_id || '',
        [metadata.business_type === 'individual' ? 'individual' : 'organization']: {
          ...(metadata.business_type === 'individual' 
            ? {
                first_name: metadata.first_name || user.email?.split('@')[0] || 'User',
                last_name: metadata.last_name || 'Name'
              }
            : {
                legal_name: metadata.business_name || 'My Business',
                company_type: 'corporation'
              }
          )
        }
      })
    })

    if (!createEntityResponse.ok) {
      throw new Error('Failed to create Monite entity')
    }

    const moniteEntity = await createEntityResponse.json()

    // Update the entities table
    const { error: updateError } = await supabaseClient
      .from('entities')
      .update({ monite_entity_id: moniteEntity.id })
      .eq('user_id', user.id)

    if (updateError) {
      throw new Error('Failed to update entity')
    }

    // Create audit log
    await supabaseClient
      .from('monite_audit_logs')
      .insert({
        user_id: user.id,
        entity_id: moniteEntity.id,
        event_type: 'entity_created',
        status: 'success',
        details: moniteEntity
      })

    return new Response(
      JSON.stringify({ success: true, entity: moniteEntity }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})