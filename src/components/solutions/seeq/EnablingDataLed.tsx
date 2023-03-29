import "../../../styles/solutions/seeq/enablingDataLed.css";
import { Container, Grid } from '@mui/material';
import { enablingDataLedInfo } from "../../../data/solutions/seeq/enablingDataLed/data";
import GridCardsFactory from "../../common/gridCards/GridCardsFactory";

export default function EnablingDataLed() {
    return (
        <Container id="enablingDataLed" maxWidth={false} disableGutters={true} sx={{marginBottom : "6.81remrem", p : 0}}>
            <Grid container className="gridFlexColumn center" sx={{paddingBottom : "7.06rem"}}>
                <Grid item md={7.5} xs={12}>
                    <h1 className="titleModule">{enablingDataLedInfo.title}</h1>
                    <h2 className="subtitleModule">{enablingDataLedInfo.subtitle}</h2>
                </Grid>
                <Grid item md={9.8} xs={12}>
                    <GridCardsFactory items={enablingDataLedInfo}/>
                </Grid>
            </Grid>                      
        </Container>
    )
}