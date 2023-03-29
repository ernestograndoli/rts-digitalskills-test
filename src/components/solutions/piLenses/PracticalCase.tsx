import "../../../styles/solutions/piLenses/practicalCase.css";
import { Container, Grid } from '@mui/material';
import { practicalCaseInfo } from "../../../data/solutions/piLenses/practicalCase/data";
import GridCardsFactory from "../../common/gridCards/GridCardsFactory";

export default function PracticalCase() {
    return (
        <Container id="practicalCase" maxWidth={false} disableGutters={true} sx={{marginBottom : "8rem", p : 0}}>
            <Grid container className="gridFlexColumn center bgContainer" sx={{paddingBottom : "7.06rem", paddingLeft: "14.58%", paddingRight: "14.58%"}}>
                <Grid item md={9.7} xs={12}>
                    <GridCardsFactory items={practicalCaseInfo}/>
                </Grid>
            </Grid>                      
        </Container>
    )
}