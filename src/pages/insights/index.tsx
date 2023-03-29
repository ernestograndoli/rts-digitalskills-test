import { Container } from '@mui/material';
import Layout from "../../components/landing/Layout";
import Resources from "../../components/insights/resources/index";
import Blog from "../../components/insights/blog/index";
import Webinars from "../../components/insights/webinars/index";

export default function Index() {
    return (
        <Layout>
            <Container maxWidth={false} disableGutters={true} className="mainContainer">
                <Resources/>
                <Blog/>
                <Webinars/>
            </Container>
        </Layout>
    )
}