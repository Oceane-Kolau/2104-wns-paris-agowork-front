import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import InputPassword from "./inputPassword";
import InputText from "./inputText";
import { FormBox } from "../../assets/styles/form";

const ProfileForm = ({
  title,
  typeText,
  label,
  value,
  register,
}: any): JSX.Element => {
  return (
    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
      <Grid item xs={12} sm={12} md={2}>
        <Typography>{title}</Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={10}>
        <FormBox>
          {typeText === "false" ? (
            <InputPassword
              register={register}
              mandatory="false"
              label={label}
            />
          ) : (
            <InputText
              label={label}
              value={value}
              register={register}
              required
            />
          )}
        </FormBox>
      </Grid>
    </Grid>
  );
};

export default ProfileForm;
