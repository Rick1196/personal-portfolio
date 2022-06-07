import React, { FC } from "react";
import { supabase } from "@utils/supabase";
import { useRouter } from "next/router";

const useLogout = () => {
  const router = useRouter();
  const logout = async () => {
    try {
      await supabase.auth.signOut();
      await fetch("/api/auth/remove", {
        method: "GET",
        credentials: "same-origin",
      });
    } finally {
      router.push("/");
    }
  };
  return [logout];
};

export default useLogout;
