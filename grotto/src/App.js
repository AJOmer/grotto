import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/TopScroll/TopScroll";
import Footer from "./components/pagelayout/Footer/Footer";
import Banner from "./components/pagelayout/Banner/Banner";
import Navbar from "./components/pagelayout/Navbar/Navbar";

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
        Banner / >
        <
        Footer / >
        <
        /Fragment>{" "} <
        /Router>
    );
};

export default App;