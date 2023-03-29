import { IIcon } from "../../../interfaces/IGridIconsFactory";

export interface IIconsInfo {
    icons : IIcon[]; 
}

/* SE ALMACENA LOS TEXTOS QUE SE DIBUJAN EN EL MODULO Our Team - NUMERO 5 */
export const iconsOurTeamInfo : IIconsInfo = {
    icons : [
        {
            filename : "common/services/ourTeams/iotIcon.svg",
            title : "IOT",
            alt : "IOT",
            col : { md : 3, xs : 12}
        },
        {
            filename : "common/services/ourTeams/cloudComputingIcon.svg",
            title : "Cloud Computing <br>& DevOps",
            alt : "Cloud Computing & DevOps",
            col : { md : 3, xs : 12}
        },
        {
            filename : "common/services/ourTeams/uxuiIcon.svg",
            title : "UX/UI",
            alt : "UX/UI",
            col : { md : 3, xs : 12}
        },
        {
            filename : "common/services/ourTeams/dataAnalyticsIcon.svg",
            title : "Data & Analytics",
            alt : "Data & Analytics",
            col : { md : 3, xs : 12}
        }
    ]  
}