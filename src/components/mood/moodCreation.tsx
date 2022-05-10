import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Box } from "@mui/material";
import { useMutation } from "@apollo/client";
import { CREATE_MOOD } from "../../graphql/mutations/social/mood";
import { Form, FormBox, CardForm } from "../../assets/styles/form";
import SolidButton from "../global/buttons/solidButton";
import {
  FormTitle,
  LatestCreatedTitle,
} from "../../assets/styles/list/list";
import { MoodType, MoodCreationValues } from "../../types/mood";
import MoodCard from "./moodCard";
import Loading from "../global/loading/loading";
import ErrorPopup from "../global/error/errorPopup";
import MoodPersonnalizedIcon from "./moodForm";

export default function MoodCreation({ handleRefreshMood }: any): JSX.Element {
  const [latestMood, setLatestMood] = useState<MoodType>();
  const [errorMessage, setErrorMessage] = useState("");
  const [createMood, { loading: loadingCreationMood }] = useMutation(
    CREATE_MOOD,
    {
      onCompleted: (data) => {
        setLatestMood(data.createMood);
        handleRefreshMood();
      },
      onError: (errorCreationMood) => {
        errorCreationMood.graphQLErrors.map(({ message }) =>
          setErrorMessage(message),
        );
      },
    },
  );

  const { register, handleSubmit, control, reset } =
    useForm<MoodCreationValues>();
  const handleMood: SubmitHandler<MoodCreationValues> = (input) => {
    createMood({
      variables: {
        input: {
          name: input.name,
          icon: input.icon,
        },
      },
    });
    reset();
  };

  if (loadingCreationMood) return <Loading />;
  if (errorMessage) return <ErrorPopup errorMessage={errorMessage} />;
  return (
    <>
      <FormBox>
        <CardForm>
          <FormTitle>Ajouter un mood</FormTitle>
          <Form onSubmit={handleSubmit(handleMood)}>
            <MoodPersonnalizedIcon register={register} control={control} />
            <SolidButton type="submit" textButton="Ajouter ce mood" />
          </Form>
        </CardForm>
        {latestMood ? (
          <Box>
            <LatestCreatedTitle>👉&nbsp;&nbsp;Nouveau mood</LatestCreatedTitle>
            <MoodCard {...latestMood} key={latestMood.id} />
          </Box>
        ) : (
          <></>
        )}
      </FormBox>
    </>
  );
}
