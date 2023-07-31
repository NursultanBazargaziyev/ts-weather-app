import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontSize: 22,
    fontFamily: "Verdana  ",
  },
  palette: {
    text: {
      primary: "#ffffff",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: "22px",
          "@media (max-width: 899px) and (min-width: 600px)": {
            fontSize: "1rem",
          },
          "@media (max-width: 599px)": {
            fontSize: "0.8rem",
          },
        },
      },
    },
  },
});

export default theme;
