import { supabase } from "$lib/supabaseClient";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
     const { data } = await supabase.from('contents').select().limit(20);
     return {
          contents: data ?? []
     }
}