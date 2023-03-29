import React, { useEffect, useState } from "react";
import { Grid } from '@mui/material';
import { ICard } from "../../../interfaces/IGridCardFactory";
import GetTextBr from "../GetTextBr";

interface ICardComponentProps {
    card : ICard;
    idCard? : number;
}

export default function CardComponent(props : ICardComponentProps) {
    const {card, idCard} = props;
    const [img, setImg] = useState("");
    
    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await import(`../../../assets/images/${card.imgTitle}`)
                setImg(response.default)
            } catch (err) {
                console.log("error: ", err)
            }
        }
        card.imgTitle && fetchImage();
    }, [card]);

    return (
        <Grid item md={card.col.md} xs={card.col.xs} className="card">
            {
                idCard && 
                    <span className="cardId">{("0" + (idCard)).slice(-2)}</span>
            }
            <div className={`${card.imgTitle ? "cardTitleContainer" : ""}`}>
            {   
                card.title && 
                    <h1 className="titleCard">
                    {
                        <>
                        {
                            card.imgTitle && 
                                <img src={img} alt="icon" className="imgTitleCard"/>
                        }
                            <GetTextBr text={card.title}/>
                        </>
                    }
                    </h1>
               
            }
            </div>
            {
                card.subtitle &&
                    <h2 className="subTitleCard">
                    {
                        <GetTextBr text={card.subtitle}/>
                    }
                    </h2>
            }           
            <p className="descriptionCard">
            {
                <GetTextBr text={card.description}/>
            }
            </p>
        </Grid>
    )
}