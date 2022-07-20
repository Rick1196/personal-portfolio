import "../styles/globals.css";
import type { AppProps } from "next/app";
import styled, { ThemeProvider } from "styled-components";
import jwt from "jsonwebtoken";
import { colorPallete, GlobalStyles } from "@utils/theme";
import { useEffect, useRef, useState } from "react";
import React from "react";
import Navbar from "@components/navbar";
import useLogin from "@components/login/useLogin";
import { useRouter } from "next/router";
const defaultTheme = "light";
const HOME_PAGE = "/app/biography";

function MyApp({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState(defaultTheme);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  useEffect(() => {
    if (isMounted) {
      const theme = sessionStorage.getItem("theme");
      setTheme(theme ? theme : defaultTheme);
    }
  }, [isMounted]);
  useEffect(() => {
    if (theme) {
      sessionStorage.setItem("theme", theme);
    }
  }, [theme]);
  const router = useRouter();
  const [user] = useLogin();
  useEffect(() => {
    if (user) {
      console.log('redirect to home')
      router.push(HOME_PAGE);
    }
  }, [user]);
  return (
    <ThemeProvider
      theme={{
        theme: colorPallete[theme],
        setTheme,
        name: theme,
      }}
    >
      <GlobalStyles />
      {isMounted && (
        <>
          <Navbar user={pageProps.user} />
          <Component {...pageProps} />
        </>
      )}
    </ThemeProvider>
  );
}

export async function getServerSideProps(context: {
  req: { cookies: { [x: string]: any } };
}) {
  let supabaseToken = context?.req?.cookies["sb-access-token"];
  if (!supabaseToken) {
    throw new Error(
      "It should not happen! Since this page is guarded by _middlware.ts the presense of supabase token cookie (sb:token) should be already checked"
    );
  }
  return {
    props: {
      //we do not need to verify JWT signature since it has been already done in _middlware.ts
      user: jwt.decode(supabaseToken),
    },
  };
}

export default MyApp;
