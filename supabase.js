
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://iuoouhhswbdzhgaefain.supabase.co";

const SUPABASE_KEY = "sb_publishable_oqnJO_3t3HPxJhL4Z9L8kA_CbrWcCZH";

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
