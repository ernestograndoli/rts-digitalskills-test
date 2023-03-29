import { IGridCardInfo } from "../../../../interfaces/IGridCardFactory";

export const piLensesInfo : IGridCardInfo = {
    title : "Pi Lenses",
    cards : [
        {
            description : "Strange as it may seem, as technology evolves at exponential steps in our daily lives as citizens, the industrial scene has reached a point of unsustainable technological stagnation. It isn´t for a lack of technological innovation, but the permanence of the status quo when implementing new technologies or solutions. <br><br>The implementation of data visualization systems through augmented reality devices may only interest us when we observe technological leaps in other contexts, but not at the industrial panorama. However, according to a study on the website, automationworld.com, more than 70% of industries work with physical worksheets and Excel sheets in their area of operations. This seems quite inconsistent with our personal lives and our desires for technological evolution as consumers. We are up to be part of the disruption that Amazon, Google, and Facebook offer us as final consumers, but we are not willing to implement those technological leaps in our work scheme. This lack of consistency led us to implement products like PI LENSES.",
            col : { md : 12, xs : 12 }
        },
        {
            title : "How did we <br>start our path?",
            description : "The starting point comes from the available technology. As OSIsoft partners,we knew that it was essential to work through exhaustive research to evaluate the technological components that support the Pi System data interface. <br>After several months of research and development by our R&D department, led by Drs. Gabriel Eggly and Javier Zandstra, we identified the potential technologies that could be applicable to the planned interface.",
            col : { md : 5.4, xs : 12 }
        },
        {
            title : "Which technologies <br>do PI Lenses use?",
            description : "It is a recurrent question from our clients, especially considering the need to count on with intrinsically safe hardware when operating in different industries. However, the answer usually has its flats. The <br>answer is "+'"it depends"'+". The technology <br>we implement to integrate data from the PI System and augmented reality visualization tools depends on the scope of the project and the client's objectives. When we talk about technology, we are not only talking about integration hardware, but the technical knowledge used to achieve integration.",
            col : { md : 5.6, xs : 12 }
        }
    ],
    layouts : [
        { totalCards : 1, hasIdCard : false, justify : "center", marginTop : "2.81rem" },
        { totalCards : 2, hasIdCard : false, justify : "spaceBetween", marginTop : "6rem" }
    ]    
}