import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../CSS/About.css";

class About extends Component {
  state = {
    showNavbar: true,
    showPage: true,
    showLogIn: false,
    showSignUp: false,
    showMenu: false,
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
            <Link to="/fosterdog" className="link">
              <div className="NavBarElementText">Foster dogs!</div>
            </Link>

            <Link to="/vote" className="link">
              <div className="NavBarElementText">
                Vote for the next ones to foster
              </div>
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
            {/* <button
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
        </div>

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
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link
          onClick={() =>
            this.setState({
              showMenu: false,
              showNavbar: true,
            })
          }
        >
          About
        </Link>
        <Link to="/fosterdog">
          <div>The dog I'm fostering now</div>
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

  displayAbout = () => {
    return (
      <div>
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
        <div className="containerGray">
          <img className="background6" />
          <div className="textForBG2">
            <div className="background">
              <h1 className="header">Help other organizations</h1>
              <p className="text">
                We believe in giving back to our community. Here you can find a
                list of other organizations that put a lot of effort helping
                dogs. Please take a look of them and help them as well.
              </p>
              <ul>organization</ul>
              <ul>organization</ul>
              <ul>organization</ul>
              <ul>organization</ul>
              <ul>organization</ul>
              <ul>organization</ul>
              <ul>organization</ul>
              <ul>organization</ul>
            </div>
            {/* <img className="floatingImage" /> */}
          </div>
        </div>
        <div className="meetTeam">
          <div>
            <h1 className="teamText">Meet the Team</h1>
            {/* <h3 className="description">
              We are all animal lovers and we all wanted to do something
              positive for the community, so as our final project in our
              IronHack bootcamp journey we decided to give back. House of Paws
              is bigger than us. By fostering these shelter dogs, we believe we
              can give them a real chance to being adopted into their forever
              homes.
            </h3> */}
          </div>
          <div className="usinfo">
            <div className="carlos">
              <h1 className="personName">Carlos Cesar Valle</h1>
              <p className="meetTeamText">Software Developer</p>
              <p className="meetTeamText">From: Miami, FL</p>
              <div className="githubLinkedIn">
                <a href="https://github.com/carloscesarvalle" target="_blank">
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
              <h1 className="personName">Valerie Lee Kang</h1>
              <p className="meetTeamText">Software Developer</p>
              <p className="meetTeamText">From: Los Angeles, CA</p>
              <div className="githubLinkedIn">
                <a href="https://github.com/vlee13" target="_blank">
                  GitHub
                </a>
                <div>|</div>
                <a href="https://www.linkedin.com/in/vlee13/" target="_blank">
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="dp">
              <h1 className="personName">Dionel Panuncia</h1>
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
        <div className="container">
          <img className="backgroundForGame" />
          <div className="textForGame">
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
          ? this.displayAbout()
          : ""}
      </div>
    );
  }
}
export default About;
