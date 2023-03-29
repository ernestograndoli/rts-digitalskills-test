import "../../../styles/solutions/seeq/seeqIntro.css";
import { Container, Grid } from '@mui/material';
import { seeqIntroInfo } from "../../../data/solutions/seeq/seeqIntro/data";
import GridCardsFactory from "../../common/gridCards/GridCardsFactory";

export default function Seeq() {
    return (
        <Container id="seeqIntro" maxWidth={false} disableGutters={true} sx={{marginTop: "9.37rem", marginBottom : "3.75rem", p : 0}}>
            <Grid container className="gridFlexColumn center" sx={{paddingBottom : "7.06rem"}}>
                <Grid item md={7} xs={12}>
                    <h1 className="titleModule">{seeqIntroInfo.title}</h1>
                </Grid>
                <Grid item md={10.7} xs={12}>
                    <GridCardsFactory items={seeqIntroInfo}/>
                </Grid>
            </Grid>                      
        </Container>
    )
}