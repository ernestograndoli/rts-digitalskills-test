// import "../../../styles/home/leadingDigital.css";
import { leadingDigitaInfo } from "../../../data/home/leadingDigital/data";
import { Container } from '@mui/material';
import GridCardsFactory from "../../common/gridCards/GridCardsFactory";

export default function Index() {
    return (
        <Container id="brochure" maxWidth={false} disableGutters={true} sx={{marginBottom : "0", p : 0}}>
            <GridCardsFactory items={leadingDigitaInfo}/>
        </Container>
    )
}