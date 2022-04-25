import React from "react";
import { Typography } from "@mui/material";
import { useQuery } from "@apollo/client";
import { GET_ALL_CAMPUS } from "../../../graphql/queries/infrastructures/campus";
import { CardsBoard } from "../../../assets/styles/dashboard/teamMood";
import { CampusType, GetCampusType } from "../../../types/campus";
import Loading from "../../../components/loading/loading";
import CampusCard from "../../../components/cards/campusCard";

export default function CampusListing(campusCreated: any): JSX.Element {
  const { loading, error, data, refetch } =
    useQuery<GetCampusType>(GET_ALL_CAMPUS);

  const updateListing = () => {
    refetch();
  };

  if (error) {
    return <Typography>ERROR</Typography>;
  }

  if (campusCreated) {
    updateListing();
  }

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
