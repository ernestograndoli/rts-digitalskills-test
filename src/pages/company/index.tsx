import { Container } from '@mui/material';
import Layout from "../../components/landing/Layout";
import AboutUs from "../../components/company/aboutUs/index";
import OurVisionOfIndust from "../../components/company/ourVisionOfIndust/index";
import MiddleMVV from "../../components/company/middleMVV/index";
import OurStory from "../../components/company/ourStory/index";
import OurOffices from "../../components/company/ourOffices/index";

export default function Index() {
    return (
        <Layout>
            <Container maxWidth={false} disableGutters={true} className="mainContainer">
                <AboutUs/>
                <OurVisionOfIndust/>
                <MiddleMVV/>
                <OurStory/>
                <OurOffices/>
            </Container>            
        </Layout>
    )
}