import React from "react";
import { Typography } from "@mui/material";
import InputText from "../global/form/inputText";

export default function CampusForm({
  register,
  errors,
  ...currentCampus
}: any): JSX.Element {
  return (
    <>
      <InputText
        label="name"
        value={currentCampus.name}
        register={register}
        required
      />
      <Typography>{errors.name?.message}</Typography>
      <InputText
        label="phone"
        value={currentCampus.phone}
        register={register}
        required
      />
      <Typography>{errors.phone?.message}</Typography>
      <InputText
        label="address"
        value={currentCampus?.address}
        register={register}
      />
      <Typography>{errors.address?.message}</Typography>
    </>
  );
}
