import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import actions from "../../../services/index.js";
import "../../CSS/FosterDog.css";
import "../../CSS/NavigationBar.css";
<<<<<<< HEAD
import GoogleAuthLogin from "../../auth/GoogleAuthLogin";
import { GoogleLogout } from "react-google-login";
import Footer from "./Footer";
=======
import NavBar from "../Menu/NavBar";
>>>>>>> e42e2a358ed3f6f214645ebb1b74314d7effcf7c

class FosterDog extends Component {
  state = {
    fosterdog: [],
  };

  async componentDidMount() {
    let res = await actions.fosterDog();
    console.log("hello", res);
    this.setState({
      fosterdog: res.data.fosterdog,
    });
  }

  logout = (response) => {
    console.log(response);
    // const user = {
    //   ...response.profileObj,
    //   password: response.profileObj?.googleId,
    // };
    actions
      .logOut()
      .then((user) => {
        this.props.setUser({
          email: null,
          createdAt: null,
          updatedAt: null,
          _id: null,
        });
      })
      .catch(({ response }) => console.error(response));
  };

  displayHeader = () => {
    return (
      <div className="container">
        <img className="imageForFosterDog" />
        <div className="textForHeroImage">
          <h1>Our fostered dogs!</h1>
          <p>
            These are the winners. <br />
            <br />
            You love them. <br />
            <br />
            They rock and roll.
          </p>
        </div>
      </div>
    );
  };

  displayFosterDog = () => {
    console.log("display dogs", this.state.fosterdog);
    return this.state.fosterdog
      .filter((eachDog) => eachDog.status === "fostered")
      .map((eachDog) => {
        return (
          <div>
            <div className="CompanyName">
              <h1>You voted, we listened!</h1>
              <p>Text here about fostering</p>
            </div>
            <div key={`dog-key-${eachDog.name}`}>
              <img src={eachDog.image} alt="fosterdogpic" />
              <br />
              <h1>{eachDog.name}</h1>
              <br />
              <p>{eachDog.descr}</p>
              <a href="https://www.patreon.com/houseofpaws">
                <button>
                  <b>DONATE</b>
                </button>{" "}
              </a>
            </div>
          </div>
        );
      });
  };

<<<<<<< HEAD
=======
  displayNavBar = () => {
    return (
      <div className="NavigationBar">
        {/* <button
          className="NavigationBarButton">
          Log in
        </button>
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
        </button> */}
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
        <Link to="/userdonate">
          <div>Donate </div>
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

>>>>>>> e42e2a358ed3f6f214645ebb1b74314d7effcf7c
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

  render() {
    return (
      <div>
        {/* {!this.props.email && <GoogleAuth setUser={this.props.setUser} />}
        {!this.props.email && <GoogleAuthLogin setUser={this.props.setUser} />} */}

        {this.displayHeader()}

        {this.displayFosterDog()}
<<<<<<< HEAD
=======
        {this.displayFooter()}
>>>>>>> e42e2a358ed3f6f214645ebb1b74314d7effcf7c
      </div>
    );
  }
}

export default FosterDog;
