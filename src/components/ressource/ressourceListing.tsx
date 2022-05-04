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

  if (latestRessourceCreated) refetch();
  if (loadingRessources) return <Loading />;
  if (errorRessources) return <Typography>ERROR</Typography>;
  console.log(ressources)

  return (
    <Grid
      container
      rowSpacing={3}
      columnSpacing={{ xs: 0, sm: 2, md: 1 }}
      justifyContent="center"
    >
      {ressources?.getAllRessources.map((ressource: RessourceType) => (
        <RessourceCard {...ressource} key={ressource.id} />
      ))}
    </Grid>
  );
}

export default RessourceListing;
