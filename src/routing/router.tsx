import React from "react";
import Box from "@mui/material/Box";
import { useLocation } from "react-router-dom";
import { Container } from "../assets/styles/global";
import { ColoredContainer, LoginContainer } from "../assets/styles/login/login";
import Page from "./page";
import Sidebar from "../components/sidebar/sidebar";

const Router = (): JSX.Element => {
  return (
    <>
      {useLocation().pathname !== "/connexion" ? (
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <Container component="main">
            <Page />
          </Container>
        </Box>
      ) : (
        <LoginContainer component="main">
          <ColoredContainer />
          <Page />
        </LoginContainer>
      )}
    </>
  );
};

export default Router;
