import { IGridCardInfo } from "../../../interfaces/IGridCardFactory";

/* SE ALMACENA LOS TEXTOS QUE SE DIBUJAN EN EL MODULO INTRO HOME - NUMERO 1 */
export const introHomeInfo : IGridCardInfo = {
    cards : [
        {   
            title : "Who we are?",
            subtitle : "We are an OT-IT team, combining their skills to lead digital transformation in the industry.",
            description : "Best IT practices and 26 years of OT expertise creates the perfect synergy to get successful results in our projects.",
            col : {xs : 12, sm : 5, md : 5, lg : 5, xl : 5}
        },
        {
            title : "What do we do?",
            subtitle : "We lead digital transformation projects <br>in the Industry.",
            description : "Providing digital solutions for OT/IT convergence and empowering OT people with IT practices and services.",
            col : {xs : 12, sm : 5, md : 5, lg : 5, xl : 5}
        }
    ],
    layouts : [
        { totalCards : 2 , hasIdCard : false, columnSpacing : "0", justify: "spaceBetween", marginTop : "4.81rem"}
    ]
}