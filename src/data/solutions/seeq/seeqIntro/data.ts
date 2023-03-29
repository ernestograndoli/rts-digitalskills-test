import { IGridCardInfo } from "../../../../interfaces/IGridCardFactory";

export const seeqIntroInfo : IGridCardInfo = {
    title : "Seeq® is an advanced analytics solution for process manufacturing data.", 
    cards : [
        {
            description : "With Seeq applications, you and your team can rapidly investigate and share insights from operations and manufacturing data sources to improve production outcomes. OSIsoft PI, Honeywell PHD, GE Proficy, and other historians, as well as relational data from SQL Server, Oracle, and MySQL may be easily integrated to find insights that enable continuous improvement in production yield, quality, availability and other KPIs.",
            col : { md : 5.5, xs : 12 }
        },
        {
            description : "Organizations benefit from using Seeq's solutions to <br>quickly find insights in production data and share them <br>among teams, operations, and other key roles. Seeq <br>enables engineers and subject matter experts (SME) to <br>get more value from data already collected, enabling organizations to rapidly access and execute on those <br>insights.",
            col : { md : 6.1, xs : 12 }
        }
    ],
    layouts : [
        { totalCards : 2, hasIdCard : false, justify : "spaceBetween", marginTop : "2.18rem" }
    ]    
}