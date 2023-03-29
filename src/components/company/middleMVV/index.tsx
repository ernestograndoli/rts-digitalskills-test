import "../../../styles/company/middleMVV.css";
import { Container, Grid } from '@mui/material';
import { middleMVVInfo } from "../../../data/company/middleMVV/data";
import GridCardsFactory from "../../common/gridCards/GridCardsFactory";

export default function Index() {
    return (
        <Container id="middleMVV" maxWidth={false} disableGutters={true} sx={{marginBottom : "10.06rem", p : 0}}>
            <Grid container className="gridFlexRow center" sx={{paddingLeft: "14.58%", paddingRight: "14.58%", marginTop: "1.56rem"}}>
                <Grid item md={8.3}>
                    <GridCardsFactory items={middleMVVInfo}/>
                </Grid>
            </Grid>            
        </Container>
    )
}