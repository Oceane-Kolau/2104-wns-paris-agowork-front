import React from "react";
import { Grid, Typography } from "@mui/material";
import InputPassword from "../global/form/inputPassword";
import InputText from "../global/form/inputText";
import { FormBox } from "../../assets/styles/form";

const ProfileForm = ({ title, label, value, register }: any): JSX.Element => {
  return (
    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
      <Grid item xs={12} sm={12} md={2}>
        <Typography>{title}</Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={10}>
        <FormBox>
          {label === "password" ? (
            <InputPassword register={register} label={label} />
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
