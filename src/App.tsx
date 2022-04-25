import React from "react";

import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { useTheme, ThemeProvider } from "@mui/material/styles";
import Router from "./routing/router";
import AuthProvider from "./context/authContext";

function App(): JSX.Element {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
