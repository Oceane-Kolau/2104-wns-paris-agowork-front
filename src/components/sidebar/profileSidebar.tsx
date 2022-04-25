import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Home } from "@mui/icons-material";
import { ListItem, List, ListItemIcon, ListItemText } from "@mui/material";
import { AuthContext } from "../../context/authContext";
import { Initial, ProfileAvatar } from "../../assets/styles/sidebar/sidebar";

const ProfileSidebar = ({ sidebarState }: any): JSX.Element => {
  const { user } = useContext(AuthContext);
  return (
    <List>
      <ListItem>
        <ListItemIcon className="avatar">
          <ProfileAvatar src="/broken-image.jpg" />
        </ListItemIcon>
        <ListItemText>
          <h5>
            {user?.firstname} {user?.lastname}
          </h5>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <Initial>{sidebarState ? null : <h3>J M</h3>}</Initial>
        </ListItemText>
      </ListItem>
      <NavLink
        to="/"
        className={({ isActive }: any) => (isActive ? "active" : "inactive")}
      >
        <ListItem>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText>Dashboard</ListItemText>
        </ListItem>
      </NavLink>
    </List>
  );
};

export default ProfileSidebar;
