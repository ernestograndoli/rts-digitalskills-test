import { IGridCardInfo } from "../../../interfaces/IGridCardFactory";

export const startByInfo : IGridCardInfo = {
    title: "Start by asking relevant questions",
    cards: [
        {
            title: "Specific",
            description: "Can you think of <br>a clear answer?",
            imgTitle : "services/startBy/specificIcon.svg",
            col: { md : 1.8, xs : 12 }
        },
        {
            title: "Mensurable",
            description: "Quantifiable? Data, driven?",
            imgTitle : "services/startBy/mensurableIcon.svg",
            col: { md : 2.5, xs : 12 }
        },
        {
            title: "Actionable",
            description: "If you had an answer, could you do something with it.",
            imgTitle : "services/startBy/actionableIcon.svg",
            col: { md : 2, xs : 12 }
        },
        {
            title: "Realistic",
            description: "Can you get an answer with data you have?",
            imgTitle : "services/startBy/realisticIcon.svg",
            col: { md : 2, xs : 12 }
        },
        {
            title: "Timely",
            description: "Answer in reasonable timeframe?",
            imgTitle : "services/startBy/timelyIcon.svg",
            col: { md : 1.5, xs : 12 }
        },
    ],
    layouts: [
        {totalCards: 5, hasIdCard: false, justify: "spaceBetween", marginTop: "4.93rem"}
    ]
}