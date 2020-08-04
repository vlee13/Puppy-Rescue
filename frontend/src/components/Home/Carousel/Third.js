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
          <h1 className="Tagline">Meet our amazing current foster, Astro!</h1>
          <p className="Text">
            We are all animal lovers and we all wanted to do something positive
            for the community, so as our final project in our IronHack bootcamp
            journey we decided to give back. House of Paws is bigger than us. By
            fostering these shelter dogs, we believe we can give them a real
            chance to being adopted into their forever homes.
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
