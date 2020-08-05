import React, { Component } from "react";
import AddDog from "./AddDog";
import EditDog from "./EditDog";
import actions from "../../services/index";

class AdminPage extends Component {
  state = {
    dogs: [],
    clearVotes: [],
  };

  async componentDidMount() {
    console.log("admin state", this.state);
    let res = await actions.getDogs();
    let res2 = await actions.clearVotes();
    this.setState({
      dogs: res.data.dogs,
      clearVotes: res2.data,
    });
    console.log("here", res, res2);
  }

  displayDogs = () => {
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

  render() {
    return (
      <div>
        <div>
          <AddDog />
        </div>
        <br />
        <div>
          <EditDog />
        </div>
        <br />
        <div>
          <button onClick={() => this.setState({ clearVotes: 0 })}>
            Clear votes
          </button>
          {this.displayDogs()}
        </div>
      </div>
    );
  }
}

export default AdminPage;
