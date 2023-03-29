import "../../../styles/solutions/piLenses/conclusions.css";
import { Container, Grid } from '@mui/material';
import { conclusionsInfo } from "../../../data/solutions/piLenses/conclusions/data";
import GridCardsFactory from "../../common/gridCards/GridCardsFactory";

export default function Conclusions() {
    return (
        <Container id="conclusions" maxWidth={false} disableGutters={true} sx={{marginBottom : "5.25rem", p : 0}}>
            <Grid container className="gridFlexColumn center" sx={{paddingLeft: "14.58%", paddingRight: "14.58%"}}>
                <Grid item md={12} xs={12}>
                    <h1 className="titleModule">{conclusionsInfo.title}</h1>
                </Grid>
                <Grid item md={7.2} xs={12}>
                    <GridCardsFactory items={conclusionsInfo}/>
                </Grid>
                <Grid item md={12} xs={12}>
                    <video/>
                </Grid>
            </Grid>                      
        </Container>
    )
}