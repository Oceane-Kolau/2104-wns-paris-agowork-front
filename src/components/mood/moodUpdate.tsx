import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { Dialog, DialogContent, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { UPDATE_MOOD } from "../../graphql/mutations/social/mood";
import { Form } from "../../assets/styles/form";
import { TopBar } from "../../assets/styles/sidebar/sidebar";
import SolidButton from "../global/buttons/solidButton";
import { MoodValues } from "../../types/mood";
import Loading from "../global/loading/loading";
import ErrorPopup from "../global/error/errorPopup";
import MoodForm from "./moodForm";
import { FormTitle } from "../../assets/styles/list/list";
import { ModalBar } from "../../assets/styles/modal";

export default function MoodUpdate({
  handleRefreshMood,
  handleCloseUpdateModal,
  open,
  currentMood,
}: any): JSX.Element {
  const [errorMessage, setErrorMessage] = useState("");
  const { register, handleSubmit, control, reset } = useForm<MoodValues>();

  const [updateMood, { loading: loadingUpdateMood }] = useMutation(
    UPDATE_MOOD,
    {
      onCompleted: () => {
        handleRefreshMood();
        handleCloseUpdateModal();
      },
      onError: (errorUpdateMood) => {
        errorUpdateMood.graphQLErrors.map(({ message }) =>
          setErrorMessage(message)
        );
      },
    }
  );

  useEffect(() => {
    const defaultValues = {
      id: currentMood.id,
      name: "",
      icon: "",
    };
    defaultValues.name = currentMood.name;
    defaultValues.icon = currentMood.icon;
    reset({ ...defaultValues });
  }, [currentMood, reset]);

  const handleMood: SubmitHandler<MoodValues> = (input) => {
    updateMood({
      variables: {
        input: {
          id: input.id,
          name: input.name,
          icon: input.icon,
        },
      },
    });
  };

  if (loadingUpdateMood) return <Loading />;
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
          <MoodForm
            register={register}
            control={control}
            currentMoodName={currentMood?.name}
          />
          <SolidButton type="submit" textButton="Modifier ce mood" />
        </Form>
      </DialogContent>
    </Dialog>
  );
}
