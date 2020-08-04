import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../CSS/About.css";

class About extends Component {
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
            <Link to="/fosterdog" className="link">
              <div className="NavBarElementText">Foster dogs</div>
            </Link>

            <Link to="/vote" className="link">
              <div className="NavBarElementText">Vote!</div>
            </Link>

            <Link to="/adopted" className="link">
              <div className="NavBarElementText">Adopt</div>
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

  displayAbout = () => {
    return (
      <div>
        {/* Header */}

        <div className="container">
          <img className="background1" />
          <div className="textForHeroImage">
            <h1>
              Not everyone who love dogs can foster or adopt. We are here to
              help.
            </h1>
            <p>
              We foster one of the most abandoned dogs from our local shelter to
              show a potential adopter how awesome this dog is.
            </p>
          </div>
        </div>

        {/* Our Story  */}

        <div>
          <div className="container">
            <img className="background2" />
            <div className="textForBG">
              <h1 className="header">Our history</h1>
              <p className="text">
                Not everyone who has the heart for animal welfare has the means
                to foster or adopt. Our team at House of Paws has come up with a
                creative & easy-to-use platform where you can partner with us,
                and see that every shelter dog has a chance to find a safe &
                loving home.
              </p>
            </div>
          </div>
        </div>

        {/* What we do */}

        <div>
          <div className="container">
            <img className="background3" />
            <div className="textForBG2">
              <h1 className="header">What we do</h1>
              <p className="text">
                We hand pick 10 most "unwanted" shelter dogs by selecting the
                oldest or those that have been at the shelter the longest. You
                as a member can{" "}
                <Link to="/vote">
                  <span>vote</span>
                </Link>{" "}
                up to 3 times to choose which dog gets to be rescued from the
                shelter! Every 1st of the month as long as a foster is
                available, the shelter dog with the highest votes is selected to
                go home to a foster and a warm bed. We want people to adopt this
                cuttie dogs. You can check our lovely stories of adopted dogs{" "}
                <Link to="/adopted">
                  <span>here.</span>
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* What to expect from donations */}

        <div className="container">
          <img className="background4" />
          <div className="textForBG">
            <h1 className="header">What to expect from donations</h1>
            <p className="text">
              Donations will go directly towards the care and wellbeing of the
              foster dogs including: doctor's bills, any medications needed, any
              grooming needed, food, treats, toys, collar, leash, food/water
              bowl, a bed, etc. All update details will be provided in biweekly
              membership newsletters. Any more questions?{" "}
              <Link to="/fosterdog">
                <button>Contact us.</button>
              </Link>{" "}
            </p>
          </div>
        </div>

        {/* Help other organizations */}

        <div className="container">
          <img className="background6" />
          <div className="whiteBGleft">
            <h1 className="header">Help other organizations</h1>
            <p className="text">
              We believe in giving back to our community. Here you can find a
              list of other organizations that put a lot of effort helping dogs.
              Please take a look of them and help them as well.
            </p>
          </div>
        </div>

        {/* Zoey Game Section */}

        <div className="container">
          <img className="backgroundForGame" />
          <div className="whiteBGright">
            <h1>Bonus Track: Play Zoey in the Space</h1>
            <p>
              We are dev! One of our first projects at Ironhack was a game
              developed in Canvas. TAKE ZOOEY THROUGH SPACE, KILL ALIENS, AND
              COLLECT COINS. AS THE GAME PROGRESSES, IT WILL GET HARDER TO
              SURVIVE. KEEP ZOOEY ALIVE FOR AS LONG AS POSSIBLE GET THE HIGHEST
              SCORE TO WIN, and GAME OVER WHEN ALIENS REACH YOU.
            </p>
            <Link to="/game">
              <button>Play!</button>
            </Link>
          </div>
        </div>

        {/* Footer Section */}

        <div className="footer">
          <div className="footerTitle">
            <img id="LogoMark" />
            {/* This span is just a placeholder. It would be remove after finishing horizontal logo */}
            <span>House of Paws</span>
            {/* Remove till here */}
          </div>
          <div className="footerContainer">
            <div className="floatLeft">
              <p>Development Team</p>
              <div className="usinfo">
                <div className="carlos">
                  <h4 className="personName">Carlos Cesar Valle</h4>
                  <p className="meetTeamText">
                    Frontend Web Developer | UX & Branding Designer
                  </p>
                  <p className="meetTeamText">From: Miami, FL</p>
                  <div className="githubLinkedIn">
                    <a
                      href="https://github.com/carloscesarvalle"
                      target="_blank"
                    >
                      GitHub
                    </a>
                    <div>|</div>
                    <a
                      href="https://www.linkedin.com/in/carloscesarvalle/"
                      target="_blank"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
                <div className="valerie">
                  <h4>Valerie Lee Kang</h4>
                  <p className="meetTeamText">
                    Backend Web Developer | Canvas Developer
                  </p>
                  <p className="meetTeamText">From: Los Angeles, CA</p>
                  <div className="githubLinkedIn">
                    <a href="https://github.com/vlee13" target="_blank">
                      GitHub
                    </a>
                    <div>|</div>
                    <a
                      href="https://www.linkedin.com/in/vlee13/"
                      target="_blank"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
                <div className="dp">
                  <h4>Dionel Panuncia</h4>
                  <p className="meetTeamText">Software Developer</p>
                  <p className="meetTeamText">From: Michigan</p>
                  <div className="githubLinkedIn">
                    <a href="https://github.com/dpanuncia" target="_blank">
                      GitHub
                    </a>
                    <div>|</div>
                    <a
                      href="https://www.linkedin.com/in/dpanuncia/"
                      target="_blank"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="floatRight">
            <h4>Navigation</h4>
            <div className="footerElement">
              <Link to="/fosterdog" className="link">
                <div className="footerElementText">Foster dogs</div>
              </Link>

              <Link to="/vote" className="link">
                <div className="footerElementText">Vote!</div>
              </Link>

              <Link to="/helpothers" className="link">
                <div className="footerElementText">Help others</div>
              </Link>

              <Link to="/contactus" className="link">
                <div className="footerElementText">Contact us</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
  render() {
    return (
      <div>
        {this.displayNavBar()}
        {this.displayAbout()}
      </div>
    );
  }
}
export default About;
