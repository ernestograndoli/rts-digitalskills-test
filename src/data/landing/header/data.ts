interface IBtnShowMore {
    idComponentToShow : string;
}

interface IHeaderInfo {
    id : string;
    title : string;
    subtitle? : string;
    classTitle : string;
    classSubtitle? : string;
    classInfoContainer : string;
    classImageBg : string;
    imageBg : string;
    imageMenu : string;
    btnShowMore? : IBtnShowMore; 
}

/* SE UTILIZA PARA SETEAR EL ESTADO DE VISIBILIDAD DEL MODULO QUE SE DESPLIEGA EN CASO DE TENER UN BOTON EN EL MENU */
let showInfoContainer : boolean = false;

/* SE ALMACENA LOS TEXTOS QUE SE DIBUJAN EN EL HEADER DE LAS DIFERENTES OPCIONES DE MENU */
export const headerInfo : IHeaderInfo [] = [
    {   
        id : "home",
        title : "Leading digital evolution through",
        subtitle : "OT knowledge and IT technology",
        classTitle : "header-nav-title-home",
        classSubtitle : "header-nav-subtitle-home",
        classInfoContainer : "header-info-container-home",
        classImageBg : "position100",
        imageBg : "landing/header/bannerHome.png",
        imageMenu : "landing/header/logoRTSAzul.svg"
    },
    {
        id : "services",
        title : "Our Teams",
        subtitle : "Each unit is made up of highly qualified professionals who are at the forefront of technology and applied methodologies.",
        classTitle : "header-nav-title-services",
        classSubtitle : "header-nav-subtitle-services",
        classInfoContainer : "header-info-container-services",
        classImageBg : "",
        imageBg : "landing/header/bannerServices.png",
        imageMenu : "landing/header/logoRTSBlanco.svg"
    },
    {
        id : "solutions",
        title : "SEEQ",
        subtitle : '"Advanced Analytics Application For Process Data"',
        classTitle : "header-nav-title-solutions",
        classSubtitle : "header-nav-subtitle-solutions",
        classInfoContainer : "header-info-container-solutions",
        classImageBg : "",
        imageBg : "landing/header/bannerSeeq.png",
        imageMenu : "landing/header/logoRTSBlanco.svg",
        btnShowMore : {
            idComponentToShow : "seeq"
        }
    },
    {
        id : "industries",
        title : "Industries",
        subtitle : "",
        classTitle : "header-nav-title-industries",
        classSubtitle : "header-nav-subtitle-industries",
        classInfoContainer : "header-info-container-industries",
        classImageBg : "",
        imageBg : "landing/header/bannerIndustries.png",
        imageMenu : "landing/header/logoRTSBlanco.svg"
    },
    {
        id : "company",
        title : "Company",
        subtitle : "",
        classTitle : "header-nav-title-company",
        classSubtitle : "",
        classInfoContainer : "header-info-container-company",
        classImageBg : "",
        imageBg : "landing/header/bannerCompany.png",
        imageMenu : "landing/header/logoRTSBlanco.svg"
    },
    {
        id : "insights",
        title : "Insights",
        subtitle : "",
        classTitle : "header-nav-title-insights",
        classSubtitle : "",
        classInfoContainer : "header-info-container-insights",
        classImageBg : "",
        imageBg : "landing/header/bannerInsights.png",
        imageMenu : "landing/header/logoRTSBlanco.svg"
    },
    {
        id : "contact",
        title : "Need more information?",
        subtitle : "Contact us",
        classTitle : "header-nav-title-contact",
        classSubtitle : "header-nav-subtitle-contact",
        classInfoContainer : "header-info-container-contact",
        classImageBg : "position100",
        imageBg : "landing/header/bannerContact.png",
        imageMenu : "landing/header/logoRTSBlanco.svg"
    }
]