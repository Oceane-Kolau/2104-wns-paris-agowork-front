import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Dialog, DialogContent, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { UPDATE_CAMPUS } from "../../graphql/mutations/infrastructures/campus";
import { Form } from "../../assets/styles/form";
import SolidButton from "../global/buttons/solidButton";
import { FormTitle } from "../../assets/styles/list/list";
import { CampusType } from "../../utils/types/campus";
import CampusForm from "./campusForm";
import { ModalBar } from "../../assets/styles/modal";
import { TopBar } from "../../assets/styles/sidebar/sidebar";
import Loading from "../global/loading/loading";
import ErrorPopup from "../global/error/errorPopup";
import { campusSchema } from "../../utils/yupSchema/campusValidationSchema";

export default function CampusUpdate({
  open,
  handleRefreshCampus,
  handleCloseUpdateModal,
  currentCampus,
}: any): JSX.Element {
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CampusType>({ resolver: yupResolver(campusSchema) });

  const [updateCampus, { loading: loadingUpdateCampus }] = useMutation(
    UPDATE_CAMPUS,
    {
      onCompleted: () => {
        handleRefreshCampus();
        handleCloseUpdateModal();
      },
      onError: (errorUpdateCampus) => {
        errorUpdateCampus.graphQLErrors.map(({ message }) =>
          setErrorMessage(message)
        );
      },
    }
  );

  useEffect(() => {
    const defaultValues = {
      id: currentCampus.id,
      name: "",
      phone: "",
      address: "",
    };
    defaultValues.name = currentCampus.name;
    defaultValues.phone = currentCampus.phone;
    defaultValues.address = currentCampus.address;
    reset({ ...defaultValues });
  }, [currentCampus, reset]);

  const handleCampus: SubmitHandler<CampusType> = (input) => {
    updateCampus({ variables: { input } });
    reset();
  };

  if (loadingUpdateCampus) return <Loading />;
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
        <FormTitle>Modifier ce campus</FormTitle>
        <Form onSubmit={handleSubmit(handleCampus)}>
          <CampusForm
            register={register}
            currentCampus={currentCampus}
            errors={errors}
          />
          <SolidButton type="submit" textButton="Modifier ce campus" />
        </Form>
      </DialogContent>
    </Dialog>
  );
}
