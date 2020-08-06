import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../CSS/NavigationBar.css";

class NavBar extends Component {
  //   displayNavBar = () => {
  //     return (
  //       <div className="Navbar">
  //         <div className="NavbarContainer">
  //           <Link to="/" className="link">
  //             <div className="NavBarElement">
  //               <img id="LogoMark" />
  //               {/* This span is just a placeholder. It would be remove after finishing horizontal logo */}
  //               <span className="NavBarElementText">House of Paws</span>
  //               {/* Remove till here */}
  //             </div>
  //           </Link>
  //           <div className="NavBarElement">
  //             <Link to="/about" className="link">
  //               <div className="NavBarElementText">About us</div>
  //             </Link>
  //             <Link to="/fosterdog" className="link">
  //               <div className="NavBarElementText">Foster dogs</div>
  //             </Link>

  //             <Link to="/vote" className="link">
  //               <div className="NavBarElementText">Vote!</div>
  //             </Link>

  //             <Link to="/adopted" className="link">
  //               <div className="NavBarElementText">Adopted</div>
  //             </Link>

  //             <Link to="/contactus" className="link">
  //               <div className="NavBarElementText">Contact us</div>
  //             </Link>

  //             <Link to="/contactus" className="link">
  //               <div className="NavBarElementText">|</div>
  //             </Link>
  //             <button
  //               className="navBarButton"
  //               onClick={(event) => {
  //                 event.preventDefault();
  //                 this.setState({
  //                   showLogIn: true,
  //                   showPage: false,
  //                   showNavbar: false,
  //                 });
  //               }}
  //             >
  //               Log in
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   };

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
            <button
              className="navBarButton"
              onClick={(event) => {
                event.preventDefault();
                this.setState({
                  showLogIn: true,
                  showPage: false,
                  showNavbar: false,
                });
              }}
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
