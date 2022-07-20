import { User } from "@supabase/gotrue-js";
import { supabase } from "@utils/supabase";
import React, { useEffect, useState } from "react";
import { requestUserPermissions, setDefaultPermissions } from "./utils";

const useLogin = () => {
  const [user, setUser] = useState<User | undefined>(undefined);
  useEffect(() => {
    if (user === undefined) {
      const authSub = supabase.auth.onAuthStateChange(async (event, session) => {
        console.log(event, session);
        const newUser = supabase.auth.user();
        if (newUser) {
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
            await setDefaultPermissions(newUser.email as string);
          }
          setUser(newUser);
        }
      });
      console.log('auth sub id', authSub.data?.id)
      return () => authSub.data?.unsubscribe();
    }
  }, []);
  return [user, setUser];
};

export default useLogin;
