import React from "react";

import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { useTheme, ThemeProvider } from "@mui/material/styles";
import Page from "./routing/page";
import AuthProvider from "./utils/context/authContext";

function App(): JSX.Element {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <BrowserRouter>
          <Page />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
