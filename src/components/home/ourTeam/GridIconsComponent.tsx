import { Grid } from "@mui/material";
import { IIcon } from "../../../interfaces/IGridIconsFactory";
import { IIconsInfo } from "../../../data/home/ourTeam/iconsData";
import IconComponent from "../../../components/home/ourTeam/IconComponent";

interface IGridIconsProps {
    items : IIconsInfo
}

export default function GridIconsComponent (props : IGridIconsProps) {
    const { items } = props;

    return (
        <Grid id="iconsOurTeams" container className={"gridFlexRow spaceBetween"} sx={{marginTop : "2.62rem"}}>
            {
                items.icons.map((icon : IIcon, index : number) => {
                    return <IconComponent icon={icon} key={index}/>
                })
            }
        </Grid>
    )
}