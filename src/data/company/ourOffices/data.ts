import { IGridCardInfo } from "../../../interfaces/IGridCardFactory";

export const ourOfficesInfo : IGridCardInfo = {
    title : "Our Offices",
    subtitle : "We are located in three countries focused on providing assistance and support to our engineers around de globe.",
    cards : [
        {
            title : "Spain",
            subtitle : "Madrid",
            description : "Calle Asura 40, Ático <br>Tel: (+34) 913 200771 <br>Mob: (+34) 699 30 40 36",
            col : {md : 2.6, xs : 12}
        },
        {
            title : "Chile",
            subtitle : "Santiago",
            description : "Nueva Tajamar 481, <br>Torre Sur Of. 1403",
            col : {md : 2, xs : 12}
        },
        {
            title : "Argentina",
            subtitle : "Bahía Blanca",
            description : "Alsina 335, Primer Piso <br>Tel: (+54) 9 291 4046883 <br>Mob: (+54) 9 11 5313 6557",
            col : {md : 2.8, xs : 12}
        },
        {
            title : "USA",
            subtitle : "Houston Texas",
            description : "10777 Westheimer Suite 1100, <br>Houston, Texas, 77042, USA",
            col : {md : 3.1, xs : 12}
        }
    ],
    layouts : [
        { totalCards : 4, hasIdCard : false, justify : "spaceBetween", marginTop : "1rem"}
    ]
}