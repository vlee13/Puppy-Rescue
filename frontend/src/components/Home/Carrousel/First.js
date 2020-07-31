import React from "react";
import { Link } from "react-router-dom";

const First = () => {
  return (
    <div>
      <img src="" alt="HeroImage" className="CarrouselImage" />
      <div>
        <img src="" alt="logoMark" className="LogoMark" />
        <span className="CompanyName">Valerie's Foster Dog</span>
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
        <img src="" alt="SealLogo" className="SealLogo" />
      </div>
    </div>
  );
};

export default First;
