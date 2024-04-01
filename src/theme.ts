import { createTheme } from "@mui/material";
declare module '@mui/material/styles' {
  interface Theme {
    nameTitle: {
      color: string,
      fontSize: string
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    nameTitle: {
      color: string,
      fontSize: string
    };
  }
}

const theme = createTheme({
    typography: {
      fontFamily: "Special Elite",
    },
    nameTitle: {
        color: '#fff',
        fontSize: '34px'
    },
    palette: {
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#dc004e",
      },
    },
});

export default theme;