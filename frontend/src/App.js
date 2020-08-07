import React, { Component, Fragment } from "react";
import Home from "./components/Home";
import NotFound from "./components/404/NotFound.js";
import SignUp from "./components/auth/SignUp";
import LogIn from "./components/auth/LogIn";
import actions from "./services/index";
import GoogleAuth from "./components/auth/GoogleAuth";
import GoogleAuthLogin from "./components/auth/GoogleAuthLogin";
import Contact from "./components/ContactUs/ContactUs";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Switch, BrowserRouter, Route, NavLink } from "react-router-dom";
import UserLogIn from "./components/Home/LogIn/UserLogIn";
import UserSignUp from "./components/Home/LogIn/UserSignUp";
import UserDonate from "./components/userdonate/UserDonate";
import MenuMainPage from "./components/Home/Menu/MenuMainPage";
import About from "./components/Home/Menu/About";
import Vote from "./components/Home/Menu/Vote";
import FosterDog from "./components/Home/Menu/FosterDog";
import Adopted from "./components/Home/Menu/Adopted";
import Game from "./components/Home/Menu/Game";
import ContactUs from "./components/Home/Menu/ContactUs";
import AdminPage from "./components/Admin/AdminPage";
import Slider from "./components/Home/Slider";
import NavBar from "./components/Home/Menu/NavBar";
import Footer from "./components/Home/Menu/Footer";

class App extends Component {
  state = {};
  async componentDidMount() {
    let user = await actions.isLoggedIn();
    this.setState({ ...user.data });
    console.log("coolest ");
  }
  setUser = (user) => this.setState(user);
  logOut = async () => {
    console.log("logout");
    let res = await actions.logOut();
    this.setUser({ email: null, createdAt: null, updatedAt: null, _id: null }); //FIX
  };
  test = async () => {
    let res = await actions.sendMail();
  };
  render() {
    return (
      <BrowserRouter>
        <button onClick={this.test}>submit</button>
        <NavBar
          setUser={this.setUser}
          user={this.state}
          logOut={this.logOut}
        ></NavBar>
        {/* {!this.state.email && <GoogleAuth setUser={this.setUser} />}
        {!this.state.email && <GoogleAuthLogin setUser={this.setUser} />} */}
        <Switch>
          {/* <Route
            exact
            path="/home"
            render={(props) => <Home {...props} setUser={this.setUser} />}
          /> */}
          <Route exact path="/" render={() => <Slider />} />
          <Route
            exact
            path="/userlogin"
            render={() => (
              <UserLogIn setUser={this.setUser} user={this.state} />
            )}
          />
          <Route
            exact
            path="/usersignup"
            render={() => (
              <UserSignUp setUser={this.setUser} user={this.state} />
            )}
          />
          {/* <Route exact path="/userdonate" render={() => <UserDonate />} /> */}
          {/* <Route exact path="/menu" render={() => <MenuMainPage />} /> */}
          <Route
            exact
            path="/about"
            render={() => <About setUser={this.setUser} user={this.state} />}
          />
          <Route
            exact
            path="/fosterdog"
            render={() => (
              <FosterDog
                email={this.state.email}
                setUser={this.setUser}
                user={this.state}
              />
            )}
          />
          <Route
            exact
            path="/vote"
            render={() => <Vote setUser={this.setUser} user={this.state} />}
          />

          <Route
            exact
            path="/adopted"
            render={() => <Adopted setUser={this.setUser} user={this.state} />}
          />

          <Route exact path="/game" render={() => <Game />} />

          <Route
            exact
            path="/contactus"
            render={() => (
              <ContactUs setUser={this.setUser} user={this.state} />
            )}
          />

          <Route exact path="/contactus" render={() => <ContactUs />} />

          <Route exact path="/adminpage" render={() => <AdminPage />} />
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    );
  }
}
export default App;
