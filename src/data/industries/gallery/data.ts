import { IGallery } from "../../../interfaces/IGalleryFactory";

export const gallery : IGallery = {
    titleModule : "Industries",
    imageContainer : "imageContainer",
    images : [
        {
            title : "Oil & Gas",
            filename : "common/industries/gallery/oilGas.png",
            col : {md : 3, xs : 12}
        },
        {
            title : "Pulp & Paper",
            filename : "common/industries/gallery/pulpPaper.png",
            col : {md : 3, xs : 12}
        },
        {
            title : "Food & Beverage",
            filename : "common/industries/gallery/foodBeverage.png",
            col : {md : 3, xs : 12}
        },
        {
            title : "Metals & Mining",
            filename : "common/industries/gallery/metalMining.png",
            col : {md : 3, xs : 12}
        },
        {
            title : "Power Generation",
            filename : "common/industries/gallery/powerGeneration.png",
            col : {md : 6, xs : 12}
        },
        {
            title : "Pharmaceuticals",
            filename : "common/industries/gallery/pharmaceuticals.png",
            col : {md : 3, xs : 12}
        },
        {
            title : "Chemicals & Petrochemicals",
            filename : "common/industries/gallery/chemicalsPetro.png",
            col : {md : 3, xs : 12}
        }
    ],
    layouts : [
        { totalImages : 4, justify : "spaceBetween" },
        { totalImages : 3, justify : "spaceBetween", marginTop : "0rem" }
    ]    
}