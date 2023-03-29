import { Container } from '@mui/material';
import Layout from "../../components/landing/Layout";
import Seeq from "../../components/solutions/seeq/index";
import PILenses from "../../components/solutions/piLenses/index";
import MoreSolutions from "../../components/solutions/moreSolutions/index";
import Drones from "../../components/solutions/drones/index";

export default function Index() {
    return (
        <Layout>
            <Container maxWidth={false} disableGutters={true} className="mainContainer">
                <Seeq/>
                <PILenses/>
                <Drones/>
                <MoreSolutions/>                
            </Container>            
        </Layout>
    )
}