import React, { useState, useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation, useQuery } from "@apollo/client";
import { MenuItem } from "@mui/material";
import { AuthContext } from "../../../utils/context/authContext";
import {
  Card,
  ContentCard,
  TitleMood,
} from "../../../assets/styles/dashboard/mood";
import { UPDATE_USER_MOOD } from "../../../graphql/mutations/social/mood";
import SolidButton from "../../global/buttons/solidButton";
import { GET_ALL_MOODS } from "../../../graphql/queries/social/mood";
import { GetMoodsType } from "../../../types/mood";
import InputSelect from "../../global/form/inputSelect";
import { MoodIcon } from "../../../assets/styles/list/list";
import { GET_LOGGED_USER } from "../../../graphql/queries/user/user";

type MoodValues = {
  id: string;
  email: string;
};

export default function MoodCard(): JSX.Element {
  const { user } = useContext(AuthContext);
  // get all mood registered by admin
  const { data: allMoods } = useQuery<GetMoodsType>(GET_ALL_MOODS);
  const { data: loggedUser, refetch } = useQuery(GET_LOGGED_USER);
  const [currentMood, setCurrentMood] = useState("");
  const { handleSubmit, control, reset } = useForm<MoodValues>();

  const [updateUserMood] = useMutation(UPDATE_USER_MOOD, {
    onCompleted: (data) => {
      setCurrentMood(data.updateUserMood.mood.icon);
      // refetch GET_LOGGED_USER query to get the updated mood
      refetch();
    },
    onError: () => {},
  });

  const handleMood: SubmitHandler<MoodValues> = (input) => {
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
