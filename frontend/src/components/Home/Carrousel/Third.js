import React from "react";
import { Link } from "react-router-dom";

const Third = () => {
  return (
    <div>
      <img src="" alt="" className="CarrouselImage" />
      <div>
        <div className="TopNavigation">
          <Link to="/userlogin">
            <span>Log in</span>
          </Link>
          <Link to="/menu">
            <span>Menu</span>
          </Link>
        </div>
        <img src="" alt="logoMark" className="LogoMark" />
        <span className="CompanyName">Valerie's Foster Dog</span>
        <h1 className="Tagline">Share your love with other organizations.</h1>
        <p className="Text">text</p>
        <Link to="/helpothers">
          <button className="button">Explore</button>
        </Link>
        <img src="" alt="LogoSealMark" className="LogoSealLogo" />
      </div>
    </div>
  );
};

export default Third;
