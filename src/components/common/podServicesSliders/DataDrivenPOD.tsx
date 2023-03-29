import { Link } from "react-router-dom";
import { Grid } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const header : React.CSSProperties = {
    textAlign : "left",
    font : "normal normal normal 1.87rem/4.25rem Inter",
    letterSpacing : "0.18rem",
    color : "#00B6E5",
    opacity : 1,
    margin : "0",
    padding : "0"
}

const titleStyle : React.CSSProperties = {
    textAlign : "left",
    font : "normal normal bold 2.81rem/4.25rem Inter",
    letterSpacing : "0",
    color : "#F5F5F5",
    opacity : 1,
    margin : "6.81rem 0 0 0",
    padding : "0"
}

const subtitleStyle : React.CSSProperties = {
    textAlign : "left",
    font : "normal normal bold 1.87rem/3.12rem Inter",
    letterSpacing : "0",
    color : "#FCFCFC",
    opacity : 1,
    margin : "2rem 0 0 0",
    padding : "0"
}

const description : React.CSSProperties = {
    textAlign : "left",
    font : "normal normal normal 1.25rem/2.5rem Inter",
    letterSpacing : "0",
    color : "#FCFCFC",
    opacity : 1,
    margin : "0",
    padding : "0"
}

const buttonContainerStyles : React.CSSProperties = {
    textAlign : "left", 
    paddingTop : "2.62rem"
}

const linkStyles : React.CSSProperties = {
    textDecoration : "none",
    font : "normal normal 1.56rem/2.5rem Inter",
    fontWeight : 500,
    letterSpacing : "0",
    color : "#FCFCFC",
    opacity : 1,
    margin : "0",
    padding : "0"
}

export default function DataDrivenPOD() {
    return (
        <Grid container className="gridFlexColumn">
            <Grid item md={12}>
                <h2 style={header}>POD SERVICES</h2>
            </Grid>
            <Grid item md={12}>
                <Grid container className="gridFlexRow spaceBetween">
                    <Grid item md={3.8}>
                        <h1 style={titleStyle}>DATA-DRIVEN POD</h1>
                        <p style={subtitleStyle}>From initial data gathering <br/>to final value creation.</p>
                        <div style={buttonContainerStyles}>
                            <button className="button">
                                <Link to={"/services"} style={linkStyles}>
                                    <span>Learn More<ArrowForwardIosIcon sx={{color : "#fff"}}/></span>
                                </Link>
                            </button>
                        </div>
                    </Grid>
                    <Grid item md={7.2}>
                        <p style={description}>When we talk about Big Data, we mean a set of data whose volume, complexity, and speed of growth forces us to focus on how we manage the data. The real challenge is…what should I do with this data? We help you to define that question.
                        <br/>Today's companies have an insatiable appetite for data, mistakenly believing that more data always creates more value. Actionable insights can only come from a human analyst.
                        <br/>This POD was created to achieve the goals of a data-driven project.
                        <br/><br/>CPS (Cyber-Physical System) is a fundamental computational resource that tightly integrates the physical and virtual worlds. This merge between the physical and digital level is a crucial aspect of our roadmap. In this sense, the IoT, Cognitive computing, Data science, and other team units work as one force in this POD. Operational, manufacturing, and maintenance (among others) problems can be solved, optimized, and efficiently improved with this POD.</p>
                    </Grid>
                </Grid>
            </Grid>                        
        </Grid>
    )
}