import React, { useEffect, useState } from "react";
import { Grid } from '@mui/material';
import { IImage } from "../../../interfaces/IGalleryFactory";

interface IImageComponentProps {
    image : IImage;
    imageContainer : string;
}

const title : React.CSSProperties = {
    display : "flex",
    alignItems : "end",
    position : "relative",
    top : "-6.87rem",
    left : "1.87rem",
    textAlign : "left",
    font : "normal normal bold 1.75rem/1.87rem Inter",
    letterSpacing : "0",
    color : "#FCFCFC",
    opacity: 1,
    margin : "0 0 -4.5rem 0",
    padding : "0",
    width : "100%",
    height : "4rem"
}

const imageContainerStyles : React.CSSProperties = {
    height : "15.62rem",
    width : "100%",
    borderRadius : "0.56rem",
    opacity : "0.86",
    padding : "0",
    margin : "0",
    textDecoration : "none"
}

export default function ImageComponent(props : IImageComponentProps) {
    const { image, imageContainer } = props;
    const [img, setImg] = useState("");

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await import(`../../../assets/images/${image.filename}`)
                setImg(response.default)
            } catch (err) {
                console.log("error: ", err)
            }
        }

        fetchImage()
    }, [image])

    return (
        <Grid item md={image.col.md} xs={image.col.xs}>
            <a href="/" className={`gridFlexColumn center ${imageContainer}`}>
                <img src={img} className={`image ${image.orientation ? image.orientation : ""}`} alt="logo"/>
                {
                    image.title &&
                        <h3 style={title}>{image.title}</h3>
                }                
            </a>
        </Grid>
    )
}