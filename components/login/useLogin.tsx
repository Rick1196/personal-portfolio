import { User } from "@supabase/gotrue-js";
import { cookieNames } from "@utils/consts";
import cookies from "@utils/cookies";
import { supabase } from "@utils/supabase";
import portfolioAPI from "api/portfolio";
import React, { useEffect, useState } from "react";

const useLogin = () => {
  const [user, setUser] = useState<User | undefined>(undefined);
  useEffect(() => {
    const authSub = supabase.auth.onAuthStateChange(async (event, session) => {
      if (user === undefined) {
        const newUser = supabase.auth.user();
        if (newUser) {
          let userPermissions = [];
          await portfolioAPI.user.set({ event, session });
          userPermissions = await portfolioAPI.user.getPermissions(
            newUser.email as string
          );
          if (!userPermissions?.length) {
            userPermissions = await portfolioAPI.user.setDefaultPermissions(
              newUser.email as string
            );
          }
          setUser(newUser);
          cookies.set(cookieNames.permissions, JSON.stringify(userPermissions));
          console.log(userPermissions);
        }
      }
    });
    return () => authSub.data?.unsubscribe();
  }, []);
  return [user, setUser];
};

export default useLogin;
