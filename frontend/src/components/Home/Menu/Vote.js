import React, { Component } from "react";
import { Link } from "react-router-dom";
import actions from "../../../services/index.js";

class Vote extends Component {
  state = {
    showNavbar: true,
    showPage: true,
    showLogIn: false,
    showSignUp: false,
    showMenu: false,
    dogs: [],
  };

  // async componentDidMount() {
  //   let res = await actions.getDogs();
  //   console.log("hello", res);
  //   this.setState({
  //     dogs: res.data.dogs,
  //   });
  // }

  displayDogs = () => {
    return this.state.dogs.map((eachDog, i) => {
      return (
        <li>
          <img src={eachDog.image} alt="dogpic" />
          <br />
          {/* <img src={eachDog.image} alt="dogpic" /> */}
          {eachDog.name}
          {` #${eachDog.shelterID}`}
          {`Location: ${eachDog.location}`}
          <br />
          {eachDog.description}
          <br />

          <button onClick={() => this.vote(eachDog, i)}>
            {eachDog.votes.length}
          </button>
        </li>
      );
    });
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
        <button
          onClick={() =>
            this.setState({
              showMenu: false,
              showNavbar: true,
            })
          }
        >
          X
        </button>
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
        <button
          onClick={() =>
            this.setState({
              showMenu: false,
              showNavbar: true,
            })
          }
        >
          Vote for the next dog I'll foster
        </button>
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

  displayHeader = () => {
    return (
      <div>
        <img src="" alt="logoMark" className="LogoMark" />
        <span className="header">Vote for the next dog I'll foster</span>
        <hr></hr>
      </div>
    );
  };
  // displayDogs = () => {
  //   return (
  //     <div>
  //       <p>I'm waiting for the 10 dogs from Database</p>
  //     </div>
  //   );
  //   return this.state.dogs.map((eachDog) => {
  //     return (
  //       <div>
  //         <img src={eachDog.image} alt="dogpic" className="dogToFoster" />
  //         <br />
  //         <h1>{eachDog.name}</h1>
  //         <div>votes</div>
  //         <ul>{`Shelter Id: ${eachDog.shelterID}`}</ul>
  //         <ul>{`Age: ${eachDog.age}`}</ul>
  //         <ul>{`Weight: ${eachDog.weight}`}</ul>
  //         <p>{eachDog.description}</p>
  //       </div>
  //     );
  //   });
  // };

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

  render() {
    return (
      <div>
        {this.state.showNavbar ? this.displayNavBar() : ""}
        {this.state.showLogIn & !this.state.showMenu ? this.displayLogIn() : ""}
        {this.state.showSignUp ? this.displaySignUp() : ""}
        {this.state.showMenu & !this.state.showLogIn ? this.displayMenu() : ""}
        {!this.state.showLogIn & !this.state.showMenu & !this.state.showSignUp
          ? this.displayHeader()
          : ""}
        {!this.state.showLogIn & !this.state.showMenu & !this.state.showSignUp
          ? this.displayDogs()
          : ""}
      </div>
    );
  }
}

export default Vote;
