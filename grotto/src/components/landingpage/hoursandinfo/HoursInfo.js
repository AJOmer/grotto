import React from "react";
import giftcard from "../../../assets/giftcard.png";

//CSS \\
import "./HoursInfo.css";

const HoursInfo = () => {
    return ( <
        div className = "hoursinfo-wrapper" >
        <
        div className = "reservation" >
        <
        button type = "submit"
        className = "reserve" >
        <
        a href = "https://www.opentable.com/restref/client/?rid=31393&restref=31393&corrid=f3da284f-9d35-42c0-aab2-133fe415dd5e" >
        Make a Reservation { " " } <
        /a>{" "} <
        /button>{" "} <
        /div>{" "} <
        div className = "giftcard" >
        <
        h3 > A gift card from old fishermans grotto < /h3>{" "} <
        p > The perfect gift
        for any jubilant gathering! < /p>{" "} <
        a className = "giftlink"
        href = "https://www.giftrocket.com/gift-card/old-fishermans-grotto-monterey" >
        <
        img src = { giftcard }
        alt = "giftcard" / >
        <
        /a>{" "} <
        /div>{" "} <
        /div>
    );
};

export default HoursInfo;