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
} from "@mui/material";
import { ButtonLink } from "./navbar.styles";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "styled-components";
import { CustomTypography, CustomMenuItem, CustomMenu } from "@components/styles";
import ThemeToggler from "./themeToggler";
import useLogout from "@components/login/useLogout";
const pages = ["Bio", "Contact Me"];


const CustomAppBar = styled(AppBar)(({ theme }: any) => ({
  backgroundColor: "transparent !important",
  color: `${theme.theme.text} !important`,
}));
const CustomButtonLink = styled(ButtonLink)(({ theme }: any) => ({
  color: `${theme.theme.text} !important`,
}));

const CustomBox = styled(Box)(({ theme }: any) => ({
  gap: "8px",
  display: "flex",
  color: `${theme.theme.text} !important`,
  backgroundColor: `${theme.theme.body} !important`,
}));

const Navbar: FC<any> = ({ user }) => {
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

          <UserOptions user={user} />
        </Toolbar>
      </Container>
    </CustomAppBar>
  );
};

const UserOptions: FC<any> = ({ user }) => {
  const [logout] = useLogout();
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
      {user && user.user_metadata && (
        <>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src={user.user_metadata.avatar_url} />
            </IconButton>
          </Tooltip>
          <CustomMenu
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
            <CustomMenuItem key={"navbar-logout-button"} onClick={logout}>
              <CustomTypography textAlign="center">Logout</CustomTypography>
            </CustomMenuItem>
          </CustomMenu>
        </>
      )}
    </CustomBox>
  );
};

export default Navbar;
