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
        <div className="Text">
          <p>
            In the U.S. alone, about 3.3 milion canines enter the shelters every
            YEAR. A lot of these shelters simply don't have the space to hold
            all the animals and as a result, dogs live in cramped cages every
            single day, and about 670,000 dogs are euthanized.
          </p>
          <p>
            We know these facts can be daunting and it can make you question
            where to even start. That's exactly why House of Paws was initiated
            so EVERYONE can easily and actively participate in saving these
            canines, one angel baby at a time.{" "}
          </p>
        </div>
        <Link to="/fosterdog">
          <button className="button">Meet Astro!</button>
        </Link>
        <br />
        <img className="SealLogo" />
      </div>
    </div>
  );
};

export default First;
