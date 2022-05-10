import React, { useState } from "react";
import { CardActions, IconButton } from "@mui/material";
import { Delete, MoreVert } from "@mui/icons-material";

const ActionsCard = ({ handleOpenModal }: any): JSX.Element => {
  return (
    <CardActions sx={{ p: 0, justifyContent: "space-between" }}>
      <IconButton onClick={handleOpenModal}>
        <Delete />
      </IconButton>
      <IconButton>
        <MoreVert />
      </IconButton>
    </CardActions>
  );
};

export default ActionsCard;
