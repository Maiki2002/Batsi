import "react-native-url-polyfill/auto"
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.EXPO_PUBLIC_URL_Supabase
const supabaseAnonKey = process.env.EXPO_PUBLIC_ANON_KEY_Supabase

export const supabase = createClient(supabaseUrl, supabaseAnonKey)