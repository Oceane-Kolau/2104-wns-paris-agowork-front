import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { Box } from "@mui/material";
import InputText from "../global/form/inputText";
import { CREATE_CAMPUS } from "../../graphql/mutations/infrastructures/campus";
import { CardForm, Form, FormBox } from "../../assets/styles/form";
import SolidButton from "../global/buttons/solidButton";
import { FormTitle, LatestCreatedTitle } from "../../assets/styles/list/list";
import { CampusCreationValues, CampusType } from "../../types/campus";
import CampusCard from "./campusCard";

export default function CampusCreation({
  handleRefreshCampus,
}: any): JSX.Element {
  const [latestCampus, setLatestCampus] = useState<CampusType>();
  const { register, handleSubmit, reset } = useForm<CampusCreationValues>();

  const [createCampus] = useMutation(CREATE_CAMPUS, {
    onCompleted: (data) => {
      setLatestCampus(data.createCampus);
      handleRefreshCampus();
    },
    onError: () => {},
  });

  const handleCampus: SubmitHandler<CampusCreationValues> = (input) => {
    createCampus({ variables: { input } });
    reset();
  };

  return (
    <>
      <FormBox>
        <CardForm>
          <FormTitle>Ajouter un campus</FormTitle>
          <Form onSubmit={handleSubmit(handleCampus)}>
            <InputText label="name" type="text" register={register} required />
            <InputText label="phone" type="text" register={register} required />
            <InputText label="address" type="text" register={register} false />
            <SolidButton type="submit" textButton="Ajouter ce campus" />
          </Form>
        </CardForm>
        {latestCampus ? (
          <Box>
            <LatestCreatedTitle>
              👉&nbsp;&nbsp;Nouveau campus
            </LatestCreatedTitle>
            <CampusCard {...latestCampus} key={latestCampus.id} />
          </Box>
        ) : (
          <></>
        )}
      </FormBox>
    </>
  );
}
