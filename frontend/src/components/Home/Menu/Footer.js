import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../CSS/Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        {/* Main Container for 3 floats: Dev Team, Navigation and Other links */}

        <div className="footerContainer">
          <div className="floatElement">
            <img className="footerLogoMark" alt="footer logo mark" />
            <h4 className="address">
              House of Valerie Apt. 911, <br />
              Kimchi 00911 USA
            </h4>
            <h4 className="phoneNumber"> 0-800-WeLoveDogs</h4>

            <span>
              <img id="socialMediaIcon" alt="social media icon" />
            </span>
            <span>
              <img id="socialMediaIcon" alt="social media icon" />
            </span>
            <span>
              <img id="socialMediaIcon" alt="social media icon" />
            </span>
            <span>
              <img id="socialMediaIcon" alt="social media icon" />
            </span>
          </div>

          <div className="floatElement">
            <h4 className="teamTitle">Development Team</h4>
            {/* Carlos */}
            <div className="teamMember">Carlos Cesar Valle</div>
            <div className="teamMemberCredits">
              Software Developer <br /> UX & Branding Designer
            </div>
            {/* <p className="meetTeamText">From: Miami, FL</p> */}
            <span>
              <a
                className="teamMemberLink1"
                href="https://github.com/carloscesarvalle"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </span>
            <span>|</span>
            <span>
              <a
                className="teamMemberLink2"
                href="https://www.linkedin.com/in/carloscesarvalle/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </span>
            <span>|</span>
            <span>
              <a
                className="teamMemberLink2"
                href="https://www.behance.net/carloscesarvalle"
                target="_blank"
                rel="noopener noreferrer"
              >
                Behance
              </a>
            </span>
            {/* Valerie */}
            <div className="teamMember">Valerie Lee Kang</div>
            <div className="teamMemberCredits">
              Software Developer <br /> Canvas Developer
            </div>
            <span>
              <a
                className="teamMemberLink1"
                href="https://github.com/vlee13"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </span>
            <span>|</span>
            <span>
              <a
                className="teamMemberLink2"
                href="https://www.linkedin.com/in/vlee13/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </span>
            {/* DP */}
            <div className="teamMember">Dionel Panuncia</div>
            <div className="teamMemberCredits">Software Developer</div>
            <span>
              <a
                className="teamMemberLink1"
                href="https://github.com/dpanuncia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </span>
            <span>|</span>
            <span>
              <a
                className="teamMemberLink2"
                href="https://www.linkedin.com/in/dpanuncia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </span>
          </div>

          {/* Navigation Bar links on Footer*/}

          <div className="floatElement">
            <h4 className="footerNavBarTitle1">Navigation</h4>

            <Link to="/fosterdog" className="footerNavLink">
              Foster dog
            </Link>

            <Link to="/vote" className="footerNavLink">
              Vote
            </Link>

            <Link to="/helpothers" className="footerNavLink">
              Help others
            </Link>

            <Link to="/contactus" className="footerNavLink">
              Contact us
            </Link>

            <h4 className="footerNavBarTitle2">Other links</h4>
            <Link to="/game" className="footerNavLink">
              Zoey 90's Game
            </Link>
          </div>

          {/* Newsletter, acknowledgement and copyright */}
          <div className="floatElement">
            <h4 className="footerQuestion">
              Do you want to receive our monthly newsletter?
            </h4>
            <p className="text">Create an account!</p>
            <p className="footerAcknowledgement">
              House of Paws was created with a lot of love during Ironhack
              fulltime web development bootcamp. <br /> All rights reserved.{" "}
              <br /> We also want to show our appreciation to the photograpers.
              Most of their work can be found on pexels.com and unsplash.com.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
