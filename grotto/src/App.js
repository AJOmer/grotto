import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/TopScroll/TopScroll";
import Footer from "./components/pagelayout/Footer/Footer";
import Banner from "./components/pagelayout/Banner/Banner";
import Navbar from "./components/pagelayout/Navbar/Navbar";
import SimpleMap from "./components/landingpage/googlemap/googleMap";
import HeroImage from "./components/landingpage//heroimage/HeroImage";

const App = () => {
    return ( <
        Router >
        <
        Fragment >
        <
        ScrollToTop / >
        <
        Navbar / >
        <
        HeroImage / >
        <
        Banner / >
        <
        SimpleMap / >

        <
        Footer / >
        <
        /Fragment>{" "} <
        /Router>
    );
};

export default App;