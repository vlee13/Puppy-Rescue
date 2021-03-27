import React from "react";
import { Link } from "react-router-dom";
import "../../CSS/Carousel.css";
import "../../CSS/Menu.css";

const Fourth = () => {
  let displayPage = () => {
    return (
      <div className="CarrouselContainer">
        <img className="CarrouselImage4" alt="fourth carousel img" />
        <div className="CarrouselText">
          <img id="LogoMark" alt="logo mark" />
          <span className="CompanyName">Alumni</span>
          <h1 className="Tagline">
            See all our dogs that have been adopted & their stories.
          </h1>
          <p className="Text">
            Read the testimonials. See the difference you made with us. We hope
            it inspires you to adopt one day! You will love it.
          </p>
          <Link to="/about">
            <button className="CarrouselButton">TESTIMONIALS</button>
          </Link>
        </div>
        <img id="SealLogo" alt="seal logo" />
      </div>
    );
  };
  return <div>{displayPage()}</div>;
};

export default Fourth;
