import { useEffect, useState } from "react";
import { Container, Grid } from '@mui/material';
import { ISeeqApplicationMap } from "../../../interfaces/ISeeqApplicationMap";

interface SeeqApplicationMapProps {
    data : ISeeqApplicationMap;
    marginBottom? : string;
}

export default function SeeqApplicationMap(props : SeeqApplicationMapProps) {
    const { data, marginBottom } = props;
    const [logoImg, setLogoImg] = useState("");
    const [mapImg, setMapImg] = useState("");

    useEffect(() => {
         const fetchImage = async () => {
             try {
                 const logoImg = await import(`../../../assets/images/${data.images.logo}`);
                 const mapImg = await import(`../../../assets/images/${data.images.map}`)
                 setLogoImg(logoImg.default);
                 setMapImg(mapImg.default)
             } catch (err) {
                 console.log("error: ", err)
             }
         }

         fetchImage()
    }, [data])

    return (
        <Container id={data.idModule} maxWidth={false} disableGutters={true} sx={{marginBottom : {marginBottom}, p : 0}}>
            <Grid container className="gridFlexColumn center">
                <Grid item md={12} xs={12}>
                    <img src={logoImg} alt="Workbench Logo" style={{width: "100%", height: "100%"}}/>
                </Grid>
                <Grid item md={data.col.md} xs={data.col.xs}>
                    <h1 className="descriptionModule">{data.description}</h1>
                </Grid>
                <Grid item md={12} xs={12} className="mapContainer">
                    <img src={mapImg} alt="Workbench Description" style={{width: "100%", height: "100%"}}/>
                </Grid>
            </Grid>                      
        </Container>
    )
}