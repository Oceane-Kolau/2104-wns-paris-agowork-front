import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { Dialog, DialogContent, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { UPDATE_MOOD } from "../../graphql/mutations/social/mood";
import { Form } from "../../assets/styles/form";
import { TopBar } from "../../assets/styles/sidebar/sidebar";
import SolidButton from "../global/buttons/solidButton";
import Loading from "../global/loading/loading";
import ErrorPopup from "../global/error/errorPopup";
import { FormTitle } from "../../assets/styles/list/list";
import { ModalBar } from "../../assets/styles/modal";
import { RessourceValues } from "../../types/ressource";
import { UPDATE_RESSOURCE } from "../../graphql/mutations/ressources/ressource";
import RessourceForm from "./ressourceForm";

export default function Ressourceupdate({
  handleRefreshRessource,
  handleCloseUpdateModal,
  open,
  currentRessource,
}: any): JSX.Element {
  const [errorMessage, setErrorMessage] = useState("");
  const { register, handleSubmit, reset } = useForm<RessourceValues>();

  const [updateRessource, { loading: loadingUpdateRessource }] = useMutation(
    UPDATE_RESSOURCE,
    {
      onCompleted: () => {
        handleRefreshRessource();
        handleCloseUpdateModal();
      },
      onError: (errorUpdateMood) => {
        errorUpdateMood.graphQLErrors.map(({ message }) =>
          setErrorMessage(message),
        );
      },
    },
  );

  useEffect(() => {
    const defaultValues = {
      id: currentRessource.id,
      title: "",
      link: "",
      tags: "",
      description: "",
    };
    defaultValues.title = currentRessource.title;
    defaultValues.link = currentRessource.link;
    defaultValues.tags = currentRessource.tags;
    defaultValues.description = currentRessource.description;
    reset({ ...defaultValues });
  }, [currentRessource, reset]);

  const handleMood: SubmitHandler<RessourceValues> = (input) => {
    console.log(input);
    if (input.tags) {
      input.tags = (input.tags as string).trim().split(",");
    }
    updateRessource({ variables: { input } });
    reset();
  };

  if (loadingUpdateRessource) return <Loading />;
  if (errorMessage) return <ErrorPopup errorMessage={errorMessage} />;
  return (
    <Dialog
      open={open}
      onClose={handleCloseUpdateModal}
      aria-labelledby="modal-update-title"
      maxWidth="lg"
      fullWidth
    >
      <ModalBar>
        <TopBar>
          <IconButton onClick={handleCloseUpdateModal} aria-label="close">
            <Close />
          </IconButton>
        </TopBar>
      </ModalBar>
      <DialogContent>
        <FormTitle>Modifier ce mood</FormTitle>
        <Form onSubmit={handleSubmit(handleMood)}>
          <RessourceForm
            register={register}
            currentRessource={currentRessource}
          />
          <SolidButton type="submit" textButton="Modifier ce mood" />
        </Form>
      </DialogContent>
    </Dialog>
  );
}
