import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import actions from "../../../services/index.js";
import "../../CSS/FosterDog.css";
import "../../CSS/NavigationBar.css";
import GoogleAuthLogin from "../../auth/GoogleAuthLogin";
import { GoogleLogout } from "react-google-login";
import Footer from "./Footer";
import NavBar from "../Menu/NavBar";

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
          <h1>This cutie is our winner!</h1>
          <p>Because you voted and we listened.</p>
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
            <div className="electionTextContainer">
              <p className="electionText">
                After a dificult election we have a winner. Thank you so much
                for participating and being awesome. We wouldnt be able to run
                House of Paws without your support. After a dificult election we
                have a winner. Thank you so much for participating and being
                awesome. We wouldnt be able to run House of Paws without your
                support. After a dificult election we have a winner. Thank you
                so much for participating and being awesome. We wouldnt be able
                to run House of Paws without your support. After a dificult
                election we have a winner. Thank you so much for participating
                and being awesome. We wouldnt be able to run House of Paws
                without your support. After a dificult election we have a
                winner. Thank you so much for participating and being awesome.
                We wouldnt be able to run House of Paws without your support.
              </p>
            </div>
            <h1 className="fosterDogName">Meet {eachDog.name}!</h1>

            <div className="fosterDogBodyPage">
              <div className="fosterDogTextInsideBG">
                <p>
                  {eachDog.descr} After a dificult election we have a winner.
                  Thank you so much for participating and being awesome. We
                  wouldnt be able to run House of Paws without your support.
                  After a dificult election we have a winner. Thank you so much
                  for participating and being awesome. We wouldnt be able to run
                  House of Paws without your support. After a dificult election
                  we have a winner. Thank you so much for participating and
                  being awesome. We wouldnt be able to run House of Paws without
                  your support. After a dificult election we have a winner.
                  Thank you so much for participating and being awesome. We
                  wouldnt be able to run House of Paws without your support.
                  After a dificult election we have a winner. Thank you so much
                  for participating and being awesome. We wouldnt be able to run
                  House of Paws without your support. Thank you so much for
                  participating and being awesome. We wouldnt be able to run
                  House of Paws without your support.
                  <br /> <br /> Please donate to our patron account by clicking
                  on the button below.
                </p>
                <div className="donateButtonContainer">
                  <button className="donateButton">
                    <a
                      className="Link"
                      href="https://www.patreon.com/houseofpaws"
                    >
                      DONATE
                    </a>
                  </button>
                </div>
              </div>
            </div>

            {/* <div key={`dog-key-${eachDog.name}`}> */}
            {/* <img src={eachDog.image} alt="fosterdogpic" /> */}
            {/* <br />
              <h1>{eachDog.name}</h1>
              <br />
              <p>{eachDog.descr}</p> */}
          </div>
          // </div>
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
        {this.displayHeader()}
        {this.displayFosterDog()}
      </div>
    );
  }
}

export default FosterDog;
