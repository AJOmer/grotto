import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => < div > { text } < /div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 36.604399,
            lng: -121.892927,
        },
        zoom: 15,
    };
    render() {
        return ( <
            div style = {
                { position: "relative", width: "100%", height: "50vh" } } >
            <
            GoogleMapReact bootstrapURLKeys = {
                { key: "AIzaSyBJF4WoYpfUOKdMWb9VM6fRQNGw5c4ieRk" } }
            defaultCenter = { this.props.center }
            defaultZoom = { this.props.zoom } >
            <
            AnyReactComponent lat = { 36.604399 }
            lng = {-121.892927 }
            text = "LUNCH!" / >
            <
            /GoogleMapReact>{" "} <
            /div>
        );
    }
}

export default SimpleMap;