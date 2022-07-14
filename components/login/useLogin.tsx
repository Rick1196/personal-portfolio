import { User } from "@supabase/gotrue-js";
import { supabase } from "@utils/supabase";
import React, { useEffect, useState } from "react";
import { requestUserPermissions, setDefaultPermissions } from "./utils";

const useLogin = () => {
  const [user, setUser] = useState<User | undefined>(
    supabase.auth.user() || undefined
  );
  useEffect(() => {
    // TODO: update method to avoid ticks
    supabase.auth.onAuthStateChange(async (event, session) => {
      const newUser = supabase.auth.user();
      if (newUser && !user) {
        await fetch("/api/auth/set", {
          method: "POST",
          headers: new Headers({ "Content-Type": "application/json" }),
          credentials: "same-origin",
          body: JSON.stringify({ event, session }),
        });
        const userPermissions = await requestUserPermissions(
          newUser.email as string
        );
        if (!userPermissions.permissions.length) {
          setDefaultPermissions(newUser.email as string);
        }
      }
      setUser(supabase.auth.user() || undefined);
    });
  }),
    [];
  return [user, setUser];
};

export default useLogin;
