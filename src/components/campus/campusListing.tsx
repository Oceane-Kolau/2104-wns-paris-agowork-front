import React from "react";
import { Typography } from "@mui/material";
import { useQuery } from "@apollo/client";
import { GET_ALL_CAMPUS } from "../../graphql/queries/infrastructures/campus";
import { CardsBoard } from "../../assets/styles/dashboard/teamMood";
import { CampusType, GetCampusType } from "../../types/campus";
import Loading from "../global/loading/loading";
import CampusCard from "./campusCard";

export default function CampusListing({
  latestCampusCreated,
}: any): JSX.Element {
  const { loading, error, data, refetch } =
    useQuery<GetCampusType>(GET_ALL_CAMPUS);

  const updateListing = () => {
    refetch();
  };

  if (loading) return <Loading />;
  if (error) return <Typography>ERROR</Typography>;
  if (latestCampusCreated) refetch();

  return (
    <>
      {loading ? (
        <CardsBoard>
          <Loading />
        </CardsBoard>
      ) : (
        <CardsBoard>
          {data?.getCampus.map((campus: CampusType) => (
            <CampusCard
              {...campus}
              updateListing={updateListing}
              key={campus.id}
            />
          ))}
        </CardsBoard>
      )}
    </>
  );
}
