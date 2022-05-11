import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Box } from "@mui/material";
import { useMutation } from "@apollo/client";
import { CREATE_MOOD, UPDATE_MOOD } from "../../graphql/mutations/social/mood";
import { Form, FormBox, CardForm } from "../../assets/styles/form";
import SolidButton from "../global/buttons/solidButton";
import { FormTitle, LatestCreatedTitle } from "../../assets/styles/list/list";
import { MoodType, MoodValues } from "../../types/mood";
import MoodCard from "./moodCard";
import Loading from "../global/loading/loading";
import ErrorPopup from "../global/error/errorPopup";
import MoodForm from "./moodForm";

export default function MoodCreation({
  handleRefreshMood,
  currentMood,
}: any): JSX.Element {
  const [latestMood, setLatestMood] = useState<MoodType>();
  const [errorMessage, setErrorMessage] = useState("");
  const { register, handleSubmit, control, reset } = useForm<MoodValues>();

  const [updateMood] = useMutation(UPDATE_MOOD, {
    onCompleted: (data) => {
      setLatestMood(data.updateMood);
      handleRefreshMood();
    },
    onError: (errorUpdateMood) => {
      errorUpdateMood.graphQLErrors.map(({ message }) =>
        setErrorMessage(message)
      );
    },
  });

  const [createMood, { loading: loadingCreationMood }] = useMutation(
    CREATE_MOOD,
    {
      onCompleted: (data) => {
        setLatestMood(data.createMood);
        handleRefreshMood();
      },
      onError: (errorCreationMood) => {
        errorCreationMood.graphQLErrors.map(({ message }) =>
          setErrorMessage(message)
        );
      },
    }
  );

  // useEffect(() => {
  //   const defaultValues = {
  //     id: currentMood.id,
  //     name: "",
  //     icon: "",
  //   };
  //   defaultValues.name = currentMood.name;
  //   defaultValues.icon = currentMood.icon;
  //   reset({ ...defaultValues });
  // }, []);  // eslint-disable-next-line react-hooks/exhaustive-deps

  const handleMood: SubmitHandler<MoodValues> = (input) => {
    if (currentMood) {
      updateMood({
        variables: {
          input: {
            id: input.id,
            name: input.name,
            icon: input.icon,
          },
        },
      });
    } else {
      createMood({
        variables: {
          input: {
            name: input.name,
            icon: input.icon,
          },
        },
      });
    }
    reset();
  };

  if (loadingCreationMood) return <Loading />;
  if (errorMessage) return <ErrorPopup errorMessage={errorMessage} />;
  return (
    <>
      <FormBox>
        <CardForm>
          <FormTitle>{currentMood ? "Modifier" : "Ajouter"} un mood</FormTitle>
          <Form onSubmit={handleSubmit(handleMood)}>
            <MoodForm
              register={register}
              control={control}
              currentMoodName={currentMood?.name}
            />
            <SolidButton
              type="submit"
              textButton={currentMood ? "Modifier ce mood" : "Ajouter ce mood"}
            />
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
