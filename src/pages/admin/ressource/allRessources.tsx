import React, { useState } from "react";
import RessourceListing from "../../../components/ressource/ressourceListing";
import RessourceCreation from "../../../components/ressource/ressourceCreation";

export default function AllRessources(): JSX.Element {
  const [latestRessourceCreated, setLatestRessourceCreated] =
    useState<boolean>(false);

  const handleRefreshRessource = () => {
    return setLatestRessourceCreated(true);
  };

  return (
    <>
      <RessourceCreation handleRefreshRessource={handleRefreshRessource} />
      <RessourceListing latestRessourceCreated={latestRessourceCreated} />
    </>
  );
}
