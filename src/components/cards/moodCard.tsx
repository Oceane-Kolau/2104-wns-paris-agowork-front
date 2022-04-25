import React, { useState } from "react";
import { CardContent } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useMutation } from "@apollo/client";
import {
  ActionsCard,
  BtnDelete,
  CardList,
  CardTitle,
  MoodIcon,
} from "../../assets/styles/list/list";
import ConfirmationModal from "../modal/confirmationModal";
import { DELETE_MOOD } from "../../graphql/mutations/social/mood";

const MoodCard = ({ updateListing, ...mood }: any): JSX.Element => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [deleteMood] = useMutation(DELETE_MOOD, {
    onCompleted: (data) => {
      setOpen(false);
      updateListing();
    },
    onError: (error) => {
      console.log(error);
    },
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
            <ActionsCard disableSpacing>
              <BtnDelete onClick={handleOpen}>
                <Delete />
              </BtnDelete>
            </ActionsCard>
            <ConfirmationModal
              open={open}
              handleClose={handleClose}
              handleDelete={handleDelete}
            />
          </>
        )}
      </CardList>
    </>
  );
};

export default MoodCard;
