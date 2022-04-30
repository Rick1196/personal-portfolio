import { Typography, Button } from "@mui/material";
import React, { FC } from "react";
import Google from "@mui/icons-material/Google";
import { CenteredBox, CenteredContainer } from "./login.style";

const Login: FC = () => {
  return (
    <CenteredContainer>
      <CenteredBox>
        <Typography variant="h6">Login with</Typography>
        <Button variant="outlined" startIcon={<Google />}>
          Google
        </Button>
      </CenteredBox>
    </CenteredContainer>
  );
};

export default Login;
