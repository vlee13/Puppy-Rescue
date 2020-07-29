import React from "react";
import { Link } from "react-router-dom";

const Second = () => {
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
        <h1 className="Tagline">Help me choosing which dog to foster next!</h1>
        <p className="Text">text</p>
        <button className="button">Vote</button>
        <img src="" alt="LogoSealMark" className="LogoSealLogo" />
      </div>
    </div>
  );
};

export default Second;
