import React from "react";
import { Grid, Typography } from "@mui/material";
import { useQuery } from "@apollo/client";
import { GET_ALL_RESSOURCES } from "../../graphql/queries/ressource/ressource";
import { GetRessourcesType, RessourceType } from "../../types/ressource";
import RessourceCard from "./ressourceCard";
import Loading from "../global/loading/loading";

function RessourceListing({ latestRessourceCreated }: any): JSX.Element {
  const {
    loading: loadingRessources,
    error: errorRessources,
    data: ressources,
    refetch,
  } = useQuery<GetRessourcesType>(GET_ALL_RESSOURCES);

  const updateListing = () => {
    refetch();
  };

  if (latestRessourceCreated) refetch();
  if (loadingRessources) return <Loading />;
  if (errorRessources) return <Typography>ERROR</Typography>;

  return (
    <Grid
      sx={{ mt: 2 }}
      container
      rowSpacing={3}
      alignItems="start"
      flexWrap="wrap"
      columnSpacing={{ xs: 1, sm: 2, md: 10 }}
      data-testid="ressources"
    >
      {ressources?.getAllRessources.map((ressource: RessourceType) => (
        <RessourceCard
          {...ressource}
          updateListing={updateListing}
          key={ressource.id}
        />
      ))}
    </Grid>
  );
}

export default RessourceListing;
