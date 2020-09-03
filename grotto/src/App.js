import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/TopScroll/TopScroll";
import Footer from "./components/pagelayout/Footer/Footer";

const App = () => {
    return ( <
        Router >
        <
        Fragment >
        <
        ScrollToTop / >
        <
        Footer / >
        <
        /Fragment>{" "} <
        /Router>
    );
};

export default App;