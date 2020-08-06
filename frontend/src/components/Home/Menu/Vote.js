import React, { Component } from "react";
import { Link } from "react-router-dom";
import actions from "../../../services/index.js";
import "../../CSS/Vote.css";
import VoteBar from "./VoteBar";
import LineGraph from "./LineGraph";
import PieGraph from "./PieGraph";

class Vote extends Component {
  state = {
    dogs: [],
  };
  async componentDidMount() {
    let res = await actions.getDogs();
    console.log("hello", res);
    this.setState({
      dogs: res.data.dogs,
    });
    console.log("state", this.state);
  }

  //This is the old NavBar for the burger. I'm commenting out this just in case backend needs it

  // displayNavBar = () => {
  //   return (
  //     <div>
  //       <button
  //         onClick={(event) => {
  //           event.preventDefault();
  //           this.setState({
  //             showLogIn: true,
  //             showPage: false,
  //             showNavbar: false,
  //           });
  //         }}
  //       >
  //         Log in
  //       </button>
  //       <button
  //         onClick={(event) => {
  //           event.preventDefault();
  //           this.setState({
  //             showMenu: true,
  //             showPage: false,
  //             showNavbar: false,
  //           });
  //         }}
  //       >
  //         Menu
  //       </button>
  //     </div>
  //   );
  // };

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
  //       <Link to="/fosterdog">
  //         <div>The dog I'm fostering now</div>
  //       </Link>
  //       <Link
  //         onClick={() =>
  //           this.setState({
  //             showMenu: false,
  //             showNavbar: true,
  //           })
  //         }
  //       >
  //         Vote for the next dog I'll foster
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

  // displayLogIn = () => {
  //   return (
  //     <div>
  //       <div ClassName="SixImages">
  //         <img src="" alt="" ClassName="Image" />
  //         <img src="" alt="" ClassName="Image" />
  //         <img src="" alt="" ClassName="Image" />
  //         <img src="" alt="" ClassName="Image" />
  //         <img src="" alt="" ClassName="Image" />
  //         <img src="" alt="" ClassName="Image" />
  //       </div>
  //       <div>
  //         <button
  //           onClick={() => {
  //             this.setState({
  //               showPage: true,
  //               showLogIn: false,
  //               showNavbar: true,
  //             });
  //             console.log("Hi");
  //           }}
  //         >
  //           BACK
  //         </button>
  //         <div>
  //           <img src="" alt="" ClassName="logoMark" />
  //         </div>
  //         <h1>Log in to Valerie's Foster Dog</h1>
  //         <h2>Enter details below</h2>
  //         <label>Email adress</label>
  //         <input type="text" id="fname" name="fname" value="" />
  //         <br />
  //         <label>Password</label>
  //         <Link>Forgot your password?</Link>
  //         <input type="password" id="fname" name="fpassword" value="" />
  //         <br />
  //         <button>LOG IN</button>
  //         <button
  //           onClick={() => {
  //             this.setState({
  //               showPage: false,
  //               showLogIn: false,
  //               showSignUp: true,
  //               showNavbar: false,
  //             });
  //           }}
  //         >
  //           Don't have an account?
  //         </button>
  //       </div>
  //     </div>
  //   );
  // };

  // displaySignUp = () => {
  //   return (
  //     <div>
  //       <button
  //         onClick={() => {
  //           this.setState({
  //             showPage: false,
  //             showLogIn: true,
  //             showSignUp: false,
  //             showNavbar: false,
  //           });
  //           console.log("Hi");
  //         }}
  //       >
  //         BACK
  //       </button>
  //       <img src="" alt="" ClassName="logoMark" />
  //       <h1>Be part of our community</h1>
  //       <label>Name</label>
  //       <input type="text" id="fname" name="fname" value="" />
  //       <br />
  //       <label>Email adress</label>
  //       <input type="text" id="fname" name="fname" value="" />
  //       <br />
  //       <label>Create a password</label>
  //       <input type="text" id="fname" name="fname" value="" />
  //       <br />
  //       <button>SIGN UP</button>
  //       <button
  //         onClick={() => {
  //           this.setState({
  //             showPage: false,
  //             showLogIn: true,
  //             showSignUp: false,
  //             showNavbar: false,
  //           });
  //           console.log("Hi");
  //         }}
  //       >
  //         <p>Already have an account?</p>
  //       </button>
  //     </div>
  //   );
  // };

  displayNavBar = () => {
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
            <Link to="/about" className="link">
              <div className="NavBarElementText">About us</div>
            </Link>
            <Link to="/fosterdog" className="link">
              <div className="NavBarElementText">Foster dogs</div>
            </Link>

            <Link to="/vote" className="link">
              <div className="NavBarElementText">Vote!</div>
            </Link>

            <Link to="/adopted" className="link">
              <div className="NavBarElementText">Adopted</div>
            </Link>

            <Link to="/contactus" className="link">
              <div className="NavBarElementText">Contact us</div>
            </Link>
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
  };

  displayHeader = () => {
    return (
      <div className="container">
        <img className="imageForVote" />
        <div className="textForHeroImage">
          <h1>Vote.</h1>
          <p>
            We can only take one dog to be fostered in this house. Help us
            choose! You have three votes.
          </p>
        </div>
      </div>
    );
  };

  displayDogsToVote = () => {
    return this.state.dogs
      .filter((eachDog) => eachDog.status === "available")
      .map((eachDog, i) => {
        return (
          <div className="eachDog">
            <div className="voteImg">
              <img src={eachDog.image} alt="dogpic" />
              <br />
            </div>

            <div className="voteInfo">
              <h1>{eachDog.name}</h1>
              <button onClick={() => this.vote(eachDog, i)}>
                {eachDog.votes.length}
              </button>
              <br />
              {`ShelterID: #${eachDog.shelterID}`}
              <br />

              {`Location: ${eachDog.location}`}
              <br />
              {`Age: ${eachDog.age}`}
              <br />
              {`Weight: ${eachDog.weight}`}
              <br />
              {`"${eachDog.descr}"`}
              <br />
            </div>
          </div>
        );
      });
  };

  vote = (eachDog, i) => {
    actions
      .vote(eachDog)
      .then((res) => {
        console.log(res);
        if (!res.data.error) {
          let newDogs = [...this.state.dogs];
          newDogs[i].votes.push(res.data.user._id);
          this.setState({
            dogs: newDogs,
          });
        } else {
          alert(res.data.error);
        }
      })
      .catch((err) => console.error(err));
    console.log(eachDog);
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
        {/* {this.state.showNavbar ? this.displayNavBar() : ""}
        {this.state.showLogIn & !this.state.showMenu ? this.displayLogIn() : ""}
        {this.state.showSignUp ? this.displaySignUp() : ""}
        {this.state.showMenu & !this.state.showLogIn ? this.displayMenu() : ""}
        {!this.state.showLogIn & !this.state.showMenu & !this.state.showSignUp
          ? this.displayHeader()
          : ""}
        {!this.state.showLogIn & !this.state.showMenu & !this.state.showSignUp
          ? this.displayDogs()
          : ""} */}
        {this.displayNavBar()}

        {this.displayHeader()}

        {this.displayDogsToVote()}
        {/* <VoteBar data={this.state.dogs} /> */}
        <PieGraph data={this.state.dogs} />
        <LineGraph data={this.state.dogs} />
        {this.displayFooter()}
      </div>
    );
  }
}
export default Vote;
