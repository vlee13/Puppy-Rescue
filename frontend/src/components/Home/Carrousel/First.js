import React from "react";
import { Link } from "react-router-dom";

const First = () => {
  return (
    <div>
      <img src="" alt="" className="CarrouselImage" />
      <div>
        <div className="TopNavigation">
          <Link to="/login">
            <span>Log in</span>
          </Link>
          <Link to="/menu">
            <span>Menu</span>
          </Link>
        </div>
        <img src="" alt="logoMark" className="LogoMark" />
        <span className="CompanyName">Valerie's Foster Dog</span>
        <h1 className="Tagline">Because every dog deserves a warm bed.</h1>
        <p className="Text">text</p>
        <button className="button">Share your love with Fred</button>
        <img src="" alt="SealLogo" className="SealLogo" />
      </div>
    </div>
  );
};

export default First;
