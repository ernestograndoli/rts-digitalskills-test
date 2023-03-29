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
    textAlign : "center",
    font : "normal normal bold 3.12rem/4.25rem Inter",
    letterSpacing : "0",
    color : "#F5F5F5",
    opacity: 1,
    margin : "4.5rem 0 0 0",
    padding : "0"
}

const subtitleStyle : React.CSSProperties = {
    textAlign : "left",
    font : "normal normal bold 1.87rem/3.18rem Inter",
    letterSpacing : "0",
    color: "#FCFCFC",
    opacity: 1,
    margin : "2.5rem 0 0 0",
    padding : "0"
}

const description : React.CSSProperties = {
    textAlign : "left",
    font : "normal normal normal 1.25rem/2.5rem Inter",
    letterSpacing: "0",
    color: "#FCFCFC",
    opacity: 1,
    margin : "2.5rem 0 0 0",
    padding : "0"
}

const buttonContainerStyles : React.CSSProperties = {
    textAlign : "center", 
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

export default function SoftwareDevPOD() {
    return (
        <Grid container className="gridFlexColumn center">
            <Grid item md={12}>
                <h1 style={header}>POD SERVICES</h1>
            </Grid>
            <Grid item md={5}>
                <h1 className="title" style={titleStyle}>SOFTWARE DEV POD</h1>
                <h2 className="subtitle" style={subtitleStyle}>Welcome to our Sofware Lifecycle Pod!!</h2>
                <p className="description" style={description}>In Digital Skills we are experts in building digital products. In this POD we put our expertise and experience in creating disruptive technologies for our clients.</p>
                <div style={buttonContainerStyles}>
                    <button className="button">
                        <Link to={"/services"} style={linkStyles}>
                            <span>Learn More<ArrowForwardIosIcon sx={{color : "#fff"}}/></span>
                        </Link>
                    </button>
                </div>
            </Grid>                   
        </Grid>
    )
}