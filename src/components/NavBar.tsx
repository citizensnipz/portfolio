import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectTheme, setTheme } from "../features/theme/themeSlice";
import { aboutMenu, portfolioMenu, contactMenu } from "../constants/menus";
import { aboutTitle, portfolioTitle, contactTitle } from "../constants/titles";
import { setMenu } from "../features/sideNav/sideNavSlice";
import { setCurrent, setDescription, setTitle } from "../features/hero/heroSlice";
import nameLogo from '../assets/img/nameLogo.png';

const NavBar: FC = () => {
  const dispatch = useAppDispatch();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const theme = useAppSelector(selectTheme);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMenuClick = (menu: string[]) : undefined => { 
    dispatch(setMenu(menu));
    dispatch(setDescription("Choose a selection from the menu..."));
    if (menu == aboutMenu) {
        dispatch(setCurrent("about"))
        dispatch(setTitle(aboutTitle))
    } else if (menu == portfolioMenu) {
        dispatch(setCurrent("portfolio"))
        dispatch(setTitle(portfolioTitle))
    } else {
        dispatch(setCurrent("contact"))
        dispatch(setTitle(contactTitle))
    }

    setAnchorElNav(null);
    return undefined;
  }

  const handleThemeClick = () => {
    if (theme == "light") {
      dispatch(setTheme("dark"));
    } else {
      dispatch(setTheme("light"));
    }
  };

  return (
    <AppBar position="static" style={{background: "#242321"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            {/* 
            <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                    display: { xs: 'none', md: 'flex' },
                }}
            >
                Josh Kroslowitz
            </Typography>
            
            */}
          <Box sx={{ display: { xs: 'none', md: 'flex'}}}>
           <img src={nameLogo} height='50'/> 
            </Box>  

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
              <MenuItem onClick={() => handleMenuClick(aboutMenu)}>
                <Typography textAlign="center">About Me</Typography>
              </MenuItem>
              <MenuItem onClick={() => handleMenuClick(portfolioMenu)}>
                <Typography textAlign="center">Portfolio</Typography>
              </MenuItem>
              <MenuItem onClick={() => handleMenuClick(contactMenu)}>
                <Typography textAlign="center">Contact</Typography>
              </MenuItem>
            </Menu>
            <Box sx={{ display: { xs: 'flex', md: 'none'}}}>
                <img src={nameLogo} height='50'/> 
            </Box>
          </Box>
              
          

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={() => {handleMenuClick(aboutMenu)}}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              About Me
            </Button>
            <Button
              onClick={() => {handleMenuClick(portfolioMenu)}}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Portfolio
            </Button>
            <Button
              onClick={() => {handleMenuClick(contactMenu)}}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Contact
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleThemeClick} sx={{ p: 0 }}>
              {theme == "dark" ? <Brightness7Icon /> : <BedtimeIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
