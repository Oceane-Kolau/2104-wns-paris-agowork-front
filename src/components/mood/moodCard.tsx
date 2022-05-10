import React, { useState } from "react";
import { CardContent } from "@mui/material";
import { useMutation } from "@apollo/client";
import {
  BtnDelete,
  CardList,
  CardTitle,
  MoodIcon,
} from "../../assets/styles/list/list";
import ActionsCard from "../global/actionsCard";
import ConfirmationModal from "../global/modal/confirmationModal";
import { DELETE_MOOD } from "../../graphql/mutations/social/mood";

const MoodCard = ({ updateListing, ...mood }: any): JSX.Element => {
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  const [deleteMood] = useMutation(DELETE_MOOD, {
    onCompleted: () => {
      setOpen(false);
      updateListing();
    },
    onError: () => {},
  });
  const handleDelete = (e: any) => {
    e.preventDefault();
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
            <ActionsCard handleOpenModal={handleOpenModal}/>
            <ConfirmationModal
              open={open}
              handleCloseModal={handleCloseModal}
              handleDelete={handleDelete}
            />
          </>
        )}
      </CardList>
    </>
  );
};

export default MoodCard;
