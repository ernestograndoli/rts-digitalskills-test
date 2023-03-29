import { Container, Grid } from '@mui/material';
import "../../../styles/services/ourFundamentals.css";
import { ourFundamentalsInfo } from "../../../data/services/ourFundamentals/data";
import GridCardsFactory from "../../common/gridCards/GridCardsFactory";

export default function Index() {
    return (
        <Container id="ourFundamentals" maxWidth={false} disableGutters={true} sx={{marginBottom : "9.81rem", p : 0}}>
            <Grid container className="gridFlexColumn center" sx={{paddingLeft: "14.58%", paddingRight: "14.58%", marginTop: "1.56rem"}}>
                <Grid item md={7.8} xs={12}>
                    <h1 className="titleModule">{ourFundamentalsInfo.title}</h1>
                    <h2 className="subtitleModule">{ourFundamentalsInfo.subtitle}</h2>
                </Grid>
                <GridCardsFactory items={ourFundamentalsInfo}/>
            </Grid>
        </Container>
    )
}