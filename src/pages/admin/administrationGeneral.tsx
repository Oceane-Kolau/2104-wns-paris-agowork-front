import React from "react";
import { Card, CardContent } from "@mui/material";
import { NavLink } from "react-router-dom";
import { ArrowForwardIos } from "@mui/icons-material";
import {
  ActionsCard,
  BtnDelete,
  CardTitle,
  MoodIcon,
} from "../../assets/styles/list/list";
import {
  CardsAdmin,
  ImageConstruction,
} from "../../assets/styles/dashboard/teamMood";
import ImgBuilding from "../../assets/pictures/construction.png";
import { Title } from "../../assets/styles/login/login";
import SolidButton from "../../components/buttons/solidButton";

export default function GeneralForm(): JSX.Element {
  return (
    <>
      <CardsAdmin>
        <NavLink
          to="/campus"
          className={({ isActive }: any) => (isActive ? "active" : "")}
        >
          <Card>
            <CardContent>
              <MoodIcon>🎓</MoodIcon>
              <CardTitle>Campus</CardTitle>
            </CardContent>
            <SolidButton type="text" textButton="Voir plus" />
          </Card>
        </NavLink>
        <NavLink
          to="/mood"
          className={({ isActive }: any) => (isActive ? "active" : "")}
        >
          <Card>
            <CardContent>
              <MoodIcon>✨</MoodIcon>
              <CardTitle>Mood</CardTitle>
            </CardContent>
            <SolidButton type="text" textButton="Voir plus" />
          </Card>
        </NavLink>
        <NavLink
          to="/utilisateur"
          className={({ isActive }: any) => (isActive ? "active" : "")}
        >
          <Card>
            <CardContent>
              <MoodIcon>👤</MoodIcon>
              <CardTitle>Utilisateur</CardTitle>
            </CardContent>
            <SolidButton type="text" textButton="Voir plus" />
          </Card>
        </NavLink>
      </CardsAdmin>
      <ImageConstruction>
        <Title>Coming Soon</Title>
        <img src={ImgBuilding} alt="" />
      </ImageConstruction>
    </>
  );
}
