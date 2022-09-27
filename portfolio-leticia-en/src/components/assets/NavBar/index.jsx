import { Box, Drawer, IconButton, Toolbar, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { Link } from "react-scroll";
import { ErrorBoundary } from "react-error-boundary";

import { StyledAppBar, StyledBox } from "./style";
import ErrorFallback from "../../errors/ErrorFallback";

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <StyledBox onClick={handleDrawerToggle}>
      <IconButton
        color="secondary"
        onClick={handleDrawerToggle}
        sx={{ alignSelf: "flex-start", minWidth: "4px" }}
        size="small"
      >
        <CloseIcon />
      </IconButton>
      <ul className="ul-mobile">
        <li>
          <Link to="home" spy={true} smooth={true} duration={800} offset={-58}>
            <Button
              variant="text"
              sx={{ minWidth: "4px" }}
              onClick={handleDrawerToggle}
              size="small"
            >
              Home
            </Button>
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={800}
            offset={-58}
          >
            <Button
              variant="text"
              sx={{ minWidth: "4px" }}
              onClick={handleDrawerToggle}
              size="small"
            >
              Projects
            </Button>
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true} duration={800} offset={-58}>
            <Button
              variant="text"
              sx={{ minWidth: "4px" }}
              onClick={handleDrawerToggle}
              size="small"
            >
              About me
            </Button>
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={800}
            offset={-58}
          >
            <Button
              variant="text"
              sx={{ minWidth: "4px" }}
              onClick={handleDrawerToggle}
              size="small"
            >
              Contact
            </Button>
          </Link>
        </li>
      </ul>
    </StyledBox>
  );

  const container = window.document.body;

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <StyledAppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: "none", sm: "block" }, width: "100%" }}>
            <ul className="ul-desktop">
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={800}
                  offset={-58}
                >
                  <Button
                    variant="text"
                    color="secondary"
                    sx={{ fontSize: "1rem" }}
                  >
                    Home
                  </Button>
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={800}
                  offset={-58}
                >
                  <Button
                    variant="text"
                    color="secondary"
                    sx={{ fontSize: "1rem" }}
                  >
                    Projects
                  </Button>
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={800}
                  offset={-58}
                >
                  <Button
                    variant="text"
                    color="secondary"
                    sx={{ fontSize: "1rem" }}
                  >
                    About me
                  </Button>
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={800}
                  offset={-58}
                >
                  <Button
                    variant="text"
                    color="secondary"
                    sx={{ fontSize: "1rem" }}
                  >
                    Contact
                  </Button>
                </Link>
              </li>
            </ul>
          </Box>
        </Toolbar>
      </StyledAppBar>
      <Box component="nav">
        <Drawer
          anchor="top"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              bgcolor: " #070707",
              boxSizing: "border-box",
              width: "100%",
              height: "5rem",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </ErrorBoundary>
  );
};

export default NavBar;
