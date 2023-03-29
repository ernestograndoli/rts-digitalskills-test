import React from "react";
import { Container, Grid } from '@mui/material';
import { IImage } from "../../../interfaces/IGalleryFactory";
import ImageComponent from "./ImageComponent";

const titleModule : React.CSSProperties = {
    textAlign : "center",
    font : "normal normal bold 2.18rem/4.93rem Inter",
    letterSpacing : "0",
    color : "#FD6648",
    opacity: 1,
    margin : "0",
    padding : "0"
}

interface IGalleryComponentProps {
    items : any
}

export default function GalleryComponent(props : IGalleryComponentProps) {
    const elements: JSX.Element[] = [];
    const { items } = props;
    
    const getItems = (chunk : IImage[]) => {
        return (
            chunk.map((image : IImage, index : number) => {
                return (
                    <ImageComponent image={image} key={index} imageContainer={items.imageContainer}/>
                )                
            })
        )
    }
    
    const createLayouts = (items : any) => {
        let index = 0;
        let start = 0;
        let total = 0;
    
        for(const config of items.layouts || []) {
            total = start + config.totalImages;
            const chunk = items.images.slice(start, total);            
            start = total;
            const alignItems = config.justify || "";
            const marginTop = config.marginTop || "0";
    
            elements.push(
                <Grid key={index} container className={`flex fd-row align-center ${alignItems}`} columnSpacing={config.columnSpacing} sx={{marginTop: marginTop}}>
                    {getItems(chunk)}
                </Grid>
            );
            index++;
        }
    
        return elements;
    }

    return (
        <React.Fragment>
            {createLayouts(items)}
        </React.Fragment>
    )
}