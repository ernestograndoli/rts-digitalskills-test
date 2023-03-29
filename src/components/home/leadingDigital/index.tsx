import "../../../styles/home/leadingDigital.css";
import { leadingDigitaInfo } from "../../../data/home/leadingDigital/data";
import { Container, Grid } from '@mui/material';
import GridCardsFactory from "../../common/gridCards/GridCardsFactory";

export default function Index() {
    return (
        <Container id="leadingDigital" maxWidth={false} disableGutters={true} sx={{marginBottom : "0", p : 0}}>
            <Grid container className="gridFlexColumn" sx={{paddingLeft: "14.58%", paddingRight: "14.58%"}}>
                <Grid item md={12} xs={12}>
                    <h1 className="titleModule">{leadingDigitaInfo.title}</h1>
                </Grid>
                <GridCardsFactory items={leadingDigitaInfo}/>
            </Grid>            
        </Container>
    )
}