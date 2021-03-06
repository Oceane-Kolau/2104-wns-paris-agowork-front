import React, { useContext, useState } from "react";
import { useMutation } from "@apollo/client";
import { Button, Card, CardContent, Grid } from "@mui/material";
import { CardTitle, Paragraph } from "../../assets/styles/list/list";
import RessourceTag from "./ressourceTag";
import ActionsCard from "../global/actionsCard";
import { DELETE_RESSOURCE } from "../../graphql/mutations/ressources/ressource";
import { AuthContext } from "../../utils/context/authContext";
import RessourceCaption from "./ressourceCaption";
import RessourceUpdate from "./ressourceUpdate";

const RessourceCard = ({ updateListing, ...ressource }: any): JSX.Element => {
  const { user } = useContext(AuthContext);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const handleOpenUpdateModal = () => setOpenUpdateModal(true);
  const handleCloseUpdateModal = () => setOpenUpdateModal(false);
  const handleUpdate = () => {
    setOpenUpdateModal(false);
  };

  const [deleteRessource] = useMutation(DELETE_RESSOURCE, {
    onCompleted: () => {
      updateListing();
    },
    onError: () => {},
  });
  const handleDeleteEl = () => {
    deleteRessource({
      variables: {
        id: ressource.id,
      },
    });
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
      <Card sx={{ maxWidth: 345 }} data-testid="ressource">
        <CardContent>
          {ressource.tags[0] !== "" ? (
            <RessourceTag tags={ressource.tags} />
          ) : (
            <></>
          )}
          <CardTitle>{ressource.title}</CardTitle>
          <Paragraph>{ressource.description}</Paragraph>
          {ressource.link ? (
            <Button
              size="small"
              href={ressource.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Consulter le lien
            </Button>
          ) : (
            <></>
          )}
          <RessourceCaption
            author={ressource.author}
            updatedAt={ressource.updatedAt as Date}
          />
        </CardContent>
        {user && (user?.role === "TEACHER" || user?.role === "ADMIN") ? (
          <>
            <ActionsCard
              handleDeleteEl={handleDeleteEl}
              handleOpenUpdateModal={handleOpenUpdateModal}
            />
            <RessourceUpdate
              open={openUpdateModal}
              handleCloseUpdateModal={handleCloseUpdateModal}
              handleUpdate={handleUpdate}
              currentRessource={ressource}
              handleRefreshRessource={updateListing}
            />
          </>
        ) : (
          <></>
        )}
      </Card>
    </Grid>
  );
};

export default RessourceCard;
