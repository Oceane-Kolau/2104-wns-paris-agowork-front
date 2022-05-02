import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CardContent, CardMedia, Typography } from "@mui/material";
import { Delete, ImageSearch, School, MoreVert } from "@mui/icons-material";
import { useMutation } from "@apollo/client";
import { DELETE_USER } from "../../graphql/mutations/user/user";
import {
  ActionsCard,
  BoxIcon,
  BrokenImage,
  BtnDelete,
  CardList,
  CardTitle,
  IconParagraph,
  Paragraph,
  RoleTag,
} from "../../assets/styles/list/list";
import ConfirmationModal from "../global/modal/confirmationModal";

const UserCard = ({ updateListing, ...user }: any): JSX.Element => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [deleteUser] = useMutation(DELETE_USER, {
    onCompleted: () => {
      setOpen(false);
      updateListing();
    },
    onError: () => {},
  });

  const handleDelete = (e: any) => {
    e.preventDefault();
    deleteUser({
      variables: {
        id: user.id,
      },
    });
  };

  return (
    <>
      <CardList sx={{ width: 291, margin: 1 }}>
        {user.picture ? (
          <CardMedia
            component="img"
            height="140"
            image={user.picture}
            alt={user.firstname}
          />
        ) : (
          <BrokenImage>
            <ImageSearch />
          </BrokenImage>
        )}
        <CardContent>
          <RoleTag>{user.role}</RoleTag>
          <CardTitle>
            {user.firstname} {user.lastname}
          </CardTitle>
          <Paragraph>{user.email}</Paragraph>
          {user.mood && user.mood.icon ? (
            <Typography>
              <IconParagraph>{user.mood.icon}</IconParagraph> - Mood
            </Typography>
          ) : (
            <></>
          )}
          {user.campus && user.campus.name ? (
            <BoxIcon>
              <School />
              <span>&nbsp;&nbsp;{user.campus.name}</span>
            </BoxIcon>
          ) : (
            <></>
          )}
        </CardContent>
        <ActionsCard disableSpacing>
          <BtnDelete onClick={handleOpen}>
            <Delete />
          </BtnDelete>
          <Link to={`/general/utilisateur/${user.id}`}>
            <MoreVert />
          </Link>
        </ActionsCard>
      </CardList>
      <ConfirmationModal
        open={open}
        handleClose={handleClose}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default UserCard;
