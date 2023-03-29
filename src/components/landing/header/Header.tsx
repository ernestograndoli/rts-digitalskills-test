import { useEffect, useState } from "react";
import "../../../styles/landing/header.css";
import { Container, Grid } from '@mui/material';
import { headerInfo } from "../../../data/landing/header/data";
import Menu from "./Menu";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

interface IHeaderProps {
    route : string;
}

export default function Header(props : IHeaderProps) {
    const { route } = props;
    const section = route.replace("/","");
    const { title, subtitle, classTitle, classSubtitle, classInfoContainer, classImageBg, imageBg, imageMenu, btnShowMore } = headerInfo.filter(e => e.id === section)[0];
    const [img, setImg] = useState("");

    const [showInfo, setShowInfo] = useState(false);
    const [textButton, setTextButton] = useState("Learn More");
    const [buttonActive, setButtonActive] = useState(false);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await import(`../../../assets/images/${imageBg}`)
                setImg(response.default)
            } catch (err) {
                console.log("error: ", err)
            }
        }

        fetchImage()
    }, [imageBg])
    
    const toogleInfo = (idInfoContainer : string) => {
        const infoContainer = document.querySelector(`#${idInfoContainer}`);
        if(idInfoContainer && !showInfo) {
            infoContainer?.classList.remove("hide");
            infoContainer?.classList.add("show");
        } else {
            infoContainer?.classList.remove("add");
            infoContainer?.classList.add("hide");
        }
        setShowInfo(!showInfo);
        !showInfo ? setTextButton("Show Less") : setTextButton("Learn More");
        setButtonActive(!showInfo);
    }

    return (
        <Container id="header" className="header-nav-container" maxWidth={false} disableGutters={true} sx={{p : 0}}>
            <img src={img} className={`image-bg ${classImageBg && classImageBg}`} alt=""/>
            <Grid container sx={{height : "80vh"}}>
                <Grid item md={12} xs={12} className="center">
                    <Menu route={route} imageMenu={imageMenu}/>
                </Grid>
                <Grid item md={12} xs={12} className={`gridFlexColumn ${classInfoContainer}`}>
                    <h1 className={classTitle}>{title}</h1>
                    {
                        subtitle &&
                            <h2 className={classSubtitle}>{subtitle}</h2>
                    }                        
                </Grid>
                <Grid item md={12} xs={12} className="gridFlexColumn center">
                {
                    btnShowMore &&
                        <button id="btnReadMore" className={`button ${buttonActive ? "active" : "dark"}`} style={{marginBottom : "3rem"}} onClick={() => toogleInfo(btnShowMore.idComponentToShow)}>
                            <span className="flex fd-row center">
                                {textButton}
                                {!showInfo ?
                                    <ExpandMoreIcon sx={{color : "#fff", fontSize : "2.5rem"}}/>
                                :
                                    <ExpandLessIcon sx={{color : "#fff", fontSize : "2.5rem"}}/>
                                }
                            </span>
                        </button>
                }
                </Grid>
            </Grid>
        </Container>
    )
    
    /*return (
        <div className="header-nav-container">
            <img src={img} className="image-bg" alt=""/>
            <div className={classInfoContainer}>
                <h1 className={classTitle}>{title}</h1>
                <h2 className={classSubtitle}>{subtitle}</h2>                
            </div>
            
            <Menu route={route} imageMenu={imageMenu}/>
            <div className="flex fd-row align-center">
            {
                btnShowMore &&
                    <button className={`button dark`} style={{marginBottom : "3rem"}} onClick={() => btnShowMore()}>
                        <span className="flex fd-row center">
                            Read More
                            <ExpandMoreIcon sx={{color : "#fff", fontSize : "2.5rem"}}/>
                        </span>
                    </button>
            }
            </div>
        </div>
    )*/
}