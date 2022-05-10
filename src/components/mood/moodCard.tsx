import React from "react";
import { CardContent } from "@mui/material";
import { useMutation } from "@apollo/client";
import {
  CardList,
  CardTitle,
  MoodIcon,
} from "../../assets/styles/list/list";
import ActionsCard from "../global/actionsCard";
import { DELETE_MOOD } from "../../graphql/mutations/social/mood";

const MoodCard = ({ updateListing, ...mood }: any): JSX.Element => {
  const [deleteMood] = useMutation(DELETE_MOOD, {
    onCompleted: () => {
      updateListing();
    },
    onError: () => {},
  });
  const handleDeleteMood = () => {
    deleteMood({
      variables: {
        id: mood.id,
      },
    });
  };
  return (
    <>
      <CardList sx={{ width: 190, textAlign: "center" }} key={mood.id}>
        <CardContent sx={{ padding: 0 }}>
          <MoodIcon>{mood.icon}</MoodIcon>
          <CardTitle>{mood.name}</CardTitle>
        </CardContent>
        {mood.name === "Au top" ? (
          <></>
        ) : (
          <>
            <ActionsCard handleDeleteEl={handleDeleteMood}/>    
          </>
        )}
      </CardList>
    </>
  );
};

export default MoodCard;
