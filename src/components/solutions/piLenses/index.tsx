import { useState } from "react";
import "../../../styles/common/banner.css";
import "../../../styles/solutions/piLenses/piLenses.css";
import { Container, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import PiLenses from "./PiLenses";
import PracticalCase from "./PracticalCase";
import NewTechnologies from "./NewTechnologies";
import Architecture from "./Architecture";
import SolutionArchitecture from "./SolutionArchitecture";
import Conclusions from "./Conclusions";

export default function Index() {
    const [showInfo, setShowInfo] = useState(false);
    const [textButton, setTextButton] = useState("Learn More");
    const [buttonActive, setButtonActive] = useState(false);

    const toogleInfo = () => {
        setShowInfo(!showInfo);
        !showInfo ? setTextButton("Show Less") : setTextButton("Learn More");
        setButtonActive(!showInfo);
    }

    return (
        <Container id="piLenses" maxWidth={false} disableGutters={true} sx={{p : 0}}>
            <Grid container className="banner-container" sx={{ alignItems: "flex-end" }}>
                <Grid item md={12} xs={12} className="gridFlexColumn center">
                    <h1 className="banner-title">Pi Lenses</h1>
                    <button className={`button ${buttonActive ? "active" : "dark"}`} style={{marginBottom : "3rem"}} onClick={() => toogleInfo()}>
                        <span className="flex fd-row center">
                            {textButton}
                            {!showInfo ?
                                <ExpandMoreIcon sx={{color : "#fff", fontSize : "2.5rem"}}/>
                            :
                                <ExpandLessIcon sx={{color : "#fff", fontSize : "2.5rem"}}/>
                            }
                        </span>
                    </button>
                </Grid>
            </Grid>
            {showInfo &&
                <Grid container className="gridFlexColumn" sx={{paddingTop: "6.43rem"}}>
                    <PiLenses/>
                    <PracticalCase/>
                    <NewTechnologies/>
                    <Architecture/>
                    <SolutionArchitecture/>
                    <Conclusions/>
                </Grid> 
            }                        
        </Container>
    )
}