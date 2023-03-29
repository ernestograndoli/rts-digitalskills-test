import { Container } from '@mui/material';
import Layout from "../../components/landing/Layout";
import IntroHome from "../../components/home/introHome/index";
import HowWeLead from "../../components/home/howWeLead/index";
import LeadingDigital from "../../components/home/leadingDigital/index";
import OurVisionOfIndustry from "../../components/home/ourVisionOfIndustry/index";
import OurTeam from "../../components/home/ourTeam/index";
import PODServicesSliders from "../../components/common/podServicesSliders/index";
import Industries from "../../components/common/industries";
import Clients from "../../components/home/clients/index";
import ContactUs from "../../components/common/ContactUs";
import OurOffices from "../../components/common/ourOffices";

export default function Index() {
    return (
        <Layout>
            <Container maxWidth={false} disableGutters={true} sx={{m : 0, p : 0}} className="mainContainer">
                <IntroHome/>
                <HowWeLead/>
                <LeadingDigital/>
                <OurVisionOfIndustry/>
                <OurTeam/>
                <PODServicesSliders/>
                <Industries/>
                <Clients/>
                <ContactUs filenameImg="contactUs.png" hasTitleModule={true}/>
                <OurOffices/>
            </Container>            
        </Layout>
    )
}