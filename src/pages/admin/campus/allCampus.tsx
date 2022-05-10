import React, { useState } from "react";
import CampusCreation from "../../../components/campus/campusCreation";
import CampusListing from "../../../components/campus/campusListing";

export default function AllCampus(): JSX.Element {
  const [latestCampusCreated, setLatestCampusCreated] =
    useState<boolean>(false);

  const handleRefreshCampus = () => {
    return setLatestCampusCreated(true);
  };

  return (
    <>
      <CampusCreation handleRefreshCampus={handleRefreshCampus} />
      <CampusListing latestCampusCreated={latestCampusCreated} />
    </>
  );
}
