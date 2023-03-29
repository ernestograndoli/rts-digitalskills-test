import { ICol } from "./common/ICol";

interface IImages {
    logo : string;
    map : string;
}

export interface ISeeqApplicationMap {
    idModule : string;
    images : IImages;
    description : string;
    col : ICol;
}