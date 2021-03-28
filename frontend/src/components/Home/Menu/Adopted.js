import React, { Component } from "react";
import actions from "../../../services/index.js";
import { Client } from "@petfinder/petfinder-js";
import "../../CSS/Adopted.css";
import Footer from "./Footer";
import NavBar from "./NavBar";

const client = new Client({
  apiKey: "23pouIgSc9wnfPif1QGkqRi7OU1OmwWwWLwiUXzmpeztRBPJKA",
  secret: "kxra4gyDNa0nq9zxra4Bc6nIH5DjZTDGABfYcEVH",
});

class Adopted extends Component {
  state = {
    testimonialBox: false,
    adopted: [],
    petfinderSearch: [],
    searchParams: { type: "dog" },
  };

  displayHeader = () => {
    return (
      <div className="container">
        <img className="adoptedHeroImage" />
        <div className="textForHeroImage">
          <h1>Our Alumni!</h1>
          <p>
            These are the success stories of all our foster babies that ended up
            finding their fur-ever homes. <br />
            See all our happy endings!
          </p>
        </div>
      </div>
    );
  };

  async componentDidMount() {
    let res = await actions.adoptedDogs();
    let res2 = await client.animal.search({ type: "dog" });

    this.setState({
      adopted: res.data.adopted,
      petfinderSearch: res2.data.animals,
    });
    console.log(res2);
  }

  showPetfinderSearch = () => {
    console.log("petfinder line 103");
    return this.state.petfinderSearch.map((eachdog) => {
      return (
        <div className="petfinderDog">
          <div className="searchImage">
            <img
              src={
                eachdog.photos[0]?.medium ||
                "data:image/png;base64,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"
              }
              alt="Img"
            />
          </div>
          <br />
          <div className="searchDescription">
            {`Name: ${eachdog.name}`}
            <br />
            {`Gender: ${eachdog.gender}`}
            <br />
            {`Age: ${eachdog.age}`}
            <br />
            {`Breed: ${eachdog.breeds?.primary}/${eachdog.breeds?.secondary}`}

            <br />
            {`Address: ${eachdog.contact?.address}`}
            <br />
            {`Email: ${eachdog.contact?.phone}`}
            <br />
            <a href={eachdog.url}>Adopt Here</a>
          </div>
        </div>
      );
    });
  };

  displayAdopted = () => {
    console.log("display dogs", this.state.adopted);
    return this.state.adopted
      .filter((eachDog) => eachDog.status === "adopted")
      .map((eachDog) => {
        return (
          <div className="alumni" key={`dog-key-${eachDog.name}`}>
            <img
              src={eachDog.image}
              alt="adoptionpic"
              style={{ width: "35vw" }}
            />

            <div
              className="alumDescr"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h1>{eachDog.name}</h1>
              {eachDog.descr}
            </div>
          </div>
        );
      });
  };

  handleChange = (event) => {
    let searchCopy = { ...this.state.searchParams };
    searchCopy[event.target.name] = event.target.value;
    this.setState({
      searchParams: searchCopy,
    });
    console.log(this.state);
  };

  handleSubmit = async (event) => {
    console.log("submit line 151");
    event.preventDefault();

    let res3 = await client.animal.search(this.state.searchParams);
    this.setState({
      petfinderSearch: res3.data.animals,
    });
    console.log(res3);
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
        <div className="adoptedExplanaitionContainer">
          <p className="adoptedExplanaitionText">
            Because of you these alumni are homed with a loving family, a warm
            bed, and all the kisses and treats!
            <br />
            Thank you for partnering with us and making this happen.
          </p>
        </div>
        <div className="alumni">{this.displayAdopted()}</div>
        <hr></hr>

        <div>
          <div className="petfinderText">
            <h1>Want to look for dogs to adopt near you?</h1>
            <h2 style={{ fontWeight: "normal", margin: "25px" }}>
              Enter your zipcode/city and any other desired specifications.
            </h2>
          </div>

          <div className="petfinderForm">
            <form onSubmit={this.handleSubmit}>
              <div className="formText">
                <label for="location">Location:</label>

                <input
                  onChange={this.handleChange}
                  name="location"
                  type="text"
                />

                <label for="distance">Distance/Miles:</label>
                <input
                  onChange={this.handleChange}
                  name="distance"
                  type="number"
                />

                <label for="breed">Breed:</label>
                <input onChange={this.handleChange} name="breed" type="text" />
              </div>

              <div className="formRadio">
                <div id="radioflex">
                  <p style={{ fontWeight: "bold" }}>Dog Gender:</p>
                  <div>
                    <input type="radio" id="male" name="gender" value="male" />

                    <label for="male">Male</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                    />
                    <label for="female">Female</label>
                  </div>
                </div>
                <div id="radioflex">
                  <p style={{ fontWeight: "bold" }}>Dog Age:</p>
                  <div>
                    <input type="radio" id="baby" name="age" value="baby" />
                    <label for="baby">Baby</label>
                  </div>
                  <div>
                    <input type="radio" id="young" name="age" value="young" />
                    <label for="young">Young</label>
                  </div>
                  <div>
                    <input type="radio" id="adult" name="age" value="adult" />
                    <label for="adult">Adult</label>
                  </div>
                  <div>
                    <input type="radio" id="senior" name="age" value="senior" />
                    <label for="senior">Senior</label>
                  </div>
                </div>
                <div id="radioflex">
                  <p style={{ fontWeight: "bold" }}>Dog Size:</p>
                  <div>
                    <input type="radio" id="small" name="size" value="small" />
                    <label for="small">Small</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="medium"
                      name="size"
                      value="medium"
                    />
                    <label for="medium">Medium</label>
                  </div>
                  <div>
                    <input type="radio" id="large" name="size" value="large" />
                    <label for="large">Large</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="xlarge"
                      name="size"
                      value="xlarge"
                    />
                    <label for="xlarge">XLarge</label>
                  </div>
                </div>
                <button className="formsubmit" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="displayPetfinder">{this.showPetfinderSearch()}</div>
        </div>
        <Footer
          setUser={this.props.setUser}
          user={this.props.user}
          logOut={this.props.logOut}
        ></Footer>
        {/* <Slider {...settings}>{this.showPetfinderSearch()}</Slider> */}
      </div>
    );
  }
}
export default Adopted;
