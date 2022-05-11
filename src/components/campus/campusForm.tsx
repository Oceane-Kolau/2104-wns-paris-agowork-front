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
        type="text"
        value={currentCampus.name}
        register={register}
        required
      />
      <InputText
        label="phone"
        type="text"
        value={currentCampus.phone}
        register={register}
        required
      />
      <InputText
        label="address"
        type="text"
        value={currentCampus?.address}
        register={register}
        false
      />
    </>
  );
}
