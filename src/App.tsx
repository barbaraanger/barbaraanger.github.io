import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { NotFound } from "./Components";
import { Home, About } from "./Pages";
import "./assets/fonts/fonts.css";
import theme from "./theme";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="*" Component={NotFound} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
};
export default App;
