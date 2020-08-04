import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import actions from "../../../services/index.js";
import { Client } from "@petfinder/petfinder-js";

const client = new Client({
  apiKey: "23pouIgSc9wnfPif1QGkqRi7OU1OmwWwWLwiUXzmpeztRBPJKA",
  secret: "kxra4gyDNa0nq9zxra4Bc6nIH5DjZTDGABfYcEVH",
});

class Adopted extends Component {
  state = {
    showNavbar: true,
    showPage: true,
    showLogIn: false,
    showSignUp: false,
    showMenu: false,
    showDonate: false,
    adopted: [],
    petfinder: [],
  };

  async componentDidMount() {
    let res = await actions.adoptedDogs();
    let res2 = await axios.get(`https://api.petfinder.com/v2/types/dog`);
    let res3 = await client.animal.search();
    console.log("hello", res2);
    this.setState({
      adopted: res.data.adopted,
      petfinder: res2.data,
    });
  }

  displayAdopted = () => {
    console.log("display dogs", this.state.adopted);
    return this.state.adopted
      .filter((eachDog) => eachDog.status === "adopted")
      .map((eachDog) => {
        return (
          <div key={`dog-key-${eachDog.name}`}>
            <img src={eachDog.image} alt="adoptionpic" />
            <br />
            <h1>{eachDog.name}</h1>
            <br />
            <p>{eachDog.descr}</p>
          </div>
        );
      });
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

  displayHeader = () => {
    return (
      <div>
        <img src="" alt="logoMark" className="LogoMark" />
        <div>
          <div>
            <h1>Our Adoptees!</h1>
            <p>
              The success stories and history of all the rescues that found
              their fur-ever homes
            </p>
          </div>
          <hr></hr>
        </div>
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
          ? this.displayHeader()
          : ""}
        {!this.state.showLogIn &
        !this.state.showMenu &
        !this.state.showSignUp &
        !this.state.showDonate
          ? this.displayAdopted()
          : ""}
        {this.state.showDonate ? this.displayDonate() : ""}

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="cardNumber">Card Number</label>
          <input
            onChange={this.handleChange}
            name="cardNumber"
            type="number"
            value={this.state.value}
            className="formBar"
          />
          <br />
        </form>
      </div>
    );
  }
}
export default Adopted;
