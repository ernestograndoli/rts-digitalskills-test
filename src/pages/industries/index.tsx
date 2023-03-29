import { Container } from '@mui/material';
import Layout from "../../components/landing/Layout";
import Industries from "../../components/common/industries";
import Partners from "../../components/industries/partners";
import CertifiedBy from "../../components/industries/certifiedBy";

const hrStyle : React.CSSProperties = {
    width : "60%",
    border : "none",
    height : "0.40rem",
    color : "#E4E4E4",
    background: "#E4E4E4 0% 0% no-repeat padding-box",
    opacity : 0.6,
    margin : "auto",
    marginBottom : "6.43rem",
    padding : "0"
}

export default function Index() {
    return (
        <Layout>
            <Container maxWidth={false} disableGutters={true} className="mainContainer">
                <Industries/>
                <hr style={hrStyle}/>
                <Partners/>
                <hr style={hrStyle}/>
                <CertifiedBy/>
            </Container>
        </Layout>
    )
}