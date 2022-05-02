import React, { useState } from "react";
import { Card, CardContent, Grid } from "@mui/material";
import { RessourceType } from "../../types/ressources";
import { useMutation } from "@apollo/client";
import RessourceCard from "../../components/cards/ressourceCard";
import Loading from "../../components/loading/loading";
import { SubmitHandler, useForm } from "react-hook-form";
import { CREATE_RESSOURCE } from "../../graphql/mutations/ressources/ressource";
import { Form } from "../../assets/styles/form";
import { FormTitle, LatestCreatedTitle } from "../../assets/styles/list/list";
import InputText from "../form/inputText";
import SolidButton from "../buttons/solidButton";

type RessourceCreationValues = {
  title: string;
  link: string;
  description?: string;
  tags?: Array<string> | string;
};

function RessourceCreation({ handleRefreshRessource }: any): JSX.Element {
  const [latestRessource, setLatestRessource] = useState<RessourceType>();
  const { register, handleSubmit, reset } = useForm<RessourceCreationValues>();

  const [createRessource, { loading }] = useMutation(CREATE_RESSOURCE, {
    onCompleted: (data) => {
      setLatestRessource(data.createRessource);
      handleRefreshRessource();
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleRessource: SubmitHandler<RessourceCreationValues> = (input) => {
    if (input.tags) {
      input.tags = (input.tags as string).split(",");
    }
    createRessource({ variables: { input } });
    reset();
  };

  if (loading) return <Loading />;

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
        <Grid item xs={12} sm={9} md={6} lg={5} xl={5}>
          <LatestCreatedTitle>
            👉&nbsp;&nbsp;Nouvelle Ressource
          </LatestCreatedTitle>
          <RessourceCard {...latestRessource} key={latestRessource.id} />
        </Grid>
      ) : (
        <></>
      )}
    </Grid>
  );
}

export default RessourceCreation;
