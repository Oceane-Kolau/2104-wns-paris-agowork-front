import React from "react";
import { FormHelperText } from "@mui/material";
import InputText from "../global/form/inputText";
import { FormError } from "../../assets/styles/global";

export default function RessourceForm({
  register,
  errors,
  ...currentRessource
}: any): JSX.Element {
  return (
    <>
      <InputText
        label="title"
        value={currentRessource.title}
        register={register}
        required
      />
      <FormError>{errors.title?.message}</FormError>
      <InputText
        label="link"
        value={currentRessource.link}
        register={register}
        required
      />
      <FormError>{errors.link?.message}</FormError>
      <InputText
        label="tags"
        value={currentRessource?.tags}
        register={register}
      />
      <FormHelperText>
        Séparez les tags par des virgules - ex: Méthodologie, Outils,
        Développement
      </FormHelperText>
      <InputText
        label="description"
        value={currentRessource?.description}
        register={register}
        multiline
      />
      <FormError>{errors.description?.message}</FormError>
    </>
  );
}
