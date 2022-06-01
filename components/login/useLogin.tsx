import { User } from "@supabase/gotrue-js";
import { supabase } from "@utils/supabase";
import React, { useEffect, useState } from "react";

const useLogin = () => {
  const [user, setUser] = useState<User | undefined>(
    supabase.auth.user() || undefined
  );
  useEffect(() => {
    console.log("setting auth listener");
    supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("user change", session);
      let newUser = supabase.auth.user();
      if (newUser) {
        await fetch("/api/auth/set", {
          method: "POST",
          headers: new Headers({ "Content-Type": "application/json" }),
          credentials: "same-origin",
          body: JSON.stringify({ event, session }),
        });
      }
      setUser(supabase.auth.user() || undefined);
    });
  }),
    [];
  return [user, setUser];
};

export default useLogin;
