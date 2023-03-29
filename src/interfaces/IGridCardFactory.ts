export interface ILayout {
    hasIdCard : boolean;
    totalCards : number;
    columnSpacing? : string;
    justify? : string;
    marginTop? : string;
}

interface ICol {
    xs? : number;
    sm? : number;
    md? : number;
    lg? : number;
    xl? : number;
}

export interface ICard {
    title? : string;
    subtitle? : string;
    description : string;
    imgTitle? : string;
    col : ICol;
}

export interface IGridCardInfo {
    title? : string;
    subtitle? : string;
    cards : ICard[];
    layouts : ILayout[];
}