import "../../../styles/company/ourOffices.css";
import { useEffect, useState } from "react";
import { Container, Grid } from '@mui/material';
import { ourOfficesInfo } from "../../../data/company/ourOffices/data";
import GridCardsFactory from "../../common/gridCards/GridCardsFactory";

export default function Index() {
    const [img, setImg] = useState("");

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await import("../../../assets/images/common/ourOffices/mapOffices.svg")
                setImg(response.default)
            } catch (err) {
                console.log("error: ", err)
            }
        }

        fetchImage()
    }, [])

    return (
        <Container id="ourOffices" maxWidth={false} disableGutters={true} sx={{marginBottom : "10.06rem", p : 0}}>
            <Grid container className="gridFlexRow center" sx={{paddingLeft: "14.58%", paddingRight: "14.58%", marginTop: "1.56rem"}}>
                <Grid item md={6.5} xs={12}>
                    <h1 className="titleModule">{ourOfficesInfo.title}</h1>
                    <h1 className="subtitleModule">{ourOfficesInfo.subtitle}</h1>
                </Grid>
                <Grid item md={9.5} className="flex center" xs={12} sx={{marginTop : "2.87rem"}}>
                    <img src={img} alt="Our Offices" style={{width: "100%", height: "100%"}}/>
                </Grid>
                <Grid item md={10} xs={12}>
                    <GridCardsFactory items={ourOfficesInfo}/>
                </Grid>
            </Grid>            
        </Container>
    )
}