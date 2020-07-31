import React from "react";
import { Link } from "react-router-dom";
import "../../CSS/Carrousel.css";

const First = () => {
  return (
    <div className="CarrouselContainer">
      <img className="CarrouselImage" />
      <div className="CarrouselText">
        <img className="LogoMark" />
        <span className="CompanyName">House of Paws</span>
        <h1 className="Tagline">Because every dog deserves a warm bed.</h1>
        <p className="Text">
          Not everyone who has the heart for animal welfare has the means to
          foster or adopt. Our team at House of Paws has come up with a creative
          & easy-to-use platform where you can partner with us to change canine
          lives. You get to vote which furbaby gets to go home to a safe &
          loving home.
        </p>
        <Link to="/fosterdog">
          <button className="button">Meet Fred!</button>
        </Link>
        <br />
        <img className="SealLogo" />
      </div>
    </div>
  );
};

export default First;
