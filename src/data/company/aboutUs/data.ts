import { ILayout, ICard } from "../../../interfaces/IGridCardFactory";

export interface IAboutUsInfo {
    title : string;
    cards : ICard[];
    layouts : ILayout[];
}

/* SE ALMACENA LOS TEXTOS QUE SE DIBUJAN EN EL MODULO Our Team - NUMERO 5 */
export const aboutUsInfo : IAboutUsInfo = {
    title : "About Us",
    cards : [
        {
            description : "We are an OT-IT team, that combine their skills to lead digital transformation in the industry. Best IT practices and our 26 years of OT expertise creates the perfect synergy to get successful results in our projects.",
            col : { md : 8.3, xs : 12 }
        }
    ],
    layouts : [
        { totalCards : 1, hasIdCard : false, justify : "center"}
    ]    
}