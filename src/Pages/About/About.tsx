import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import AcheiIcon from "../../assets/Achei.png";

const projects = [
  {
    url: "https://github.com/barbaraanger/achei_frontend",
    image: AcheiIcon,
    name: "Achei",
  },
  {
    url: "https://github.com/barbaraanger/achei_frontend",
    image: AcheiIcon,
    name: "Achei",
  },
];

export const About = () => {
  const projectsTitle = {
    fontFamily: "Tenor Sans Regular",
    fontSize: "40px",
  };
  return (
    <Box>
      <Typography
        sx={{
          ...projectsTitle,
          display: "flex",
          justifyContent: "center",
        }}
      >
        My projects
      </Typography>
      <Stack spacing={2} direction={"row"}>
        {projects.map((project, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: "20rem",
              p: 2,
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                image={project.image}
                height="auto"
                width="auto"
                sx={{ maxWidth: "20rem", maxHeight: "20rem" }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="#000"
                  fontWeight={"bold"}
                  fontFamily={"Tenor Sans Regular"}
                  sx={{ textAlign: "center" }}
                >
                  {project.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};
