import React, { Component } from "react";
import actions from "../../../services/index.js";
import "../../CSS/Vote.css";
import "../../CSS/NavigationBar.css";
import LineGraph from "./LineGraph";
import PieGraph from "./PieGraph";
import Footer from "./Footer";
import NavBar from "./NavBar";

class Vote extends Component {
  state = {
    dogs: [],
  };
  async componentDidMount() {
    let res = await actions.getDogs();
    console.log("hello", res);
    this.setState({
      dogs: res.data.dogs,
    });
    console.log("state", this.state);
  }

  displayHeader = () => {
    return (
      <div className="container">
        <img className="imageForVote" />
        <div
          className="textForHeroImage"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <h1>Vote.</h1>

          <p style={{ padding: "20px" }}>
            Help us elect our next fostered dog.
          </p>
        </div>
      </div>
    );
  };

  displayDogsToVote = () => {
    return this.state.dogs
      .filter((eachDog) => eachDog.status === "available")
      .map((eachDog, i) => {
        return (
          <div className="eachDog">
            <img src={eachDog.image} alt="dogpic" />
            <div className="voteContainer">
              <p
                style={{
                  fontSize: "30px",
                  fontWeight: "500",
                  padding: "20px",
                }}
              >
                {eachDog.name}
              </p>

              <button
                style={{ padding: "10px" }}
                onClick={() => this.vote(eachDog, i)}
              >
                Vote Here: {eachDog.votes.length}
              </button>
            </div>
            <div className="voteInfo">
              <li>{`ShelterID: #${eachDog.shelterID}`}</li>
              <li>{`Location: ${eachDog.location}`}</li>
              <li>{`Age: ${eachDog.age}`}</li>
              <li>{`Weight: ${eachDog.weight}`}</li>
              <li>{`Description: "${eachDog.descr}"`}</li>
            </div>
          </div>
        );
      });
  };

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
    // console.log(eachDog);
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
        <div className="voteExplanaitionContainer">
          <p style={{ fontSize: "20px", padding: "20px", marginTop: "30px" }}>
            First step, please sign up! When you see the pups, you have three
            votes and you can't vote for the same one twice. Help us decide who
            the lucky winner is!
          </p>
        </div>
        <div>{this.displayDogsToVote()}</div>
        {/* <VoteBar data={this.state.dogs} /> */}
        <div className="voteGraphs">
          <PieGraph data={this.state.dogs} />
          <LineGraph data={this.state.dogs} />
        </div>
        <Footer
          setUser={this.props.setUser}
          user={this.props.user}
          logOut={this.props.logOut}
        ></Footer>
      </div>
    );
  }
}
export default Vote;
