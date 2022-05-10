import React, { useState, useContext } from "react";
import { useMutation } from "@apollo/client";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { formatTimestamp } from "../../utils/dateFormat";
import { CardTitle, Paragraph } from "../../assets/styles/list/list";
import RessourceTag from "./ressourceTag";
import ActionsCard from "../global/actionsCard";
import { DELETE_RESSOURCE } from "../../graphql/mutations/ressources/ressource";
import ConfirmationModal from "../global/modal/confirmationModal";
import { AuthContext } from "../../utils/context/authContext";

const RessourceCard = ({ updateListing, ...ressource }: any): JSX.Element => {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [deleteRessource] = useMutation(DELETE_RESSOURCE, {
    onCompleted: () => {
      setOpen(false);
      updateListing();
    },
    onError: () => {},
  });
  const handleDelete = (e: any) => {
    e.preventDefault();
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
          {ressource.tags ? <RessourceTag tags={ressource.tags} /> : <></>}
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
          <Box textAlign="end">
            <Typography
              variant="caption"
              style={{ display: "inline-block", whiteSpace: "pre-line" }}
            >
              {ressource.author}
            </Typography>
            <Typography
              variant="caption"
              style={{ display: "inline-block", whiteSpace: "pre-line" }}
            >
              {formatTimestamp(ressource.updatedAt)}
            </Typography>
          </Box>
        </CardContent>
        {user!.role === "TEACHER" || user!.role === "ADMIN" ? (
          <>
            <ActionsCard handleOpenModal={handleOpenModal} />
            <ConfirmationModal
              open={open}
              handleClose={handleClose}
              handleDelete={handleDelete}
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
