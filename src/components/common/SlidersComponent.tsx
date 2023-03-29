import React, { useState } from "react";
import "../../styles/common/slider.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Container, Grid } from '@mui/material';

interface ISliderComponentProps {
    children : JSX.Element | JSX.Element[];
}

export default function SliderComponent(props : ISliderComponentProps) {
    const { children } = props;
    const childrenCount = React.Children.count(children);
    const [sliderActive, setSliderActive] = useState<number>(0);
    
    const setVisibilityArrowButton = (id : string, enable : boolean) => {
        const button = document.querySelector(`#${id}`);
        if(enable === true) {
            button?.classList.remove("disabled");
        } else {
            button?.classList.add("disabled");
        }        
    }

    const handleVisibilityArrowButton = (id : number) => {
        if(id > 0) setVisibilityArrowButton("backIcon", true);
        if(id < childrenCount-1) setVisibilityArrowButton("forwardIcon", true);
        if(id === childrenCount-1) setVisibilityArrowButton("forwardIcon", false);
        if(id === 0) setVisibilityArrowButton("backIcon", false);
    }

    const goToSlider = (id : number) => {
        if(id < 0 || id >= childrenCount) return;
        handleVisibilityArrowButton(id);
        
        let lastSlider = document.querySelector(`#slider-${sliderActive}`);
        lastSlider?.classList.add("hide");
        
        let nextSlider = document.querySelector(`#slider-${id}`);
        nextSlider?.classList.remove("hide");
        nextSlider?.classList.add("show");
        
        setSliderActive(id);
    }

    return (
        <Container id="slider" maxWidth={false} disableGutters={true} sx={{marginBottom : "0", p : 0}}>
            <Grid container className="sliderContainer">
                <Grid item md={1.5} className="arrowContainer arrowRight">
                    <button>
                        <ArrowBackIosIcon id="backIcon" className="arrow disabled"  onClick={() => goToSlider(sliderActive-1)}/>
                    </button>
                </Grid>
                <Grid item md={9} className="gridFlexColumn" sx={{height : "100%"}}>
                    {
                        React.Children.map(children, (child, index : number) => (
                            <div id={`slider-${index}`} className={index === 0 ? "slider show" : "slider hide"}>
                                {child}
                            </div>
                        ))
                    }
                </Grid>
                <Grid item md={1.5} className="arrowContainer arrowLeft">
                    <button>
                        <ArrowForwardIosIcon id="forwardIcon" className="arrow" onClick={() => goToSlider(sliderActive+1)}/>
                    </button>
                </Grid>
            </Grid>       
        </Container>
    )
}