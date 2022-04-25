import React, { useContext, useState } from "react";
import { useNavigate, useLocation, To } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import {
  CssBaseline,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  ChevronLeft,
  Menu,
  ChevronRight,
  SchoolOutlined,
  Logout,
  AdminPanelSettings,
} from "@mui/icons-material";
import { DrawerHeader, AppBar } from "../../assets/styles/sidebar/muiSidebar";
import ProfileSidebar from "./profileSidebar";
import Elements from "./elements";
import SocialMedia from "./socialMedia";
import {
  TopBar,
  SideNav,
  CompanyName,
  ColoredSvg,
  BurgerButton,
} from "../../assets/styles/sidebar/sidebar";
import { AuthContext } from "../../context/authContext";

interface State {
  to: To;
}

const Sidebar = (): JSX.Element => {
  const { user } = useContext(AuthContext);
  const state = useLocation().state as State;
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = (event: any) => {
    localStorage.clear();
    navigate("/connexion");
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <TopBar>
          <BurgerButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              ...(open && { display: "none" }),
            }}
          >
            <Menu />
          </BurgerButton>
          <CompanyName>AgoWork</CompanyName>
          <SocialMedia />
        </TopBar>
      </AppBar>
      <SideNav variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </DrawerHeader>
        <ColoredSvg>
          <ProfileSidebar sidebarState={open} />
          <Elements
            text="Ressources"
            icon={<SchoolOutlined />}
            path="/mes-ressources"
          />
          {user?.role === "ADMIN" || user?.role === "SUPERADMIN" ? (
            <Elements
              text="Administration"
              icon={<AdminPanelSettings />}
              path="/general"
            />
          ) : (
            <></>
          )}
          <ListItem onClick={handleLogout}>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="Déconnexion" />
          </ListItem>
        </ColoredSvg>
      </SideNav>
    </>
  );
};

export default Sidebar;
