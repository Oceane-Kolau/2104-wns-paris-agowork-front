import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { BrokenImage, ImageSearch } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Grid, MenuItem } from "@mui/material";
import { UPDATE_USER } from "../../../graphql/mutations/user/user";
import { Form } from "../../../assets/styles/form";
import { GET_ALL_CAMPUS } from "../../../graphql/queries/infrastructures/campus";
import { CampusType, GetCampusType } from "../../../types/campus";
import SolidButton from "../../../components/buttons/solidButton";
import InputSelect from "../../../components/form/inputSelect";
import { CardTitle } from "../../../assets/styles/list/list";
import { GET_ONE_USER } from "../../../graphql/queries/user/user";
import ProfileForm from "../../../components/form/profileForm";
import { roles } from "../../../types/user";

export type UserUpdateValues = {
  id: string;
  firstname: string;
  lastname: string;
  town: string;
  password: string;
  email: string;
  role: string;
  campus: string;
};

export default function UserUpdate(): JSX.Element {
  const { id } = useParams();
  const { error: errorCampus, data: allCampus } =
    useQuery<GetCampusType>(GET_ALL_CAMPUS);
  const {
    loading,
    data: user,
    error: errorUser,
    refetch,
  } = useQuery(GET_ONE_USER, {
    variables: { id },
    fetchPolicy: "cache-and-network",
  });

  const preloadedValues = {
    id: id,
  };

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: preloadedValues });

  const [updateUser] = useMutation(UPDATE_USER, {
    onCompleted: (data) => {
      console.log("updatedData", data);
      refetch();
    },
    onError: (error) => {
      error.graphQLErrors.map(({ message }) => console.log(message));
    },
  });

  const handleUpdateUser: SubmitHandler<UserUpdateValues> = (input) => {
    updateUser({ variables: { input } });
  };

  return (
    <>
      {user && !loading && !errorUser ? (
        <>
          <Form onSubmit={handleSubmit(handleUpdateUser)}>
            <Grid
              container
              rowSpacing={3}
              columnSpacing={{ xs: 1, sm: 2, md: 12 }}
            >
              <Grid item xs={12} sm={12} md={6}>
                <Card>
                  {user.getUserById.picture ? (
                    <CardMedia
                      component="img"
                      height="140"
                      image={user.getUserById.picture}
                      alt={user.getUserById.firstname}
                    />
                  ) : (
                    <CardMedia>
                      <ImageSearch />
                    </CardMedia>
                  )}
                  <CardContent>
                    <CardTitle>Informations personnelles</CardTitle>
                    <ProfileForm
                      title="Prénom"
                      value={user.getUserById.firstname}
                      label="firstname"
                      register={register}
                    />
                    <ProfileForm
                      title="Nom"
                      value={user.getUserById.lastname}
                      label="lastname"
                      register={register}
                    />
                    <ProfileForm
                      title="Email"
                      value={user.getUserById.email}
                      label="email"
                      register={register}
                    />
                    <ProfileForm
                      title="Mot de passe"
                      typeText="false"
                      label="password"
                      register={register}
                    />
                    <ProfileForm
                      title="Ville"
                      value={user.getUserById.town}
                      label="town"
                      register={register}
                    />
                  </CardContent>
                </Card>
                <SolidButton
                  type="submit"
                  textButton="Modifier les informations"
                />
              </Grid>
              <Grid item xs={5}>
                <Card>
                  <CardContent>
                    <CardTitle>Informations administratives</CardTitle>
                    <InputSelect
                      id="role-select"
                      name="role"
                      label="Role"
                      defaultValue={user.getUserById.role}
                      control={control}
                    >
                      {roles.map((list: any) => (
                        <MenuItem key={list.name} value={list.name}>
                          {list.name}
                        </MenuItem>
                      ))}
                    </InputSelect>
                    {errorCampus ? (
                      "Erreur de chargement, contactez votre administrateur"
                    ) : (
                      <InputSelect
                        id="campus-select"
                        name="campus"
                        defaultValue={
                          !user.getUserById.campus.id
                            ? ""
                            : user.getUserById.campus.id
                        }
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
                    <SolidButton
                      type="submit"
                      textButton="Modifier cet utilisateur"
                    />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Form>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
