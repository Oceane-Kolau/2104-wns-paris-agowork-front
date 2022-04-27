import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
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
import Loading from "../../components/loading/loading";
import { AuthContext } from "../../context/authContext";
import SolidButton from "../../components/buttons/solidButton";
import ErrorPopup from "../../components/error/errorPopup";
import InputText from "../../components/form/inputText";
import InputPassword from "../../components/form/inputPassword";

export type LoginValues = {
  password: string;
  email: string;
};

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
  } = useForm();

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
          <Title>Login pour tester la CD/CI</Title>
          {loading && errorHidden ? (
            <Loading />
          ) : (
            <LoginForm onSubmit={handleSubmit(handleLogin)}>
              <InputText
                label="email"
                type="text"
                register={register}
                required
              />
              <InputPassword register={register} />
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
