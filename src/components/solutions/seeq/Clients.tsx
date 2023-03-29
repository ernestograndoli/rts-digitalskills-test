import "../../../styles/solutions/seeq/clients.css";
import { Container, Grid } from '@mui/material';
import { clientsInfo } from "../../../data/solutions/seeq/clients/data";

export default function Clients() {
    return (
        <Container id="clients" maxWidth={false} disableGutters={true} sx={{marginBottom : "7.81rem", p : 0}}>
            <Grid container className="gridFlexColumn center">
                <Grid item md={7.2} xs={12}>
                    <h1 className="titleModule">{clientsInfo.title}</h1>
                    <h2 className="descriptionModule">{clientsInfo.description}</h2>
                </Grid>
            </Grid>                      
        </Container>
    )
}