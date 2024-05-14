import { Grid } from "@mui/material";
import { NameTyping } from "../Components";
import {
  BackgroundSVG,
  WhoAmISVG,
  BurstEffectSVG,
  ArrowDownSVG,
} from "../assets";
import { About } from "./About/About";

export const Home = () => {
  return (
    <Grid container spacing={3} padding={5}>
      <BackgroundSVG />
      <Grid item>
        <NameTyping />
      </Grid>
      <Grid item xs={6}>
        <WhoAmISVG />
      </Grid>
      <Grid item xs={12}>
        <BurstEffectSVG />
      </Grid>
      <Grid item xs={12}>
        <ArrowDownSVG width={"10px"} height={"20px"} />
      </Grid>
      <Grid item xs={12}>
        <About />
      </Grid>
    </Grid>
  );
};
