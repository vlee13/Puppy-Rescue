import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import actions from "../../../services/index.js";
import "../../CSS/FosterDog.css";
import NavBar from "./NavBar";
import "../../CSS/NavigationBar.css";
import GoogleAuthLogin from "../../auth/GoogleAuthLogin";
import { GoogleLogout } from "react-google-login";

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

  // displayNavBar = () => {
  //   return (
  //     <div className="Navbar">
  //       <div className="NavbarContainer">
  //         <Link to="/" className="link">
  //           <div className="NavBarElement">
  //             <img id="LogoMark" />
  //             {/* This span is just a placeholder. It would be remove after finishing horizontal logo */}
  //             <span className="NavBarElementText">House of Paws</span>
  //             {/* Remove till here */}
  //           </div>
  //         </Link>
  //         <div className="NavBarElement">
  //           <Link to="/about" className="link">
  //             <div className="NavBarElementText">About us</div>
  //           </Link>
  //           <Link to="/fosterdog" className="link">
  //             <div className="NavBarElementText">Foster dogs</div>
  //           </Link>

  //           <Link to="/vote" className="link">
  //             <div className="NavBarElementText">Vote!</div>
  //           </Link>

  //           <Link to="/adopted" className="link">
  //             <div className="NavBarElementText">Adopted</div>
  //           </Link>

  //           <Link to="/contactus" className="link">
  //             <div className="NavBarElementText">Contact us</div>
  //           </Link>
  //           <Link to="/contactus" className="link">
  //             <div className="NavBarElementText">|</div>
  //           </Link>

  //           {this.props.email ? (
  //             <button onClick={this.logout}>Logout</button>
  //           ) : (
  //             <GoogleAuthLogin
  //               render={(renderProps) => (
  //                 <button
  //                   onClick={renderProps.onClick}
  //                   disabled={renderProps.disabled}
  //                 >
  //                   This is my custom Google button
  //                 </button>
  //               )}
  //               buttonText="Login"
  //               className="navBarButton"
  //               setUser={this.props.setUser}
  //             />
  //           )}
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

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

  // Old Code Commented Out

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
  //       <Link to="/userdonate">
  //         <div>Donate </div>
  //       </Link>
  //     </div>
  //   );
  // };

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

  displayFooter = () => {
    return (
      <div className="footer">
        {/* Main Container for 3 floats: Dev Team, Navigation and Other links */}

        <div className="footerContainer">
          <div className="floatElement">
            <img class="footerLogoMark" />
            <div className="address">
              House of Valerie Apt. 911, <br />
              Kimchi 00911 USA
            </div>
            <div classNAme="phoneNumber"> 0-800-WeLoveDogs</div>

            <span>
              <img id="socialMediaIcon" />
            </span>
            <span>
              <img id="socialMediaIcon" />
            </span>
            <span>
              <img id="socialMediaIcon" />
            </span>
            <span>
              <img id="socialMediaIcon" />
            </span>
          </div>

          <div className="floatElement">
            <h4 className="title">Development Team</h4>
            {/* Carlos */}
            <div>Carlos Cesar Valle</div>
            <div>
              Software Developer <br /> UX & Branding Designer
            </div>
            {/* <p className="meetTeamText">From: Miami, FL</p> */}
            <span>
              <a href="https://github.com/carloscesarvalle" target="_blank">
                GitHub
              </a>
            </span>
            <span>|</span>
            <span>
              <a
                href="https://www.linkedin.com/in/carloscesarvalle/"
                target="_blank"
              >
                LinkedIn
              </a>
            </span>
            <span>|</span>
            <span>
              <a
                href="https://www.behance.net/carloscesarvalle"
                target="_blank"
              >
                Behance
              </a>
            </span>
            {/* Valerie */}
            <div>Valerie Lee Kang</div>
            <div>
              Software Developer <br /> Canvas Developer
            </div>
            <span>
              <a href="https://github.com/vlee13" target="_blank">
                GitHub
              </a>
            </span>
            <span>|</span>
            <span>
              <a href="https://www.linkedin.com/in/vlee13/" target="_blank">
                LinkedIn
              </a>
            </span>
            {/* DP */}
            <div>Dionel Panuncia</div>
            <div>Software Developer</div>
            <span>
              <a href="https://github.com/dpanuncia/" target="_blank">
                GitHub
              </a>
            </span>
            <span>|</span>
            <span>
              <a href="https://www.linkedin.com/in/dpanuncia/" target="_blank">
                LinkedIn
              </a>
            </span>
          </div>

          {/* Navigation Bar */}

          <div className="floatElement">
            <h4 className="title">Navigation</h4>

            <Link to="/fosterdog" className="footerLink">
              Foster dogs
            </Link>

            <Link to="/vote" className="footerLink">
              Vote!
            </Link>

            <Link to="/helpothers" className="footerLink">
              Help others
            </Link>

            <Link to="/contactus" className="footerLink">
              Contact us
            </Link>

            <h4 className="title">Other links</h4>
            <Link to="/game" className="footerLink">
              Zoey 90's Game
            </Link>
          </div>

          {/* Newsletter and Copyright */}
          <div className="floatElement">
            <div>Do you want to receive our monthly newsletter?</div>
            <button
              className="footerButton"
              onClick={(event) => {
                event.preventDefault();
                console.log("clicking");
              }}
            >
              Sign Up
            </button>
            <div className="footerText">
              House of Paws was created with a lot of love during Ironhack
              fulltime web development bootcamp. <br /> All rights reserved.{" "}
              <br /> We also want to show our appreciation to the photograpers.
              Most of their work can be found on pexels.com and unsplash.com.
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        {/* {!this.props.email && <GoogleAuth setUser={this.props.setUser} />}
        {!this.props.email && <GoogleAuthLogin setUser={this.props.setUser} />} */}

        <NavBar></NavBar>
        {this.displayHeader()}
        {this.displayFosterDog()}
        {this.displayFooter()}
        {/* {this.state.showNavbar ? this.displayNavBar() : ""}
        {this.state.showLogIn & !this.state.showMenu ? this.displayLogIn() : ""}
        {this.state.showSignUp ? this.displaySignUp() : ""}
        {this.state.showMenu & !this.state.showLogIn ? this.displayMenu() : ""}
        {!this.state.showLogIn &
        !this.state.showMenu &
        !this.state.showSignUp &
        !this.state.showDonate
          ? this.displayFosterDog()

          ? this.displayPage()

          ? this.displayFosterDog()
          : ""}
        {this.state.showDonate ? this.displayDonate() : ""} */}
      </div>
    );
  }
}

export default FosterDog;
