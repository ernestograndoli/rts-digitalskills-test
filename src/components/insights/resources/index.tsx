import "../../../styles/insights/resources.css";
import { Container, Grid } from '@mui/material';
import { resourcesInfo } from "../../../data/insights/resources/data";
import GridCardsFactory from "../../common/gridCards/GridCardsFactory";

export default function Index() {
    return (
        <Container id="resources" maxWidth={false} disableGutters={true} sx={{marginTop: "3.93rem", marginBottom : "8rem", p : 0}}>
            <Grid container className="gridFlexColumn" sx={{paddingLeft: "14.58%", paddingRight: "14.58%"}}>
                <Grid item md={12} xs={12}>
                    <h1 className="titleModule">{resourcesInfo.title}</h1>
                </Grid>
                <GridCardsFactory items={resourcesInfo}/>
                <div style={{textAlign: "center", width : "100%", marginTop : "2.81rem"}}>
                    <a href="/" target="_self">
                        <button className="button dark upperCase">VIEW ALL RESOURCES</button>
                    </a>
                </div>
            </Grid>            
        </Container>
    )
}