import { ICardBlog } from "../../../interfaces/IGridBlogFactory";

interface IBlogInfo {
    title: string;
    cards: ICardBlog[];
}

export const blogInfo : IBlogInfo = {
    title: "Blog",
    cards: [
        {
            title: "16 DECEMBER 2020",
            subtitle : "Industry news and the importance <br>of Advanced Analytics",
            description: "Currently, one of the key tools for digital transformation in <br>the industry is advanced analytics, since organizations aim to find solutions that allow their teams to find information <br>instead of...",
            link : {
                text : "Continue reading",
                to : ""
            },
            image : "insights/blog/blog1.png"
        },
        {
            title: "5 NOVEMBER 2020",
            subtitle : "Advanced analytics technology and its impact on the pharmaceutical and biotechnology industry",
            description: "In many industries, the step of production batch to <br>continuous manufacturing is not necessarily a factor <br>considered novel. However, in such a regulated, science-<br>based...",
            link : {
                text : "Continue reading",
                to : ""
            },
            image : "insights/blog/blog2.png"
        },
        {
            title: "1 OCTOBER 2020",
            subtitle : "Advanced analytics and process industry.",
            description: "In the process industry, one of the most important assets <br>is the control valves. Without the reliable operation of these valves, most processes can quickly become uncontrollable <br>and that leads to...",
            link : {
                text : "Continue reading",
                to : ""
            },
            image : "insights/blog/blog3.png"
        },
        {
            title: "3 SEPTEMBER 2020",
            subtitle : "IT - OT Convergence and its <br>transition to the future",
            description: "Currently, one of the key tools for digital transformation in <br>the industry is advanced analytics, since organizations aim to find solutions that allow their teams to find information <br>instead of...",
            link : {
                text : "Continue reading",
                to : ""
            },
            image : "insights/blog/blog4.png"
        }
    ]
}