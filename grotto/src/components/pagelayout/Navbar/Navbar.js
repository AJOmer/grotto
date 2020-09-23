import React from "react";
import { Link } from "react-router-dom";
import grotto_logo from "../../../assets/grotto_logo.png";

//CSS \\
import "./Navbar.css";

const Navbar = () => {
    return ( <
        nav className = "navbar_main" >
        <
        div className = "logo" >
        <
        Link to = "/" > { " " } <
        img className = "grottologo"
        src = { grotto_logo }
        alt = "grottologo" / > { " " } <
        /Link>{" "} <
        /div>{" "} <
        div className = "navbar" >
        <
        Link id = "about"
        to = "/about" > { " " }
        About { " " } <
        /Link>{" "} <
        Link id = "menu"
        to = "/menu/entrees
        " >
        { " " }
        Menu { " " } <
        /Link>{" "} <
        Link id = "contact"
        to = "/contactus" > { " " }
        Contact Us { " " } <
        /Link>{" "} <
        /div>{" "} <
        /nav>
    );
};

export default Navbar;