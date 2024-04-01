import { ThemeProvider } from "@mui/material/styles";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import "./assets/fonts/fonts.css";
import theme from "./theme";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" Component={Home} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
};
export default App;
