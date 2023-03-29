interface ICol {
    xs? : number;
    sm? : number;
    md? : number;
    lg? : number;
    xl? : number;
}

interface ILinkBlog {
    text : string;
    to : string;
}

export interface ICardBlog {
    title? : string;
    subtitle? : string;
    description? : string;
    link? : ILinkBlog;
    image : string;
    col? : ICol;
}