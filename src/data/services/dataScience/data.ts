import { IGridCardInfo } from "../../../interfaces/IGridCardFactory";

export const dataScienceInfo : IGridCardInfo = {
    title: "Data Science Toolchains",
    cards: [
        {
            title: "IOT",
            subtitle: "Edge Processing <br>of data in motion",
            description: "Acquire events and data <br>from sensors. <br><br>Queue, route, and orchestrate data flow <br>across systems and geographies. <br><br>Cache and store data <br>locally <br><br>Host and deploy container-based analytics. .",
            col: { md : 2.5, xs : 12 }
        },
        {
            title: "FAST DATA",
            subtitle: "Care processing <br>of data in motion",
            description: "Ingest event streams. <br><br>Restructure and enrich <br>data in motion. <br><br>Persist data for real-time usage and for offline analytics. <br><br>Apply rules and analytics.",
            col: { md : 2.5, xs : 12 }
        },
        {
            title: "BIG DATA",
            subtitle: "Analysis <br>of data at rest",
            description: "Host a collocated data store <br>for analytic data (data lake). <br><br>Transform and restructure <br>data for analysis. <br><br>Create aggregate data <br>for analytics systems. <br><br>Build rules and models using statistical and predictive analytics. <br><br>Prepare data for deep learning.",
            col: { md : 3, xs : 12 }
        },
        {
            title: "AI",
            subtitle: "Deep Learning/<br>Machine Learning",
            description: "Train/build analytic models. <br><br>Test models.",
            col: { md:2.5, xs:12 }
        }
    ],
    layouts: [
        {totalCards: 4, hasIdCard: true, columnSpacing: "0rem", justify: "spaceBetween", marginTop:"4.93rem"}
    ]
}