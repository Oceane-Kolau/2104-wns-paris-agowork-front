import { Report } from "@mui/icons-material";
import { Modal, Typography } from "@mui/material";
import React from "react";
import {
  BorderedButton,
  ColoredButton,
  Popup,
} from "../../assets/styles/global";
import { BoxIcon } from "../../assets/styles/list/list";

const ConfirmationModal = ({
  handleDelete,
  handleClose,
  open,
}: any): JSX.Element => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-delete-title"
    >
      <Popup>
        <Report />
        <Typography
          id="modal-delete-title"
          variant="h6"
          component="h2"
          sx={{ marginBottom: 2 }}
        >
          Êtes-vous sûr de vouloir supprimer définitivement cet élément ?
        </Typography>
        <BoxIcon>
          <BorderedButton sx={{ marginRight: 2 }} onClick={handleClose}>
            Non
          </BorderedButton>
          <ColoredButton onClick={handleDelete}>Oui</ColoredButton>
        </BoxIcon>
      </Popup>
    </Modal>
  );
};

export default ConfirmationModal;
