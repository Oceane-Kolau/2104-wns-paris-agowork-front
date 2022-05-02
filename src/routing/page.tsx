import React from "react";
import Box from "@mui/material/Box";
import { useLocation } from "react-router-dom";
import { Container } from "../assets/styles/global";
import { ColoredContainer, LoginContainer } from "../assets/styles/login/login";
import Router from "./router";
import Sidebar from "../components/sidebar/sidebar";

const Page = (): JSX.Element => {
  return (
    <>
      {useLocation().pathname !== "/connexion" ? (
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <Container component="main">
            <Router />
          </Container>
        </Box>
      ) : (
        <LoginContainer component="main">
          <ColoredContainer />
          <Router />
        </LoginContainer>
      )}
    </>
  );
};

export default Page;
