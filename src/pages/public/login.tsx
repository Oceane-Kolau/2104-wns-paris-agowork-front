import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import jwt_decode from "jwt-decode";
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
import Loading from "../../components/global/loading/loading";
import { AuthContext } from "../../utils/context/authContext";
import SolidButton from "../../components/global/buttons/solidButton";
import ErrorPopup from "../../components/global/error/errorPopup";
import InputText from "../../components/global/form/inputText";
import InputPassword from "../../components/global/form/inputPassword";
import { LoginValues } from "../../utils/types/login";
import { loginSchema } from "../../utils/yupSchema/userValidationSchema";
import { FormError } from "../../assets/styles/global";

export default function Login(): JSX.Element {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorHidden, setErrorHidden] = useState(true);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginValues>({ resolver: yupResolver(loginSchema) });

  const [login, { loading }] = useMutation(LOGIN_USER, {
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

  const handleLogin: SubmitHandler<LoginValues> = (input) => {
    login({
      variables: {
        email: input.email,
        password: input.password,
      },
    });
    reset();
  };

  return (
    <LoginContainer component="main">
      <ColoredContainer />
      <LoginCard>
        <CardContent>
          <Title>Login</Title>
          {loading && errorHidden ? (
            <Loading />
          ) : (
            <LoginForm onSubmit={handleSubmit(handleLogin)}>
              <InputText label="email" register={register} required />
              <FormError>{errors.email?.message}</FormError>
              <InputPassword register={register} required label="password" />
              <FormError>{errors.password?.message}</FormError>
              <SolidButton type="submit" textButton="Connexion" />
            </LoginForm>
          )}
          {errorMessage !== "" && !errorHidden ? (
            <ErrorPopup errorMessage={errorMessage} errorHidden={errorHidden} />
          ) : (
            <> </>
          )}
        </CardContent>
      </LoginCard>
    </LoginContainer>
  );
}
