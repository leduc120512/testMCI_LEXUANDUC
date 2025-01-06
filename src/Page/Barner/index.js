

import Img_barner from "./3000x1150 1.png";
import Barner2 from "./900x900.png";
import {Grid} from "@mui/material";
import "./barner-module.scss";


function Barner() {
    return(
        <Grid container className="Barner">
            <img className="barner_" src={Img_barner} alt="barner" />
            <img className="barner2_" src={Barner2} alt="barner" />
        </Grid>
    );
}
export default Barner;




