import React from "react";
import { Typography } from "@mui/material";
import InputText from "../global/form/inputText";

export default function RessourceForm({
  register,
  errors,
  ...currentRessource
}: any): JSX.Element {
  return (
    <>
      <InputText label="title" value={currentRessource.title} register={register} required />
      <Typography>{errors.title?.message}</Typography>
      <InputText label="link" value={currentRessource.link} register={register} required />
      <Typography>{errors.link?.message}</Typography>
      <InputText label="tags" value={currentRessource?.tags} register={register} />
      <InputText label="description" value={currentRessource?.description} register={register} multiline />
      <Typography>{errors.description?.message}</Typography>
    </>
  );
}
