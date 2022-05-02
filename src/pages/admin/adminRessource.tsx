import React, { useState } from "react";
import RessourceListing from "../../components/ressources/ressourceListing";
import RessourceCreation from "../../components/ressources/ressourceCreation";

export default function AdminRessource(): JSX.Element {
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
