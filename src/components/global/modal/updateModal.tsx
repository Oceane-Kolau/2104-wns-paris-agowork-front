import React from "react";
import { AppBar, Dialog, IconButton, Toolbar } from "@mui/material";
import { Close } from "@mui/icons-material";
import { TopBar } from "../../../assets/styles/sidebar/sidebar";

const UpdateModal = ({
  handleCloseUpdateModal,
  open,
  children,
}: any): JSX.Element => {
  return (
    <Dialog
      open={open}
      onClose={handleCloseUpdateModal}
      aria-labelledby="modal-update-title"
      fullWidth={true}
      maxWidth={"xl"}
    >
      <AppBar sx={{ position: "relative", color:"#ffff" }}>
        <TopBar>
          <IconButton
            onClick={handleCloseUpdateModal}
            aria-label="close"
          >
            <Close />
          </IconButton>
        </TopBar>
      </AppBar>
      {children}
    </Dialog>
  );
};

export default UpdateModal;
