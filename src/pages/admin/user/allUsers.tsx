import React, { useState } from "react";
import UserListing from "../../../components/user/userListing";
import UserCreation from "../../../components/user/userCreation";

export default function AllUsers(): JSX.Element {
  const [latestUserCreated, setLatestUserCreated] =
    useState<boolean>(false);

  const handleRefreshUser = () => {
    return setLatestUserCreated(true);
  };

  return (
    <>
      <UserCreation handleRefreshUser={handleRefreshUser} />
      <UserListing latestUserCreated={latestUserCreated} />
    </>
  );
}
