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
    return this.state.dogs.map((eachDog) => {
      return (
        <li>
          <img src={eachDog.image} alt="dogpic" />
          <br />
          {/* <img src={eachDog.image} alt="dogpic" /> */}
          {eachDog.name}
          {`#${eachDog.shelterID}`}

          <br />
          {`Age: ${eachDog.age}`}
          <br />
          {`Weight: ${eachDog.weight}`}
          <br />
          {eachDog.description}
        </li>
      );
    });
  };

  render() {
    return (
      <div>
        {/* {this.displayDogs()} */}
        Here are 10 dogs to vote for
      </div>
    );
  }
}

export default Vote;
