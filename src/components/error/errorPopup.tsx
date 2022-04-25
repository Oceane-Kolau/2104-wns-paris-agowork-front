import React, { useEffect, useState } from "react";
import Alert from "@mui/material/Alert";
import { Snackbar } from "../../assets/styles/global";

const ErrorPopup = ({ errorMessage, errorHidden }: any): JSX.Element => {
  return (
    <Snackbar hidden={errorHidden}>
      <Alert severity="error" elevation={6} variant="filled">
        {errorMessage}
      </Alert>
    </Snackbar>
  );
};

export default ErrorPopup;
