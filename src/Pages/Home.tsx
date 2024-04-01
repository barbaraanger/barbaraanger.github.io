import { Grid } from "@mui/material";
import { NameTyping } from "../Components";
import { WhoAmISVG } from "../assets/WhoAmISVG";
import { BackgroundSVG } from "../assets/Background/BackgroundSVG"; // Importe o SVG de fundo
import BurstEffectSVG from "../assets/BurstEffectSVG";
import { ArrowDownSVG } from "../assets/ArrowDownSVG";

export const Home = () => {
  return (
    <>
      <BackgroundSVG /> {/* Renderize o SVG de fundo */}
      <Grid container spacing={2} padding={5}>
        <Grid item xs={12} md={6} lg={3}>
          <NameTyping />
        </Grid>
      </Grid>
      <Grid container xs={12} md={12} lg={3} padding={5}>
        <Grid item xs={7} md={6} lg={8}></Grid>
        <Grid item xs={5} md={4} lg={3}>
          <WhoAmISVG />
        </Grid>
      </Grid>
      <BurstEffectSVG />
      <ArrowDownSVG width={"10"} height={"10"} />
    </>
  );
};
