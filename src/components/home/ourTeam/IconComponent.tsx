import { useEffect, useState } from "react";
import "../../../styles/common/iconsComponent.css";
import { Grid } from '@mui/material';
import { IIcon } from "../../../interfaces/IGridIconsFactory";
import GetTextBr from "../../common/GetTextBr";

interface IIconProps {
    icon : IIcon;
}

export default function IconComponent(props : IIconProps) {
    const { icon } = props;
    const [img, setImg] = useState("");

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await import(`../../../assets/images/${icon.filename}`)
                setImg(response.default)
            } catch (err) {
                console.log("error: ", err)
            }
        }

        fetchImage()
    }, [icon])

    return (
        <Grid item md={3} xs={12} className="gridFlexColumn center iconContainer">            
            <img src={img} alt={icon.alt} className="iconImg"/>
            {
                icon.title &&
                    <h1 className="iconTitle"><GetTextBr text={icon.title}/></h1>
            }            
        </Grid>
    )
}