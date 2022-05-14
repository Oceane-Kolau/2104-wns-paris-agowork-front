import React from "react";
import { Typography } from "@mui/material";
import InputText from "../global/form/inputText";
import { FormError } from "../../assets/styles/global";

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
      <FormError>{errors.name?.message}</FormError>
      <InputText
        label="phone"
        value={currentCampus.phone}
        register={register}
        required
      />
      <FormError>{errors.phone?.message}</FormError>
      <InputText
        label="address"
        value={currentCampus?.address}
        register={register}
      />
      <FormError>{errors.address?.message}</FormError>
    </>
  );
}
