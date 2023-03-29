import "../../../styles/solutions/piLenses/architecture.css";
import { Container, Grid } from '@mui/material';
import architectureIMG from "../../../assets/images/solutions/piLenses/architecturePISystem.png";

export default function Architecture() {
    return (
        <Container id="architecture" maxWidth={false} disableGutters={true} sx={{marginBottom : "15rem", p : 0}}>
            <Grid container className="gridFlexColumn center" sx={{paddingLeft: "14.58%", paddingRight: "14.58%"}}>
                <Grid item md={12} xs={12}>
                    <h1 className="titleModule">Architecture</h1>
                    <h2 className="subtitleModule">PI System Integration</h2>
                </Grid>
                <Grid item md={12} xs={12} sx={{marginTop: "1.62rem"}}>
                    <img src={architectureIMG} alt="Architecture" style={{width : "100%", height : "100%"}}/>
                </Grid>
            </Grid>                      
        </Container>
    )
}