import React, { Component, Fragment } from "react";
import Home from "./components/Home";
import NotFound from "./components/404/NotFound.js";
import SignUp from "./components/auth/SignUp";
import LogIn from "./components/auth/LogIn";
import actions from "./services/index";
import GoogleAuth from "./components/auth/GoogleAuth";
import GoogleAuthLogin from "./components/auth/GoogleAuthLogin";
import { Switch, BrowserRouter, Route, NavLink } from "react-router-dom";
import MainCarrouselPage from "./components/Home/Carrousel/MainCarrouselPage";
import UserLogIn from "./components/Home/LogIn/UserLogIn";
import UserSignUp from "./components/Home/LogIn/UserSignUp";
import UserDonate from "./components/Home/LogIn/UserDonate";
import MenuMainPage from "./components/Home/Menu/MenuMainPage";
import About from "./components/Home/Menu/About";
import FosterDog from "./components/Home/Menu/FosterDog";
import Vote from "./components/Home/Menu/Vote";
import HelpOthers from "./components/Home/Menu/HelpOthers";
import Game from "./components/Home/Menu/Game";
import MeetTeam from "./components/Home/Menu/MeetTeam";
import ContactUs from "./components/Home/Menu/ContactUs";
import AddDog from "./components/AddDog/AddDog";

class App extends Component {
  state = {};

  async componentDidMount() {
    let user = await actions.isLoggedIn();
    this.setState({ ...user.data });
    console.log("coolest ");
  }

  setUser = (user) => this.setState(user);

  logOut = async () => {
    let res = await actions.logOut();
    this.setUser({ email: null, createdAt: null, updatedAt: null, _id: null }); //FIX
  };

  render() {
    return (
      <BrowserRouter>
        {/* <NavLink to="/">Menu |</NavLink> */}
        {/* {this.state.email}
        <nav>
          <NavLink to="/">Menu |</NavLink>

          {this.state.email ? (
            <Fragment>
              <NavLink onClick={this.logOut} to="/">
                Log Out |
              </NavLink>
              <NavLink to="/profile">Profile|</NavLink>
            </Fragment>
          ) : (
            <Fragment>
              <NavLink to="/sign-up">Sign Up |</NavLink>
              <NavLink to="/log-in">Log In |</NavLink>
            </Fragment>
          )} 
        </nav> */}
        <Switch>
          <Route exact path="/" render={() => <MainCarrouselPage />} />
          <Route exact path="/userlogin" render={() => <UserLogIn />} />
          <Route exact path="/usersignup" render={() => <UserSignUp />} />
          <Route exact path="/userdonate" render={() => <UserDonate />} />
          <Route exact path="/menu" render={() => <MenuMainPage />} />
          <Route exact path="/about" render={() => <About />} />
          <Route exact path="/fosterdog" render={() => <FosterDog />} />
          <Route exact path="/vote" render={() => <Vote />} />
          <Route exact path="/helpothers" render={() => <HelpOthers />} />
          <Route exact path="/game" render={() => <Game />} />
          <Route exact path="/meetteam" render={() => <MeetTeam />} />
          <Route exact path="/contactus" render={() => <ContactUs />} />
          <Route exact path="/addDog" render={() => <AddDog />} />

          {/* <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route
            exact
            path="/sign-up"
            render={(props) => <SignUp {...props} setUser={this.setUser} />}
          />
          <Route
            exact
            path="/log-in"
            render={(props) => <LogIn {...props} setUser={this.setUser} />}
          />

          <Route component={NotFound} /> */}
        </Switch>
        {!this.state.email && <GoogleAuth setUser={this.setUser} />}
        {!this.state.email && <GoogleAuthLogin setUser={this.setUser} />}
      </BrowserRouter>
    );
  }
}
export default App;
