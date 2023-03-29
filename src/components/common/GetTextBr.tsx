import React from "react";

interface IGetTextBrProps {
    text : string;
}

export default function GetTextBr (props : IGetTextBrProps) {
    const { text } = props;
    const textSplit = text ? text.split("<br>") : [];

    const getTextBr = (text : string) : JSX.Element => {
        return <>{text}<br/></>
    }
    
    return (
        <>
            {
                textSplit.map((elem : string, index : number) => {
                    return (
                        <React.Fragment key={index}>{getTextBr(elem)}</React.Fragment>                            
                    ) 
                })
            }                
        </>
    )
}