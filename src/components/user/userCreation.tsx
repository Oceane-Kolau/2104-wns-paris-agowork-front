import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, MenuItem, Typography } from "@mui/material";
import { CREATE_USER } from "../../graphql/mutations/user/user";
import { Form, FormBox, UserForm } from "../../assets/styles/form";
import { GET_ALL_CAMPUS } from "../../graphql/queries/infrastructures/campus";
import { CampusType, GetCampusType } from "../../utils/types/campus";
import SolidButton from "../global/buttons/solidButton";
import InputText from "../global/form/inputText";
import InputSelect from "../global/form/inputSelect";
import { Role, roles, UserType } from "../../utils/types/user";
import UserCard from "./userCard";
import { FormTitle, LatestCreatedTitle } from "../../assets/styles/list/list";
import InputPassword from "../global/form/inputPassword";
import { userCreationSchema } from "../../utils/yupSchema/userValidationSchema";
import { FormError } from "../../assets/styles/global";

export default function UserCreation({ handleRefreshUser }: any): JSX.Element {
  const [latestUser, setLatestUser] = useState<UserType>();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<UserType>({ resolver: yupResolver(userCreationSchema) });
  const { error: errorCampus, data: allCampus } =
    useQuery<GetCampusType>(GET_ALL_CAMPUS);

  const [createUser] = useMutation(CREATE_USER, {
    onCompleted: (data) => {
      setLatestUser(data.createUser);
      handleRefreshUser();
    },
    onError: (error) => {
      // eslint-disable-next-line no-console
      error.graphQLErrors.map(({ message }) => console.log(message));
    },
  });

  const handleUser: SubmitHandler<UserType> = (input) => {
    createUser({ variables: { input } });
    reset();
  };
  return (
    <>
      <FormBox>
        <UserForm>
          <FormTitle>Ajouter un utilisateur</FormTitle>
          <Form onSubmit={handleSubmit(handleUser)}>
            <FormBox>
              <InputText label="firstname" register={register} required />
              <FormError>{errors.firstname?.message}</FormError>
              <InputText label="lastname" register={register} required />
              <FormError>{errors.lastname?.message}</FormError>
            </FormBox>
            <InputText label="email" register={register} required />
            <FormError>{errors.email?.message}</FormError>
            <InputPassword register={register} required label="password" />
            <FormError>{errors.password?.message}</FormError>
            <FormBox>
              <InputText label="town" register={register} required />
              <FormError>{errors.town?.message}</FormError>
              {errorCampus ? (
                <FormError>
                  Erreur de chargement, contactez votre administrateur
                </FormError>
              ) : (
                <InputSelect
                  id="campus-select"
                  name="campus"
                  label="Campus"
                  control={control}
                >
                  {allCampus?.getCampus.map((campus: CampusType) => (
                    <MenuItem key={campus.id} value={campus.id}>
                      {campus.name}
                    </MenuItem>
                  ))}
                </InputSelect>
              )}
            </FormBox>
            <InputSelect
              id="role-select"
              name="role"
              label="Role"
              control={control}
              required
            >
              {roles.map((role: Role) => (
                <MenuItem key={role.name} value={role.name}>
                  {role.name}
                </MenuItem>
              ))}
            </InputSelect>
            <SolidButton type="submit" textButton="Ajouter cet utilisateur" />
          </Form>
        </UserForm>
        {latestUser ? (
          <Box>
            <LatestCreatedTitle>
              👉&nbsp;&nbsp;Nouvel utilisateur
            </LatestCreatedTitle>
            <UserCard {...latestUser} key={latestUser.id} />
          </Box>
        ) : (
          <></>
        )}
      </FormBox>
    </>
  );
}
