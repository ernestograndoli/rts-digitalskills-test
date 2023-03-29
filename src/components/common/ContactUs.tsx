import React, { useEffect, useState } from "react";
import { Container, Grid } from '@mui/material';

const titleModule : React.CSSProperties = {
    textAlign : "center",
    font : "normal normal bold 2.18rem/4.93rem Inter",
    letterSpacing : "0",
    color : "#FD6648",
    opacity : 1,
    margin : "0 0 2.87rem 0",
    padding : "0",
    width : "100%"
}

const inputFormStyles : React.CSSProperties = {
    border : "0.06rem solid gray",
    borderRadius : "0.93rem",
    opacity: 1,
    width : "100%",
    textAlign : "left",
    font : "normal normal normal 1.18rem/2.18rem Inter",
    letterSpacing : "0",
    color : "#626260",
    minHeight : "4.43rem",
    margin : "0 0 1.87rem 0",    
    paddingLeft: "0.62rem"
}

const textAreaStyles : React.CSSProperties = {
    textAlign : "left",
    font : "normal normal normal 1.18rem/2.18rem Inter",
    letterSpacing : "0",
    color : "#626260",
    opacity : 1,
    border : "0.06rem solid gray",
    borderRadius : "0.93rem",
    width : "100%",
    height : "100%",
    margin : "0",    
    paddingLeft : "0.62rem",
    resize : "none"
}

const imgStyles : React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    padding : "0",
    margin : "0"
}

interface IContactUsProps {
    filenameImg : string;
    hasTitleModule : boolean;
    marginTopModule? : React.CSSProperties;
}

export default function ContactUs(props : IContactUsProps) {
    const { filenameImg, hasTitleModule, marginTopModule } = props;
    const [img, setImg] = useState("");

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await import(`../../assets/images/common/contactUs/${filenameImg}`)
                setImg(response.default)
            } catch (err) {
                console.log("error: ", err)
            }
        }

        fetchImage()
    }, [filenameImg])

    return (
        <Container id="contactUs" style={marginTopModule} maxWidth={false} disableGutters={true} sx={{marginBottom : "8.37rem", p : 0}}>
            <Grid container className="gridFlexRow" columnSpacing="3rem" sx={{paddingLeft: "14.58%", paddingRight: "14.58%"}}>
                {
                    hasTitleModule &&
                        <h1 style={titleModule}>Need more information?</h1>
                }
                <Grid item md={6} xs={12}>
                    <img src={img} style={imgStyles} alt="contatUs"/>
                </Grid>
                <Grid item md={6} xs={12}>
                    <input type="text" name="fullName" style={inputFormStyles} placeholder="Full name" />
                    <input type="text" name="email" style={inputFormStyles} placeholder="Email" />
                    <input type="text" name="subject" style={inputFormStyles} placeholder="Subject" />
                    <textarea style={textAreaStyles} defaultValue="Tell us how we can help you." name="message" rows={6} />
                    <div style={{textAlign : "right", width : "100%", paddingLeft: "0.93rem", marginTop : "1.18rem"}}>
                        <button className="button2 dark">SEND A MESSAGE</button>
                    </div>                    
                </Grid>
            </Grid>          
        </Container>
    )
}