import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Card, CardContent, Grid, MenuItem } from "@mui/material";
import { UPDATE_USER } from "../../../graphql/mutations/user/user";
import { Form } from "../../../assets/styles/form";
import { GET_ALL_CAMPUS } from "../../../graphql/queries/infrastructures/campus";
import { CampusType, GetCampusType } from "../../../utils/types/campus";
import SolidButton from "../../../components/global/buttons/solidButton";
import InputSelect from "../../../components/global/form/inputSelect";
import { CardTitle } from "../../../assets/styles/list/list";
import { GET_ONE_USER } from "../../../graphql/queries/user/user";
import ProfileForm from "../../../components/user/profileForm";
import { roles, UserType } from "../../../utils/types/user";
import Loading from "../../../components/global/loading/loading";
import ErrorPopup from "../../../components/global/error/errorPopup";
import { userUpdateSchema } from "../../../utils/yupSchema/userValidationSchema";
import { FormError } from "../../../assets/styles/global";

export default function UserUpdate(): JSX.Element {
  const { id } = useParams();
  const [errorMessage, setErrorMessage] = useState("");
  const preloadedValues = {
    id: id,
  };
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<UserType>({
    defaultValues: preloadedValues,
    resolver: yupResolver(userUpdateSchema),
  });

  const { error: errorCampus, data: allCampus } =
    useQuery<GetCampusType>(GET_ALL_CAMPUS);

  const {
    data: user,
    loading: loadingGetUser,
    refetch,
  } = useQuery(GET_ONE_USER, {
    variables: { id },
    fetchPolicy: "cache-and-network",
    onError: (errorGetUser) => {
      errorGetUser.graphQLErrors.map(({ message }) => setErrorMessage(message));
    },
  });

  const [updateUser, { loading: loadingUpdateUser }] = useMutation(
    UPDATE_USER,
    {
      onCompleted: () => {
        refetch();
      },
      onError: (errorUpdateUser) => {
        errorUpdateUser.graphQLErrors.map(({ message }) =>
          setErrorMessage(message)
        );
      },
    }
  );

  const handleUpdateUser: SubmitHandler<UserType> = (input) => {
    updateUser({ variables: { input } });
  };

  if (loadingGetUser || loadingUpdateUser) return <Loading />;
  if (errorMessage) return <ErrorPopup errorMessage={errorMessage} />;

  return (
    <Form onSubmit={handleSubmit(handleUpdateUser)}>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 10 }}>
        <Grid item xs={12} sm={12} md={6}>
          <Card>
            <CardContent>
              <CardTitle>Informations personnelles</CardTitle>
              <ProfileForm
                title="Prénom"
                value={user.getUserById.firstname}
                label="firstname"
                register={register}
              />
              <FormError>{errors.firstname?.message}</FormError>
              <ProfileForm
                title="Nom"
                value={user.getUserById.lastname}
                label="lastname"
                register={register}
              />
              <FormError>{errors.lastname?.message}</FormError>
              <ProfileForm
                title="Email"
                value={user.getUserById.email}
                label="email"
                register={register}
              />
              <FormError>{errors.email?.message}</FormError>
              <ProfileForm
                title="Mot de passe"
                label="password"
                register={register}
              />
              <ProfileForm
                title="Ville"
                value={user.getUserById.town}
                label="town"
                register={register}
              />
              <FormError>{errors.town?.message}</FormError>
              <SolidButton
                type="submit"
                textButton="Modifier les informations"
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
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
                    !user.getUserById.campus ? "" : user.getUserById.campus.id
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
  );
}
