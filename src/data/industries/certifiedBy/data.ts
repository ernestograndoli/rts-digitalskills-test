import { IGallery } from "../../../interfaces/IGalleryFactory";

export const certifiedByInfo : IGallery = {
    titleModule : "Certified by",
    imageContainer : "imageContainer",
    images : [
        {
            filename : "common/clients/35-achillesLogo.png",
            orientation : "horizontal",
            col : {md : 2.5}
        },
        {
            filename : "common/clients/37-exirosLogo.png",
            orientation : "horizontal",
            col : {md : 2.5}
        },
        {
            filename : "common/clients/36-adquiraLogo.png",
            orientation : "horizontal",
            col : {md : 2.5}
        },
        {
            filename : "common/clients/38-sapAribaLogo.png",
            orientation : "horizontal",
            col : {md : 2.5}
        }
    ],
    layouts : [
        { totalImages : 4, justify: "spaceBetween", marginTop: "3.75rem" },
    ]    
}