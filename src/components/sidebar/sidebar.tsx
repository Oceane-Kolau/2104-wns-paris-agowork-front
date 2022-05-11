import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import {
  TopBar,
  SideNav,
  CompanyName,
  ColoredSvg,
  BurgerButton,
} from "../../assets/styles/sidebar/sidebar";
import { AuthContext } from "../../utils/context/authContext";
import NeedHelpButton from "./needHelpButton";

const Sidebar = (): JSX.Element => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
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
          <NeedHelpButton />
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
            path="/ressources"
          />
          {user?.role === "ADMIN" ? (
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
