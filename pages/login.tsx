import React from "react";
import type { NextPage } from "next";
import { CenteredBox, CenteredContainer } from "@components/login/login.style";
import { Typography } from "@mui/material";
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
