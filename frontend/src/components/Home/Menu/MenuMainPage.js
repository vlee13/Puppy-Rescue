import React from "react";
import { Link } from "react-router-dom";

const MenuMainPage = () => {
  return (
    <div>
      <div>X</div>
      <Link to="/about">
        <div>About</div>
      </Link>
      <Link to="/fosterdog">
        <div>The dog I'm fostering now</div>
      </Link>
      <Link to="/vote">
        <div>Vote for the next dog I'll foster</div>
      </Link>
      <Link to="/helpothers">
        <div>Help other organizations</div>
      </Link>
      <Link to="/game">
        <div>
          Play our 90's inspired game <i>Dog Zoey in Space</i>
        </div>
      </Link>
      <Link to="/meetteam">
        <div>Meet the team</div>
      </Link>
      <Link to="/contactus">
        <div>Contact us</div>
      </Link>
    </div>
  );
};

export default MenuMainPage;
