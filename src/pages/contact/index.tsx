import { Container } from '@mui/material';
import Layout from "../../components/landing/Layout";
import ContactUs from "../../components/common/ContactUs";
import OurOffices from "../../components/common/ourOffices";

export default function Index() {
    return (
        <Layout>
            <Container maxWidth={false} disableGutters={true} className="mainContainer">
                <ContactUs filenameImg={"contactUs2.png"} hasTitleModule={false} marginTopModule={{marginTop : "6.25rem"}}/>
                <OurOffices/>
            </Container>            
        </Layout>
    )
}