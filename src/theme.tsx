import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: ["Roboto", "Raleway", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#004e92",
    },
  },
  shape: {
    borderRadius: 4,
  },
});

export default { theme };
