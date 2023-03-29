
import "../../../styles/home/clients.css";
import { Container, Grid } from '@mui/material';
import GalleryComponent from "../../common/gallery/GalleryComponent";
import { clientsInfo } from "../../../data/home/clients/data";

export default function Index() {
        
    return (
        <Container id="clients" maxWidth={false} disableGutters={true} sx={{marginBottom : "7rem", p : 0}}>
            <Grid container className="gridFlexColumn" sx={{paddingLeft: "14.58%", paddingRight: "14.58%"}}>
                <Grid item md={12} xs={12}>
                    <h1 className="titleModule">{clientsInfo.titleModule}</h1>
                </Grid>
                <Grid item md={12} xs={12}>
                    <GalleryComponent items={clientsInfo}/>
                </Grid>
            </Grid>            
        </Container>
    )
}