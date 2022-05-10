import React from "react";
import { CardContent } from "@mui/material";
import { LocalPhone, Map } from "@mui/icons-material";
import { useMutation } from "@apollo/client";
import {
  BoxIcon,
  CardTitle,
  CardList,
  IconParagraph,
} from "../../assets/styles/list/list";
import ActionsCard from "../global/actionsCard";
import { DELETE_CAMPUS } from "../../graphql/mutations/infrastructures/campus";

const CampusCard = ({ updateListing, ...campus }: any): JSX.Element => {
  const [deleteCampus] = useMutation(DELETE_CAMPUS, {
    onCompleted: () => {
      updateListing();
    },
    onError: () => {},
  });
  const handleDeleteCampus = () => {
    deleteCampus({
      variables: {
        id: campus.id,
      },
    });
  };
  return (
    <>
      <CardList sx={{ width: 250, margin: 0.2 }} key={campus.id}>
        <CardContent>
          <CardTitle>{campus.name}</CardTitle>
          {campus.address ? (
            <BoxIcon>
              <Map />
              <IconParagraph>
                &nbsp;&nbsp;
                {campus.address}
              </IconParagraph>
            </BoxIcon>
          ) : (
            <></>
          )}
          {campus.phone ? (
            <BoxIcon>
              <LocalPhone />
              <IconParagraph>
                &nbsp;&nbsp;
                {campus.phone}
              </IconParagraph>
            </BoxIcon>
          ) : (
            <></>
          )}
        </CardContent>
        {campus.name === "Paris" ? (
          <></>
        ) : (
          <ActionsCard handleDeleteEl={handleDeleteCampus} />
        )}
      </CardList>
    </>
  );
};

export default CampusCard;
