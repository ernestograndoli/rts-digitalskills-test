import { IGridCardInfo } from "../../../../interfaces/IGridCardFactory";

export const practicalCaseInfo : IGridCardInfo = {
    cards : [
        {
            title : "A practical case",
            imgTitle : "common/clients/14-TecpetrolLogo.png",
            description : "For the Tecpectrol case, we decided to take advantage of the Web API that PI Server uses. In this manner, each tag with data history can be accessed with HTTP GET requests and parameters such as the start and end dates of the request in the URL consulted.<br><br>We started this project with the idea of generating each WEB ID of the tags of interest so that they could be interpreted by the Vuzix lens camera (Models: M300; M400; Blade). <br><br>For this, a QR reader library was used, that Vuzix offers for the deployment assembly. Thus, once the WEB ID of the interest tag (as a QR) has been read, a GET query (within the application's JAVA program) makes the Server request and brings the values in JSON.<br><br>Then we create a procedure that converts the JSON to strings so that it can interpret the program and the plain text in STRING or FLOAT (as applicable). As a result, the visualization of the points represented in PI Vision can be lifted in near real-time and allows the operation and the deployment of the technical functions of the operations team to be more flexible.<br><br>It is even possible to customize the graphics represented in augmented reality, such as AMCHARTS libraries that can be displayed in ANGULAR JS.As you can see the development of Pi Lense projects is dependent users. The fundamental thing within our organization is to have the appropriate equipment to execute the specifications and objectives of our clients.",
            col : { md : 12, xs : 12 }
        },
        {
            description : "As you can see the development of Pi Lense projects is dependent users. The fundamental thing within our organization is to have the appropriate equipment to execute the specifications and objectives of our clients.",
            col : { md : 12, xs : 12 }
        }
    ],
    layouts : [
        { totalCards : 2, hasIdCard : false, justify : "center", marginTop : "6.56rem" }
    ]    
}