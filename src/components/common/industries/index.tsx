
import "../../../styles/common/industries.css";
import { Container, Grid } from '@mui/material';
import GalleryComponent from "../gallery/GalleryComponent";
import { gallery } from "../../../data/industries/gallery/data";

export default function Index() {
        
    return (
        <Container id="industries" maxWidth={false} disableGutters={true} sx={{marginTop: "4.5rem", marginBottom : "7rem", p : 0}}>
            <Grid container className="gridFlexColumn" sx={{paddingLeft: "14.58%", paddingRight: "14.58%"}}>
                <Grid item md={12} xs={12}>
                    <h1 className="titleModule">{gallery.titleModule}</h1>
                </Grid>
                <Grid item md={12} xs={12}>
                    <GalleryComponent items={gallery}/>
                </Grid>
            </Grid>             
        </Container>
    )
}