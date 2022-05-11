import React from "react";
import InputText from "../global/form/inputText";

export default function RessourceForm({
  register,
  ...currentRessource
}: any): JSX.Element {
  return (
    <>
      <InputText label="title" type="text" value={currentRessource.title} register={register} required />
      <InputText label="link" type="text" value={currentRessource.link} register={register} required />
      <InputText label="tags" type="text" value={currentRessource?.tags} register={register} false />
      <InputText label="description" type="text" value={currentRessource?.description} register={register} false />
    </>
  );
}
