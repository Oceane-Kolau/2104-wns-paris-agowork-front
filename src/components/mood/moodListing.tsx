import React from "react";
import { Typography } from "@mui/material";
import { useQuery } from "@apollo/client";
import { GET_ALL_MOODS } from "../../graphql/queries/social/mood";
import { GetMoodsType, MoodType } from "../../types/mood";
import { CardsBoard } from "../../assets/styles/dashboard/teamMood";
import Loading from "../global/loading/loading";
import MoodCard from "./moodCard";

export default function MoodListing({ latestMoodCreated }: any): JSX.Element {
  const { loading, error, data, refetch } =
    useQuery<GetMoodsType>(GET_ALL_MOODS);

  const updateListing = () => {
    refetch();
  };

  if (loading) return <Loading />;
  if (error) return <Typography>ERROR</Typography>;
  if (latestMoodCreated) refetch();

  return (
    <CardsBoard>
      {data?.getMoods.map((mood: MoodType) => (
        <MoodCard {...mood} updateListing={updateListing} key={mood.id} />
      ))}
    </CardsBoard>
  );
}
