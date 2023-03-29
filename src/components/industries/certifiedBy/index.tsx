
import "../../../styles/industries/certifiedBy.css";
import { Container, Grid } from '@mui/material';
import GalleryComponent from "../../common/gallery/GalleryComponent";
import { certifiedByInfo } from "../../../data/industries/certifiedBy/data";

export default function Index() {
        
    return (
        <Container id="certifiedBy" maxWidth={false} disableGutters={true} sx={{marginBottom : "9.62rem", p : 0}}>
            <Grid container className="gridFlexRow center"  sx={{paddingLeft: "14.58%", paddingRight: "14.58%"}}>
                <Grid item md={7} xs={12}>
                    <h1 className="titleModule">{certifiedByInfo.titleModule}</h1>
                </Grid>
                <Grid item md={9.5} xs={12}>
                    <GalleryComponent items={certifiedByInfo}/>
                </Grid>
            </Grid>            
        </Container>
    )
}