import { IGridCardInfo } from "../../../interfaces/IGridCardFactory";

export const resourcesInfo : IGridCardInfo = {
    title: "Resources",
    cards: [
        {
            title: "Migration and <br>upgrade Pi System",
            description: "The service consists of migrating PI System to its most recent version, thus being able to take advantage of the benefits that each version upgrade brings, such as new functionalities in PI AF, PI <br>Vision, security, and other technical aspects.",
            col: { md:2.7, xs:12 }
        },
        {
            title: "Integration to <br>third parties",
            description: "With focus based on IT-OT convergence, this service considers the integration of <br>new information nodes to PI System, as well as from PI to third-party systems such as ERP, LIMS, Advanced Control System, and others.",
            col: { md:2.7, xs:12 }
        },
        {
            title: "Support and <br>Maintenance",
            description: "With a team of professionals in continuous training in IT-OT areas, we seek to offer a range of support and maintenance services to assist users when they have any issues related <br>to operational continuity in any of their products or services.",
            col: { md:2.7, xs:12 }
        },
        {
            title: "Advanced <br>Analytics Process",
            description: "We provide a combined solution of data management and advance analytic. We impulse our “Data-Driven Pod” to maximize the Pi System performance. We contextualize the historian’s data to create actionable measures.",
            col: { md:2.7, xs:12 }
        }
    ],
    layouts: [
        {totalCards: 4, hasIdCard: true, columnSpacing: "0rem", justify: "spaceBetween", marginTop:"4.93rem"}
    ]
}