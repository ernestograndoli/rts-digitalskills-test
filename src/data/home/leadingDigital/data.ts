import { IGridCardInfo } from "../../../interfaces/IGridCardFactory";

/* SE ALMACENA LOS TEXTOS QUE SE DIBUJAN EN EL MODULO LEading Digital - NUMERO 3 */
export const leadingDigitaInfo : IGridCardInfo = {
    title : "Leading a digital transformation project - Industry 4.0",
    cards : [
        {
            title : "DUE DILIGENCE",
            description : "When starting a digital transformation process-oriented to industry 4.0, due diligence drives the first sprints of the project. We must understand the present of our clients to develop their future. Which are the relevant KPI’s, how works their industry process, where should we dive to identify pain points and improvements.",
            col : {md : 3.5, xs : 12}
        },
        {
            title : "THE PROCESS",
            description : "The process of change and <br>transformation develops around multiple phases that are considered high duration in most cases. The importance of a documentation process and development threads lies in the need to not skip any step and remain the process in a constant controlling approach.",
            col : {md : 3.6, xs : 12}
        },
        {
            title : "TECHNICAL <br>PLANNING",
            description : "The synergy between our professionals and our clients facilitates the construction of a collaborative RoadMap with a substantial incidence in the data architecture, operations, and results. We are focused on materializing the goals <br>into results using our strategic approach.",
            col : {md : 3.6, xs : 12}
        },
        {
            title : "KICK OFF",
            description : "In the OT world, the execution of the operations has always been tied to performance and production requirements. The production as the main gear of the <br>OT world strengthens the attention levels in the implementation of industry 4.0 concepts and those level attentions guarantee the achievements at medium and large terms.",
            col : {md : 4.8, xs : 12}
        },
        {
            title : "CHECK, <br>CROSSCHECK",
            description : "Since his Kickoff, the control Ex-post the start-up of any project, it is essential in order to detect anomalies and common errors in the performance execution. The crosscheck allows us to configure simple alarms that indicate the weak points of the execution.",
            col : {md : 4.8, xs : 12}
        }
    ],
    layouts : [
        { totalCards : 3, hasIdCard : true, justify : "spaceBetween", marginTop : "5.75rem"},
        { totalCards : 2, hasIdCard : true, justify : "spaceAround", marginTop : "-2.25rem"}
    ]
}