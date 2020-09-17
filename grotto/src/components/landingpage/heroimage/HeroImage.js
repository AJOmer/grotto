import React, { useState, useEffect } from "react";

import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
    DotGroup,
} from "pure-react-carousel";

import "pure-react-carousel/dist/react-carousel.es.css";
import "./HeroImage.css";

const HeroImage = () => {
    const [naturalSlideH, setNaturalSlideH] = useState(0);
    const [heroImagesArray, setHeroImagesArray] = useState([]);

    useEffect(() => {
        const checkWindowWidth = () => {
            const windowWidth = window.innerWidth;

            const heroImages1024 = [{
                    brand: "grottocrab",
                    link: "https://www.marinatimes.com/wp-content/uploads/2017/12/The-Grotto-SF-5D4_8224-640x427.jpg",
                },
                {
                    brand: "platter",
                    link: "https://media-cdn.tripadvisor.com/media/photo-s/08/2c/b1/01/old-fisherman-s-grotto.jpg",
                },
                {
                    brand: "treasureofsea",
                    link: "https://live.staticflickr.com/6011/5965317945_21993f5a0d_b.jpg",
                },
            ];
            const heroImages480 = [{
                    brand: "grottocrab",
                    link: "https://www.marinatimes.com/wp-content/uploads/2017/12/The-Grotto-SF-5D4_8224-640x427.jpg",
                },
                {
                    brand: "platter",
                    link: "https://media-cdn.tripadvisor.com/media/photo-s/08/2c/b1/01/old-fisherman-s-grotto.jpg",
                },
                {
                    brand: "treasureofsea",
                    link: "https://live.staticflickr.com/6011/5965317945_21993f5a0d_b.jpg",
                },
            ];

            switch (true) {
                case windowWidth <= 480: // phone
                    return setNaturalSlideH(100) & setHeroImagesArray(heroImages480);
                case windowWidth <= 768: //ipad
                    return setNaturalSlideH(50) & setHeroImagesArray(heroImages1024);
                case windowWidth <= 1024: //high resolution laptop
                    return setNaturalSlideH(50) & setHeroImagesArray(heroImages1024);
                default:
                    // resolution higher than 1024, usually desktop computer
                    return setNaturalSlideH(35) & setHeroImagesArray(heroImages1024);
            }
        };
        checkWindowWidth();
    }, []);
    return ( <
        CarouselProvider className = "carouselprovider"
        naturalSlideWidth = { 100 }
        naturalSlideHeight = { naturalSlideH }
        totalSlides = { 3 }
        isPlaying = { true }
        interval = { 5000 }
        infinite = { true } >
        <
        Slider > { " " } {
            heroImagesArray.map((heroImage, ind) => ( <
                Slide key = { ind }
                index = { ind } >
                <
                div className = "wrapper-men-shirt1" >
                <
                img alt = "shirts"
                src = { heroImage.link }
                />{" "} <
                /div>{" "} <
                /Slide>
            ))
        } { " " } <
        /Slider>{" "} <
        ButtonBack className = "buttonprevious" >
        <
        i className = "fa fa-angle-left" / >
        <
        /ButtonBack>{" "} <
        ButtonNext className = "buttonnext" >
        <
        i className = "fa fa-angle-right" / >
        <
        /ButtonNext>{" "} <
        DotGroup className = "dotgroup" / >
        <
        /CarouselProvider>
    );
};

export default HeroImage;