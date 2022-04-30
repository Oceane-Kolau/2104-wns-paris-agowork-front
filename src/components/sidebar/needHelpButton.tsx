import React, { useState } from "react";
import { AddAlert, Check } from "@mui/icons-material";
import { useMutation } from "@apollo/client";
import { UPDATE_HELP } from "../../graphql/mutations/user/user";
import { BorderedButton } from "../../assets/styles/global";
import { Social } from "../../assets/styles/sidebar/sidebar";

const NeedHelpButton = (): JSX.Element => {
  const [needHelp, setSetNeedHelp] = useState(false);

  const [userNeedHelp] = useMutation(UPDATE_HELP, {
    onCompleted: (data) => {
      console.log(data);
    },
  });

  const updateNeedHelp = (e: any) => {
    e.preventDefault();
    setSetNeedHelp(!needHelp);
    userNeedHelp({
      variables: {
        needHelp,
      },
    });
  };

  return (
    <Social>
      <BorderedButton
        variant="outlined"
        onClick={updateNeedHelp}
        startIcon={needHelp ? <AddAlert /> : <Check />}
      >
        {needHelp ? "J'ai besoin d'aide" : "Je n'ai plus besoin d'aide"}
      </BorderedButton>
    </Social>
  );
};

export default NeedHelpButton;
