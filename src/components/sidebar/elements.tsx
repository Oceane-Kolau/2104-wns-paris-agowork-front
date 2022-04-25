import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText, Divider } from "@mui/material";

const Elements = ({ text, icon, path }: any): JSX.Element => {
  return (
    <>
      <Divider />
      <NavLink
        to={path}
        className={({ isActive }: any) => (isActive ? "active" : "")}
      >
        <ListItem key={text}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      </NavLink>
      <Divider />
    </>
  );
};

export default Elements;
