import { Typography, useTheme } from "@mui/material";
import { ReactTyped } from "react-typed";

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
