import React from "react";
import { FormHelperText, InputLabel, Select } from "@mui/material";
import { Controller } from "react-hook-form";
import { GroupForm } from "../../assets/styles/form";

export default function InputSelect({
  name,
  label,
  control,
  defaultValue,
  children,
  ...props
}: any): JSX.Element {
  const labelId = `${name}-label`;
  return (
    <GroupForm {...props} fullWidth>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Controller
        render={({ field: { onChange, value } }) => (
          <Select
            onChange={(e) => {
              onChange(e);
            }}
            value={value || ""}
            labelId={labelId}
            label={label}
          >
            {children}
          </Select>
        )}
        name={name}
        control={control}
        defaultValue={defaultValue}
      />
    </GroupForm>
  );
}
