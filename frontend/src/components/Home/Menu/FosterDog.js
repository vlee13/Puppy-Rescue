import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import actions from "../../../services/index.js";
import Menu from "./Menu";

class FosterDog extends Component {
  state = {
    showNavbar: true,
    showPage: true,
    showLogIn: false,
    showSignUp: false,
    showMenu: false,
    showDonate: false,
    fosterdog: [],
    isAdmin: false,
  };

  async componentDidMount() {
    let res = await actions.fosterDog();
    let user = await actions.isLoggedIn();

    console.log("user", user);
    this.setState({
      fosterdog: res.data.fosterdog,
      isAdmin: user.data.role === "admin",
    });
  }

  displayFosterDog = () => {
    return this.state.fosterdog
      .filter((eachDog) => eachDog.status === "fostered")
      .map((eachDog) => {
        return (
          <div>
            <div key={`dog-key-${eachDog.name}`}>
              <img src={eachDog.image} alt="fosterdogpic" />
              <br />
              <h1>{eachDog.name}</h1>
              <br />
              <p>{eachDog.votes}</p>

              <br />
              <p>About Fred Flinstone</p>
            </div>
          </div>
        );
      });
    //   return (
    //     <div>
    //       <img src="" alt="fosterDogImage" className="HeroImage" />
    //       <div className="textAlignedToRight">
    //         <img src="" alt="logoMark" className="LogoMark" />
    //         <h1 className="Tagline">Fred Flinston</h1>
    //         <span className="CompanyName">Dog I'm fostering now</span>
    //         <p>Votes</p>
    //         <p>Started Fostering</p>
    //         <p>Breed</p>
    //         <p>text</p>
    //         <button
    //           onClick={() => {
    //             this.setState({
    //               showPage: false,
    //               showLogIn: false,
    //               showSignUp: false,
    //               showNavbar: false,
    //               showDonate: true,
    //             });
    //             console.log("Hi");
    //           }}
    //           className="button"
    //         >
    //           Share your love with Fred
    //         </button>
    //       </div>
    //     </div>
    //   );
  };

  displayNavBar = () => {
    return (
      <div>
        <button
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

  toggleMenu = () => {
    return this.setState({
      showMenu: false,
      showNavbar: true,
    });
  };

  // displayMenu = () => {
  //   return (
  //     <div>
  //       <Link
  //         onClick={() =>
  //           this.setState({
  //             showMenu: false,
  //             showNavbar: true,
  //           })
  //         }
  //       >
  //         X
  //       </Link>
  //       <br />
  //       <Link to="/">
  //         <div>Home</div>
  //       </Link>
  //       <Link to="/about">
  //         <div>About</div>
  //       </Link>
  //       <Link
  //         onClick={() =>
  //           this.setState({
  //             showMenu: false,
  //             showNavbar: true,
  //           })
  //         }
  //       >
  //         The dog I'm fostering now
  //       </Link>
  //       <Link to="/vote">
  //         <div>Vote for the next dog I'll foster</div>
  //       </Link>
  //       <Link to="/helpothers">
  //         <div>Help other organizations</div>
  //       </Link>
  //       <Link to="/game">
  //         <div>
  //           Play our 90's inspired game <i>Dog Zoey in Space</i>
  //         </div>
  //       </Link>
  //       <Link to="/meetteam">
  //         <div>Meet the team</div>
  //       </Link>
  //       <Link to="/contactus">
  //         <div>Contact us</div>
  //       </Link>
  //     </div>
  //   );
  // };

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
        <div className="CompanyName">
          <h1>You voted, we listened!</h1>
          <p>Text here about fostering</p>
        </div>
        <div>
          {console.log(this.state.fosterdog)}
          {this.state.showNavbar ? this.displayNavBar() : ""}
          {this.state.showLogIn & !this.state.showMenu
            ? this.displayLogIn()
            : ""}
          {this.state.showSignUp ? this.displaySignUp() : ""}
          {this.state.showMenu & !this.state.showLogIn ? (
            <Menu isAdmin={this.state.isAdmin} toggleMenu={this.toggleMenu} />
          ) : (
            ""
          )}
          {!this.state.showLogIn &
          !this.state.showMenu &
          !this.state.showSignUp &
          !this.state.showDonate
            ? this.displayFosterDog()
            : ""}
          {this.state.showDonate ? this.displayDonate() : ""}
        </div>
      </div>
    );
  }
}
export default FosterDog;
