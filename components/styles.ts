import React, { FC, useState, MouseEvent } from "react";
import { Typography } from "@mui/material";
import styled from "styled-components";

export const CustomTypography = styled(Typography)(({ theme }: any) => ({
  color: `${theme.theme.text} !important`,
}));
