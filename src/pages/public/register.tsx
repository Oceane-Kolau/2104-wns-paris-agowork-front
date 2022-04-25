import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../graphql/mutations/user/user";
import {
  Title,
  LoginCard,
  CardContent,
  LoginForm,
  LoginContainer,
  ColoredContainer,
} from "../../assets/styles/login/login";
import { GroupForm } from "../../assets/styles/form";
import Loading from "../../components/loading/loading";
import { AuthContext } from "../../context/authContext";
import SolidButton from "../../components/buttons/solidButton";
import ErrorPopup from "../../components/error/errorPopup";

export default function Login(): JSX.Element {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorHidden, setErrorHidden] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loginForm, setLoginForm] = useState({
    login: true,
    email: "",
    password: "",
  });

  const [register, { loading }] = useMutation(LOGIN_USER, {
    onCompleted: (data) => {
      setErrorMessage("");
      setUser(jwt_decode(data.login.token));
      localStorage.setItem("jwt", data.login.token);
      navigate("/");
    },
    onError: (error) => {
      error.graphQLErrors.map(
        ({ message }) => setErrorMessage(message),
        setErrorHidden(false)
      );
    },
  });

  const handleLogin = (e: any) => {
    e.preventDefault();
    register({
      variables: {
        email: loginForm.email,
        password: loginForm.password,
      },
    });
  };

  return (
    <LoginContainer component="main">
      <ColoredContainer />
      <LoginCard>
        <CardContent>
        <Title>Register</Title>
        </CardContent>
      </LoginCard>
    </LoginContainer>
  );
}
