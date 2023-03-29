import "../../../styles/company/ourVisionOfIndust.css";
import { ourVisionOfIndustInfo } from "../../../data/company/ourVisionOfIndust/data";
import { Container, Grid } from '@mui/material';
import GridCardsFactory from "../../common/gridCards/GridCardsFactory";
import GetTextBr from "components/common/GetTextBr";

export default function Index() {
    return (
        <Container id="ourVisionOfIndust" maxWidth={false} disableGutters={true} sx={{p : 0}}>
            <Grid container className="gridFlexColumn center" sx={{paddingLeft: "14.58%", paddingRight: "14.58%", marginTop: "1.56rem"}}>
                <Grid item md={8.3} xs={12}>
                    <h1 className="titleModule"><GetTextBr text={ourVisionOfIndustInfo.title}/></h1>
                </Grid>
                <Grid item md={8.3} xs={12}>
                    <h2 className="subtitleModule"><GetTextBr text={ourVisionOfIndustInfo.subtitle}/></h2>
                </Grid>
                <GridCardsFactory items={ourVisionOfIndustInfo}/>
            </Grid>
        </Container>
    )
}