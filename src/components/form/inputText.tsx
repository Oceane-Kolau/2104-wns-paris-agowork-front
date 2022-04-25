import React from "react";
import { TextField } from "@mui/material";
import { GroupForm } from "../../assets/styles/form";

export default function InputText({
  label,
  required,
  register,
  type,
  value,
}: any): JSX.Element {
  return (
    <GroupForm>
      <TextField
        {...register(label, { required })}
        type={!type ? "text" : type}
        defaultValue={value}
        required={required}
        label={label}
        key={value}
        variant="outlined"
        id={`${label}-input`}
      />
    </GroupForm>
  );
}
