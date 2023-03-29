import "../../../styles/home/introHome.css";
import { Container, Grid } from '@mui/material';
import { introHomeInfo } from "../../../data/home/introHome/data";
import GridCardsFactory from "../../common/gridCards/GridCardsFactory";

export default function IntroHome() {
    return (
        <Container id="introHome" maxWidth={false} disableGutters={true} sx={{marginBottom : "8.37rem", p : 0}}>
            <Grid container className="gridFlexColumn" sx={{paddingLeft: "14.58%", paddingRight: "14.58%"}}>
                <GridCardsFactory items={introHomeInfo}/>
            </Grid>
        </Container>
    )
}