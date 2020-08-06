import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../CSS/NavigationBar.css";
import GoogleAuthLogin from "../../auth/GoogleAuthLogin";
import { GoogleLogout } from "react-google-login";

class NavBar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="NavbarContainer">
          <Link to="/" className="link">
            <div className="NavBarElement">
              <img id="LogoMark" />
              {/* This span is just a placeholder. It would be remove after finishing horizontal logo */}
              <span className="NavBarElementText">House of Paws</span>
              {/* Remove till here */}
            </div>
          </Link>
          <div className="NavBarElement">
            <NavLink
              to="/about"
              exact
              className="NavBarElementText"
              activeClassName="active"
            >
              About us
            </NavLink>

            <NavLink
              to="/vote"
              exact
              className="NavBarElementText"
              activeClassName="active"
            >
              Vote
            </NavLink>
            <NavLink
              to="/fosterdog"
              exact
              className="NavBarElementText"
              activeClassName="active"
            >
              Foster dogs
            </NavLink>
            <NavLink
              to="/adopted"
              exact
              className="NavBarElementText"
              activeClassName="active"
            >
              Adopted
            </NavLink>
            <NavLink
              to="/contactus"
              exact
              className="NavBarElementText"
              activeClassName="active"
            >
              Contact us
            </NavLink>
            <Link to="/contactus" className="link">
              <div className="NavBarElementText">|</div>
            </Link>

            {this.props.email ? (
              <button onClick={this.logout}>Logout</button>
            ) : (
              <GoogleAuthLogin
                render={(renderProps) => (
                  <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    Log in
                  </button>
                )}
                buttonText="Login"
                className="navBarButton"
                setUser={this.props.setUser}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
