import "../../../styles/services/dataScience.css";
import { Container, Grid } from '@mui/material';
import { dataScienceInfo } from "../../../data/services/dataScience/data";
import GridCardsFactory from "../../common/gridCards/GridCardsFactory";

export default function Index() {
    return (
        <Container id="dataScience" maxWidth={false} disableGutters={true} sx={{marginTop: "7.37rem", marginBottom : "8rem", p : 0}}>
            <Grid container className="gridFlexColumn" sx={{paddingLeft: "14.58%", paddingRight: "14.58%"}}>
                <Grid item md={12} xs={12}>
                    <h1 className="titleModule">{dataScienceInfo.title}</h1>
                </Grid>
                <GridCardsFactory items={dataScienceInfo}/>
            </Grid>            
        </Container>
    )
}