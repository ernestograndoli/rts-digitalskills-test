import "../../../styles/solutions/seeq.css";
import "../../../styles/solutions/seeq/workbench.css";
import "../../../styles/solutions/seeq/organizer.css";
import { Container, Grid } from '@mui/material';
import SeeqIntro from "./Seeq";
import EnablingDataLed from "./EnablingDataLed";
import Clients from "./Clients";
import SeeqApplicationMap from "./SeeqApplicationMap";

import { seeqWorkbenchInfo } from "../../../data/solutions/seeq/seeqWorkbench/data";
import { seeqOrganizerInfo } from "../../../data/solutions/seeq/seeqOrganizer/data";

const hrStyle : React.CSSProperties = {
    width : "100%",
    border : "none",
    height : "0.40rem",
    color : "#F1F1F1",
    background: "#F1F1F1 0% 0% no-repeat padding-box",
    opacity : 0.6,
    // margin : "auto",
    padding : "0",
    borderRadius: "10px",
    marginBottom : "3.37rem"
}

export default function Index() {
    return (
        <Container id="seeq" className="hide" maxWidth={false} disableGutters={true} sx={{p : 0}}>
            <Grid id="seeqInfoContainer" container className="gridFlexColumn" sx={{paddingLeft: "14.58%", paddingRight: "14.58%"}}>
                <SeeqIntro/>
                <EnablingDataLed/>
                <Clients/>
                <SeeqApplicationMap data={seeqWorkbenchInfo} marginBottom={"5.56rem"}/>
                <hr style={hrStyle}/>
                <SeeqApplicationMap data={seeqOrganizerInfo} marginBottom={"8.87rem"}/>
            </Grid>
        </Container>
    )
}