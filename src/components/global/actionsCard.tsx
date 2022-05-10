import React, { useState } from "react";
import { CardActions, IconButton } from "@mui/material";
import { Delete, MoreVert } from "@mui/icons-material";
import ConfirmationModal from "./modal/confirmationModal";
import { Link } from "react-router-dom";

const ActionsCard = ({ handleDeleteEl, link }: any): JSX.Element => {
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleDelete = () => {
    handleDeleteEl();
    setOpen(false);
  };
  return (
    <>
      <CardActions
        sx={{ p: 0, justifyContent: "space-between", alignItems: "center", mt: "auto" }}
      >
        <IconButton onClick={handleOpenModal}>
          <Delete />
        </IconButton>
        {link ? (
          <Link to={link}>
            <MoreVert />
          </Link>
        ) : (
          <></>
        )}
      </CardActions>
      <ConfirmationModal
        open={open}
        handleClose={handleClose}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default ActionsCard;
