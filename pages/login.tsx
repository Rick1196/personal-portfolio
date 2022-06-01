import React, { useEffect } from "react";
import type { NextPage } from "next";
import { CenteredBox, CenteredContainer } from "@components/login/login.style";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import useLogin from "@components/login/useLogin";
import GoogleLogin from "@components/login";

const ComponentName: NextPage = () => {
  return (
    <CenteredContainer>
      <CenteredBox>
        <Typography variant="h6">Login with</Typography>
        <GoogleLogin />
      </CenteredBox>
    </CenteredContainer>
  );
};
export default ComponentName;
