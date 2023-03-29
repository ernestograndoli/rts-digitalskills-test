import { IGridCardInfo } from "../../../interfaces/IGridCardFactory";

export const whatQuestionInfo : IGridCardInfo = {
    title: "What question I want to answer when I am diving into my data?",
    cards: [
        {
            title: "Monitoring",
            description: "What is happening/real time? Advisory real time prediction views or process and asset status; Are things progressing in the way that I expect; is there any action that I need to take to keep <br>us on track?",
            col: { md : 2.5, xs : 12 }
        },
        {
            title: "Diagnostic",
            description: "Why did it happen? - Benefits: Root cause; Investigation on/of historical data sets.",
            col: { md : 1.8, xs : 12 }
        },
        {
            title: "Predictive",
            description: "What will happen? Increase asset availability and improve <br>batch outcomes.",
            col: { md : 1.6, xs : 12 }
        },
        {
            title: "Descriptive",
            description: "What happened? Benefits: Create and share insights to inform decisions plant wide.",
            col: { md : 1.9, xs : 12 }
        },
        {
            title: "Prescriptive",
            description: "What should happen? Benefits: Evaluate options to make decisions that optimize outcome.",
            col: { md : 2, xs : 12 }
        },
    ],
    layouts: [
        {totalCards: 5, hasIdCard: false, justify: "spaceBetween", marginTop:"4.93rem"}
    ]
}