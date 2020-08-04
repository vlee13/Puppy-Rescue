import React from "react";
import { Link } from "react-router-dom";
import "../../CSS/Carousel.css";
import "../../CSS/Menu.css";

const First = () => {
  let displayPage = () => {
    return (
      <div className="CarrouselContainer">
        <img className="CarrouselImage" />
        <div className="CarrouselText">
          <img id="LogoMark" />
          <span className="CompanyName">House of Paws</span>
          <h1 className="Tagline">Because every dog deserves a warm bed.</h1>
          <p className="Text">
            We are all animal lovers and we all wanted to do something positive
            for the community, so as our final project in our IronHack bootcamp
            journey we decided to give back. House of Paws is bigger than us. By
            fostering these shelter dogs, we believe we can give them a real
            chance to being adopted into their forever homes.
          </p>
          <Link to="/about">
            <button className="CarrouselButton">GET TO KNOW US BETTER</button>
          </Link>
        </div>
        <img id="SealLogo" />
      </div>
    );
  };

  return <div>{displayPage()}</div>;
};

export default First;
