import "../styles/globals.css";
import type { AppProps } from "next/app";
import styled, { ThemeProvider } from "styled-components";
import { colorPallete, GlobalStyles } from "@utils/theme";
import { useEffect, useState } from "react";
import React from "react";
import Navbar from "@components/navbar";
import { AuthType } from "@components/navbar/navbar";
import useLogin from "@components/login/useLogin";
import { useRouter } from "next/router";
const defaultTheme = "light";
const HOME_PAGE = "/app/biography";

function MyApp({ Component, pageProps }: AppProps) {
  const auth: AuthType = {
    data: {
      name: "",
      avatar: "",
    },
    isLoading: false,
    error: undefined,
  };
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState(defaultTheme);
  useEffect(() => {
    setIsMounted(true);
    const theme = sessionStorage.getItem("theme");
    setTheme(theme ? theme : defaultTheme);
  }, []);
  useEffect(() => {
    if (isMounted) {
      sessionStorage.setItem("theme", theme);
    }
  }, [theme, isMounted]);
  const router = useRouter();
  const [user] = useLogin();
  useEffect(() => {
    if (user) {
      console.log("Authenticated user", user);
      router.push(HOME_PAGE);
    }
  }, [user]);
  return (
    <ThemeProvider
      theme={{ theme: colorPallete[theme], setTheme, name: theme }}
    >
      <GlobalStyles />
      {isMounted && (
        <>
          {" "}
          <Navbar auth={auth} /> <Component {...pageProps} />
        </>
      )}
    </ThemeProvider>
  );
}

export default MyApp;
