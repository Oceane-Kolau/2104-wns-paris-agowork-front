import React from "react";
import { Card, CardContent, Grid } from "@mui/material";
import { CardTitle, MoodIcon } from "../../assets/styles/list/list";
import SolidButton from "../buttons/solidButton";
import { CardAdmin, StyledLink } from "../../assets/styles/admin";

const AdminCard = ({ icon, title, link }: any): JSX.Element => {
  return (
    <Grid item xs={12} sm={6} md={4} >
      <CardAdmin>
        <StyledLink
          to={link}
          className={({ isActive }: any) => (isActive ? "active" : "")}
        >
          <CardContent>
            <MoodIcon>{icon}</MoodIcon>
            <CardTitle>{title}</CardTitle>
          </CardContent>
          <SolidButton type="text" textButton="Voir plus" />
        </StyledLink>
      </CardAdmin>
    </Grid>
  );
};

export default AdminCard;
