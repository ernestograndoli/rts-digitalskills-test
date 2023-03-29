import "../../../styles/home/ourVisionOfIndustry.css";
import { Link } from "react-router-dom";
import { ourVisionOfIndustryInfo } from "../../../data/home/ourVisionOfIndustry/data";
import { Container, Grid } from '@mui/material';
import GridCardsFactory from "../../common/gridCards/GridCardsFactory";

export default function Index() {
    return (
        <Container id="ourVisionOfIndustry" maxWidth={false} disableGutters={true} sx={{marginBottom : "8.31rem", p : 0}}>
            <Grid container className="gridFlexRow center" sx={{paddingLeft: "14.58%", paddingRight: "14.58%", marginTop: "1.56rem"}}>
                <Grid item md={12} xs={12}>
                    <h1 className="titleModule">{ourVisionOfIndustryInfo.title}</h1>
                </Grid>
                <GridCardsFactory items={ourVisionOfIndustryInfo}/>
                <div style={{textAlign: "center", width : "100%", marginTop : "2.81rem"}}>
                    <Link to={"/company"}>
                        <button className="button dark upperCase">READ MORE</button>
                    </Link>
                </div>
            </Grid>
        </Container>
    )
}