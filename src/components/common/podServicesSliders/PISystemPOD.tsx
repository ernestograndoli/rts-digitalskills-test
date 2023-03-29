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
    font : "normal normal bold 3.12rem/4.25rem Inter",
    letterSpacing : "0",
    color : "#F5F5F5",
    opacity: 1,
    margin : "8.75rem 0 0 0",
    padding : "0"
}

const subtitleStyle : React.CSSProperties = {
    textAlign : "left",
    font : "normal normal bold 1.87rem/3.18rem Inter",
    letterSpacing : "0",
    color : "#FCFCFC",
    opacity: 1,
    margin : "2rem 0 0 0",
    padding : "0"
}

const description : React.CSSProperties = {
    textAlign : "left",
    font : "normal normal normal 1.25rem/2.5rem Inter",
    letterSpacing : "0",
    color : "#FCFCFC",
    opacity: 1,
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

export default function PISystemPOD() {
    return (
        <Grid container className="gridFlexRow spaceBetween">
            <Grid item md={3.8} sx={{paddingTop : "0"}}>
                <h2 style={header}>POD SERVICES</h2>
                <h1 style={titleStyle}>PI SYSTEM POD</h1>
                <p style={subtitleStyle}>IT/OT Convergence.</p>
                <div style={buttonContainerStyles}>
                    <button className="button">
                        <Link to={"/services"} style={linkStyles}>
                            <span>Learn More<ArrowForwardIosIcon sx={{color : "#fff"}}/></span>
                        </Link>
                    </button>
                </div>
            </Grid>
            <Grid item md={7.2}>
                <p style={description}>Given the constant challenges that companies present, it is necessary to take advantage of the available technologies and tools that allow timely and effective decisions to be taken to improve practices within the business.
                <br/><br/>A business digital transformation represents a huge opportunity for innovation and competitive advantages. This requires rethinking the entire business organization: cultural, strategic, technologic, and operational changes, where processes take a fundamental role among data. Some new technologies such as Big Data and IoT force organizations to "move faster" and stay on guard for digital transformations.<br/><br/> Integrating the Operational Technology (OT) with the Information Technology (IT), it's one step forward to operative efficiency and production costs reduction.
                <br/><br/>PI System allows us to set up the integration of different production KPI`s and adapt the existing process architecture, beside historicization and visual representation of the process itself. Since 2013, we trial our clients for the user understanding of the software and provide them with documentation and functional manuals for technical use.</p>
            </Grid>
        </Grid>
    )
}