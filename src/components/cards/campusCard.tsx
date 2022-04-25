import React, { useState } from "react";
import { CardContent } from "@mui/material";
import { Delete, LocalPhone, Map } from "@mui/icons-material";
import { useMutation } from "@apollo/client";
import {
  BoxIcon,
  CardTitle,
  CardList,
  BtnDelete,
  ActionsCard,
  IconParagraph,
} from "../../assets/styles/list/list";
import ConfirmationModal from "../modal/confirmationModal";
import { DELETE_CAMPUS } from "../../graphql/mutations/infrastructures/campus";

const CampusCard = ({ updateListing, ...campus }: any): JSX.Element => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [deleteCampus] = useMutation(DELETE_CAMPUS, {
    onCompleted: () => {
      setOpen(false);
      updateListing();
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const handleDelete = (e: any) => {
    e.preventDefault();
    deleteCampus({
      variables: {
        id: campus.id,
      },
    });
  };
  return (
    <>
      <CardList sx={{ width: 250, margin: 0.2 }} key={campus.id}>
        <CardContent>
          <CardTitle>{campus.name}</CardTitle>
          {campus.address ? (
            <BoxIcon>
              <Map />
              <IconParagraph>
                &nbsp;&nbsp;
                {campus.address}
              </IconParagraph>
            </BoxIcon>
          ) : (
            <></>
          )}
          {campus.phone ? (
            <BoxIcon>
              <LocalPhone />
              <IconParagraph>
                &nbsp;&nbsp;
                {campus.phone}
              </IconParagraph>
            </BoxIcon>
          ) : (
            <></>
          )}
        </CardContent>
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
      </CardList>
    </>
  );
};

export default CampusCard;
