import React, { FC, useState, MouseEvent } from "react";
import { Menu, MenuItem, Typography } from "@mui/material";
import styled from "styled-components";

export const CustomTypography = styled(Typography)(({ theme }) => ({
  color: `${theme.theme.text} !important`,
}));

export const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
  color: `${theme.theme.text} !important`,
  backgroundColor: `${theme.theme.body} !important`,
}));

export const CustomMenu = styled(Menu)(({ theme }) => ({
  color: `${theme.theme.text} !important`,
  '.MuiMenu-list': {
    backgroundColor: `${theme.theme.body} !important`,
  },
}));
