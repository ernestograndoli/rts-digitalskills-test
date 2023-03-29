
import "../../../styles/home/howWeLead.css";
import { Container, Grid } from '@mui/material';
import { howWeLeadInfo } from "../../../data/home/howWeLead/data";
import GridCardsFactory from "../../common/gridCards/GridCardsFactory";

export default function Index() {
        
    return (
        <Container id="howWeLead" maxWidth={false} disableGutters={true} sx={{marginBottom : "7rem", p : 0}}>
            <Grid container className="gridFlexColumn" sx={{paddingLeft: "14.58%", paddingRight: "14.58%"}}>
                <Grid item md={12} xs={12}>
                    <h1 className="titleModule">{howWeLeadInfo.title}</h1>
                </Grid>
                <Grid item md={12} xs={12} sx={{textAlign : "center"}}>
                    <h2 className="subtitleModule">{howWeLeadInfo.subtitle}</h2>
                </Grid>
                <GridCardsFactory items={howWeLeadInfo}/>  
            </Grid>                      
        </Container>
    )
}