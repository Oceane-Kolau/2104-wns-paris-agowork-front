import React, { useState } from "react";
import { CardActions, IconButton } from "@mui/material";
import { Delete, MoreVert } from "@mui/icons-material";
import ConfirmationModal from "./modal/confirmationModal";
import { Link } from "react-router-dom";
import UpdateModal from "./modal/updateModal";

const ActionsCard = ({ handleDeleteEl, link, handleOpenUpdateModal }: any): JSX.Element => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const handleOpenDeleteModal = () => setOpenDeleteModal(true);
  const handleCloseDeleteModal = () => setOpenDeleteModal(false);
  const handleDelete = () => {
    handleDeleteEl();
    setOpenDeleteModal(false);
  };
  return (
    <>
      <CardActions
        sx={{
          p: 0,
          justifyContent: "space-between",
          alignItems: "center",
          mt: "auto",
        }}
      >
        <IconButton onClick={handleOpenDeleteModal}>
          <Delete />
        </IconButton>
        {link ? (
          <Link to={link}>
            <MoreVert />
          </Link>
        ) : (
          <>
            <IconButton onClick={handleOpenUpdateModal}>
              <MoreVert />
            </IconButton>
          </>
        )}
      </CardActions>
      <ConfirmationModal
        open={openDeleteModal}
        handleClose={handleCloseDeleteModal}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default ActionsCard;
