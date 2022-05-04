import React, { useState } from "react";
import RessourceListing from "../../../components/ressource/ressourceListing";
import RessourceCreation from "../../../components/ressource/ressourceCreation";

export default function AllRessources(): JSX.Element {
  const [latestRessourceCreated, setLatestRessourceCreated] =
    useState<boolean>(false);

  const handleRefreshRessources = () => {
    return setLatestRessourceCreated(true);
  };

  return (
    <>
      <RessourceCreation handleRefreshRessources={handleRefreshRessources} />
      <RessourceListing latestRessourceCreated={latestRessourceCreated} />
    </>
  );
}
