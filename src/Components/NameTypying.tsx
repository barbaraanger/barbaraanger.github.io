import { Typography, styled, useTheme } from "@mui/material";
import { ReactTyped } from "react-typed";
import background from "../assets/background.svg";

const NameTyping: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <Typography sx={theme.nameTitle}>
        <ReactTyped strings={["Bárbara Anger"]} typeSpeed={100} />
      </Typography>
    </>
  );
};

export { NameTyping };
