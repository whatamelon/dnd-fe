import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL!,
  import.meta.env.VITE_SUPABASE_ANON_KEY!,
  {
    auth: {
      // 쿠키 기반 세션(Next.js가 아니어도 무방). 필요 시 옵션 조절
      persistSession: true,
      autoRefreshToken: true,
    },
  }
)
