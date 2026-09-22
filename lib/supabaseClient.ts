import { createClient, SupabaseClient } from "@supabase/supabase-js";

export type SubmissionStatus = "new" | "read" | "replied" | "archived";

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  subject?: string | null;
  message?: string | null;
  website_url?: string | null;
  inquiry_id?: string | null;
  query_messages?: string[] | null;
  status: SubmissionStatus;
  created_at: string;
  updated_at: string;
}

export interface ContactSubmissionInsert {
  name: string;
  email: string;
  phone?: string | null;
  subject?: string | null;
  message?: string | null;
  website_url?: string | null;
  inquiry_id?: string | null;
  query_messages?: string[] | null;
  status?: SubmissionStatus;
}

export interface ContactSubmissionUpdate {
  status?: SubmissionStatus;
  name?: string;
  email?: string;
  phone?: string | null;
  subject?: string | null;
  message?: string | null;
  website_url?: string | null;
  inquiry_id?: string | null;
  query_messages?: string[] | null;
}

let clientInstance: SupabaseClient | null = null;
let serverInstance: SupabaseClient | null = null;

/**
 * Returns a client-safe Supabase instance using public anon credentials.
 */
export function getSupabaseClient(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    return null;
  }

  if (!clientInstance) {
    clientInstance = createClient(url, anonKey, {
      auth: {
        persistSession: typeof window !== "undefined",
      },
    });
  }

  return clientInstance;
}

/**
 * Returns a server-side Supabase instance.
 * Prefers the service role key for administrative tasks / RLS bypass,
 * and falls back to anon key if service role is not set.
 */
export function getServerSupabase(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    return null;
  }

  if (!serverInstance) {
    serverInstance = createClient(url, key, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });
  }

  return serverInstance;
}

// Backward compatible export
export const supabase = {
  get client() {
    return getSupabaseClient();
  },
};
