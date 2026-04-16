import { createBrowserClient } from '@supabase/ssr';

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return null as any; // Return null but cast to any to avoid breaking types for now
  }

  return createBrowserClient(
    supabaseUrl,
    supabaseKey
  );
}
