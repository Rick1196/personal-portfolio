import { Typography, Button } from "@mui/material";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import Google from "@mui/icons-material/Google";
import { CenteredBox, CenteredContainer } from "./login.style";
import { User } from "@supabase/gotrue-js";
import { supabase } from "../../utils/supabase";

const dashboardRoute = "/app/dashboard";

const Login: FC = () => {
  const [user, setUser] = useState<User | undefined>(
    supabase.auth.user() || undefined
  );
  const router = useRouter();
  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
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
  });
  useEffect(() => {
    if (user) {
      console.log(user);
      router.push("/dashboard");
    }
  }, [user]);
  const handleLogin = async () => {
    try {
      const { user, session, error } = await supabase.auth.signIn({
        provider: "google",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <CenteredContainer>
      <CenteredBox>
        <Typography variant="h6">Login with</Typography>
        <Button onClick={handleLogin} variant="outlined" startIcon={<Google />}>
          Google
        </Button>
      </CenteredBox>
    </CenteredContainer>
  );
};

export default Login;
