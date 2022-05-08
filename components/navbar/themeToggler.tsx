import { Avatar, Tooltip, IconButton } from "@mui/material";
import { FC } from "react";
import styled, { useTheme } from "styled-components";
const ThemeButton = styled.button`
  border: none;
  background-size: cover;
  &:hover {
    cursor: pointer;
  }
`;
const ThemeToggler: FC = () => {
  const theme = useTheme();
  return (
    <Tooltip title="theme">
      <IconButton
        onClick={() =>
          theme.setTheme((currentTheme: string) => {
            if (currentTheme === "dark") {
              return "light";
            } else {
              return "dark";
            }
          })
        }
        sx={{ p: 0 }}
      >
        <Avatar src={theme.name === "dark" ? "./bulb.svg" : "./moon.svg"} />
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggler;
