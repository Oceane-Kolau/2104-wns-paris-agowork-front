import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: ["Roboto", "Raleway", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#154e8f",
    },
    background: {
      default: "#fffff"
    },
  },
  shape: {
    borderRadius: 4,
  },
});

export default { theme };
