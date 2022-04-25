import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  List,
  Divider,
} from "@mui/material";
import {
  MenuBookOutlined,
  ExpandLess,
  ExpandMore,
  StarBorder,
} from "@mui/icons-material";

const Subnav = (): JSX.Element => {
  const [openSubnav, setOpenSubnav] = useState(false);
  const [activeLink, setActiveLink] = useState(false);
  const handleClick = () => {
    setOpenSubnav(!openSubnav);
  };

  const handleActiveLink = () => {
    setActiveLink(!activeLink);
  };
  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <MenuBookOutlined />
        </ListItemIcon>
        <ListItemText primary="Cours" />
        {openSubnav ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={openSubnav} timeout="auto" unmountOnExit>
        <List>
          <NavLink
            to="/cours"            
            onClick={handleActiveLink}
            className={({ isActive }: any) => (isActive ? "active" : "")}
          >
            <ListItem>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Modules de la journée" />
            </ListItem>
          </NavLink>
        </List>
      </Collapse>
      <Divider />
    </>
  );
};

export default Subnav;
