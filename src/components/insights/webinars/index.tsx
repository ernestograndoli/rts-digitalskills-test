import "../../../styles/insights/webinars.css";
import { Container, Grid } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Index() {
    return (
        <Container id="webinars" maxWidth={false} disableGutters={true} sx={{marginBottom : "0rem", p : 0}}>
            <Grid container className="banner-container gridFlexRow">
                <Grid item md={12} xs={12} className="gridFlexRow center circleContainer">
                    <div className="circle">
                        <span>COME ALONG</span>
                    </div>
                </Grid>
                <Grid item md={12} xs={12} className="gridFlexColumn content" sx={{alignItems: "flex-end", paddingLeft: "8.75rem"}}>
                    <h1 className="banner-title">Webinars</h1>
                    <h2 className="banner-description">Stay tuned to our upcoming webinars and newly available content!</h2>
                    <div style={{textAlign : "left", width: "100%", paddingTop : "1.68rem"}}>
                        <button className={`button dark`} style={{marginBottom : "3rem", padding: "1.06rem 1.5rem"}}>
                            <span className="flex fd-row center">
                                Schedule
                                <ArrowForwardIosIcon className="arrow"/>
                            </span>
                        </button>
                    </div>
                </Grid>
            </Grid>            
        </Container>
    )
}