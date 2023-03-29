import "../../../styles/services/whatQuestion.css";
import { Container, Grid } from '@mui/material';
import { whatQuestionInfo } from "../../../data/services/whatQuestion/data";
import GridCardsFactory from "../../common/gridCards/GridCardsFactory";

export default function Index() {
    return (
        <Container id="whatQuestion" maxWidth={false} disableGutters={true} sx={{marginBottom : "8rem", p : 0}}>
            <Grid container className="gridFlexColumn" sx={{paddingLeft: "14.58%", paddingRight: "14.58%"}}>
                <Grid item md={12} xs={12}>
                    <h1 className="titleModule">{whatQuestionInfo.title}</h1>
                </Grid>
                <GridCardsFactory items={whatQuestionInfo}/>
            </Grid>            
        </Container>
    )
}