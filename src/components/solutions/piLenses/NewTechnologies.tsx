import "../../../styles/solutions/piLenses/newTechnologies.css";
import { Container, Grid } from '@mui/material';
import { newTechnologiesInfo } from "../../../data/solutions/piLenses/newTechnologies/data";
import GridCardsFactory from "../../common/gridCards/GridCardsFactory";
import GetTextBr from "components/common/GetTextBr";

export default function NewTechnologies() {
    return (
        <Container id="newTechnologies" maxWidth={false} disableGutters={true} sx={{marginBottom : "6.56rem", p : 0}}>
            <Grid container className="gridFlexColumn center" sx={{paddingLeft: "14.58%", paddingRight: "14.58%"}}>
                <Grid item md={9.7} xs={12}>
                    <h1 className="titleModule">{newTechnologiesInfo.title}</h1>
                    <h2 className="subtitleModule"><GetTextBr text={newTechnologiesInfo.subtitle || ""}/></h2>
                </Grid>
                <Grid item md={9.7} xs={12}>
                    <GridCardsFactory items={newTechnologiesInfo}/>
                </Grid>
            </Grid>                      
        </Container>
    )
}