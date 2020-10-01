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
        div className = "hours" >
        <
        h3 className = "outdoor_eating" >
        Old Fishermans grotto is open
        for outdoor dining and we are offering To Go and curbside service { " " } <
        /h3>{" "} <
        strong className = "openclose" > { " " }
        Monday - Thursday: 11: 00 a.m.to 9: 15 p.m. { " " } <
        /strong>{" "} <
        strong className = "openclose" > { " " }
        Friday - Saturday: 11: 00 a.m.to 9: 30 p.m. { " " } <
        /strong>{" "} <
        strong className = "openclose" > { " " }
        Sunday: 11: 00 a.m.to 9: 00 p.m. { " " } <
        /strong>{" "} <
        h3 className = "outdoor_eating" >
        Masks are required upon arrival and when moving around the restaurant.We appreciate your understanding of these policies as we adhere to local guidelines. { " " } <
        /h3>{" "} <
        strong className = "openclose" > { " " }
        No large parties, seating is limited to 4 people { " " } <
        /strong>{" "} <
        /div>{" "} <
        /div>
    );
};

export default HoursInfo;