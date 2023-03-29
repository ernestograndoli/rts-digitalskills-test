import {ILayout,ICard} from "../../../interfaces/IGridCardFactory";

interface IMiddleMVVInfo {
    cards: ICard[];
    layouts: ILayout[];
}

export const middleMVVInfo : IMiddleMVVInfo = {
    cards: [
        {
            title: "Mission",
            description: "Improve the industry performance by sustainable and efficient practices.",
            imgTitle : "company/midleMVV/missionIcon.svg",
            col: { md : 3.8, xs : 12 }
        },
        {
            title: "Values",
            description: "We decided that if we want a better world, we must put all our efforts into making it sustainable. Data-Driven services are perfect for that! We put our grain of sand.",
            imgTitle : "company/midleMVV/valuesIcon.svg",
            col: { md : 3.8, xs : 12 }
        },
        {
            title: "Vision",
            description: "We believe in combining technical skills with creativity. We impulse our solutions thinking beyond the problematics.",
            imgTitle : "company/midleMVV/visionIcon.svg",
            col: { md : 3.5, xs : 12 }
        },
    ],
    layouts: [
        {totalCards: 3, hasIdCard: false, justify:"spaceBetween", marginTop:"4.93rem"}
    ]
}