import React from "react";
import { useQuery } from "@apollo/client";
import { Typography } from "@mui/material";
import { CardsBoard } from "../../assets/styles/dashboard/teamMood";
import { GET_ALL_USERS } from "../../graphql/queries/user/user";
import { GetUsersType, UserType } from "../../utils/types/user";
import UserCard from "./userCard";
import Loading from "../global/loading/loading";

export default function UserListing({ latestUserCreated }: any): JSX.Element {
  const {
    loading: loadingUsers,
    error: errorUsers,
    data: users,
    refetch,
  } = useQuery<GetUsersType>(GET_ALL_USERS);

  if (latestUserCreated) refetch();
  if (loadingUsers) return <Loading />;
  if (errorUsers) return <Typography>ERROR</Typography>;

  const updateListing = () => {
    refetch();
  };

  return (
    <CardsBoard>
      {users?.getAllUsers.map((user: UserType) => (
        <UserCard {...user} updateListing={updateListing} key={user.id} />
      ))}
    </CardsBoard>
  );
}
