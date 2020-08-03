import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../CSS/FosterDog.css";

class FosterDog extends Component {
  state = {
    showNavbar: true,
    showPage: true,
    showLogIn: false,
    showSignUp: false,
    showMenu: false,
    showDonate: false,
  };

  displayNavBar = () => {
    return (
      <div className="NavigationBar">
        <button
          className="NavigationBarButton"
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
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/about">
          <div>About</div>
        </Link>
        <Link
          onClick={() =>
            this.setState({
              showMenu: false,
              showNavbar: true,
            })
          }
        >
          The dog I'm fostering now
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

  displayPage = () => {
    return (
      <div className="CarrouselContainer">
        <img className="FosterDogImage" />
        <div className="CarrouselText">
          <img id="LogoMark" />
          <span className="CompanyName">Dog I'm fostering now</span>
          <h1 className="Tagline">Chispa</h1>
          <p>
            Total votes:
            <br /> ----animated bar------
          </p>
          <p>
            Started Fostering: <br />
            10/02/2020
          </p>
          <p>
            We are all animal lovers and we all wanted to do something positive
            for the community, so as our final project in our IronHack bootcamp
            journey we decided to give back. House of Paws is bigger than us. By
            fostering these shelter dogs, we believe we can give them a real
            chance to being adopted into their forever homes.
          </p>
          <button
            onClick={() => {
              this.setState({
                showPage: false,
                showLogIn: false,
                showSignUp: false,
                showNavbar: false,
                showDonate: true,
              });
              console.log("Hi");
            }}
            className="CarrouselButton"
          >
            SHARE YOUR LOVE WITH CHISPA
          </button>
        </div>
      </div>
    );
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(this.state);
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    let res = await axios.post("http://localhost:5000/", this.state);
    console.log(res);
  };

  displayDonate = () => {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              showNavbar: true,
              showDonate: false,
            });
          }}
        >
          BACK
        </button>
        <img src="" alt="logoMark" className="LogoMark" />
        <span className="CompanyName">
          Thanks for sharing your love with Fred
        </span>
        <p>Donate with a debit or credit card</p>
        <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            onChange={this.handleChange}
            name="cardNumber"
            type="number"
            value={this.state.value}
            className="formBar"
          />
          <br />
          <label htmlFor="securityCode">Security</label>
          <input
            onChange={this.handleChange}
            name="securityCode"
            type="number"
            value={this.state.value}
            className="smallerFormBar"
          />
          <label htmlFor="expirationDate">Expiration Date</label>
          <input
            onChange={this.handleChange}
            name="expirationDate"
            type="number"
            value={this.state.value}
            className="smallerFormBar"
          />
          <br />
          <p>Billing</p>
          <label htmlFor="adress">Street Address</label>
          <input
            onChange={this.handleChange}
            name="adress"
            type="text"
            value={this.state.value}
            className="formBar"
          />
          <br />
          <label htmlFor="city">City</label>
          <input
            onChange={this.handleChange}
            name="city"
            type="text"
            value={this.state.value}
            className="smallerFormBar"
          />
          <label htmlFor="zipCode">Zip Code</label>
          <input
            onChange={this.handleChange}
            name="zipCode"
            type="number"
            value={this.state.value}
            className="smallerFormBar"
          />
          <br />
          <input type="checkbox" id="saveInfo" name="information" value="" />
          <label for="savingInfo"> Save this information for next time</label>
          <br />
          <button type="submit" className="donateButton">
            DONATE NOW
          </button>
        </form>
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
        {!this.state.showLogIn &
        !this.state.showMenu &
        !this.state.showSignUp &
        !this.state.showDonate
          ? this.displayPage()
          : ""}
        {this.state.showDonate ? this.displayDonate() : ""}
      </div>
    );
  }
}
export default FosterDog;
