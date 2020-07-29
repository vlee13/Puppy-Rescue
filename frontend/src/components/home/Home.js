import React, { Component } from "react";
import actions from "../../services/index";
import TenDogs from "../TenDogs";

class Home extends Component {
  async componentDidMount() {
    //actions.test()
  }
  render() {
    return (
      <div>
        This is the home
        <TenDogs />
      </div>
    );
  }
}

export default Home;
