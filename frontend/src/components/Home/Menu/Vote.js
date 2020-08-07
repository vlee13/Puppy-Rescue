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
        <div className="textForHeroImage">
          <h1>Vote.</h1>
          <p>Help us elect our next fostered dog.</p>
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
            <div className="voteImg">
              <img src={eachDog.image} alt="dogpic" />
              <br />
            </div>

            <div className="voteInfo">
              <h1>{eachDog.name}</h1>
              <button onClick={() => this.vote(eachDog, i)}>
                {eachDog.votes.length}
              </button>
              <br />
              {`ShelterID: #${eachDog.shelterID}`}
              <br />

              {`Location: ${eachDog.location}`}
              <br />
              {`Age: ${eachDog.age}`}
              <br />
              {`Weight: ${eachDog.weight}`}
              <br />
              {`"${eachDog.descr}"`}
              <br />
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
    console.log(eachDog);
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
          <p className="voteExplanaitionText">
            We can only take one dog to be fostered in this house. Help us
            choose! You have three votes. We can only take one dog to be
            fostered in this house. Help us choose! You have three votes. We can
            only take one dog to be fostered in this house. Help us choose! You
            have three votes. We can only take one dog to be fostered in this
            house. Help us choose! You have three votes. We can only take one
            dog to be fostered in this house. Help us choose! You have three
            votes. We can only take one dog to be fostered in this house. Help
            us choose! You have three votes. We can only take one dog to be
            fostered in this house. Help us choose! You have three votes. We can
            only take one dog to be fostered in this house. Help us choose! You
            have three votes. We can only take one dog to be fostered in this
            house. Help us choose! You have three votes. We can only take one
            dog to be fostered in this house.
          </p>
        </div>
        {this.displayDogsToVote()}
        {/* <VoteBar data={this.state.dogs} /> */}
        <PieGraph data={this.state.dogs} />
        <LineGraph data={this.state.dogs} />
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
