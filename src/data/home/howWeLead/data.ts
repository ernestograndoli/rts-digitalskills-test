import { IGridCardInfo } from "../../../interfaces/IGridCardFactory";

/* SE ALMACENA LOS TEXTOS QUE SE DIBUJAN EN EL MODULO How we lead - NUMERO 2 */
export const howWeLeadInfo : IGridCardInfo = {
    title : "How we lead and focus our projects?",
    subtitle : "Leading a digital transformation project - Industry 4.0",
    cards : [
        {
            title : "Establishing a <br>sense of urgency",
            description : "Identifying and discussing crises, potential crises, or <br>major opportunities.",
            col : {xs : 12, sm : 4, md : 2.7, lg : 3, xl : 3}
        },
        {
            title : "Forming a powerful <br>guiding coalition",
            description : "Assembling a group with enough power to lead the project.",
            col : {xs : 12, sm : 4, md : 2.7, lg : 3, xl : 3}
        },
        {
            title : "Creating <br>a vision",
            description : "Leading the project to obtain results. Developing strategies for achieving that vision.",
            col : {xs : 12, sm : 4, md : 2.7, lg : 3, xl : 3}
        },
        {
            title : "Communicate <br>a vision",
            description : "Client team focus and aware of the strategies and techniques to make the project successful.",
            col : {xs : 12, sm : 4, md : 2.7, lg : 3, xl : 3}
        },
        {
            title : "Empowering others <br>to act on the vision",
            description : "Industry 4.0 projects require the collaboration of the clients. Because of that it is important to empower.",
            col : {xs : 12, sm : 4, md : 3.7, lg : 3, xl : 3}
        },
        {
            title : "Planning for and <br>creating short term wins",
            description : "Planning for visible performance improvements.",
            col : {xs : 12, sm : 4, md : 3.5, lg : 3, xl : 3}
        },
        {
            title : "Institutionalizing <br>new approaches",
            description : "Integrating the results into the company process.",
            col : {xs : 12, sm : 4, md : 3.5, lg : 3, xl : 3}
        }
    ],
    layouts : [
        { totalCards : 4 , hasIdCard : true, justify : "spaceBetween", marginTop : "4.81rem"},
        { totalCards : 3 , hasIdCard : true, columnSpacing: "5.75rem", justify: "" , marginTop : "5rem"}
    ]
}