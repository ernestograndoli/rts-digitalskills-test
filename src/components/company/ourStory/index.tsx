import "../../../styles/company/ourStory.css";
import { ourStoryInfo } from "../../../data/company/ourStory/data";
import { Container, Grid } from '@mui/material';
import GridCardsFactory from "../../common/gridCards/GridCardsFactory";
import GetTextBr from "components/common/GetTextBr";

export default function Index() {
    return (
        <Container id="ourStory" maxWidth={false} disableGutters={true} sx={{marginBottom : "8.37rem", p : 0}}>
            <Grid container className="gridFlexColumn center" sx={{paddingLeft: "14.58%", paddingRight: "14.58%", marginTop: "1.56rem"}}>
                <Grid item md={8} xs={12}>
                    <h1 className="titleModule"><GetTextBr text={ourStoryInfo.title}/></h1>
                </Grid>
                <Grid item md={8} xs={12} style={{width : "100%"}}>
                    <h2 className="subtitleModule"><GetTextBr text={ourStoryInfo.subtitle}/></h2>
                </Grid>
                <GridCardsFactory items={ourStoryInfo}/>
            </Grid>
        </Container>
    )
}