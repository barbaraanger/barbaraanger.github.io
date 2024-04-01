import { Grid } from "@mui/material";
import { NameTyping, NextPageArrow } from "../Components";
import { BackgroundSVG, WhoAmISVG, BurstEffectSVG } from "../assets";

export const Home = () => {
  return (
    <>
      <BackgroundSVG />
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
      <NextPageArrow nextPageUrl={"/about"} />
    </>
  );
};
