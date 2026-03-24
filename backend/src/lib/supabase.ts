import { createClient } from "@supabase/supabase-js";

const url = process.env.SUPABASE_URL!
const key = process.env.SUPABASE_SERVICE_KEY

if( !url||key == null ){
    throw new Error("Datos env faltantes")
}

export const supabase = createClient(url,key)