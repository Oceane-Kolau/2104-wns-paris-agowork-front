import React from "react";
import { CardContent, CardMedia, Typography } from "@mui/material";
import { ImageSearch, School } from "@mui/icons-material";
import { useMutation } from "@apollo/client";
import { DELETE_USER } from "../../graphql/mutations/user/user";
import ActionsCard from "../global/actionsCard";
import {
  BoxIcon,
  BrokenImage,
  CardList,
  CardTitle,
  IconParagraph,
  Paragraph,
  RoleTag,
} from "../../assets/styles/list/list";


const UserCard = ({ updateListing, ...user }: any): JSX.Element => {
  const [deleteUser] = useMutation(DELETE_USER, {
    onCompleted: () => {
      updateListing();
    },
    onError: () => {},
  });

  const handleDeleteEl = () => {
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
          {user.campus && user.campus.name ? (
            <BoxIcon>
              <School />
              <span>&nbsp;&nbsp;{user.campus.name}</span>
            </BoxIcon>
          ) : (
            <></>
          )}
          {user.mood && user.mood.icon ? (
            <Typography>
              <IconParagraph>{user.mood.icon}</IconParagraph> - Mood
            </Typography>
          ) : (
            <></>
          )}
          
        </CardContent>
        <ActionsCard handleDeleteEl={handleDeleteEl} link={`/general/utilisateur/${user.id}`} /> 
      </CardList>
    </>
  );
};

export default UserCard;
