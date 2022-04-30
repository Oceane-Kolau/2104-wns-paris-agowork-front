import React, { useState } from "react";
import { AddAlert } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { UPDATE_HELP } from "../../graphql/mutations/user/user";

const NeedHelpButton = (): JSX.Element => {
  const [needHelp, setSetNeedHelp] = useState(false);

  const [userNeedHelp] = useMutation(UPDATE_HELP, {
    onCompleted: (data) => {
      console.log(data)
    },
  });

  const updateNeedHelp = (e: any) => {
    e.preventDefault();
    setSetNeedHelp(!needHelp);
    userNeedHelp ({
      variables: {
        needHelp
      },
    });
  };

  return (
    <Button variant="outlined" onClick={updateNeedHelp} startIcon={<AddAlert />}>
        {needHelp ? "Demander de l'aide" : "Plus besoin d'aide"}
    </Button>
  );
};

export default NeedHelpButton;
