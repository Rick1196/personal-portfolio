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

export const requestUserPermissions = async (email: string) => {
  try {
    const myHeaders = new Headers();
    myHeaders.append("email", email);
    const permissions = await fetch("/api/user/permission", {
      method: "GET",
      credentials: "same-origin",
      headers: myHeaders,
    });
    const result = await permissions.json();
    console.log(result);
    return result;
  } catch (error) {
    return { permissions: null };
    console.error("Error requesting user permissions", error);
  }
};

export const setDefaultPermissions = async (email: string) => {
  try {
    const myHeaders = new Headers();
    myHeaders.append("email", email);
    const response = await fetch("/api/user/default_permissions", {
      method: "POST",
      credentials: "same-origin",
      headers: myHeaders,
    });
    const result = await response.json();
    console.log("response", result);
    return result;
  } catch (error) {
    console.error("Error setting default permissions", error);
  }
};
