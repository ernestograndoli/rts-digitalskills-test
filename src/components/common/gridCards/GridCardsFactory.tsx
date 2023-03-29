import React from "react";
import { Grid } from '@mui/material';
import { ICard } from "../../../interfaces/IGridCardFactory";
import CardComponent from "./CardComponent";

interface GridCardsFactoryProps<T> {
    items : T;
}

export default function GridCardsFactory<T> (props : GridCardsFactoryProps<T>) {
    const elements: JSX.Element[] = [];
    const { items } = props;
    let idCard = 0;

    const getItems = (chunk : ICard[], hasIdCard : boolean) => {
        return (
            chunk.map((card : ICard, index : number) => {
                idCard++;
                return (
                    hasIdCard ? 
                        <CardComponent card={card} key={index} idCard={idCard}/>
                    :
                        <CardComponent card={card} key={index}/>
                )                
            })
        )
    }
    
    const createLayouts = (items : any) => {
        let index = 0;
        let start = 0;
        let total = 0;
    
        for(const config of items.layouts || []) {
            total = start + config.totalCards;
            const chunk = items.cards.slice(start, total);            
            start = total;
            const alignItems = config.justify || "";
            const marginTop = config.marginTop || "0";
    
            elements.push(
                <Grid key={index} container className={"gridFlexRow " + alignItems} columnSpacing={config.columnSpacing} sx={{height: "100%", marginLeft : 0, marginTop: marginTop}}>
                    {getItems(chunk, config.hasIdCard)}
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
