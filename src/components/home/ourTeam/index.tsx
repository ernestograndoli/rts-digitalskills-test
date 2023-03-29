import "../../../styles/home/ourTeam.css";
import { Link } from "react-router-dom";
import { ourTeamInfo } from "../../../data/home/ourTeam/data";
import { iconsOurTeamInfo } from "../../../data/home/ourTeam/iconsData";
import { Container, Grid } from "@mui/material";
import GridCardsFactory from "../../common/gridCards/GridCardsFactory";
import GridIconsFactory from "../../home/ourTeam/GridIconsComponent";

export default function Index() {
    return (
        <Container id="ourTeam" maxWidth={false} disableGutters={true} sx={{marginBottom : "8.37rem", p : 0}}>
            <Grid container className="gridFlexRow center" sx={{paddingLeft: "14.58%", paddingRight: "14.58%", marginTop: "1.56rem"}}>
                <Grid item md={12} xs={12}>
                    <h1 className="titleModule">{ourTeamInfo.title}</h1>
                </Grid>
                <GridCardsFactory items={ourTeamInfo}/>
                <GridIconsFactory items={iconsOurTeamInfo}/>
                <div style={{textAlign: "center", width : "100%", marginTop : "2.81rem"}}>
                    <Link to={"/services"}>
                        <button className="button dark upperCase">READ MORE</button>
                    </Link>
                </div>
            </Grid>
        </Container>
    )
}