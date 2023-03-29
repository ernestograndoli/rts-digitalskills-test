import React, { useEffect, useState } from "react";
import "../../../styles/common/blog.css";
import { Grid } from '@mui/material';
import { ICardBlog } from "../../../interfaces/IGridBlogFactory";

interface IBlogComponentProps {
    item : ICardBlog;
    hr : boolean;
}

const hrStyle : React.CSSProperties = {
    borderColor : "#707070",
    width : "99%",
    opacity : 0.2,
    margin : "3.56rem 0 4.75rem 0",
    padding : "0"
}

export default function BlogComponent(props : IBlogComponentProps) {
    const { item, hr } = props;
    const [img, setImg] = useState("")
    const titleSplit = item.title ? item.title.split("<br>") : [];
    const subtitleSplit = item.subtitle ? item.subtitle.split("<br>") : [];
    const descriptionSplit = item.description ? item.description.split("<br>") : [];

    const getTextBr = (text : string) : JSX.Element => {
        return <>{text}<br/></>
    }

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await import(`../../../assets/images/${item.image}`)
                setImg(response.default)
            } catch (err) {
                console.log("error: ", err)
            }
        }

        fetchImage()
    }, [])

    return (
        <Grid container className="gridFlexRow spaceBetween">
            <Grid className="gridFlexColumn" item md={5.2} xs={12}>
                {   item.title && 
                        <h1 className="titleCard">
                        {
                            titleSplit.map((title : string, index : number) => {
                                return (
                                    <React.Fragment key={index}>{getTextBr(title)}</React.Fragment>                            
                                ) 
                            })
                        }
                    </h1>
                }
                {   item.subtitle && 
                        <h2 className="subtitleCard">
                        {
                            subtitleSplit.map((subtitle : string, index : number) => {
                                return (
                                    <React.Fragment key={index}>{getTextBr(subtitle)}</React.Fragment>                            
                                ) 
                            })
                        }
                    </h2>
                }
                {   item.description && 
                        <p className="descriptionCard">
                        {
                            descriptionSplit.map((description : string, index : number) => {
                                return (
                                    <React.Fragment key={index}>{getTextBr(description)}</React.Fragment>                            
                                ) 
                            })
                        }
                    </p>
                }
                {   item.link && 
                        <a href={item.link.to} className="linkCard">
                            {item.link.text}
                        </a>
                }
            </Grid>
            <Grid item md={6.1} xs={12} sx={{height : "24rem", borderRadius : "0rem"}}>
                <img src={img} alt="imagenBlog" className="imageBlog"/>
            </Grid>
            {
                hr && 
                <Grid item md={12} xs={12}>
                    <hr style={hrStyle}/>
                </Grid>
            }                        
        </Grid>
    )
}