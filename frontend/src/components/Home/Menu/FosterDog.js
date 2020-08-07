import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import actions from "../../../services/index.js";
import "../../CSS/FosterDog.css";
import NavBar from "./NavBar";
import "../../CSS/NavigationBar.css";
import GoogleAuthLogin from "../../auth/GoogleAuthLogin";
import { GoogleLogout } from "react-google-login";
import Footer from "./Footer";

class FosterDog extends Component {
  state = {
    fosterdog: [],
  };

  async componentDidMount() {
    let res = await actions.fosterDog();
    console.log("hello", res);
    this.setState({
      fosterdog: res.data.fosterdog,
    });
  }

  logout = (response) => {
    console.log(response);
    // const user = {
    //   ...response.profileObj,
    //   password: response.profileObj?.googleId,
    // };
    actions
      .logOut()
      .then((user) => {
        this.props.setUser({
          email: null,
          createdAt: null,
          updatedAt: null,
          _id: null,
        });
      })
      .catch(({ response }) => console.error(response));
  };

  displayHeader = () => {
    return (
      <div className="container">
        <img className="imageForFosterDog" />
        <div className="textForHeroImage">
          <h1>Our fostered dogs!</h1>
          <p>
            These are the winners. <br />
            <br />
            You love them. <br />
            <br />
            They rock and roll.
          </p>
        </div>
      </div>
    );
  };

  displayFosterDog = () => {
    console.log("display dogs", this.state.fosterdog);
    return this.state.fosterdog
      .filter((eachDog) => eachDog.status === "fostered")
      .map((eachDog) => {
        return (
          <div>
            <div className="CompanyName">
              <h1>You voted, we listened!</h1>
              <p>Text here about fostering</p>
            </div>
            <div key={`dog-key-${eachDog.name}`}>
              <img src={eachDog.image} alt="fosterdogpic" />
              <br />
              <h1>{eachDog.name}</h1>
              <br />
              <p>{eachDog.descr}</p>
              <a href="https://www.patreon.com/houseofpaws">
                <button>
                  <b>DONATE</b>
                </button>{" "}
              </a>
            </div>
          </div>
        );
      });
  };

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

  render() {
    return (
      <div>
        {/* {!this.props.email && <GoogleAuth setUser={this.props.setUser} />}
        {!this.props.email && <GoogleAuthLogin setUser={this.props.setUser} />} */}

        {this.displayHeader()}
        {this.displayFosterDog()}
      </div>
    );
  }
}

export default FosterDog;
