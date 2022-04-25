import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useForm, SubmitHandler } from "react-hook-form";
import { Box, MenuItem, Typography } from "@mui/material";
import { CREATE_USER } from "../../../graphql/mutations/user/user";
import { Form, FormBox, UserForm } from "../../../assets/styles/form";
import { GET_ALL_CAMPUS } from "../../../graphql/queries/infrastructures/campus";
import { CampusType, GetCampusType } from "../../../types/campus";
import SolidButton from "../../../components/buttons/solidButton";
import UserListing from "./userListing";
import InputText from "../../../components/form/inputText";
import InputSelect from "../../../components/form/inputSelect";
import { roles, UserType } from "../../../types/user";
import UserCard from "../../../components/cards/userCard";
import {
  FormTitle,
  LatestCreatedTitle,
} from "../../../assets/styles/list/list";
import InputPassword from "../../../components/form/inputPassword";

export type UserCreationValues = {
  firstname: string;
  lastname: string;
  town: string;
  password: string;
  email: string;
  role: string;
  campus: string;
};

export default function UserCreation(): JSX.Element {
  const [latestUser, setLatestUser] = useState<UserType>();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const { error: errorCampus, data: allCampus } =
    useQuery<GetCampusType>(GET_ALL_CAMPUS);

  const [createUser] = useMutation(CREATE_USER, {
    onCompleted: (data) => {
      setLatestUser(data.createUser);
    },
    onError: (error) => {
      error.graphQLErrors.map(({ message }) => console.log(message));
    },
  });

  const handleUser: SubmitHandler<UserCreationValues> = (input) => {
    createUser({ variables: { input } });
  };
  return (
    <>
      <FormBox>
        <UserForm>
          <FormTitle>Ajouter un utilisateur</FormTitle>
          <Form onSubmit={handleSubmit(handleUser)}>
            <FormBox>
              <InputText
                label="firstname"
                type="text"
                register={register}
                required
              />
              <InputText
                label="lastname"
                type="text"
                register={register}
                required
              />
            </FormBox>

            <InputText label="email" type="text" register={register} required />
            <InputPassword register={register} />

            <FormBox>
              <InputText
                label="town"
                type="text"
                register={register}
                required
              />
              {errorCampus ? (
                <Typography>
                  Erreur de chargement, contactez votre administrateur
                </Typography>
              ) : (
                <InputSelect
                  id="campus-select"
                  name="campus"
                  label="Campus"
                  control={control}
                >
                  {allCampus?.getCampus.map((list: CampusType) => (
                    <MenuItem key={list.id} value={list.id}>
                      {list.name}
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
              {roles.map((list: any) => (
                <MenuItem key={list.name} value={list.name}>
                  {list.name}
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
      <UserListing userCreated={latestUser} />
    </>
  );
}
