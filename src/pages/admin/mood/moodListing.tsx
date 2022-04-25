import React from "react";
import { Typography } from "@mui/material";
import { useQuery } from "@apollo/client";
import { CardsBoard } from "../../../assets/styles/dashboard/teamMood";
import Loading from "../../../components/loading/loading";
import MoodCard from "../../../components/cards/moodCard";
import { GET_ALL_MOODS } from "../../../graphql/queries/social/mood";
import { GetMoodsType, MoodType } from "../../../types/moods";

export default function MoodListing(moodCreated: any): JSX.Element {
  const { loading, error, data, refetch } =
    useQuery<GetMoodsType>(GET_ALL_MOODS);

  const updateListing = () => {
    refetch();
  };

  if (error) {
    return <Typography>ERROR</Typography>;
  }

  if (moodCreated) {
    updateListing();
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <CardsBoard>
          {data?.getMoods.map((mood: MoodType) => (
            <MoodCard {...mood} updateListing={updateListing} key={mood.id} />
          ))}
        </CardsBoard>
      )}
    </>
  );
}
