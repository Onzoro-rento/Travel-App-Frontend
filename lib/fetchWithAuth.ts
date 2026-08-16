"use client";

import { createClient } from "@/lib/supabase/client";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

function buildOptions(options: RequestInit, token?: string): RequestInit {
  return {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  };
}

/** Client Component ("use client") から呼ぶ */
export async function fetchWithAuth(
  path: string,
  options: RequestInit = {}
): Promise<Response> {
  const supabase = createClient();
  const { data: { session } } = await supabase.auth.getSession();
  return fetch(`${BASE_URL}${path}`, buildOptions(options, session?.access_token));
}
