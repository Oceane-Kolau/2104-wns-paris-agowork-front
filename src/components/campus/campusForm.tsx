import React from "react";
import InputText from "../global/form/inputText";

export default function CampusForm({
  register,
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
      <InputText
        label="phone"
        value={currentCampus.phone}
        register={register}
        required
      />
      <InputText
        label="address"
        value={currentCampus?.address}
        register={register}
      />
    </>
  );
}
