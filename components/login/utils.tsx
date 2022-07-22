import { Provider } from "@supabase/supabase-js";
import { supabase } from "@utils/supabase";
import portfolioAPI from "api/portfolio";

export const handleLogin = async (provider: Provider) => {
  try {
    const { user, session, error } = await supabase.auth.signIn({
      provider: provider,
    });
  } catch (error) {
    console.log(error);
  }
};

export const logOut = async () => {
  await supabase.auth.signOut();
  await portfolioAPI.user.remove();
};
