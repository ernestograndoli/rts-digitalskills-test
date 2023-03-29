import "../../../styles/company/aboutUs.css";
import { aboutUsInfo } from "../../../data/company/aboutUs/data";
import { Container, Grid } from '@mui/material';
import GridCardsFactory from "../../common/gridCards/GridCardsFactory";

export default function Index() {
    return (
        <Container id="aboutUs" maxWidth={false} disableGutters={true} sx={{marginBottom : "8.37rem", p : 0}}>
            <Grid container className="gridFlexRow center" sx={{paddingLeft: "14.58%", paddingRight: "14.58%", marginTop: "1.56rem"}}>
                <Grid item md={8.3} xs={12}>
                    <h1 className="titleModule">{aboutUsInfo.title}</h1>
                </Grid>
                <GridCardsFactory items={aboutUsInfo}/>
            </Grid>
        </Container>
    )
}