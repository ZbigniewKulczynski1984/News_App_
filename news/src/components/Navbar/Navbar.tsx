import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { NavbarProps } from "../../helpers/interfaces";
import { auth, storage } from "../../firebaseConfig";
import { ref, getDownloadURL } from "firebase/storage";
const pages = ["Home", "Search"];

const Navbar: React.FC<NavbarProps> = ({ loggedIn }) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const [profilePhoto, setProfilePhoto] = useState("/");

  useEffect(() => {
    if (loggedIn && auth.currentUser) {
      const storageRef = ref(
        storage,
        `/users/${auth.currentUser.uid}/profilePhoto`
      );
      getDownloadURL(storageRef)
        .then((url) => setProfilePhoto(url))
        .catch((err) => console.error(err.message));
    }
  }, [loggedIn]);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // 8. Wstaw stan profilePhoto w atrybut src Avatara (111)
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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
              {/* const pages = ["Home", "Search"]; */}
              {pages.map((page) => (
                <Link
                  key={page}
                  to={page === "Home" ? "/" : page.toLowerCase()}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Roboto",
              fontWeight: 100,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SDA NEWS
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Link
              to={loggedIn ? "/user" : "/login"}
              style={{ textDecoration: "none" }}
            >
              {loggedIn ? (
                <IconButton sx={{ p: 0 }}>
                  {profilePhoto !== "/" && (
                  <Avatar alt="Remy Sharp" src={profilePhoto} />
                )}
                </IconButton>
              ) : (
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  Log in
                </Button>
              )}
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
