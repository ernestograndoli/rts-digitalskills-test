import { IGridCardInfo } from "../../../../interfaces/IGridCardFactory";

export const enablingDataLedInfo : IGridCardInfo = {
    title : "Enabling Data-led Decision Making",
    subtitle : "Seeq enables the rapid creation and sharing of insights in organizations of any size to drive improvements in production and business outcomes. This is achieved by unlocking the expertise of engineers and employees and by breaking down data silos. Seeq provides features to support organizational learning and access to insights improving:",
    cards : [
        {
            title : "Productivity",
            description : "Seeq is a self- service solution for engineers that leverages data science and machine learning innovations to enable features that accelerate time to insight.",
            col : { md : 3, xs : 12 }
        },
        {
            title : "Knowledge <br>Capture",
            description : "Engineers using Seeq Workbench can capture their work and thought processes in Journals, to enable colleagues to leverage their analytics efforts.",
            col : { md : 3, xs : 12 }
        },
        {
            title : "Document Management",
            description : "Seeq applications (Workbooks and Topics) may be shared among employees and sites to document existing analyses and best practices.",
            col : { md : 3, xs : 12 }
        },
        {
            title : "Real-time <br>collaboration",
            description : "Seeq is a web-based application and enables two or more users to collaborate on the same Seeq document simultaneously.",
            col : { md : 3, xs : 12 }
        },
        {
            title : "Publishing",
            description : "Analyses created in Workbench may be quickly assembled for distribution as PDF files, web pages, and dashboards so employees across the organization can benefit from Seeq insights.",
            col : { md : 4, xs : 12 }
        }
    ],
    layouts : [
        { totalCards : 3, hasIdCard : true, justify : "spaceBetween", marginTop : "6rem" },
        { totalCards : 2, hasIdCard : true, justify : "spaceAround", marginTop : "0rem;" }
    ]    
}