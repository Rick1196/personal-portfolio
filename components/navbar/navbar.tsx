import React, { FC, useState, MouseEvent } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
} from "@mui/material";
import { ButtonLink } from "./navbar.styles";
import MenuIcon from "@mui/icons-material/Menu";
import styled, { useTheme } from "styled-components";
import { CustomTypography } from "@components/styles";
import ThemeToggler from "./themeToggler";
const pages = ["Bio", "Contact Me"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const CustomMenuItem = styled(MenuItem)(({ theme }: any) => ({
  color: `${theme.theme.text} !important`,
}));

const CustomAppBar = styled(AppBar)(({ theme }: any) => ({
  backgroundColor: "transparent !important",
  color: `${theme.theme.text} !important`,
}));
const CustomButtonLink = styled(ButtonLink)(({ theme }: any) => ({
  color: `${theme.theme.text} !important`,
}));

const CustomBox = styled(Box)(() => ({
  gap: "8px",
  display: "flex",
}));

export type AuthType = {
  data: {
    name: string;
    avatar: string;
  };
  isLoading: boolean;
  error: any;
};
type NavbarProps = {
  auth: AuthType;
};

const Navbar: FC<NavbarProps> = ({ auth }: NavbarProps) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <CustomAppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CustomTypography
            variant="h6"
            noWrap
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            My personal porfolio
          </CustomTypography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <CustomMenuItem key={page} onClick={handleCloseNavMenu}>
                  <CustomTypography textAlign="center">{page}</CustomTypography>
                </CustomMenuItem>
              ))}
            </Menu>
          </Box>
          <CustomTypography
            variant="h6"
            noWrap
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            My personal porfolio
          </CustomTypography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <CustomButtonLink
                role="button"
                key={page}
                onClick={handleCloseNavMenu}
              >
                {page}
              </CustomButtonLink>
            ))}
          </Box>

          {auth && auth.data && <UserOptions />}
        </Toolbar>
      </Container>
    </CustomAppBar>
  );
};

const UserOptions: FC = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <CustomBox sx={{ flexGrow: 0 }}>
      <ThemeToggler />
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <CustomTypography textAlign="center">{setting}</CustomTypography>
          </MenuItem>
        ))}
      </Menu>
    </CustomBox>
  );
};

export default Navbar;
