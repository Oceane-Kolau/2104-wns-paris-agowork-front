import React from "react";
import { Grid } from "@mui/material";
import AdminCard from "../../components/dashboard/adminCard";

export default function AdminDashboard(): JSX.Element {
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
