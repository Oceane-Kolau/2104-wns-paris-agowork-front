import React from "react";
import { Grid, Typography } from "@mui/material";
import { GET_ALL_RESSOURCES } from "../../graphql/queries/ressource/ressource";
import { GetRessourcesType, RessourceType } from "../../types/ressources";
import { useQuery } from "@apollo/client";
import RessourceCard from "../../components/cards/ressourceCard";
import Loading from "../../components/loading/loading";

function RessourceListing({ latestRessourceCreated }: any): JSX.Element {
  const {
    loading: loadingRessources,
    error: errorRessources,
    data: ressources,
    refetch,
  } = useQuery<GetRessourcesType>(GET_ALL_RESSOURCES);

  if (latestRessourceCreated) refetch();
  if (errorRessources) return <Typography>ERROR</Typography>;
  if (loadingRessources) return <Loading />;

  return (
    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 10 }}>
      {ressources?.getAllRessources.map((ressource: RessourceType) => (
        <RessourceCard {...ressource} key={ressource.id} />
      ))}
    </Grid>
  );
}

export default RessourceListing;
