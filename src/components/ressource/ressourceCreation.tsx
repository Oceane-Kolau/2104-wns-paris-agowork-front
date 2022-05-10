import React, { useState } from "react";
import { Card, CardContent, Grid } from "@mui/material";
import { useMutation } from "@apollo/client";
import { SubmitHandler, useForm } from "react-hook-form";
import { CREATE_RESSOURCE } from "../../graphql/mutations/ressources/ressource";
import { RessourceCreationValues, RessourceType } from "../../types/ressource";
import RessourceCard from "./ressourceCard";
import Loading from "../global/loading/loading";
import { Form } from "../../assets/styles/form";
import { FormTitle, LatestCreatedTitle } from "../../assets/styles/list/list";
import InputText from "../global/form/inputText";
import SolidButton from "../global/buttons/solidButton";
import ErrorPopup from "../global/error/errorPopup";

export default function RessourceCreation({ handleRefreshRessource }: any): JSX.Element {
  const [latestRessource, setLatestRessource] = useState<RessourceType>();
  const { register, handleSubmit, reset } = useForm<RessourceCreationValues>();
  const [errorMessage, setErrorMessage] = useState("");
  const [createRessource, { loading: loadingCreationRessource }] = useMutation(
    CREATE_RESSOURCE,
    {
      onCompleted: (data) => {
        setLatestRessource(data.createRessource);
        handleRefreshRessource();
      },
      onError: (errorCreationRessource) => {
        errorCreationRessource.graphQLErrors.map(({ message }) =>
          setErrorMessage(message),
        );
      },
    },
  );

  const handleRessource: SubmitHandler<RessourceCreationValues> = (input) => {
    /* eslint no-param-reassign: "error" */
    if (input.tags) {
      input.tags = (input.tags as string).trim().split(",");
    }
    console.log(input);
    createRessource({ variables: { input } });
    reset();
  };

  if (loadingCreationRessource) return <Loading />;
  if (errorMessage) return <ErrorPopup errorMessage={errorMessage} />;

  return (
    <Grid
      sx={{ mt: 2, mb: 5 }}
      container
      rowSpacing={3}
      alignItems="center"
      columnSpacing={{ xs: 1, sm: 2, md: 10 }}
    >
      <Grid item xs={12} sm={9} md={6} lg={5} xl={5}>
        <Card sx={{ p: 1 }}>
          <CardContent>
            <FormTitle>Ajouter une ressource</FormTitle>
            <Form onSubmit={handleSubmit(handleRessource)}>
              <InputText
                label="title"
                type="text"
                register={register}
                required
              />
              <InputText
                label="link"
                type="text"
                register={register}
                required
              />
              <InputText label="tags" type="text" register={register} false />
              <InputText
                label="description"
                type="text"
                register={register}
                false
              />
              <SolidButton type="submit" textButton="Ajouter cette ressource" />
            </Form>
          </CardContent>
        </Card>
      </Grid>
      {latestRessource ? (
        <>
          <LatestCreatedTitle>
            👉&nbsp;&nbsp;Nouvelle Ressource
          </LatestCreatedTitle>
          <RessourceCard {...latestRessource} key={latestRessource.id} />
        </>
      ) : (
        <></>
      )}
    </Grid>
  );
}
