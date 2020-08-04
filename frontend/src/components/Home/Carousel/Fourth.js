import React from "react";
import { Link } from "react-router-dom";
import "../../CSS/Carousel.css";
import "../../CSS/Menu.css";

const Fourth = () => {
  let displayPage = () => {
    return (
      <div className="CarrouselContainer">
        <img className="CarrouselImage4" />
        <div className="CarrouselText">
          <img id="LogoMark" />
          <span className="CompanyName">Our dogs need your help</span>
          <h1 className="Tagline">You can adopt one of our amazing fellas.</h1>
          <p className="Text">
            You can adopt. Read the testimonials. You'll love it. You can adopt.
            Read the testimonials. You'll love it.You can adopt. Read the
            testimonials. You'll love it.You can adopt. Read the testimonials.
            You'll love it.
          </p>
          <Link to="/about">
            <button className="CarrouselButton">
              GET TO KNOW THEM A BIT BETTER
            </button>
          </Link>
        </div>
        <img id="SealLogo" />
      </div>
    );
  };
  return <div>{displayPage()}</div>;
};

export default Fourth;
