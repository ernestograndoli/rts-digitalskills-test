import { IGridCardInfo } from "../../../interfaces/IGridCardFactory";

/* SE ALMACENA LOS TEXTOS QUE SE DIBUJAN EN EL MODULO Our Team - NUMERO 5 */
export const ourTeamInfo : IGridCardInfo = {
    title : "Our Teams",
    cards : [
        {
            description : "Each unit is made up of highly qualified professionals who are at the forefront of technology and applied methodologies.",
            col : { md : 5.2, xs : 12 }
        }
    ],
    layouts : [
        { totalCards : 1, hasIdCard : false, justify : "center"}
    ]    
}