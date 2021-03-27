import React, { Component } from "react";
import actions from "./services/index";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import UserLogIn from "./components/Home/LogIn/UserLogIn";
import UserSignUp from "./components/Home/LogIn/UserSignUp";
import About from "./components/Home/Menu/About";
import Vote from "./components/Home/Menu/Vote";
import FosterDog from "./components/Home/Menu/FosterDog";
import Adopted from "./components/Home/Menu/Adopted";
import Game from "./components/Home/Menu/Game";
import ContactUs from "./components/Home/Menu/ContactUs";
import AdminPage from "./components/Admin/AdminPage";
import Slider from "./components/Home/Slider";

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
    // let res = await actions.logOut();
    await actions.logOut();
    this.setUser({
      email: null,
      createdAt: null,
      updatedAt: null,
      _id: null,
      role: null,
    }); //FIX
  };
  test = async () => {
    // let res = await actions.sendMail();
    await actions.sendMail();
  };
  render() {
    // const history = useHistory();
    // console.log(history);
    return (
      <BrowserRouter>
        <Switch>
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

          <Route
            exact
            path="/about"
            render={() => (
              <About
                setUser={this.setUser}
                user={this.state}
                logOut={this.logOut}
              />
            )}
          />
          <Route
            exact
            path="/fosterdog"
            render={() => (
              <FosterDog
                email={this.state.email}
                setUser={this.setUser}
                user={this.state}
                logOut={this.logOut}
              />
            )}
          />
          <Route
            exact
            path="/vote"
            render={() => (
              <Vote
                setUser={this.setUser}
                user={this.state}
                logOut={this.logOut}
              />
            )}
          />

          <Route
            exact
            path="/adopted"
            render={() => (
              <Adopted
                setUser={this.setUser}
                user={this.state}
                logOut={this.logOut}
              />
            )}
          />

          <Route exact path="/game" render={() => <Game />} />

          <Route
            exact
            path="/contactus"
            render={() => (
              <ContactUs
                setUser={this.setUser}
                user={this.state}
                logOut={this.logOut}
              />
            )}
          />

          <Route
            exact
            path="/adminpage"
            render={() => (
              <AdminPage
                setUser={this.setUser}
                user={this.state}
                logOut={this.logOut}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
