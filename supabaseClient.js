import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = "https://sgxpgagdqzarjccqejvn.supabase.co"
const SUPABASE_ANON_KEY = "your-anon-public-key"   // copy this from API settings

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
