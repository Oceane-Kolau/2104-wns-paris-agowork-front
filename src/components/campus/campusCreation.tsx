import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { Box } from "@mui/material";
import { CREATE_CAMPUS } from "../../graphql/mutations/infrastructures/campus";
import { CardForm, Form, FormBox } from "../../assets/styles/form";
import SolidButton from "../global/buttons/solidButton";
import { FormTitle, LatestCreatedTitle } from "../../assets/styles/list/list";
import { CampusType } from "../../types/campus";
import CampusCard from "./campusCard";
import CampusForm from "./campusForm";

export default function CampusCreation({
  handleRefreshCampus,
}: any): JSX.Element {
  const [latestCampus, setLatestCampus] = useState<CampusType>();
  const { register, handleSubmit, reset } = useForm<CampusType>();

  const [createCampus] = useMutation(CREATE_CAMPUS, {
    onCompleted: (data) => {
      setLatestCampus(data.createCampus);
      handleRefreshCampus();
    },
    onError: () => {},
  });

  const handleCampus: SubmitHandler<CampusType> = (input) => {
    createCampus({ variables: { input } });
    reset();
  };

  return (
    <>
      <FormBox>
        <CardForm>
          <FormTitle>Ajouter un campus</FormTitle>
          <Form onSubmit={handleSubmit(handleCampus)}>
            <CampusForm register={register} />
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
