export interface IGallery {
    titleModule : string,
    images : IImage[],
    imageContainer : string;
    layouts : ILayout[]    
}

export interface ILayout {
    totalImages : number;
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

export interface IImage {
    title? : string;
    filename : string;
    orientation? : "vertical" | "horizontal";
    col : ICol;
}