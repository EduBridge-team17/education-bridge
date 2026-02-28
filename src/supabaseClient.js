import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://lmyvreuwtpyhucarijdr.supabase.co"
const supabaseKey = "SUPABASE_ANON_KEY"

export const supabase = createClient(supabaseUrl, supabaseKey)