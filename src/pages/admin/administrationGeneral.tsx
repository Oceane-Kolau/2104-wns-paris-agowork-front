import React from "react";
import { Card, CardContent, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import { ArrowForwardIos } from "@mui/icons-material";
import {
  ActionsCard,
  BtnDelete,
  CardTitle,
  MoodIcon,
} from "../../assets/styles/list/list";
import {
  CardsAdmin,
  ImageConstruction,
} from "../../assets/styles/dashboard/teamMood";
import ImgBuilding from "../../assets/pictures/construction.png";
import { Title } from "../../assets/styles/login/login";
import SolidButton from "../../components/buttons/solidButton";
import AdminCard from "../../components/cards/adminCard";

export default function GeneralForm(): JSX.Element {
  return (
    <Grid
      sx={{ mt: 2 }}
      container
      rowSpacing={3}
      alignItems="center"
      columnSpacing={{ xs: 1, sm: 2, md: 10 }}
    >
      <AdminCard link="/general/utilisateur" icon="👤" title="Utilisateur" />
      <AdminCard link="/general/ressource" icon="📚" title="Ressources" />
      <AdminCard link="/general/campus" icon="🎓" title="Campus" />
      <AdminCard link="/general/mood" icon="✨" title="Mood" />
    </Grid>
  );
}
