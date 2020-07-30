import React, { Component } from "react";
import actions from "../../../services/index.js";

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
  }

  displayDogs = () => {
    return this.state.dogs.map((eachDog, i) => {
      return (
        <li>
          <img src={eachDog.image} alt="dogpic" />
          <br />
          {/* <img src={eachDog.image} alt="dogpic" /> */}
          {eachDog.name}
          {` #${eachDog.shelterID}`}

          <br />
          {`Age: ${eachDog.age}`}
          <br />
          {`Weight: ${eachDog.weight}`}
          <br />
          {`Location: ${eachDog.location}`}
          <br />
          {eachDog.description}
          <br />

          <button onClick={() => this.vote(eachDog, i)}>
            {eachDog.votes.length}
          </button>
        </li>
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
    return <div>{this.displayDogs()}</div>;
  }
}

export default Vote;
