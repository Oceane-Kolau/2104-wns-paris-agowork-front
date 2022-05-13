import React, { MouseEvent, useState } from "react";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { GroupForm } from "../../../assets/styles/form";

export default function InputPassword({
  label,
  required,
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
          {required ? "password *" : label}
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          label="Password"
          type={showPassword ? "text" : "password"}
          {...register(label,{required})}
          autoComplete="off"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle-password-visibility"
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
