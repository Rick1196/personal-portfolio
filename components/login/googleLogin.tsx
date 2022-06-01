import { Typography, Button } from "@mui/material";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import Google from "@mui/icons-material/Google";
import { handleLogin } from "./utils";

const GoogleLogin: FC = () => {
  return (
    <Button
      onClick={() => handleLogin("google")}
      variant="outlined"
      startIcon={<Google />}
    >
      Google
    </Button>
  );
};

export default GoogleLogin;
