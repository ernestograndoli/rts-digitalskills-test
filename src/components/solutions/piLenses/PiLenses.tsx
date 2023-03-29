import "../../../styles/solutions/piLenses/piLensesIntro.css";
import { Container, Grid } from '@mui/material';
import { piLensesInfo } from "../../../data/solutions/piLenses/piLenses/data";
import GridCardsFactory from "../../common/gridCards/GridCardsFactory";

export default function PiLenses() {
    return (
        <Container id="piLensesIntro" maxWidth={false} disableGutters={true} sx={{marginBottom : "6rem", p : 0}}>
            <Grid container className="gridFlexColumn center" sx={{paddingLeft: "14.58%", paddingRight: "14.58%"}}>
                <Grid item md={12} xs={12}>
                    <h1 className="titleModule">{piLensesInfo.title}</h1>
                </Grid>
                <Grid item md={9.7} xs={12}>
                    <GridCardsFactory items={piLensesInfo}/>
                </Grid>
            </Grid>                      
        </Container>
    )
}