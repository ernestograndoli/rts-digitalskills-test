
import "../../../styles/industries/partners.css";
import { Container, Grid } from '@mui/material';
import GalleryComponent from "../../common/gallery/GalleryComponent";
import { partnersInfo } from "../../../data/industries/partners/data";

export default function Index() {
        
    return (
        <Container id="partners" maxWidth={false} disableGutters={true} sx={{marginBottom : "9.68rem", p : 0}}>
            <Grid container className="gridFlexRow center"  sx={{paddingLeft: "14.58%", paddingRight: "14.58%"}}>
                <Grid item md={7} xs={12}>
                    <h1 className="titleModule">{partnersInfo.titleModule}</h1>
                </Grid>
                <Grid item md={9.5} xs={12}>
                    <GalleryComponent items={partnersInfo}/>
                </Grid>
            </Grid>            
        </Container>
    )
}