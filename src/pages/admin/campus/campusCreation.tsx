import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { Box } from "@mui/material";
import InputText from "../../../components/form/inputText";
import { CREATE_CAMPUS } from "../../../graphql/mutations/infrastructures/campus";
import { CampusForm, Form, FormBox } from "../../../assets/styles/form";
import SolidButton from "../../../components/buttons/solidButton";
import CampusListing from "./campusListing";
import {
  FormTitle,
  LatestCreatedTitle,
} from "../../../assets/styles/list/list";
import { CampusType } from "../../../types/campus";
import CampusCard from "../../../components/cards/campusCard";

type CampusCreationValues = {
  name: string;
  address: string;
  phone: string;
};

export default function CampusCreation(): JSX.Element {
  const [latestCampus, setLatestCampus] = useState<CampusType>();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [createCampus] = useMutation(CREATE_CAMPUS, {
    onCompleted: (data) => {
      setLatestCampus(data.createCampus);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleCampus: SubmitHandler<CampusCreationValues> = (input) => {
    createCampus({ variables: { input } });
    reset();
  };

  return (
    <>
      <FormBox>
        <CampusForm>
          <FormTitle>Ajouter un campus</FormTitle>
          <Form onSubmit={handleSubmit(handleCampus)}>
            <InputText label="name" type="text" register={register} required />
            <InputText label="phone" type="text" register={register} required />
            <InputText label="address" type="text" register={register} false />
            <SolidButton type="submit" textButton="Ajouter ce campus" />
          </Form>
        </CampusForm>
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
      <CampusListing campusCreated={latestCampus} />
    </>
  );
}
