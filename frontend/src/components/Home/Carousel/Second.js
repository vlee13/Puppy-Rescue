import React from "react";
import { Link } from "react-router-dom";
import "../../CSS/Carousel.css";
import "../../CSS/Menu.css";

const Second = () => {
  let displayPage = () => {
    return (
      <div className="CarrouselContainer">
        <img className="CarrouselImage2" />
        <div className="CarrouselText">
          <img id="LogoMark" />
          <span className="CompanyName">It's time to vote</span>
          <h1 className="Tagline">
            Help us to choose the next dog we will foster.
          </h1>
          <p className="Text">
            Not everyone who has the heart for animal welfare has the means to
            foster or adopt. Our team at House of Paws has come up with a
            creative & easy-to-use platform where you can partner with us to
            change canine lives. You get to vote which furbaby gets to go home
            to a safe & loving home.
          </p>
          <Link to="/vote">
            <button className="CarrouselButton">MEET THE CANDIDATES</button>
          </Link>
        </div>
        <img id="SealLogo" />
      </div>
    );
  };

  return <div>{displayPage()}</div>;
};

export default Second;
