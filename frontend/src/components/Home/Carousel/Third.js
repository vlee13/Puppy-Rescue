import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../CSS/Carousel.css";
import "../../CSS/Menu.css";

class Third extends Component {
  displayPage = () => {
    return (
      <div className="CarrouselContainer">
        <img className="CarrouselImage3" />
        <div className="CarrouselText">
          <img id="LogoMark" />
          <span className="CompanyName">There is a winner</span>
          <h1 className="Tagline">
            Meet our current foster, the adorable Astro!
          </h1>
          <p className="Text">
            We will foster Astro until he is ready to be adopted!
            <br />
            Fostering gives the chance for shelter dogs to believe they are safe
            and loved. They no longer have to live in anxiety and fear, locked
            behind a cage all day.
          </p>
          <Link to="/fosterdog">
            <button className="CarrouselButton">
              SHARE YOUR LOVE WITH ASTRO
            </button>
          </Link>
        </div>
        <img id="SealLogo" />
      </div>
    );
  };

  render() {
    return <div>{this.displayPage()}</div>;
  }
}

export default Third;
