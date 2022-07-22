import React, { FC } from "react";
import { supabase } from "@utils/supabase";
import { useRouter } from "next/router";
import { logOut } from "./utils";

const useLogout = () => {
  const router = useRouter();
  const logout = async () => {
    try {
      await logOut();
    } finally {
      router.push("/");
    }
  };
  return [logout];
};

export default useLogout;
