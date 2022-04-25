import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Box, MenuItem, Switch, Typography } from "@mui/material";
import { useMutation } from "@apollo/client";
import InputText from "../../../components/form/inputText";
import { CREATE_MOOD } from "../../../graphql/mutations/social/mood";
import { Form, FormBox, MoodForm } from "../../../assets/styles/form";
import SolidButton from "../../../components/buttons/solidButton";
import {
  BoxIcon,
  FormTitle,
  LatestCreatedTitle,
} from "../../../assets/styles/list/list";
import InputSelect from "../../../components/form/inputSelect";
import { moods } from "../../../components/mood/mood.enum";
import MoodListing from "./moodListing";
import { MoodType } from "../../../types/moods";
import MoodCard from "../../../components/cards/moodCard";

type MoodCreationValues = {
  name: string;
  icon: string;
};

export default function MoodCreation(): JSX.Element {
  const [latestMood, setLatestMood] = useState<MoodType>();
  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const [createMood] = useMutation(CREATE_MOOD, {
    onCompleted: (data) => {
      setLatestMood(data.createMood);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const watchIcon = watch("personnalIcon", false);
  useEffect(() => {
    const subscription = watch((value, { name, type }) =>
      console.log(value, name, type)
    );
    return () => subscription.unsubscribe();
  }, [watch]);
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
  return (
    <>
      <FormBox>
        <MoodForm>
          <FormTitle>Ajouter un mood</FormTitle>
          <Form onSubmit={handleSubmit(handleMood)}>
            <BoxIcon>
              <InputText
                label="name"
                type="text"
                register={register}
                required
              />
              {watchIcon === false ? (
                <InputSelect
                  id="icon-select"
                  name="icon"
                  label="icon"
                  control={control}
                  required
                >
                  {moods.map((list: any) => (
                    <MenuItem key={list.mood} value={list.icon}>
                      {list.icon}
                    </MenuItem>
                  ))}
                </InputSelect>
              ) : (
                <></>
              )}
              {watchIcon && (
                <InputText label="icon" type="text" register={register} />
              )}
            </BoxIcon>
            <Typography sx={{ marginTop: 2 }}>
              {watchIcon === false
                ? "Ajouter un icon personnalisé"
                : "Revenir à la sélection"}
              <Switch {...register("personnalIcon")} size="small" />
            </Typography>
            <SolidButton type="submit" textButton="Ajouter ce mood" />
          </Form>
        </MoodForm>
        {latestMood ? (
          <Box>
            <LatestCreatedTitle>👉&nbsp;&nbsp;Nouveau mood</LatestCreatedTitle>
            <MoodCard {...latestMood} key={latestMood.id} />
          </Box>
        ) : (
          <></>
        )}
      </FormBox>
      <MoodListing moodCreated={latestMood} />
    </>
  );
}
