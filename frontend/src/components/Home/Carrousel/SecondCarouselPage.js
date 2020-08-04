import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../CSS/Carrousel.css";
import "../../CSS/Menu.css";
import Menu from "../Menu/MenuMainPage";
import UserLogIn from "../LogIn/UserLogIn";

class MainCarrouselPage extends Component {
  state = {
    showNavbar: true,
    showPage: true,
    showLogIn: false,
    showSignUp: false,
    showMenu: false,
  };

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
      <div className="Background">
        <div className="Container">
          <Link
            className="link"
            id="X"
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
            className="link"
            onClick={() =>
              this.setState({
                showMenu: false,
                showNavbar: true,
              })
            }
          >
            Home
          </Link>
          <br />
          <Link to="/about" className="link">
            <div>About</div>
          </Link>
          <br />
          <Link to="/fosterdog" className="link">
            <div>The dog I'm fostering now</div>
          </Link>
          <br />
          <Link to="/vote" className="link">
            <div>Vote for the next dog I'll foster</div>
          </Link>
          <br />
          <Link to="/helpothers" className="link">
            <div>Help other organizations</div>
          </Link>
          <br />
          <Link to="/game" className="link">
            <div>
              Play our 90's inspired game <i>Dog Zoey in Space</i>
            </div>
          </Link>
          <br />
          <Link to="/meetteam" className="link">
            <div>Meet the team</div>
          </Link>
          <br />
          <Link to="/contactus" className="link">
            <div>Contact us</div>
          </Link>
          <br />
          <Link to="/about">
            <button className="MenuLogInButton">LOG IN</button>
          </Link>
        </div>
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
        <img className="CarrouselImage2" />
        <div className="CarrouselText">
          <img id="LogoMark" />
          <span className="CompanyName">It's time to vote</span>
          <h1 className="Tagline">
            Help us to choose the next dog we will foster.
          </h1>
          <p className="Text">
            Not everyone who has the heart for animal welfare has the means to
            foster or adopt. Our team at House of Paws has come up with a
            creative & easy-to-use platform where you can partner with us to
            change canine lives. You get to vote which furbaby gets to go home
            to a safe & loving home.
          </p>
          <Link to="/vote">
            <button className="CarrouselButton">MEET THE CANDIDATES</button>
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
