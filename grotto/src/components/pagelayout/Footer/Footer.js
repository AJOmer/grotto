import React from "react";

// CSS \\
import "./Footer.css";

const Footer = () => {
    return ( <
        div className = "footer-wrapper" >
        <
        div className = "footer-container" >
        <
        div className = "footer-socials" >
        <
        a href = "https://www.instagram.com/fishermansgrotto/?hl=en"
        className = "fa fa-instagram" /
        >
        <
        a href = "https://twitter.com/oldfishgrotto?lang=en"
        className = "fa fa-twitter" /
        >
        <
        a href = "https://www.facebook.com/OldFishermansGrotto/"
        className = "fa fa-facebook" /
        >
        <
        /div>{" "} <
        div className = "footer-address" >
        <
        p >
        Old Fisherman 's Grotto, 39 Fisherman'
        s Wharf, Monterey, California 93940 { " " } <
        /p>{" "} <
        /div>{" "} <
        div className = "footer-copyright" >
        <
        p > { " " }© < span className = "grottospan" > 2020 Old Fisherman 's Grotto</span> <
        /p>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>
    );
};

export default Footer;