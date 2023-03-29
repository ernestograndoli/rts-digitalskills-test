import "../../../styles/landing/footer.css";
import { Container } from '@mui/material';

const h1Styles : React.CSSProperties = {
    textAlign: "center",
    color : "#fcfcfc",
    margin : "0",
    padding : "0"
}

export default function Footer() {
    return (
        <Container id="footer" className="footerContainer" maxWidth={false} disableGutters={true}>
            <div className="main">
                <h1 style={h1Styles}>Footer</h1>                
            </div>
            <div className="termOfPrivacy">
                <h1 style={h1Styles}>Terms of Use Privacy Policy</h1>
            </div>
        </Container>
    )
}