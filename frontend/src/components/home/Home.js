import React, { Component } from "react";
import actions from "../../services/index";
import Burger from "../Burger/Burger";
import TenDogs from "../TenDogs";

class Home extends Component {
  async componentDidMount() {
    //actions.test()
  }
  render() {
    return (
      <div>
        <TenDogs />
        <Burger />
      </div>
    );
  }
}

export default Home;
