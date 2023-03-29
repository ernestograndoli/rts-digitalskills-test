import "../../../styles/home/ourOffices.css";
import { Container, Grid } from '@mui/material';
import { ourOfficesInfo } from "../../../data/common/ourOffices/data";
import GridCardsFactory from "../gridCards/GridCardsFactory";

export default function Index() {
    return (
        <Container id="ourOfficesHome" maxWidth={false} disableGutters={true} sx={{maxHeight: "33.12rem", marginBottom : "10.12rem", p : 0}}>
            <Grid container className="gridFlexColumn imgBg" sx={{paddingLeft: "14.58%", paddingRight: "14.58%"}}>
                <Grid item md={6}>
                    <Grid container className="gridFlexColumn">
                        <Grid item md={6} xs={12}>
                            <h1 className="titleModule">{ourOfficesInfo.title}</h1>
                        </Grid>
                        <GridCardsFactory items={ourOfficesInfo}/>
                    </Grid>
                </Grid>
            </Grid>            
        </Container>
    )
}