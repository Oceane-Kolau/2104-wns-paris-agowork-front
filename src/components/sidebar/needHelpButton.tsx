import React, { useState } from "react";
import { AddAlert, Check } from "@mui/icons-material";
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_HELP } from "../../graphql/mutations/user/user";
import { BorderedButton } from "../../assets/styles/global";
import { Social } from "../../assets/styles/sidebar/sidebar";
import { GET_LOGGED_USER } from "../../graphql/queries/user/user";

const NeedHelpButton = (): JSX.Element => {
  const { data: loggedUser, refetch } = useQuery(GET_LOGGED_USER);
  const [needHelp, setSetNeedHelp] = useState(false);

  const [userNeedHelp] = useMutation(UPDATE_HELP, {
    onCompleted: () => {
      refetch();
    },
  });

  const updateNeedHelp = () => {
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
        startIcon={
          !needHelp && loggedUser?.getLoggedUserByEmail.needHelp ? (
            <Check />
          ) : (
            <AddAlert />
          )
        }
      >
        {!needHelp && loggedUser?.getLoggedUserByEmail.needHelp
          ? "Je n'ai plus besoin d'aide"
          : "J'ai besoin d'aide"}
      </BorderedButton>
    </Social>
  );
};

export default NeedHelpButton;
