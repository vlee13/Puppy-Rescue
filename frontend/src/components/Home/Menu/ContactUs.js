import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../CSS/ContactUs.css";

class ContactUs extends Component {
  state = {
    // showNavbar: true,
    // showPage: true,
    // showLogIn: false,
    // showSignUp: false,
    // showMenu: false,
  };

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

  //This is the old navbar for the burger. I commented out the code in case we need it for backend issues

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
  //       <Link
  //         onClick={() =>
  //           this.setState({
  //             showMenu: false,
  //             showNavbar: true,
  //           })
  //         }
  //       >
  //         Contact Us
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

  displayHeader = () => {
    return (
      <div className="container">
        <img className="imageForContactUs" />
        <div className="textForHeroImage">
          <h1>
            Our love for dogs is always ready to answer any of your questions.
          </h1>
        </div>
      </div>
    );
  };

  displayContactUsPage = () => {
    return (
      <div>
        <div className="contactUsContainer">
          <div className="contactUsTextContainer">
            <h4 className="instructions">
              Please fill up these details below and submit.
            </h4>
            <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
              <label className="label" htmlFor="name">
                Name
              </label>
              <br />
              <input
                onChange={this.handleChange}
                name="name"
                type="text"
                value={this.state.value}
                className="inputBar"
              />
              <br />
              <label className="label" htmlFor="exampleInputEmail1">
                Email address
              </label>
              <br />
              <input
                onChange={this.handleChange}
                name="email"
                type="email"
                value={this.state.value}
                className="inputBar"
              />
              <br />
              <label htmlFor="message">Message</label>
              <br />
              <textarea
                onChange={this.handleChange}
                name="message"
                value={this.state.value}
                className="textarea"
                rows="5"
              ></textarea>
              <br />
              <div className="buttonContainer">
                <button type="submit" className="submitButton">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  displayFooter = () => {
    return (
      <div className="footer">
        {/* Main Container for 3 floats: Dev Team, Navigation and Other links */}

        <div className="footerContainer">
          <div className="floatElement">
            <img className="footerLogoMark" />
            <div className="address">
              House of Valerie Apt. 911, <br />
              Kimchi 00911 USA
            </div>
            <div className="phoneNumber"> 0-800-WeLoveDogs</div>

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
        {this.displayHeader()}
        {this.displayNavBar()}
        {this.displayContactUsPage()}
        {this.displayFooter()}
      </div>
    );
  }
}

export default ContactUs;
