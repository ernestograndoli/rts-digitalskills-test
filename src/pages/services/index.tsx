import { Container } from '@mui/material';
import Layout from "../../components/landing/Layout";
import OurFundamentals from "../../components/services/ourFundamentals/index";
import PODServicesSliders from "../../components/common/podServicesSliders/index";
import DataScience from "../../components/services/dataScience/index";
import DataStrategy from "../../components/services/dataStrategy/index";
import WhatQuestion from "../../components/services/whatQuestion/index";
import StartBy from "../../components/services/startBy/index";

export default function Index() {
    return (
        <Layout>
            <Container maxWidth={false} disableGutters={true} className="mainContainer">
                <OurFundamentals/>
                <PODServicesSliders/>
                <DataScience/>
                <DataStrategy/>
                <WhatQuestion/>
                <StartBy/>
            </Container>            
        </Layout>
    )
}