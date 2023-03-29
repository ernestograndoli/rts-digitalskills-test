import { ILayout, ICard } from "../../../interfaces/IGridCardFactory";

export interface IOurVisionOfIndustInfo {
    title : string;
    subtitle : string;
    cards : ICard[];
    layouts : ILayout[];
}

/* SE ALMACENA LOS TEXTOS QUE SE DIBUJAN EN EL MODULO Our Team - NUMERO 5 */
export const ourVisionOfIndustInfo : IOurVisionOfIndustInfo = {
    title : "Our vision of Industry 4.0",
    subtitle : "4.0 projects are a process, not an event. It advances through stages that build on each other. Shortcuts never work, it brings loss of momentum, a reversal of hard-won gains, and <br>devastation of the entire transformation effort.",
    cards : [
        {
            description : "It requires creating a new system, a new teamwork approach. Remember, the status quo seems more dangerous than launching into the unknown. It's not a matter of technology or resources but rather strategic planning and vision. A project proposal requires a solid vision for our client. We build that vision together, defining the objectives / KPI`s and expected results. We believe in short term goals to meet and celebrate. <br><br>Real transformation takes time, short term goals it is the success key to don`t give up and seek the expected results. It is a way to obtain clear performance improvements, establish goals in the yearly planning system, achieve the objectives and rewards.",
            col : { md : 8.3, xs : 12 }
        }
    ],
    layouts : [
        { totalCards : 1, hasIdCard : false, justify : "center"}
    ]    
}