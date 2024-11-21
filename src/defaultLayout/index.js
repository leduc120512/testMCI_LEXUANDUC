import "./defaultLayout-module.scss";
import { Grid } from "@mui/material";
import Header from "./Header";
import Barner from "./Barner";
import Content from "./Content";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
function DefaultLayout() {
  return (
    <Grid container>
      <Grid item md={12}>
        <Header />
      </Grid>
      <Grid item md={12}>
        <Outlet />
      </Grid>
      <Grid item md={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}
export default DefaultLayout;
