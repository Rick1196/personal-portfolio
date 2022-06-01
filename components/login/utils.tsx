import { Provider } from "@supabase/supabase-js";
import { supabase } from "@utils/supabase";

export const handleLogin = async (provider: Provider) => {
  try {
    const { user, session, error } = await supabase.auth.signIn({
      provider: provider,
    });
  } catch (error) {
    console.log(error);
  }
};
