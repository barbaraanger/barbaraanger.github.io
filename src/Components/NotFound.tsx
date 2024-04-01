import { Typography } from "@mui/material";

export const NotFound = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Typography variant="h4">404 - Not Found</Typography>
      <Typography variant="body1">
        The page you are looking for does not exist.
      </Typography>
    </div>
  );
};
