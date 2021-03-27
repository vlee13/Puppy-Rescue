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
                "https://azadchaiwala.pk/getImage?i=&t=course"
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
            <h2>
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
