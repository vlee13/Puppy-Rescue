import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../CSS/Carrousel.css";
import Menu from "../Menu/MenuMainPage";
import UserLogIn from "../LogIn/UserLogIn";
import actions from "../../../services/index.js";

class MainCarrouselPage extends Component {
  state = {
    showNavbar: true,
    showPage: true,
    showLogIn: false,
    showSignUp: false,
    showMenu: false,
    isAdmin: false,
  };

  async componentDidMount() {
    let user = await actions.isLoggedIn();

    console.log("user", user);
    this.setState({
      isAdmin: user.data.role === "admin",
    });
  }

  displayNavBar = () => {
    return (
      <div className="NavigationBar">
        <button
          className="NavigationBarButton"
          onClick={(event) => {
            event.preventDefault();
            // this.setState({
            //   showLogIn: true,
            //   showPage: false,
            //   showNavbar: false,
            // });
          }}
        >
          <Link to="/userlogin">Log in</Link>
        </button>
        <button
          className="NavigationBarButton"
          onClick={(event) => {
            event.preventDefault();
            this.setState({
              showMenu: true,
              showPage: false,
              showNavbar: false,
            });
          }}
        >
          Menu
        </button>
      </div>
    );
  };

  displayMenu = () => {
    return (
      <div>
        <Link
          onClick={() =>
            this.setState({
              showMenu: false,
              showNavbar: true,
            })
          }
        >
          X
        </Link>
        <br />
        <Link
          onClick={() =>
            this.setState({
              showMenu: false,
              showNavbar: true,
            })
          }
        >
          Home
        </Link>
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
        {this.state.isAdmin && (
          <Link to="/adminpage">
            <div>Administrator</div>
          </Link>
        )}
      </div>
    );
  };

  displayLogIn = () => {
    return (
      <div>
        <div ClassName="SixImages">
          <img src="" alt="" ClassName="Image" />
          <img src="" alt="" ClassName="Image" />
          <img src="" alt="" ClassName="Image" />
          <img src="" alt="" ClassName="Image" />
          <img src="" alt="" ClassName="Image" />
          <img src="" alt="" ClassName="Image" />
        </div>
        <div>
          <button
            onClick={() => {
              this.setState({
                showPage: true,
                showLogIn: false,
                showNavbar: true,
              });
              console.log("Hi");
            }}
          >
            BACK
          </button>
          <div>
            <img src="" alt="" ClassName="logoMark" />
          </div>
          <h1>Log in to Valerie's Foster Dog</h1>
          <h2>Enter details below</h2>
          <label>Email adress</label>
          <input type="text" id="fname" name="fname" value="" />
          <br />
          <label>Password</label>
          <Link>Forgot your password?</Link>
          <input type="password" id="fname" name="fpassword" value="" />
          <br />
          <button>LOG IN</button>
          <button
            onClick={() => {
              this.setState({
                showPage: false,
                showLogIn: false,
                showSignUp: true,
                showNavbar: false,
              });
            }}
          >
            Don't have an account?
          </button>
        </div>
      </div>
    );
  };

  displaySignUp = () => {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              showPage: false,
              showLogIn: true,
              showSignUp: false,
              showNavbar: false,
            });
            console.log("Hi");
          }}
        >
          BACK
        </button>
        <img src="" alt="" ClassName="logoMark" />
        <h1>Be part of our community</h1>
        <label>Name</label>
        <input type="text" id="fname" name="fname" value="" />
        <br />
        <label>Email adress</label>
        <input type="text" id="fname" name="fname" value="" />
        <br />
        <label>Create a password</label>
        <input type="text" id="fname" name="fname" value="" />
        <br />
        <button>SIGN UP</button>
        <button
          onClick={() => {
            this.setState({
              showPage: false,
              showLogIn: true,
              showSignUp: false,
              showNavbar: false,
            });
            console.log("Hi");
          }}
        >
          <p>Already have an account?</p>
        </button>
      </div>
    );
  };

  displayFirst = () => {
    return (
      <div className="CarrouselContainer">
        <img className="CarrouselImage" />
        <div className="CarrouselText">
          <img id="LogoMark" />
          <span className="CompanyName">House of Paws</span>
          <h1 className="Tagline">Because every dog deserves a warm bed.</h1>
          <div className="Text">
            <p>
              In the U.S. alone, about 3.3 milion canines enter the shelters
              every YEAR. A lot of these shelters simply don't have the space to
              hold all the animals and as a result, dogs live in cramped cages
              every single day, and about 670,000 dogs are euthanized.
            </p>
            <p>
              We know these facts can be daunting and it can make you question
              where to even start. That's exactly why House of Paws was
              initiated so EVERYONE can easily and actively participate in
              saving these canines, one angel baby at a time.{" "}
            </p>
          </div>
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
    return (
      <div>
        {this.state.showNavbar ? this.displayNavBar() : ""}
        {this.state.showLogIn & !this.state.showMenu ? this.displayLogIn() : ""}
        {this.state.showSignUp ? this.displaySignUp() : ""}
        {this.state.showMenu & !this.state.showLogIn ? this.displayMenu() : ""}
        {!this.state.showLogIn & !this.state.showMenu & !this.state.showSignUp
          ? this.displayFirst()
          : ""}
      </div>
    );
  }
}

export default MainCarrouselPage;
