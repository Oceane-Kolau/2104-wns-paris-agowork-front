import React, { MouseEvent, useState } from "react";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { GroupForm } from "../../assets/styles/form";

export default function InputPassword({
  label,
  mandatory,
  register,
}: any): JSX.Element {
  const [showPassword, setShowPassword] = useState(false);
  // to handle show/hide password input
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <GroupForm>
      <FormControl variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">
          {!label ? "password *" : label}
        </InputLabel>
        <OutlinedInput
          {...(mandatory === "false" ? "" : "required")}
          id="outlined-adornment-password"
          label="Password"
          type={showPassword ? "text" : "password"}
          {...register("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </GroupForm>
  );
}
