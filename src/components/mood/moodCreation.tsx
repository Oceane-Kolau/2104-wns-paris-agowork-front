import React, { ChangeEvent, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Box, MenuItem, Switch, Typography } from "@mui/material";
import { useMutation } from "@apollo/client";
import InputText from "../global/form/inputText";
import { CREATE_MOOD } from "../../graphql/mutations/social/mood";
import { Form, FormBox, CardForm } from "../../assets/styles/form";
import SolidButton from "../global/buttons/solidButton";
import {
  BoxIcon,
  FormTitle,
  LatestCreatedTitle,
} from "../../assets/styles/list/list";
import InputSelect from "../global/form/inputSelect";
import { moods } from "./mood.enum";
import { MoodType, MoodCreationValues } from "../../types/mood";
import MoodCard from "./moodCard";

export default function MoodCreation({handleRefreshMood}: any): JSX.Element {
  const [personalizedIcon, setPersonalizedIcon] = useState<boolean>(false);
  const handlePersonalizedIcon = (event: ChangeEvent<HTMLInputElement>) => {
    setPersonalizedIcon(event.target.checked);
  };

  const [latestMood, setLatestMood] = useState<MoodType>();
  const [createMood] = useMutation(CREATE_MOOD, {
    onCompleted: (data) => {
      setLatestMood(data.createMood);
      handleRefreshMood();
    },
    onError: () => {},
  });

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
  return (
    <>
      <FormBox>
        <CardForm>
          <FormTitle>Ajouter un mood</FormTitle>
          <Form onSubmit={handleSubmit(handleMood)}>
            <BoxIcon>
              <InputText
                label="name"
                type="text"
                register={register}
                required
              />

              {!personalizedIcon ? (
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
                <InputText label="icon" type="text" register={register} />
              )}
            </BoxIcon>
            <Typography sx={{ marginTop: 2 }}>
              {!personalizedIcon
                ? "Ajouter un icon personnalisé"
                : "Revenir à la sélection"}
              <Switch
                checked={personalizedIcon}
                onChange={handlePersonalizedIcon}
                inputProps={{ "aria-label": "controlled" }}
                size="small"
              />
            </Typography>
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
