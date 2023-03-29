import { useEffect, useState } from "react";
import "../../../styles/landing/menu.css";

interface IMenuOptions {
    title : string;
    link : string;
    class : string;
}

const menuOptions : IMenuOptions[] = [
    {
        title : "SERVICES",
        link : "/services",
        class : "nav-link"
    },
    {
        title : "SOLUTIONS",
        link : "/solutions",
        class : "nav-link"
    },
    {
        title : "INDUSTRIES",
        link : "/industries",
        class : "nav-link"
    },
    {
        title : "COMPANY",
        link : "/company",
        class : "nav-link"
    },
    {
        title : "INSIGHTS",
        link : "/insights",
        class : "nav-link"
    },
    {
        title : "CONTACT US",
        link : "/contact",
        class : "nav-link-contact"
    }
]

interface IMenuProps {
    route : string;
    imageMenu : string;
}

export default function Menu(props : IMenuProps) {
    const { route, imageMenu } = props;
    const [img, setImg] = useState("");

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await import(`../../../assets/images/${imageMenu}`)
                setImg(response.default)
            } catch (err) {
                console.log("error: ", err)
            }
        }

        fetchImage()
    }, [imageMenu])

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="/home" className="navbar-logo">
                    <img src={img} alt="logo" className="navbar-logo-img"/>
                </a>
                <ul className="nav-menu">
                {
                    menuOptions.map((option : IMenuOptions, index : number) => {
                        return (
                            <li className="nav-item" key={index}>
                                <a key={index} href={option.link} className={route === option.link ? option.class + " active" : option.class}>
                                    {option.title}
                                </a>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        </nav>
    )
}