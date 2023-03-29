import { ILayout, ICard } from "../../../interfaces/IGridCardFactory";

export interface IOurStoryInfo {
    title : string;
    subtitle : string;
    cards : ICard[];
    layouts : ILayout[];
}

/* SE ALMACENA LOS TEXTOS QUE SE DIBUJAN EN EL MODULO Our Team - NUMERO 5 */
export const ourStoryInfo : IOurStoryInfo = {
    title : "Our Story",
    subtitle : "RTS Group was founded 26 years ago with the purpose of covering <br>necessities in Industrial Automation & Control in sectors as Oil & Gas, Pulp <br>& Paper, Petrochemical, and Food market.",
    cards : [
        {
            description : "During all these years of growth, we focused on diversifying our scope <br>of services, combining our A&C experience and the new Digital Age. <br>The change of the paradigm impulses our professionals to create new technology solutions for <br>our clients. The new Digital Age brought to us different kinds of clients in the industry. <br><br>Following our objectives, we reach to transcendent our borders by venturing into different <br>projects in Europe, South and Centre America. <br>Our passion for technology combined with our creative spirit, impulse RTS Group as a leader in Digital and A&C solutions in this new technology age.",
            col : { md : 8, xs : 12 }
        }
    ],
    layouts : [
        { totalCards : 1, hasIdCard : false, justify : "center"}
    ]    
}