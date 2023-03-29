import "../../../styles/services/dataStrategy.css";
import { dataStrategyInfo } from "../../../data/services/dataStrategy/data";
import { Container, Grid } from '@mui/material';
import GridCardsFactory from "../../common/gridCards/GridCardsFactory";

export default function Index() {
    return (
        <Container id="dataStrategy" maxWidth={false} disableGutters={true} sx={{marginBottom : "8.37rem", p : 0}}>
            <Grid container className="gridFlexColumn center" sx={{paddingLeft: "14.58%", paddingRight: "14.58%", marginTop: "1.56rem"}}>
                <Grid item md={7.4} xs={12}>
                    <h1 className="titleModule">{dataStrategyInfo.title}</h1>
                </Grid>
                <Grid item md={7.4} xs={12}>
                    <h2 className="subtitleModule">{dataStrategyInfo.subtitle}</h2>
                </Grid>
                <GridCardsFactory items={dataStrategyInfo}/>
            </Grid>
        </Container>
    )
}