import "../../../styles/services/startBy.css";
import { Container, Grid } from '@mui/material';
import { startByInfo } from "../../../data/services/startBy/data";
import GridCardsFactory from "../../common/gridCards/GridCardsFactory";

export default function Index() {
    return (
        <Container id="startBy" maxWidth={false} disableGutters={true} sx={{marginBottom : "8rem", p : 0}}>
            <Grid container className="gridFlexColumn" sx={{paddingLeft: "14.58%", paddingRight: "14.58%"}}>
                <Grid item md={12} xs={12}>
                    <h1 className="titleModule">{startByInfo.title}</h1>
                </Grid>
                <GridCardsFactory items={startByInfo}/>
            </Grid>            
        </Container>
    )
}