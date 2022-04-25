import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { Typography } from "@mui/material";
import { CardsBoard } from "../../../assets/styles/dashboard/teamMood";
import { GET_ALL_USERS } from "../../../graphql/queries/user/user";
import { GetUsersType, UserType } from "../../../types/user";
import UserCard from "../../../components/cards/userCard";
import Loading from "../../../components/loading/loading";

export default function UserListing(userCreated: any): JSX.Element {
  const { loading, error, data, refetch } =
    useQuery<GetUsersType>(GET_ALL_USERS);

  const updateListing = () => {
    refetch();
  };

  if (error) {
    return <Typography>ERROR</Typography>;
  }

  if (userCreated) {
    updateListing();
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <CardsBoard>
          {data?.getAllUsers.map((user: UserType) => (
            <UserCard {...user} updateListing={updateListing} key={user.id} />
          ))}
        </CardsBoard>
      )}
    </>
  );
}
