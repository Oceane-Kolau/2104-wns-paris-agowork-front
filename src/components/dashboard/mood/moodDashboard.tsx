import React, { useState, useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation, useQuery } from "@apollo/client";
import { MenuItem } from "@mui/material";
import { AuthContext } from "../../../context/authContext";
import {
  Card,
  ContentCard,
  TitleMood,
} from "../../../assets/styles/dashboard/mood";
import { UPDATE_USER_MOOD } from "../../../graphql/mutations/social/mood";
import SolidButton from "../../buttons/solidButton";
import { GET_ALL_MOODS } from "../../../graphql/queries/social/mood";
import { GetMoodsType } from "../../../types/moods";
import InputSelect from "../../form/inputSelect";
import { MoodIcon } from "../../../assets/styles/list/list";
import { GET_LOGGED_USER } from "../../../graphql/queries/user/user";

type FormValues = {
  id: string;
  email: string;
};

export default function MoodCard(): JSX.Element {
  const { user } = useContext(AuthContext);
  // get all mood registered by admin
  const { data: allMoods } = useQuery<GetMoodsType>(GET_ALL_MOODS);
  const { data: loggedUser, refetch } = useQuery(GET_LOGGED_USER);
  const [currentMood, setCurrentMood] = useState("");
  const { handleSubmit, control, reset } = useForm();

  const [updateUserMood] = useMutation(UPDATE_USER_MOOD, {
    onCompleted: (data) => {
      setCurrentMood(data.updateUserMood.mood.icon);
      // refetch GET_LOGGED_USER query to get the updated mood
      refetch();
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleMood: SubmitHandler<FormValues> = (input) => {
    updateUserMood({
      variables: {
        id: input.id,
        email: user?.email,
      },
    });
    // reset form choice
    reset();
  };

  return (
    <Card>
      <ContentCard>
        <TitleMood>Ton Mood du jour</TitleMood>
        {loggedUser?.getLoggedUserByEmail.mood?.icon ? (
          <MoodIcon>
            {!currentMood
              ? loggedUser?.getLoggedUserByEmail.mood.icon
              : currentMood}
          </MoodIcon>
        ) : (
          "Ajouter votre mood pour la première fois"
        )}
        <form data-testid="formMood" onSubmit={handleSubmit(handleMood)}>
          <InputSelect
            id="icon-select"
            name="id"
            label="Liste des moods"
            control={control}
          >
            {allMoods?.getMoods.map((list: any) => (
              <MenuItem key={list.id} value={list.id}>
                {list.icon} {list.name}
              </MenuItem>
            ))}
          </InputSelect>
          {}
          <SolidButton textButton="Mettre à jour" type="submit" />
        </form>
      </ContentCard>
    </Card>
  );
}
