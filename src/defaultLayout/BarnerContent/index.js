
import {Grid} from "@mui/material";

import Barner from "../Barner";
import Content from "../Content"

function BarnerContent() {
    return(
        <Grid container>

            <Grid>
                <Grid item md={12}>
                    <Barner/>
                </Grid>
                <Grid item md={12}>
                    <Content/>
                </Grid>

            </Grid>

        </Grid>
    );
}
export default BarnerContent;