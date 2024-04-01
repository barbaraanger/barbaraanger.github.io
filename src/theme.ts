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
      fontSize: string,
      fontFamily: string
    };
  }
}

const theme = createTheme({
    nameTitle: {
        color: '#fff',
        fontFamily: "Special Elite",
        fontSize: '34px'
    },
    palette: {
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#dc004e",
      },
      text: {
        primary: '#fff'
      },
      background: {
        default: '#13072E'
      }
    },
});

export default theme;