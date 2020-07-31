import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "./meettheteam.css"

class MeetTeam extends Component {
  state = {
    showNavbar: true,
    showPage: true,
    showLogIn: false,
    showSignUp: false,
    showMenu: false,
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
        <Link
          onClick={() =>
            this.setState({
              showMenu: false,
              showNavbar: true,
            })
          }
        >
          Meet the team
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

  displayMeetTeam = () => {
    return (
      <div>
        <div id="cubeContainer">
          <div id="cubeWrapper">
            <div class="head">
              <h1>MEET THE TEAM</h1>
              <h3>
                {" "}
                <b>
                  We are all dog lovers and we all wanted to do something
                  positive to the community, so as our final project in our
                  IronHack bootcamp journey we decided to give back. House Of
                  Paws is bigger then us, its about helping animals that are in
                  a sense helpless, by providing a home for these adorable
                  creatures and giving them the love they need we are saving
                  canine lifes.{" "}
                </b>{" "}
              </h3>
            </div>
            <div id="cubes">
              <div class="cube p2">
                <div class="name">
                  <h2>Carlos CesarValle</h2>
                  <h3>Software Developer</h3>
                  <h4>
                    <ul>
                      <li>
                        <a href="https://www.linkedin.com/in/carloscesarvalle/">
                          linkedIn<span class="linkedin"></span>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <span class="https://github.com/carloscesarvalle"></span>
                          GitHub
                        </a>
                      </li>
                    </ul>
                  </h4>
                </div>
                <div class="innerBorder"></div>
                <div class="darken"></div>
              </div>
              <div class="cube p1">
                <div class="name">
                  <h2>Dionel Panuncia</h2>
                  <h3>Software Developer</h3>
                  <h4>
                    <ul>
                      <li>
                        <a href="https://www.linkedin.com/in/dpanuncia/">
                          linkedIn<span class="linkedin"></span>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <span class="https://github.com/dpanuncia">
                            GitHub
                          </span>
                        </a>
                      </li>
                    </ul>
                  </h4>
                </div>
                <div class="innerBorder"></div>
                <div class="darken"></div>
              </div>
              <div class="cube p3">
                <div class="name">
                  <h2>Valerie Lee</h2>
                  <h3>Software Developer</h3>
                  <h4>
                    <ul>
                      <li>
                        <a href="https://www.linkedin.com/in/vlee13/">
                          <b>linkedIn</b>
                          <span class="linkedin"></span>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <span class="https://github.com/vlee13">GitHub</span>
                        </a>
                      </li>
                    </ul>
                  </h4>
                </div>
                <div class="innerBorder"></div>
                <div class="darken"></div>
              </div>
            </div>
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
          ? this.displayMeetTeam()
          : ""}
      </div>
    );
  }
}

export default MeetTeam;
