import React, { useState, ChangeEvent } from "react";
import { MenuItem, Switch, Typography } from "@mui/material";
import { BoxIcon } from "../../assets/styles/list/list";
import InputSelect from "../global/form/inputSelect";
import InputText from "../global/form/inputText";
import { moods } from "./mood.enum";
import { FormError } from "../../assets/styles/global";

export default function MoodForm({
  register,
  control,
  errors,
  currentMoodName,
}: any): JSX.Element {
  const [personalizedIcon, setPersonalizedIcon] = useState<boolean>(false);
  const handlePersonalizedIcon = (event: ChangeEvent<HTMLInputElement>) => {
    setPersonalizedIcon(event.target.checked);
  };

  return (
    <>
      <BoxIcon>
        <InputText
          label="name"
          register={register}
          value={currentMoodName}
          required
        />
        <FormError>{errors.name?.message}</FormError>
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
          <InputText label="icon" register={register} required />
        )}
        <FormError>{errors.icon?.message}</FormError>
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
    </>
  );
}
