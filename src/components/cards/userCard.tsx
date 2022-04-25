import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CardContent, CardMedia, Typography } from "@mui/material";
import { Delete, ImageSearch, School, MoreHoriz } from "@mui/icons-material";
import { useMutation } from "@apollo/client";
import { DELETE_USER, UPDATE_USER } from "../../graphql/mutations/user/user";
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
import ConfirmationModal from "../modal/confirmationModal";

const UserCard = ({ updateListing, ...user }: any): JSX.Element => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [deleteUser] = useMutation(DELETE_USER, {
    onCompleted: (data) => {
      setOpen(false);
      updateListing();
    },
    onError: (error) => {
      console.log(error);
    },
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
          {user.mood != null && user.mood.icon != null ? (
            <Typography>
              <IconParagraph>{user.mood.icon}</IconParagraph> - Mood
            </Typography>
          ) : (
            <></>
          )}
          {user.campus != null && user.campus.name != null ? (
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
          <Link to={`/utilisateur/${user.id}`}>
            <MoreHoriz />
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
