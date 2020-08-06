import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar";
import "../../CSS/ContactUs.css";
import "../../CSS/NavigationBar.css";

class ContactUs extends Component {
  state = {};

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
  //           <button
  //             className="navBarButton"
  //             onClick={(event) => {
  //               event.preventDefault();
  //               this.setState({
  //                 showLogIn: true,
  //                 showPage: false,
  //                 showNavbar: false,
  //               });
  //             }}
  //           >
  //             Log in
  //           </button>
  //         </div>
  //       </div>
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
    let audio = new Audio("/bark.mp3");
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
                <button
                  onClick={() => audio.play()}
                  type="submit"
                  className="submitButton"
                >
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
        <NavBar></NavBar>
        {this.displayHeader()}
        {/* {this.displayNavBar()} */}
        {this.displayContactUsPage()}
        {this.displayFooter()}
      </div>
    );
  }
}

export default ContactUs;
