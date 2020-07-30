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
        <p className="Text">text</p>
        <Link to="/userdonate">
          <button className="button">Share your love with Fred</button>
        </Link>
        <img src="" alt="SealLogo" className="SealLogo" />
      </div>
    </div>
  );
};

export default First;
