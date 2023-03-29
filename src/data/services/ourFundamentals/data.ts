import { IGridCardInfo } from "../../../interfaces/IGridCardFactory";

export const ourFundamentalsInfo : IGridCardInfo = {
    title : "Which are our fundamentals?",
    subtitle : "We are convinced that the best strategy to implement a successful project is being focused on the “RTS Solution Architech” path which is:",
    cards : [
        {
            description : "Staying focused on the user model;",
            col : { md : 3.2, xs : 12 }
        },
        {
            description : "Considering open architecture strategies;",
            col : { md : 3.7, xs : 12 }
        },
        {
            description : "Proposing a friendly pricing model for our products;",
            col : { md : 4.5, xs : 12 }
        },
        {
            description : "Improving the knowledge and being updated about the new technologies.",
            col : { md : 6.4, xs : 12 }
        },
        {
            description : '"Best in Class" approach, best technologies available for each level of industries,',
            col : { md : 7, xs : 12 }
        },
        {
            description : "from the field sensors to the best SCADA's or MES systems.",
            col : { md : 5.2, xs : 12 }
        }
    ],
    layouts : [
        { totalCards : 1, hasIdCard : false, justify : "center", marginTop : "3.10rem" },
        { totalCards : 1, hasIdCard : false, justify : "center", marginTop : "1.43rem" },
        { totalCards : 1, hasIdCard : false, justify : "center", marginTop : "1.43rem" },
        { totalCards : 1, hasIdCard : false, justify : "center", marginTop : "1.43rem" },
        { totalCards : 1, hasIdCard : false, justify : "center", marginTop : "1.43rem" },
        { totalCards : 1, hasIdCard : false, justify : "center", marginTop : "0" }
    ]    
}