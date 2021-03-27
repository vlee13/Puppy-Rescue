import React, { Component } from "react";
import axios from "axios";
import actions from "../../../services/index.js";
import "../../CSS/FosterDog.css";
import "../../CSS/NavigationBar.css";
import Footer from "./Footer";
import NavBar from "./NavBar";

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
        <img className="imageForFosterDog" alt="foster dog img" />
        <div className="textForHeroImage">
          <h1>This cutie is our winner!</h1>
          <p style={{ margin: "20px" }}>Because you voted and we listened.</p>
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
                After a difficult election we have a winner. Thank you so much
                for participating and being awesome. We wouldnt be able to run
                House of Paws without your support.
              </p>
            </div>
            <h1 className="fosterDogName">Meet {eachDog.name}!</h1>

            <div className="fosterDogBodyPage">
              <div className="fosterDogTextInsideBG">
                <p>
                  {eachDog.descr} After a dificult election we have a winner.
                  Thank you so much for participating and being awesome. We
                  wouldnt be able to run House of Paws without your support.
                </p>
                <p style={{ marginTop: "30px" }}>
                  Please donate to our patron account by clicking on the button
                  below.
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
        <NavBar
          setUser={this.props.setUser}
          user={this.props.user}
          logOut={this.props.logOut}
        ></NavBar>
        {this.displayHeader()}
        {this.displayFosterDog()}
        <Footer
          setUser={this.props.setUser}
          user={this.props.user}
          logOut={this.props.logOut}
        ></Footer>
      </div>
    );
  }
}

export default FosterDog;
