import "../../../styles/solutions/piLenses/solutionArchitecture.css";
import { Container, Grid } from '@mui/material';
import solutionArchitectureIMG from "../../../assets/images/solutions/piLenses/solutionArchitecture.png";
import stepByStepSolutionArchitectureIMG from "../../../assets/images/solutions/piLenses/stepByStepArchitecture.svg";

export default function SolutionArchitecture() {
    return (
        <Container id="solutionArchitecture" maxWidth={false} disableGutters={true} sx={{marginBottom : "22.25rem", p : 0}}>
            <Grid container className="gridFlexColumn center" sx={{paddingLeft: "14.58%", paddingRight: "14.58%"}}>
                <Grid item md={12} xs={12}>
                    <h1 className="titleModule">Solution Architecture</h1>
                </Grid>
                <Grid item md={12} xs={12} sx={{marginTop: "3.93rem"}}>
                    <img src={solutionArchitectureIMG} alt="Solution Architecture" style={{width : "100%", height : "100%"}}/>
                </Grid>
                <Grid item md={12} xs={12} sx={{marginTop: "7.43rem"}}>
                    <img src={stepByStepSolutionArchitectureIMG} alt="Step by step Solution Architecture" style={{width : "100%", height : "100%"}}/>
                </Grid>
            </Grid>                      
        </Container>
    )
}