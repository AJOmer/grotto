import React from "react";
import oysterplate from "../../../assets/oysterplate.jpg";
import tripadvisor from "../../../assets/tripadvisor.png";
import opentable from "../../../assets/opentable.png";
import seafoodwatch from "../../../assets/seafoodwatch.png";
import yelp from "../../../assets/yelp.png";
import zagat from "../../../assets/zagat.png";

// CSS \\

import "./Banner.css";

const Banner = () => {
    return ( <
        div className = "banner-wrapper" >
        <
        div className = "banner-background" >
        <
        div className = "banner-logos" >
        <
        a href = "https://www.tripadvisor.com/Restaurant_Review-g32737-d468866-Reviews-Old_Fisherman_s_Grotto-Monterey_Monterey_County_California.html" >
        <
        img className = "banimg"
        src = { tripadvisor }
        alt = "tripadvisor" / >
        <
        /a>{" "} <
        /div>{" "} <
        div className = "banner-logos" >
        <
        a href = "https://www.yelp.com/biz/old-fishermens-grotto-monterey-3?osq=Fishermans+Grotto" >
        <
        img className = "banimg"
        src = { yelp }
        alt = "yelp" / >
        <
        /a>{" "} <
        /div>{" "} <
        div className = "banner-logos" >
        <
        a href = "https://www.opentable.com/restref/client/?rid=31393&restref=31393&corrid=f3da284f-9d35-42c0-aab2-133fe415dd5e" >
        <
        img className = "banimg"
        src = { opentable }
        alt = "opentable" / >
        <
        /a>{" "} <
        /div>{" "} <
        div className = "banner-logos" >
        <
        a href = "https://www.seafoodwatch.org/" >
        <
        img className = "banimg"
        src = { seafoodwatch }
        alt = "seafoodwatch" / >
        <
        /a>{" "} <
        /div>{" "} <
        div className = "banner-logos" >
        <
        a href = "https://www.zagat.com/r/old-fishermans-grotto-monterey" >
        <
        img className = "banimg"
        src = { zagat }
        alt = "zagat" / >
        <
        /a>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>
    );
};

export default Banner;