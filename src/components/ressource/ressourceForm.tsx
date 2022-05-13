import React from "react";
import { TextareaAutosize } from "@mui/material";
import InputText from "../global/form/inputText";

export default function RessourceForm({
  register,
  ...currentRessource
}: any): JSX.Element {
  return (
    <>
      <InputText label="title" value={currentRessource.title} register={register} required />
      <InputText label="link" value={currentRessource.link} register={register} required />
      <InputText label="tags" value={currentRessource?.tags} register={register} />
      <InputText label="description" value={currentRessource?.description} register={register} multiline />
    </>
  );
}
