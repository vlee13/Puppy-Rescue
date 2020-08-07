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
              >
                LinkedIn
              </a>
            </span>
          </div>

          {/* Navigation Bar links on Footer*/}

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

          {/* Newsletter, acknowledgement and copyright */}
          <div className="floatElement">
            <p>
              Do you want to receive our monthly newsletter? <br />
              Create an account!
            </p>

            <p className="footerText">
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
